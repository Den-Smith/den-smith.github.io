$(document).ready(function(){
	// Preloader
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    // main slider
    $('.main_slider').slick({
    	responsive: [
    	{
    	  breakpoint: 480,
    	  settings: {
    	    arrows: false
    	  }
    	}]
	});
});