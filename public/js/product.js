//banner背景轮播
	var pic=2;
	function show()
	{
		
		//背景轮播
		$(".head-bg").css("background","url(../images/products_banner"+pic+".png)");
		pic++;
		if(pic>3)
		{
			pic=1;
		}
	}
	window.setInterval("show()",5000);
	
	//开始
	$(function(){
		
		//瓷砖类
		//选项
		$(".classification_num1_sli_nav ul li").click(function(){
			$(this).css({"color":"#ffc519","background":"url(../images/classification_bg.png)"}).siblings("li").css({"background":"","color":""});
		});
		
		//轮播
            var i=0;
            var size=4;
            
            $(".num1_btn1").click(function () {
                i--;
                if(i==-1){
                    $(".images1").css({left:-(size-1)*217});
                    i=size-2;
                }
                $(".images1").stop().animate({left:-i*217}, 500);
            });
            
            $(".num1_btn2").click(function () {
                i++;
                if(i==size){
                    $(".images1").css({left:0});
                    i=1;
                }
                $(".images1").stop().animate({left:-i*217}, 500);
               
            });

	    
		//图片
		//一
		$(".num1_li_btn1").click(function(){
			$(".num1_li_pic1").load(location.href+".num1_li_pic1"); 
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
		
		//卫浴类
		//选项
		$(".classification_num2_sli_nav ul li").click(function(){
			$(this).css({"color":"#ffc519","background":"url(../images/classification_bg.png)"}).siblings("li").css({"background":"","color":""});
		});
		//轮播
	    var x=0;
            var size=4;
            
            $(".num2_btn1").click(function () {
                x--;
                if(x==-1){
                    $(".images2").css({left:-(size-1)*217});
                    x=size-2;
                }
                $(".images2").stop().animate({left:-x*217}, 500);
            });
            
            $(".num2_btn2").click(function () {
                x++;
                if(x==size){
                    $(".images2").css({left:0});
                    x=1;
                }
                $(".images2").stop().animate({left:-x*217}, 500);
               
            });
	    
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
	    var y=0;
            var size=4;
            
            $(".num3_btn1").click(function () {
                y--;
                if(y==-1){
                    $(".images3").css({left:-(size-1)*217});
                    y=size-2;
                }
                $(".images3").stop().animate({left:-y*217}, 500);
            });
            
            $(".num3_btn2").click(function () {
                y++;
                if(y==size){
                    $(".images3").css({left:0});
                    y=1;
                }
                $(".images3").stop().animate({left:-y*217}, 500);
               
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
		var z=0;
            var size=4;
            $(".num4_btn1").click(function () {
                z--;
                if(z==-1){
                    $(".images4").css({left:-(size-1)*217});
                    z=size-2;
                }
                $(".images4").stop().animate({left:-z*217}, 500);
            });
            
            $(".num4_btn2").click(function () {
                z++;
                if(z==size){
                    $(".images4").css({left:0});
                    z=1;
                }
                $(".images4").stop().animate({left:-z*217}, 500);
               
            });
	    
	    //门类
		//轮播
		var p=0;
            var size=4;
            $(".num5_btn1").click(function () {
                p--;
                if(p==-1){
                    $(".images5").css({left:-(size-1)*217});
                    p=size-2;
                }
                $(".images5").stop().animate({left:-p*217}, 500);
            });
            
            $(".num5_btn2").click(function () {
                p++;
                if(p==size){
                    $(".images5").css({left:0});
                    p=1;
                }
                $(".images5").stop().animate({left:-p*217}, 500);
               
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