$(document).ready(function(){

	// preloader
	$(window).on('load', function(){
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

	// accordion - / +
	$('#accordion .panel-title a').click(function () {
		$('#accordion .panel-title a').children().removeClass('fa-minus').addClass('fa-plus');
		if ($(this).attr('aria-expanded') == 'true') {
			$(this).children().removeClass('fa-minus').addClass('fa-plus');
		} else{
			$(this).children().removeClass('fa-plus').addClass('fa-minus');
		}
	});

	// slider init
	$('#faq-slider').slick({
		
	});
	$('#main-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3
	});

});


// map init
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
};








