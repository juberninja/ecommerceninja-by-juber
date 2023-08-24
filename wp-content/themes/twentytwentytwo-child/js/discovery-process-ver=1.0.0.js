jQuery(window).scroll(function () {
     var e = jQuery(window).scrollTop() / -10 + "px";
     jQuery(".all-bubble").css("transform", "translateY(" + e + ")");
 });
 jQuery(document).ready(function() {
     jQuery('.faq_text').click( function() {
         jQuery('.faq_title').removeClass('active');
         jQuery('.faq_content').removeClass('active');
         jQuery(this).children('.faq_title').toggleClass('active');
         jQuery(this).children('.faq_content').toggleClass('active');
     });
 });