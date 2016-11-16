/**
 * Created by 327134 on 2016/11/16.
 * func:多物体动画
 */

window.onload = function()
{
    var lis = document.getElementsByTagName("li");
    for(var i = 0; i < lis.length; i ++)
    {
        lis[i].timer = null;
        lis[i].speed = 0;
        lis[i].timerAlpha = null;
        lis[i].alpha = 30;
        lis[i].speedAlpha = 0;
        lis[i].onmouseover = function()
        {
            startMove(this, 600);
            changeAlpha(this, 100);
        };
        lis[i].onmouseout = function()
        {
            startMove(this, 200);
            changeAlpha(this, 30);
        };
    }
}

//运动函数
function startMove(obj, iTarget)
{
    if(obj.timer != null)
    {
        clearInterval(obj.timer);
        timer = null;
    }

    obj.timer = setInterval(function(){

        obj.speed = (iTarget - obj.offsetWidth) / 10;
        obj.speed = (obj.speed > 0 ? Math.ceil(obj.speed) : Math.floor(obj.speed));
        if(obj.offsetWidth == iTarget) {
            clearInterval(obj.timer);
            obj.timer = null;
        } else {
            obj.style.width = obj.offsetWidth + obj.speed + "px";
        }
    }, 30);
}

//透明度变换函数
function changeAlpha(obj, iTarget)
{
    if(obj.timerAlpha != null) {
        clearInterval(obj.timerAlpha);
        obj.timerAlpha = null;
    }

    obj.timerAlpha = setInterval(function(){
        obj.speedAlpha = (iTarget - obj.alpha) / 10;
        obj.speedAlpha = (obj.speedAlpha > 0 ? Math.ceil(obj.speedAlpha) : Math.floor(obj.speedAlpha));
        if(obj.alpha == iTarget) {
            clearInterval(obj.timerAlpha);
            obj.timerAlpha = null;
        } else {
            obj.alpha += obj.speedAlpha;
            obj.style.opacity = (obj.alpha + obj.speedAlpha) / 100;
            obj.style.filter = "alpha(opacity="+(obj.alpha + obj.speedAlpha) +");";
        }
    }, 30);
}
