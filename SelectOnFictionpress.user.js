// ==UserScript==
// @name        SelectOnFictionpress
// @namespace   http://
// @include     http://www.fictionpress.com/*
// @include     https://www.fictionpress.com/*
// @version     1
// @grant       none
// @license     The Unlicense
// ==/UserScript==

$(document).ready(function () {
    $('.storytextp').css('-moz-user-select', 'auto')
});
