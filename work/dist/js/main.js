$(document).ready(function(){

	// Preloader
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$('.menu-btn').click(function(){
		$(this).toggleClass('active');
		$('.menu_container').toggleClass('active');
		$('body').toggleClass('scroll')
	});

	function func() {
		$('.description_item').addClass('animate');
		$('.form_item').addClass('animate');
	}

	setTimeout(func, 800);

});









