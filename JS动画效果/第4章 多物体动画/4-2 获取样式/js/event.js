/**
 * Created by 327134 on 2016/11/16.
 * func：获取样式
 */

window.onload = function()  {
    var div_text = document.getElementById("div_text");
    setInterval(function(){
        div_text.style.width = parseInt(getStyle(div_text,'width')) + 1 + "px";
        div_text.style.height = parseInt(getStyle(div_text,'height')) + 1 + "px";
        div_text.style.fontSize = parseInt(getStyle(div_text,'fontSize')) + 1 + "px";
    }, 30);
}

//获取样式
function getStyle(obj, arr) {
    if(obj.currentStyle) {
        //IE浏览器
        return obj.currentStyle[arr];
    } else {
        //火狐浏览器
        return getComputedStyle(obj, false)[arr];
    }
}
