var S_USER_ROLE;
var I_HOTEL_ID;         //员工所属酒店id
$(function(){
    setHotelInfo();
})

function setHotelInfo(){
    $.ajax({
        type: "GET",
        url: path + "/queryHotelByUser.action",
        data: {I_USER_ID:I_USER_ID},
        dataType: "json",
        success: function(backData){
            if(backData[0].S_PATH == null || typeof (backData[0].S_PATH) == 'undefined'){
                $(".personalTable img").attr("src",path + "/bigHomeWork/images/default/defaultHotel.jpg");
            }else{
                $(".personalTable img").attr("src",path + "/bigHomeWork/source/hotel/"+backData[0].I_HOTEL_ID+".jpg");
            }
            $("#I_HOTEL_ID").val(backData[0].I_HOTEL_ID);
            $("#S_HOTEL_NAME").val(backData[0].S_HOTEL_NAME);
            $(".currentValue").eq(0).val(backData[0].S_PROVINCE);
            $(".currentValue").eq(1).val(backData[0].S_CITY);
            $(".currentValue").eq(2).val(backData[0].S_AREA);
            $("#S_DOMAIN").val(backData[0].S_DOMAIN);
            $("#I_STAR").val(backData[0].I_STAR);
            $("#S_INTRO").val(backData[0].S_INTRO);
            I_HOTEL_ID = backData[0].I_HOTEL_ID;
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
    fd.append('I_HOTEL_ID',$("#I_HOTEL_ID").val());
    fd.append('S_PROVINCE',$(".currentValue").eq(0).val());
    fd.append('S_CITY',$(".currentValue").eq(1).val());
    fd.append('S_AREA',$(".currentValue").eq(2).val());
    $.ajax({
        type: "POST",
        url: path + "/updateHotel.action",
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

function addDiscount() {
    var html = "";
    html += "<tr>";
    html +="<th height='100px'><input type='text' style='width: 40px' class='DISCOUNT_PRICE'>%</th>";
    html +="<th colspan='2'>";
    html +="开始时间：<input class='Wdate START_DATE' type='text' onClick='WdatePicker({el:this,dateFmt:\"yyyy-MM-dd\"})'>";
    html +="结束时间：<input class='Wdate END_DATE' type='text'  onClick='WdatePicker({el:this,dateFmt:\"yyyy-MM-dd\"})'>";
    html +="</th>";
    html +="<th></th>";
    html +="</tr>";
    $(".discountTable").append(html);
}

function publishRoom() {
    var form=document.getElementById("roomStyle");
    var fd =new FormData(form);
    fd.append('I_HOTEL_ID',I_HOTEL_ID);
    fd.append('S_ROOM_TYPE',$(".roomStyle").val());
    fd.append('I_PRICE',$(".I_PRICE").val());
    $.ajax({
        type: "POST",
        url: path + "/publishRoom.action",
        data: fd,
        dataType: "json",
        processData: false,
        contentType: false,
        success: function(backData){
            publishDiscount(backData);
            alert("发布成功");
            window.location.reload();
        }
    });
}

function publish(){
    var animateimg = $("#file2").val(); //获取上传的图片名 带//
    if (animateimg != "") {                               //是否有上传图片
        var imgarr = animateimg.split('\\'); //分割
        var myimg = imgarr[imgarr.length - 1]; //去掉 // 获取图片名
        var houzui = myimg.lastIndexOf('.'); //获取 . 出现的位置
        var ext = myimg.substring(houzui, myimg.length).toUpperCase();  //切割 . 获取文件后缀
        var file = $('#file2').get(0).files[0]; //获取上传的文件
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
    publishRoom();
}

function publishDiscount(I_ROOM_ID){
    var count = findClass("DISCOUNT_PRICE","input");        //查看总共增加了多少活动
    if(count == 0){
        return;
    }
    var param = {count:count,I_ROOM_ID:I_ROOM_ID};
    for(var i = 0;i<count;i++){
        param["DISCOUNT_PRICE"+i] = $(".DISCOUNT_PRICE").eq(i).val();
        param["DISCOUNT_START_DATE"+i] = $(".START_DATE").eq(i).val();
        param["DISCOUNT_END_DATE"+i] = $(".END_DATE").eq(i).val();
    }
    $.ajax({
        type: "GET",
        url: path + "/publishDiscount.action",
        data: param,
        dataType: "json",
        success: function(backData){
        }
    });
}

//查询class出现过几次
function findClass(className,element){
    var allElements = document.getElementsByTagName(element);//所有div
    var count = 0;
    for (var i=0; i< allElements.length; i++ )
    {
        if (allElements[i].className == className ) {
            count++;
        }
    }
    return count;
}