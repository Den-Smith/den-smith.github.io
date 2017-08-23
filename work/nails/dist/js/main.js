	// preloader
	$(window).on('load', function(){
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

// main js
$(document).ready(function(){

	var srchBlock = $('#search-block')
	srchBlock.focus(function() {
		$('.search-block .search-ico').addClass('hover-ico')
	}).blur(function(event) {
		$('.search-block .search-ico').removeClass('hover-ico')
	});


	  $('.slick-carousel-main').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			arrows: true
	  });

		$('.offers-slider--all').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true
	  });

		$('.brands-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true
	  });

		$('.front-catalog--test-1').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: false
	  });

		$('.offers-nav li').click(function(event) {
			event.preventDefault();
			$('.offers-nav li').removeClass('active');
			$(this).addClass('active');
		});


		$('.btn-minus').click(function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			if (count <= 1) {
				$(this).addClass('disabled')
			} else {
				$(this).removeClass('disabled')
			}
			console.log(count);
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.btn-plus').click(function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			if ($input <= 1) {
				$(this).siblings('.btn-minus').addClass('disabled')
			} else {
				$(this).siblings('.btn-minus').removeClass('disabled')
			}
			$input.change();
			return false;
		});
		$('.counter-number').click(function(event) {
			$(this).select()
		});




});
