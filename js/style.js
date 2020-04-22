
$('#status').fadeOut();
$('#preloader').delay(350).fadeOut('slow');
$('body').delay(350).css({
    'overflow': 'visible'
});

$(document).ready(function () {
    $('.trigger').click(function () {
        var value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.filter').removeClass('is-animated')
                .fadeOut().finish().promise().done(function () {
                    $('.filter').each(function(i){
                        $(this).addClass('is-animated').delay((i++) * 400).fadeIn();
                    })
                   
                });
        } else {
            $('.filter').removeClass('is-animated')
                .fadeOut().finish().promise().done(function () {
                    $('.filter').filter('.' + value).each(function(i){
                        $(this).addClass('is-animated').delay((i++) * 400).fadeIn();
                    })
                   
                });
            }

        $(document).on('click', '.trigger', function () {
            $('.trigger').removeClass('active');
            $(this).addClass('active');
        });
    })

})
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".navbar").addClass("scroll");
        $(".navbar-dark .navbar-nav .nav-link").addClass("scroll-font");
    } else {
        $(".navbar").removeClass("scroll");
        $(".navbar-dark .navbar-nav .nav-link").removeClass("scroll-font");
    }
});
