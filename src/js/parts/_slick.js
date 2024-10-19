$(document).ready(function() {

    $('.slider_main').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 1,
        arrows: false
    });

    $('.gallery_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 2,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider_catalog').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});