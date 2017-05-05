/**
 * Created by Administrator on 2017/4/18.
 */
//瓷砖类
var oActive1 = document.getElementsByClassName('classification_num1_active');
var oPic1 = document.getElementsByClassName('classification_num1_sli1_pic');
var oLpic1 = document.getElementsByClassName('num1_li_pic1');
var num1 =0;
for (var i=0; i<oActive1.length;i++){
    oActive1[i].index = i;
    oActive1[i].onclick = function () {
        oActive1[num1].children[0].style.color = 'black';
        this.children[0].style.color = '#ffc519';
        oLpic1[num1].style.display = 'none';
        oLpic1[this.index].style.display = 'block';
        oPic1[num1].style.display = 'none';
        oPic1[this.index].style.display = 'block';
        num1 = this.index;
    }
}
//卫浴类
var oActive2 = document.getElementsByClassName('classification_num2_active');
var oPic2 = document.getElementsByClassName('classification_num2_sli1_pic');
var oLpic2 = document.getElementsByClassName('num2_li_pic1');
var num2 =0;

 for (var i=0; i<oActive2.length;i++){
     oActive2[i].index = i;
     oActive2[i].onclick = function () {
         oActive2[num2].children[0].style.color = 'black';
         this.children[0].style.color = '#ffc519';
         oLpic2[num2].style.display = 'none';
         oLpic2[this.index].style.display = 'block';
         oPic2[num2].style.display = 'none';
         oPic2[this.index].style.display = 'block';
          num2 = this.index;
     }
 }
 //吊顶类
var oActive3 = document.getElementsByClassName('classification_num3_active');
var oPic3 = document.getElementsByClassName('classification_num3_sli1_pic');
var oLpic3 = document.getElementsByClassName('num3_li_pic1');
var num3 =0;

for (var i=0; i<oActive3.length;i++){
    oActive3[i].index = i;
    oActive3[i].onclick = function () {
        oActive3[num3].children[0].style.color = 'black';
        this.children[0].style.color = '#ffc519';
        oLpic3[num3].style.display = 'none';
        oLpic3[this.index].style.display = 'block';
        oPic3[num3].style.display = 'none';
        oPic3[this.index].style.display = 'block';
        num3 = this.index;
    }
}
//厨电类
var oActive4 = document.getElementsByClassName('classification_num4_active');
var oPic4 = document.getElementsByClassName('classification_num4_sli1_pic');
var oLpic4 = document.getElementsByClassName('num4_li_pic1');
var num4 =0;

for (var i=0; i<oActive4.length;i++){
    oActive4[i].index = i;
    oActive4[i].onclick = function () {
        oActive4[num4].children[0].style.color = 'black';
        this.children[0].style.color = '#ffc519';
        oLpic4[num4].style.display = 'none';
        oLpic4[this.index].style.display = 'block';
        oPic4[num4].style.display = 'none';
        oPic4[this.index].style.display = 'block';
        num4 = this.index;
    }
}
//门类
var oActive5 = document.getElementsByClassName('classification_num5_active');
var oPic5 = document.getElementsByClassName('classification_num5_sli1_pic');
var oLpic5 = document.getElementsByClassName('num5_li_pic1');
var num5 =2;

for (var i=0; i<oActive5.length;i++){
    oActive5[i].index = i;
    oActive5[i].onclick = function () {
        oActive5[num5].children[0].style.color = 'black';
        this.children[0].style.color = '#ffc519';
        oLpic5[num5].style.display = 'none';
        oLpic5[this.index].style.display = 'block';
        oPic5[num5].style.display = 'none';
        oPic5[this.index].style.display = 'block';
        num5 = this.index;
    }
}

