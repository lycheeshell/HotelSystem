<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
%>
<html>
<head>
    <title>酒店统计</title>
    <link rel="stylesheet" type="text/css" href="<%=path%>/bigHomeWork/css/statistics/statistics_platform.css"/>
    <%--jquery--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <%--echarts--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/echarts.min.js"></script>
    <%--自己编写脚本--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/statistics/statistic_platform.js"></script>
    <%--echart画图--%>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/statistics/setEcharts.js"></script>
    <script type="text/javascript" src="<%=path%>/bigHomeWork/js/statistics/setPlatformData.js"></script>
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
                <div class="statistics-item">注册会员每月数量、增长数</div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">会员年龄分布图</div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">会员性别比例</div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">注册酒店每月数量、增长数</div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">酒店地域的数量及收益总额分布</div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">每天所有酒店收益总额(元)</div>
                <div class="echarts_div"></div>
            </div>
            <div class="item_div">
                <div class="statistics-item">每季度所有酒店收益总额(元)</div>
                <div class="echarts_div"></div>
                <div class="echarts_div"></div>
            </div>
        </div>
    </div>
</body>
</html>
