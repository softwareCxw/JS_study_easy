/**
 * Created by 327134 on 2016/11/16.
 * func:任意属性值（二）
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
        if(i == 0) {
            lis[i].onmouseover= function(){
                startMove(this, 'width',600);
                //startMove(this, 'opacity',100);
            }
            lis[i].onmouseout = function() {
                startMove(this,'width',200);
                //startMove(this, 'opacity', 30);
            }
        } else {
            lis[i].onmouseover = function()
            {
                //startMove(this, 'height',600);
                startMove(this, 'opacity',100);
            };
            lis[i].onmouseout = function()
            {
                //startMove(this, 'height',100);
                startMove(this, 'opacity',30);
            };
        }
    }
}

//运动框架
function startMove(obj,arr, iTarget)
{
    if(obj.timer != null)
    {
        clearInterval(obj.timer);
        obj.timer = null;
    }

    obj.timer = setInterval(function(){
        if(arr == 'opacity') {
            var curentValue = Math.round(parseFloat(getStyle(obj, arr)) * 100);
            console.log(parseFloat(getStyle(obj, arr)));
        } else {
            var curentValue = parseInt(getStyle(obj, arr));
        }

        obj.speed = (iTarget - curentValue) / 10;
        obj.speed = (obj.speed > 0 ? Math.ceil(obj.speed) : Math.floor(obj.speed));
        if(curentValue == iTarget) {
            clearInterval(obj.timer);
            obj.timer = null;
        } else {
            if(arr == 'opacity') {
                obj.style[arr] = (curentValue + obj.speed) / 100;
                obj.style.filter = "alpha(opacity="+(curentValue + obj.speed) +");";
            } else {
                obj.style[arr] = curentValue + obj.speed + "px";
            }
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


//获取样式
function getStyle(obj, arr) {
    if(obj.currentStyle) {
        return obj.currentStyle[arr];
    } else {
        return getComputedStyle(obj, false)[arr];
    }
}
