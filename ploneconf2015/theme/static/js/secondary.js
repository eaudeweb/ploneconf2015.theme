$(document).ready(function() {
  if ($('.section-front-page').length) {
    return;
  }
  var hash = window.location.hash;
  if(!hash && !$(window).scrollTop()){
    hash = '#navbar';
    var el = $('body').find(hash);
    window.setTimeout(function() {
      $('html, body').animate({
          scrollTop: el.offset().top
      }, 500);
    }, 300);
  }
});
