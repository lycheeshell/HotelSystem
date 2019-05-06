<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String I_USER_ID = request.getParameter("I_USER_ID");
%>
<html>
<head>
    <title>个人信息</title>
    <link href="<%=path%>/bigHomeWork/css/web/personalInfo.css" rel='stylesheet' type='text/css'/>
    <script src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <script src="<%=path%>/bigHomeWork/js/web/personalInfo.js"></script>
    <script type="text/javascript">
        var path = "<%=path%>";
        var I_USER_ID = "<%=I_USER_ID%>";
    </script>
</head>
<body>
<div class="mainContainer">
    <div class="header">
        <h1>
            个人信息
            <form id="addOrUpd" enctype="multipart/form-data">
                <table cellspacing="30" class="personalTable">
                    <input type="hidden" id="I_USER_ID" name="I_USER_ID">
                    <tr>
                        <th>账号</th>
                        <td><input type="text" name="S_ACCOUNT" id="S_ACCOUNT" disabled></td>
                        <th>头像</th>
                        <td>
                            <img src="" width="100px" height="100px">
                            <input type="file" name="file" id="file">
                        </td>
                    </tr>
                    <tr>
                        <th>密码</th>
                        <td><input type="password" name="S_PASSWORD" id="S_PASSWORD"></td>
                    </tr>
                    <tr>
                        <th>名称</th>
                        <td><input type="text" name="S_NAME" id="S_NAME"></td>
                    </tr>
                    <tr>
                        <th>联系方式</th>
                        <td><input type="text" name="S_PHONE" id="S_PHONE"></td>
                    </tr>
                    <tr>
                        <th>性别</th>
                        <td><select name="S_SEX" id="S_SEX">
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select></td>
                    </tr>
                    <tr>
                        <th>年龄</th>
                        <td><input type="text" name="S_AGE" id="S_AGE"></td>
                    </tr>
                </table>
                <input type="button" value="确认" class="confirm" onclick="edit()">
            </form>
        </h1>
    </div>
</div>
</body>
</html>
