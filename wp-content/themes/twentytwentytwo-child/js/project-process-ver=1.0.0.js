jQuery(document).ready(function () {
     jQuery("#step1").addClass('active');
     jQuery(".content_step1").addClass('active');
     jQuery('.step').click(function () {
          var step_id = this.id;
          jQuery('.step').removeClass('active');
          jQuery(this).addClass('active');
          jQuery('.content_' + step_id).addClass('active').siblings().removeClass('active');
     });
     
     /* Next Previous Button Start */
     
     jQuery(".btn-next").click(function(){ 
          console.log("here..");
          var activeContent = jQuery(this).attr("data-id");
              activeContent = parseInt(activeContent) + parseInt(1);
              console.log("activeContent "+activeContent);
              jQuery("h5.step").removeClass("active");
              jQuery("#step"+activeContent).trigger("click");
              jQuery("#step"+activeContent).trigger("click");
              jQuery('html, body').animate({
                    scrollTop: jQuery(".project_process_lt").offset().top
               }, 1000);
     });
     jQuery(".btn-prev").click(function(){ 
          console.log("here..");
          var activeContent = jQuery(this).attr("data-id");
              activeContent = parseInt(activeContent) - parseInt(1);
              console.log("activeContent "+activeContent);
              jQuery("h5.step").removeClass("active");
              jQuery("#step"+activeContent).trigger("click");
              jQuery('html, body').animate({
                    scrollTop: jQuery(".project_process_lt").offset().top
               }, 1000);
     });
     /* Next Previousj Button End */
     
});
jQuery(window).scroll(function () {
     var e = jQuery(window).scrollTop() / -10 + "px";
     jQuery(".all-bubble").css("transform", "translateY(" + e + ")");
});