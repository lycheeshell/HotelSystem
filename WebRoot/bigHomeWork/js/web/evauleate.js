
function submit() {
    $.ajax({
        type: "GET",
        url: path + "/eva_to_owner.action",
        data: {"I_USER_ID":I_USER_ID,"I_ROOM_ID":I_ROOM_ID,"I_EVA_SCORE":$("#startP").val(),
            "I_ORDER_ID":I_ORDER_ID,"S_EVA_CONTENT":$(".item").val()},
        dataType: "json",
        success: function(backData){
            if(backData == 1){
                alert("评论成功");
                window.close();
                window.opener.location.reload();
            }else{
                alert("评论失败");
            }
        }
    });
}