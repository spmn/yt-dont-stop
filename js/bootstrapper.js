(function() {
    "use strict";

    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("js/payload.js");
    script.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script);
})();
