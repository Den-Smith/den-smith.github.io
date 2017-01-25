$(document).ready(function(){
	// Preloader
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    // slick slider intro section
    $('.intro_slider').slick({
    	arrows: false,
    	dots: true,
    	fade: true,
  	});

  	// product tabs
  	$('.tab_2').click(function() {
  		$('.products_photos_wrap.photo_1').css({
  			'display': 'none',
  		})
  		$('.products_photos_wrap.photo_3').css({
  			'display': 'none',
  		})
  		$('.products_photos_wrap.photo_2').css({
  			'display': 'block',
  		})
  	});
  	$('.tab_3').click(function() {
  		$('.products_photos_wrap.photo_1').css({
  			'display': 'none',
  		})
  		$('.products_photos_wrap.photo_2').css({
  			'display': 'none',
  		})
  		$('.products_photos_wrap.photo_3').css({
  			'display': 'block',
  		})
  	});
  	$('.tab_1').click(function() {
  		$('.products_photos_wrap.photo_2').css({
  			'display': 'none',
  		})
  		$('.products_photos_wrap.photo_3').css({
  			'display': 'none',
  		})
  		$('.products_photos_wrap.photo_1').css({
  			'display': 'block',
  		})
  	});
});

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar ul li a").addClass("top-nav-collapse");
        $(".navbar ul li a").css({
        	'visibility': 'visible'
        });
        $('.logo').css({
  			'display': 'none',
  		})
  		$('.logo_small').css({
  			'display': 'block',
  		})
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar ul li a").removeClass("top-nav-collapse");
        $('.logo_small').css({
  			'display': 'none',
  		})
  		$('.logo').css({
  			'display': 'block',
  		})
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(50.954610, 4.239241));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(50.954610, 4.239241), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: true,

        
        // paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon
    var image = 'img/map_icon.png';
    var myLatLng = new google.maps.LatLng(50.954610, 4.239241);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

// wow animation
wow = new WOW({
  boxClass: 'wow', 
  animateClass: 'animated',
  offset: 150,
  mobile: false,
  live: true
});

wow.init();

// ScrollUp
    $(function () {
    	$.scrollUp({
    	    scrollName: 'scrollUp', //  ID элемента
    	    topDistance: '300', // расстояние после которого появится кнопка (px)
    	    topSpeed: 300, // скорость переноса (миллисекунды)
    	    animation: 'fade', // вид анимации: fade, slide, none
    	    animationInSpeed: 200, // скорость разгона анимации (миллисекунды)
    	    animationOutSpeed: 200, // скорость торможения анимации (миллисекунды)
    	    scrollText: '', // текст
    	    activeOverlay: false, // задать CSS цвет активной точке scrollUp, например: '#00FFFF'
    	});
    });