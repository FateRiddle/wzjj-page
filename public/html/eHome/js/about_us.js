$(document).ready(function() {
	$(".nav .nav_a a:eq(9)").css("color", "#FFC61E");
});

$(function(){
	$(".about-ul li").click(function(){
		$(this).addClass("yellow").siblings("li").removeClass("yellow");
		$(".tabs li").eq($(this).index()).show().siblings("li").hide();
	});
});