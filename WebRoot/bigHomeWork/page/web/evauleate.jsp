<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String I_USER_ID = request.getParameter("I_USER_ID");
    String I_ROOM_ID = request.getParameter("I_ROOM_ID");
    String I_ORDER_ID = request.getParameter("I_ORDER_ID");
%>
<html>
<head>
    <title>评价</title>
    <link href="<%=path%>/bigHomeWork/js/jQuery-pingfen/css/style.css" rel='stylesheet' type='text/css' />
    <link href="<%=path%>/bigHomeWork/css/web/zcity.css" rel='stylesheet' type='text/css'/>
    <link href="<%=path%>/bigHomeWork/css/web/beOwner.css" rel='stylesheet' type='text/css'/>
    <script src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <script src="<%=path%>/bigHomeWork/js/zcity.js"></script>
    <script src="<%=path%>/bigHomeWork/js/jQuery-pingfen/js/score.js"></script>
    <script src="<%=path%>/bigHomeWork/js/web/evauleate.js"></script>
    <script>
        var path = "<%=path%>";
        var I_USER_ID = "<%=I_USER_ID%>";
        var I_ROOM_ID = "<%=I_ROOM_ID%>";
        var I_ORDER_ID = "<%=I_ORDER_ID%>";
    </script>
</head>
<body>
<div class="mainContainer">
    <div class="header">
        <h1>评价</h1>
    </div>
    <form id="form1">
        <table>
            <tr>
                <th width="40%">评价分数:</th>
                <td>
                    <div class="starts">
                        <ul id = "pingStar">
                            <li rel = "1" title = "1分"></li>
                            <li rel = "2" title = "2分"></li>
                            <li rel = "3" title = "3分"></li>
                            <li rel = "4" title = "4分"></li>
                            <li rel = "5" title = "5分"></li>
                            <span id="dir"></span>
                        </ul>
                        <input type="hidden" value="" id = "startP" />
                    </div>
                </td>
            </tr>
            <tr>
                <th>评价内容:</th>
                <td><textarea style="height: 200px" class="item" name="evalueate_content" id="evalueate_content" maxlength="250"></textarea></td>
            </tr>
        </table>
    </form>
    <input type="button" onclick="submit()" class="publish_button" value="确认评价">
</div>
<script type="text/javascript">
    zcityrun('.zcityGroup');
</script>
</body>
</html>
