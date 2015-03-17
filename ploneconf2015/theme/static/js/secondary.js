$(document).ready(function() {
  var hash = window.location.hash;
  if(!hash){
    hash = '#navbar';
  }
  var el = $('body').find(hash);

  window.setTimeout(function() {
    $('html, body').animate({
        scrollTop: el.offset().top
    }, 500);
  }, 300);
});
