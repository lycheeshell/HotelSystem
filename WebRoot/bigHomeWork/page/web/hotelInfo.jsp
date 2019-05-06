<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String I_USER_ID = request.getParameter("I_USER_ID");
%>
<html>
<head>
    <title>酒店信息</title>
    <link href="<%=path%>/bigHomeWork/css/web/zcity.css" rel='stylesheet' type='text/css'/>
    <link href="<%=path%>/bigHomeWork/css/web/personalInfo.css" rel='stylesheet' type='text/css'/>
    <script src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <script src="<%=path%>/bigHomeWork/js/web/hotelInfo.js"></script>
    <script src="<%=path%>/bigHomeWork/js/zcity.js"></script>
    <script language="javascript" type="text/javascript"
            src="<%=path%>/bigHomeWork/js/My97DatePicker/WdatePicker.js"></script>
    <script type="text/javascript">
        var path = "<%=path%>";
        var I_USER_ID = "<%=I_USER_ID%>";
    </script>
</head>
<body>
<div class="mainContainer">
    <div class="header">
        <h1>
            酒店信息
            <form id="addOrUpd" enctype="multipart/form-data">
                <table cellspacing="50" class="personalTable">
                    <input type="hidden" id="I_HOTEL_ID" name="I_HOTEL_ID">
                    <tr>
                        <th>酒店名称</th>
                        <td><input type="text" name="S_HOTEL_NAME" id="S_HOTEL_NAME"></td>
                        <th>酒店照片</th>
                        <td>
                            <img src="" width="100px" height="100px">
                            <input type="file" name="file" id="file">
                        </td>
                    </tr>
                    <tr>
                        <th>酒店区域</th>
                        <td>
                            <div class="zcityGroup" id="zcityGroup" style="margin-bottom: 10px;" city-range="{'level_start':1,'level_end':3}" city-ini="广东,深圳市,龙华新区"></div>
                        </td>
                    </tr>
                    <tr>
                        <th>酒店地址</th>
                        <td><input style="width: 100%;margin-bottom: 20px" class="item" type="text" name="S_DOMAIN" id="S_DOMAIN" maxlength="100"></td>
                    </tr>
                    <tr>
                        <th>星级</th>
                        <td><select id="I_STAR" name="I_STAR" style="margin-bottom: 20px">
                            <option value="1">1星</option>
                            <option value="2">2星</option>
                            <option value="3">3星</option>
                            <option value="4">4星</option>
                            <option value="5">5星</option>
                        </select></td>
                    </tr>
                    <tr>
                        <th>简介</th>
                        <td><textarea type="text" name="S_INTRO" id="S_INTRO" style="width: 500px;height: 400px"></textarea></td>
                    </tr>
                </table>
                <input type="button" value="确认" class="confirm" onclick="edit()">
            </form>
        </h1>
    </div>
    <div class="header">
        <h1>
            发布房型
            <form id="roomStyle" enctype="multipart/form-data">
                <table cellspacing="50" class="roomStyleTable">
                    <tr>
                        <th width="40%" height="100px">房间类型</th>
                        <th width="40%">房间照片</th>
                        <th width="20%">原始价格</th>
                    </tr>
                    <tr>
                        <th height="100px">
                            <select class="roomStyle">
                                <option value="商务大床房">商务大床房</option>
                                <option value="商务双床房">商务双床房</option>
                                <option value="豪华大床房">豪华大床房</option>
                                <option value="豪华双床房">豪华双床房</option>
                            </select>
                        </th>
                        <th>
                            <input type="file" name="file" id="file2">
                        </th>
                        <th><input type="text" class="I_PRICE">&nbsp;元</th>
                    </tr>
                </table>
            </form>
            <form id="discount" enctype="multipart/form-data">
                <table class="discountTable">
                    <tr>
                        <th height="100px">折扣</th>
                        <th colspan="2">活动时间</th>
                        <th><input type="button" value="新增折扣" class="addDiscount" onclick="addDiscount()"></th>
                    </tr>
                    <%--<tr>--%>
                        <%--<th height="100px"><input type="text" style="width: 40px" class="DISCOUNT_PRICE">%</th>--%>
                        <%--<th colspan="2">--%>
                            <%--开始时间：<input class="Wdate START_DATE" type="text" onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd'})">--%>
                            <%--结束时间：<input class="Wdate END_DATE" type="text" onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd'})">--%>
                        <%--</th>--%>
                        <%--<th></th>--%>
                    <%--</tr>--%>
                </table>
                <input type="button" value="发布" class="confirm" onclick="publish()">
            </form>
        </h1>
    </div>
</div>

<script type="text/javascript">
    zcityrun('.zcityGroup');
</script>
</body>
</html>
