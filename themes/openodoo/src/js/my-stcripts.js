$(document).ready(function() {
    if ($('.header').attr('data-background-image') != undefined) {
        var url = $('.header').attr('data-background-image');
        console.log($('.header').attr('data-background-image'));
        $('.header').css('background-image', 'url(' + url + ')');
    }
});