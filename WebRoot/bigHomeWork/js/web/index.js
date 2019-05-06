var S_USER_ROLE;
var S_USER_NAME;
$(function () {
    $(".err").hide();           //无用处按钮
    queryPersonalInfo();
    queryHotels();
    setSrc();
    setTimeout("setHotelHeader()",500);
    setTimeout("setWH()",1000);
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
    $(".introduction").height(offer_right_height*0.5);          //酒店介绍和价钱的位置调整
    $(".start").height(offer_right_height*0.2);          //星级
    $(".starts").height(offer_right_height*0.2);          //评价
    $(".price").height(offer_right_height*0.2);            //价钱
}

function queryHotels(){
    var param = {"S_HOTEL_NAME":$("#S_HOTEL_NAME").val(),
        "S_PROVINCE":$(".currentValue").eq(0).val(),
        "S_CITY":$(".currentValue").eq(1).val(),
        "S_AREA":$(".currentValue").eq(2).val(),
        "START_EVA":$("#START_EVA").val(),
        "END_EVA":$("#END_EVA").val(),
        "START_PRICE":$("#START_PRICE").val(),
        "END_PRICE":$("#END_PRICE").val(),
        "order":$("#order").val(),
        "I_STAR":$("#I_STAR").val()};
    $.ajax({
        type: "GET",
        url: path + "/queryHotels.action",
        data: param,
        dataType: "json",
        success: function(backData){
            setHotelItem(backData);
            setWH();
        }
    });
}

function setHotelItem(hotelItems){
    $(".offer-grids").html("");
    var html = "";
    for(var i = 0;i<hotelItems.length;i++){
        var item = hotelItems[i];
        html += "<div onclick='clickItem("+item.I_HOTEL_ID+")' class='col-md-6 offer-grid'>";
        html += "<div class='offer-grid1'>";
        html += "<p>"+item.S_HOTEL_NAME+"</p>";
        html += "<hr style='height:3px;border:none;border-top:1px double black;' />";
        html += "<div class='offer1'>";
        html += "<div class='offer-left'>";
        html += "<p class='mask'><img src='"+path+"/bigHomeWork/source/hotel/"+item.S_HOTEL_PATH+".jpg' class='img-responsive zoom-img' alt=''/></p></div>";
        html += "<div class='offer-right'>";
        html += "<div class='introduction' ><span>"+item.S_INTRO+"</span></div>";
        html += "<div class='start' ><span>"+item.I_STAR+"星级酒店</span></div>";
        html += "<div class='starts'><ul id = 'pingStar'>";
        if(item.I_EVA_SCORE == null){
            html += "<li rel = '1' title = '1星'></li>";
            html += "<li rel = '2' title = '2星'></li>";
            html += "<li rel = '3' title = '3星'></li>";
            html += "<li rel = '4' title = '4星'></li>";
            html += "<li rel = '5' title = '5星'></li>";
            html += "<span id='dir'>暂无评分</span></ul></div>";
        }else{
            if(item.I_EVA_SCORE >= 1){
                html += "<li rel = '1' title = '1星' class='on'></li>";
            }else{
                html += "<li rel = '1' title = '1星'></li>";
            }
            if(item.I_EVA_SCORE >= 2){
                html += "<li rel = '2' title = '2星' class='on'></li>";
            }else{
                html += "<li rel = '2' title = '2星'></li>";
            }
            if(item.I_EVA_SCORE >= 3){
                html += "<li rel = '3' title = '3星' class='on'></li>";
            }else{
                html += "<li rel = '3' title = '3星'></li>";
            }
            if(item.I_EVA_SCORE >= 4){
                html += "<li rel = '4' title = '4星' class='on'></li>";
            }else{
                html += "<li rel = '4' title = '4星'></li>";
            }
            if(item.I_EVA_SCORE == 5){
                html += "<li rel = '5' title = '5星' class='on'></li>";
            }else{
                html += "<li rel = '5' title = '5星'></li>";
            }
            html += "<span id='dir'>"+item.I_EVA_SCORE+"分</span></ul></div>";
        }
        html += "<div class='price' ><span>起</span><span>"+item.I_PRICE+"</span><span>￥</span></div></div>";
        html += "<div class='clearfix'></div></div></div></div>";
    }
    $(".offer-grids").html(html);
}

function clickItem(I_HOTEL_ID){
    window.location.href = path + "/bigHomeWork/page/web/detail.jsp?I_USER_ID="+I_USER_ID+"&I_HOTEL_ID="+I_HOTEL_ID;
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

function setScore(score) {
    var s = document.getElementById("pingStar");
    var m = document.getElementById("dir");
    var n = s.getElementsByTagName("li");
    for (var i = 0; i < score; i++) {
        n[i].className = "on";
    }
    m.innerHTML = score+"分";
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