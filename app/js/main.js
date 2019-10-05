$(document).ready(function () {
    $('.main-slider').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: [
            '<div class="slider-partnyor-prev"><img src="../images/slider-prev.png" alt=""></div>',
            '<div class="slider-partnyor-next"><img src="../images/slider-next.png" alt=""></div>'
        ]
    });

    $('.partnyor-slider').owlCarousel({
        nav: true,
        loop: true,
        responsive: {
            991: {
                items: 5
            },
            480: {
                items: 3
            },
            380: {
                items: 2
            },
            0: {
                items: 1
            }
        },
        navText: [
            '<div class="partnyor-next">' +
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' +
            'width="40px" height="40px" viewBox="0 0 492 492">' +
            '<path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12' +
            'C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084' +
            'c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864' +
            'l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/>' +
            '</svg>' +
            '</div>',
            '<div class="partnyor-prev">' +
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
            '         width="40px" height="40px" viewBox="0 0 451.846 451.847" >\n' +
            '        <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744\n' +
            '\t\tL278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284\n' +
            '\t\tc6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>\n' +
            '</svg>' +
            '</div>'
        ]

    });

    $('.company-main-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        navText: [
            '<div class="slider-partnyor-prev"><img src="../images/slider-prev.png" alt=""></div>',
            '<div class="slider-partnyor-next"><img src="../images/slider-next.png" alt=""></div>'
        ]
    });

    $('.company-partnyor-slider').owlCarousel({
        nav: false,
        loop: true,
        responsive: {
            991: {
                items: 5
            },
            480: {
                items: 3
            },
            380: {
                items: 2
            },
            0: {
                items: 1
            }
        },

    });


var newAmetSlider = $('.new-amet-slider');
var fotoMainSlider = $('.foto-main-slider');
var directSliderDuration = 500;

    newAmetSlider.owlCarousel({
        margin: 10,
        center: true,
        responsive: {
            991: {
                items: 5
            },
            480: {
                items: 3
            },
            380: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    }).on('click', '.owl-item', function() {
        fotoMainSlider.trigger('to.owl.carousel', [$(this).index(), directSliderDuration, true]);
        console.log($(this).index());
    }).on('changed.owl.carousel', function(e) {
        fotoMainSlider.trigger('to.owl.carousel', [e.item.index, directSliderDuration, true]);
    });


    fotoMainSlider.owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        navText: [
            '<div class="slider-partnyor-prev"><img src="../images/slider-prev.png" alt=""></div>',
            '<div class="slider-partnyor-next"><img src="../images/slider-next.png" alt=""></div>'
        ]
    }).on('changed.owl.carousel', function(e) {
        newAmetSlider.trigger('to.owl.carousel', [e.item.index, directSliderDuration, true]);
    }).on('mousewheel', 'owl-stage', function(e) {});








    $('.header-burger').on('click', function () {
        $('.menu-active').addClass('open');
    });
    $('.header-burger-break').on('click', function () {
        $('.menu-active').removeClass('open');
    });


    $('.menu-nav ul').on('mouseleave', function () {
        var activeMenu = $(this).find('li.active');
        findActiveLink(activeMenu)
        // menu line
    });

    $('.nav-item').on('mouseover', function () {
        var lineWidth = $(this).width() + 'px';
        var leftPosition = parseInt($(this).css('marginLeft')) + $(this).position().left + 'px';
        menuLine(lineWidth, leftPosition)
    });


    function findActiveLink(activeMenu) {
        var lineWidth = activeMenu.width() ? activeMenu.width() + 'px' : 0;
        var leftPosition = activeMenu.css('marginLeft') ? parseInt(activeMenu.css('marginLeft')) + activeMenu.position().left + 'px' : 0;
        menuLine(lineWidth, leftPosition)
    }

    function menuLine(width, position) {
        var line = $('#line');
        line.css({
            width: width,
            left: position
        });
    }


    window.addEventListener('resize', function () {
        setTimeout(function () {
            findActiveLink($('.menu-nav li.active'));
        })
    });

    var windowWidth = window.outerWidth;

    if (windowWidth < 576) {

        $('.nav-item').unbind('mouseover');
        $('.menu-nav ul').unbind('mouseleave')
    } else {
        setTimeout(function () {
            // menu line
            findActiveLink($('.menu-nav li.active'));

        }, 200)

    }

    $('.foto-element-img').on('click', function () {
        var imgTeg = $(this).data('src');
        if (typeof imgTeg !== 'undefined') {
            $(this).removeClass('active');
        }
    })


})


//
// var text = $('.slider-desc').html();
//
// $('.slider-desc').html('<span>' + text.replace(/\n/gi, '</span><span>') + '</span>');


