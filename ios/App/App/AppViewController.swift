import UIKit
import WebKit
import Capacitor

/// Root view controller: Capacitor's bridge (bundled web assets, no remote server) plus small native touches.
class AppViewController: CAPBridgeViewController {
    override func capacitorDidLoad() {
        super.capacitorDidLoad()
        // Edge-swipe back/forward through the SPA's hash history, like a native navigation stack.
        webView?.allowsBackForwardNavigationGestures = true
        #if DEBUG
        // Debug builds only: lets the simulator self-test (ios/web-overlay/selftest.js) write to the unified log,
        // so `xcrun simctl spawn booted log stream` sees it (Capacitor's console bridge prints to stdout only).
        webView?.configuration.userContentController.add(SelfTestLogHandler(), name: "selftestLog")
        #endif
    }
}

#if DEBUG
final class SelfTestLogHandler: NSObject, WKScriptMessageHandler {
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        NSLog("%@", String(describing: message.body))
    }
}
#endif
