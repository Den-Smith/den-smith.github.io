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



// Rules '+' / '-'

$(function(){
  $('.collapse').on('show.bs.collapse', function () {
        $(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
    });
    $('.collapse').on('hide.bs.collapse', function () {
        $(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
    });

});

// drag zone

$(document).ready(function() {
    var dropZone = $('#dropZone'),
        maxFileSize = 1000000; // максимальный размер файла - 1 мб.

    if (typeof(window.FileReader) == 'undefined') {
    dropZone.text('Не поддерживается браузером!');
    dropZone.addClass('error');
    }

    dropZone[0].ondragover = function() {
      dropZone.addClass('hover');
        return false;
    };
    
    dropZone[0].ondragleave = function() {
      dropZone.removeClass('hover');
        return false;
    };

    dropZone[0].ondrop = function(event) {
      event.preventDefault();
      dropZone.removeClass('hover');
      dropZone.addClass('drop');

      var file = event.dataTransfer.files[0];
        
      if (file.size > maxFileSize) {
          dropZone.text('Файл слишком большой!');
          dropZone.removeClass('drop');
          dropZone.addClass('error');
          return false;
      };
      var xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', uploadProgress, false);
    xhr.onreadystatechange = stateChange;
    xhr.open('POST', '../upload.php');
    xhr.setRequestHeader('X-FILE-NAME', file.name);
    xhr.send(file);

    
    };

    function uploadProgress(event) {
      var percent = parseInt(event.loaded / event.total * 100);
      dropZone.text('Загрузка: ' + percent + '%');
    }

    function stateChange(event) {
        if (event.target.readyState == 4) {
            if (event.target.status == 200) {
                dropZone.text('Загрузка успешно завершена!');
            } else {
                dropZone.text('Произошла ошибка!');
                dropZone.addClass('error');
            }
        }
    }


});