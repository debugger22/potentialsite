$(document).ready(function() {

    /*
    var s = skrollr.init();
    skrollr.menu.init(s, {
        //skrollr will smoothly animate to the new position using `animateTo`.
        animate: true,
        easing: 'sqrt',
        scale: 1,
        duration: function(currentTop, targetTop) {
            return Math.abs(currentTop - targetTop) / 3;
        },
        handleLink: function(link) {
            //return 400; //Hardcoding 400 doesn't make much sense.
            return $(link).data('menu-top');
        }
    });
*/


    var slideshow_text = [
        'click on zoom button to get the zoom bar and drag it to change the zoom level',
        'timer button allows you to set the exposure time. You can also enable a delayed shot',
        'rotate the exposure dial to change the exposure of the camera',
        'click on the preview button at the bottom to get an approximate preview of the shot before you even take it',
        'press the shoot button on the right to start the long exposure shot',
        'you can always pause a shoot in progress and resume it later'
    ];

    var slideshow_images = [
        'images/screenshots/zoom.png',
        'images/screenshots/timer.png',
        'images/screenshots/exposure.gif',
        'images/screenshots/preview.png',
        'images/screenshots/shoot.png',
        'images/screenshots/pause.png'
    ];

    var currSlide = 0;
    var backgroundRunnerId = null;
    $('#slideshow-text').html(slideshow_text[currSlide]);
    $("#slideshow-image").attr("src", slideshow_images[currSlide]);
    $("#bubble0").addClass('active-bubble');

    function changeSlide() {
        currSlide++;
        if (currSlide == 6) currSlide = 0;
        $("#slideshow-text").fadeTo(1000, 0, function() {
            $('#slideshow-text').html(slideshow_text[currSlide]);
        }).fadeTo(500, 1);

        $("#slideshow-image").fadeTo(1000, 0, function() {
            $("#slideshow-image").attr("src", slideshow_images[currSlide]);
            for (var i = 0; i < 6; i++) {
                $("#bubble" + i).removeClass('active-bubble');
            }
            $("#bubble" + currSlide).addClass('active-bubble');
        }).fadeTo(500, 1);
    }

    $('.inactive-bubble').click(function() {
        currSlide = parseInt($(this).attr('slide-index'));
        $('#slideshow-text').html(slideshow_text[currSlide]);
        $("#slideshow-image").attr("src", slideshow_images[currSlide]);
        for (var i = 0; i < 6; i++) {
            $("#bubble" + i).removeClass('active-bubble');
        }
        $("#bubble" + currSlide).addClass('active-bubble');
        clearInterval(backgroundRunnerId);
        backgroundRunnerId = setInterval(changeSlide, 6000); // Change slide after 6 seconds
    });

    backgroundRunnerId = setInterval(changeSlide, 6000); // Change slide after 6 seconds

});