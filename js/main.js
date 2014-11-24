
//
// Preloader
// Makes sure the whole site is loaded
//
$(window).load(function() {	
	//$(window).scrollTo(0,1);		
        // will first fade out the loading animation
	$(".status").fadeOut();	
        // will fade out the whole DIV that covers the website.        
	$(".preloader").delay(500).fadeOut("slow");
});

$(window).scroll(function() {
    var height = $(window).scrollTop();    
    if(height  > 526) {       
      	$(".navbar-inverse").css("background-color", "rgba(0,0,0,.6)");        
    }else{
    	$(".navbar-inverse").css("background-color", "rgba(0,0,0,.1)");        	
    }
});


// Video background
$(document).ready(function() {		


	// $('body').videoBG({
	// 	position:"fixed",
	// 	zIndex:0,
	// 	mp4:'../video/bgvideo.mp4',
	// 	ogv:'../video/bgvideo.ogv',
	// 	webm:'../video/bgvideo.webm',
	// 	poster:'../video/bgvideo.jpg',
	// 	opacity:1,
	// 	fullscreen:true,
	// });
	
	
	$('#video').videoBG({
		mp4:'video/bgvideo.mp4',
		ogv:'video/bgvideo.ogv',
		webm:'video/bgvideo.webm',
		poster:'video/bgvideo.jpg',
		fullscreen:true,		
		scale:true,				
		loop: true,	
		position:"relative",			
		zIndex: 0
	});
	
	
	// $('#text_replacement_demo').videoBG({
	// 	mp4:'../video/bgvideo.mp4',
	// 	ogv:'../video/bgvideo.ogv',
	// 	webm:'../video/bgvideo.webm',
	// 	poster:'../video/bgvideo.png',
	// 	textReplacement:true,
	// 	width:760,
	// 	height:24
	// });
		
});

