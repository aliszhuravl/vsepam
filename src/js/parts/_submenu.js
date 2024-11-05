(function($) {
    $('.submenu_search').on('click', function () {
        $('.search_container').addClass('showed');
    });
    $('.close').on('click', function () {
        $('.search_container').removeClass('showed');
    });
})(jQuery);