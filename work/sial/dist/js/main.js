	// preloader
	$(window).on('load', function(){
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

// main js
$(document).ready(function(){
	// close btn init
	$('.close-btn').click(function(event) {
		$(this).parent().removeClass('active');
	});


	// favor-btn click
	$('.favor-btn').click(function(event) {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$('i', this).removeClass('fa-heart-o').addClass('fa-heart');
		} else {
			$('i', this).removeClass('fa-heart').addClass('fa-heart-o');
		}
	});

	// slick sliders init
	$('.slider-random-tovar, .slider-new-tovar').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
		dots: false,
		arrows: true,
		variableWidth: true,
		responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
		{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
				arrows: false,
      }
    }
  ]
	});

	// init click to tel btn in top-header block
	$('.header-tel-wrap i').click(function(event) {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).removeClass('fa-phone').addClass('fa-times');
		} else {
			$(this).removeClass('fa-times').addClass('fa-phone');
		}
		$('.header-tel').toggleClass('active');
	});

	// catalog btn init
	var catalogResizeF = function() {
		if (window.innerWidth < 992 || $('html').hasClass('mobile')) {
			$('.side-page-nav ul').hide();
			$('.btn').off().click(function(event) {
				$(this).toggleClass('active');
				if ($(this).hasClass('active')) {
					$(this).text('закрыть');
				} else {
					$(this).text('каталог');
				}
				$('.side-page-nav ul').slideToggle('slow').clearQueue();
			});
		} else {
			$('.side-page-nav ul').show();
			$('.btn').off();
		}
	};
	$(window).resize(catalogResizeF);
	$(document).ready(catalogResizeF);

	// menu-nav close-btn
	$('nav .close-btn').click(function(event) {
		$(this).parent().parent().removeClass('active');
		$('body').removeClass('no-scroll');
	});

	// menu btn init
	$('.menu-btn').click(function(event) {
		$('nav').addClass('active');
		$('body').addClass('no-scroll');
	});

	// resize unactive blocks
	var unactiveBlocksF = function() {
		if (window.innerWidth > 991) {
			if ($('body').hasClass('no-scroll')) {
				$('body').removeClass('no-scroll');
			}
			if ($('nav').hasClass('active')) {
				$('nav').removeClass('active');
			}
		} else {

		}
	};
	$(window).resize(unactiveBlocksF);
	$(document).ready(unactiveBlocksF);












	// input add focus to icon
	// $('.input-wrap input').focus(function(event) {
	// 	$(this).parent().addClass('focus')
	// });
	// $('.input-wrap input').blur(function(event) {
	// 	$(this).parent().removeClass('focus')
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
