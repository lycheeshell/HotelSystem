function setUserData(){
    bookNum();
    inCome();
    pay();
    free();
    lookBack();
    roomStit();
}

function bookNum(){
    var params = {DAY:[],dayDatas:[],dayRoomStyle:[],
                  QUA:[],quaDatas:[],quaRoomStyle:[]};
    $.ajax({
        type: "GET",
        url: path+"/dayBook.action",
        dataType: "json",
        async:false,
        success: function(backData){
            for(var i = 0;i<backData.length;i++){               //先把时间和房型都新建,可知总共有多少房型多少时间
                var S_ROOM_TYPE = backData[i].S_ROOM_TYPE;
                var DAY = backData[i].DAY;
                if(params.dayRoomStyle.indexOf(S_ROOM_TYPE) == -1){
                    params.dayRoomStyle.push(S_ROOM_TYPE);
                }
                if(params.DAY.indexOf(DAY) == -1){
                    params.DAY.push(DAY);
                }
            }
            for (var i = 0;i<params.dayRoomStyle.length;i++){   //查看每个房型在每个时间上有没有存在数据，没有置为0
                var data = {name:params.dayRoomStyle[i],data:[]};
                for (var k = 0;k<params.DAY.length;k++){
                    var  isExist = false;
                    for(var j = 0;j<backData.length;j++){
                        if(params.dayRoomStyle[i] == backData[j].S_ROOM_TYPE &&
                            params.DAY[k] == backData[j].DAY){
                            isExist = true;
                            data.data.push(backData[j].BOOK_SUM);
                        }
                    }
                    if(!isExist){
                        data.data.push(0);
                    }
                }
                params.dayDatas.push(data);
            }
        }
    });
    $.ajax({
        type: "GET",
        url: path+"/quartBook.action",
        dataType: "json",
        async:false,
        success: function(backData){
            for(var i = 0;i<backData.length;i++){               //先把时间和房型都新建,可知总共有多少房型多少时间
                var S_ROOM_TYPE = backData[i].S_ROOM_TYPE;
                var QUA = backData[i].QUA;
                if(params.quaRoomStyle.indexOf(S_ROOM_TYPE) == -1){
                    params.quaRoomStyle.push(S_ROOM_TYPE);
                }
                if(params.QUA.indexOf(QUA) == -1){
                    params.QUA.push(QUA);
                }
            }
            for (var i = 0;i<params.quaRoomStyle.length;i++){   //查看每个房型在每个时间上有没有存在数据，没有置为0
                var data = {name:params.quaRoomStyle[i],data:[]};
                for (var k = 0;k<params.QUA.length;k++){
                    var  isExist = false;
                    for(var j = 0;j<backData.length;j++){
                        if(params.quaRoomStyle[i] == backData[j].S_ROOM_TYPE &&
                            params.QUA[k] == backData[j].QUA){
                            isExist = true;
                            data.data.push(backData[j].BOOK_SUM);
                        }
                    }
                    if(!isExist){
                        data.data.push(0);
                    }
                }
                params.quaDatas.push(data);
            }
        }
    });
    setRoom_Book_Time(params);
}

function inCome(){
    var params = {DAY:[],dayDatas:[],dayRoomStyle:[],
        QUA:[],quaDatas:[],quaRoomStyle:[]};
    $.ajax({
        type: "GET",
        url: path+"/dayIncome.action",
        dataType: "json",
        async:false,
        success: function(backData){
            for(var i = 0;i<backData.length;i++){               //先把时间和房型都新建,可知总共有多少房型多少时间
                var S_ROOM_TYPE = backData[i].S_ROOM_TYPE;
                var DAY = backData[i].DAY;
                if(params.dayRoomStyle.indexOf(S_ROOM_TYPE) == -1){
                    params.dayRoomStyle.push(S_ROOM_TYPE);
                }
                if(params.DAY.indexOf(DAY) == -1){
                    params.DAY.push(DAY);
                }
            }
            for (var i = 0;i<params.dayRoomStyle.length;i++){   //查看每个房型在每个时间上有没有存在数据，没有置为0
                var data = {name:params.dayRoomStyle[i],data:[]};
                for (var k = 0;k<params.DAY.length;k++){
                    var  isExist = false;
                    for(var j = 0;j<backData.length;j++){
                        if(params.dayRoomStyle[i] == backData[j].S_ROOM_TYPE &&
                            params.DAY[k] == backData[j].DAY){
                            isExist = true;
                            data.data.push(backData[j].BOOK_SUM);
                        }
                    }
                    if(!isExist){
                        data.data.push(0);
                    }
                }
                params.dayDatas.push(data);
            }
        }
    });
    $.ajax({
        type: "GET",
        url: path+"/quartIncome.action",
        dataType: "json",
        async:false,
        success: function(backData){
            for(var i = 0;i<backData.length;i++){               //先把时间和房型都新建,可知总共有多少房型多少时间
                var S_ROOM_TYPE = backData[i].S_ROOM_TYPE;
                var QUA = backData[i].QUA;
                if(params.quaRoomStyle.indexOf(S_ROOM_TYPE) == -1){
                    params.quaRoomStyle.push(S_ROOM_TYPE);
                }
                if(params.QUA.indexOf(QUA) == -1){
                    params.QUA.push(QUA);
                }
            }
            for (var i = 0;i<params.quaRoomStyle.length;i++){   //查看每个房型在每个时间上有没有存在数据，没有置为0
                var data = {name:params.quaRoomStyle[i],data:[]};
                for (var k = 0;k<params.QUA.length;k++){
                    var  isExist = false;
                    for(var j = 0;j<backData.length;j++){
                        if(params.quaRoomStyle[i] == backData[j].S_ROOM_TYPE &&
                            params.QUA[k] == backData[j].QUA){
                            isExist = true;
                            data.data.push(backData[j].BOOK_SUM);
                        }
                    }
                    if(!isExist){
                        data.data.push(0);
                    }
                }
                params.quaDatas.push(data);
            }
        }
    });
    setHotel_Income(params);
}

function pay(){
    var params = {DAY:[],dayDatas:[],dayRoomStyle:[],
        QUA:[],quaDatas:[],quaRoomStyle:[]};
    $.ajax({
        type: "GET",
        url: path+"/dayPayPer.action",
        dataType: "json",
        async:false,
        success: function(backData){
            for(var i = 0;i<backData.length;i++){               //先把时间和房型都新建,可知总共有多少房型多少时间
                var S_ROOM_TYPE = backData[i].S_ROOM_TYPE;
                var DAY = backData[i].DAY;
                if(params.dayRoomStyle.indexOf(S_ROOM_TYPE) == -1){
                    params.dayRoomStyle.push(S_ROOM_TYPE);
                }
                if(params.DAY.indexOf(DAY) == -1){
                    params.DAY.push(DAY);
                }
            }
            for (var i = 0;i<params.dayRoomStyle.length;i++){   //查看每个房型在每个时间上有没有存在数据，没有置为0
                var data = {name:params.dayRoomStyle[i],data:[]};
                for (var k = 0;k<params.DAY.length;k++){
                    var  isExist = false;
                    for(var j = 0;j<backData.length;j++){
                        if(params.dayRoomStyle[i] == backData[j].S_ROOM_TYPE &&
                            params.DAY[k] == backData[j].DAY){
                            isExist = true;
                            data.data.push(backData[j].BOOK_SUM);
                        }
                    }
                    if(!isExist){
                        data.data.push(0);
                    }
                }
                params.dayDatas.push(data);
            }
        }
    });
    $.ajax({
        type: "GET",
        url: path+"/quartPayPer.action",
        dataType: "json",
        async:false,
        success: function(backData){
            for(var i = 0;i<backData.length;i++){               //先把时间和房型都新建,可知总共有多少房型多少时间
                var S_ROOM_TYPE = backData[i].S_ROOM_TYPE;
                var QUA = backData[i].QUA;
                if(params.quaRoomStyle.indexOf(S_ROOM_TYPE) == -1){
                    params.quaRoomStyle.push(S_ROOM_TYPE);
                }
                if(params.QUA.indexOf(QUA) == -1){
                    params.QUA.push(QUA);
                }
            }
            for (var i = 0;i<params.quaRoomStyle.length;i++){   //查看每个房型在每个时间上有没有存在数据，没有置为0
                var data = {name:params.quaRoomStyle[i],data:[]};
                for (var k = 0;k<params.QUA.length;k++){
                    var  isExist = false;
                    for(var j = 0;j<backData.length;j++){
                        if(params.quaRoomStyle[i] == backData[j].S_ROOM_TYPE &&
                            params.QUA[k] == backData[j].QUA){
                            isExist = true;
                            data.data.push(backData[j].BOOK_SUM);
                        }
                    }
                    if(!isExist){
                        data.data.push(0);
                    }
                }
                params.quaDatas.push(data);
            }
        }
    });
    setHotel_pay(params);
}

function free(){
    $.ajax({
        type: "GET",
        url: path+"/roomFreePer.action",
        dataType: "json",
        async:false,
        success: function(backData){
            var param = {STYLE:[],datas:[]};
            for(var i = 0;i<backData.length;i++){
                param.STYLE.push(backData[i].S_ROOM_TYPE);
                var map = {name:backData[i].S_ROOM_TYPE,value:backData[i].BOOK_SUM};
                param.datas.push(map);
            }
            setRoom_Unuse(param);
        }
    });
}

function lookBack(){
    $.ajax({
        type: "GET",
        url: path+"/lookBackPer.action",
        dataType: "json",
        success: function(backData){
            if(backData.length != 0) {
                $(".statistics-item:eq(4) h2").html(backData[0].result);
            }
        }
    });
}

function roomStit(){
    $.ajax({
        type: "GET",
        url: path+"/roomStit.action",
        dataType: "json",
        async:false,
        success: function(backData){
            var param = {STYLE:[],datas:[]};
            for(var i = 0;i<backData.length;i++){
                param.STYLE.push(backData[i].S_ROOM_TYPE);
                var map = {name:backData[i].S_ROOM_TYPE,value:backData[i].STIT};
                param.datas.push(map);
            }
            setRoomStit(param);
        }
    });
}