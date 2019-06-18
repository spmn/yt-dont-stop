// ==UserScript==
// @name         You(Tube) don't stop!
// @namespace    https://github.com/spmn/
// @homepageURL  https://github.com/spmn/yt-dont-stop/
// @downloadURL  https://raw.githubusercontent.com/spmn/yt-dont-stop/master/js/payload.js
// @icon         https://raw.githubusercontent.com/spmn/yt-dont-stop/master/img/icon_128.png
// @version      1.0.0
// @description  Prevents annoying "video paused" dialogs from showing up
// @author       spmn
// @match        *://*.youtube.com/*
// @match        *://*.youtu.be/*
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    const interval = setInterval(() => {
        const yt_act_mgr = document.querySelector("yt-activity-manager");
        if (typeof yt_act_mgr.getTimeSinceActive === "function" && typeof yt.util.activity.getTimeSinceActive === "function") {
            clearInterval(interval);
            yt.util.activity.getTimeSinceActive = yt_act_mgr.getTimeSinceActive = function() {
                return 0; 
            };
        }
    }, 250);
})();
