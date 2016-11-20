//Get started!
$(window).scroll(function(){

var wScroll = $(this).scrollTop();

var storyFade = [".fine-art", ".design", ".web"];

storyFade.forEach(function(storyFade){
  if ($(window).width() < 1500) {
        if(wScroll > $(storyFade).offset().top-250 && wScroll < $(storyFade).offset().top+300) {
   		$(storyFade).each(function(){
        $(storyFade).addClass('is-showing');
    	});

		}else{
		$(storyFade).removeClass('is-showing');
		}
  }else {
  		if(wScroll > $(storyFade).offset().top-350 && wScroll < $(storyFade).offset().top+600) {
   		$(storyFade).each(function(){
        $(storyFade).addClass('is-showing');
    	});

		}else{
		$(storyFade).removeClass('is-showing');
	}	
 }

});


});


//closing document ready and window scroll

 