jQuery(document).ready(function($) {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1, //only displays one slide at the time
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 10,
        randomStart: true,
        pager: true,
        pause: 3000, //3 seconds wait before slide changes
        captions: true,
        pagerType: 'short', //pager settings
        pagerSelector: "#pager"
    });
});
