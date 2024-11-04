(function($) {
    $('.btn_show').on('click', function () {
        $('.hidden_content').toggleClass('hidden');
        $('.btn_show').addClass('hidden');
    });
})(jQuery);

(function($) {
    const handleClick = event => {
        const $target = $(event.target).next();
        $target.toggleClass("hidden");
        $(".more_menu").each(function() {
            if ($(this)[0] !== $target[0]) {
                $(this).addClass("hidden")
            }
        })
    };

    $(".more_btn").on("click", handleClick);
})(jQuery);