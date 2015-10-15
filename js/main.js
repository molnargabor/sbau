$(document).ready(function() {
	var $navbar = $('.sb-navbar');

	$(window).scroll(function(event) {
		if($(this).scrollTop() > 0){
			$navbar.addClass('sb-scrolled');
		}
		else{
			$navbar.removeClass('sb-scrolled');
		}
	});
});