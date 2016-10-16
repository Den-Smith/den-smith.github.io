$(document).ready(function(){

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

// header scroll
  $(window).scroll(function() {
      if ($(window).scrollTop() > 900) {
      	$('header').css({
      		'position': 'fixed',
          	'background-color': '#3f5ab6',
        });
        $('.logo_wrap').css({
        	'display': 'none',
        });
        $('.logo_wrap_small').css({
        	'display': 'block',
        });
        $('.tel_wrap').css({
        	'display': 'none',
        });
        $('.tel_wrap_small').css({
        	'display': 'block',
        });

      } else{
      	$('header').css({
      		'position': 'absolute',
          	'background-color': 'transparent',
        });
    	$('.logo_wrap').css({
    		'display': 'block',
    	});
    	$('.logo_wrap_small').css({
    		'display': 'none',
    	});
    	$('.tel_wrap').css({
          	'display': 'block',
        });
        $('.tel_wrap_small').css({
        	'display': 'none',
        });
      }
  });

// slick gallery

 $('.slick-gallery').slick({
    dots: false,
  	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 4,
  	responsive: [
  	  {
  	    breakpoint: 1200,
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

 // feedback gallery

 $('.slick-feedback').slick({
    dots: false,
  	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 3,
  	responsive: [
  	  {
  	    breakpoint: 1200,
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

})