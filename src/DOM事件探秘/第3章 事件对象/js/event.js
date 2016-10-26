/**
 * Created by 327134 on 2016/10/26.
 */

//跨浏览器事件解决
var eventUtil = {
    //添加句柄
    addHandler:function(element, type, handler){
        if(element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if(element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    //删除句柄
    removeHandler:function(element, type, handler){
        if(element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if(element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    //获取事件
    getEvent:function(event)
    {
        return event || window.event;
    },
    //获取类型
    getType:function(event)
    {
        return event.type;
    },
    //获取目标
    getTarget:function(event)
    {
        return event.target || event.srcElement;
    },
    //停止事件冒泡
    stopPropagation:function(event)
    {
        if(event.stopPropagation) {
            return event.stopPropagation();
        } else {
            //IE
            return event.cancelBubble = true;
        }
    },
    //取消默认事件
    preventDefault:function(event)
    {
        if(event.preventDefault) {
            return event.preventDefault();
        } else {
            //IE
            return event.returnValue = false;
        }
    }
}

