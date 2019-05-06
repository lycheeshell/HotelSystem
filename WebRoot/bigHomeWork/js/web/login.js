
function login() {
    $.ajax({
        type: "GET",
        url:path + "/login.action",
        data: {"S_ACCOUNT":$("#S_ACCOUNT").val(),"S_PASSWORD":$("#S_PASSWORD").val()},
        dataType: "json",
        success: function(backData){
            if(backData.length == 0){
                alert("账号不存在");
            }else if(backData[0].S_PASSWORD != $("#S_PASSWORD").val()){
                alert("密码错误");
            }else{
                if(backData[0].S_USER_ROLE == '客户' || backData[0].S_USER_ROLE == '酒店工作人员'){
                    if(backData[0].S_USER_ROLE == '酒店工作人员' && backData[0].I_HOTEL_ID == null){
                        alert("该员工还没添加到酒店");
                        return;
                    }
                    window.location.href=path + "/bigHomeWork/page/web/index.jsp?I_USER_ID="+backData[0].I_USER_ID;
                }else{
                    window.location.href=path + "/bigHomeWork/page/web/userTable.jsp";
                }
            }
        }
    });
}