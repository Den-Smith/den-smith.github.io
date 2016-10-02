
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
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});