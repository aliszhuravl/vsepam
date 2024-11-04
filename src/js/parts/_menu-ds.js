(function($) {
    var hamburger = $('.burger-desktop');
    var body = $('body');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('.menu_desktop').addClass('menu_desktop_opened');
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('.menu_desktop').removeClass('menu_desktop_opened');
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose();
        } else {
            hamburgerOpen();
        }
    });

    $('.menu_wrapper').on('click', function() {
        hamburgerClose();
    });


})(jQuery);

