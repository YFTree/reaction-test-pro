// ==UserScript==
// @name         反应力测试脚本
// @namespace    http://tampermonkey.net/
// @version      1
// @description  自动点击反应力测试中的绿色圆形
// @author       YFTree
// @match        https://www.arealme.com/reaction-test/cn/
// @grant        none
// @license      MIT
// @downloadURL 
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        const greenCircle = document.querySelector(".tfny-circleGreen");
        if (greenCircle) {
            greenCircle.dispatchEvent(new Event("mousedown"));
        }
    }, 1); // 每1毫秒检查一次，可以根据需要调整
})();
