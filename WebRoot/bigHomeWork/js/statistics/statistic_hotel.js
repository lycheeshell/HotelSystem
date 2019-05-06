$(function () {
    setCss();
    setUserData();
    // setRoom_Book_Time();
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
    var colorArr = ["#FF0000","#FF00FF","#FFFF00","#B8860B","#0A0A0A","#836FFF","#EE9A00",
                     "#4EEE94","#C1FFC1"];
    for(var i = 0;i<9;i++){
        $(".statistics-item").eq(i).css("border-left","10px solid "+colorArr[i]);
        $(".statistics-item").eq(i).children(0).css("color",colorArr[i]);
    }
}

//各房型预定次数
function setRoom_Book_Time(params){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[0],
        legend:params.dayRoomStyle,
        Y:params.DAY,
        series:params.dayDatas
    };
    setStackBar(param);
    var param2 = {
        echarts_div:document.getElementsByClassName("echarts_div")[1],
        legend:params.quaRoomStyle,
        Y:params.QUA,
        series:params.quaDatas
    };
    setStackBar(param2);
}

//每天，每季度的每类客房的收益额及比例
function setHotel_Income(params){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[2],
        legend:params.dayRoomStyle,
        Y:params.DAY,
        series:params.dayDatas
    };
    setStackBar(param);
    var param2 = {
        echarts_div:document.getElementsByClassName("echarts_div")[3],
        legend:params.quaRoomStyle,
        Y:params.QUA,
        series:params.quaDatas
    };
    setStackBar(param2);
}

//每天，每季度的每类客房的实付率
function setHotel_pay(params){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[4],
        legend:params.dayRoomStyle,
        Y:params.DAY,
        series:params.dayDatas
    };
    setStackBar(param);
    var param2 = {
        echarts_div:document.getElementsByClassName("echarts_div")[5],
        legend:params.quaRoomStyle,
        Y:params.QUA,
        series:params.quaDatas
    };
    setStackBar(param2);
}

//各房型闲置率
function setRoom_Unuse(params){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[6],
        X:params.STYLE,
        name:'各房型闲置率',
        datas:params.datas,
        noShowPer:true
    };
    setPie(param);
}

//房型的顾客满意度
function setRoomStit(params){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[7],
        X:params.STYLE,
        name:'房型的顾客满意度',
        datas:params.datas
        // noShowPer:true
    };
    setPie(param);
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