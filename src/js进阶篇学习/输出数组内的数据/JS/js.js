/**
 * Created by 327134 on 2016/9/6.
 */
//第一步把之前的数据写成一个数组的形式,定义变量为 infos
var infos = [
    ['小A','女',21,'大一'],  ['小B','男',23,'大三'],
    ['小C','男',24,'大四'],  ['小D','女',21,'大一'],
    ['小E','女',22,'大四'],  ['小F','男',21,'大一'],
    ['小G','女',22,'大二'],  ['小H','女',20,'大三'],
    ['小I','女',20,'大一'],  ['小J','男',20,'大三']];

//第一次筛选，找出都是大一的信息
var infosNew = new Array();
var j = 0;
var i = 0;
for(i = 0; i < 10; i ++)
{
    if(infos[i][3] == "大一") {
        infosNew[j] = new Array();
        infosNew[j] = infos[i];
        j ++;
    }
}

//第二次筛选，找出都是女生的信息
for(var k = 0; k < infosNew.length; k ++) {
    if(infosNew[k][1] == "女") {
        document.write(infosNew[k][0] + "<br>");
    }
}
