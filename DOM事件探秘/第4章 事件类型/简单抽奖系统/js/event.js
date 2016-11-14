/**
 * Created by 327134 on 2016/11/14.
 * 事件处理
 */



window.onload = function()
{
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");

    start.onclick = begin;
    stop.onclick = end;
}

var prize=["iphone7", "佳能相机", "Macbook Pro", "iwatch","优惠券100元", "外星人笔记本"];
var timer=null;

function begin()
{
    var title = document.getElementById("title");

    //clearTimeout(timer)
    timer = setInterval(function() {
        var randomNum = Math.floor(Math.random() * prize.length);
        title.innerHTML = prize[randomNum];
    }, 100);
    var start = document.getElementById("start");
    start.style.backgroundColor="#999";
    start.onclick = null;
}

function end()
{
    clearInterval(timer);

    var start = document.getElementById("start");
    start.style.backgroundColor="#036";
    start.onclick = begin;
}
