<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="Pragma" content="no-cache"/>
    <meta http-equiv="Cache-Control" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>
    <title>新增酒店</title>
    <!-- 样式导入 -->
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/main.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/cims.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/compoentsBase.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/loading.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/buttonStyle.css"/>
    <!-- jQuery -->
    <script src="<%=path%>/bigHomeWork/js/jquery-1.8.3.js"></script>
    <!--自己编写的公共JS-->
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/web/addHotel.js"></script>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/base.js"></script>
    <script type="text/javascript">
        var path = "<%=path%>";
    </script>

    <style type="text/css">
        /***必填*/
        .orderTable td span {
            color: red;
        }
    </style>
</head>
<body style="overflow: hidden;">
<div>
    <form id="addOrUpd" enctype="multipart/form-data">
        <table class="orderTable">
            <tr>
                <td>酒店名称：&nbsp;</td>
                <th><input type="text" id="S_HOTEL_NAME" name="S_HOTEL_NAME" class="deInput"/></th>
            </tr>
            <tr>
                <td>酒店员工：&nbsp;</td>
                <th>
                    <input type="hidden" id="S_STAFF_ID" name="S_STAFF_ID" />
                    <input type="text" id="S_STAFF_NAME" name="S_STAFF_NAME" class="deInput" readonly onclick="chooseStaff()"/>
                </th>
            </tr>
        </table>
    </form>
    <div class="btn">
        <button onclick="confirmButton()">确认</button>
        <button onclick="window.close();">关闭</button>
    </div>
</div>
</body>
</html>