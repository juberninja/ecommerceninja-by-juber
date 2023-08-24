 jQuery(window).on("load",function(){
     jQuery('.tab-link').click( function() {
          // alert('hii');
          var tabID = jQuery(this).attr('data-tab');
          jQuery(this).addClass('active').siblings().removeClass('active');
          jQuery('#tab-'+tabID).addClass('active').siblings().removeClass('active');
          console.log('tabid',tabID,'#tab-'+tabID); 
      });
     //Autoplay video
     setTimeout(function(){
          if(jQuery('#video-first').length > 0){
               document.getElementById('video-first').play();
          }
          if(jQuery('#video-second').length > 0){
               document.getElementById('video-second').play();
          }
          if(jQuery('#video-third').length > 0){
               document.getElementById('video-third').play();
          }
          if(jQuery('#video-four').length > 0){
               document.getElementById('video-four').play();
          }
          if(jQuery('#video-five').length > 0){
               document.getElementById('video-five').play();
          }
     },2000);
 });
 jQuery(window).scroll(function () {
     var e = jQuery(window).scrollTop() / -10 + "px";
     jQuery(".all-bubble").css("transform", "translateY(" + e + ")");
 }); 
 jQuery('.bds_slide').slick({
     infinite: false,
     slidesToShow: 1,
     speed: 2000,
     arrows: false,
     variableWidth: true
 });
 jQuery('.bsi_slide').slick({
     infinite: false,
     slidesToShow: 1,
     variableWidth: true,
     arrows: false
 });
 