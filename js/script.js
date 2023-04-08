//回到顶部
let top_btn = document.querySelector('.top_btn');
let timer_5 = null;
top_btn.onclick = function () {
    timer_5 = setInterval(function () {
        document.documentElement.scrollTop -= 150;

        if (document.documentElement.scrollTop == 0) {
            clearInterval(timer_5);
        }
    }, 30)
}
//轮播图部分----------------------
let imgs = document.querySelectorAll('.imgshow a');
let points = document.querySelectorAll('.points a');
let btns = document.querySelectorAll('.btn');
let nowIndex = 0;
let timer = null;
function Hiddenimages() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
}
function Hiddenpoints() {
    for (let i = 0; i < points.length; i++) {
        points[i].className = 'hidden';
    }
}
function changeAll() {
    Hiddenimages();
    Hiddenpoints();//将图片和小圆点统统隐藏
    imgs[nowIndex].style.display = 'block';
    points[nowIndex].className = 'show';
    //将小圆点与图片进行绑定
}
changeAll();
//设计轮播效果
function barnerPlay() {
    //添加定时器
    timer = setInterval(function () {
        changeAll();
        nowIndex++;
        if (nowIndex >= imgs.length) {
            nowIndex = 0;
        }
    }, 3000)
}
barnerPlay();
//进行小圆点的触发
for (let i = 0; i < points.length; i++) {
    points[i].onmouseover = function () {
        clearInterval(timer);
    }
    points[i].onmouseout = function () {
        barnerPlay();
    }
    //进行小圆点点击的跳转
    points[i].index = i;//获取小圆点当前的下标
    points[i].onclick = function () {
        nowIndex = this.index;
        changeAll();//调用捆绑函数
    }
}
//左右按钮部分
for (let i = 0; i < btns.length; i++) {
    //鼠标悬停和鼠标移开
    btns[i].onmouseover = function () {
        clearInterval(timer);
    }
    btns[i].onmouseout = function () {
        barnerPlay();
    }
    //点击切换照片
    //左键部分
    btns[0].onclick = function () {
        nowIndex--;
        if (nowIndex < 0) {
            nowIndex = 4;
        }
        changeAll();
    }
    //右键部分
    btns[1].onclick = function () {
        nowIndex++;
        if (nowIndex > imgs.length - 1) {
            nowIndex = 0;
        }
        changeAll();
    }
}
// 视频部分
let a_2 = document.querySelector('.a_2');
let video = document.querySelector('video');
let tencards_8_img = document.querySelector('.tencards-8-img');
a_2.onclick = function () {
    video.style.display = 'block';
    tencards_8_img.style.display = 'none';

}
/* 轮播图2-------------------------------------------- */
let img_2 = document.querySelectorAll('.imgshow2 a');
let btn_2 = document.querySelectorAll('.imgshow2_btn')
let nowIndex_2 = 0;
let timer_2 = null;
function Hiddenimages_2() {
    for (let i = 0; i < img_2.length; i++) {
        img_2[i].style.display = 'none';
    }
}
function changeAll_2() {
    Hiddenimages_2();
    img_2[nowIndex_2].style.display = 'block';
}
changeAll_2();
function bannerPlay_2() {

    timer_2 = setInterval(function () {
        changeAll_2();
        nowIndex_2++;
        if (nowIndex_2 >= img_2.length) {
            nowIndex_2 = 0;
        }
    }, 5000)
}
bannerPlay_2();
for (let i = 0; i < btn_2.length; i++) {
    btn_2[i].onmouseover = function () {
        clearInterval(timer);
    }
    btn_2[i].onmouseout = function () {
        bannerPlay_2();
    }
    btn_2[0].onclick = function () {
        nowIndex_2--;
        if (nowIndex_2 < 0) {
            nowIndex_2 = 3;
        }
        changeAll_2()
    }
    btn_2[1].onclick = function () {
        nowIndex_2++;
        if (nowIndex_2 > img_2.length - 1) {
            nowIndex_2 = 0;
        }
        changeAll_2()
    }
}
/* 轮播图3------------------------------------------------- */
let img_3 = document.querySelectorAll('.ten_main_3 a');
let points_3 = document.querySelectorAll('.ten_main_3_points a');
let btns_3 = document.querySelectorAll('.ten_main_3_btn');
let nowIndex_3 = 0;
let timer_3 = null;
function Hiddenimages_3() {
    for (let i = 0; i < img_3.length; i++) {
        img_3[i].style.display = 'none';
    }
}
function Hiddenpoints_3() {
    for (let i = 0; i < points_3.length; i++) {
        points_3[i].className = 'hidden';
    }
}
function changeAll_3() {
    Hiddenimages_3();
    Hiddenpoints_3();
    img_3[nowIndex_3].style.display = 'block';
    points_3[nowIndex_3].className = 'show';
}
changeAll_3();
function bannerPlay_3() {
    timer_3 = setInterval(function () {
        changeAll_3();
        nowIndex_3++;
        if (nowIndex_3 >= img_3.length) {
            nowIndex_3 = 0;
        }
    }, 4000)
}
bannerPlay_3();
for (let i = 0; i < points_3.length; i++) {
    points_3[i].onmouseover = function () {
        clearInterval(timer_3);
    }
    points_3[i].onmouseout = function () {
        bannerPlay_3();
    }
    points_3[i].index = i;
    points_3[i].onclick = function () {
        nowIndex_3 = this.index;
        changeAll_3();
    }
}
/* 左右按键部分 */
for (let i = 0; i < btns_3.length; i++) {
    btns_3[i].onmouseover = function () {
        clearInterval(timer_3);
    }
    btns_3[i].onmouseout = function () {
        bannerPlay_3();
    }
    btns_3[0].onclick = function () {
        nowIndex_3--;
        if (nowIndex_3 < 0) {
            nowIndex_3 = 2;
        }
        changeAll_3();
    }
    btns_3[1].onclick = function () {
        nowIndex_3++;
        if (nowIndex_3 > img_3.length - 1) {
            nowIndex_3 = 0;
        }
        changeAll_3();
    }
}
