// ==UserScript==
// @name        SelectOnFictionpress
// @description Allow select on www.fictionpress.com website.
// @namespace   http://test
// @include     http://www.fictionpress.com/*
// @include     https://www.fictionpress.com/*
// @version     1
// @grant       none
// @license     The Unlicense
// ==/UserScript==

$(document).ready(function () {
    setTimeout(function () {
        $('.storytextp').css({
            "-moz-user-select": "auto",
            "-webkit-user-select": "auto"
        });
    }, 1000);
});
