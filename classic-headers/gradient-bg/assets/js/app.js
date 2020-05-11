( function( $ ) {
    "use strict";
    //Dynamic copyright year
    $('#year').text(new Date().getFullYear());

    // Navbar Toggler Icon
    var $navToggler = $('.navbar-toggler');
    $navToggler.on('click', function () {
        $(this).toggleClass('actived');
    })
    $navToggler.on('click', function () {
        $('.navbar-collapse').toggleClass('menu-opened');
    })
    
    // Fixed Navbar
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar-expand-lg').addClass("fixed-navbar");
        }
        else {
            $('.navbar-expand-lg').removeClass("fixed-navbar");
        }
    });
    

} )( jQuery );