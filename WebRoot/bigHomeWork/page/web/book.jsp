<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String I_USER_ID = request.getParameter("I_USER_ID");
    String I_ROOM_ID = request.getParameter("I_ROOM_ID");
%>
<html>
<head>
    <title>预定房间</title>
    <link href="<%=path%>/bigHomeWork/css/web/book.css" rel='stylesheet' type='text/css'/>
    <script language="javascript" type="text/javascript"
            src="<%=path%>/bigHomeWork/js/My97DatePicker/WdatePicker.js"></script>
    <script src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <script src="<%=path%>/bigHomeWork/js/web/book.js"></script>
    <script>
        var path = "<%=path%>";
        var I_USER_ID = "<%=I_USER_ID%>";
        var I_ROOM_ID = "<%=I_ROOM_ID%>";
    </script>
</head>
<body>
    <div class="main">
        <h1 class="room_name">上海宝安大酒店</h1>
        <table class="order">
            <tr>
                <th width="20%" rowspan="5">房间信息</th>
                <th>房型</th>
                <td class="S_ROOM_STYLE"></td>
            </tr>
            <tr>
                <th width="30%">入离日期</th>
                <td width="50%">
                    入住<input class="Wdate" type="text" onchange="countPrice()" id="START_DATE" onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd'})">
                    退房<input class="Wdate" type="text" onchange="countPrice()" id="END_DATE" onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd'})">
                </td>
            </tr>
            <tr>
                <th>优惠活动</th>
                <td>
                    <select  class="S_DISCOUNT" onchange="changeDiscount()">
                    </select>
                    <span class="highDiscount" style="color: red">最高优惠</span>
                </td>
            </tr>
            <tr>
                <th>房费</th>
                <td class="ROOM_PRICE"></td>
            </tr>
            <tr>
                <th>合计</th>
                <td class="COUNT_TOTAL"></td>
                <td hidden class="COUNT_TOTAL_TEMP"></td>
            </tr>
            <tr>
                <th width="20%" rowspan="4">住客信息</th>
                <th>住客名称</th>
                <td class="S_USER_NAME"></td>
            </tr>
            <tr>
                <th>联系电话</th>
                <td class="S_USER_PHONE"></td>
            </tr>
            <tr>
                <th>预计入住人数</th>
                <td><input type="text" class="S_MAN_COUNT" style="width:50px">人</td>
            </tr>
            <tr>
                <th>有无儿童</th>
                <td>
                    <select class="S_IS_CHILD">
                        <option value="1">有</option>
                        <option value="0">无</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th>操作</th>
                <th colspan="2"><button onclick="order()">提交订单</button></th>
            </tr>
        </table>
    </div>
</body>
</html>
