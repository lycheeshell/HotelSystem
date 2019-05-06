function setUserData(){
    userBookTime();
    setRoom_Book_Time_data();
    bookTotalPrice();
    bookAvgPrice();
    setQuarter_Cost_Trend_data();
    setYear_Cost_Trend_data();
    userAvgDiscount();
    userAvgCut();
    userInPer();
}

function userBookTime(){
    $.ajax({
        type: "GET",
        url: path+"/userBookTime.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0){
                $(".statistics-item:eq(0) h2").html(backData[0].COUNT);
            }
        }
    });
}

function setRoom_Book_Time_data(){
    $.ajax({
        type: "GET",
        url: path+"/setRoom_Book_Time.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0){
                var datas = [];
                for(var i = 0;i<backData.length;i++){
                    var map = {value:backData[i].COUNT,name:backData[i].S_ROOM_TYPE}
                    datas.push(map);
                }
                setRoom_Book_Time(datas);
            }
        }
    });
}

function bookTotalPrice(){
    $.ajax({
        type: "GET",
        url: path+"/bookTotalPrice.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0) {
                $(".statistics-item:eq(2) h2").html(backData[0].SUM);
            }
        }
    });
}

function bookAvgPrice(){
    $.ajax({
        type: "GET",
        url: path+"/bookAvgPrice.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0) {
                $(".statistics-item:eq(3) h2").html(backData[0].AVG);
            }
        }
    });
}

function setQuarter_Cost_Trend_data(){
    $.ajax({
        type: "GET",
        url: path+"/setQuarter_Cost_Trend.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0){
                var datas = {X:[],datas:[]};
                for(var i = 0;i<backData.length;i++){
                    datas.X.push(backData[i].QUA);
                    datas.datas.push(backData[i].PRICE_SUM);
                }
                setQuarter_Cost_Trend(datas);
            }
        }
    });
}

function setYear_Cost_Trend_data(){
    $.ajax({
        type: "GET",
        url: path+"/setYear_Cost_Trend.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0){
                var datas = {X:[],datas:[]};
                for(var i = 0;i<backData.length;i++){
                    datas.X.push(backData[i].YEAR);
                    datas.datas.push(backData[i].PRICE_SUM);
                }
                setYear_Cost_Trend(datas);
            }
        }
    });
}

function userAvgDiscount(){
    $.ajax({
        type: "GET",
        url: path+"/userAvgDiscount.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0) {
                $(".statistics-item:eq(6) h2").html(backData[0].AVG);
            }
        }
    });
}

function userAvgCut(){
    $.ajax({
        type: "GET",
        url: path+"/userAvgCut.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0) {
                $(".statistics-item:eq(7) h2").html(backData[0].AVG);
            }
        }
    });
}

function userInPer(){
    $.ajax({
        type: "GET",
        url: path+"/userInPer.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0) {
                $(".statistics-item:eq(8) h2").html(backData[0].result);
            }
        }
    });
}
