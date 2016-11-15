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
        shareDivMove(0);
    }
    shareDiv.onmouseout = function()
    {
        shareDivMove(-200);
    }
}

var timer=null;

//动画实现函数
function shareDivMove(iTarget)
{
    var shareDiv = document.getElementById("body");
    if(timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(function() {
        var speed = 0;
        speed = (iTarget - shareDiv.offsetLeft) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if(shareDiv.offsetLeft == iTarget) {
            clearInterval(timer);
        } else {
            shareDiv.style.marginLeft = shareDiv.offsetLeft + speed + "px";
        }
    }, 30);
}
