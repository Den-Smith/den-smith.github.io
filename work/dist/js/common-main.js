
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

	 // footer nav section + - change
	 function footerNav() {
	 	var width = $('body').innerWidth();
		if ($(window).width() > 767) {
			$('.footer_top').removeAttr('id');
			$('.accordion_item').removeClass('panel');
			$('.accordion_item h3 a').attr('data-toggle', '');
			$('.accordion_item .panel-collapse').removeClass('collapse');
			$('.accordion_item .panel-collapse ul').removeClass('panel-body');
			$('.accordion_item h3 a i').addClass('hidden');
		} else {
			$('.footer_top').attr('id', 'accordion2');
			$('.accordion_item').addClass('panel');
			$('.accordion_item h3 a').attr('data-toggle', 'collapse');
			$('.accordion_item .panel-collapse').addClass('collapse');
			$('.accordion_item .panel-collapse ul').addClass('panel-body');
			$('.accordion_item h3 a i').removeClass('hidden');
		}
	 }

	$(document).ready(footerNav);
	$(window).resize(footerNav);

	 $('#accordion2 h3 a').click(function () {
	 	$('#accordion2 h3 a').children().removeClass('fa-minus').addClass('fa-plus');
	 	if ($(this).attr('aria-expanded') == 'true') {
	 		$(this).children().removeClass('fa-minus').addClass('fa-plus');
	 	} else{
	 		$(this).children().removeClass('fa-plus').addClass('fa-minus');
	 	}
	 });


});









