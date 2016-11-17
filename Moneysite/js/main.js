$(document).ready(function(){

	// Preloader
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    // steps
    $('.steps_item.item_1').click(function() {
    	if ($('.steps_item.item_1').hasClass('active')) {
    		$('.steps_item.item_1').removeClass('active')
    	} else{
    		$('.steps_item.item_1').addClass('active')
    	}
    });
    $('.steps_item.item_2').click(function() {
    	if ($('.steps_item.item_2').hasClass('active')) {
    		$('.steps_item.item_2').removeClass('active')
    	} else{
    		$('.steps_item.item_2').addClass('active')
    	}
    });
    $('.steps_item.item_3').click(function() {
    	if ($('.steps_item.item_3').hasClass('active')) {
    		$('.steps_item.item_3').removeClass('active')
    	} else{
    		$('.steps_item.item_3').addClass('active')
    	}
    });

    $(window).resize(function (){
		var width = $('body').innerWidth()
		if($(window).width() > 970){
			
			$('.steps_item').removeClass('hint--right');
			$('.steps_item').addClass('hint--left');
		} else {
			$('.steps_item').removeClass('hint--left');
			$('.steps_item').addClass('hint--right');

		};
	});

	var width = $('body').innerWidth()
		if($(window).width() > 970){
			
			$('.steps_item').removeClass('hint--right');
			$('.steps_item').addClass('hint--left');
		} else {
			$('.steps_item').removeClass('hint--left');
			$('.steps_item').addClass('hint--right');

		};

	// select
	$('.select_cash').select2({
		placeholder: "Select the amount of money",
		minimumResultsForSearch: -1
	});
	$(".select_cash").val('').trigger('change');


});

// Text accordion 

$(function(){
  $('.text .collapse').on('show.bs.collapse', function () {
        $(this).prev().find('.fa').removeClass().addClass('fa fa-chevron-down');
    });
    $('.text .collapse').on('hide.bs.collapse', function () {
        $(this).prev().find('.fa').removeClass().addClass('fa fa-chevron-right');
    });

});

// spoiler section

$(function(){
  $('.spoiler .collapse').on('show.bs.collapse', function () {
        $(this).prev().find('.fa').removeClass().addClass('fa fa-chevron-up');
        $('.collapse_button').addClass('active');
    });
    $('.spoiler .collapse').on('hide.bs.collapse', function () {
        $(this).prev().find('.fa').removeClass().addClass('fa fa-chevron-down');
        $('.collapse_button').removeClass('active');
    });

});