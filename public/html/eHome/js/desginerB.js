/**
 * Created by Administrator on 2017/4/20.
 */
$(function(){
    carsouelSmall(".desB_middle_car"," .desB_middle_ul");
    carsouelSmall(".desB_middle_car1"," .desB_middle_ul1");
})
//轮播
function carsouelSmall(a,b) {
    var imgUl = $(a + b);//轮播图片ul
    var imgLi = $(a + b + ' li');//轮播图片li
    //var numLi=$('.asideL_smallImg li');//焦点的li
    var lWidth = imgLi.width();
    //console.log(imgLi,imgUl);
    var clone = imgLi.first().clone();
    imgUl.append(clone);
    var i = 0;
    var size = $(a + b+" li").length;
//            点击向左轮播
    $(a + " .btn1").click(function () {
        i--;
        if (i == -1) {
            imgUl.css({left: -(size - 1) * lWidth});
            i = size - 2;
        }
        imgUl.stop().animate({left: -i * lWidth}, 500);
        //numLi.eq(i).addClass("asideL_on").siblings().removeClass("asideL_on");
    });
//            点击向右轮播
    $(a + " .btn2").click(function () {
        moveR();
    });
//            向右轮播函数
    function moveR() {
        i++;
        //console.log(i);
        if (i == size) {
            imgUl.css({left: 0});
            i = 1;
        }
        console.log(i, size);
        imgUl.stop().animate({left: -i * lWidth}, 500);
        //if(i==size-1){
        //    numLi.eq(0).addClass("asideL_on").siblings().removeClass("asideL_on");
        //}else {
        //    numLi.eq(i).addClass("asideL_on").siblings().removeClass("asideL_on");
        //}
    }

//            鼠标滑过圆点
//    $('.asideL_smallImg li').hover(function (e) {
//        var index=$(this).index();
//        i=index;
//        imgUl.stop().animate({left:-i*lWidth}, 500);
//        $(this).addClass("asideL_on").siblings().removeClass("asideL_on");
//    });
//            定时自动轮播
//    var t=setInterval(function () {
//        moveR();
//    },1500);
////            鼠标滑过图片停止自动轮播
//    $(".desC_asideL_car").hover(function(){
//            clearInterval(t);},
//        function(){
//            t=setInterval(function () {
//                moveR();
//            },1500)
//        });
}

$(document).ready(function(){
	$(".nav .nav_a a:eq(5)").css("color","#FFC61E");
});