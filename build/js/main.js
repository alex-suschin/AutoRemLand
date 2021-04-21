$(function() {

    $('.works-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        swipe: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 993,
            settings: {
                centerMode: true,
                arrows: false,
                dots: true,
                swipe: true
            }
        }]
    });

    $('#cascade-slider').cascadeSlider({

    });

    $('.works-slider').children('.slick-prev').addClass('disable');

    $(".works-slider").on("beforeChange", function(event, slick, currentSlide, slideCount, nextSlide) {
        var indexCur = $('.works-slider').children('.slick-current').attr('data-slick-index');
        console.log(indexCur);
        if (indexCur === 0) {
            $(this).children('.slick-prev').addClass('disable');
        } else {
            $(this).children('.slick-prev').removeClass('disable');

        }
    });

});

ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [51.845704, 55.132475],
            zoom: 15,
            scrollZoom: false,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([51.845704, 55.132475], {
            hintContent: 'Avto Rem Land',
            balloonContent: 'Avto Rem Land'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/map-marker.svg',
            iconImageSize: [44, 52],
            cursor: 'pointer',
            iconImageOffset: [-30, -60],
            balloonclose: true
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark)

});

$(window).on('load resize scroll', function() {

    var width = $(window).width();

    if (width > '700') {

    }

    if (width < '700') {

    }

});
//# sourceMappingURL=../sourcemaps/main.js.map
