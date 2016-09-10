// ---------
$(document).ready(function(){
  // $('.carousel').slick({
  //   dots: false,
  // 	infinite: true,
  // 	speed: 500,
  // 	cssEase: 'linear'
  // });
	$('.carousel').carousel({
        interval: 0
    });

	// swipe carousel
	var hammer = new Hammer(document.querySelector('.carousel'));
	var $carousel = $(".carousel").carousel({"interval":0});
	hammer.get("swipe");
	hammer.on("swipeleft", function(){
	    $carousel.carousel("next");
	});
	hammer.on("swiperight", function(){
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



});



