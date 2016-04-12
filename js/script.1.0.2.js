$(document).ready(function(){
	$("#indepth-body").height(getHeightIndepthBody());
    $("#body_container").height(getHeithCover());
    $(window).resize(function(){
    	$("#indepth-body").height(getHeightIndepthBody());
    	$("#body_container").height(getHeithCover());
    });
    $('a').click(animateScroll);

    $('.typing').css('opacity', 0);

    $('.typing').waypoint({
        handler:function(direction) {
            $(this).animate({ opacity: 1 }, 1000);
            if($(this).hasClass("typing")) {
                $("#navbar-status-stat").text("...escribiendo");
                $(this).removeClass("typing");
            }
            if($(this).hasClass("last")){
                $("#navbar-status-stat").css({"visibility":"hidden"});
            }
        },
        offset: function() {
            if($(this).height() > 300){
                return $( window ).height() - 400
            }else{
                return $( window ).height() - $(this).height() - 100
            }
        },
        context: document.getElementById('body_container')
    });
    barsDisapear();
});

function barsDisapear(){
	$("#nav-bar-stats").remove();
	$("#mobile-horizontal-menu").remove();
	$("#top-bar-wrapper").remove();
	$("#mobilemenu").remove();
}

function getHeithCover(){
    var height = $("#indepth-body").height();
    return height;
}
function getHeightIndepthBody(){
	var height = $(window).height() - 160;
	return height;
}

function animateScroll(){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).get(0).scrollIntoView()
    }, 1500);	
    return false;
}

