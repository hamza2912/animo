$(document).ready(function () {
    $('.intro-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    var introCarousel = $('.intro-carousel');
    introCarousel.owlCarousel();

    $('.right-arrow-btn').click(function () {
        introCarousel.trigger('next.owl.carousel');

    })

    $('.left-arrow-btn').click(function () {
        introCarousel.trigger('prev.owl.carousel');
    })

    $('.side-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    var sideCarousel = $('.side-carousel');
    sideCarousel.owlCarousel();

    $('.stories-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

    var storiesCarousel = $('.stories-carousel');
    storiesCarousel.owlCarousel();

    $('.stories-right-arrow-btn').click(function () {
        storiesCarousel.trigger('next.owl.carousel');

    })

    $('.stories-left-arrow-btn').click(function () {
        storiesCarousel.trigger('prev.owl.carousel');
    })

    $('.header-nav-toggle').on('click', function (e) {
        e.stopImmediatePropagation();
        const windowWidth = $(window).width();
        if (windowWidth < 768) {
            $('.header-nav').slideToggle();
        }
    });

    $('.header-nav a').on('click', function (e) {
        $('.header-nav a').removeClass('active');
        $(this).addClass('active');
    });

    $('body').on('click', function () {
        const windowWidth = $(window).width();
        if (windowWidth < 768) {
            $('.header-nav').slideUp();
        }
    });

});