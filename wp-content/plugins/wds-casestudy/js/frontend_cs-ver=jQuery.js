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
    },5000);*/
});
jQuery(window).scroll(function () {
    var e = jQuery(window).scrollTop() / -10 + "px";
    jQuery(".all-bubble").css("transform", "translateY(" + e + ")");
}); 
// Portfolio Accordion Left 
jQuery(document).ready(function() {
    jQuery(".set > .port-filters").on("click", function() {
        if (jQuery(this).hasClass("active")) {
        jQuery(this).removeClass("active");
        jQuery(this)
            .siblings(".content")
            .slideUp(200);
        jQuery(".set > .port-filters i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        } else {
        jQuery(".set > .port-filters i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        jQuery(this)
            .find("i")
            .removeClass("fa-plus")
            .addClass("fa-minus");
        jQuery(".set > .port-filters").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".content").slideUp(500);
        jQuery(this)
                .siblings(".content")
                .slideDown(500);
            }
    });
     jQuery('.tab-link').click( function() {
          var tabID = jQuery(this).attr('data-tab');
          var tabCat = jQuery(this).attr('data-cat');
          jQuery(this).addClass('active');
          var updatePage = 0;
          jQuery(".case_study_tab.active .tab_content ul").empty();
          ajaxCall(updatePage);
     });
     jQuery(".bottom_button .cs_btn").click(function(){
         var pageNum = jQuery("#casestudy-page").val();
          ajaxCall(pageNum);
    });
     function ajaxCall(pageNum){
          var catFilter =  -1;
          if(jQuery(".tab_filter .tab-link.active").length > 0){
               catFilter = jQuery('.tab-link.active').attr("data-cat");
              
               if(catFilter=="all" || catFilter=="All"){
                    catFilter =  -1;
               }
          }
          var updatePage = parseInt(pageNum) + parseInt(1);
          //var pageNum = jQuery("#casestudy-page").val();
          var totalPost = jQuery("#casestudy-total-posts").val();
          var adminAjaxUrl = jQuery("#admin-ajax-cs-url").val();
          var ajaxurl = "/wp-admin/admin-ajax.php";
          var data = {
                  action: "ajax_script_casestudy_load_more",
                  page:updatePage,
                  catFilter:catFilter,
                  total_posts: totalPost,
             };

          jQuery.post(ajaxurl, data, function (response) {
               console.log(response);
               var newht = response.split("|x|");
               console.log(newht[0]);
               jQuery(".case_study_tab.active .tab_content ul").append(newht[1]);
               jQuery("#casestudy-page").val(updatePage);
               //if(parseInt(newht[0]) < 6){
               setTimeout(function() {
                var cnt = jQuery('.tab_content ul li').length;
                    if (newht[0] == cnt) {
                        jQuery(".bottom_button").hide();
                    }else{
                        jQuery(".bottom_button").show();
                    }
               },100);
               
          });
    }
   /* jQuery(".port-filters-cs").click(function(){
         jQuery(".port-filters").removeClass("active");
         jQuery(this).addClass("active");
         var updatePage = 0;
         jQuery("#casestudy-page").val(1);
         jQuery(".casestudy-list-view").html('');
         jQuery(".technology-tags li").removeClass("active");
         
         var catTitle = jQuery(this).attr("data-cat");
         jQuery(".ftheading").html(catTitle);
          //ajaxCall(updatePage);
          
    });
    jQuery(".technology-tags-cs li").click(function(){
         jQuery(".technology-tags li").removeClass("active");
         jQuery(this).addClass("active");
          var updatePage = 0;
          jQuery("#casestudy-page").val(1);
          jQuery(".casestudy-list-view").html('');
          //ajaxCall(updatePage);
    });
    jQuery(".port-btn-cs .embtn").click(function(){
         var pageNum = jQuery("#casestudy-page").val();
          //ajaxCall(pageNum);
    });
    
    
    function ajaxCall(pageNum){
         var catFilter =  -1;
          var tagFilter = -1;
          if(jQuery(".port-filters-cs.active").length > 0){
               catFilter = jQuery(".port-filters-cs.active").attr("data-cat");
          }
          if(jQuery(".technology-tags-cs li.active").length > 0){
               tagFilter = jQuery(".technology-tags-cs li.active").attr("data-tag");
          }
          var nonce = jQuery(this).attr("data-nonce");
          
          var updatePage = parseInt(pageNum) + parseInt(1);
          //var pageNum = jQuery("#casestudy-page").val();
          var totalPost = jQuery("#casestudy-total-posts").val();
          var adminAjaxUrl = jQuery("#admin-ajax-url").val();
          var ajaxurl = "http://localhost/plugin-dev/wp-admin/admin-ajax.php";
          var data = {
                  action: "ajax_script_post_load_more",
                  page:updatePage,
                  catFilter:catFilter,
                  tagFilter:tagFilter,
                  total_posts: totalPost,
                  nonce: nonce
             };

          jQuery.post(ajaxurl, data, function (response) {
               console.log(response);
               
               jQuery(".casestudy-list-view").append(response);
               jQuery("#casestudy-page").val(updatePage);
               jQuery(".port-filters").click(function(){
                     jQuery(".port-filters").removeClass("active");
                     jQuery(this).addClass("active");
               });
          });
    }*/
});
