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
				$('.nav_footer').toggleClass('in-active');
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
				arrows: false,
				variableWidth: true,
				slidesToShow: 1,
				dots: true
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
	$('.card-block').not('.empty-card').click(function () {
		$(this).toggleClass('is-open');
		if ($(this).hasClass('is-open')) {
			$('.toggle-details-btn i', this).removeClass('fa-ellipsis-h').fadeOut(100, function() {
				$(this).addClass('fa-chevron-up');
			}).fadeIn();
		} else {
			$('.toggle-details-btn i', this).removeClass('fa-chevron-up').fadeOut(100, function() {
				$(this).addClass('fa-ellipsis-h');
			}).fadeIn();
		}

	});

	// Select country init
	function formatState(state) {
	  if (!state.id) {
	    return state.text;
	  }
	  var $state = $(
	    '<span ><img class="img-flag" src="img/flags/' + state.element.value.toLowerCase() + '.png" /> ' + state.text + '</span>'
	  );
	  return $state;
	};
	$('.country-checkbox').select2({
		minimumResultsForSearch: Infinity,
		templateResult: formatState
	});

	// feedback section slider init
	$('.feedback-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev slider-button-default">Previous</button>',
		nextArrow: '<button type="button" class="slick-next slider-button-default">Next</button>'
	});

	// faq section collapse
	$('#faq-collapse-list > li').addClass('collapse-item');
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

	// marquee
	function widthControl() {
	  var w = window.innerWidth
	  if (w < 768) {
			$('.loans-today-section .description-block p').replaceWith(function(index, oldHTML) {
			  return $("<marquee>").html(oldHTML);
			});
	  } else {
			$('.loans-today-section .description-block marquee').replaceWith(function(index, oldHTML) {
				return $("<p>").html(oldHTML);
			});
	  }
	}
	$(document).ready(widthControl);
	$(window).resize(widthControl);

});