$(document).ready(function(){

	// Preloader
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    // scroll top nav
    $(window).scroll(function() {
      if ($(window).scrollTop() > 58) {
      	$('header').addClass('fixed');
      	$('.for_section').css({
      		'margin-top': '200px',
      	});
      } else{
      	$('header').removeClass('fixed');
      	$('.for_section').css({
      		'margin-top': '0',
      	});
      }
  	});

  	// mobile menu button

    // collection slider
    $('.collection_slider').slick({
    	arrows: false,
    	dots: true
  	});

  	// product slider
    $('.product_section_slider').slick({
    	arrows: true,
    	dots: false,
    	slidesToShow: 4,
    	slidesToScroll: 1,
    	responsive: [
    {
      breakpoint: 1287,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  	});

  	// testimonials slider
    $('.testimonials_slider').slick({
    	arrows: true,
    	dots: false,
    	slidesToShow: 1,
    	slidesToScroll: 1
  	});

});