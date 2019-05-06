package com.testSpringMVC.util;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class DateBaseUtil {

    public static final String URL = "jdbc:mysql://127.0.0.1:3306/hotel";
    public static final String USER = "root";
    public static final String PASSWORD = "root";

    /**
     * jdbc
     *
     * */
    public static List queryListBySQL(String sql){
        System.out.println("执行SQL-------"+sql);
        List<Map> list = new ArrayList();
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            int rowId = 0;
            ResultSetMetaData meta = rs.getMetaData();
            int columnCount = meta.getColumnCount();
            while(rs.next()){
                rowId++;
                Map<String,String> map = new HashMap();
                map.put("rowId",rowId+"");
                for(int i = 1;i<=columnCount;i++){
                    String colName = meta.getColumnLabel(i);
                    String colValue = rs.getString(colName);
                    map.put(colName,colValue);
                }
                list.add(map);
            }
            rs.close();
            stmt.close();
            conn.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }

    /**
     * jdbc
     *
     * */
    public static int updateBySQL(String sql){
        System.out.println("执行SQL-------"+sql);
        int rs = 0;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
            Statement stmt = conn.createStatement();
            rs = stmt.executeUpdate(sql);
            stmt.close();
            conn.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return rs;
    }



    public static void main(String[] args) {
        List i = DateBaseUtil.queryListBySQL("SELECT 1 FROM T_USER_INFO where S_ACCOUNT='1111111'");
        System.out.println(i.size());
    }
}