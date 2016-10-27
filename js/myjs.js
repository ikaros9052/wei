// 第一屏轮播图
$(function(){
	var $li=$(".carousel li");
	$li.eq(0).show().siblings().hide();
	for(var i=0;i<$li.length;i++){
		var $span=$("<span></span>")
		$(".page").append($span);
	}
	$(".page span:first").addClass("active");
	$(".page span").mouseover(function(){
		var num=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$li.eq(num).fadeIn(300).siblings().fadeOut(300);
	})

	var numLi=$(".carousel li").length;
	//自动控制图片轮播
	var i=0;  //初始i=0
	var t=setInterval(moveR,3000);  //设置定时器，1.5秒切换下一站轮播图
	//向左切换函数
	function moveL(){
		i--;
		if(i==-1){
			i=numLi-1;  //如果这是第一张图片再按向左的按钮则切换到最后一张图
		}
		$(".page span").eq(i).addClass("active").siblings().removeClass("active");
		//对应底部数字添加背景
		$(".carousel li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
	}
	//向右切换函数
	function moveR(){
		i++;
		if(i==numLi){
			i=0;  //如果这是最后一张图片再按向右的按钮则切换到第一张图
		}
	$(".page span").eq(i).addClass("active").siblings().removeClass("active");
	//对应底部数字添加背景
	$(".carousel li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
	}
})
// 第二屏轮播图
$(function(){
	$(".page2 span").eq(0).css("background","#B61B1F");
	var $li=$(".list li");
	for(var i=0;i<$li.length;i++){
		var $span=$("<span></span>")
		$(".page2").append($span);
	}
	$(".page2 span:first").addClass("active");
	if(!$(".list").is(":animated")){
		$(".page2 span").mouseover(function(){
			var $width=$(".list li").width();
			$(this).addClass("active").siblings().removeClass("active");
			if($(".page2 span").last().hasClass("active")){
				$(".list").animate({"left":"-894px"});
			}else{
				$(".list").animate({"left":"-"+($width*$(this).index()-1)+"px"});
			}
			
		})
	}
	var numLi=$(".list li").length;
	//自动控制图片轮播
	var i=0;  //初始i=0
	var t=setInterval(move,1500);  //设置定时器，1.5秒切换下一站轮播图
	//向左切换函数
	function moveL(){
		i--;
		if(i==-1){
			i=numLi-1;  //如果这是第一张图片再按向左的按钮则切换到最后一张图
		}
		$(".page2 span").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
		$(".list li").eq(i).fadeIn(600).siblings().fadeOut(600);  //对应图片切换
	}
	//向右切换函数
	function move(){
		i++;
		if(i==numLi){
			i=0;  //如果这是最后一张图片再按向右的按钮则切换到第一张图
		}
		$(".page2 span").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
		$(".list li").eq(i).fadeIn(600).siblings().fadeOut(600);  //对应图片切换
	}
})
// 第五屏tab切换
$(function(){
	$(".boxSlide-tab li:first").addClass("on");
	$(".boxSlide-tab li").mouseover(function(){
		var $num=$(this).index();
		// alert($num)
		$(this).addClass("on").siblings().removeClass("on");
		$(".boxSlide-box li").hide().eq($num).show();
	})
})
// 兼容大尺寸浏览器
$(function(){
	var height=$(window).height();
	$(".w1000").css("height",height);
})
// $(function(){
// 	$nihao=$(window).height();
// 	$("#carousel li,#carousel ul,.C_wraper").css("height",$nihao);
// 	$(".carouselp").css("height","0px")
// })