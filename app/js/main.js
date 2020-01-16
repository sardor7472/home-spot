$(document).ready(function() {
    autoPlay();
    photoGallery()

    $('.slider-main').owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        navText: [
            '<div class="slider-brick-prev"><img src="images/slider-prev.png" alt=""></div>',
            '<div class="slider-brick-next"><img src="images/slider-next.png" alt=""></div>'
        ]
    });


    $('.top-main-slider').owlCarousel({
        items: 1,
        nav: true,
        navText: [
            '<div class="slider-brick-prev top-main-slider-arrow top-main-slider-arrow-left"><img src="images/slider-prev.png" alt=""></div>',
            '<div class="slider-brick-next top-main-slider-arrow top-main-slider-arrow-right"><img src="images/slider-next.png" alt=""></div>'
        ]
    })


    $('.top-brand-slider').owlCarousel({
        items: 6,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2500
    })


    $('.product-main').owlCarousel({
        margin: 15,
        // nav: true,
        // loop: true,
        responsive: {
            1199: {
                items: 4
            },
            991: {
                items: 3
            },
            767: {
                items: 2
            },
            575: {
                items: 2
            },
            480: {
                items: 2
            },
            0: {
                items: 1
            }

        },
        navText: [
            '<div class="reviews-next">' +
            `<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>` +
            '</div>',
            '<div class="reviews-prev">' +
            `<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>
` +
            '</div>'
        ]

    });

    $('.reviews-slider').owlCarousel({
        margin: 15,
        // nav: true,
        // loop: true,
        responsive: {
            991: {
                items: 2
            },
            480: {
                items: 2
            },
            380: {
                items: 1
            },
            0: {
                items: 1
            }
        },
        navText: [
            '<div class="reviews-next">' +
            `<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>` +
            '</div>',
            '<div class="reviews-prev">' +
            `<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>
` +
            '</div>'
        ]

    });

    $('.product-slider').owlCarousel({
        margin: 15,
        // nav: true,
        // loop: true,
        responsive: {
            991: {
                items: 4
            },
            480: {
                items: 2
            },
            380: {
                items: 1
            },
            0: {
                items: 1
            }
        },
        navText: [
            '<div class="reviews-next">' +
            `<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>` +
            '</div>',
            '<div class="reviews-prev">' +
            `<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>
` +
            '</div>'
        ]

    });

    /*language*/
    $('.top-menu-lang').click(function() {
        $(this).toggleClass('trans');
        $('.top-menu-lang-wrap').toggleClass('active');
    });


    $('.nav-burger').click(function() {
        $('.nav-drop').toggleClass('active');
    })
});




/* card page*/

function photoGallery() {
    var galleryFullCarousel = $('.gallery-wrap');
    var galleryThumbCarousel = $('.photo-gallery-thumb');
    var directSliderDuration = 500;


    galleryThumbCarousel.owlCarousel({
        nav: false,
        margin: 10,
        center: true,
        startPosition: 2,
        responsive: {
            991: {
                items: 5
            },
            576: {
                items: 3
            },
            480: {
                items: 3
            },
            0: {
                items: 2
            }
        },
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>'
        ],
    }).on('click', '.owl-item', function() {
        galleryFullCarousel.trigger('to.owl.carousel', [$(this).index(), directSliderDuration, true]);

    }).on('changed.owl.carousel', function(e) {
        galleryFullCarousel.trigger('to.owl.carousel', [e.item.index, directSliderDuration, true]);
    });


    galleryFullCarousel.owlCarousel({
        items: 1,
        startPosition: 2
    }).on('changed.owl.carousel', function(e) {
        galleryThumbCarousel.trigger('to.owl.carousel', [e.item.index, directSliderDuration, true]);
    }).on('mousewheel', 'owl-stage', function(e) {});


}

/* card page*/


/* video*/
function autoPlay() {
    var video = $('#main-video')[0];
    var playing = false;
    var playButton = $('#main-play');
    console.log(playButton);
    // try {
    //     var videoOffsetTop = $('#main-video').offset().top;
    // } catch (e) {

    // }
    $('.about-page-video').on('click', function() {
        if (playing) {
            video.pause();
            playing = false;
            playButton.css('opacity', 1)
        } else {
            video.play();
            playing = true;
            playButton.css('opacity', 0)
        }
    });

    // function loadVideo(videoSrc) {
    //     video.src = videoSrc;
    //     video.load();
    //     video.play();
    //     playing = true;
    //     playButton.css('opacity', 0)
    // }
}
/* video*/
const sliderEl = document.getElementById('slider');

if (sliderEl !== null) {
    noUiSlider.create(sliderEl, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 10000
        }
    });
    const minPrice = document.getElementById('minPrice')
    const maxPrice = document.getElementById('maxPrice')

    sliderEl.noUiSlider.on('update', function(values, handle) {
        minPrice.value = values[0] * 100;
        maxPrice.value = values[1] * 100;
    })
}



const sellCards = $('.card-wth-input-number');
sellCards.each(function() {
    const inputNumber = $(this).find('input[type=number]');
    const buttonInc = $(this).find('.input-number-increment');
    const buttonDec = $(this).find('.input-number-decrement');
    buttonInc.on('click', function() {
        inputNumber.val(parseInt(inputNumber.val()) + 1);
    })
    buttonDec.on('click', function() {
        if (parseInt(inputNumber.val()) > 1) {
            inputNumber.val(parseInt(inputNumber.val()) - 1);
        }
    })
});


try {
    $('.custom-select').customSelect()
} catch (e) {

}


$(window).on('scroll', function() {
    if($(this).scrollTop() > 180) {
        $('.nav').addClass('fixed-nav');
        $('body').addClass('navbar-fixed')
        } else {
        $('.nav').removeClass('fixed-nav');
        $('body').removeClass('navbar-fixed')

    }

})
