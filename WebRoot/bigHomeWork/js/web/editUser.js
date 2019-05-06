$(function () {
    getSingleData();
})

//获取用户的信息
function getSingleData(){
    $.ajax({
        type: "GET",
        url: path+"/queryUser.action?I_USER_ID="+I_USER_ID,
        dataType: "json",
        success: function(backData){
            if(backData != null & backData.length > 0){
                fillInput(backData[0]);
            }else{
                alert("用户信息查询失败");
            }
        }
    });
}

//自动填充信息到表格
function fillInput(data) {
    $("th input").each(function () {            //自动填充数据到input框
        var txt = data[$(this).attr('id')] == null?"":data[$(this).attr('id')];     //查询得到的值
        $(this).val(txt);                   //给每个元素赋值
        $(this).attr("title",txt);          //title也要赋值
    });
}

//确认按钮
function confirmButton() {
    $("#I_USER_ID").val(I_USER_ID);
    $.ajax({
        type: "POST",
        url: path+"/editUser.action",
        data: new FormData(document.getElementById("addOrUpd")),
        dataType: "json",
        processData:false,
        contentType:false,
        async:false,
        success: function(backData){
            if(backData > 0){
                alert("修改成功!");
                window.opener.loadDatagrid(1);          //父页面查询一遍新数据
                window.close();                         //关闭窗口
            }
        }
    });
}