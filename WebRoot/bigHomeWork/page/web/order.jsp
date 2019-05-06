<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String I_USER_ID = request.getParameter("I_USER_ID");
%>
<html>
<head>
    <title>订单管理</title>
    <link href="<%=path%>/bigHomeWork/css/web/order.css" rel='stylesheet' type='text/css'/>
    <script src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <script src="<%=path%>/bigHomeWork/js/web/order.js"></script>
    <script>
        var path = "<%=path%>";
        var I_USER_ID = "<%=I_USER_ID%>";
    </script>
</head>
<body>
<div class="mainContainer">
    <div class="header">
        <h1>订单管理</h1>
    </div>
    <form id="form1">
        <table>
            <thead>
            <td>订单编号</td>
            <td>旅客名字</td>
            <td>酒店名字</td>
            <td>房间类型</td>
            <td>下单日期</td>
            <td>预定日期</td>
            <td>订单金额(￥)</td>
            <td>订单状态</td>
            <td>操作</td>
            </thead>
            <tbody>
            </tbody>
        </table>
    </form>
</div>
</body>
</html>
