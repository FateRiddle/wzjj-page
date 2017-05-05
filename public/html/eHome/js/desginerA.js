/**
 * Created by Administrator on 2017/4/20.
 */
$(".banner_tab").on("click","li",function(){
    var i=$(this).index();
    $(this).addClass("brownColor").siblings().removeClass("brownColor");
    $(".desginerA_content:eq("+i+")").addClass("disBlock").siblings().removeClass("disBlock");
})

$(".desginerA_page_num li").click(function(){
	$(this).addClass("active").siblings("li").removeClass("active");
	
});
//
//$(".desginerA_page>li:eq(1)").click(function(){
//	var n=$(".desginerA_page_num .active").data("num");
//	console.log(n);
//	if(n>0){
//		$(".desginerA_page_num li").eq(n-1).addClass("active").siblings().removeClass("active");
//	}
//});
//$(".desginerA_page>li:eq(3)").click(function(){
//	var n=$(".desginerA_page_num .active").data("num");
//	console.log(n);
//	if(n<4){
//		$(".desginerA_page_num li").eq(n+1).addClass("active").siblings().removeClass("active");
//	}
//});

//跳转二级页面
$(".desginerA_content").on("click","img",function(){
	var dataId=$(this).parent().data('id');
	console.log(dataId);
//	alert(dataId);
	location.href="desginerB.html?_ids="+dataId;
})

$(document).ready(function(){
	$(".nav .nav_a a:eq(5)").css("color","#FFC61E");
});