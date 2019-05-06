<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
%>
<html>
<head>
    <title>酒店统计</title>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/statistics/statistics_user.css"/>
    <%--jquery--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <%--echarts--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/echarts.min.js"></script>
    <%--自己编写脚本--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/statistics/statistic_user.js"></script>
    <%--echart画图--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/statistics/setEcharts.js"></script>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/statistics/setUserData.js"></script>
    <script type="text/javascript">
        var path = "<%=path%>";
    </script>
</head>
<body>
    <div class="mainContainer">
        <h1 class="title-name">统计</h1>
        <div class="daohang">
            <ul>
                <li onclick="clickUser()">用户统计</li>
                <li onclick="clickPlat()">平台统计</li>
                <li onclick="clickHotel()">酒店统计</li>
            </ul>
        </div>
        <div class="statistics-content">
            <div class="item_div">
                <div class="statistics-item">会员预定次数<h2>98</h2>次</div>
            </div>
            <div class="item_div">
                <div class="statistics-item">各房型预定次数</div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">预定总金额<h2>98</h2>元</div>
            </div>
            <div class="item_div">
                <div class="statistics-item">平均每次金额<h2>98</h2>元</div>
            </div>
            <div class="item_div">
                <div class="statistics-item">各季度消费走势</div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">各年消费走势</div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">会员平均每次订单折扣<h2>6.8</h2>%</div>
            </div>
            <div class="item_div">
                <div class="statistics-item">平均每次优惠金额<h2>98</h2>元</div>
            </div>
            <div class="item_div">
                <div class="statistics-item">会员预定的到店入住率<h2>98</h2>%</div>
            </div>
        </div>
    </div>
</body>
</html>
