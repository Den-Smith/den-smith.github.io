$(document).ready(function(){

	// Preloader
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    // mobile menu button, search button, contacts button
	$('.mobile_menu_button').click(function(){
		// deactive search button
		$('.search_wrap i').removeClass('active');
		$('.search_block').removeClass('active');
		$('.search_wrap i').removeClass('fa-times');
		$('.search_wrap i').addClass('fa-search');
		// deactive contacts button
		$('.contacts_wrap i').removeClass('active');
		$('.contacts_wrap .content_block').removeClass('active');
		$('.contacts_wrap i').removeClass('fa-times');
		$('.contacts_wrap i').addClass('fa-phone');

		$(this).toggleClass('active');
		$('.header_nav nav').toggleClass('active');
		return false;
	});

	$('.search_wrap i').click(function(){
		// deactive contacts button
		$('.contacts_wrap i').removeClass('active');
		$('.contacts_wrap .content_block').removeClass('active');
		$('.contacts_wrap i').removeClass('fa-times');
		$('.contacts_wrap i').addClass('fa-phone');
		// deactive nav menu button
		$('.mobile_menu_button').removeClass('active');
		$('.header_nav nav').removeClass('active');

		$(this).toggleClass('active');
		$('.search_wrap i').removeClass('fa-search fa-times');
			if ($(this).hasClass('active')) {
				$('.search_wrap i').addClass('fa-times');
			} else {
				$('.search_wrap i').addClass('fa-search');
			}
		$('.search_block').toggleClass('active');
		return false;
	});

	$('.contacts_wrap i').click(function(){
		// deactive search button
		$('.search_wrap i').removeClass('active');
		$('.search_block').removeClass('active');
		$('.search_wrap i').removeClass('fa-times');
		$('.search_wrap i').addClass('fa-search');
		// deactive nav menu button
		$('.mobile_menu_button').removeClass('active');
		$('.header_nav nav').removeClass('active');

		$(this).toggleClass('active');
		$('.contacts_wrap i').removeClass('fa-times fa-phone');
			if ($(this).hasClass('active')) {
				$('.contacts_wrap i').addClass('fa-times');
			} else {
				$('.contacts_wrap i').addClass('fa-phone');
			}
		$('.contacts_wrap .content_block').toggleClass('active');
		return false;
	});

	// deactive on document click
	$(document).click(function(event) {
		if ($(event.target).closest('.search_block').length) return;
		$('.search_block').removeClass('active');
		$('.search_wrap i').removeClass('active fa-times');
		$('.search_wrap i').addClass('fa-search');
		event.stopPropagation();
	});
	$(document).click(function(event) {
		if ($(event.target).closest('.contacts_wrap .content_block').length) return;
		$('.contacts_wrap .content_block').removeClass('active');
		$('.contacts_wrap i').removeClass('active fa-times');
		$('.contacts_wrap i').addClass('fa-phone');
		event.stopPropagation();
	});
	$(document).click(function(event) {
		if ($(event.target).closest('.header_nav nav').length) return;
		$('.header_nav nav').removeClass('active');
		$('.mobile_menu_button').removeClass("active");
		event.stopPropagation();
	});

	// slick slider
	$('.slick_slider_nav').slick({
		asNavFor: '.slider_content',
		focusOnSelect: true
	});
	$('.slider_content').slick({
		asNavFor: '.slick_slider_nav',
		fade: true,
		arrows: false
	});
	$('.product_page_slider').slick({
		slidesToShow: 4,
		infinite: true,
		responsive: [
		  {
		    breakpoint: 1200,
		    settings: {
		      slidesToShow: 3,
		      slidesToScroll: 3,
		    }
		  },
		  {
		    breakpoint: 991,
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
	
});

// map
var map;
function initMap() {
	var pos = {lat: 53.905, lng: 27.557};
	map = new google.maps.Map(document.getElementById('map'), {
	center: pos,
	zoom: 16,
	disableDefaultUI: true,
	scrollwheel: false
	});

	var image = 'img/map-marker.png';
	var marker = new google.maps.Marker({
	  position: pos,
	  map: map,
	  icon: image,
	  title: '143 Jerde Junion Suite 137'
	});

}









