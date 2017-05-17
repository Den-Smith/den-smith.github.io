/*preloader*/
$(window).on('load', function(){
	$('.preloader').fadeOut('slow',function(){
		$(this).remove();
	});
});

$(document).ready(function(){

	/*menu button*/
	 $('.menu-btn').click(function(){
	 	$(this).toggleClass('active');
	 	$('.menu_container').toggleClass('active');
	 	$('body').toggleClass('scroll');
	 });

	/*nav ul dropdown*/
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

	};

	/*move navigation block from header block to menu container*/
	var navMove = function() {
		var width = $('body').innerWidth();
		if ($(window).width() < 768) {
			$('.flex-wrap .header-nav').detach().prependTo('.nav_content');
		} else {
			$('.nav_content .header-nav').detach().prependTo('header .flex-wrap');
		}
	};
	$(window).resize(navMove);
	$(document).ready(navMove);
	$(window).resize(navSubMenuToggle);
	$(document).ready(navSubMenuToggle);
	/*services slick slider init*/
	$('.services-slider-nav a').on('click', function(e){
		e.preventDefault();
	});
	$('.services-slider-content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		draggable: false,
		touchMove: false,
		// adaptiveHeight: true,
		asNavFor: '.services-slider-nav'
	});

	$('.services-slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.services-slider-content',
		focusOnSelect: true,
		centerMode: true,
		prevArrow: '<button type="button" class="slick-prev slider-button-default">Previous</button>',
		nextArrow: '<button type="button" class="slick-next slider-button-default">Next</button>',
		responsive: [
		{
			breakpoint: 1288,
			settings: {
				centerMode: true,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				variableWidth: true,
				slidesToShow: 1
			}
		}
		]
	});

	/*Articles section tab init*/

	$(document).ready(switchNewsTab);

	function  switchNewsTab() {
		$('.articles-content .articles-container').not($('.articles-content .articles-container.articles-first')).hide();
		$('.articles-filter').click(function () {
			$('.articles-filter').removeClass('articles-filter-current');
			$(this).addClass('articles-filter-current');
			var adviceBlockContainer = $(this).data('select');
			$('.articles-content .articles-container').hide();
			$(".articles-content  div[data-container='" + adviceBlockContainer + "']").show();
		});
	}

	/* card item show more init */
	$('.card-block').click(function () {
		$(this).toggleClass('is-open');
		if ($(this).hasClass('is-open')) {
			$('.toggle-details-btn i', this).removeClass('fa-ellipsis-h').fadeOut(100, function() {
				$(this).addClass('fa-times');
			}).fadeIn();
		} else {
			$('.toggle-details-btn i', this).removeClass('fa-times').fadeOut(100, function() {
				$(this).addClass('fa-ellipsis-h');
			}).fadeIn();
		}

	});



});
