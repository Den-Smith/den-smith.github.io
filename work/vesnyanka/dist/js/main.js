	// preloader
	$(window).on('load', function(){
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

// main js
$(document).ready(function(){



	// input add focus to icon
	// $('.input-wrap input').focus(function(event) {
	// 	$(this).parent().addClass('focus')
	// });
	// $('.input-wrap input').blur(function(event) {
	// 	$(this).parent().removeClass('focus')
	// });



	// slick sliders init
	$('.hero-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		dots: true,
		arrows: true,
		fade: true,
	});

	$('.our-production-slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
		dots: true,
		arrows: true,
		variableWidth: true,
		// centerMode: true,
		// focusOnSelect: true
	});

	$('.about-us-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		dots: true,
		arrows: false,
	});

	$('.collections-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
		dots: false,
		arrows: true,
		variableWidth: true,
		centerMode: true,
		focusOnSelect: true
	});

	// color filter click
	$('.filter-item').click(function() {
		$('.filter-item').removeClass('active');
		$(this).addClass('active');
	});



	$('.our-production-slider .slider-item').click(function() {
		$('.our-production-slider .slider-item').removeClass('hover')
		$(this).addClass('hover');
	});



	// resize func
	// var moveToMmenuF = function() {
	// 	if (window.innerWidth < 768 || $('html').hasClass('mobile')) {

	// 		$('header .test').detach().prependTo('.mobile-test .test');

	// 	} else {

	// 		$('.mobile-test .test').detach().prependTo('header .test-wrap');

	// 	}
	// };
	// $(window).resize(moveToMmenuF);
	// $(document).ready(moveToMmenuF);






});









