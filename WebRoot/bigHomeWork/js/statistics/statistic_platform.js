$(function () {
    setCss();
    setUserData();
})


//样式改变
function setCss(){
    // 导航
    $(".daohang ul li").bind("click",function () {
        $(".daohang ul li").css("border","none");
        $(".daohang ul li").eq($(this).index()).css("border","5px solid #FEEC80");
    })
    // 统计内容
    var mainContainer_width = $(".mainContainer").innerWidth();
    $(".statistics-content").width(mainContainer_width-300);
    // 统计条目左侧颜色
    var colorArr = ["#FF0000","#FFFF00","#FF00FF","#B8860B","#0A0A0A","#C1FFC1","#EE9A00"];
    for(var i = 0;i<7;i++){
        $(".statistics-item").eq(i).css("border-left","10px solid "+colorArr[i]);
        $(".statistics-item").eq(i).children(0).css("color",colorArr[i]);
    }
}


//注册会员每月数量、增长数
function setUserReg_Num_Increase(param){
    var datas1 = param.datas;
    var datas2 = [];
    for(var i = 0;i<datas1.length;i++){            //增长数就是后一个减去前一个
        if(i == 0){
            datas2[i] = 0;
        }else{
            datas2[i] = datas1[i] - datas1[i-1];
        }
    }
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[0],
        X:param.month,
        datas1:datas1,                               //数值
        datas2:datas2,                               //增长数
        legend:['注册数量','增长数']
    }
    setDoubleBar(param);
}

//年龄分布
function setAge(params){
    var result = {};
    var X = [];
    var datas = [];
    for(var i = 0;i<params.length;i++){
        var age = params[i].S_AGE+"";
        var o = age.substring(0,1);        //先把数据除10
        var area;                                   //区域
        if(params[i].S_AGE < 10){                    //确认年龄所在区域，10为纬度
            area = "0~10";
        }else{
            area = o * 10 + "~" + (parseInt(o)+1) * 10;
        }
        if(result[area] != null){
            result[area] = parseInt(result[area]) + parseInt(params[i].sum);
        }else {
            result[area] = params[i].sum;
        }
    }
    for(var key in result){
        X.push(key);
    }
    for(var i = 0;i<X.length;i++){
        var map = {value:result[X[i]],name:X[i]};
        datas.push(map);
    }
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[1],
        X:X,
        name:'年龄分布',
        datas:datas
    };
    setPie(param);
}

//性别分布
function setSex(params){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[2],
        X:['男','女'],
        name:'性别分布',
        datas:[
            {value:params.man, name:'男'},
            {value:params.woman, name:'女'}
        ]
    };
    setPie(param);
}

//注册酒店每月数量、增长数
function setHotelReg_Num_Increase(params){
    var datas1 = params.datas;
    var datas2 = [];
    for(var i = 0;i<datas1.length;i++){            //增长数就是后一个减去前一个
        if(i == 0){
            datas2[i] = 0;
        }else{
            datas2[i] = datas1[i] - datas1[i-1];
        }
    }
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[3],
        X:params.month,
        datas1:datas1,                               //数值
        datas2:datas2,                               //增长数
        legend:['注册数量','增长数']
    }
    setDoubleBar(param);
}

//酒店地域的数量及收益总额分布
function setHotel_adress_Income(params){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[4],
        legend:params.AREA,
        name1:'酒店数量',
        name2:'收益总额',
        datas1:params.HOTEL_TOTAL,
        datas2:params.PRICE_TOTAL
    };
    setDoublePie(param);
}

//每天所有酒店收益总额
function setHotel_Income_day(params){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[5],
        X:params.day,
        datas:params.datas
    };
    setLine(param);
}

//每季度所有酒店收益总额
function setHotel_Income_Quarter(params){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[6],
        X:params.QUA,
        datas:params.datas
    };
    setLine(param);
}

function clickUser(){
    window.location.href = path + "/bigHomeWork/page/statistics/statistics_user.jsp";
}

function clickPlat(){
    window.location.href = path + "/bigHomeWork/page/statistics/statistics_platform.jsp";
}

function clickHotel(){
    window.location.href = path + "/bigHomeWork/page/statistics/statistics_hotel.jsp";
}