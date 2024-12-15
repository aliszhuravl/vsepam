$(function() {

    setTimeout(function () {
        $('.slider_main').addClass('add_slider');
    }, 500);

    $('.slider_main').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        fade: true,
        slidesToShow: 1,
        arrows: false
    });

    $('.fb_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        // adaptiveHeight: true,
        variableWidth: true,
        centerMode: true,
        arrows: false
    });

    $('.slider_catalog').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        arrows: true,
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
                    slidesToShow: 2,
                    centerMode: false
                }
            }
        ]
    });

    $('.slider_categories').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        arrows: true,
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
                    slidesToShow: 2,
                    centerMode: false
                }
            }
        ]
    });

    $('.gallery_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 2,
        arrows: false,
        variableWidth: true,
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
});