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

		$('.offers-nav li').click(function(event) {
			event.preventDefault();
			$('.offers-nav li').removeClass('active');
			$(this).addClass('active');
		});








});
