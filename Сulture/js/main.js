
$(document).ready(function(){

// slick carousel

  $('.judges_slick').slick({
  	dots: false
  });

  $('.center_hero_slider').slick({
  	arrows: false,
  	dots: true
  });

// scroll up

$(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scroller').fadeIn().animate({left: '-45px'}, 7);
        } else {
            $('#scroller').fadeOut().animate({left: '-200px'}, 7);
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

// "Like" 

	$(window).scroll(function() {
	    if ($(window).scrollTop() > 200) {
	        $('.like_wrap').css('opacity', '1');
	    } else{
	    	$('.like_wrap').css('opacity', '0');
	    }
	});

// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
});