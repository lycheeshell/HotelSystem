<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String I_USER_ID = request.getParameter("I_USER_ID");
%>
<html>
<head>
    <title>首页</title>
    <!---css--->
    <link href="<%=path%>/bigHomeWork/css/web/zcity.css" rel='stylesheet' type='text/css'/>
    <link href="<%=path%>/bigHomeWork/css/web/bootstrap.css" rel='stylesheet' type='text/css'/>
    <link href="<%=path%>/bigHomeWork/css/web/style.css" rel='stylesheet' type='text/css'/>
    <link href="<%=path%>/bigHomeWork/js/jQuery-pingfen/css/style.css" rel='stylesheet' type='text/css' />
    <!---css--->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script type="application/x-javascript"> 
	    addEventListener("load", function () {
	        setTimeout(hideURLbar, 0);
	    }, false);
	    function hideURLbar() {
	        window.scrollTo(0, 1);
	    } 
    </script>
    <!---js--->
    <script src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <script src="<%=path%>/bigHomeWork/js/bootstrap.js"></script>
    <script src="<%=path%>/bigHomeWork/js/zcity.js"></script>
    <script src="<%=path%>/bigHomeWork/js/web/index.js"></script>
    <!---js--->
    <!---fonts-->
    <script src="<%=path%>/bigHomeWork/js/responsiveslides.min.js"></script>
    <script type="text/javascript">
        var path = "<%=path%>";
        var I_USER_ID = "<%=I_USER_ID%>";

        $(function () {
            $("#slider").responsiveSlides({
                auto: true,
                nav: true,
                speed: 500,
                timeout: 2000,
                prevText: "上一个",
                nextText: "下一个",
                namespace: "callbacks",
                pager: true,
            });
        });
    </script>
</head>
<body>
<div class="header-section">
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="navbar-header">

                <div class="navbar-brand">
                    <h1><a href="<%=path%>/bigHomeWork/page/web/index.jsp" class="home"><span>斜 橙 旅 行</span></a></h1>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div class="clearfix"></div>
            </div>
            <a href="<%=path%>/bigHomeWork/page/web/login.jsp">
                <div class="phone"><span>登出</span></div>
            </a>
            <a href="#" class="err">
                <div class="phone" onclick="beOwner()"><span>成为房东</span></div>
            </a>
            <a href="#" class="orderName">
                <div class="phone" onclick="checkOeder()"><span>个人订单</span></div>
            </a>
            <a href="#">
                <div class="phone" onclick="personalInfo()"><span>姓名</span></div>
            </a>
            <a href="#" class="hotelName" hidden>
                <div class="phone" onclick="hotelInfo()" style="width: 15%"><span>酒店名字</span></div>
            </a>
        </nav>
    </div>
</div>
<div class="slider">
    <div class="callbacks_container">
        <ul class="rslides" id="slider">
            <div class="slid">
                <img src="<%=path%>/bigHomeWork/images/bnr1.jpg" height="200">
            </div>
            <div class="slid ">
                <img src="<%=path%>/bigHomeWork/images/bnr2.jpg">
            </div>
            <div class="slid ">
                <img src="<%=path%>/bigHomeWork/images/bnr3.jpg">
            </div>
        </ul>
    </div>
</div>
<div class="content">
    <div class="place-section">
        <div class="container">
            <h2>find your hotel</h2>
            <div class="place-grids">
                <div class="col-md-4 search">
                    <input class="keyWord" id="S_HOTEL_NAME" type="text"
                           style="width: 100%;margin-bottom: 30px;border: 1px solid #eee;border-radius:3px;height:30px;"
                           placeholder="请输入房源关键字...">
                    <div class="zcityGroup" id="S_DOMAIN" style="margin-bottom: 30px;"
                         city-range="{'level_start':1,'level_end':3}"></div>
                    <div style="width: 24%;float: left;">
                        <span style="width: 9%">星级：</span>
                        <select class="search_item_one" id="I_STAR">
                            <option value=""></option>
                            <option value="1">1星</option>
                            <option value="2">2星</option>
                            <option value="3">3星</option>
                            <option value="4">4星</option>
                            <option value="5">5星</option>
                        </select>
                    </div>
                    <div style="width: 25%;float: left;margin-left: 1%">
                        <span>价格区间：</span>
                        <input type="text" class="search_item_two" id="START_PRICE"> ~
                        <input type="text" class="search_item_two" id="END_PRICE">
                    </div>
                    <div style="width: 25%;float: left;margin-left: 1%">
                        <span>评分区间：</span>
                        <select class="search_item_two" id="START_EVA">
                            <option></option>
                            <option value="1">1分</option>
                            <option value="2">2分</option>
                            <option value="3">3分</option>
                            <option value="4">4分</option>
                            <option value="5">5分</option>
                        </select>
                        ~
                        <select class="search_item_two" id="END_EVA">
                            <option></option>
                            <option value="1">1分</option>
                            <option value="2">2分</option>
                            <option value="3">3分</option>
                            <option value="4">4分</option>
                            <option value="5">5分</option>
                        </select>
                    </div>
                    <div style="width: 23%;float: left; margin-left: 1%">
                        <span style="width: 9%">排序：</span>
                        <select class="search_item_one" id="order">
                            <option value=""></option>
                            <option value="1">价格从低到高</option>
                            <option value="2">价格从高到低</option>
                            <option value="3">星级从低到高</option>
                            <option value="4">星级从高到低</option>
                            <option value="5">评分从高到低</option>
                        </select>
                    </div>
                    <input type="submit" onclick="queryHotels()" value="Search">
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <div class="offering">
        <div class="container">
            <h3>Hotels Items</h3>
            <div class="offer-grids">
            </div>
        </div>
    </div>
</div>
<div class="copy-section">
</div>
<script type="text/javascript">
    zcityrun('.zcityGroup');
</script>
</body>
</html>
