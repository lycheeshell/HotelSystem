var limit = 30;
var hei = $(window).height();
var wid = $(window).width();
//定义好要显示的字段
var cols = [[
    {field:'I_USER_ID',title:'用户ID',align:'center',width:200,hidden:true}
    ,{field:'S_USER_ROLE',title:'用户角色',align:'center',width:250,displayTip:true}
    ,{field:'S_ACCOUNT',title:'用户账号',align:'center',width:250,displayTip:true}
    ,{field:'S_NAME',title:'用户姓名',align:'center',width:250,displayTip:true}
    ,{field:'S_SEX',title:'用户性别',align:'center',width:250,displayTip:true}
    ,{field:'S_AGE',title:'用户年龄',align:'center',width:250,displayTip:true}
    ,{field:'S_PHONE',title:'联系电话',align:'center',width:250,displayTip:true}
]];

//初始化页面
$(function () {
    createDatagrid();
    loadDatagrid();
    clickBind();
})

//页面缩放时改变datagrid布局
window.onresize = function () {
    setWH();
};

//加载控件
function createDatagrid() {
    //表格控件
    $("#dataList").datagrid({
        "columns":cols,
        "frozenColumns":[[{field:"ck", checkbox:true}]],
        "idField":"I_USER_ID",
        "pagination":true,
        "fitColumns": true,
        "striped":true
    });
    var p = $("#dataList").datagrid('getPager');
    //翻页控件
    $(p).pagination({
        total:0,
        pageSize: limit,
        pageNumber:1,
        loading:true,
        beforePageText: '第',
        afterPageText: '页    共{pages}页',
        onSelectPage:function(pageNumber,limit){
            loadDatagrid(pageNumber);
        }
    });
}

//修改按钮事件
function edit() {
    var selectData = $("#dataList").datagrid("getSelections");
    var I_USER_ID = '';
    if (selectData.length == 1) {
        I_USER_ID = selectData[0]["I_USER_ID"];
    } else {
        alert("请勾选单条数据进行中修改！");
        return;
    }
    var url = path + "/bigHomeWork/page/web/editUser.jsp?I_USER_ID="+I_USER_ID;
    var windowStatus = "left="+wid*0.25+",top="+hei*0.3+",width=760,height=200,resizable=0,scrollbars=0,menubar=no,status=0";
    window.open(url,"用户修改",windowStatus);
}

//加载数据到表格
function loadDatagrid(pageNo) {
    var pageNo = pageNo ? pageNo : 1;
    $.ajax({
        type: "POST",
        url: path+"/queryUser.action",
        data: $("#searchFrom").serialize() + "&limit="+limit+"&pageNo=" + (pageNo - 1)* limit,
        dataType: "json",
        success: function(backData){
            $("#dataList").datagrid("loadData", backData);
            var p = $("#dataList").datagrid('getPager');
            if (backData.length != 0) {
                $(p).pagination({
                    total: backData[0].totalCount,
                    pageNumber: pageNo
                });
            } else {
                $(p).pagination({
                    total: 0,
                    pageNumber: 1
                });
            }
            setWH();
        }
    });
}

//自适应
function setWH() {
    hei = $(window).height();       //每次都刷新一次宽高
    wid = $(window).width();
    $("#dataList").datagrid("reSize", {
        "height" : hei - $("table.orderTable").height()-$("div.business").height() - 25,
        "width" : wid
    });
    var holderWid=$('.holder').width();
    var totalListWid=$('.totalList').width();
    $(".holder").css({
        marginLeft:(wid-holderWid-totalListWid)/2,
        "float":'left'
    });
    $(".totalList").css("float",'left');
}

//绑定按钮事件
function clickBind(){
    if(flag != 2){
        $('#searchList').on('click',function(){//查询
            loadDatagrid(1);
        });

        $('#updBtn').on('click',function(){//修改
            edit();
        });

        $('#addHotel').on('click',function(){//修改
            addHotel();
        });
    }else{
        $('#confirm').on('click',function(){//确认
            confirm();
            window.close();
        });

        $('#close').on('click',function(){//关闭
            window.close();
        });
    }
}

function addHotel(){
    var url = path + "/bigHomeWork/page/web/addHotel.jsp";
    var windowStatus = "left="+wid*0.25+",top="+hei*0.3+",width=760,height=200,resizable=0,scrollbars=0,menubar=no,status=0";
    window.open(url,"新增酒店",windowStatus);
}

function confirm() {
    var selectData = $("#dataList").datagrid("getSelections");
    if (selectData.length == 1) {
        if(selectData[0].S_USER_ROLE != '酒店工作人员'){
            alert("只能选择角色为酒店工作人员得用户");
            return;
        }
        window.opener.document.getElementById("S_STAFF_ID").value = selectData[0]["I_USER_ID"];
        window.opener.document.getElementById("S_STAFF_NAME").value = selectData[0]["S_NAME"];
    } else {
        alert("一个酒店只能有一个员工！");
        return;
    }
}