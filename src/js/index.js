import * as $ from 'jquery';
import "slick-carousel"

window.onload = function () {
    $('#hero-video-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });
};