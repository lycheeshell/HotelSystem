function reg() {
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
    var S_ACCOUNT = $("input").eq(0).val();
    var S_PASSWORD = $("input").eq(2).val();
    var S_PASSWORD_CONFIRM = $("input").eq(3).val();
    if (S_ACCOUNT == "") {
        alert("账号不能为空");
        return;
    }
    if (S_PASSWORD != S_PASSWORD_CONFIRM) {
        alert("两次输入密码不一样");
        return;
    }
    var form=document.getElementById("addOrUpd");
    var fd =new FormData(form);
        $.ajax({
        type: "POST",
        url: path + "/reg.action",
        data: fd,
        dataType: "json",
        processData: false,
        contentType: false,
        success: function (backData) {
            if (backData == 0) {
                alert("注册失败");
            } else if (backData == -1) {
                alert("账号已存在");
            } else {
                alert("注册成功");
                window.location.href = path + "/bigHomeWork/page/web/login.jsp";
            }
        }
    });
}
