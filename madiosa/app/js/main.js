	// preloader
	$(window).on('load', function(){
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

// main js
$(document).ready(function(){


	$('.pricelits-tabs > li').addClass('collapse-item');
		$('.collapse-item a').not('.active').next('ul').css('display', 'none');
		$('.collapse-item > a').click(function(e) {
			e.preventDefault();
			$('.collapse-item > a').not($(this)).removeClass('active');
			$(this).toggleClass('active');
			$('.collapse-item ul').not($(this).next()).slideUp();
			$(this).next().slideToggle().clearQueue();
		});
		$(document).mouseup(function (e){
			var divCollapse = $(".collapse-item");
			if (!divCollapse.is(e.target) && divCollapse.has(e.target).length === 0) {
				$('.collapse-item ul').slideUp();
				$('.collapse-item > a').removeClass('active');
			}
		});



	// input add focus to icon
	// $('.input-wrap input').focus(function(event) {
	// 	$(this).parent().addClass('focus')
	// });
	// $('.input-wrap input').blur(function(event) {
	// 	$(this).parent().removeClass('focus')
	// });



	// slick sliders init
	// $('.slick-slider').slick({
	//   infinite: true,
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	// 	dots: true,
	// 	arrows: true
	// });
	$('.front-page-slider, .frontpage-about-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
	});
	$('.latest-actions-slider').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
		dots: false,
		arrows: false,
  	variableWidth: true
	});
	$('.our-work-slider').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
		dots: false,
		arrows: false,
  	variableWidth: true,
		centerMode: true,
		focusOnSelect: true
	});

  // menu btn click
	$('.menu-btn').click(function(event) {
		$('.mobile-menu').addClass('active');
		$('body').addClass('no-scroll');
	});
	$('.close-btn').click(function(event) {
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	// resize func mobile menu
	var moveToMmenuF = function() {
		if (window.innerWidth < 768 || $('html').hasClass('mobile')) {

			$('.header-nav nav').detach().prependTo('.mobile-menu .menu-content');
			$('.header-phone-block .call-btn').detach().prependTo('.mobile-menu .menu-header');
			$('.sign-block .btn').detach().prependTo('.mobile-menu .menu-header');

      // hovered
			$('.frontpage-catalog-section .item, .latest-actions-section .item').addClass('hovered');

		} else {

			$('.mobile-menu .menu-content nav').detach().prependTo('.header-nav .nav-wrap');
			$('.mobile-menu .menu-header .call-btn').detach().prependTo('.header-phone-block');
			$('.mobile-menu .menu-header .btn').detach().prependTo('.sign-block');


			if ($('.mobile-menu').hasClass('active')) {
				$('.mobile-menu').removeClass('active');
				$('body').removeClass('no-scroll');
			}

		}
	};
	$(window).resize(moveToMmenuF);
	$(document).ready(moveToMmenuF);



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
