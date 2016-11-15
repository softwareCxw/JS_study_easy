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
    }
    shareDiv.onmouseout = function()
    {
        shareDivMove(-10, -200);
    }
}

var timer=null;

//动画实现函数
function shareDivMove(speed, iTarget)
{
    var shareDiv = document.getElementById("body");
    if(timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(function() {
        if(shareDiv.offsetLeft == iTarget) {
            clearInterval(timer);
        } else {
            shareDiv.style.marginLeft = shareDiv.offsetLeft + speed + "px";
        }
    }, 30);
}
