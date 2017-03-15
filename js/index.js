$(function(){
	//判断图片的宽高

	var len = $(".img_group").length
	for(var i = 0 ; i < len; i++){
		var img     = $(".img_group").eq(i);
		var img_len = img.children().length;
		if(img_len == 1){
			img.addClass("img1");
		}else if(img_len == 2){
			img.addClass("img2");
		}else if(img_len > 2 && img_len < 5){
			img.addClass("img2");
		}else if(img_len > 4){
			img.addClass("img7");
		}else{
			img.addClass("img8");
		}
		
	}
	
	
//	实现图片预览效果
	$(".img_group").children().on("click",function(){
		var $this = $(this).attr("src")
		$(".img_details").show();
		$(".img_details").find("img").attr("src",$this);
	})
	$(".close").on("click",function(){
		$(".img_details").hide();
	})
	
	
//	实现点赞效果
	$(".pic").on("click",function(){
		$(this).toggleClass("pic1");
		var p = $(this).siblings("p")
		var num = p.html();
		if($(this).hasClass("pic1")){
			num++;
		}else{
			num--;
		}
		
		p.text(num);
		
	})
	
	
	
	//实现评论的展开收起
	var ul_len = $("ul").length;
	var $more   = $(".more");
	for (var i = 0 ; i < ul_len ; i ++) {
		var li     = $("ul").eq(i).children()
		var li_len = li.length;
		if (li_len > 3) {
			li.eq(2).nextAll().hide();
			$more.eq(i).show();
			$more.eq(i).find("p").text((li_len-3) + "条")
		}else{
			$more.eq(i).hide();
		}
	}
	
	$(".more").on("click",function(){
		$(this).next().show();
		$(this).prev().children().show();
		$(this).hide();
	})

	$(".collect").on("click",function(){
		$(this).prevAll("ul").children().eq(2).nextAll().hide();
		$(this).prev().show();
		$(this).hide();
	})
	
	
//	实现删除
	$(".dele").on("click",function(){
		$(this).parents(".content").hide();
	})
	
	
	
})