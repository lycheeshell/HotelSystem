package com.testSpringMVC.dao;


import com.testSpringMVC.util.DateBaseUtil;
import org.apache.commons.collections.MapUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StatisticsDao {
    /*****用户统计*****/
    //会员预定次数
    public List userBookTime(){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT COUNT(1) AS COUNT FROM T_ORDER");
        System.out.println("--------会员预定次数---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //各房型预定次数
    public List setRoom_Book_Time(){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT S_ROOM_TYPE,COUNT(1) AS COUNT FROM T_ORDER O LEFT JOIN T_HOTEL_ROOM R ON O.I_ROOM_ID=R.I_ROOM_ID GROUP BY R.S_ROOM_TYPE");
        System.out.println("--------各房型预定次数---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //预定总金额
    public List bookTotalPrice(){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT format(sum(I_ORDER_PRICE),2) as SUM FROM T_ORDER");
        System.out.println("--------预定总金额---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //平均每次金额
    public List bookAvgPrice(){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT format(avg(I_ORDER_PRICE),2) AS AVG FROM T_ORDER");
        System.out.println("--------平均每次金额---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //各季度消费走势
    public List setQuarter_Cost_Trend(){
        StringBuffer sql = new StringBuffer();
//        for(int i = 0;i<4;i++){
//            if(i != 0){
//                sql.append(" union ");
//            }
//            sql.append("SELECT QUA,PRICE_SUM FROM (SELECT CONCAT(substring(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') AS QUA,");
//            sql.append("SUM(I_ORDER_PRICE) AS PRICE_SUM FROM T_ORDER WHERE QUARTER(D_OP_DATE)=QUARTER(DATE_SUB(now(),INTERVAL "+i+" QUARTER )) ");
//            sql.append("GROUP BY CONCAT(substring(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度')) T");
//        }
//        sql.append(" order by QUA ");

        sql.append("SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') as QUA,");
        sql.append("SUM(I_ORDER_PRICE) AS PRICE_SUM FROM T_ORDER O ");
        sql.append("WHERE concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') IN (SELECT QUA FROM ");
        sql.append("(SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') as QUA FROM T_ORDER ");
        sql.append("GROUP BY QUA ORDER BY QUA DESC LIMIT 0,4) t1) group by QUA ORDER BY QUA ASC");
        System.out.println("--------各季度消费走势---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //各年消费走势
    public List setYear_Cost_Trend(){
        StringBuffer sql = new StringBuffer();
//        for(int i = 0;i<4;i++){
//            if(i != 0){
//                sql.append(" union ");
//            }
//            sql.append("SELECT YEAR,PRICE_SUM FROM (SELECT year( D_OP_DATE ) AS YEAR,");
//            sql.append("SUM(I_ORDER_PRICE) AS PRICE_SUM FROM T_ORDER WHERE year( D_OP_DATE ) = year( DATE_SUB(now(),INTERVAL "+i+" YEAR )) ");
//            sql.append("GROUP BY year( D_OP_DATE )) T");
//        }
//        sql.append(" order by YEAR ");
        sql.append("SELECT year( D_OP_DATE ) AS YEAR,");
        sql.append("SUM(I_ORDER_PRICE) AS PRICE_SUM FROM T_ORDER O ");
        sql.append("WHERE year( D_OP_DATE ) IN (SELECT YEAR FROM ");
        sql.append("(SELECT year( D_OP_DATE ) AS YEAR FROM T_ORDER ");
        sql.append("GROUP BY YEAR ORDER BY YEAR DESC LIMIT 0,10) t1) group by YEAR ORDER BY YEAR ASC");
        System.out.println("--------各年消费走势---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //会员平均每次订单折扣
    public List userAvgDiscount(){
        StringBuffer sql = new StringBuffer();
        sql.append("select format(avg(I_DISCOUNT),1) as AVG from T_ORDER");
        System.out.println("--------会员平均每次订单折扣---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //平均每次优惠金额
    public List userAvgCut(){
        StringBuffer sql = new StringBuffer();
        sql.append("select format(avg((I_ORDER_PRICE/100)*(100-I_DISCOUNT)),2) AS AVG from T_ORDER");
        System.out.println("--------平均每次优惠金额---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //会员预定的到店入住率
    public List userInPer(){
        StringBuffer sql = new StringBuffer();
        sql.append("select FORMAT");
        sql.append("((select sum(1) from T_ORDER where S_ORDER_STATUS='已完成' or S_ORDER_STATUS='已退房')*100");
        sql.append("/(select sum(1) from T_ORDER where S_ORDER_STATUS='未入住' or S_ORDER_STATUS='已完成' or S_ORDER_STATUS='已退房'),2) as result ");
        System.out.println("--------会员预定的到店入住率---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //注册会员每月数量、增长数
    public List userRegNum(){
        StringBuffer sql = new StringBuffer();
//        sql.append("select substring(D_REG_DATE,1,7) as month,sum(1) as sum from T_USER_INFO GROUP BY substring(D_REG_DATE,1,7) LIMIT 0,10");
        sql.append("SELECT SUBSTRING(D_REG_DATE,1,7) AS month,SUM(1) AS sum FROM T_USER_INFO WHERE ");
        sql.append("SUBSTRING(D_REG_DATE,1,7) IN (SELECT MONTH FROM(SELECT SUBSTRING(D_REG_DATE,1,7) AS MONTH FROM ");
        sql.append("T_USER_INFO ORDER BY MONTH DESC LIMIT 0,10)t) GROUP BY month order by month asc");
        System.out.println("--------注册会员每月数量、增长数---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //会员年龄分布图
    public List userAge(){
        StringBuffer sql = new StringBuffer();
        sql.append("select S_AGE,sum(1) as sum from T_USER_INFO group by S_AGE");
        System.out.println("--------会员年龄分布图---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //会员性别分布图
    public List userSex(){
        StringBuffer sql = new StringBuffer();
        sql.append("select S_SEX,sum(1) as sum from T_USER_INFO group by S_SEX");
        System.out.println("--------会员性别分布图---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //注册酒店每月数量、增长数
    public List hotelRegNum(){
        StringBuffer sql = new StringBuffer();
//        sql.append("select substring(D_REG_DATE,1,7) as month,sum(1) as sum from T_HOTEL_INFO GROUP BY substring(D_REG_DATE,1,7) LIMIT 0,10");
        sql.append("SELECT SUBSTRING(D_REG_DATE,1,7) AS month,SUM(1) AS sum FROM T_HOTEL_INFO WHERE ");
        sql.append("SUBSTRING(D_REG_DATE,1,7) IN (SELECT MONTH FROM(SELECT SUBSTRING(D_REG_DATE,1,7) AS MONTH FROM ");
        sql.append("T_HOTEL_INFO ORDER BY MONTH DESC LIMIT 0,10)t) GROUP BY month order by month asc");
        System.out.println("--------注册酒店每月数量、增长数---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //酒店地域的数量及收益总额分布
    public List hotelArea(){
        StringBuffer sql = new StringBuffer();
        sql.append("select T1.AREA,T1.HOTEL_TOTAL,T2.PRICE_TOTAL FROM (SELECT concat(S_PROVINCE,S_CITY,S_AREA) AS AREA,");
        sql.append("SUM(1) AS HOTEL_TOTAL FROM T_HOTEL_INFO GROUP BY concat(S_PROVINCE,S_CITY,S_AREA)) T1 ");
        sql.append("LEFT JOIN (SELECT concat(H.S_PROVINCE,H.S_CITY,H.S_AREA) AS AREA,SUM(O.I_ORDER_PRICE) AS PRICE_TOTAL ");
        sql.append("FROM T_HOTEL_INFO H LEFT JOIN T_HOTEL_ROOM R ON H.I_HOTEL_ID = R.I_HOTEL_ID LEFT JOIN T_ORDER O ");
        sql.append("ON O.I_ROOM_ID=R.I_ROOM_ID GROUP BY concat(H.S_PROVINCE,H.S_CITY,H.S_AREA)) T2 ON T1.AREA = T2.AREA");
        System.out.println("--------酒店地域的数量及收益总额分布---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //每天所有酒店收益总额
    public List dayIn(){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT D_OP_DATE AS DAY,SUM(I_ORDER_PRICE) AS PRICE_SUM FROM T_ORDER ");
        sql.append("WHERE D_OP_DATE IN (SELECT D_OP_DATE FROM (SELECT D_OP_DATE FROM T_ORDER where ");
        sql.append("S_ORDER_STATUS='已完成' OR S_ORDER_STATUS='已退房' GROUP BY D_OP_DATE ORDER BY D_OP_DATE DESC LIMIT 0,10) t1) ");
        sql.append("GROUP BY DAY ORDER BY DAY ASC ");
        System.out.println("--------每天所有酒店收益总额---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //每季度所有酒店收益总额
    public List quartIn(){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') AS QUA,SUM(I_ORDER_PRICE) AS PRICE_SUM FROM T_ORDER ");
        sql.append("WHERE concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') IN (SELECT QUA FROM ");
        sql.append("(SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') AS QUA FROM T_ORDER where ");
        sql.append("S_ORDER_STATUS='已完成' OR S_ORDER_STATUS='已退房' GROUP BY QUA ORDER BY QUA DESC LIMIT 0,10) t1) ");
        sql.append("GROUP BY QUA ORDER BY QUA ASC ");
        System.out.println("--------每季度所有酒店收益总额---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //每天每类客房预定量
    public List dayBook(){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT O.D_OP_DATE AS DAY,R.S_ROOM_TYPE,SUM(1) AS BOOK_SUM FROM T_ORDER O LEFT JOIN T_HOTEL_ROOM R ");
        sql.append("ON O.I_ROOM_ID=R.I_ROOM_ID WHERE O.D_OP_DATE IN (SELECT D_OP_DATE FROM (SELECT D_OP_DATE FROM T_ORDER ");
        sql.append("GROUP BY D_OP_DATE ORDER BY D_OP_DATE DESC LIMIT 0,10) t1) group by DAY,S_ROOM_TYPE order by DAY desc");
        System.out.println("--------每天每类客房预定量---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //每季度每类客房预定量
    public List quartBook(){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') as QUA,");
        sql.append("R.S_ROOM_TYPE,SUM(1) AS BOOK_SUM FROM T_ORDER O LEFT JOIN T_HOTEL_ROOM R ON O.I_ROOM_ID=R.I_ROOM_ID ");
        sql.append("WHERE concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') IN (SELECT QUA FROM ");
        sql.append("(SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') as QUA FROM T_ORDER ");
        sql.append("GROUP BY QUA ORDER BY QUA DESC LIMIT 0,4) t1) group by QUA,S_ROOM_TYPE ORDER BY QUA DESC");
        System.out.println("--------每季度每类客房预定量---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //每天每类客房收益
    public List dayIncome(){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT O.D_OP_DATE AS DAY,R.S_ROOM_TYPE,SUM(I_ORDER_PRICE) AS BOOK_SUM FROM T_ORDER O LEFT JOIN T_HOTEL_ROOM R ");
        sql.append("ON O.I_ROOM_ID=R.I_ROOM_ID WHERE O.D_OP_DATE IN (SELECT D_OP_DATE FROM (SELECT D_OP_DATE FROM T_ORDER ");
        sql.append("GROUP BY D_OP_DATE ORDER BY D_OP_DATE DESC LIMIT 0,10) t1) group by DAY,S_ROOM_TYPE order by DAY desc");
        System.out.println("--------每天每类客房收益---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //每季度每类客房收益
    public List quartIncome(){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') as QUA,");
        sql.append("R.S_ROOM_TYPE,SUM(I_ORDER_PRICE) AS BOOK_SUM FROM T_ORDER O LEFT JOIN T_HOTEL_ROOM R ON O.I_ROOM_ID=R.I_ROOM_ID ");
        sql.append("WHERE concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') IN (SELECT QUA FROM ");
        sql.append("(SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') as QUA FROM T_ORDER ");
        sql.append("GROUP BY QUA ORDER BY QUA DESC LIMIT 0,4) t1) group by QUA,S_ROOM_TYPE ORDER BY QUA DESC");
        System.out.println("--------每季度每类客房收益---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    //每天每类客房的实付率
    public List dayPayPer(){
        System.out.println("--------每天每类客房的实付率---------");
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT O.D_OP_DATE AS DAY,R.S_ROOM_TYPE,SUM(1) AS BOOK_SUM FROM T_ORDER O LEFT JOIN T_HOTEL_ROOM R ");
        sql.append("ON O.I_ROOM_ID=R.I_ROOM_ID WHERE O.D_OP_DATE IN (SELECT D_OP_DATE FROM (SELECT D_OP_DATE FROM T_ORDER ");
        sql.append("GROUP BY D_OP_DATE ORDER BY D_OP_DATE DESC LIMIT 0,10) t1) ");
        sql.append("and (O.S_ORDER_STATUS='已完成' or O.S_ORDER_STATUS='已退房') group by DAY,S_ROOM_TYPE order by DAY desc");
        List<Map<String,String>> payList = DateBaseUtil.queryListBySQL(sql.toString());

        StringBuffer sql2 = new StringBuffer();
        sql2.append("SELECT O.D_OP_DATE AS DAY,R.S_ROOM_TYPE,SUM(1) AS BOOK_SUM FROM T_ORDER O LEFT JOIN T_HOTEL_ROOM R ");
        sql2.append("ON O.I_ROOM_ID=R.I_ROOM_ID WHERE O.D_OP_DATE IN (SELECT D_OP_DATE FROM (SELECT D_OP_DATE FROM T_ORDER ");
        sql2.append("GROUP BY D_OP_DATE ORDER BY D_OP_DATE DESC LIMIT 0,10) t1) ");
        sql2.append("group by DAY,S_ROOM_TYPE order by DAY desc");
        List<Map<String,String>> unPayList = DateBaseUtil.queryListBySQL(sql2.toString());

        List result = new ArrayList();
        for(int i = 0;i<payList.size();i++){
            for(int j = 0;j<unPayList.size();j++){
                Map<String,String> pay = payList.get(i);
                Map<String,String> unPay = unPayList.get(j);
                if(MapUtils.getString(pay,"DAY","")
                        .equals(MapUtils.getString(unPay,"DAY",""))
                        &&
                        MapUtils.getString(pay,"S_ROOM_TYPE","")
                                .equals(MapUtils.getString(unPay,"S_ROOM_TYPE",""))){
                    Map map = new HashMap();
                    map.put("DAY",MapUtils.getString(pay,"DAY",""));
                    map.put("S_ROOM_TYPE",MapUtils.getString(pay,"S_ROOM_TYPE",""));
                    Double pay1 = Double.parseDouble(pay.get("BOOK_SUM"));
                    Double unPay1 = Double.parseDouble(unPay.get("BOOK_SUM"));
                    Double countResult = pay1*100/unPay1;
                    map.put("BOOK_SUM",String.format("%.2f",countResult));
                    result.add(map);
                    break;
                }
            }
        }
        return result;
    }

    //每季度每类客房的实付率
    public List quartPayPer(){
        System.out.println("--------每季度每类客房的实付率---------");
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') as QUA,");
        sql.append("R.S_ROOM_TYPE,SUM(1) AS BOOK_SUM FROM T_ORDER O LEFT JOIN T_HOTEL_ROOM R ON O.I_ROOM_ID=R.I_ROOM_ID ");
        sql.append("WHERE concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') IN (SELECT QUA FROM ");
        sql.append("(SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') as QUA FROM T_ORDER ");
        sql.append("GROUP BY QUA ORDER BY QUA DESC LIMIT 0,4) t1) ");
        sql.append("and (O.S_ORDER_STATUS='已完成' or O.S_ORDER_STATUS='已退房') ");
        sql.append("group by QUA,S_ROOM_TYPE ORDER BY QUA DESC");
        List<Map<String,String>> payList = DateBaseUtil.queryListBySQL(sql.toString());

        StringBuffer sql2 = new StringBuffer();
        sql2.append("SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') as QUA,");
        sql2.append("R.S_ROOM_TYPE,SUM(1) AS BOOK_SUM FROM T_ORDER O LEFT JOIN T_HOTEL_ROOM R ON O.I_ROOM_ID=R.I_ROOM_ID ");
        sql2.append("WHERE concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') IN (SELECT QUA FROM ");
        sql2.append("(SELECT concat(SUBSTRING(D_OP_DATE,1,4),'第',QUARTER(D_OP_DATE),'季度') as QUA FROM T_ORDER ");
        sql2.append("GROUP BY QUA ORDER BY QUA DESC LIMIT 0,4) t1) group by QUA,S_ROOM_TYPE ORDER BY QUA DESC");
        List<Map<String,String>> unPayList = DateBaseUtil.queryListBySQL(sql2.toString());
        List result = new ArrayList();
        for(int i = 0;i<payList.size();i++){
            for(int j = 0;j<unPayList.size();j++){
                Map<String,String> pay = payList.get(i);
                Map<String,String> unPay = unPayList.get(j);
                if(MapUtils.getString(pay,"QUA","")
                        .equals(MapUtils.getString(unPay,"QUA",""))
                        &&
                        MapUtils.getString(pay,"S_ROOM_TYPE","")
                                .equals(MapUtils.getString(unPay,"S_ROOM_TYPE",""))){
                    Map map = new HashMap();
                    map.put("QUA",MapUtils.getString(pay,"QUA",""));
                    map.put("S_ROOM_TYPE",MapUtils.getString(pay,"S_ROOM_TYPE",""));
                    Double pay1 = Double.parseDouble(pay.get("BOOK_SUM"));
                    Double unPay1 = Double.parseDouble(unPay.get("BOOK_SUM"));
                    Double countResult = pay1*100/unPay1;
                    map.put("BOOK_SUM",String.format("%.2f",countResult));
                    result.add(map);
                    break;
                }
            }
        }
        return result;
    }

    //不同类型客房的闲置率
    public List roomFreePer(){
        System.out.println("--------不同类型客房的闲置率---------");
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT SUM(1) AS FREE ,R.S_ROOM_TYPE FROM T_ORDER O LEFT JOIN ");
        sql.append("T_HOTEL_ROOM R ON O.I_ROOM_ID=R.I_ROOM_ID WHERE S_ORDER_STATUS='未入住' AND ");
        sql.append("D_OP_DATE>=DATE(DATE_SUB(now(),INTERVAL 1 MONTH )) AND D_OP_DATE<=DATE(NOW()) GROUP BY R.S_ROOM_TYPE");
        List<Map<String,String>> freeList = DateBaseUtil.queryListBySQL(sql.toString());

        StringBuffer sql2 = new StringBuffer();
        sql2.append("SELECT SUM(1) AS ALLL ,R.S_ROOM_TYPE FROM T_ORDER O LEFT JOIN ");
        sql2.append("T_HOTEL_ROOM R ON O.I_ROOM_ID=R.I_ROOM_ID WHERE ");
        sql2.append("D_OP_DATE>=DATE(DATE_SUB(now(),INTERVAL 1 MONTH )) AND D_OP_DATE<=DATE(NOW()) GROUP BY R.S_ROOM_TYPE");
        List<Map<String,String>> allList = DateBaseUtil.queryListBySQL(sql2.toString());

        List result = new ArrayList();
        for(int i = 0;i<freeList.size();i++){
            for(int j = 0;j<allList.size();j++){
                Map<String,String> free = freeList.get(i);
                Map<String,String> all = allList.get(j);
                if(MapUtils.getString(free,"S_ROOM_TYPE","")
                        .equals(MapUtils.getString(all,"S_ROOM_TYPE",""))){
                    Map map = new HashMap();
                    map.put("S_ROOM_TYPE",MapUtils.getString(free,"S_ROOM_TYPE",""));
                    Double free1 = Double.parseDouble(free.get("FREE"));
                    Double all1 = Double.parseDouble(all.get("ALLL"));
                    Double countResult = free1*100/all1;
                    map.put("BOOK_SUM",String.format("%.2f",countResult));
                    result.add(map);
                    break;
                }
            }
        }
        return result;
    }

    //顾客回头率
    public List lookBackPer(){
        System.out.println("--------顾客回头率---------");
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT COUNT(1) AS COUNT FROM (SELECT COUNT(1) FROM T_ORDER GROUP BY I_USER_ID ");
        sql.append("HAVING COUNT(1)>2 )T1");
        List<Map<String,String>> lookback = DateBaseUtil.queryListBySQL(sql.toString());

        StringBuffer sql2 = new StringBuffer();
        sql2.append("SELECT COUNT(1) AS COUNT FROM (SELECT COUNT(1) FROM T_ORDER GROUP BY I_USER_ID)T1 ");
        List<Map<String,String>> all = DateBaseUtil.queryListBySQL(sql2.toString());

        List result = new ArrayList();
        Map m = new HashMap();
        Double free1 = Double.parseDouble(lookback.get(0).get("COUNT"));
        Double all1 = Double.parseDouble(all.get(0).get("COUNT"));
        Double countResult = free1*100/all1;
        m.put("result",String.format("%.2f",countResult));
        result.add(m);
        return result;
    }

    //房型的顾客满意度
    public List roomStit(){
        StringBuffer sql = new StringBuffer();
        sql.append("select S_ROOM_TYPE,FORMAT(AVG(I_EVA_SCORE)*100/5,2) as STIT from T_VISTOR_TO_ROOM E ");
        sql.append("LEFT JOIN T_HOTEL_ROOM R ON E.I_ROOM_ID=R.I_ROOM_ID GROUP BY S_ROOM_TYPE");
        System.out.println("--------房型的顾客满意度---------");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    public static void main(String[] args) {
    }
}


