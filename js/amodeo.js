/*!
 * AntonioAmodeo v0.1
 * Copyright © 2014 Antonio Amodeo
 * Created by Melvin Chien melvin.io
 */

 $(document).ready(function() {
    onResize();
    $("#carousel-testimonials").carousel();

    $(window).resize(onResize);
});

onResize = function() {
    var bgHeight = $("#hero-background").height();
    $("#hero-container").height(bgHeight);
    $("#hero-logo").css("margin-top", bgHeight * 0.3);    
    $("#hero-logo").css("margin-bottom", bgHeight * 0.25);
}