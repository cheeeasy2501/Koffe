$(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
        $('.header-container').css('padding', '8px');
        $('header').css('background', 'rgb(255, 255, 255,0.95)');
    } else {
        $('.header-container').css('padding', '24px 0px 24px 0px');
        $('header').css('background', 'rgb(255, 255, 255,1)');
    }
});

var last_id;
var $top_menu = $('nav');
var menu_height = $top_menu.outerHeight(true);
var $menu_items = $top_menu.find('a');
var $scroll_items = $menu_items.map(function() {
    var item = $($(this).attr('href'));
    if (item.length) {
        return item;
    }
});

$(window).scroll(function() {
    var from_top = $(this).scrollTop() + menu_height + 400;
    var mar = parseInt($top_menu.css('margin-bottom'));
    var cur = $scroll_items.map(function() {
        if ($(this).offset().top < from_top + mar) {
            return this;
        }

    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : '';
    if (last_id !== id) {
        last_id = id;
        $menu_items
            .removeClass('active')
            .filter("[href='#" + id + "']")
            .addClass('active');
    }
});

$(document).ready(function() {
    $('.confectionery-title').click(function() {
        $(this).toggleClass('active').next().slideToggle();
        $('.confectionery-title').not(this).removeClass('active').next().slideUp();
    });
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();
        var sc = $(this).attr("href"),
            /*-104 т.к. отступ у нас 104px у main*/
            dn = $(sc).offset().top - 104;
        $(this).addClass('active').siblings().removeClass('active');
        /*
         * sc - в переменную заносим информацию о том, к какому блоку надо перейти
         * dn - определяем положение блока на странице
         */

        $('html, body').animate({ scrollTop: dn }, 100);
        /*
         * 1000 скорость перехода в миллисекундах*/
    });

    $(".owl-aboute-us").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        /*в мс*/
        autoplayHoverPause: true,
        items: 1,
        lazyLoad: true,
        loop: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
    });
});

$('img').click(function() {
    $.fancybox.close();
});