$(document).ready(function(){

	// Preloader
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    $('.menu-btn').click(function(){
    	$(this).toggleClass('active');
    	$('.menu_container').toggleClass('active');
    	$('body').toggleClass('scroll')
    });

});









