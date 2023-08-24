jQuery('.tab-link').click(function () {
     var tabID = jQuery(this).attr('data-tab');
     jQuery(this).addClass('active').siblings().removeClass('active');
     jQuery('#tab-' + tabID).addClass('active').siblings().removeClass('active');
});
jQuery(window).on("load", function () {
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
jQuery(document).ready(function () {
     /*jQuery(".set > .port-filters").on("click", function() {
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
      
      });*/
     jQuery(".toggle-arrow").unbind().click(function () {
          jQuery(this).toggleClass("active");
          jQuery(".portfolio_list_subnav").toggleClass("active");
     });
     jQuery(".portfolio_list_nav  .port-filters").unbind().click(function (e) {
          e.stopPropagation();
          console.log('click event fire ----'); 
          jQuery(".port-filters").removeClass("active");
          console.log("here active 3");
          //jQuery(".inner-sub-nav").removeClass("active");


          /*jQuery(this).addClass("active");
           jQuery(this).find('.portfolio_list_subnav').addClass("active");
           jQuery(this).find('.pro_list_title').addClass("active");*/

          var updatePage = 0;
          jQuery("#portfolio-page").val(1);
          


          var catTitle = jQuery(this).attr("data-cat");

          if (catTitle == 'technologies' || catTitle == undefined) {
               //jQuery(this).toggleClass("active");
               //jQuery(this).find(".portfolio_list_subnav").toggleClass("active");
               console.log("categoryUrl - " + categoryUrl);
          } else {
               var categoryUrl = jQuery(this).attr("data-catlink");
               if (categoryUrl != undefined) {
                    var siteURL = jQuery(".siteURL").val();
                    var pageURL = siteURL+"/portfolio-category/" + categoryUrl;
                    console.log("pageURL - " + pageURL);
                    history.pushState(null, '', pageURL);
               }
          }
          jQuery(".ftheading").html(catTitle);
          jQuery(this).addClass("active");
          console.log('animate call'); 
          var width = jQuery(window).width();
          console.log('width---',width);
          if( width >= 480 && width <= 767 ) {
               console.log('moblie version called');
               jQuery('html, body').animate({
                    scrollTop: jQuery(".portfolio_list_rt").offset().top - 100
               }, 1500);
          } else if( width <= 479 ) {
               console.log('moblie version called');
               jQuery('html, body').animate({
                    scrollTop: jQuery(".portfolio_list_rt").offset().top - 100
               }, 1500);
          }else{ 
               console.log('desktop called');
               jQuery('html, body').animate({
                    scrollTop: jQuery(".portfolio_list_rt").offset().top - 100
               }, { complete: function () { sticky_relocate_new(); } }, 1500);
          }
         /* if (jQuery(".port-moblie")[0]){
               console.log('moblie version called');
               jQuery('html, body').animate({
                    scrollTop: jQuery(".portfolio_list_rt").offset().top - 100
               }, 1500);

          }else{
               jQuery('html, body').animate({
                    scrollTop: jQuery(".portfolio_list_rt").offset().top - 100
               }, { complete: function () { sticky_relocate_new(); } }, 1500);
          }*/
          var headingTb = jQuery(".port-filters.active").attr("data-cat");
          //jQuery(".portfolio_list_rt h3").text(headingTb);
          if (catTitle != 'technologies' && catTitle != undefined) {
               console.log("catTitle "+catTitle);
               jQuery(".portfolio-list-view").html('');
               ajaxCall(updatePage);
          }

     });

     function sticky_relocate_new() {
          console.log("new func callon c2");
          var window_top = jQuery(window).scrollTop();
          var footer_top = jQuery(".desktop-footer").offset().top;
          var div_top    = jQuery('#portfolio_list_lt').offset().top;
          var div_height = jQuery("#portfolio_list_lt").height();

          var padding = 20;  // tweak here or get from margins etc

          if (window_top + div_height > footer_top - padding)
               jQuery('#portfolio_list_lt').css({top: (window_top + div_height - footer_top + padding) * -1})
          else if (window_top > div_top) {
               jQuery('#portfolio_list_lt').addClass('stick');
               jQuery('.portfolio_listportfolio_list').addClass('stick-main');
               jQuery('#portfolio_list_lt').css({top: 0})
          } else {
               jQuery('#portfolio_list_lt').removeClass('stick');
               jQuery('.portfolio_listportfolio_list').removeClass('stick-main');
          }
     }

     jQuery(".inner-sub-nav-flush").click(function (e) {
          e.stopPropagation();
          jQuery(".port-filters").removeClass("active");
          jQuery(".inner-sub-nav").removeClass("active");
          //jQuery(".portfolio_list_subnav li").removeClass("active");
          jQuery(this).addClass("active");
          var updatePage = 0;
          jQuery("#portfolio-page").val(1);
          console.log("subnav click");
          jQuery(".portfolio-list-view").html('');
          ajaxCall(updatePage);

     });
     jQuery(".more_portfolio .embtn").click(function () {
          var pageNum = jQuery("#portfolio-page").val();
          console.log("embtn");

          ajaxCall(pageNum);
     });


     function ajaxCall(pageNum) {
          var catFilter = -1;
          //var tagFilter = -1;
          if (jQuery(".port-filters.active").length > 0) {
               catFilter = jQuery(".port-filters.active").attr("data-cat");
               if (catFilter == 'technologies') {
                    //catFilter = -1;
               }
          }
          /*if(jQuery(".portfolio_list_subnav li.active").length > 0){
           tagFilter = jQuery(".portfolio_list_subnav li.active").attr("data-tag");
           }
           if(tagFilter!='' && tagFilter!= -1){
           catFilter = -1;
           }*/
          var nonce = jQuery(this).attr("data-nonce");

          var updatePage = parseInt(pageNum) + parseInt(1);
          //var pageNum = jQuery("#portfolio-page").val();
          var totalPost = jQuery("#portfolio-total-posts").val();
          console.log('ajxpost',totalPost);
          var adminAjaxUrl = jQuery("#admin-ajax-url").val();
          var ajaxurl = "/wp-admin/admin-ajax.php";
          var data = {
               action: "ajax_script_post_load_more",
               page: updatePage,
               catFilter: catFilter,
               //tagFilter:tagFilter,
               total_posts: totalPost,
               nonce: nonce
          };

          jQuery.post(ajaxurl, data, function (response) {
               var newht = response.split("|x|");
               jQuery(".portfolio-list-view").append(newht[1]);
               console.log('comming');
               if(newht.length > 2){
                    jQuery(".service_main_banner h1").text(newht[2]);
               }
               
               jQuery("#portfolio-page").val(updatePage);
               var totalPost = jQuery(".portfolio-total-posts").val();
               if (parseInt(newht[0]) < 8) {
                    jQuery(".more_portfolio.port-btn").hide();
               }
               console.log('total',totalPost);
               jQuery(".port-filters").click(function () {
                    // jQuery(".port-filters").removeClass("active");
                    //jQuery(this).addClass("active");
                    //var headingTb = jQuery(".port-filters.active").attr("data-cat");
                    //jQuery(".portfolio_list_rt h3").text(headingTb);
               });
          });
     }
});
/*
 var ajaxurl = 'https://www.remi.com/wp-admin/admin-ajax.php';
 
 jQuery(".news-listing").html('<center><i class="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i></center>');
 
 var post_data = {
 
 page: page,
 
 search: jQuery('.news_search_text').val()
 
 };
 
 jQuery('form.post-list input').val(JSON.stringify(post_data));
 
 var data = {
 
 action: "news_posts",
 
 data: JSON.parse(jQuery('form.post-list input').val())
 
 };
 
 $.post(ajaxurl, data, function (response) {
 
 jQuery(".news-listing").html(response);
 
 equalheight('.latest-new .col-6');
 
 });
 * 
 */