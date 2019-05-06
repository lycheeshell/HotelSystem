$(function () {
    queryRoomInfo();
    queryPersonalInfo();
    queryDiscount();
})

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
            var user = backData[0];
            $(".S_USER_NAME").html(user.S_NAME);
            $(".S_USER_PHONE").html(user.S_PHONE);
        }
    });
}

//查询房间信息
function queryRoomInfo() {
    $.ajax({
        type: "GET",
        url: path+"/queryRoomInfo.action",
        data: {I_ROOM_ID:I_ROOM_ID},
        dataType: "json",
        success: function(backData){
            if(backData.length == 0){
                alert("查询房间失败");
                return;
            }
            var room = backData[0];
            $(".room_name").html(room.S_HOTEL_NAME);
            $(".S_ROOM_STYLE").html(room.S_ROOM_TYPE+"<input type='text' onchange='countPrice()' class='S_ROOM_COUNT' style='width:50px'>间");
            $(".ROOM_PRICE").html(room.I_PRICE+"元");
        }
    });
}

//查询个人信息
function queryDiscount() {
    $.ajax({
        type: "GET",
        url: path+"/queryDiscount.action",
        data: {I_ROOM_ID:I_ROOM_ID},
        dataType: "json",
        success: function(backData){
            if(backData.length == 0){
                $(".highDiscount").parent().hide();
                return;
            }
            var html = "";
            for(var i = 0;i<backData.length;i++){
                html += "<option value='"+backData[i].I_DISCOUNT+"'>";
                html += "折扣："+backData[i].I_DISCOUNT+"%  活动时间："+backData[i].D_START_TIME+" 至 "+backData[i].D_END_TIME;
                html += "</option>";
            }
            $(".S_DISCOUNT").html(html);
        }
    });
}

//改变日期时修改总价
function countPrice(){
    var offerHtml = $(".ROOM_PRICE").html();
    var price = offerHtml.substring(0,offerHtml.indexOf("元"));
    var START_DATE = $("#START_DATE").val().split("-");
    var END_DATE = $("#END_DATE").val().split("-");
    var D_START = new Date(START_DATE[0], START_DATE[1]-1, START_DATE[2], 0, 0, 0);
    var D_END = new Date(END_DATE[0], END_DATE[1]-1, END_DATE[2], 0, 0, 0);
    var discount = $(".S_DISCOUNT").val() / 100;
    var roomCount = $(".S_ROOM_COUNT").val();
    if(END_DATE == "" || START_DATE == "" || roomCount == ""){
        return;
    }
    if(D_START > D_END){
        alert("开始日期不能大于结束日期");
        $(".COUNT_TOTAL").html("");
    }else{
        var day = DateMinus(D_START,D_END);
        var html = "";
        var total = 0;
        if(discount == 0){
            total = (roomCount * price * day).toFixed(2);
            html += roomCount+"【房间数】  *  "+price+"【单价】  *  "+day+"【入住天数】 = ";
            html += total + "元";
        }else{
            total = (roomCount * price * day * discount).toFixed(2);
            html += roomCount+"【房间数】  *  "+price+"【单价】  *  "+discount+"【折扣】  *  "+day+"【入住天数】 = ";
            html += total +"元";
        }
        $(".COUNT_TOTAL").html(html);
        $(".COUNT_TOTAL_TEMP").html(total);
    }
}

function DateMinus(D_START,D_END){
    var days = D_END.getTime() - D_START.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day+1;
}

//下单
function order(){
    if($(".COUNT_TOTAL_TEMP").html() == null || $(".S_MAN_COUNT").val() == null){
        alert("请填充所有资料");
        return;
    }
    $.ajax({
        type: "GET",
        url: path+"/order.action",
        data: {I_ROOM_ID:I_ROOM_ID,
            I_USER_ID:I_USER_ID,
            D_IN_DATE:$("#START_DATE").val(),
            D_OUT_DATE:$("#END_DATE").val(),
            I_ORDER_PRICE:$(".COUNT_TOTAL_TEMP").html(),
            I_COUNT:$(".S_ROOM_COUNT").val(),
            I_MAN_COUNT:$(".S_MAN_COUNT").val(),
            I_IS_CHILD:$(".S_IS_CHILD").val(),
            I_DISCOUNT:$(".S_DISCOUNT").val()
            },
        dataType: "json",
        success: function(backData){
           if(backData == 1){
               alert("下单成功");
               window.close();
           }
        }
    });
}

function changeDiscount() {
    if($(".S_DISCOUNT option").index($(".S_DISCOUNT option:selected")) == 0){
        $(".highDiscount").show();
    }else{
        $(".highDiscount").hide();
    }
    countPrice();
}