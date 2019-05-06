<%@ page import="com.testSpringMVC.util.StringUtil" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String flag = StringUtil.toString(request.getParameter("flag"));
%>
<html>
<head>
    <title>用户管理</title>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/main.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/cims.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/compoentsBase.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/loading.css"/>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/datagrid/cross.css"/>
    <!-- jQuery -->
    <script src="<%=path%>/bigHomeWork/js/jquery-1.8.3.js"></script>
    <!-- 复选框控件及样式 -->
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/datagrid/jquery.jqtransform.js"></script>
    <!-- 表格及分页控件 -->
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/datagrid/pagination.js"></script>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/datagrid/datagrid.js"></script>
    <!--自己编写的公共JS-->
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/web/userTable.js"></script>
    <script type="text/javascript">
        var path = "<%=path %>";
        var flag = "<%=flag %>";
    </script>
</head>
<body>
<div>
    <form id="searchFrom">
        <table class="orderTable">
            <tr>
                <td>用户账号：&nbsp;</td>
                <th>
                    <input type="text" class="deInput" id="S_ACCOUNT"  maxlength="255" name="S_ACCOUNT" />
                </th>
                <td>用户角色：&nbsp;</td>
                <th>
                    <select class="deInput" id="S_USER_ROLE" name="S_USER_ROLE">
                        <option value=""></option>
                        <option value="客户">客户</option>
                        <option value="酒店工作人员">酒店工作人员</option>
                        <option value="网管">网管</option>
                    </select>
                </th>
            </tr>
        </table>
    </form>
    <%if(!"2".equals(flag)){%>
    <div id="toolbar" class="business" style="float:left;padding-bottom:5px;">
        <li id = "searchList">查询</li>
        <li id = "updBtn">修改</li>
        <li id = "addHotel">添加酒店</li>
    </div>
    <%}else{%>
    <div id="toolbar" class="business" style="float:left;padding-bottom:5px;">
        <li id = "confirm">确认</li>
        <li id = "close">取消</li>
    </div>
    <%}%>
</div>
<div id="dataList"></div>
</body>
</html>
