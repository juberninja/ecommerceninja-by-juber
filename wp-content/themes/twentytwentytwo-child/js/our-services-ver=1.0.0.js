jQuery(window).scroll(function () {
     var e = jQuery(window).scrollTop() / -10 + "px";
     jQuery(".all-bubble").css("transform", "translateY(" + e + ")");
 }); 