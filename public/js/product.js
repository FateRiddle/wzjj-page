
	//开始
	$(function(){
        //点击移动
		function onclick(obj,obj1,obj2,speed,x,y) {
			obj1.click(function () {
				speed--;
				if(speed==(2-x)){
					obj.css({left:-y});
					speed= -2;
				}
				obj.stop().animate({left:speed*217}, 500);
			});
			obj2.click(function () {
				speed++;
				if(speed==0){
					obj.css({left:(3-x)*y});
					speed = -(x -4) ;
				}
				obj.stop().animate({left:speed*217}, 500);
			});
		}

		//图片
		//一
		$(".num1_li_btn1").click(function(){
			$(".num1_li_pic1").css("display","block");
			$(".num1_li_pic2").css("display","none");
			$(".num1_li_pic3").css("display","none");
			//轮播
			$(".classification_num1_sli1_pic").css("display","block");
			$(".classification_num1_sli2_pic").css("display","none");
			$(".classification_num1_sli3_pic").css("display","none");
		});
		$(".num1_li_btn2").click(function(){
			$(".num1_li_pic1").css("display","none");
			$(".num1_li_pic2").css("display","block");
			$(".num1_li_pic3").css("display","none");
			//轮播
			$(".classification_num1_sli1_pic").css("display","none");
			$(".classification_num1_sli2_pic").css("display","block");
			$(".classification_num1_sli3_pic").css("display","none");
		});
		$(".num1_li_btn3").click(function(){
			$(".num1_li_pic1").css("display","none");
			$(".num1_li_pic2").css("display","none");
			$(".num1_li_pic3").css("display","block");
			//轮播
			$(".classification_num1_sli1_pic").css("display","none");
			$(".classification_num1_sli2_pic").css("display","none");
			$(".classification_num1_sli3_pic").css("display","block");
		});
		//瓷砖类
		var img1 = -2;
		var lil1 = $(".images1 > li").length;
		var liw1 = $(".images1 > li").outerWidth();
        $(".images1").width(lil1*liw1);
		onclick($(".images1"),$(".num1_btn1"),$(".num1_btn2"),img1,lil1,liw1);


		//卫浴类
		//选项
		$(".classification_num2_sli_nav ul li").click(function(){
			$(this).css({"color":"#ffc519","background":"url(../images/classification_bg.png)"}).siblings("li").css({"background":"","color":""});
		});
		//轮播
		var img2_0 = -2;
		var img2_1 = -2;
		var img2_2 = -2;
		var img2_3 = -2;
		var img2_4 = -2;
		var img2_5 = -2;
		var img2_6 = -2;
		var lil2_0 = $('.images2').eq(0).children().length;
		var lil2_1 = $('.images2').eq(1).children().length;
		var lil2_2 = $('.images2').eq(2).children().length;
		var lil2_3 = $('.images2').eq(3).children().length;
		var lil2_4 = $('.images2').eq(4).children().length;
		var lil2_5 = $('.images2').eq(5).children().length;
		var lil2_6 = $('.images2').eq(6).children().length;
		var liw2 = $(".images2 > li").outerWidth();
		$(".images2").eq(0).width(lil2_0*liw2);
		$(".images2").eq(1).width(lil2_1*liw2);
		$(".images2").eq(2).width(lil2_2*liw2);
		$(".images2").eq(3).width(lil2_3*liw2);
		$(".images2").eq(4).width(lil2_4*liw2);
		$(".images2").eq(5).width(lil2_5*liw2);
		$(".images2").eq(6).width(lil2_6*liw2);
		onclick($(".images2").eq(0),$(".num2_btn1"),$(".num2_btn2"),img2_0,lil2_0,liw2);
		onclick($(".images2").eq(1),$(".num2_btn1"),$(".num2_btn2"),img2_1,lil2_1,liw2);
		onclick($(".images2").eq(2),$(".num2_btn1"),$(".num2_btn2"),img2_2,lil2_2,liw2);
		onclick($(".images2").eq(3),$(".num2_btn1"),$(".num2_btn2"),img2_3,lil2_3,liw2);
		onclick($(".images2").eq(4),$(".num2_btn1"),$(".num2_btn2"),img2_4,lil2_4,liw2);
		onclick($(".images2").eq(5),$(".num2_btn1"),$(".num2_btn2"),img2_5,lil2_5,liw2);
		onclick($(".images2").eq(6),$(".num2_btn1"),$(".num2_btn2"),img2_6,lil2_6,liw2);

		//二
		$(".num2_li_btn1").click(function(){
			$(".num2_li_pic1").css("display","block");
			$(".num2_li_pic2").css("display","none");
			$(".num2_li_pic3").css("display","none");
			$(".classification_num2_sli1_pic").css("display","block");
			$(".classification_num2_sli2_pic").css("display","none");
			$(".classification_num2_sli3_pic").css("display","none");
		});
		$(".num2_li_btn2").click(function(){
			$(".num2_li_pic1").css("display","none");
			$(".num2_li_pic2").css("display","block");
			$(".num2_li_pic3").css("display","none");
			$(".classification_num2_sli1_pic").css("display","none");
			$(".classification_num2_sli2_pic").css("display","block");
			$(".classification_num2_sli3_pic").css("display","none");
		});
		$(".num2_li_btn3").click(function(){
			$(".num2_li_pic1").css("display","none");
			$(".num2_li_pic2").css("display","none");
			$(".num2_li_pic3").css("display","block");
			$(".classification_num2_sli1_pic").css("display","none");
			$(".classification_num2_sli2_pic").css("display","none");
			$(".classification_num2_sli3_pic").css("display","block");
		});
		
		//吊顶
		//轮播

		var img3_0 = -2;
		var img3_1 = -2;
		var img3_2 = -2;
		var lil3_0 = $('.images3').eq(0).children().length;
		var lil3_1 = $('.images3').eq(1).children().length;
		var lil3_2 = $('.images3').eq(2).children().length;
		var liw3 = $(".images3 > li").outerWidth();
		$(".images3").eq(0).width(lil3_0*liw3);
		$(".images3").eq(1).width(lil3_1*liw3);
		$(".images3").eq(2).width(lil3_2*liw3);

		onclick($(".images3").eq(0),$(".num3_btn1"),$(".num3_btn2"),img3_0,lil3_0,liw3);
		onclick($(".images3").eq(1),$(".num3_btn1"),$(".num3_btn2"),img3_1,lil3_1,liw3);
		onclick($(".images3").eq(2),$(".num3_btn1"),$(".num3_btn2"),img3_2,lil3_2,liw3);
        $(".num3_li_btn1").click(function(){
			$(".num3_li_pic1").css("display","block");
			$(".num3_li_pic2").css("display","none");
			$(".num3_li_pic3").css("display","none");
			$(".classification_num3_sli1_pic").css("display","block");
			$(".classification_num3_sli2_pic").css("display","none");
			$(".classification_num3_sli3_pic").css("display","none");
		});
		$(".num3_li_btn2").click(function(){
			$(".num3_li_pic1").css("display","none");
			$(".num3_li_pic2").css("display","block");
			$(".num3_li_pic3").css("display","none");
			$(".classification_num3_sli1_pic").css("display","none");
			$(".classification_num3_sli2_pic").css("display","block");
			$(".classification_num3_sli3_pic").css("display","none");
		});
		$(".num3_li_btn3").click(function(){
			$(".num3_li_pic1").css("display","none");
			$(".num3_li_pic2").css("display","none");
			$(".num3_li_pic3").css("display","block");
			$(".classification_num3_sli1_pic").css("display","none");
			$(".classification_num3_sli2_pic").css("display","none");
			$(".classification_num3_sli3_pic").css("display","block");
		});
		
		//厨电类
		//选项
		$(".classification_num4_sli_nav ul li").click(function(){
			$(this).css({"color":"#ffc519","background":"url(../images/classification_bg.png)"}).siblings("li").css({"background":"","color":""});
		});
		//三
		$(".num4_li_btn1").click(function(){
			$(".num4_li_pic1").css("display","block");
			$(".num4_li_pic2").css("display","none");
			$(".num4_li_pic3").css("display","none");
			$(".classification_num4_sli1_pic").css("display","block");
			$(".classification_num4_sli2_pic").css("display","none");
			$(".classification_num4_sli3_pic").css("display","none");
		});
		$(".num4_li_btn2").click(function(){
			$(".num4_li_pic1").css("display","none");
			$(".num4_li_pic2").css("display","block");
			$(".num4_li_pic3").css("display","none");
			$(".classification_num4_sli1_pic").css("display","none");
			$(".classification_num4_sli2_pic").css("display","block");
			$(".classification_num4_sli3_pic").css("display","none");
		});
		$(".num4_li_btn3").click(function(){
			$(".num4_li_pic1").css("display","none");
			$(".num4_li_pic2").css("display","none");
			$(".num4_li_pic3").css("display","block");
			$(".classification_num4_sli1_pic").css("display","none");
			$(".classification_num4_sli2_pic").css("display","none");
			$(".classification_num4_sli3_pic").css("display","block");
		});
		//轮播
		var img4_0 = -2;
		var img4_1 = -2;
		var img4_2 = -2;
		var img4_3 = -2;
		var img4_4 = -2;
		var lil4_0 = $('.images4').eq(0).children().length;
		var lil4_1 = $('.images4').eq(1).children().length;
		var lil4_2 = $('.images4').eq(2).children().length;
		var lil4_3 = $('.images4').eq(3).children().length;
		var lil4_4 = $('.images4').eq(4).children().length;

		var liw4 = $(".images4 > li").outerWidth();
		$(".images4").eq(0).width(lil4_0*liw4);
		$(".images4").eq(1).width(lil4_1*liw4);
		$(".images4").eq(2).width(lil4_2*liw4);
		$(".images4").eq(3).width(lil4_3*liw4);
		$(".images4").eq(4).width(lil4_4*liw4);
		onclick($(".images4").eq(0),$(".num4_btn1"),$(".num4_btn2"),img4_0,lil4_0,liw4);
		onclick($(".images4").eq(1),$(".num4_btn1"),$(".num4_btn2"),img4_1,lil4_1,liw4);
		onclick($(".images4").eq(2),$(".num4_btn1"),$(".num4_btn2"),img4_2,lil4_2,liw4);
		onclick($(".images4").eq(3),$(".num4_btn1"),$(".num4_btn2"),img4_3,lil4_3,liw4);
		onclick($(".images4").eq(4),$(".num4_btn1"),$(".num4_btn2"),img4_4,lil4_4,liw4);
	    //门类
		//轮播
		var img5_0 = -2;
		var img5_1 = -2;
		var img5_2 = -2;
		var lil5_0 = $('.images5').eq(0).children().length;
		var lil5_1 = $('.images5').eq(1).children().length;
		var lil5_2 = $('.images5').eq(2).children().length;
        var liw5 = $('.images5').eq(2).children('li').eq(0).outerWidth();


		$(".images5").eq(0).width(lil5_0*liw5);
		$(".images5").eq(1).width(lil5_1*liw5);
		$(".images5").eq(2).width(lil5_2*liw5);
		onclick($(".images5").eq(0),$(".num5_btn1"),$(".num5_btn2"),img5_0,lil5_0,liw5);
		onclick($(".images5").eq(1),$(".num5_btn1"),$(".num5_btn2"),img5_1,lil5_1,liw5);
		onclick($(".images5").eq(2),$(".num5_btn1"),$(".num5_btn2"),img5_2,lil5_2,liw5);
            $(".num5_li_btn1").click(function(){
			$(".num5_li_pic1").css("display","block");
			$(".num5_li_pic2").css("display","none");
			$(".num5_li_pic3").css("display","none");
			//轮播
			$(".classification_num5_sli1_pic").css("display","block");
			$(".classification_num5_sli2_pic").css("display","none");
			$(".classification_num5_sli3_pic").css("display","none");
		});
		$(".num5_li_btn2").click(function(){
			$(".num5_li_pic1").css("display","none");
			$(".num5_li_pic2").css("display","block");
			$(".num5_li_pic3").css("display","none");
			//轮播
			$(".classification_num5_sli1_pic").css("display","none");
			$(".classification_num5_sli2_pic").css("display","block");
			$(".classification_num5_sli3_pic").css("display","none");
		});
		$(".num5_li_btn3").click(function(){
			$(".num5_li_pic1").css("display","none");
			$(".num5_li_pic2").css("display","none");
			$(".num5_li_pic3").css("display","block");
			//轮播
			$(".classification_num5_sli1_pic").css("display","none");
			$(".classification_num5_sli2_pic").css("display","none");
			$(".classification_num5_sli3_pic").css("display","block");
		});
		
		//地板类
		//轮播
		var img6 = -2;
		var lil6 = $(".images6 > li").length;
		var liw6 = $(".images6 > li").outerWidth();
		$(".images6").width(lil6*liw6);
		onclick($(".images6"),$(".num6_btn1"),$(".num6_btn2"),img6,lil6,liw6);
            
        $(".num6_li_btn1").click(function(){
			$(".num6_li_pic1").css("display","block");
			$(".num6_li_pic2").css("display","none");
			$(".num6_li_pic3").css("display","none");
			//轮播
			$(".classification_num6_sli1_pic").css("display","block");
			$(".classification_num6_sli2_pic").css("display","none");
			$(".classification_num6_sli3_pic").css("display","none");
		});
		$(".num6_li_btn2").click(function(){
			$(".num6_li_pic1").css("display","none");
			$(".num6_li_pic2").css("display","block");
			$(".num6_li_pic3").css("display","none");
			//轮播
			$(".classification_num6_sli1_pic").css("display","none");
			$(".classification_num6_sli2_pic").css("display","block");
			$(".classification_num6_sli3_pic").css("display","none");
		});
		$(".num6_li_btn3").click(function(){
			$(".num6_li_pic1").css("display","none");
			$(".num6_li_pic2").css("display","none");
			$(".num6_li_pic3").css("display","block");
			//轮播
			$(".classification_num6_sli1_pic").css("display","none");
			$(".classification_num6_sli2_pic").css("display","none");
			$(".classification_num6_sli3_pic").css("display","block");
		});
		
		
		//职能盖板类
		//轮播
		var img7 = -2;
		var lil7 = $(".images7 > li").length;
		var liw7 = $(".images7 > li").outerWidth();
		$(".images7").width(lil7*liw7);
		onclick($(".images7"),$(".num7_btn1"),$(".num7_btn2"),img7,lil7,liw7);
            
        $(".num7_li_btn1").click(function(){
			$(".num7_li_pic1").css("display","block");
			$(".num7_li_pic2").css("display","none");
			$(".num7_li_pic3").css("display","none");
			//轮播
			$(".classification_num7_sli1_pic").css("display","block");
			$(".classification_num7_sli2_pic").css("display","none");
			$(".classification_num7_sli3_pic").css("display","none");
		});
		$(".num7_li_btn2").click(function(){
			$(".num7_li_pic1").css("display","none");
			$(".num7_li_pic2").css("display","block");
			$(".num7_li_pic3").css("display","none");
			//轮播
			$(".classification_num7_sli1_pic").css("display","none");
			$(".classification_num7_sli2_pic").css("display","block");
			$(".classification_num7_sli3_pic").css("display","none");
		});
		$(".num7_li_btn3").click(function(){
			$(".num7_li_pic1").css("display","none");
			$(".num7_li_pic2").css("display","none");
			$(".num7_li_pic3").css("display","block");
			//轮播
			$(".classification_num7_sli1_pic").css("display","none");
			$(".classification_num7_sli2_pic").css("display","none");
			$(".classification_num7_sli3_pic").css("display","block");
		});
		
		
		//套餐推荐偶数靠左
		$(".package_recommended_txt ul li:odd").css("float","right");
		
		// 滑动滚动条
		$(window).scroll(function(){
			if($(window).scrollTop() >= 1000){
				$(".left_show_nav").css("display","block");
			}
			else{
				$(".left_show_nav").css("display","none");
			}
		});
		
		$(window).scroll(function(){
			//一
			if($(window).scrollTop() >= 1000){
				$(".left_show_nav ul a:nth-of-type(1) li").css("background","url(../images/left_show_nav_pic1.png)");
				$(".left_show_nav ul a:nth-of-type(2) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(3) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(4) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(5) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(6) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(7) li").css("background","");
			}
			//二
			if($(window).scrollTop() >= 1500){
				$(".left_show_nav ul a:nth-of-type(1) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(2) li").css("background","url(../images/left_show_nav_pic2.png)");
				$(".left_show_nav ul a:nth-of-type(3) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(4) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(5) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(6) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(7) li").css("background","");
			}
			//三
			if($(window).scrollTop() >= 2000){
				$(".left_show_nav ul a:nth-of-type(1) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(2) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(3) li").css("background","url(../images/left_show_nav_pic3.png)");
				$(".left_show_nav ul a:nth-of-type(4) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(5) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(6) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(7) li").css("background","");
			}
			//四
			if($(window).scrollTop() >= 2500){
				$(".left_show_nav ul a:nth-of-type(1) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(2) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(3) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(4) li").css("background","url(../images/left_show_nav_pic4.png)");
				$(".left_show_nav ul a:nth-of-type(5) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(6) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(7) li").css("background","");
			}
			//五
			if($(window).scrollTop() >= 3000){
				$(".left_show_nav ul a:nth-of-type(1) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(2) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(3) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(4) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(5) li").css("background","url(../images/left_show_nav_pic5.png)");
				$(".left_show_nav ul a:nth-of-type(6) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(7) li").css("background","");
			}
			//六
			if($(window).scrollTop() >= 3500){
				$(".left_show_nav ul a:nth-of-type(1) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(2) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(3) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(4) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(5) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(6) li").css("background","url(../images/left_show_nav_pic6.png)");
				$(".left_show_nav ul a:nth-of-type(7) li").css("background","");
			}
			//七
			if($(window).scrollTop() >= 4000){
				$(".left_show_nav ul a:nth-of-type(1) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(2) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(3) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(4) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(5) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(6) li").css("background","");
				$(".left_show_nav ul a:nth-of-type(7) li").css("background","url(../images/left_show_nav_pic7.png)");
			}
			if($(window).scrollTop() >= 4900){
				$(".left_show_nav").css("display","none");
			}
		});
		
		//轮播图放大效果
//		var TheArray = [
//						["../images/classification_sli_pic1.png","../images/classification_sli_pic2.png","../images/classification_sli_pic3.png"],
//						["../images/classification_sli_pic4.png","../images/classification_sli_pic5.png","../images/classification_sli_pic6.png"],
//						["../images/classification_sli_pic7.png","../images/classification_sli_pic8.png","../images/classification_sli_pic9.png"]
//						];
						
		
//		var ulNum=0;
//		$('.images,.images3,.images5,.images6,.images7').click(function(){
//			ulNum=$(this).data("num");
//			$('.masking').css({"display":"block"});
//			//console.log(ulNum);
//		})
//		var liNum;
//		liNum=i;
//		var fre=TheArray[ulNum];
//		var imgNum=fre[i];
//		var li="<img src='"+imgNum+"' />";
//		$(".masking_pic").append(li);
		//左
//		$(".masking_btnl").click(function(){
//			
//			liNum--;
//			if(liNum<0){
//				liNum=2;
//			}
//			//console.log(liNum);
//			imgNum=fre[liNum];
//			 li="<img src='"+imgNum+"' />";
//			$(".masking_pic").html(li);
//		});
		//右
//		$(".masking_btnr").click(function(){
//			
//			liNum++;
//			if(liNum>2){
//				liNum=0;
//			}
//			//console.log(liNum);
//			imgNum=fre[liNum];
//			 li="<img src='"+imgNum+"' />";
//			$(".masking_pic").html(li);
//		});
		
		//点击隐藏
		$(".masking_block").click(function(){
			$(".masking").css("display","none");
		});
		
	});