$(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
        $('.header-container').css('padding', '8px 0');
        $('header').css('background', 'rgb(255, 255, 255,0.95)');
    } else {
        $('.header-container,.header').removeAttr('style');
        // $('.header-container').css('padding', '24px 0px 24px 0px');
        // $('header').css('background', 'rgb(255, 255, 255,1)');
    }
});

var last_id;
var $top_menu = document.documentElement.clientWidth>=600 ? $('#top-menu'):$('#top-mobile-menu .menu-mobile-links__block');
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
        mouseDrag:false,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
    });
});

$('img').click(function() {
    $.fancybox.close();
});

$('.fixed-icon-menu').click(function()
{
    $('#top-mobile-menu,.background').css('display','flex'); 
    $('html').css('overflow','hidden');
    setTimeout(function(){
        $('#top-mobile-menu').css('transform','translateY(0%)')
        $('#top-mobile-menu,.background').css('opacity','1');
    },100)
})
$('.background').click(function(){
    $('#top-mobile-menu').css('transform','translateY(105%)')
    $('#top-mobile-menu,.background').css('opacity','0');
    setTimeout(function()
    {
        $('html,#top-mobile-menu,.background').removeAttr('style');
    },300)
  
})