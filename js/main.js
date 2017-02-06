$(document).ready(function() {

    // Preloader
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    /* <![CDATA[ */
    function externalLinks() {
        links = document.getElementsByTagName("a");
        for (i = 0; i < links.length; i++) {
            link = links[i];
            if (link.getAttribute("href") && link.getAttribute("rel") == "external")
                link.target = "_blank";
        }
    }
    window.onload = externalLinks;
    /* ]]> */


    // tooltips
    

    // копировать номер телефона в буфер обмена
    var copyPhoneBtn = document.querySelector('.phone');
    copyPhoneBtn.addEventListener('click', function(event) {
        // Выборка ссылки с электронной почтой 
        var emailLink = document.querySelector('.phone');
        var range = document.createRange();
        range.selectNode(emailLink);
        window.getSelection().addRange(range);

        try {
            // копирование
            var successful = document.execCommand('copy');
            $('.tooltip_li').popover('show');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy email command was ' + msg);
            setTimeout(function(){$('.tooltip_li').popover('destroy')},1600);
        } catch (err) {
            console.log('unable to copy');
        }
        window.getSelection().removeAllRanges();
    });

    // Slider
    $('.slider-content').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.slider-content').on('swipe', function(){
        if($('.slider_about').hasClass('slick-active')){
            $('.tab_about').addClass('active');
            $('#about').addClass('active in');
        } else{
            $('.tab_about').removeClass('active');
            $('#about').removeClass('active in');
        }
        if($('.slider_portfolio').hasClass('slick-active')){
            $('.tab_portfolio').addClass('active');
            $('#portfolio').addClass('active in');
        } else{
            $('.tab_portfolio').removeClass('active');
            $('#portfolio').removeClass('active in');
        }
        if($('.slider_contacts').hasClass('slick-active')){
            $('.tab_contacts').addClass('active');
            $('#contacts').addClass('active in');
        } else{
            $('.tab_contacts').removeClass('active');
            $('#contacts').removeClass('active in');
        }
    });

    $('.tab_about a').click(function(e) {
        $('.slider-content').slick('slickGoTo', 0)
    });
    $('.tab_portfolio a').click(function(e) {
        $('.slider-content').slick('slickGoTo', 1)
    });
    $('.tab_contacts a').click(function(e) {
        $('.slider-content').slick('slickGoTo', 2)
    });

    // del hover
    $(window).resize(function() {
        var width = $('body').innerWidth()
        if ($(window).width() < 768) {
            $('.nav_tabs li a').removeClass('hover_class');
        } else{
            $('.nav_tabs li a').addClass('hover_class');
        }
    });
    var width = $('body').innerWidth()
        if ($(window).width() < 768) {
            $('.nav_tabs li a').removeClass('hover_class');
        } else{
            $('.nav_tabs li a').addClass('hover_class');
        }
    
});
