$(document).ready(function() {
    if ($('.main__header').attr('data-background-image') != undefined) {
        var url = $('.main__header').attr('data-background-image');
        console.log($('.main__header').attr('data-background-image'));
        $('.main__header').css('background-image', 'url(' + url + ')');
    }
});