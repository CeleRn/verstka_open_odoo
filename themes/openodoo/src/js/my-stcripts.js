$(document).ready(function() {
    if ($('.main__header').attr('data-background-image') != undefined) {
        var url = $('.main__header').attr('data-background-image');
        console.log($('.main__header').attr('data-background-image'));
        $('.main__header').css('background-image', 'url(' + url + ')');
    }
});

// Закрытие приветственной панели на форуме
$('.forum_intro__close-icon').click(function(){
    var currentHeight = $('.forum_intro').outerHeight();
    $('.forum_intro').css('height', currentHeight);
    $('.forum_intro').css('height', '0').css('margin', '0').css('padding', '0').css('overflow', 'hidden').css('opacity','0');
})