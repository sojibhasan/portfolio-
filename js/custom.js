$(window).scroll(function() {
    if($(this).scrollTop()>50) {
        $( ".navbar-me" ).addClass("fixed-top");

    } else {
        $( ".navbar-me" ).removeClass("fixed-top");
    }
});

$('#menu > ul > li > a').click(function (e) {
    e.preventDefault();
    var curLink = $(this);
    var scrollPoint = $(curLink.attr('href')).position().top - 30;
    $('body,html').animate({
       scrollTop: scrollPoint
    }, 500);
});

new WOW().init();


// Off right click
// $(function() {
//     $(this).bind("contextmenu", function(e) {
//         e.preventDefault();
//     });
//     $('body').bind('copy paste',function(e) {
//         e.preventDefault(); return false;
//     });
// });
