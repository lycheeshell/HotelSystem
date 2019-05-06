<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
%>
<html>
<head>
    <meta charset="UTF-8">
    <title>注册</title>
    <script src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <script src="<%=path%>/bigHomeWork/js/ajaxfileupload.js"></script>
    <script src="<%=path%>/bigHomeWork/js/web/reg.js"></script>
    <script type="text/javascript">
        var path = "<%=path%>";
    </script>
    <style>
        html, body {
            background-color: #333D47;
            height: 100%;
            width: 100%;
        }

        input, select {
            border: 1px solid #eee;
            border-radius: 3px;
            height: 30px;
            width: 250px;
        }

        .mainDiv {
            width: 900px;
            border-radius: 10px;
            padding: 30px;
            background-color: #ffffff;
            position: absolute;
            /*margin-top: 1%;*/
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .backgroundImage {
            width: 99%;
            height: 100%;
            background-image: url(<%=path%>/bigHomeWork/images/backgroungImage.jpg);
            background-size: cover;
            position: relative;
        }

        .reg {
            color: #ffffff;
            background-color: #FFD212;
            height: 40px;
            position: absolute;
            left: 35%;
            top: 88%;
        }
    </style>
</head>
<body>
<div class="backgroundImage">
    <div class="mainDiv">
        <h3>账号注册</h3>
        <form id="addOrUpd" enctype="multipart/form-data">
            <table class="orderTable" cellspacing="30">
                <tr>
                    <td>账号：</td>
                    <th><input type="text" name="S_ACCOUNT" id="S_ACCOUNT" placeholder="账号"></th>
                    <td>名称：</td>
                    <th><input type="text" name="S_NAME" id="S_NAME" placeholder="名称"></th>
                </tr>
                <tr>
                    <td>密码：</td>
                    <th><input type="password" name="S_PASSWORD" placeholder="密码"></th>
                    <td>确认密码：</td>
                    <th><input type="password" placeholder="确认密码"></th>
                </tr>
                <tr>
                    <td>联系方式：</td>
                    <th><input type="text" name="S_PHONE" placeholder="联系方式"></th>
                    <td>性别：</td>
                    <th><select name="S_SEX">
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select></th>
                </tr>
                <tr>
                    <td>年龄：</td>
                    <th><input type="text" name="S_AGE" placeholder="年龄"></th>
                    <td>角色：</td>
                    <th><select name="S_USER_ROLE">
                        <option value="客户">客户</option>
                        <option value="酒店工作人员">酒店工作人员</option>
                        <option value="系统管理员">系统管理员</option>
                    </select></th>
                </tr>
                <tr>
                    <td>头像：</td>
                    <th><input type="file" id="file" name="file"></th>
                </tr>
            </table>
        </form>
        <input class="reg" onclick="reg()" type="button" value="确定注册">
    </div>
</div>
</body>
</html>
