	// preloader
	$(window).on('load', function(){
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

// main js
$(document).ready(function(){


	$('.pricelits-tabs > li').addClass('collapse-item');
		$('.collapse-item a').not('.active').next('ul').css('display', 'none');
		$('.collapse-item > a').click(function(e) {
			e.preventDefault();
			$('.collapse-item > a').not($(this)).removeClass('active');
			$(this).toggleClass('active');
			$('.collapse-item ul').not($(this).next()).slideUp();
			$(this).next().slideToggle().clearQueue();
		});
		$(document).mouseup(function (e){
			var divCollapse = $(".collapse-item");
			if (!divCollapse.is(e.target) && divCollapse.has(e.target).length === 0) {
				$('.collapse-item ul').slideUp();
				$('.collapse-item > a').removeClass('active');
			}
		});



	// input add focus to icon
	// $('.input-wrap input').focus(function(event) {
	// 	$(this).parent().addClass('focus')
	// });
	// $('.input-wrap input').blur(function(event) {
	// 	$(this).parent().removeClass('focus')
	// });



	// slick sliders init
	// $('.slick-slider').slick({
	//   infinite: true,
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	// 	dots: true,
	// 	arrows: true
	// });
	$('.front-page-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		dots: true,
		arrows: true,
		fade: true,
	});



	// resize func
	// var moveToMmenuF = function() {
	// 	if (window.innerWidth < 768 || $('html').hasClass('mobile')) {

	// 		$('header .test').detach().prependTo('.mobile-test .test');

	// 	} else {

	// 		$('.mobile-test .test').detach().prependTo('header .test-wrap');

	// 	}
	// };
	// $(window).resize(moveToMmenuF);
	// $(document).ready(moveToMmenuF);






});
