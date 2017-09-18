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

	// fix header init
	function headerResize() {
		if (!$('html').hasClass('mobile') && $(window).innerWidth() > 768) {
			$(window).scroll(function() {
				if ($(window).scrollTop() > 0) {
					$('header').addClass('fixed');
				} else {
					$('header').removeClass('fixed');
				}
			});
		} else if($('html').hasClass('mobile')){

		} else {

		};
	}
	headerResize();
	$(window).resize(headerResize);

	// menu slide's
	$('.catalog-btn p').click(function(event) {
		$('.slide-block-wrap.right-block').removeClass('in-active');
		$('.slide-block-wrap.left-block').toggleClass('in-active');
		if ($('.slide-block-wrap').hasClass('in-active')) {
			$('body').addClass('no-scroll');
		} else {
			$('body').removeClass('no-scroll');
		}
	});
	$('.collections-btn p').click(function(event) {
		$('.slide-block-wrap.left-block').removeClass('in-active');
		$('.slide-block-wrap.right-block').toggleClass('in-active');
		if ($('.slide-block-wrap').hasClass('in-active')) {
			$('body').addClass('no-scroll');
		} else {
			$('body').removeClass('no-scroll');
		}
	});
	// close slide's
		$('.slide-block-wrap .close-btn').click(function(event) {
			$('.slide-block-wrap').removeClass('in-active');
			$('body').removeClass('no-scroll');
		});
		$(document).mouseup(function (e){
			if (!$('html').hasClass('mobile')) {
				var divCollapse = $(".slide-block-wrap .slide-inner-wrap, .mobile-menu-wrap");
				if (!divCollapse.is(e.target) && divCollapse.has(e.target).length === 0) {
					$('body').removeClass('no-scroll');
					$('.slide-block-wrap').removeClass('in-active');
				}
	    }
		});



	// $('.our-production-slider .slider-item').click(function() {
	// 	$('.our-production-slider .slider-item').removeClass('hover')
	// 	$(this).addClass('hover');
	// });



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









