/**
 * Created by Sky on 005 05.07.16.
 */
$(function () {
    $('.carousel').carousel({
        interval: 5000
    });
    
    $('.search').on('click', function () {
        $('.main_menu .navbar-form').slideToggle();
    });

    $('#elastislide').elastislide();

});

$(window).load(function () {
    var carouselCaptionWidth = $('#carousel_sidebar .active img').width();
    $('#carousel_sidebar img').each(function () {
        $(this).attr('width', carouselCaptionWidth);
    });
    $('#carousel_sidebar .sidebar_carousel-caption').css('max-width', carouselCaptionWidth + 'px');
    $('#carousel_sidebar .carousel-indicators').css('max-width', carouselCaptionWidth + 'px');
    $('.sidebar .banenr').css('max-width', carouselCaptionWidth + 'px');
});