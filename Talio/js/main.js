$(document).ready(function() {

    // Preloader
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    // mobile menu button
    $('#menu-toggle-wrapper').click(function(){
        $(this).toggleClass('active');
    });

    // fixed nav mobile
    $(window).resize(function() {
        var width = $('body').innerWidth()
        if ($(window).width() > 750) {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 129) {
                    $('header').addClass('fixed');
                    $('.margin_top_section').css({
                        'margin-top': '200px',
                    });
                } else {
                    $('header').removeClass('fixed');
                    $('.margin_top_section').css({
                        'margin-top': '0',
                    });
                }
            });
        } else {
            // $(window).scroll(function() {
            //     if ($(window).scrollTop() > 0) {
            //         $('header').addClass('fixed');
            //         $('.margin_top_section').css({
            //             'margin-top': '100px',
            //         });
            //     } else {
            //         $('header').removeClass('fixed');
            //         $('.margin_top_section').css({
            //             'margin-top': '0',
            //         });
            //     }
            // });
        };
    });

    var width = $('body').innerWidth()
        if ($(window).width() > 750) {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 129) {
                    $('header').addClass('fixed');
                    $('.margin_top_section').css({
                        'margin-top': '200px',
                    });
                } else {
                    $('header').removeClass('fixed');
                    $('.margin_top_section').css({
                        'margin-top': '0',
                    });
                }
            });
        } else {
            // $(window).scroll(function() {
            //     if ($(window).scrollTop() > 0) {
            //         $('header').addClass('fixed');
            //         $('.margin_top_section').css({
            //             'margin-top': '100px',
            //         });
            //     } else {
            //         $('header').removeClass('fixed');
            //         $('.margin_top_section').css({
            //             'margin-top': '0',
            //         });
            //     }
            // });
        };



    // mobile menu button

    // collection slider
    $('.collection_slider').slick({
        arrows: false,
        dots: true
    });

    // product slider
    $('.product_section_slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1287,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // testimonials slider
    $('.testimonials_slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // tooltips
    $(window).resize(function() {
    	var width = $('body').innerWidth()
        if ($(window).width() < 1600) {
    		$('.calc_size_button').tooltip();
    		$('.retailers_button').tooltip();
    	} else{
			$('.calc_size_button').tooltip('destroy');
    		$('.retailers_button').tooltip('destroy');
    	};
    });
    var width = $('body').innerWidth()
        if ($(window).width() < 1600) {
    		$('.calc_size_button').tooltip();
    		$('.retailers_button').tooltip();
    	} else{
			$('.calc_size_button').tooltip('destroy');
    		$('.retailers_button').tooltip('destroy');
    	};

    $(window).resize(function() {
    	var width = $('body').innerWidth()
        if ($(window).width() < 768) {
    		$('.reorder_button a').tooltip();
    	} else{
			$('.reorder_button a').tooltip('destroy');
    	};
    });
    var width = $('body').innerWidth()
        if ($(window).width() < 768) {
    		$('.reorder_button a').tooltip();
    	} else{
			$('.reorder_button a').tooltip('destroy');
    	};

    // details photos slider
     $('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
    $('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: false,
		dots: false,
		focusOnSelect: true,
		vertical: true,
		responsive: [{
            breakpoint: 992,
            settings: {
                vertical: false,
            }
        }]
	});

});
