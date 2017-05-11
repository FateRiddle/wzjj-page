/**
 * Created by Administrator on 2017/5/10.
 */
var oHt  = document.getElementsByClassName('home-product-two');
var oHb1 = document.getElementsByClassName('home-product-btn1');
var oHb2 = document.getElementsByClassName('home-product-btn2');
var speed = -3;
oHt[0].style.left = -897 + 'px';
console.log($('.home-product-two-xi').eq(0).left);
console.log(oHt[0].offsetLeft);
oHb1[0].onclick=function () {

    speed--;
    if(speed==-9){
        $('.home-product-two-xi').eq(0).css({left:-897});

        speed= -3;
    }
    $('.home-product-two-xi').eq(0).animate({left:speed*299}, 500);

};
oHb2[0].onclick=function () {
    speed++;
    if(speed==0){

        $('.home-product-two-xi').eq(0).css({left:-1794});
        speed = -6 ;
    }
    $('.home-product-two-xi').eq(0).animate({left:speed*299}, 500);
};
