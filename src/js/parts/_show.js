(function($) {
    $('.more_points').on('click', function () {
        $('.param_container').removeClass('with-hidden');
        $('.label_box').removeClass('hidden_point');
        $('.more_points').fadeOut(50);
    });
})(jQuery);