$(function(){
	sliderPath()
	function sliderPath(){
	//	$('.firstPart').mouseenter(function(){
	//		clearInterval(timeOut)
	//	})
	//	$('.firstPart').mouseleave(function(){
	//		change()
	//	})
		//定时器
		var iNow = 0;
		var timeOut;
		change()
		//向左点击
		$('.leftButton').click(function(){
			clearInterval(timeOut);
			iNow--;
			
			if(iNow<0){
				iNow = 0;
			}
			$('.longTrack>li').stop().animate({'left':-iNow*20+'%'});
			change()
		})
		//向右点击
		$('.rightButton').click(function(){
			clearInterval(timeOut);
			iNow++;
			if(iNow>1){
				iNow = 1;
			}
			$('.longTrack>li').stop().animate({'left':-iNow*20+'%'});
			change()
		})
		//定时器
		function change(){
			timeOut = setInterval(function(){
				console.log($(window).width())
				
				if($(window).width()>992){
					console.log('大于992')
					iNow++;
					if(iNow>1){
						console.log('aaaaa')
						iNow = 1;
						$('.longTrack>li').css({'left':-iNow*20+'%'});
					}
				}
				if($(window).width()>768&&$(window).width()<992){
					console.log('小于992')
					iNow++
					if(iNow>3){
						console.log('aaaaa')
						iNow = 3;
						$('.longTrack>li').css({'left':-iNow*20+'%'});
						clearInterval(timeOut)
						back()
						function back(){
							var timein = setInterval(function(){
								console.log(iNow)
								iNow--
								$('.longTrack>li').stop().animate({'left':-iNow*20+'%'});
								if(iNow<=0){
									iNow=-1
									clearInterval(timein)
									change()
								}
							},3000)
						}
					}
				}
				if($(window).width()<768){
					console.log('小于992')
					iNow++
					if(iNow>4){
						console.log('bbbbb')
						iNow = 4;
						$('.longTrack>li').css({'left':-iNow*20+'%'});
						clearInterval(timeOut)
						back()
						function back(){
							var timein = setInterval(function(){
								console.log(iNow)
								iNow--
								$('.longTrack>li').stop().animate({'left':-iNow*20+'%'});
								if(iNow<=0){
									iNow=-1
									clearInterval(timein)
									change()
								}
							},3000)
						}
					}
				}
				console.log(iNow)
				$('.longTrack>li').stop().animate({'left':-iNow*20+'%'});
			},3000)
		}
	}
})
