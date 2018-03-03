$(document).ready(function($){
	"use strict";


    $(window).load(function(){
    var $container = $('.project-list');
    $container.isotope({
        filter: '*',
        margin:0,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.project-filter li').on('click', (function(){
        $('.project-filter .active').removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            margin:0,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    })); 
});

	// WOW Js Active
	new WOW().init();

    //fitvits active
    $(".right_video").fitVids();

	// ---- Active
    $(".staf-list").owlCarousel({
            items:4,
            nav:true,
            margin:30,
            loop:true,
            autoplay:false,
            dots:true,
            navText: [
                "<i class='fa fa-long-arrow-right'></i>",
                "<i class='fa fa-long-arrow-left'></i>"
            ],
        });

    $("#simple-menu").sidr();

    //$(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');




    //counter active

    $('.filter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {

        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
	});




}(jQuery));