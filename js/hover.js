
$(function() {
    $('#equilibrio').hover(function(){ //Open on hover
        $('#particles-js').addClass("particles");
        $('#particles-js').removeClass("noparticles");
    },
    function(){ //Close when not hovered
        $('#particles-js').removeClass("particles");
        $('#particles-js').addClass("noparticles");
    });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});
