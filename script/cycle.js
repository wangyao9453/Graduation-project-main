//1、找到container下的所有img标签,li标签,左右按钮
window.onload = function () {
    var aImgs = document.querySelectorAll('.container img');
    var aLis = document.querySelectorAll('.under-2 li');
    var btnul = document.getElementById("active");
    var btnLeft = document.querySelector('.under-2 .left');
    var btnRight = document.querySelector('.under-2 .right');
    var span1 = document.querySelector('.span1');
    var span2 = document.querySelector('.span2');
    var span3 = document.querySelector('.span3');
    var word = document.querySelector('.word');
    var word2 = document.querySelector('.word2');
    var word3 = document.querySelector('.word3');
    var un1 = document.querySelector('.un1');
    var un2 = document.querySelector('.un2');
    var un3 = document.querySelector('.un3');
    var un4 = document.querySelector('.un4');
    var un5 = document.querySelector('.un5');
    var un6 = document.querySelector('.un6');
    var un7 = document.querySelector('.un7');
    var un8 = document.querySelector('.un8');
    var un9 = document.querySelector('.un9');
    var de1 = document.querySelector('.de3-2-1');
    var de2 = document.querySelector('.de3-2-2');
    var de3 = document.querySelector('.de3-2-3');
    var de4 = document.querySelector('.de3-2-4');
    var de5 = document.querySelector('.de3-2-5');
    var de6 = document.querySelector('.de3-2-6');
    var de7 = document.querySelector('.de3-2-7');
    var de8 = document.querySelector('.de3-2-8');
    var de9 = document.querySelector('.de3-2-9');
    var un = document.querySelector(".under3-2-1");
    var un3_2 = document.getElementById("un3-2");
    //点击事件
    //点击按钮图片切换
    var index = 0;        //当前图片下标
    var lastIndex = 0;
    var is = aImgs.length;
    var i = aImgs.length;
    var a = new Array("-2700", "-2060", "-1470", "-1060", "-680", "-100", "470", "1060", "1630", "2200");
    var b = 0;
    var c = 0;
    var d = -2770;
    var htmlwidth=document.body.clientWidth;
    var htmlheigt=document.body.clientHeight;
    //左边按钮类似
    btnRight.onclick = function () {
        //记录上一张图片的下标
        if (index == 0) {
            return false;
        }
        else {
            lastIndex = index;
            is = i;
            aLis[is].className = '';
            //清除上一张图片的样式
            aImgs[lastIndex].className = '';
            index--;
            b--;
            i++;
            if (i != aImgs.length) {
                aLis[i].className = 'active';
            }
            //设置当前图片的样式
            aImgs[index].className = 'on';
            btnul.style.marginLeft = a[b] + "px";
        }
    }

    btnLeft.onclick = function () {
        aLis[9].className = "";
        aImgs[0].className = "";
        if (index == (aImgs.length - 1)) {
            return false;
        }
        else {
            //记录上一张图片的下标
            lastIndex = index;
            is = i;
            if (i != aImgs.length) {
                aLis[is].className = '';
            }
            //清除上一张图片的样式
            aImgs[lastIndex].className = '';
            index++;
            b++;
            i--;
            //设置当前图片的样式
            aImgs[index].className = 'on';
            aLis[i].className = 'active';
            btnul.style.marginLeft = a[b] + "px";
        }
    }

    span1.onclick = function () {
        word.style.opacity = 1;
        word2.style.opacity = 0;
        word.style.zIndex = 9;
        word2.style.zIndex = 0;
        word3.style.opacity = 0;
        word3.style.zIndex = 0;
        return false;
        // word2.style.ZIndex = 3;
    }

    span2.onclick = function () {
        word.style.opacity = 0;
        word2.style.opacity = 1;
        word.style.zIndex = 0;
        word2.style.zIndex = 9;
        word3.style.opacity = 0;
        word3.style.zIndex = 0;
        aImgs[index].className = "";
        aImgs[0].className = "on";
        aLis[i].className = "";
        aLis[9].className = "active";
        aLis[10].className = "active1";
        btnul.style.marginLeft = d + "px";
        index = 0;
        i = aImgs.length
        b = 0;
        return false;
    }

    span3.onclick = function () {
        word.style.opacity = 0;
        word2.style.opacity = 0;
        word.style.zIndex = 0;
        word2.style.zIndex = 0;
        word3.style.opacity = 1;
        word3.style.zIndex = 9;
        return false;
    }

    de1.onclick = function () {
        // for(var i=0;i<=un.length;i++){

        //     un[i].style.opacity=0;
        //     if(i==0){
        //         un[i].style.opacity=1;
        //     }
        // }
        un1.style.opacity = 1;
        un2.style.opacity = 0;
        un3.style.opacity = 0;
        un4.style.opacity = 0;
        un5.style.opacity = 0;
        un6.style.opacity = 0;
        un7.style.opacity = 0;
        un8.style.opacity = 0;
        un9.style.opacity = 0;
        de1.className = "active2";
        de2.className = "un3-2-1";
        de3.className = "un3-2-1";
        de4.className = "un3-2-1";
        de5.className = "un3-2-1";
        de6.className = "un3-2-1";
        de7.className = "un3-2-1";
        de8.className = "un3-2-1";
        de9.className = "un3-2-1";
        un.style.marginTop = 0 + "px";
        // de1.style.borderleft="2px solid #3778e5";
        return false;
    }

    de2.onclick = function () {
        un1.style.opacity = 0;
        un2.style.opacity = 1;
        un3.style.opacity = 0;
        un4.style.opacity = 0;
        un5.style.opacity = 0;
        un6.style.opacity = 0;
        un7.style.opacity = 0;
        un8.style.opacity = 0;
        un9.style.opacity = 0;
        de1.className = "un3-2-1";
        de2.className = "active2";
        de3.className = "un3-2-1";
        de4.className = "un3-2-1";
        de5.className = "un3-2-1";
        de6.className = "un3-2-1";
        de7.className = "un3-2-1";
        de8.className = "un3-2-1";
        de9.className = "un3-2-1";
        un3_2.id = "";
        un.style.marginTop = 0 + "px";
        // de2.style.borderleft="2px solid #3778e5";
        return false;
    }

    de3.onclick = function () {
        un1.style.opacity = 0;
        un2.style.opacity = 0;
        un3.style.opacity = 1;
        un4.style.opacity = 0;
        un5.style.opacity = 0;
        un6.style.opacity = 0;
        un7.style.opacity = 0;
        un8.style.opacity = 0;
        un9.style.opacity = 0;
        de1.className = "un3-2-1";
        de2.className = "un3-2-1";
        de3.className = "active2";
        de4.className = "un3-2-1";
        de5.className = "un3-2-1";
        de6.className = "un3-2-1";
        de7.className = "un3-2-1";
        de8.className = "un3-2-1";
        de9.className = "un3-2-1";
        un3_2.id = "";

        un.style.marginTop = 0 + "px";
        return false;
    }

    de4.onclick = function () {
        un1.style.opacity = 0;
        un2.style.opacity = 0;
        un3.style.opacity = 0;
        un4.style.opacity = 1;
        un5.style.opacity = 0;
        un6.style.opacity = 0;
        un7.style.opacity = 0;
        un8.style.opacity = 0;
        un9.style.opacity = 0;
        de1.className = "un3-2-1";
        de2.className = "un3-2-1";
        de3.className = "un3-2-1";
        de4.className = "active2";
        de5.className = "un3-2-1";
        de6.className = "un3-2-1";
        de7.className = "un3-2-1";
        de8.className = "un3-2-1";
        de9.className = "un3-2-1";
        un3_2.id = "";

        un.style.marginTop = 0 + "px";
        return false;
    }

    de5.onclick = function () {
        un1.style.opacity = 0;
        un2.style.opacity = 0;
        un3.style.opacity = 0;
        un4.style.opacity = 0;
        un5.style.opacity = 1;
        un6.style.opacity = 0;
        un7.style.opacity = 0;
        un8.style.opacity = 0;
        un9.style.opacity = 0;
        de1.className = "un3-2-1";
        de2.className = "un3-2-1";
        de3.className = "un3-2-1";
        de4.className = "un3-2-1";
        de5.className = "active2";
        de6.className = "un3-2-1";
        de7.className = "un3-2-1";
        de8.className = "un3-2-1";
        de9.className = "un3-2-1";
        un3_2.id = "";

        if (c < 0) {
            c = 0;
        }
        c = c - 55;
        un.style.marginTop = c + "px";
        return false;
    }

    de6.onclick = function () {
        un1.style.opacity = 0;
        un2.style.opacity = 0;
        un3.style.opacity = 0;
        un4.style.opacity = 0;
        un5.style.opacity = 0;
        un6.style.opacity = 1;
        un7.style.opacity = 0;
        un8.style.opacity = 0;
        un9.style.opacity = 0;
        de1.className = "un3-2-1";
        de2.className = "un3-2-1";
        de3.className = "un3-2-1";
        de4.className = "un3-2-1";
        de5.className = "un3-2-1";
        de6.className = "active2";
        de7.className = "un3-2-1";
        de8.className = "un3-2-1";
        de9.className = "un3-2-1";
        un3_2.id = "";
        if (c = 75) {
            c = -50;
        }
        c -= 30;
        un.style.marginTop = c + "px";
        return false;
    }

    de7.onclick = function () {
        un1.style.opacity = 0;
        un2.style.opacity = 0;
        un3.style.opacity = 0;
        un4.style.opacity = 0;
        un5.style.opacity = 0;
        un6.style.opacity = 0;
        un7.style.opacity = 1;
        un8.style.opacity = 0;
        un9.style.opacity = 0;
        de1.className = "un3-2-1";
        de2.className = "un3-2-1";
        de3.className = "un3-2-1";
        de4.className = "un3-2-1";
        de5.className = "un3-2-1";
        de6.className = "un3-2-1";
        de7.className = "active2";
        de8.className = "un3-2-1";
        de9.className = "un3-2-1";
        un3_2.id = "";

        un.style.marginTop = c + "px";

        return false;
    }

    de8.onclick = function () {
        un1.style.opacity = 0;
        un2.style.opacity = 0;
        un3.style.opacity = 0;
        un4.style.opacity = 0;
        un5.style.opacity = 0;
        un6.style.opacity = 0;
        un7.style.opacity = 0;
        un8.style.opacity = 1;
        un9.style.opacity = 0;
        de1.className = "un3-2-1";
        de2.className = "un3-2-1";
        de3.className = "un3-2-1";
        de4.className = "un3-2-1";
        de5.className = "un3-2-1";
        de6.className = "un3-2-1";
        de7.className = "un3-2-1";
        de8.className = "active2";
        de9.className = "un3-2-1";
        un3_2.id = "";

        un.style.marginTop = c + "px";

        return false;
    }

    de9.onclick = function () {
        un1.style.opacity = 0;
        un2.style.opacity = 0;
        un3.style.opacity = 0;
        un4.style.opacity = 0;
        un5.style.opacity = 0;
        un6.style.opacity = 0;
        un7.style.opacity = 0;
        un8.style.opacity = 0;
        un9.style.opacity = 1;
        de1.className = "un3-2-1";
        de2.className = "un3-2-1";
        de3.className = "un3-2-1";
        de4.className = "un3-2-1";
        de5.className = "un3-2-1";
        de6.className = "un3-2-1";
        de7.className = "un3-2-1";
        de8.className = "un3-2-1";
        de9.className = "active2";
        un3_2.id = "";

        un.style.marginTop = c + "px";

        return false;
    }
}
