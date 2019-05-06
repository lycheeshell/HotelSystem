<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
%>
<html>
<head>
    <meta charset="UTF-8">
    <title>登录</title>
    <script src="<%=path%>/bigHomeWork/js/jquery-1.11.0.min.js"></script>
    <script src="<%=path%>/bigHomeWork/js/web/login.js"></script>
    <script type="text/javascript">
        var path = "<%=path%>";
    </script>
    <style>
        html, body {
            background-color: #333D47;
            height: 100%;
            width: 100%;
        }

        input {
            margin-bottom: 30px;
            border: 1px solid #eee;
            border-radius: 3px;
            height: 30px;
            width: 250px;
        }

        .mainDiv {
            width: 270px;
            height: 320px;
            border-radius: 10px;
            padding: 40px;
            background-color: #ffffff;
            margin-left: 60%;
            position: absolute;
            margin-top: 5%;
        }

        .backgroundImage {
            width: 99%;
            height: 70%;
            margin-top: 5%;
            background-image: url(<%=path%>/bigHomeWork/images/backgroungImage.jpg);
            background-size: cover;
            position: relative;
        }

        .login {
            color: #ffffff;
            margin-top: 40px;
            background-color: #FFD212;
        }

        .reg {
            color: #ffffff;
            background-color: #85CF50;
        }
    </style>
</head>
<body>
<div class="backgroundImage">
    <div class="mainDiv">
        <h3>账号登录</h3>
        <input type="text" id="S_ACCOUNT" placeholder="账号">
        </br>
        <input type="password" id="S_PASSWORD" placeholder="密码">
        </br>
        <input class="login" type="button" onclick="login()" value="登录">
        </br>
        <a href="<%=path%>/bigHomeWork/page/web/reg.jsp"><input class="reg" type="button" value="注册"></a>
    </div>
</div>
</body>
</html>
