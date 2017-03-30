
$(document).ready(function(){

	// preloader
	$(window).on('load', function(){
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

	// menu button
	 $('.menu-btn').click(function(){
	 	$(this).toggleClass('active');
	 	$('.menu_container').toggleClass('active');
	 	$('body').toggleClass('scroll')
	 });
	
	// animate hero section's items
	 function animateForm() {
	 	$('.description_item').addClass('animate');
	 	$('.form_item').addClass('animate');
	 }
	 setTimeout(animateForm, 800);

	 // footer disclaimer section + - change
	 $('.footer_disclaimer .panel-heading a').click(function () {
	 	$('.footer_disclaimer .panel-heading a').children().removeClass('fa-minus').addClass('fa-plus');
	 	if ($(this).attr('aria-expanded') == 'true') {
	 		$(this).children().removeClass('fa-minus').addClass('fa-plus');
	 	} else{
	 		$(this).children().removeClass('fa-plus').addClass('fa-minus');
	 	}
	 });
	 
});









