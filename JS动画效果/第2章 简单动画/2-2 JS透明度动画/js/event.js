/**
 * Created by 327134 on 2016/11/15.
 * date:2016/11/15
 * name:cxw
 * func:分享按钮动画事件
 */
//全局
window.onload = function()
{
    var shareDiv = document.getElementById("body");
    shareDiv.onmouseover = function()
    {
        shareDivMove(10, 0);
        shareDivAlpha(10, 100);
    }
    shareDiv.onmouseout = function()
    {
        shareDivMove(-10, -200);
        shareDivAlpha(-10, 30);
    }
}

var timerMove=null,
    timerAlpha=null;
var alpha = 30;

//动画实现函数
function shareDivMove(speed, iTarget)
{
    var shareDiv = document.getElementById("body");
    if(timerMove != null) {
        clearInterval(timerMove);
    }
    timerMove = setInterval(function() {
        //移动动画
        if(shareDiv.offsetLeft == iTarget) {
            clearInterval(timerMove);
        } else {
            shareDiv.style.marginLeft = shareDiv.offsetLeft + speed + "px";
        }
    }, 30);
}

//透明度动画实现函数
function shareDivAlpha(speed, iTarget)
{
    var shareDiv = document.getElementById("body");
    if(timerAlpha != null) {
        clearInterval(timerAlpha);
    }
    timerAlpha = setInterval(function() {
        if(alpha == iTarget) {
            clearInterval(timerAlpha);
        } else {
            alpha += speed;
            shareDiv.style.filter = "alpha(opacity:" + alpha + ");";
            shareDiv.style.opacity = alpha / 100;
        }
    }, 30);
}
