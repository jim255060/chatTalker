
$(document).ready(function () {

    // top
    $('.top').click(function () {
        $('body, html').animate({ scrollTop: 0 }, 1000);
    })


    // QA展開縮小
    $('.QA_title').click(function () {
        $(this).find('h3').toggleClass('QA_active');
        $(this).siblings('.QA_content').slideToggle('slow');

        $(this).find('.plus').toggle();
        $(this).find('.minus').toggle();
        $(this).parent().siblings().find('.plus').show();
        $(this).parent().siblings().find('.minus').hide();

        $(this).parent().siblings().find('.QA_content').slideUp();
        $(this).parent().siblings().find('h3').removeClass('QA_active');
    })


    // 方案選擇
    $('.member_box li').click(function () {
        $('.item').text($(this).find('#choose').text());
    })
})