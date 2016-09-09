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
	
	// scroll button script
	$('a[href^="#s"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 800);
	return false;
	});

});



