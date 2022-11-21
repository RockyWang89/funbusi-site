new WOW().init();

//banner上的文字滚动
$(function () {
    $("#funbusi_slider").responsiveSlides({
        auto: true,
        pager: false,
        nav: false,
        speed: 500,
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
        }
    });
});

/*使点选菜单项时，页面可以平滑滚动到响应位置*/
jQuery(document).ready(function ($) {
    $('.scroll').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $(".top_btn").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".top_btn").fadeIn(1500);
            } else {
                $(".top_btn").fadeOut(1500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $(".top_btn").click(function () {
            $('body,html').animate({
                    scrollTop: 0
                },
                1000);
            return false;
        });
    });
});