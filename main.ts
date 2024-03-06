// ==UserScript==
// @name         ZkVerse Game Bot
// @namespace    http://tampermonkey.net/
// @version      2024-03-06
// @description  zalupa
// @author       nazavod
// @match        https://rewards.zkverse.gg/zerg
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zkverse.gg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function waitForPlayZergButton() {
    var playZergButton = document.querySelector('button');

    if (playZergButton && playZergButton.textContent.trim() === "PLAY ZERG") {
        playZergButton.click();
    } else {
        setTimeout(waitForPlayZergButton, 250);
    }
    }

    function waitForStartButton() {
        var startButton = document.querySelector('button');

        if (startButton && startButton.textContent.trim() === "START (-1 TICKET)") {
            startButton.click();
        } else {
            setTimeout(waitForStartButton, 250);
        }

    }

    function checkAndClickButtons() {
        var buttons = document.querySelectorAll('button');

        buttons.forEach(function(button) {
            if (button.textContent.trim() === "EXTRACT!") {
                button.click();
            }
        });

        var divs = document.querySelectorAll('div');

        divs.forEach(function(div) {
            if (div.textContent.trim() === "Try Again!") {
                div.click();
                waitForPlayZergButton();
                waitForStartButton();
            }
        });
    }

    setInterval(checkAndClickButtons, 250);
})();
