$(function(){
	var $img=$(".imgList .img");
	for(var i=1;i<=$img.length;i++){
		$(".page").append("<span></span>");
	}
	var $span=$(".page span");
	$span.eq(0).addClass("current");
	$span.mouseover(function(){
		var num=$(this).index("span");
		$img.eq(num).stop().fadeIn().siblings(".img").stop().hide();
		$(this).addClass("current")
			   .siblings("span")
		       .removeClass("current");
	});
	//setInterval(fn,1000)
	function scrollLoop(){
		var cur_index=$(".page .current").index("span");// 获取处于当前状态下的  span 的索引值
		var next_index;
		if($(".page span:last").hasClass("current")){//判断 当前状态下的 span 是否为最后一个 span 
			next_index=0;						//如果当前页是最后一页，则跳转到第一页 （索引值为 0）
		}else{
		    next_index=cur_index+1;		//继续下一个span
		}
		$span.eq(next_index).triggerHandler("mouseover");//在 span （匹配元素）上触发 mouseover 事件
	} 
	 int=setInterval(scrollLoop,2000);
	$(".imgList").mouseover(function(){
                        clearInterval(int);	
                      })
                      .mouseout(function(){
                        int=setInterval(scrollLoop,2000);
                      });
});
/**/
$(document).ready(function() 
		{
			$("#lista1").als({
				visible_items: 1,
				scrolling_items: 1,
				orientation: "horizontal",
				circular: "yes",
				autoscroll: "no",
				interval: 5000,
				speed: 500,
				easing: "linear",
				direction: "right",
				start_from: 0
			});
		});