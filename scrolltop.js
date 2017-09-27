jQuery(document).ready(function($){
	var top_start = parseInt($("#wrapper_bg_white").height())/5; //Wrapper
	var top_key = $(".scrolltop"); //Key class
	$(window).scroll(function (){
		if ($(this).scrollTop() > top_start){
			top_key.fadeIn(250);
		}
		else {
			top_key.fadeOut(250);
		}
	});
	top_key.click(function () {
		$('body, html').animate({scrollTop: 0}, 1000);
		return false;
		});
})
