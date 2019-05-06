<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ page import="com.testSpringMVC.util.StringUtil" %>
<%
    String path = request.getContextPath();
    String I_USER_ID = StringUtil.toString(request.getParameter("I_USER_ID"));
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="Pragma" content="no-cache"/>
    <meta http-equiv="Cache-Control" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>
    <title>修改</title>
    <!-- 样式导入 -->
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/main.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/cims.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/compoentsBase.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/loading.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/buttonStyle.css"/>
    <!-- jQuery -->
    <script src="<%=path%>/bigHomeWork/js/jquery-1.8.3.js"></script>
    <!--自己编写的公共JS-->
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/web/editUser.js"></script>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/base.js"></script>
    <script type="text/javascript">
        var path = "<%=path%>";
        var I_USER_ID = "<%=I_USER_ID%>";
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
        <input id="I_USER_ID" name="I_USER_ID" hidden>
        <table class="orderTable">
            <tr>
                <td>用户角色：&nbsp;</td>
                <th><input type="text" id="S_USER_ROLE" name="S_USER_ROLE"
                           class="deInput" disabled/></th>
                <td>用户账号：&nbsp;</td>
                <th><input type="text" id="S_ACCOUNT" name="S_ACCOUNT" maxlength="50"
                           class="deInput" disabled/></th>
            </tr>
            <tr>
                <td>用户姓名：&nbsp;</td>
                <th><input type="text" id="S_NAME" name="S_NAME"
                           class="deInput"/></th>
                <td>用户性别：&nbsp;</td>
                <th>
                    <select class="deInput" id="S_SEX" name="S_SEX">
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </th>
            </tr>
            <tr>
                <td>用户年龄：&nbsp;</td>
                <th><input type="text" id="S_AGE" name="S_AGE"
                           class="deInput"/></th>
                <td>联系电话：&nbsp;</td>
                <th><input type="text" id="S_PHONE" name="S_PHONE" maxlength="11"
                           class="deInput"/></th>
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