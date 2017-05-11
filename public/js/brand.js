/**
 * Created by Administrator on 2017/4/20.
 */
var oBrand = document.getElementsByClassName('brand_img');
var oLogo_img = document.getElementsByClassName('logo_img');
var oLogo_p = document.getElementsByClassName('logo_p');
var oTxt = document.getElementsByClassName('business_txt');
var index = 0;
for (var i=0; i<oBrand.length;i++){
    oBrand[i].index = i;
    oBrand[i].onclick = function () {
        oTxt[index].style.display = 'none';
        oBrand[index].children[1].style.color = 'black';
        oBrand[index].children[0].src = '../images/logo' + (2*index +1) + '.png';
        oBrand[index].style.backgroundImage =  'url(../images/bg0' + (2*index + 2) +'.png)';
        this.children[1].style.color = 'white';
        this.children[0].src = '../images/logo' + (2*this.index + 2) + '.png';
        this.style.backgroundImage = 'url(../images/bg0' + (2*this.index + 1) +'.png)';
        oTxt[this.index].style.display = 'block';
        index = this.index;
    }
}

