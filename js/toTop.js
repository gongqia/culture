$(function(){
	
	$(window).scroll(function(){
//		console.log($(window).scrollTop())
		if($(window).scrollTop()>=600){
			$('.toTop').css('bottom','10px')
//			$('.toTop').css('opacity','0.5')
		}else{
			$('.toTop').css('bottom','-100px')
		}
	})
	$('.toTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    })
})
