var S_USER_ROLE;
var S_USER_NAME;
$(function(){
    queryPersonalInfo();
    setTimeout("queryOrder()",500);
})

function queryOrder(){
    if(S_USER_ROLE == '客户'){
        queryOrderInVis();
    }else{
        queryOrderInOwner();
    }
}

//查询所有订单
function queryOrderInVis(){
    $("tbody").html("");
    $.ajax({
        type: "GET",
        url: path + "/queryOrderInVis.action",
        data: {I_USER_ID:I_USER_ID},
        dataType: "json",
        success: function(backData){
            if(backData.length == 0){
                alert("暂无订单");
            }else {
                setOrder(backData);
            }
        }
    });
}

function queryOrderInOwner(){
    $("tbody").html("");
    $.ajax({
        type: "GET",
        url: path + "/queryOrderInOwner.action",
        data: {I_USER_ID:I_USER_ID},
        dataType: "json",
        success: function(backData){
            if(backData.length == 0){
                alert("暂无订单");
            }else {
                setOrder(backData);
            }
        }
    });
}

function setOrder(orders){
    var html = "";
    for(var i = 0;i<orders.length;i++){
        var order = orders[i];
        html += "<tr>";
        html += "<th width='40%'>"+order.I_ID+"</th>";
        html += "<th width='40%'>"+order.S_USER_NAME+"</th>";
        html += "<th width='40%'>"+order.S_HOTEL_NAME+"</th>";
        html += "<th width='40%'>"+order.S_ROOM_TYPE+"</th>";
        html += "<th width='40%'>"+order.D_OP_DATE+"</th>";
        html += "<th width='40%'>"+order.D_IN_DATE+" ~ "+order.D_OUT_DATE+"</th>";
        html += "<th width='40%'>"+order.I_ORDER_PRICE+"</th>";
        html += "<th width='40%'>"+order.S_ORDER_STATUS+"</th>";
        if(order.S_ORDER_STATUS == '已退房' && S_USER_ROLE == '客户'){
            html += "<th width='40%'><input type='button' ";
            html += "onclick='evalueate("+order.I_USER_ID+","+order.I_ROOM_ID+","+order.I_ID+")' value='评价'></th>";
        }else if(order.S_ORDER_STATUS == '已预订' && S_USER_ROLE == '酒店工作人员'){
            html += "<th width='40%'><input type='button' ";
            html += "onclick='done("+order.I_ID+",\"已退房\")' value='已退房'>";
            html += "<input type='button' onclick='done("+order.I_ID+",\"未入住\")' value='未入住'></th>";
        }else{
            html += "<th width='40%'></th>";
        }
        html += "</tr>";
    }
    $("tbody").html(html);
}

function evalueate(I_USER_ID,I_ROOM_ID,I_ID){
    window.open(path + '/bigHomeWork/page/web/evauleate.jsp?I_USER_ID='+I_USER_ID+"&I_ROOM_ID="+I_ROOM_ID+"&I_ORDER_ID="+I_ID, '评论', 'height=500, width=600, top=0, left=0')
}

function done(I_ID,S_ORDER_STATUS){
    $.ajax({
        type: "GET",
        url: path + "/done.action",
        data: {I_ID:I_ID,S_ORDER_STATUS:S_ORDER_STATUS},
        dataType: "json",
        success: function(backData){
            alert("修改状态成功");
            window.location.reload();
        }
    });
}

//查询个人信息
function queryPersonalInfo() {
    $.ajax({
        type: "GET",
        url: path+"/login.action",
        data: {I_USER_ID:I_USER_ID},
        dataType: "json",
        success: function(backData){
            S_USER_ROLE = backData[0].S_USER_ROLE;
            S_USER_NAME = backData[0].S_NAME;
        }
    });
}

