/**
 * Created by 327134 on 2016/11/14.
 * 事件处理
 */

var prize=["iphone7", "佳能相机", "Macbook Pro", "iwatch","优惠券100元", "外星人笔记本"];
var timer=null;
var flag = true;

window.onload = function()
{
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");

    //鼠标事件
    start.onclick = begin;
    stop.onclick = end;

    //键盘事件
    /* 鼠标长按，事件会重复执行
    * keyDown : 当用户按下键盘上的任意键时触发，而且如果按住不放的话，会重复触发此事件
    * keyPress ：当用户按下键盘上的字符键时触发，而且如果按住不放的话，会重复触发此事件
    * keyUp ：当用户释放键盘上的键时触发
    */
    document.onkeyup = function(event)
    {
        event = event || window.event;
        //console.log(event.keyCode);
        if(event.keyCode == 13)
        {
            if(flag) {
                begin();
                flag = false;
            } else if(!flag) {
                end();
                flag = true;
            }
        }
    }

}

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

    flag = false;
}

function end()
{
    clearInterval(timer);

    var start = document.getElementById("start");
    start.style.backgroundColor="#036";
    start.onclick = begin;
    flag = true;
}
