// ==UserScript==
// @name        lib.rus.ec
// @namespace   
// @description Script allows to read books without login/registration, removing annoying popup
// @include     http://lib.rus.ec/*
// @include     https://lib.rus.ec/*
// @version     1
// @grant       none
// @license     The Unlicense
// ==/UserScript==

$(document).ready(function () {
    $('.lsp-overlay').css('left', 9000);
});
