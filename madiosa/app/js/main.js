// preloader
$(window).on('load', function(){
	$('.preloader').fadeOut('slow',function(){
		$(this).remove();
	});
});

// main js
$(document).ready(function(){


// init collapsing list of a pricelits-tabs
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


// init sick
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

	// if Mobile
	var globalIfMobile = function() {
		if (window.innerWidth < 768 || $('html').hasClass('mobile')) {

			$('.header-nav nav').detach().prependTo('.mobile-menu .menu-content');
			$('.header-phone-block .call-btn').detach().prependTo('.mobile-menu .menu-header');
			$('.sign-block .btn').detach().prependTo('.mobile-menu .menu-header');

      // hovered
			$('.frontpage-catalog-section .item, .latest-actions-section .item').addClass('hovered');
			$('.personal-card-preview .item-hover-content').removeClass('on-show');
			$('.personal-card-preview .show-more-btn').text('Подробнее');

		} else {

			$('.mobile-menu .menu-content nav').detach().prependTo('.header-nav .nav-wrap');
			$('.mobile-menu .menu-header .call-btn').detach().prependTo('.header-phone-block');
			$('.mobile-menu .menu-header .btn').detach().prependTo('.sign-block');

			if ($('.mobile-menu').hasClass('active')) {
				$('.mobile-menu').removeClass('active');
				$('body').removeClass('no-scroll');
			}


      // remove hovers
			$('.frontpage-catalog-section .item, .latest-actions-section .item').removeClass('hovered');

		}
	};
	$(window).resize(globalIfMobile);
	$(document).ready(globalIfMobile);


// init shoh/hide more info about masters
	$('.personal-card-preview .show-more-btn').click(function(event) {
		event.preventDefault();
		var cont = $(this).parents('.item-hover-content');
		cont.toggleClass('on-show');
		if (cont.hasClass('on-show')) {
			$(this).text('X');
		} else {
			$(this).text('Подробнее');
		}

	});

//  init checkout steps line
	function stepLine() {
		var currentStep = 1;
	  $('.next-step').click( function (event) {
			if ( currentStep >= 1 && currentStep <= 3) {

				$(".step-container .step-separator[data-step='" + currentStep + "']").addClass('active');
		    currentStep++;
		    $(".step-container .step[data-step='" + currentStep + "']").addClass('active');

				$('.step-inner').removeClass('active');
				$(".step-inner[data-step='" + currentStep + "']").addClass('active');
			}
	  });
		$('.prev-step').click(function(event) {
			if (currentStep <=4 && currentStep > 1) {
				currentStep - 1;

				$(".step-container .step[data-step='" + currentStep + "']").removeClass('active');
				currentStep--;
				$(".step-container .step-separator[data-step='" + currentStep + "']").removeClass('active');

				$('.step-inner').removeClass('active');
				$(".step-inner[data-step='" + currentStep + "']").addClass('active');
			}
		});
	}
	stepLine();


  // tabs init
	var tabsLi = $('.tabs-block .inner > li');
	tabsLi.click(function(){
		var tab_id = $(this).attr('data-tab');

		tabsLi.removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});

// checkbox click
function checkBoxClick() {
	var masterContainer = $('.master-preview-wrap');
	var masterObj = $('.master-preview');
	// masterObj.find('input').hide();
	masterObj.click(function(event) {
		var input = $(this).find('input');
		if (input.is(':checked')) {
			masterObj.removeClass('checked');
			masterContainer.find('input').attr('checked', false);
			input.attr('checked', false);
		} else {
			masterObj.removeClass('checked');
			masterContainer.find('input').attr('checked', false);
			input.attr('checked', true);
			$(this).addClass('checked');
		}
	});
}
checkBoxClick();

















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
