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
				$(window).attr('location','case.html');
			});
			$(".dropdown2").click(function(){
				$(window).attr('location','news.html');
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
			$(window).attr('location','case.html');
		});
		$(".dropdown2").click(function(){
			$(window).attr('location','news.html');
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