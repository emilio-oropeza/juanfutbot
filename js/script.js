$(document).ready(function(){
	$("#portada").height(getHeithCover());
	$(window).resize(function(){$("#portada").height(getHeithCover());});
	var body = $("html, body");
	$('a').click(animateScroll);
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

