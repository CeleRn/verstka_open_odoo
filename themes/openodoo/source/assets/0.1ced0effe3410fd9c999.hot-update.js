webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

$(document).ready(function () {
    if ($('.main__header').attr('data-background-image') != undefined) {
        var url = $('.main__header').attr('data-background-image');
        console.log($('.main__header').attr('data-background-image'));
        $('.main__header').css('background-image', 'url(' + url + ')');
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})