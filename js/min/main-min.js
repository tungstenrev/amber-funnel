$(window).load(function(){$(".status").fadeOut(),$(".preloader").delay(500).fadeOut("slow")}),$(window).scroll(function(){var o=$(window).scrollTop();o>526?$(".navbar-inverse").css("background-color","rgba(0,0,0,.6)"):$(".navbar-inverse").css("background-color","rgba(0,0,0,.1)")}),$(document).ready(function(){$("#video").videoBG({mp4:"video/bgvideo.mp4",ogv:"video/bgvideo.ogv",webm:"video/bgvideo.webm",poster:"video/bgvideo.jpg",fullscreen:!0,scale:!0,loop:!0,position:"relative",zIndex:0})});