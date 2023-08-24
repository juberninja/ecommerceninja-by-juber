jQuery('.more_our_expertise').hide();
jQuery('.ecommerce_expert_btn').click(function(){
   if(jQuery(this).hasClass('active_more')){
	   jQuery(this).removeClass('active_more');
	   jQuery('.more_our_expertise').hide();
	   jQuery(this).children('a').text('And Many More...');
	   jQuery(this).children('a').attr('title','And Many More...');
	   
   }else{
	   jQuery(this).addClass('active_more');
	   jQuery('.more_our_expertise').show();
	   jQuery(this).children('a').text('See Less');
	   jQuery(this).children('a').attr('title','See Less');
   }
   jQuery('html,body').animate({
          scrollTop: jQuery(".ecommerce_expert_btn").offset().top - 300
     }, 'slow'); 
});
jQuery(".pro-hire-btn a").click(function(){
	scrollToContact("Pro Package");
});
jQuery(".business-hire-btn a").click(function(){
	scrollToContact("Business Package");
});
jQuery(".starter-hire-btn a").click(function(){
	scrollToContact("Starter Package");
});
function scrollToContact(selctedopt){
	jQuery('html,body').animate({
		 scrollTop: jQuery(".custom-form-contact-wds").offset().top
	},'slow');
        console.log("selctedopt "+selctedopt);
	jQuery(".custom-form-contact-wds select").val(selctedopt).change();
}