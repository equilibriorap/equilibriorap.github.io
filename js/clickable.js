
$(function() {
    $('#luz').click(function(){
        $('#player_luz').addClass("on");
        $('#player_luz').removeClass("off");
        $('#player_parte').addClass("off");
        $('#player_parte').removeClass("on");
    });
});

$(function() {
    $('#parte').click(function(){
        $('#player_parte').addClass("on");
        $('#player_parte').removeClass("off");
        $('#player_luz').addClass("off");
        $('#player_luz').removeClass("on");
    });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});
