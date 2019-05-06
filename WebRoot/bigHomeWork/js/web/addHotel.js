var hei = $(window).height();
var wid = $(window).width();


//确认按钮
function confirmButton() {
    if($("#S_HOTEL_NAME").val() == ""){
        alert("请输入酒店名称");
        return;
    }
    $.ajax({
        type: "POST",
        url: path+"/addHotel.action",
        data: {S_HOTEL_NAME:$("#S_HOTEL_NAME").val(),S_STAFF_ID:$("#S_STAFF_ID").val()},
        dataType: "json",
        success: function(backData){
            if(backData == -1){
                alert("该员工已经被添加过");
                return;
            }
            addStaff(backData);
        }
    });
}

function chooseStaff(){
    var url = path + "/bigHomeWork/page/web/userTable.jsp?flag=2";
    var windowStatus = "left="+wid*0.25+",top="+hei*0.5+",width=760,height=400,resizable=0,scrollbars=0,menubar=no,status=0";
    window.open(url,"增加工作人员",windowStatus);
}


function addStaff(I_HOTEL_ID){
    $.ajax({
        type: "POST",
        url: path+"/addStaff.action",
        data: {I_HOTEL_ID:I_HOTEL_ID,S_STAFF_ID:$("#S_STAFF_ID").val()},
        dataType: "json",
        success: function(backData){
            if(backData > 0){
                alert("添加成功!");
                window.close();                         //关闭窗口
            }
        }
    });
}