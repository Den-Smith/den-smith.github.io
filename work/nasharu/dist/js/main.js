	// preloader
	$(window).on('load', function(){
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

// main js
$(document).ready(function() {

	// input add focus to icon
	$('.input-wrap input').focus(function(event) {
		$(this).parent().addClass('focus')
	});
	$('.input-wrap input').blur(function(event) {
		$(this).parent().removeClass('focus')
	});

	// slick sliders init
	// adds slider
	$('.adds-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		dots: true,
		arrows: true
	});
	// node-slider
	$('.node-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		dots: true,
		variableWidth: true,
		centerMode: true,
		arrows: true
	});

	// menu btn init
	$('.menu-btn').click(function(){
		$(this).toggleClass('open');
		$('.m-menu-wrap').toggleClass('active');
		$('body').toggleClass('no-scroll');
	});

	// move header items to m-menu
	var moveToMmenuF = function() {
		if (window.innerWidth < 768 || $('html').hasClass('mobile')) {

			$('.header-top-nav').detach().prependTo('.m-nav-wrap');
			$('.header-top-reg-block').detach().prependTo('.m-menu-footer');
			$('.header-bottom-content').detach().prependTo('.m-menu-second-header');

		} else {

			$('.m-menu-wrap').removeClass('active');
			$('.menu-btn').removeClass('open');

			$('.m-menu-footer .header-top-reg-block').detach().prependTo('.header-top-reg-block-wrap');
			$('.m-nav-wrap .header-top-nav').detach().prependTo('.header-top-nav-wrap');
			$('.m-menu-second-header .header-bottom-content').detach().prependTo('.header-bottom .block-inner');
		}
	};
	$(window).resize(moveToMmenuF);
	$(document).ready(moveToMmenuF);

	// m menu second header show\hide
	$('.second-header-btn').click(function(event) {
		$(this).parent().toggleClass('active');
		$(this).parent().parent().children('.m-menu-body').toggleClass('active');
	});

	// footer tabs init
	function collapseList() {
	  var w = window.innerWidth
	  if (w < 768) {
	    $('.footer-nav > li').addClass('collapse-item');
	    $('.collapse-item h3').not('.active').next('ul').css('display', 'none');
			$('.collapse-item > h3').off();
			$('.collapse-item > h3').click(function(e) {
	      // e.preventDefault();
	      $('.collapse-item > h3').not($(this)).removeClass('active');
	      $(this).toggleClass('active');
	      $('.collapse-item ul').not($(this).next()).slideUp();
	      $(this).next().slideToggle().clearQueue();

	    });
	    $(document).mouseup(function(e) {
	      var divCollapse = $(".collapse-item");
	      if (!divCollapse.is(e.target) && divCollapse.has(e.target).length === 0) {
	        $('.collapse-item ul').slideUp();
	        $('.collapse-item > h3').removeClass('active');
	      }
	    });
	  } else {
	    $('.collapse-item > h3').off();
	    $('ul > li ul').css('display', 'block');
	    $('ul > li').removeClass('collapse-item');
	  }
	}
	$(document).ready(collapseList);
	$(window).resize(collapseList);

	// node
	$('.to-favor-btn').click(function(event) {
		event.preventDefault()
		$(this).toggleClass('added');
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
	$('.node-tabs').lightTabs();

	// scroll btn down
	$('.scroll-btn').click(function(event) {
		var scrollDown = $(this).parent().find('.nav-scroll').scrollTop();
		var scrollDown2 = scrollDown + 30
		$(this).parent().find('.nav-scroll').scrollTop(scrollDown2);
	});

	// reg and autoruzr btns
	$('.pop-up-block .close-btn').click(function(event) {
		event.preventDefault();
		$('body').removeClass('no-scroll');
		$('.pop-up-block-wrap').removeClass('active');
	});
	$('.temp-btns-wrap .reg-btn').click(function(event) {
		event.preventDefault();
		$('body').toggleClass('no-scroll');
		$('.register-block-popup').toggleClass('active');
	});
	$('.temp-btns-wrap .autorize-btn').click(function(event) {
		event.preventDefault();
		$('body').toggleClass('no-scroll');
		$('.autorize-block-popup').toggleClass('active');
	});

});
