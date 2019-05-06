function setUserData(){
    userRegNum();
    userAge();
    userSex();
    hotelRegNum();
    hotelArea();
    dayIn();
    quartIn();
}

function userRegNum(){
    $.ajax({
        type: "GET",
        url: path+"/userRegNum.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0){
                var param = {datas:[],month:[]};
                for(var i = 0;i<backData.length;i++){
                    param.datas.push(backData[i].sum);
                    param.month.push(backData[i].month);
                }
                setUserReg_Num_Increase(param);
            }
        }
    });
}

function userAge(){
    $.ajax({
        type: "GET",
        url: path+"/userAge.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0){
                var param = [];
                for(var i = 0;i<backData.length;i++){
                    var map = {};
                    map.S_AGE = backData[i].S_AGE;
                    map.sum = backData[i].sum;
                    param.push(map)
                }
                setAge(param);
            }
        }
    });
}

function userSex(){
    $.ajax({
        type: "GET",
        url: path+"/userSex.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0){
                var param = {};
                for(var i = 0;i<backData.length;i++){
                    if(backData[i].S_SEX == '男'){
                        param.man = backData[i].sum;
                    }else{
                        param.woman = backData[i].sum;
                    }
                }
                setSex(param);
            }
        }
    });
}

function hotelRegNum(){
    $.ajax({
        type: "GET",
        url: path+"/hotelRegNum.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0){
                var param = {datas:[],month:[]};
                for(var i = 0;i<backData.length;i++){
                    param.datas.push(backData[i].sum);
                    param.month.push(backData[i].month);
                }
                setHotelReg_Num_Increase(param);
            }
        }
    });
}

function hotelArea(){
    $.ajax({
        type: "GET",
        url: path+"/hotelArea.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0){
                var param = {AREA:[],HOTEL_TOTAL:[],PRICE_TOTAL:[]};
                for(var i = 0;i<backData.length;i++){
                    var map1 = {value:backData[i].HOTEL_TOTAL, name:backData[i].AREA};
                    var map2 = {value:backData[i].PRICE_TOTAL, name:backData[i].AREA};
                    param.AREA.push(backData[i].AREA);
                    param.HOTEL_TOTAL.push(map1);
                    param.PRICE_TOTAL.push(map2);
                }
                setHotel_adress_Income(param);
            }
        }
    });
}

function dayIn(){
    $.ajax({
        type: "GET",
        url: path+"/dayIn.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0){
                var param = {day:[],datas:[]};
                for(var i = 0;i<backData.length;i++){
                    param.day.push(backData[i].DAY);
                    param.datas.push(backData[i].PRICE_SUM);
                }
                setHotel_Income_day(param);
            }
        }
    });
}

function quartIn(){
    $.ajax({
        type: "GET",
        url: path+"/quartIn.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0){
                var param = {QUA:[],datas:[]};
                for(var i = 0;i<backData.length;i++){
                    param.QUA.push(backData[i].QUA);
                    param.datas.push(backData[i].PRICE_SUM);
                }
                setHotel_Income_Quarter(param);
            }
        }
    });
}