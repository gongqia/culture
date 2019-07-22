$(function(){
	$( '.collapsed' ).on( 'click', function() {
	    var s = $('.collapsed').index(this);
		console.log(s+'点击')
	    if(s==0){
	    	$(".icon-bar").eq(0).addClass('icon-bar1');
	    	$(".icon-bar").eq(1).addClass('icon-bar2');
	    	$(".icon-bar").eq(2).addClass('icon-bar3');
	    }else{
	        $(".icon-bar").removeClass('icon-bar1');
	        $(".icon-bar").removeClass('icon-bar2');
	        $(".icon-bar").removeClass('icon-bar3');
	    }
	})  
	//点击跳转页面
	var a = $('header').width()
	 $(window).resize(function(){
	 	a= $('header').width()
	 	console.log(a)
	 	if(a>1024){
			$(".dropdown1").click(function(){
				$(window).attr('location','html/case.html');
			});
			$(".dropdown2").click(function(){
				$(window).attr('location','html/news.html');
			});
			
			//延迟hover的时间
			var outTimer;
		    $(".dropdown1").hover(function(){
		        clearTimeout(outTimer);
		        $('.dropdown1').addClass('open')
		    },function(){
		        outTimer = window.setTimeout(function(){
		           $('.dropdown1').removeClass('open')
		        },300);
		    });
		    
		    var outTimer1;
		    $(".dropdown2").hover(function(){
		        clearTimeout(outTimer1);
		        $('.dropdown2').addClass('open')
		    },function(){
		        outTimer1 = window.setTimeout(function(){
		           $('.dropdown2').removeClass('open')
		        },300);
		    });
		}
	})
	if(a>1024){
		$(".dropdown1").click(function(){
			$(window).attr('location','html/case.html');
		});
		$(".dropdown2").click(function(){
			$(window).attr('location','html/news.html');
		});
		
		//延迟hover的时间
		var outTimer;
	    $(".dropdown1").hover(function(){
	        clearTimeout(outTimer);
	        $('.dropdown1').addClass('open')
	    },function(){
	        outTimer = window.setTimeout(function(){
	           $('.dropdown1').removeClass('open')
	        },300);
	    });
	    
	    var outTimer1;
	    $(".dropdown2").hover(function(){
	        clearTimeout(outTimer1);
	        $('.dropdown2').addClass('open')
	    },function(){
	        outTimer1 = window.setTimeout(function(){
	           $('.dropdown2').removeClass('open')
	        },300);
	    });
	}
	
	//当滚轮滑到div出现时出现动画
	$(window).scroll(function(){
//		console.log($(window).scrollTop())
		if($(window).scrollTop()>($('.mindex-body04').offset().top-$(window).height())){
//			
		}
	})
	//自动加数字
	add();
	function add(){
		var a = Number($('.counter')[0].innerHTML);
		var b = Number($('.counter')[1].innerHTML);
		var c = Number($('.counter')[2].innerHTML);
		var d = Number($('.counter')[3].innerHTML);
		var move1 = setInterval(function(){
			a++;
			if(a>=2000){
				clearInterval(move1);
			}
			$('.counter')[0].innerHTML = a;
		},0.01)
		var move2 = setInterval(function(){
			b++;
			if(b>=3000){
				clearInterval(move2);
			}
			$('.counter')[1].innerHTML = b;
		},0.01)
		var move3 = setInterval(function(){
			c++;
			if(c>=400){
				clearInterval(move3);
			}
			$('.counter')[2].innerHTML = c;
		},0.01)
		var move4 = setInterval(function(){
			d++;
			if(d>=98){
				clearInterval(move4);
			}
			$('.counter')[3].innerHTML = d;
		},0.01)
	}
	//透明度轮播
	slider()
	function slider(){
		//鼠标在上面时关掉定时器
		var iNow = -1;
		var timer;
		inter();
		function inter(){
			timer = setInterval(function(){
				iNow++;
				if(iNow>($('.bigPic').length-1)){
					iNow=0;
				}
				changePic(iNow)
			},2000)
		}
		function changePic(index){
			$('.bigPic').siblings().css('opacity','0');
			$('.bigPic').eq(index).css('opacity','1')
		}
		$('.before').click(function(){
			clearInterval(timer);
			iNow--;
			if(iNow<0){
				iNow=1;
			}
//			console.log(iNow)
			changePic(iNow);
			inter()
		})
		$('.next').click(function(){
			clearInterval(timer);
			iNow++;
			if(iNow>1){
				iNow=0;
			}
			changePic(iNow);
			inter()
		})
		
	}
	//水平轮播
	sliderPath()
	//将相关变化封装成函数
	function sliderPath(){
		//当鼠标悬浮时清除定时器
		$('.timeItem').mouseenter(function(){
			clearInterval(timeOut)
		})
		$('.timeItem').mouseleave(function(){
			change()
		})
		//定时器
		var iNow = 0;
		var timeOut;
		change()
		function change(){
			timeOut = setInterval(function(){
				iNow++;
				if(iNow>8){
					iNow = 0;
					$('.lunboTrack>li').css({'left':-iNow*7.69+'%'}) ;
					iNow = 1;
				}
				console.log(iNow)
				$('.lunboTrack>li').stop().animate({'left':-iNow*7.69+'%'}) ;
			},3000)
		}
	}
	//第二个水平轮播
	sliderPath2()
	function sliderPath2(){
		$('.firstPart').mouseenter(function(){
			clearInterval(timeOut)
		})
		$('.firstPart').mouseleave(function(){
			change()
		})
		//定时器
		var iNow = 0;
		var timeOut;
		change()
		//向左点击
		$('.slideArrowleft').click(function(){
			clearInterval(timeOut);
			iNow--;
			
			if(iNow<0){
				iNow = 6;
				$('.firstPart>li').css({'left':-iNow*10+'%'}) ;
				iNow = 5;
			}
			$('.firstPart>li').stop().animate({'left':-iNow*10+'%'});
			change()
		})
		//向右点击
		$('.slideArrowright').click(function(){
			clearInterval(timeOut);
			iNow++;
			if(iNow>6){
				iNow = 0;
				$('.firstPart>li').css({'left':-iNow*10+'%'}) ;
				iNow = 1;
			}
			$('.firstPart>li').stop().animate({'left':-iNow*10+'%'});
			change()
		})
		function change(){
			timeOut = setInterval(function(){
				iNow++;
				if(iNow>6){
					iNow = 0;
					$('.firstPart>li').css({'left':-iNow*10+'%'}) ;
					iNow = 1;
				}
				console.log(iNow)
				$('.firstPart>li').stop().animate({'left':-iNow*10+'%'});
			},3000)
		}
	}
	
})
