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
});

$('.js_unfollow_btn').click(function(){
    $(this).addClass('hidden');
    $('.js_follow_btn').removeClass('hidden');
    $('.js_follow_email').removeAttr('disabled');
});
$('.js_follow_btn').click(function(){
    $(this).addClass('hidden');
    $('.js_unfollow_btn').removeClass('hidden');
    $('.js_follow_email').attr('disabled','disabled');
});

// Работа кнопки в избранное (Звездочка)
$('.favorit-forum-item__link').click(function(event){
    event.preventDefault();
    $(this).toggleClass('favorit-forum-item__link_active');
});

$('.favorit-forum-item__link').popover();