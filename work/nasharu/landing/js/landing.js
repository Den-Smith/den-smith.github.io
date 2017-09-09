// fix header init
function headerResize() {
  if (!$('html').hasClass('mobile') && $(window).innerWidth() > 768) {
    $('.blur-wrap').removeClass('active');
    $('body').removeClass('no-scroll');
    $('.mobile-menu-wrap').removeClass('in-active');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 0) {
        $('header').addClass('scrolled');
      } else {
        $('header').removeClass('scrolled');
      }
    });
  } else {
    $('header').addClass('scrolled');
  }
}

headerResize();
$(window).resize(headerResize);


// preloader
$(window).on('load', function(){
  $('.preloader').fadeOut('slow',function(){
    $(this).remove();
  });
});


// landing js
$(document).ready(function () {
  // animated hero
  function animateHero() {
    $('.hero-slider, .slick-dots, .hero-socials, .header-block').addClass('animated');
  }
  setTimeout(animateHero, 500);

  // slick slider init
  $('.hero-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		dots: true,
		arrows: false,
    vertical: true,
    adaptiveHeight: true,
    draggable: false,
    touchMove: false,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    autoplay: true,
    responsive: [
		    {
		      breakpoint: 768,
		      settings: {
            vertical: false,
            adaptiveHeight: false,
            draggable: true,
            touchMove: true,
            cssEase: 'linear',
            speed: 500,
		      }
		    }
		  ]
	});

// parallax
$('.parallax-window-1').parallax({imageSrc: 'img/hero-bg-original.png'});
$('.parallax-window-2').parallax({imageSrc: 'img/join-bg.png'});
$('.parallax-window-3').parallax({imageSrc: 'img/contacts-bg.jpg'});


// move sorting filter to main filter
	var sortingFilterMove = function() {
		if (window.innerWidth < 768 || $('html').hasClass('mobile')) {
			$('.header-nav').detach().prependTo('.mobile-menu');
		} else {
			$('.mobile-menu .header-nav').detach().prependTo('.nav-block');
		}
	};
	$(window).resize(sortingFilterMove);
	$(document).ready(sortingFilterMove);

  $('.menu-btn').on('click', function() {
	  $(this).toggleClass('open');
    $('.blur-wrap').toggleClass('active');
		if ($(this).hasClass('open')) {
			$('body').addClass('no-scroll');
		} else {
			$('body').removeClass('no-scroll');
		}
		$('.mobile-menu-wrap').toggleClass('in-active');
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


  // wow js init
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 10, // default
    mobile: true, // default
    live: true // default
  });
  wow.init();




});
