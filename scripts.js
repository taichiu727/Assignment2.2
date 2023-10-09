$(function($){
	$(document).ready(function() {	
		$('.scrolltotop').click(function(){
			$('html').animate({'scrollTop' : '0px'}, 400);
		});
		
		$(window).scroll(function(){
			var upto = $(window).scrollTop();
			if(upto > 500) {
				$('.scrolltotop').fadeIn();
			} else {
				$('.scrolltotop').fadeOut();
			}
		});
		$('.hamburger span i').click(function(){
        	$(this).toggleClass('fa-times')
        });

		$(".mobile-menu-item ul li a ").click(function (){
			$(this).next().slideToggle();

		});

		$(".hamburger span i").click(function (){
			$(".mobile-menu-area").toggleClass('ac-menu');
			$('body').toggleClass('body-overflows');
		});		
	});
});