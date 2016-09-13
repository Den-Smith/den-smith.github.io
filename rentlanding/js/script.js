// ---------
$(document).ready(function() {
    $('.carousel').carousel({
        interval: 0
    });

    // swipe for bootstap carousel
    var hammer = new Hammer(document.querySelector('.carousel'));
    var $carousel = $(".carousel").carousel({ "interval": 0 });
    hammer.get("swipe");
    hammer.on("swipeleft", function() {
        $carousel.carousel("next");
    });
    hammer.on("swiperight", function() {
        $carousel.carousel("prev");
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Slick carousel
    $('.middle_carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        dots: true,
        infinite: true,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });



});

new WOW({
    offset: 50,
    mobile: false
}).init();
