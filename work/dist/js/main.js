$(document).ready(function(){

	// preloader
	$(window).on('load', function(){
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

	// menu button
	 $('.menu-btn').click(function(){
	 	$(this).toggleClass('active');
	 	$('.menu_container').toggleClass('active');
	 	$('body').toggleClass('scroll')
	 });


	// nav ul dropdown
	$('.header-nav .main-item.dropdown-item > a').on('click', function(e){
		e.preventDefault();
	});
	
	var navSubMenuToggle = function() {
		var width = $('body').innerWidth();
		if ($(window).width() > 768) {
				$('.header-nav > .main-item').off();
				$('.header-nav > .main-item').hover(function () {
				clearTimeout($.data(this,'timer'));
				$('.sub-container',this).stop(true,true).show();
			}, function () {
				$.data(this,'timer', setTimeout($.proxy(function() {
					$('.sub-container',this).stop(true,true).hide();
				}, this), 100));
			});
		} else {
			$('.header-nav > .main-item').off();
			$('.header-nav > .main-item.dropdown-item').click(function () {
				$(this).toggleClass('in-active');
				$('.header-nav').toggleClass('slide-on');
				$('.sub-container').not($('.sub-container', this)).removeClass('in-active');

				$('.sub-container', this).toggleClass('in-active');
				if ($(this).hasClass('in-active')) {
					$('.sub-container', this).addClass('detached').detach().prependTo('.header-nav');
				} else {
					$('.header-nav .sub-container.detached').detach().removeClass('detached').prependTo(this);
				}
				
			});
		}
		
	}

	// move navigation block from header block to menu container
	var navMove = function() {
		var width = $('body').innerWidth();
		if ($(window).width() < 768) {
			$('.flex-wrap .header-nav').detach().prependTo('.nav_content');
		} else {
			$('.nav_content .header-nav').detach().prependTo('.flex-wrap');
		}
	} 
	$(window).resize(navMove);
	$(document).ready(navMove);
	$(window).resize(navSubMenuToggle);
	$(document).ready(navSubMenuToggle);

	// services slick slider init
	$('.services-slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1
	});
		// slider nav fix
	$('.services-slider-nav li').click(function() {
		$('.services-slider-nav li').not($(this)).removeClass('active');
	});

});









