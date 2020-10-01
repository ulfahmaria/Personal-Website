// image filter button
(function ($) {
    $("li.filter-button-onclick").click(function () {
        $("li.filter-button-onclick").css("background-color", "");
        $(this).css("background-color", " #a0d334");
    });
    
    $('.second.circle').circleProgress({
            value: 0.6
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
        });

    //isotpoe

        var $grid = $('.grid').isotope({});
        // filter items on button click
        $('.image-filter').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

    //owl carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })

    //video
    $('#vidBox').VideoPopUp({
        backgroundColor: "#17212a",
        opener: "video1",
        maxweight: "340",
        idvideo: "v1",
        pausevideo: true,
        maxweight: "640"
    });
})(jQuery);
