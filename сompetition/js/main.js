$(document).ready(function(){

// slick judjes top
  $('.header_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 1288,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });

// slick gallery

  var $gallery = $('.gallery');
  var slideCount = null;
  
  $( document ).ready(function() {
      $gallery.slick({
        fade: true
      });
  });
  
  $gallery.on('init', function(event, slick){
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
  });
  
  $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    setCurrentSlideNumber(nextSlide);
  });
  
  function setSlideCount() {
    var $el = $('.slide-count-wrap').find('.total');
    $el.text(slideCount);
  }
  
  function setCurrentSlideNumber(currentSlide) {
    var $el = $('.slide-count-wrap').find('.current');
    $el.text(currentSlide + 1);
  }
});