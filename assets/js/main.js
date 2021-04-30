$(document).ready(function() {

});

$(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
});

$(window).on("load", function() {
    $("#loader").hide();
});
$(".scroll-top").on("click", function() {
    $("html,body").animate({scrollTop:0},1300);
});