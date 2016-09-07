// ------------------
$(document).ready(function() {

	$('#portfolio_grid').mixItUp();

	$('.section_content li').click(function() {
		$('.section_content li').removeClass('active');
		$(this).addClass('active');
	});

	$('.popup_content').magnificPopup({
		type:'inline',
		midClick: true,
		closeBtnInside: true,
		closeOnBgClick: false
	});

	$('.portfolio_item').each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i);
	})

	$('#carousel').carousel({
	  interval: 4000
	});

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



})

	new WOW().init();

