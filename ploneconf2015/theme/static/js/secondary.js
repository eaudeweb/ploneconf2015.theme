$(document).ready(function() {
  window.setTimeout(function() {
    $('html, body').animate({
        scrollTop: $("#navbar").offset().top
    }, 500);
  }, 300);
});