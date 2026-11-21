#!/usr/bin/env python3
"""Build imgsrc3/web/<id>.jpg and imgsrc3/catalog3.json from imgsrc3/sources.json.

Runs on GitHub Actions (.github/workflows/media.yml); needs curl + ImageMagick.
Standard library only. Every network call goes through curl.

Licence gate (an image is skipped, never published, if any check fails):
  * Wikimedia Commons: licence read from the Commons API (extmetadata). Allowed:
    CC0, public domain, CC BY x.y, CC BY-SA x.y. Rejected: NC, ND, non-free, unknown.
  * PubMed Central: article licence read from the Europe PMC JATS XML
    (<permissions>). Allowed: CC BY / CC BY-SA / CC0. Rejected: NC, ND, none.
    The figure's own caption/attribution is also scanned: any NC/ND licence,
    "reproduced/used with permission" or a © notice without CC BY -> skipped
    (some journals licence the article CC BY but individual photos BY-NC).
Processing: first frame only, auto-orient, strip EXIF/metadata, sRGB, flatten on
white, resize to fit 1200x1200 (never upscaled, never cropped), JPEG quality 82.
Failures are logged per file and the run continues.
"""
import html, json, os, re, shutil, subprocess, sys, tarfile, tempfile, time, urllib.parse
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "sources.json")
WEB = os.path.join(ROOT, "web")
CATALOG = os.path.join(ROOT, "catalog3.json")
LOG = os.path.join(ROOT, "build-log.json")
UA = "OcelleBot/1.0 (educational; github.com/impeccasper-rgb/ophtalmo-academie)"
XLINK = "{http://www.w3.org/1999/xlink}href"
MAX = 1200
QUALITY = 82

TMP = tempfile.mkdtemp(prefix="media3-")
LOGS = []


def log(id_, status, msg):
    print(f"[{status}] {id_}: {msg}", flush=True)
    LOGS.append({"id": id_, "status": status, "msg": msg})


def curl(url, out, params=None, timeout=180):
    """Download url to out with curl; returns True on success."""
    cmd = ["curl", "-fsSL", "--retry", "3", "--retry-delay", "5", "--connect-timeout", "30",
           "--max-time", str(timeout), "-A", UA, "-o", out]
    if params:
        cmd += ["-G"]
        for k, v in params.items():
            cmd += ["--data-urlencode", f"{k}={v}"]
    cmd.append(url)
    r = subprocess.run(cmd, capture_output=True, text=True)
    time.sleep(1)  # be polite to Wikimedia / EBI / NCBI
    if r.returncode != 0:
        print(f"    curl {r.returncode} {url} {r.stderr.strip()[:200]}", flush=True)
        try:
            os.remove(out)
        except OSError:
            pass
        return False
    return os.path.exists(out) and os.path.getsize(out) > 0


def text_of(el):
    return re.sub(r"\s+", " ", "".join(el.itertext())).strip() if el is not None else ""


def strip_html(s):
    s = re.sub(r"<[^>]+>", " ", s or "")
    return re.sub(r"\s+", " ", html.unescape(s)).strip()


# ---------------------------------------------------------------- licences
def licence_from_url(u):
    u = (u or "").lower()
    if "publicdomain/zero" in u:
        return "CC0 1.0"
    if "publicdomain/mark" in u:
        return "Public domain"
    m = re.search(r"licenses/(by(?:-[a-z]{2})*)/(\d\.\d)", u)
    if m:
        return "CC " + m.group(1).upper() + " " + m.group(2)
    return None


def allowed_licence(name):
    """True for CC0 / PD / CC BY / CC BY-SA; False for NC/ND/other/unknown."""
    n = (name or "").lower().strip()
    if not n:
        return False
    if re.search(r"(^|[\s-])(nc|nd)([\s-]|$)|non-?commercial|no ?deriv|fair use|non-free|all rights reserved", n):
        return False
    if re.match(r"^(cc0|cc-zero|public domain|pd\b|pd-|no restrictions)", n):
        return True
    return bool(re.match(r"^cc[ -]by(-sa)?[ -]\d(\.\d)?", n))


def licence_url_for(name):
    n = (name or "").upper()
    if n.startswith("CC0"):
        return "https://creativecommons.org/publicdomain/zero/1.0/"
    m = re.match(r"CC[ -]BY(-SA)?[ -](\d\.\d)", n)
    if m:
        return f"https://creativecommons.org/licenses/by{(m.group(1) or '').lower()}/{m.group(2)}/"
    return None


# ---------------------------------------------------------------- Commons
def resolve_commons(s):
    name = s["resolve"]["commons_file"]
    meta = os.path.join(TMP, s["id"] + ".commons.json")
    ok = curl("https://commons.wikimedia.org/w/api.php", meta, params={
        "action": "query", "format": "json", "formatversion": "2", "redirects": "1", "uselang": "en",
        "prop": "imageinfo", "iiprop": "url|size|mime|extmetadata", "titles": "File:" + name})
    if not ok:
        raise RuntimeError("Commons API unreachable")
    data = json.load(open(meta, encoding="utf-8"))
    pages = data.get("query", {}).get("pages", [])
    if not pages or pages[0].get("missing") or not pages[0].get("imageinfo"):
        raise RuntimeError("file not found on Commons: " + name)
    ii = pages[0]["imageinfo"][0]
    em = ii.get("extmetadata", {})
    g = lambda k: strip_html((em.get(k) or {}).get("value", ""))
    lic = g("LicenseShortName")
    if g("NonFree").lower() == "true":
        raise RuntimeError(f"licence rejected (non-free): {lic}")
    if not allowed_licence(lic):
        raise RuntimeError(f"licence rejected: {lic or 'none'}")
    lic_url = g("LicenseUrl") or licence_url_for(lic)
    author = g("Artist") or g("Credit") or "Wikimedia Commons contributor"
    return {
        "download": ii["url"], "resolved_url": ii["url"], "page_url": ii.get("descriptionurl") or s["page_url"],
        "license": lic, "license_url": lic_url, "author": author,
        "source_description": g("ImageDescription")[:1200], "credit": g("Credit")[:300],
        "attribution_required": g("AttributionRequired"),
    }


# ---------------------------------------------------------------- PMC
_xml_cache = {}


def pmc_xml(pmcid):
    if pmcid in _xml_cache:
        return _xml_cache[pmcid]
    out = os.path.join(TMP, pmcid + ".xml")
    if not curl(f"https://www.ebi.ac.uk/europepmc/webservices/rest/{pmcid}/fullTextXML", out):
        raise RuntimeError("Europe PMC full-text XML unavailable")
    raw = open(out, "rb").read()
    raw = re.sub(rb"<!DOCTYPE[^>]*>", b"", raw, count=1)
    root = ET.fromstring(raw)
    _xml_cache[pmcid] = root
    return root


def article_licence(root):
    perms = root.find(".//article-meta/permissions")
    if perms is None:
        perms = root.find(".//permissions")
    if perms is None:
        return None, None, ""
    blob = ET.tostring(perms, encoding="unicode")
    urls = re.findall(r"https?://creativecommons\.org/[^\s\"'<>]+", blob)
    name = None
    for u in urls:
        name = licence_from_url(u)
        if name:
            return name, u.rstrip(".,;)"), text_of(perms)
    t = text_of(perms)
    if re.search(r"Creative Commons Attribution(?! ?-? ?Non)(?! ?-? ?No ?Deriv)", t) and not re.search(r"non-?commercial|no ?deriv", t, re.I):
        m = re.search(r"Attribution(?: ?-? ?ShareAlike)? ?(\d\.\d)?", t)
        ver = (m.group(1) if m else None) or "4.0"
        name = ("CC BY-SA " if "ShareAlike" in t else "CC BY ") + ver
        return name, licence_url_for(name), t
    return None, None, t


def norm_label(s):
    s = (s or "").lower().replace("fig.", "figure ").replace("fig ", "figure ")
    return re.sub(r"[^a-z0-9]", "", s)


def find_fig(root, want):
    figs = list(root.iter("fig"))
    w = norm_label(want)
    for f in figs:
        if norm_label(text_of(f.find("label"))) == w:
            return f
    for f in figs:  # label sometimes sits in the caption title ("Image 1.")
        cap = f.find("caption")
        head = text_of(cap.find("title")) if cap is not None and cap.find("title") is not None else text_of(cap)[:40]
        if norm_label(head).startswith(w):
            return f
    if w in ("image", "figure") and len(figs) == 1:
        return figs[0]
    return None


FIG_BAD = re.compile(r"by-nc|by-nd|nc-sa|nc-nd|non-?commercial|no ?deriv|(reproduced|reprinted|used|adapted) with (kind )?permission|courtesy of", re.I)


def figure_rights_ok(fig):
    blob = " ".join(text_of(fig.find(t)) for t in ("caption", "attrib", "permissions"))
    if FIG_BAD.search(blob):
        return False, "figure-level restriction: " + FIG_BAD.search(blob).group(0)
    if re.search(r"©|\(c\)\s|copyright", blob, re.I) and not re.search(r"cc[ -]by(?!-n)", blob, re.I):
        return False, "figure-level copyright notice without CC BY"
    return True, ""


def authors_from_xml(root):
    names = []
    for c in root.iter("contrib"):
        if c.get("contrib-type") not in (None, "author"):
            continue
        sn, gn = c.find(".//surname"), c.find(".//given-names")
        if sn is not None:
            names.append((text_of(gn) + " " + text_of(sn)).strip())
    journal = text_of(root.find(".//journal-title"))
    year = text_of(root.find(".//pub-date/year"))
    au = ", ".join(names[:3]) + (" et al." if len(names) > 3 else "")
    return " — ".join(x for x in (au, f"{journal} {year}".strip()) if x)


def oa_package_member(pmcid, href):
    """Fallback: PMC OA web service -> tgz package -> extract the figure file."""
    meta = os.path.join(TMP, pmcid + ".oa.xml")
    if not curl("https://www.ncbi.nlm.nih.gov/pmc/utils/oa/oa.fcgi", meta, params={"id": pmcid}):
        return None
    m = re.search(r'href="([^"]+\.tar\.gz)"', open(meta, encoding="utf-8", errors="replace").read())
    if not m:
        return None
    link = m.group(1).replace("ftp://", "https://")
    tgz = os.path.join(TMP, pmcid + ".tgz")
    if not os.path.exists(tgz) and not curl(link, tgz, timeout=600):
        return None
    base = os.path.splitext(os.path.basename(href))[0].lower()
    with tarfile.open(tgz) as tf:
        cands = [mb for mb in tf.getmembers() if mb.isfile()
                 and os.path.splitext(os.path.basename(mb.name))[0].lower() == base
                 and os.path.splitext(mb.name)[1].lower() in (".jpg", ".jpeg", ".png", ".gif", ".tif", ".tiff")]
        cands.sort(key=lambda mb: [".jpg", ".jpeg", ".png", ".gif", ".tif", ".tiff"].index(os.path.splitext(mb.name)[1].lower()))
        if not cands:
            return None
        out = os.path.join(TMP, pmcid + "-" + os.path.basename(cands[0].name))
        with tf.extractfile(cands[0]) as fsrc, open(out, "wb") as fdst:
            shutil.copyfileobj(fsrc, fdst)
        return out


def resolve_pmc(s):
    pmcid, want = s["resolve"]["pmcid"], s["resolve"]["fig"]
    root = pmc_xml(pmcid)
    lic, lic_url, lic_text = article_licence(root)
    if not allowed_licence(lic):
        raise RuntimeError(f"article licence rejected: {lic or 'none found'} ({lic_text[:120]})")
    fig = find_fig(root, want)
    if fig is None:
        labels = [text_of(f.find("label")) for f in root.iter("fig")]
        raise RuntimeError(f"figure '{want}' not found (labels: {labels})")
    ok, why = figure_rights_ok(fig)
    if not ok:
        raise RuntimeError(why)
    g = fig.find(".//graphic")
    href = g.get(XLINK) if g is not None else None
    if not href:
        raise RuntimeError("figure has no graphic href")
    author = s.get("author") or ""
    if not author or author.startswith("Authors of"):
        author = authors_from_xml(root) or author
    exts = [""] if re.search(r"\.(jpe?g|png|gif|tiff?)$", href, re.I) else [".jpg", ".png", ".gif"]
    cands = [f"https://europepmc.org/articles/{pmcid}/bin/{href}{e}" for e in exts]
    return {"download_candidates": cands, "href": href, "pmcid": pmcid,
            "license": lic, "license_url": lic_url, "author": author,
            "source_description": text_of(fig.find("caption"))[:1500],
            "credit": text_of(fig.find("attrib"))[:300]}


# ---------------------------------------------------------------- images
IM = shutil.which("magick")
CONVERT = [IM] if IM else ["convert"]
IDENTIFY = [IM, "identify"] if IM else ["identify"]


def is_image(path):
    r = subprocess.run(IDENTIFY + ["-quiet", path + "[0]"], capture_output=True, text=True)
    return r.returncode == 0


def to_web(src, dst):
    cmd = CONVERT + ["-quiet", src + "[0]", "-auto-orient", "-strip", "-colorspace", "sRGB",
                     "-background", "white", "-alpha", "remove", "-alpha", "off",
                     "-resize", f"{MAX}x{MAX}>", "-sampling-factor", "4:2:0",
                     "-interlace", "JPEG", "-quality", str(QUALITY), "jpeg:" + dst]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        raise RuntimeError("ImageMagick: " + r.stderr.strip()[:200])
    r = subprocess.run(IDENTIFY + ["-format", "%w %h", dst], capture_output=True, text=True)
    w, h = (int(x) for x in r.stdout.split())
    return w, h


def main():
    doc = json.load(open(SRC, encoding="utf-8"))
    items = doc["images"] if isinstance(doc, dict) else doc
    os.makedirs(WEB, exist_ok=True)
    try:
        previous = {c["id"]: c for c in json.load(open(CATALOG, encoding="utf-8"))}
    except (OSError, ValueError):
        previous = {}
    catalog = []
    keep = set()
    for s in items:
        id_ = s["id"]
        try:
            if s["source"] == "commons":
                info = resolve_commons(s)
                cands = [info["download"]]
            elif s["source"] == "pmc":
                info = resolve_pmc(s)
                cands = info["download_candidates"]
            else:
                if not allowed_licence(s.get("license")):
                    raise RuntimeError("licence rejected: " + str(s.get("license")))
                info = {"license": s["license"], "license_url": s.get("license_url"), "author": s.get("author")}
                cands = [s["url"]]
            raw = os.path.join(TMP, id_ + "_download")  # no extension: ImageMagick sniffs the format
            got = None
            for u in cands:
                if curl(u, raw) and is_image(raw):
                    got = u
                    break
            if not got and s["source"] == "pmc":
                p = oa_package_member(info["pmcid"], info["href"])
                if p and is_image(p):
                    raw, got = p, f"PMC OA package ({info['pmcid']}) / {info['href']}"
            if not got:
                raise RuntimeError("download failed: " + " | ".join(cands))
            dst = os.path.join(WEB, id_ + ".jpg")
            w, h = to_web(raw, dst)
            keep.add(id_ + ".jpg")
            entry = {
                "id": id_, "file": f"imgsrc3/web/{id_}.jpg",
                "title": s["title"], "caption": s["caption"],
                "license": info["license"], "license_url": info.get("license_url") or licence_url_for(info["license"]),
                "author": info.get("author") or s.get("author"),
                "page_url": info.get("page_url") or s["page_url"],
                "source_url": got, "source": s["source"], "doi": s.get("doi"), "article": s.get("article"),
                "module": s["module"], "exam": s.get("exam"), "topics": s.get("topics", []),
                "w": w, "h": h, "bytes": os.path.getsize(dst),
                "modified": "resized/re-encoded only (max 1200 px, no crop)",
                "share_alike": "BY-SA" in (info["license"] or "").upper(),
                "caption_basis": s.get("caption_basis"),
                "source_description": info.get("source_description", ""),
                "credit": info.get("credit", ""),
            }
            if s["source"] == "pmc" and s.get("license") and s["license"] != info["license"]:
                entry["licence_note"] = f"expected {s['license']}, source says {info['license']}"
            catalog.append(entry)
            log(id_, "ok", f"{info['license']} {w}x{h} <- {got}")
        except Exception as e:  # one bad file never stops the run
            msg = str(e)
            rights = re.search(r"licence|figure-level|not found on Commons", msg)
            old = previous.get(id_)
            if old and not rights and os.path.exists(os.path.join(WEB, id_ + ".jpg")):
                catalog.append(old)  # transient failure: keep the last good build
                keep.add(id_ + ".jpg")
                log(id_, "kept-previous", msg)
            else:
                log(id_, "skip", msg)
    # remove web files whose id is no longer published (licence revoked, entry removed)
    for f in os.listdir(WEB):
        if f.endswith(".jpg") and f not in keep:
            os.remove(os.path.join(WEB, f))
            print(f"[removed] {f}", flush=True)
    catalog.sort(key=lambda c: c["id"])
    json.dump(catalog, open(CATALOG, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    json.dump({"built": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "ok": len(catalog),
               "skipped": sum(1 for l in LOGS if l["status"] == "skip"), "log": LOGS},
              open(LOG, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"done: {len(catalog)} published, {sum(1 for l in LOGS if l['status'] == 'skip')} skipped")
    shutil.rmtree(TMP, ignore_errors=True)


if __name__ == "__main__":
    sys.exit(main())
