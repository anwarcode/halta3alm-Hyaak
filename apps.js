// PreLoader

$(window).load(function()
{
  $(".preloader .sk-wave").fadeOut(500);

  $(".preloader").fadeOut(500);
});

$(window).load(function() {

});

// Scroll To Top

var winScroll = $(window).scrollTop();
  if (winScroll > 1) {
    $('#to-top').css({bottom:"10px"});
  } else {
    $('#to-top').css({bottom:"-100px"});
  }
  $(window).on("scroll",function(){
    winScroll = $(window).scrollTop();

    if (winScroll > 1) {
      $('#to-top').css({opacity:1,bottom:"30px"});
    } else {
      $('#to-top').css({opacity:0,bottom:"-100px"});
    }
  });
  $('#to-top').click(function(){
    $('html, body').animate({scrollTop: '0px'}, 800);
    return false;
});

// Scroll Delay

$('a[href^="#tarrif"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
$('a[href^="#firstSection"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

// Video Tour

/*
var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector(".videoTour button");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "<i class='flaticon-pause'></i>";
  } else {
    vid.pause();
    pauseButton.innerHTML = "<i class='flaticon-multimedia'></i>";
  }
});
*/

$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});

// Masnory Portfolio

var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
});


// Social Share Button

$('#specialShare').on('click touchstart', function() {
  $(this).addClass('focus');
  return false;
});

$('#specialShare').on('mouseleave blur', function() {
  $(this).removeClass('focus');
});
