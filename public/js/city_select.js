/**
 * Created by Administrator on 2017/4/1.
 */
$(function () {
    //alert($(window).height());
    $('#ClickMe').click(function () {
        $('#code').center();
        $('#goodcover').show();
        $('#code').fadeIn();
    });
    $('#closebt').click(function () {
        $('#code').hide();
        $('#goodcover').hide();
    });
    $('#goodcover').click(function () {
        $('#code').hide();
        $('#goodcover').hide();
    });
    /*var val=$(window).height();
     var codeheight=$("#code").height();
     var topheight=(val-codeheight)/2;
     $('#code').css('top',topheight);*/
    jQuery.fn.center = function (loaded) {
        var obj = this;
        body_width = parseInt($(window).width());
        body_height = parseInt($(window).height());
        block_width = parseInt(obj.width());
        block_height = parseInt(obj.height());

        left_position = parseInt((body_width / 2) - (block_width / 2) + $(window).scrollLeft());
        if (body_width < block_width) {
            left_position = 0 + $(window).scrollLeft();
        };

        top_position = parseInt((body_height / 2) - (block_height / 2) + $(window).scrollTop());
        if (body_height < block_height) {
            top_position = 0 + $(window).scrollTop();
        };

        if (!loaded) {

            obj.css({
                'position': 'absolute'
            });
            obj.css({
                'top': ($(window).height() - $('#code').height()) * 0.5,
                'left': left_position
            });
            $(window).bind('resize', function () {
                obj.center(!loaded);
            });
            $(window).bind('scroll', function () {
                obj.center(!loaded);
            });

        } else {
            obj.stop();
            obj.css({
                'position': 'absolute'
            });
            obj.animate({
                'top': top_position
            }, 200, 'linear');
        }
    }

});

//------city选择-------------
var oClick =  document.getElementById('ClickMe');
var oClosebt = document.getElementById('closebt');
var oSpan = oClosebt.getElementsByTagName('span');

for(var i=0; i<oSpan.length;i++){
    oSpan[i].onclick = function () {
        oClick.children[0].innerHTML = this.innerHTML;
    }
}

//------------rig--tanchu框----------------
var allHeight=$(window).height();
$('.return-rig-block').height(allHeight);
$(".index-div2").click(function(){
    $(".return-rig-block").css("display","block");
    $(".return-rig-submit").addClass("return-display").siblings().removeClass("return-display");
})
$(".right-close").click(function(){
    $(".return-rig-block").css("display","none");
})
$('.index-div3').click(function(){
    $(".return-rig-block").css("display","block");
    $(".return-rig-calc").addClass("return-display").siblings().removeClass("return-display");
});


//右侧导航---返回顶部
$(function() {
    $(".index-div4").click(function(event) {
        event.preventDefault();
        $("html,body").animate({"scrollTop":0},800);
    });
});