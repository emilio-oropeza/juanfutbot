$(document).ready(function(){
    $("#portada").height(getHeithCover());
    $(window).resize(function(){$("#portada").height(getHeithCover());});
    var body = $("html, body");
    $('a').click(animateScroll);

    $('.typing').css('opacity', 0);

    $('.typing').waypoint({
        handler:function(direction) {
            $(this).animate({ opacity: 1 }, 0);
            if($(this).hasClass("typing")) {
                $("#navbar-status-stat").text("escribiendo...");
                $(this).removeClass("typing");
            }
            if($(this).hasClass("last")){
                $("#navbar-status-stat").text("");
            }
        },
        offset: function() {
            if($(this).height() > 300){
                return $( window ).height() - 400
            }else{
                return $( window ).height() - $(this).height() - 100
            }
        }
    });

});


function getHeithCover(){
    var height = $(window).height();
    height = height - 150;
    return height;
}

function animateScroll(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
    return false;
}

