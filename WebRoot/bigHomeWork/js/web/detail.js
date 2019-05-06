var S_USER_ROLE;
var S_USER_NAME;
$(function () {
    $(".err").hide();           //无用处按钮
    queryPersonalInfo();
    setWH();
    queryHotels();
    // queryEvalueateandHotel();
    setTimeout("queryRoomStyle()",500);
    queryScore();
    queryEvalueate();
    setSrc();
    setTimeout("setHotelHeader()",500);
})

function setHotelHeader(){
    if(S_USER_ROLE == '酒店工作人员'){
        $(".hotelName").show();
        $(".orderName span").html("酒店订单");
    }
}

window.onresize = function () {
    setWH();
}

function setWH() {
    var offer_right_height = $(".offer-left").height();
    $(".introduction").height(offer_right_height*0.8);
    $(".price").height(offer_right_height*0.2);
}

function queryHotels(){
    $.ajax({
        type: "GET",
        url: path + "/queryHotels.action",
        data: {I_HOTEL_ID:I_HOTEL_ID},
        dataType: "json",
        success: function(backData){
            if(backData.length == 0){
                alert("查询失败");
            }else {
                setHotelDetail(backData[0]);
                setImage(backData[0].S_HOTEL_PATH);
            }
        }
    });
}

function setImage(S_PATH){
   $(".slid img").attr("src",path + "/bigHomeWork/source/hotel/"+S_PATH+".jpg");
}

function setScore(score) {
    var s = document.getElementById("pingStar");
    var m = document.getElementById("dir");
    var n = s.getElementsByTagName("li");
    for (var i = 0; i < score; i++) {
        n[i].className = "on";
    }
    m.innerHTML = score+"分";
}

function setHotelDetail(detail){
    $(".detail_header h1").html(detail.S_HOTEL_NAME);
    $(".detail_header span").html("地址:"+detail.S_PROVINCE+detail.S_CITY+detail.S_AREA+detail.S_DOMAIN);
    // $(".offer h2").html("￥"+detail.I_PRICE+"元/天");
    $(".owner img").attr("src",path + "/bigHomeWork/source/user/"+detail.S_USER_PATH+".jpg");
    $(".owner span").eq(0).html(detail.S_NAME);
    $(".environment_introduce").html("<h3>酒店星级:"+detail.I_STAR+"星级</h3><span>"+detail.S_INTRO+"</span>");
}

//查询房东评价和酒店
function queryEvalueateandHotel(){
    $.ajax({
        type: "GET",
        url: path + "/queryEvalueateandHotels.action",
        data: {I_HOTEL_ID:I_HOTEL_ID},
        dataType: "json",
        success: function(backData){
            $(".owner_evaluate").html(backData.EVALUEATE_COUNT);
            $(".owner_hotel").html(backData.HOTEL_COUNT);
        }
    });
}

//查询酒店评分
function queryScore(){
    $.ajax({
        type: "GET",
        url: path + "/queryScore.action",
        data: {I_HOTEL_ID:I_HOTEL_ID},
        dataType: "json",
        success: function(backData){
           if(backData[0].AVG_SCORE != null){
               setScore(backData[0].AVG_SCORE);
               $(".evaluate_sum").html("共"+backData[0].EVALUEATE_COUNT+"条评价");
           }else{
               var m = document.getElementById("dir");
               m.innerHTML = "暂时没有人评分！";
               $(".evaluate_sum").html("共0条评价");
           }
        }
    });
}

//查询所有评价
function queryEvalueate(){
    $.ajax({
        type: "GET",
        url: path + "/queryEvalueate.action",
        data: {I_HOTEL_ID:I_HOTEL_ID},
        dataType: "json",
        success: function(backData){
            for(var i = 0;i<backData.length;i++){
                var obj = backData[i];
                var html = "";
                html += "<div class='visitor_evaluate'>";
                html += "<img src='"+path+"/bigHomeWork/source/user/"+obj.S_PATH+".jpg' style='border-radius: 50%'>";
                html += "<span class='visitor_name'>"+obj.S_USER_NAME+"</span>";
                html += "<span class='visitor_score'>"+obj.I_EVA_SCORE+"分</span>";
                html += "<h3>"+obj.VTH_EVA+"</h3>";
                $(".detail_container").append(html);
            }
        }
    });
}



//下单
function order(){
    var D_IN_DATE = $("#START_DATE").val();
    var D_OUT_DATE = $("#END_DATE").val();
    var I_ORDER_PRICE = $(".right-span").html();
    if(I_ORDER_PRICE == ""){
        alert("请正确选择日期");
        return;
    }
    $.ajax({
        type: "GET",
        url: "http://localhost:8081/order",
        data: {I_HOTEL_ID:I_HOTEL_ID,I_USER_ID:I_USER_ID,D_IN_DATE:D_IN_DATE,D_OUT_DATE:D_OUT_DATE,I_ORDER_PRICE:I_ORDER_PRICE},
        dataType: "json",
        success: function(backData){
            if(backData.affectedRows > 0){
                alert("下单成功");
                window.location.reload();
            }else{
                alert("下单失败");
            }
        }
    });
}

//改变日期时修改总价
function countPrice(){
    var offerHtml = $(".offer h2").html();
    var price = offerHtml.substring(1,offerHtml.indexOf("元"));
    var START_DATE = $("#START_DATE").val().split("-");
    var END_DATE = $("#END_DATE").val().split("-");
    var D_START = new Date(START_DATE[0], START_DATE[1]-1, START_DATE[2], 0, 0, 0);
    var D_END = new Date(END_DATE[0], END_DATE[1]-1, END_DATE[2], 0, 0, 0);
    if(END_DATE == "" || START_DATE == ""){
        return;
    }
    if(D_START > D_END){
        alert("开始日期不能大于结束日期");
        $(".right-span").html("");
    }else{
        var day = DateMinus(D_START,D_END);
        $(".right-span").html(price * day);
    }
}

function DateMinus(D_START,D_END){
    var days = D_END.getTime() - D_START.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day+1;
}


//查询个人信息
function queryPersonalInfo() {
    $.ajax({
        type: "GET",
        url: path+"/login.action",
        data: {I_USER_ID:I_USER_ID},
        dataType: "json",
        success: function(backData){
            if(backData.length == 0){
                alert("查询用户失败");
                return;
            }
            S_USER_ROLE = backData[0].S_USER_ROLE;
            S_USER_NAME = backData[0].S_NAME;
            if(S_USER_ROLE == '酒店工作人员'){
                $(".phone").eq(1).html("<span>发布房源</span>");
            }else{
                $(".phone").eq(1).parent().hide();
            }
            $(".phone").eq(2).html("<span>个人订单</span>");
            $(".phone").eq(3).html("<span>"+S_USER_NAME+"</span>");
            $(".phone").eq(4).html("<span>"+backData[0].S_HOTEL_NAME+"</span>");
        }
    });
}

//查询房型
function queryRoomStyle() {
    $(".room_style_table").html("");
    $.ajax({
        type: "GET",
        url: path+"/queryRoomStyle.action",
        data: {I_HOTEL_ID:I_HOTEL_ID},
        dataType: "json",
        success: function(backData){
            if(backData.length == 0){
                alert("查询房型失败");
                return;
            }
            var html = "";
            for(var i = 0;i<backData.length;i++){
                var item = backData[i];
                html += "<tr>";
                html += "<td><img style='min-width: 300px' src='"+path+"/bigHomeWork/source/room/"+item.S_PATH+".jpg'></td>";
                html += "<td>"+item.S_ROOM_TYPE+"</td>";
                html += "<td>"+item.I_PRICE+"元/晚</td>";
                if(S_USER_ROLE == '客户'){
                    html += "<td><button onclick='bookRoom("+item.I_ROOM_ID+")'>预订</button></td>";
                }
                html += "</tr>";
            }
            $(".room_style_table").html(html);
        }
    });
}


function checkOeder(){
    window.open(path+"/bigHomeWork/page/web/order.jsp?I_USER_ID="+I_USER_ID);
}


function personalInfo(){
    window.open(path+"/bigHomeWork/page/web/personalInfo.jsp?I_USER_ID="+I_USER_ID);
}

function setSrc(){
    $(".home").attr("href",path+"/bigHomeWork/page/web/index.jsp?I_USER_ID="+I_USER_ID);
}

function hotelInfo(){
    window.open(path+"/bigHomeWork/page/web/hotelInfo.jsp?I_USER_ID="+I_USER_ID);
}

function bookRoom(I_ROOM_ID){
    window.open(path+"/bigHomeWork/page/web/book.jsp?I_USER_ID="+I_USER_ID+"&I_ROOM_ID="+I_ROOM_ID);
}