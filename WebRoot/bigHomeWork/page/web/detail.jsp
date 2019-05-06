<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String I_USER_ID = request.getParameter("I_USER_ID");
    String I_HOTEL_ID = request.getParameter("I_HOTEL_ID");
%>
<html>
<head>
    <title>酒店明细</title>
    <!---css--->
    <link href="<%=path%>/bigHomeWork/css/web/bootstrap.css" rel='stylesheet' type='text/css'/>
    <link href="<%=path%>/bigHomeWork/css/web/style.css" rel='stylesheet' type='text/css'/>
    <link href="<%=path%>/bigHomeWork/js/jQuery-pingfen/css/style.css" rel='stylesheet' type='text/css'/>
    <!---css--->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script type="application/x-javascript"> addEventListener("load", function () {
        setTimeout(hideURLbar, 0);
    }, false);
    function hideURLbar() {
        window.scrollTo(0, 1);
    } </script>
    <!---js--->
    <script src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <script src="<%=path%>/bigHomeWork/js/bootstrap.js"></script>
    <script src="<%=path%>/bigHomeWork/js/web/detail.js"></script>
    <script language="javascript" type="text/javascript"
            src="<%=path%>/bigHomeWork/js/My97DatePicker/WdatePicker.js"></script>
    <script src="<%=path%>/bigHomeWork/js/responsiveslides.min.js"></script>
    <script>
        var path = "<%=path%>";
        var I_USER_ID = "<%=I_USER_ID%>";
        var I_HOTEL_ID = "<%=I_HOTEL_ID%>";
        $(function () {
            $("#slider").responsiveSlides({
                auto: true,
                nav: false,
                speed: 500,
                namespace: "callbacks",
                pager: true,
            });
        });
    </script>
    <script src="<%=path%>/bigHomeWork/js/jquery.swipebox.min.js"></script>
</head>
<body>

<!---header--->
<div class="header-section">
    <div class="container">

        <nav class="navbar navbar-default">
            <!---Brand and toggle get grouped for better mobile display--->
            <div class="navbar-header">

                <div class="navbar-brand">
                    <h1><a href="index.html" class="home"><span>斜 橙 旅 行</span></a></h1>
                </div>
            </div>


            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div class="clearfix"></div>
            </div>
            <a href="<%=path%>/bigHomeWork/page/web/login.jsp">
                <div class="phone"><span>登出</span></div>
            </a>
            <a href="#" class="err">
                <div class="phone"  onclick="beOwner()"><span>成为房东</span></div>
            </a>
            <a href="#" class="orderName">
                <div class="phone"  onclick="checkOeder()"><span >个人订单</span></div>
            </a>
            <a href="#">
                <div class="phone" onclick="personalInfo()"><span>姓名</span></div>
            </a>
            <a href="#" class="hotelName" hidden>
                <div class="phone" onclick="hotelInfo()"><span>酒店名字</span></div>
            </a>
        </nav>
    </div>
</div>
<!---header--->
<!---banner--->
<div class="slider">
    <div class="callbacks_container">
        <ul class="rslides" id="slider">
            <div class="slid">
                <img src="">
            </div>
        </ul>
    </div>
</div>
<div class="content">
    <div class="detail_container">
        <div class="detail_header">
            <h1>担惊受恐丰厚的设计费</h1>
            <span class="address">地址:环节上的核辐射的将复何及</span><br/>
        </div>
        <%--<div class="offer">--%>
        <%--<h2>￥188元/天</h2>--%>
        <%--<div class="in_date">--%>
        <%--入住日期--%>
        <%--<!--<input type="text" class="demo-input" onblur="countPrice()" id="START_DATE">-->--%>
        <%--<input class="Wdate" type="text" onchange="countPrice()" id="START_DATE" onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd'})">--%>
        <%--</div>--%>
        <%--<div class="out_date">--%>
        <%--退房日期--%>
        <%--<!--<input type="text" class="demo-input" onblur="countPrice()" id="END_DATE">-->--%>
        <%--<input class="Wdate" type="text" onchange="countPrice()" id="END_DATE" onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd'})">--%>
        <%--</div>--%>
        <%--<div class="count_total">--%>
        <%--<span class="left-span">共计房费 </span><span class="right-span"></span>--%>
        <%--</div>--%>
        <%--<input type="button" class="offer-button" onclick="order()" value="立刻预订">--%>
        <%--</div>--%>
        <div class="room_style">
            <h1>房型</h1>
            <br>
            <%--<span class="owner_evaluate">3</span> 个评论  |   <span class="owner_hotel">3</span> 个房源--%>
            <table class="room_style_table">
            </table>
        </div>
        <div class="environment">
            <h1>酒店简介</h1>
            <div class="environment_introduce">
                dfsfsd
            </div>
        </div>
        <div class="hotel_evaluate">
            <h1>评价</h1>
            <h2 class="evaluate_sum">共11条评价</h2>
            <div class="starts">
                <ul id="pingStar">
                    <li rel="1" title="1分"></li>
                    <li rel="2" title="2分"></li>
                    <li rel="3" title="3分"></li>
                    <li rel="4" title="4分"></li>
                    <li rel="5" title="5分"></li>
                    <span id="dir"></span>
                </ul>
            </div>
        </div>
    </div>
    <!---footer--->
    <div class="copy-section">
    </div>
</div>
</body>
</html>
