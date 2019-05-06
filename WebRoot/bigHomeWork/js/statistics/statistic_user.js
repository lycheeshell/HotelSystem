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
    var colorArr = ["#FF0000","#FFFF00","#FF00FF","#B8860B","#0A0A0A","#C1FFC1","#EE9A00",
                     "#4EEE94","#836FFF"];
    for(var i = 0;i<9;i++){
        $(".statistics-item").eq(i).css("border-left","10px solid "+colorArr[i]);
        $(".statistics-item").eq(i).children(0).css("color",colorArr[i]);
    }
}

//各房型预定次数
function setRoom_Book_Time(datas){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[0],
        X:['商务大床房','商务双床房','豪华大床房','豪华双床房'],
        name:'各房型预定次数',
        // datas:[
        //     {value:34, name:'商务大床房'},
        //     {value:323, name:'商务双床房'},
        //     {value:565, name:'豪华大床房'},
        //     {value:135, name:'豪华双床房'}
        // ]
        datas:datas
    };
    setPie(param);
}

//季度消费走势
function setQuarter_Cost_Trend(datas){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[1],
        // X:['第一季度','第二季度','第三季度','第四季度'],
        // datas:[78,545,76,32]
        X:datas.X,
        datas:datas.datas
    };
    setLine(param);
}

//年度消费走势
function setYear_Cost_Trend(datas){
    var param = {
        echarts_div:document.getElementsByClassName("echarts_div")[2],
        // X:['2015','2016','2017','2018'],
        // datas:[178,545,276,332]
        X:datas.X,
        datas:datas.datas
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



