jQuery('.tab-link').click( function() {
    var tabID = jQuery(this).attr('data-tab');
    jQuery(this).addClass('active').siblings().removeClass('active');
    jQuery('#tab-'+tabID).addClass('active').siblings().removeClass('active');
});
jQuery(window).on("load",function(){
    //Autoplay video
    /*setTimeout(function(){
            document.getElementById('video-first').play();
            document.getElementById('video-second').play();
            document.getElementById('video-third').play();
            document.getElementById('video-four').play();
            document.getElementById('video-five').play();
    },2000);*/
});
jQuery(window).scroll(function () {
    var e = jQuery(window).scrollTop() / -10 + "px";
    jQuery(".all-bubble").css("transform", "translateY(" + e + ")");
}); 



