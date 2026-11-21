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
        "prop": "imageinfo", "iiprop": "url|size|mime|user|extmetadata", "titles": "File:" + name})
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
    author = g("Artist") or g("Credit") or (("Wikimedia Commons user " + ii["user"]) if ii.get("user") else "Wikimedia Commons contributor")
    author = re.split(r"\s*\.?\s*When using this image", author)[0].strip(" .")[:200]
    return {
        "download": ii["url"], "resolved_url": ii["url"], "page_url": ii.get("descriptionurl") or s["page_url"],
        "license": lic, "license_url": lic_url, "author": author,
        "source_description": g("ImageDescription")[:1200], "credit": g("Credit")[:300],
        "attribution_required": g("AttributionRequired"),
    }


# ---------------------------------------------------------------- PMC
_xml_cache = {}
_oa_cache = {}
_pkg_cache = {}
IMG_EXT = (".jpg", ".jpeg", ".png", ".gif", ".webp", ".tif", ".tiff")


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


def oa_record(pmcid):
    """PMC OA web service record: {'license': 'CC BY', 'links': {'tgz': url, 'pdf': url}} or {'error': ...}."""
    if pmcid in _oa_cache:
        return _oa_cache[pmcid]
    out = os.path.join(TMP, pmcid + ".oa.xml")
    rec = {"links": {}}
    if curl("https://www.ncbi.nlm.nih.gov/pmc/utils/oa/oa.fcgi", out, params={"id": pmcid}):
        t = open(out, encoding="utf-8", errors="replace").read()
        m = re.search(r'<record[^>]*\blicense="([^"]*)"', t)
        if m:
            rec["license"] = m.group(1)
        for fmt, href in re.findall(r'<link[^>]*format="([^"]+)"[^>]*href="([^"]+)"', t):
            rec["links"][fmt] = href.replace("ftp://", "https://")
        m = re.search(r'<error[^>]*code="([^"]+)"', t)
        if m:
            rec["error"] = m.group(1)
    _oa_cache[pmcid] = rec
    return rec


def _norm_oa_licence(s):
    """'CC BY' / 'CC BY-SA' / 'CC0' from the OA service -> a versionless name ('CC BY 4.0' assumed only for display)."""
    s = (s or "").strip().upper().replace("_", " ")
    if s in ("CC0", "CC 0", "PUBLIC DOMAIN"):
        return "CC0 1.0"
    m = re.match(r"CC[ -]?BY(-SA)?$", s)
    if m:
        return "CC BY" + (m.group(1) or "")
    return s or None


def article_licence(root, pmcid=None):
    """Return (name, url, evidence). Looks at every licence element/attribute in <front>, then the
    licence text, then the PMC OA service. Never guesses: no evidence -> (None, None, evidence)."""
    front = root.find(".//front")
    if front is None:
        front = root
    urls, texts = [], []
    for el in front.iter():
        tag = el.tag.split("}")[-1] if isinstance(el.tag, str) else ""
        for v in el.attrib.values():
            if "creativecommons.org" in v:
                urls.append(v)
        if tag in ("license_ref", "license-ref") and el.text:
            urls.append(el.text.strip())
        if tag in ("license", "permissions"):
            texts.append(text_of(el))
    blob = ET.tostring(front, encoding="unicode")
    urls += re.findall(r"https?://(?:www\.)?creativecommons\.org/[^\s\"'<>]+", blob)
    names = [n for n in (licence_from_url(u) for u in urls) if n]
    # prefer the most restrictive statement found (an NC anywhere wins -> rejected)
    if names:
        bad = [n for n in names if not allowed_licence(n)]
        n = bad[0] if bad else names[0]
        u = next(u for u in urls if licence_from_url(u) == n)
        return n, u.rstrip(".,;)"), "url"
    t = " ".join(texts)
    if re.search(r"non-?commercial|no-?deriv|\bCC[ -]BY-N[CD]", t, re.I):
        return "CC BY-NC (text)", None, t[:400]
    m = re.search(r"\bCC[ -]?BY(-SA)?[ -]?(\d\.\d)?\b", t)
    if m:
        name = "CC BY" + (m.group(1) or "") + " " + (m.group(2) or "4.0")
        return name, licence_url_for(name), t[:400]
    if re.search(r"Creative\W+Commons\W+Attribution", t, re.I):
        sa = re.search(r"Share\W*Alike", t, re.I)
        ver = re.search(r"Attribution[^.]{0,40}?(\d\.\d)", t)
        name = ("CC BY-SA " if sa else "CC BY ") + (ver.group(1) if ver else "4.0")
        return name, licence_url_for(name), t[:400]
    if pmcid:
        rec = oa_record(pmcid)
        n = _norm_oa_licence(rec.get("license"))
        if n and allowed_licence(n + (" 4.0" if not re.search(r"\d", n) else "")):
            return n, licence_url_for(n + " 4.0") if not re.search(r"\d", n) else licence_url_for(n), "PMC OA service license=" + rec.get("license", "")
        if n:
            return n, None, "PMC OA service license=" + rec.get("license", "")
    return None, None, (t or blob)[:600]


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
        return False, "figure-level restriction: " + FIG_BAD.search(blob).group(0) + " | " + blob[:300]
    if re.search(r"©|\(c\)\s|copyright", blob, re.I) and not re.search(r"cc[ -]by(?!-n)", blob, re.I):
        return False, "figure-level copyright notice without CC BY | " + blob[:300]
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


def _stem(name):
    b = os.path.basename(name).lower()
    while True:
        r, e = os.path.splitext(b)
        if e in IMG_EXT:
            b = r
        else:
            return b


def _pick(names, href):
    """Best member for a figure href: same stem, preferred formats first."""
    st = _stem(href)
    c = [n for n in names if _stem(n) == st and os.path.splitext(n)[1].lower() in IMG_EXT]
    pref = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".tif", ".tiff"]
    c.sort(key=lambda n: pref.index(os.path.splitext(n)[1].lower()))
    return c[0] if c else None


def from_oa_tgz(pmcid, href):
    rec = oa_record(pmcid)
    link = rec["links"].get("tgz")
    if not link:
        return None, "OA service: no tgz (" + rec.get("error", "no record") + ")"
    tgz = os.path.join(TMP, pmcid + ".tgz")
    if not os.path.exists(tgz) and not curl(link, tgz, timeout=600):
        return None, "tgz download failed " + link
    with tarfile.open(tgz) as tf:
        members = {m.name: m for m in tf.getmembers() if m.isfile()}
        best = _pick(list(members), href)
        if not best:
            return None, "tgz has no file for " + href
        out = os.path.join(TMP, pmcid + "-tgz-" + os.path.basename(best))
        with tf.extractfile(members[best]) as fs, open(out, "wb") as fd:
            shutil.copyfileobj(fs, fd)
        return out, link + " :: " + best


def from_s3(pmcid, href):
    """PMC Article Datasets on AWS (s3://pmc-oa-opendata), public HTTPS listing."""
    lst = os.path.join(TMP, pmcid + ".s3.xml")
    if not curl("https://pmc-oa-opendata.s3.amazonaws.com/", lst, params={"list-type": "2", "prefix": pmcid + "."}):
        return None, "S3 listing failed"
    keys = re.findall(r"<Key>([^<]+)</Key>", open(lst, encoding="utf-8", errors="replace").read())
    best = _pick(keys, href)
    if not best:
        return None, f"S3: no file for {href} ({len(keys)} keys)"
    url = "https://pmc-oa-opendata.s3.amazonaws.com/" + urllib.parse.quote(best)
    out = os.path.join(TMP, pmcid + "-s3-" + os.path.basename(best))
    return (out, url) if curl(url, out) else (None, "S3 download failed " + url)


def from_epmc_zip(pmcid, href):
    import zipfile
    for params in ({"includeInlineImage": "true"}, None):
        z = os.path.join(TMP, pmcid + (".inl" if params else "") + ".zip")
        url = f"https://www.ebi.ac.uk/europepmc/webservices/rest/{pmcid}/supplementaryFiles"
        if not os.path.exists(z) and not curl(url, z, params=params, timeout=600):
            continue
        try:
            with zipfile.ZipFile(z) as zf:
                best = _pick(zf.namelist(), href)
                if best:
                    out = os.path.join(TMP, pmcid + "-zip-" + os.path.basename(best))
                    with zf.open(best) as fs, open(out, "wb") as fd:
                        shutil.copyfileobj(fs, fd)
                    return out, url + (" (inline images)" if params else "") + " :: " + best
        except zipfile.BadZipFile:
            continue
    return None, "Europe PMC supplementaryFiles: no file for " + href


def from_epmc_bin(pmcid, href):
    st = _stem(href)
    tried = []
    for e in ([os.path.splitext(href)[1]] if os.path.splitext(href)[1].lower() in IMG_EXT else []) + [".jpg", ".png", ".gif"]:
        url = f"https://europepmc.org/articles/{pmcid}/bin/{st}{e}"
        if url in tried:
            continue
        tried.append(url)
        out = os.path.join(TMP, pmcid + "-bin-" + st + e)
        if curl(url, out):
            return out, url
    return None, "europepmc bin failed"


def resolve_pmc(s):
    pmcid, want = s["resolve"]["pmcid"], s["resolve"]["fig"]
    root = pmc_xml(pmcid)
    lic, lic_url, evidence = article_licence(root, pmcid)
    if not allowed_licence(lic if (lic and re.search(r"\d", lic)) else (lic or "") + " 4.0"):
        raise RuntimeError(f"article licence rejected: {lic or 'none found'} | evidence: {evidence}")
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
    if lic and not re.search(r"\d", lic):  # versionless name from the OA service: keep the manifest's version
        exp = s.get("license") or ""
        lic = exp if exp.upper().startswith(lic.upper()) else lic
        lic_url = licence_url_for(lic) or lic_url
    return {"href": href, "pmcid": pmcid, "license": lic, "license_url": lic_url, "author": author,
            "licence_evidence": evidence if evidence != "url" else "licence URL in article XML",
            "source_description": text_of(fig.find("caption"))[:1500],
            "credit": text_of(fig.find("attrib"))[:300]}


def fetch_pmc_figure(info):
    """Try every route; return (path, source string) or raise with all reasons."""
    reasons = []
    for fn in (from_oa_tgz, from_s3, from_epmc_zip, from_epmc_bin):
        try:
            p, where = fn(info["pmcid"], info["href"])
        except Exception as e:  # corrupt archive etc.
            p, where = None, f"{fn.__name__}: {e}"
        if p and is_image(p):
            return p, where
        reasons.append(where if not p else f"{where} (not an image)")
    raise RuntimeError("download failed: " + " | ".join(reasons))

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
            pmc_file = None
            if s["source"] == "commons":
                info = resolve_commons(s)
                cands = [info["download"]]
            elif s["source"] == "pmc":
                info = resolve_pmc(s)
                pmc_file = fetch_pmc_figure(info)
                cands = []
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
            if pmc_file:
                raw, got = pmc_file
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
            if info.get("licence_evidence"):
                entry["licence_evidence"] = info["licence_evidence"][:300]
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
