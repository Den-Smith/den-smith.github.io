	// preloader
	$(window).on('load', function(){
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

// main js
$(document).ready(function(){

		// search-block init
		var srchBlock = $('#search-block')
		srchBlock.focus(function() {
			$('.search-block .search-ico').addClass('hover-ico')
		}).blur(function(event) {
			$('.search-block .search-ico').removeClass('hover-ico')
		});

		// slick sliders init
	  $('.slick-carousel-main').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			arrows: true,
			responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
						arrows: false
		      }
		    },
				{
		      breakpoint: 555,
		      settings: {
						centerMode: false,
						arrows: false
		      }
		    }
		  ]
	  });

		$('.offers-slider--all').slick({
			slidesToShow: 4,
			infinite: true,
			slidesToScroll: 1,
			arrows: true,
			responsive: [
		    {
		      breakpoint: 1300,
		      settings: {
						variableWidth: true,
						centerMode: true,
						arrows: false
		      }
		    }
		  ]
	  });

		$('.brands-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
						variableWidth: true,
						centerMode: true,
						arrows: false
		      }
		    }
		  ]
	  });

		$('.front-catalog--test-1').slick({
			infinite: true,
			variableWidth: true,
			slidesToScroll: 1,
			centerMode: true,
			arrows: true,
			dots: true
	  });

		// offers navigation li
		$('.offers-nav li').click(function(event) {
			event.preventDefault();
			$('.offers-nav li').removeClass('active');
			$(this).addClass('active');
		});

		// counter
		$('.btn-minus').click(function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			if (count <= 1) {
				$(this).addClass('disabled')
			} else {
				$(this).removeClass('disabled')
			}
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.btn-plus').click(function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			if ($input <= 1) {
				$(this).siblings('.btn-minus').addClass('disabled')
			} else {
				$(this).siblings('.btn-minus').removeClass('disabled')
			}
			$input.change();
			return false;
		});
		$('.counter-number').click(function(event) {
			$(this).select()
		});

		// slide menu list
		$('#catalog-list  > li').addClass('collapse-item');
		$('#catalog-list .collapse-item i').not('.active').next('ul').css('display', 'none');
		$('#catalog-list .collapse-item > i').click(function(e) {
			$('#catalog-list .collapse-item > i').not($(this)).removeClass('active').removeClass('fa-minus').addClass('fa-plus');
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$(this).removeClass('fa-plus').addClass('fa-minus')
			} else {
				$(this).removeClass('fa-minus').addClass('fa-plus')
			}
			$('#catalog-list .collapse-item ul').not($(this).next()).slideUp();
			$(this).next().slideToggle().clearQueue();
		});
		$(document).mouseup(function (e){
			var divCollapse = $("#catalog-list .collapse-item");
			if (!divCollapse.is(e.target) && divCollapse.has(e.target).length === 0) {
				$('#catalog-list .collapse-item ul').slideUp();
				$('#catalog-list .collapse-item > i').removeClass('active').removeClass('fa-minus').addClass('fa-plus');
			}
		});

		// switch slide's tabs
		// catalog \ brands
		$('header .catalog-btn').click(function(event) {
			$('header .cart-btn').removeClass('active');
			$(this).toggleClass('active');
			$('.slide-block-wrap.right-block').removeClass('in-active');
			$('.slide-block-wrap.left-block').toggleClass('in-active');
			$('.slide-inner .brands-btn').removeClass('active');
			$('.slide-inner .catalog-btn').addClass('active');
			$('#brands-list').removeClass('in-active');
			$('#catalog-list').addClass('in-active');

			if ($('.slide-block-wrap').hasClass('in-active')) {
				$('body').addClass('in-active');
			} else {
				$('body').removeClass('in-active');
			}
		});
		$('header .brands-btn').click(function(event) {
			$('body').addClass('in-active');
			$('.slide-block-wrap.left-block').addClass('in-active');
			$('.slide-inner .catalog-btn').removeClass('active');
			$('.slide-inner .brands-btn').addClass('active');
			$('#catalog-list').removeClass('in-active');
			$('#brands-list').addClass('in-active');
		});

		// favor \ cart
		$('header .cart-btn').click(function(event) {
			$('header .catalog-btn').removeClass('active');
			$(this).toggleClass('active')
			$('.slide-block-wrap.left-block').removeClass('in-active');
			$('.slide-block-wrap.right-block').toggleClass('in-active');
			$('.slide-inner .favor-btn').removeClass('active');
			$('.slide-inner .cart-btn').addClass('active');
			$('#favor-list').removeClass('in-active');
			$('#cart-list').addClass('in-active');

			if ($('.slide-block-wrap').hasClass('in-active')) {
				$('body').addClass('in-active');
			} else {
				$('body').removeClass('in-active');
			}
		});
		$('header .favor-btn').click(function(event) {
			$('body').addClass('in-active');
			$('.slide-block-wrap.right-block').addClass('in-active');
			$('.slide-inner .cart-btn').removeClass('active');
			$('.slide-inner .favor-btn').addClass('active');
			$('#cart-list').removeClass('in-active');
			$('#favor-list').addClass('in-active');
		});



		// catalog\brands tabs
		$('.slide-inner .catalog-btn').click(function(event) {
			$('.slide-inner .brands-btn').removeClass('active');
			$(this).addClass('active');
			$('#brands-list').removeClass('in-active');
			$('#catalog-list').addClass('in-active');
		});
		$('.slide-inner .brands-btn').click(function(event) {
			$('.slide-inner .catalog-btn').removeClass('active');
			$(this).addClass('active');
			$('#catalog-list').removeClass('in-active');
			$('#brands-list').addClass('in-active');
		});

		// cart\favorite tabs
		$('.slide-inner .cart-btn').click(function(event) {
			$('.slide-inner .favor-btn').removeClass('active');
			$(this).addClass('active');
			$('#favor-list').removeClass('in-active');
			$('#cart-list').addClass('in-active');
		});
		$('.slide-inner .favor-btn').click(function(event) {
			$('.slide-inner .cart-btn').removeClass('active');
			$(this).addClass('active');
			$('#cart-list').removeClass('in-active');
			$('#favor-list').addClass('in-active');
		});

		// close slide's
		$('.slide-block-wrap .close-btn').click(function(event) {
			$('.slide-block-wrap').removeClass('in-active');
			$('body').removeClass('in-active');
		});
		$(document).mouseup(function (e){
			if (!$('html').hasClass('mobile')) {
				var divCollapse = $(".slide-block-wrap .slide-inner-wrap, .mobile-menu-wrap");
				if (!divCollapse.is(e.target) && divCollapse.has(e.target).length === 0) {
					$('body').removeClass('in-active');
					$('.slide-block-wrap').removeClass('in-active');
					$('header .cart-btn').removeClass('active');
					$('header .catalog-btn').removeClass('active');
				}
	    }
		});

		// add to favorite animation init
		$('.favor-label').click(function(event) {
			$(this).toggleClass('active');
		});

		// fix header init
		function headerResize() {
			if (!$('html').hasClass('mobile') && $(window).innerWidth() > 768) {
				$(window).scroll(function() {
				  if ($(window).scrollTop() > 184) {
				    $('header').addClass('fixed');
				  } else {
				    $('header').removeClass('fixed');
				  }
				});
	    } else if($('html').hasClass('mobile')){
				$('header').addClass('fixed');
				$('.rubric-of-catalog .item-header').addClass('active');
			} else {
				$('.rubric-of-catalog .item-header').addClass('active');
				$(window).scroll(function() {
				  if ($(window).scrollTop() > 87) {
				    $('header').addClass('fixed');
				  } else {
				    $('header').removeClass('fixed');
				  }
				});
	    };
		}
		headerResize();
		$(window).resize(headerResize);


		// mobile menu init
		$('.mobile-menu-btn').on('click', function() {
		  $(this).toggleClass('open');
			if ($(this).hasClass('open')) {
				$('header .mobile-menu-btn').detach().prependTo('.mobile-menu-wrap .mobile-menu-btn-wrap');
				$('body').addClass('in-active');
			} else {
				$('.mobile-menu-wrap .mobile-menu-btn-wrap .mobile-menu-btn').detach().prependTo('header .mobile-menu-btn-wrap');
				$('body').removeClass('in-active');
			}
			$('.mobile-menu-wrap').toggleClass('in-active');
		})

		/*move navigation block from header block to menu container*/
		var navMove = function() {
			if (window.innerWidth < 768 || $('html').hasClass('mobile')) {
				$('.header-top').detach().prependTo('.m-menu-top-block');
				$('.nav-wrap nav').detach().prependTo('.m-menu-nav-block');
			} else {
				$('.m-menu-top-block .header-top').detach().prependTo('header');
				$('.m-menu-nav-block nav').detach().prependTo('.nav-wrap');

				$('.mobile-menu-btn').removeClass('open');
				$('.mobile-menu-wrap .mobile-menu-btn-wrap .mobile-menu-btn').detach().prependTo('header .mobile-menu-btn-wrap');
				$('.mobile-menu-wrap').removeClass('in-active');
				$('body').removeClass('in-active');
			}
		};
		$(window).resize(navMove);
		$(document).ready(navMove);

		// mobile srch ico click
		$('.mobile-search-btn').click(function(event) {
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$('i', this).removeClass('fa-search').addClass('fa-times');
			} else {
				$('i', this).removeClass('fa-times').addClass('fa-search');
			}
			$('.search-block').toggleClass('active');
		});

		// close btn
		$('.m-close-btn').click(function(event) {
			$('body').removeClass('in-active');
			$('.pup-up-wrap').removeClass('in-active');
		});

		//  pop-up
		$('.slider-product-item .item-img .hvr-img i').click(function(event) {
			$('.pup-up-wrap').addClass('in-active');
			$('body').addClass('in-active');
		});

		// cart show more btn
		$('.cart-footer .toggle-btn').click(function(event) {
			$(this).toggleClass('active');
			$('.cart-footer').toggleClass('active');
		});




// inner

		// filter tabs
		$('.main-filter-wrap > .filter-block').addClass('collapse-item');
		// $('.collapse-item a').not('.active').next('ul').css('display', 'none');
		$('.main-filter-wrap .collapse-item > a').click(function(e) {
			e.preventDefault();
			// $('.collapse-item > a').not($(this)).removeClass('active');
			$(this).toggleClass('active');
			// $('.collapse-item ul').not($(this).next()).slideUp();
			$(this).next().slideToggle().clearQueue();
		});
		// $(document).mouseup(function (e){
		// 	var divCollapse = $('.collapse-item');
		// 	if (!divCollapse.is(e.target) && divCollapse.has(e.target).length === 0) {
		// 		$('.collapse-item ul').slideUp();
		// 		$('.collapse-item > a').removeClass('active');
		// 	}
		// });

		// rubric tabs
		$('.rubric-of-catalog').addClass('collapse-item');
		// $('.collapse-item a').not('.active').next('ul').css('display', 'none');
		$('.rubric-of-catalog > a').click(function(e) {
			e.preventDefault();
			// $('.collapse-item > a').not($(this)).removeClass('active');
			$(this).toggleClass('active');
			// $('.collapse-item ul').not($(this).next()).slideUp();
			$(this).next().slideToggle().clearQueue();
		});
		// $(document).mouseup(function (e){
		// 	var divCollapse = $('.collapse-item');
		// 	if (!divCollapse.is(e.target) && divCollapse.has(e.target).length === 0) {
		// 		$('.collapse-item ul').slideUp();
		// 		$('.collapse-item > a').removeClass('active');
		// 	}
		// });


		// catalog-nav scroll by btns

		$('.catalog-nav .scroll-btn.btn-down').click(function(event) {
			var scrollDown = $(this).parent().parent().find('.item-content ul').scrollTop();
			var scrollDown2 = scrollDown + 30
			$(this).parent().parent().find('.item-content ul').scrollTop(scrollDown2);
		});
		$('.catalog-nav .scroll-btn.btn-up').click(function(event) {
			var scrollUp = $(this).parent().parent().find('.item-content ul').scrollTop();
			var scrollUp2 = scrollUp - 30
			$(this).parent().parent().find('.item-content ul').scrollTop(scrollUp2);
		});

		// filter catalog to-col / to-row
		$('.display-items-btn').click(function(event) {
			if ($(this).hasClass('to-col')) {
				$('.display-items-btn').not(this).removeClass('selected');
				$(this).addClass('selected');
				$('.items-cards').removeClass('to-row').addClass('to-col');
			} else if ($(this).hasClass('to-row')) {
				$('.display-items-btn').not(this).removeClass('selected');
				$(this).addClass('selected');
				$('.items-cards').removeClass('to-col').addClass('to-row');
			} {

			}
		});

		// filter btn init
		$('.filter-btn').click(function(event) {
			$(this).toggleClass('active');
			$('.left-side-block').toggleClass('active');
		});

		// node block
		$('.slider-for').slick({
		 slidesToShow: 1,
		 slidesToScroll: 1,
		 arrows: true,
		 fade: true,
		 asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
		 slidesToShow: 4,
		 slidesToScroll: 1,
		 asNavFor: '.slider-for',
		 dots: false,
		 arrows: false
		});

		// node tabs init
		(function($) {
		  jQuery.fn.lightTabs = function(options) {
		    var createTabs = function() {
		      tabs = this;
		      i = 0;
		      showPage = function(i) {
		        $(tabs).children("div").children("div").hide();
		        $(tabs).children("div").children("div").eq(i).show();
		        $(tabs).children('.tabs-header').children("ul").children("li").removeClass("active");
		        $(tabs).children('.tabs-header').children("ul").children("li").eq(i).addClass("active");
		      }
		      showPage(0);
		      $(tabs).children('.tabs-header').children("ul").children("li").each(function(index, element) {
		        $(element).attr("data-page", i);
		        i++;
		      });
		      $(tabs).children('.tabs-header').children("ul").children("li").click(function() {
		        showPage(parseInt($(this).attr("data-page")));
		      });
		    };
		    return this.each(createTabs);
		  };
		})(jQuery);
		$(".node-tabs-block").lightTabs();


		// move sorting filter to main filter
		var sortingFilterMove = function() {
			if (window.innerWidth < 768) {
				$('.sorting-filter-wrap .sorting-filter').detach().prependTo('.main-filter-wrap');
			} else {
				$('.main-filter-wrap .sorting-filter').detach().prependTo('.sorting-filter-wrap');
			}
		};
		$(window).resize(sortingFilterMove);
		$(document).ready(sortingFilterMove);


});
