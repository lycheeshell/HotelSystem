var S_USER_ROLE;
$(function(){
    setUserInfo();
    if(S_USER_ROLE = "客户"){
        $(".publish").hide();
    }else if(S_USER_ROLE = "酒店工作人员"){
        queryPublish();
    }
})

function queryPublish(){
    $.ajax({
        type: "GET",
        url: path + "/queryHotel.action",
        data: {I_USER_ID:I_USER_ID},
        dataType: "json",
        success: function(backData){
            setPublish(backData);
        }
    });
}

function setPublish(backData){
    var html = "";
    for(var i = 0;i<backData.length;i++){
        var hotel = backData[i];
        html += "<tr>";
        html += "<th width='40%'>"+hotel.I_HOTEL_ID+"</th>";
        html += "<th width='40%'>"+hotel.S_HOTEL_NAME+"</th>";
        html += "<th width='40%'>"+hotel.I_PRICE+"</th>";
        html += "<th width='40%'>"+hotel.S_DOMAIN+"</th>";
        html += "<th width='40%'>"+hotel.S_INTRO+"</th>";
        html += "<th width='40%'>"+hotel.S_PUBLISH_STATUS+"</th>";
        if(hotel.S_PUBLISH_STATUS == '待上架' ){
            html += "<th width='40%'><input type='button' ";
            html += "onclick='editPublish("+hotel.I_HOTEL_ID+")' value='修改'><input type='button' ";
            html += "onclick='publish("+hotel.I_HOTEL_ID+")' value='上架'><input type='button' ";
            html += "onclick='deletePublish("+hotel.I_HOTEL_ID+")' value='删除'></th>";
        }else if(hotel.S_PUBLISH_STATUS == '已上架'){
            html += "<th width='40%'><input type='button' ";
            html += "onclick='editPublish("+hotel.I_HOTEL_ID+")' value='修改'><input type='button' ";
            html += "onclick='unPublish("+hotel.I_HOTEL_ID+")' value='下架'><input type='button' ";
            html += "onclick='deletePublish("+hotel.I_HOTEL_ID+")' value='删除'></th>";
        }else{
            html += "<th width='40%'></th>";
        }
        html += "</tr>";
    }
    console.log(html);
    $(".publif_list").html(html);
}

function publish(I_HOTEL_ID) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8081/publish",
        data: {I_HOTEL_ID:I_HOTEL_ID,TYPE:1},
        dataType: "json",
        success: function(backData){
            alert("上架成功");
            queryPublish();
        }
    });
}

function unPublish(I_HOTEL_ID) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8081/publish",
        data: {I_HOTEL_ID:I_HOTEL_ID,TYPE:2},
        dataType: "json",
        success: function(backData){
            alert("下架成功");
            queryPublish();
        }
    });
}

function deletePublish(I_HOTEL_ID) {
    if(confirm("确认删除房源?")){
        $.ajax({
            type: "GET",
            url: "http://localhost:8081/delete_publish",
            data: {I_HOTEL_ID:I_HOTEL_ID,TYPE:2},
            dataType: "json",
            success: function(backData){
                alert("删除成功");
                queryPublish();
            }
        });
    }
}

function editPublish(I_HOTEL_ID){
    window.open("editHotel.html?I_HOTEL_ID="+I_HOTEL_ID);
}

function setUserInfo(){
    $.ajax({
        type: "GET",
        url: path + "/login.action",
        data: {I_USER_ID:I_USER_ID},
        dataType: "json",
        success: function(backData){
            if(backData[0].S_PATH == null || typeof (backData[0].S_PATH) == 'undefined'){
                $("img").attr("src",path + "/bigHomeWork/images/default/defaultUser.jpg");
            }else{
                $("img").attr("src",path + "/bigHomeWork/source/user/"+backData[0].S_PATH+".jpg");
            }
            $("#S_PASSWORD").val(backData[0].S_PASSWORD);
            $("#S_NAME").val(backData[0].S_NAME);
            $("#S_ACCOUNT").val(backData[0].S_ACCOUNT);
            $("#I_USER_ID").val(backData[0].I_USER_ID);
            $("#S_PHONE").val(backData[0].S_PHONE);
            $("#S_SEX").val(backData[0].S_SEX);
            $("#S_AGE").val(backData[0].S_AGE);
            S_USER_ROLE = backData[0].S_USER_ROLE;
        }
    });
}

function edit(){
    var animateimg = $("#file").val(); //获取上传的图片名 带//
    if (animateimg != "") {                               //是否有上传图片
        var imgarr = animateimg.split('\\'); //分割
        var myimg = imgarr[imgarr.length - 1]; //去掉 // 获取图片名
        var houzui = myimg.lastIndexOf('.'); //获取 . 出现的位置
        var ext = myimg.substring(houzui, myimg.length).toUpperCase();  //切割 . 获取文件后缀
        var file = $('#file').get(0).files[0]; //获取上传的文件
        var fileSize = file.size;           //获取上传的文件大小
        var maxSize = 5242880;              //最大1MB
        if (ext != '.JPG' && ext != '.JPEG') {
            alert('文件类型错误,请上传JPG类型');
            return false;
        } else if (parseInt(fileSize) >= parseInt(maxSize)) {
            alert('上传的文件不能超过5MB');
            return false;
        }
    }
    Ajaxrequest();
}

function Ajaxrequest() {
    var form=document.getElementById("addOrUpd");
    var fd =new FormData(form);
    fd.append('S_ACCOUNT',$("#S_ACCOUNT").val());
    $.ajax({
        type: "POST",
        url: path + "/update_Personal.action",
        data: fd,
        dataType: "json",
        processData: false,
        contentType: false,
        success: function (backData) {
            alert("修改成功");
            window.location.reload();
        }
    });
}