<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
%>
<html>
<head>
    <title>酒店统计</title>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/statistics/statistics_hotel.css"/>
    <%--jquery--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <%--echarts--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/echarts.min.js"></script>
    <%--自己编写脚本--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/statistics/statistic_hotel.js"></script>
    <%--echart画图--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/statistics/setEcharts.js"></script>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/statistics/setHotelData.js"></script>
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
                <div class="statistics-item">每天，每季度的每类客房预定量</div>
                <div class="echarts_div"></div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">每天，每季度的每类客房的收益额</div>
                <div class="echarts_div"></div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">每天，每季度的每类客房的实付率</div>
                <div class="echarts_div"></div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">不同类型客房的闲置率(最近一个月)</div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">顾客回头率<h2>98</h2>%</div>
            </div>
            <div class="item_div">
                <div class="statistics-item">房型的顾客满意度</div>
                <div class="echarts_div"></div>
            </div>
        </div>
    </div>
</body>
</html>
