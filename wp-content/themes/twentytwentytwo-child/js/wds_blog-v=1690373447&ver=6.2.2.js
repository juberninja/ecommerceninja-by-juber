jQuery(document).ready( function($) {       
       jQuery('.more_blog').click(function (event) {       
              event.preventDefault(); //prevent default action
              var blog = jQuery('.blog_listing_page .container ul li').length;
              var plus = blog+6;
              console.log('blog cnt',plus,'len',blog);
              // When btn is pressed.
              //jQuery("#more_posts").attr("disabled",true);
              var post_data = {
                   per_page: plus,
                   action: "wds_ajax_more_post",
              };
              var ajaxurl = jQuery("#admin-url").val();
              jQuery.ajax({
                     type: 'POST', 
                     url: ajaxurl,
                     data: post_data,
                     dataType:"JSON",
                     success: function (response) {
                            if(response.status == 'hide'){
                                   jQuery('.more_blog').css('display','none');
                            }
                            if (response.data) { 
                                   var data   = response.data;
                                   var len    = data.length; 
                                   var str    = '';
                                   if (len != 0) {
                                          for(var i=0; i<len; i++){
                                                 var img_url = data[i].img_url;
                                                 var date    = data[i].date;
                                                 var url     = data[i].url;
                                                 var title   = data[i].title;
                                                 var content = data[i].content;
                                                 var alt = data[i].alt;
                                                 var imgtitle = data[i].imgtitle;
                                                 str += '<li>';
                                                        str += '<a href="'+url+'"><img src="'+img_url+'" alt="'+alt+'" title="'+imgtitle+'" width="577" height="400"/></a>';
                                                        str += '<div class="blog_date_title">';
                                                               str += '<span class="blog_date">'+date+'</span>';
                                                               str += '<a href="'+url+'">'+title+'</a>';
                                                        str += '</div>';
                                                 str += '</li>';
                                          }
                                          jQuery('.blog_listing_page .container ul').html(str); 
                                   }
                            }
                     },
                     error: function (errorThrown) {}
              }); 

       });
});