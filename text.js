window.onload=function () {

    /*
    * getTime用来获取当前时间并且转化为项目需求格式
    *参数：things：我做了什么
    * 返回值：得到当天日期且格式为：
    * 今天是xxx日xx月xx年，我xx
    * */
    var getTime=function(things){
        var date= new Date();
        date = "今天是"+date.getDate()+"号"+(date.getMonth()+1)+"月"+date.getFullYear()+"年，我"+things
        return date
    }
    var doDate=getTime("吃了饭");
    console.log(doDate);





}