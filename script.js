//Button Scroll
  $(function() {
    $('#scroll-button').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
    });
  });

 $( window ).on( "load", function() {
    if ($(window).innerWidth() > 1180) {
      $(".spotlight-container").css('height', $("#video1").height());
      $(".movie-section").css('min-height', $("#video1").height());
      }
    else {
      $(".movie-section").css('min-height', $("#video1").height());
    }
});

$(window).resize(function() {
  if ($(window).innerWidth() > 1180) {
    $(".spotlight-container").css('height', $("#video1").height());
    $(".movie-section").css('min-height', $("#video1").height());
    }
  else {
    $(".movie-section").css('min-height', $("#video1").height());
  }
});

$( window ).on( "load", function() {
    $("#landing-text").delay(500).fadeIn(2500);
});