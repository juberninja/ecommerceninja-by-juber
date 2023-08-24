jQuery(document).ready(function () {
      // Sticky header 
     /*jQuery(window).scroll(function(){
          var sticky = jQuery('.hp_header'),
          scroll = jQuery(window).scrollTop();
          if (scroll >= 100) sticky.addClass('h-sticky');
          else sticky.removeClass('h-sticky');
     });*/  

     // Hide header on scroll down
     if (!jQuery('header').hasClass("hcontact")) {
          var didScroll;
          var lastScrollTop = 0;
          var delta = 0;
          var navbarHeight = jQuery('header').outerHeight()-200;

          jQuery(window).scroll(function(event){
              didScroll = true;
          });

          setInterval(function() {
              if (didScroll) {
                  hasScrolled();
                  didScroll = false;
              }
          }, 250);

          function hasScrolled() {
              var st = jQuery(this).scrollTop();
              // Make scroll more than delta
               if(Math.abs(lastScrollTop - st) <= delta)
                  return;
              
               //console.log('hii',st,'plus--',st + jQuery(window).height());
              
               if (st > lastScrollTop && st > navbarHeight){
                   // Scroll Down
                   jQuery('header').removeClass('h-sticky').addClass('h-sticky-h');       
                   jQuery('body').removeClass('bhed-sticky');            
               } else {
                  //Scroll Up
                  if(st + jQuery(window).height() < jQuery(document).height()) {
                    jQuery('header').addClass('h-sticky').removeClass('h-sticky-h');
                    jQuery('body').addClass('bhed-sticky');                 
                  }
                  
               } 
               if (st == 0){
                    jQuery('header').removeClass('h-sticky');
               } 
            
              lastScrollTop = st;
          }
     }


     //disable # link on header
     jQuery(".mainmenu li a[href='#']").each(function () {
        jQuery(this).attr('disabled','disabled');
        jQuery(this).css('pointer-events','none'); 
     });
});
if(jQuery(".special_support_selection").length > 0){
     var page = jQuery("#service_custom_val").val();
     if(parseInt(page)==361){ //BigCommerce
          var radiolbl = "BigCommerce";
     }else if(parseInt(page)==982){
          var radiolbl = "Shopify";
     }else if(parseInt(page)==1080){
          var radiolbl = "CS Cart";
     }else if(parseInt(page)==835){
          var radiolbl = "Magento";
     }else if(parseInt(page)==1135){
          var radiolbl = "PrestaShop";
     }else if(parseInt(page)==937){
          var radiolbl = "Shift4Shop";
     }else if(parseInt(page)==1031){
          var radiolbl = "Volusion";
     }else if(parseInt(page)==1517){
          var radiolbl = "WooCommerce";
     }else if(parseInt(page)==1160){
          var radiolbl = "eCommerce";
     }else if(parseInt(page) == 1682 || parseInt(page) == 8862 || parseInt(page) == 7933 || parseInt(page) == 8894 || parseInt(page) == 8892 || parseInt(page) == 8890 || parseInt(page) == 8886) {
          var radiolbl = "Website";
     }

     jQuery(".special_support_selection input").each(function(){
          var currentVal = jQuery(this).val();
          console.log("currentVal "+currentVal);
          var newVal = "";
          if(currentVal=="Ongoing Support"){
               newVal = "Ongoing "+radiolbl+" Support";
          }else if(currentVal=="One-time Support"){
               newVal = "One-time "+radiolbl+" Support";
          }
          jQuery(this).val(newVal);
          jQuery(this).next("span").text(newVal);
     });
     //jQuery(".special_support_selection").a  
     var btn = "Get A Quote For "+radiolbl+" Support";
     jQuery(".ineer-quote-form .wds-submit").val(btn);
}  

jQuery('a.go_back').click(function (event) {
          event.preventDefault();
          // window.location.href = window.location.href.replace(/#.*/,'');
          url = window.location.href;
          url = url.slice(0, url.lastIndexOf('/'));
});