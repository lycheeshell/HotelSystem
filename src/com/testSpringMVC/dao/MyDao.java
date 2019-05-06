package com.testSpringMVC.dao;


import com.testSpringMVC.entity.Hotel;
import com.testSpringMVC.entity.Order;
import com.testSpringMVC.entity.Room;
import com.testSpringMVC.entity.User;
import com.testSpringMVC.util.DateBaseUtil;
import com.testSpringMVC.util.StringUtil;
import org.apache.commons.collections.MapUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MyDao {
    /**
     *  注册
     */
    public int reg(User user){
        StringBuffer sql = new StringBuffer();
        sql.append("INSERT INTO T_USER_INFO(S_USER_ROLE,S_ACCOUNT,S_PASSWORD,S_NAME,S_PATH,S_SEX,S_AGE,S_PHONE,D_REG_DATE) VALUES ");
        sql.append("('"+user.getS_USER_ROLE()+"',");
        sql.append("'"+user.getS_ACCOUNT()+"',");
        sql.append("'"+user.getS_PASSWORD()+"',");
        sql.append("'"+user.getS_NAME()+"',");
        sql.append("'"+user.getS_ACCOUNT()+"',");
        sql.append("'"+user.getS_SEX()+"',");
        sql.append("'"+user.getS_AGE()+"',");
        sql.append("'"+user.getS_PHONE()+"',SYSDATE())");
        return DateBaseUtil.updateBySQL(sql.toString());
    }

    /**
     * 查询账号是否已经存在
     */
    public List checkAccount(String account){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT 1 FROM T_USER_INFO WHERE S_ACCOUNT = '"+account+"'");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    /**
     * 登陆
     */
    public List login(User user){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT U.I_USER_ID,U.S_PASSWORD,U.S_USER_ROLE,U.S_ACCOUNT,U.S_NAME,U.S_PATH,U.S_SEX,U.S_AGE,U.S_PHONE,");
        sql.append("H.S_HOTEL_NAME,S.I_HOTEL_ID FROM T_USER_INFO U LEFT JOIN T_HOTEL_STAFF S ON S.I_USER_ID = U.I_USER_ID ");
        sql.append("LEFT JOIN T_HOTEL_INFO H ON S.I_HOTEL_ID = H.I_HOTEL_ID WHERE 1=1 ");
        if(StringUtil.checkObj(user.getS_ACCOUNT())){
            sql.append("AND U.S_ACCOUNT='"+user.getS_ACCOUNT()+"'");
        }
        if(StringUtil.checkObj(user.getI_USER_ID()) && user.getI_USER_ID() != 0){
            sql.append("AND U.I_USER_ID="+user.getI_USER_ID());
        }
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    /**
     * 查询酒店列表
     */
    public List queryHotels(Hotel hotel,Map map){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT H.I_HOTEL_ID,H.S_HOTEL_NAME,HR.I_PRICE_MIN AS I_PRICE,H.S_INTRO,H.S_PROVINCE,H.S_CITY,H.S_AREA,H.S_DOMAIN,");
        sql.append("U.I_USER_ID,U.S_NAME,H.S_PATH AS S_HOTEL_PATH,U.S_PATH AS S_USER_PATH,H.S_PUBLISH_STATUS,H.I_OWNER_ID,H.I_STAR,VTH.I_EVA_SCORE ");
        sql.append("FROM T_HOTEL_INFO H LEFT JOIN (SELECT R.I_HOTEL_ID,format(AVG(VTR.I_EVA_SCORE),0) as I_EVA_SCORE FROM ");
        sql.append("T_VISTOR_TO_ROOM VTR LEFT JOIN T_HOTEL_ROOM R ON VTR.I_ROOM_ID=R.I_ROOM_ID GROUP BY R.I_HOTEL_ID) VTH ON H.I_HOTEL_ID = VTH.I_HOTEL_ID ");
        sql.append("LEFT JOIN (SELECT I_HOTEL_ID,min(I_PRICE) AS I_PRICE_MIN FROM T_HOTEL_ROOM GROUP BY ");
        sql.append("I_HOTEL_ID) HR ON H.I_HOTEL_ID = HR.I_HOTEL_ID ");
        sql.append("LEFT JOIN T_USER_INFO U ON H.I_OWNER_ID=U.I_USER_ID WHERE 1=1 ");
        if (StringUtil.checkObj(hotel.getI_HOTEL_ID()) && hotel.getI_HOTEL_ID()!=0){                //酒店id
            sql.append(" AND H.I_HOTEL_ID="+hotel.getI_HOTEL_ID());
        }
        if (StringUtil.checkObj(hotel.getS_HOTEL_NAME())){                //酒店名字
            sql.append(" AND H.S_HOTEL_NAME LIKE '%"+hotel.getS_HOTEL_NAME()+"%'");
        }
        if (StringUtil.checkObj(hotel.getI_STAR())){                    //星级
            sql.append(" AND H.I_STAR='"+hotel.getI_STAR()+"'");
        }
        if (StringUtil.checkObj(hotel.getS_PROVINCE())){                //省
            sql.append(" AND H.S_PROVINCE='"+hotel.getS_PROVINCE()+"'");
        }
        if (StringUtil.checkObj(hotel.getS_CITY())){                   //市
            sql.append(" AND H.S_CITY='"+hotel.getS_CITY()+"'");
        }
        if (StringUtil.checkObj(hotel.getS_AREA())){                   //区
            sql.append(" AND H.S_AREA='"+hotel.getS_AREA()+"'");
        }
        if (StringUtil.checkObj(map.get("START_EVA"))){               //评分区间
            sql.append(" AND VTH.I_EVA_SCORE>="+map.get("START_EVA"));
        }
        if (StringUtil.checkObj(map.get("END_EVA"))){                  //评分区间
            sql.append(" AND VTH.I_EVA_SCORE<="+map.get("END_EVA"));
        }
        if (StringUtil.checkObj(map.get("START_PRICE"))){              //价格区间
            sql.append(" AND H.I_PRICE>="+map.get("START_PRICE"));
        }
        if (StringUtil.checkObj(map.get("END_PRICE"))){              //价格区间
            sql.append(" AND H.I_PRICE<="+map.get("END_PRICE"));
        }
        sql.append(" AND HR.I_PRICE_MIN IS NOT NULL ");
        if (StringUtil.checkObj(map.get("order"))){                   //排序
            if("1".equals(map.get("order"))){
                sql.append(" ORDER BY I_PRICE ASC");
            }else if("2".equals(map.get("order"))){
                sql.append(" ORDER BY I_PRICE DESC");
            }else if("3".equals(map.get("order"))){
                sql.append(" ORDER BY I_STAR ASC");
            }else if("4".equals(map.get("order"))){
                sql.append(" ORDER BY I_STAR DESC");
            }else if("5".equals(map.get("order"))){
                sql.append(" ORDER BY I_EVA_SCORE DESC");
            }
        }
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    /**
     * 登陆
     */
    public int update_Personal(User user){
        StringBuffer sql = new StringBuffer();
        sql.append("UPDATE T_USER_INFO SET S_PASSWORD = '"+user.getS_PASSWORD()+"',");
        sql.append("S_NAME='"+user.getS_NAME()+"',S_SEX='"+user.getS_SEX()+"',");
        sql.append("S_AGE='"+user.getS_AGE()+"',S_PHONE='"+user.getS_PHONE()+"' ");
        sql.append("WHERE I_USER_ID = "+user.getI_USER_ID());
        return DateBaseUtil.updateBySQL(sql.toString());
    }

    /**
     * 查询某酒店的房东所有评价和房源
     */
    public Map queryEvalueateandHotels(int I_HOTEL_ID){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT COUNT(1) AS EVALUEATE_COUNT FROM T_VISTOR_TO_HOTEL WHERE I_HOTEL_ID IN ");
        sql.append("(SELECT I_HOTEL_ID FROM T_HOTEL_INFO WHERE I_OWNER_ID IN (SELECT ");
        sql.append("I_OWNER_ID FROM T_HOTEL_INFO WHERE I_HOTEL_ID="+I_HOTEL_ID+"))");
        StringBuffer sql2 = new StringBuffer();
        sql2.append("SELECT COUNT(1) AS HOTEL_COUNT FROM T_HOTEL_INFO WHERE I_OWNER_ID IN ");
        sql2.append("(SELECT I_OWNER_ID FROM T_HOTEL_INFO WHERE I_HOTEL_ID="+I_HOTEL_ID+")");
        List<Map> list = DateBaseUtil.queryListBySQL(sql.toString());
        List<Map> list2 = DateBaseUtil.queryListBySQL(sql2.toString());
        Map result = new HashMap();
        if(list.size() > 0){
            result.put("EVALUEATE_COUNT", MapUtils.getString(list.get(0),"EVALUEATE_COUNT","0"));
        }
        if(list2.size() > 0){
            result.put("HOTEL_COUNT", MapUtils.getString(list2.get(0),"HOTEL_COUNT","0"));
        }
        return result;
    }

    /**
     * 查询某酒店的评分平均分
     */
    public List queryScore(int I_HOTEL_ID){
        StringBuffer sql = new StringBuffer();
        sql.append("select FORMAT(avg(I_EVA_SCORE),0) AS AVG_SCORE,COUNT(1) AS EVALUEATE_COUNT from ");
        sql.append("T_VISTOR_TO_ROOM VTR LEFT JOIN T_HOTEL_ROOM R ON R.I_ROOM_ID = VTR.I_ROOM_ID ");
        sql.append("where R.I_HOTEL_ID="+I_HOTEL_ID);
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    /**
     * 查询某酒店的评论
     */
    public List queryEvalueate(int I_HOTEL_ID){
        StringBuffer sql = new StringBuffer();
        sql.append("select VTH.I_ID,VTH.I_EVA_SCORE,VTH.S_EVA_CONTENT AS VTH_EVA,U.S_NAME AS S_USER_NAME, ");
        sql.append("H.I_OWNER_ID,U.S_PATH from T_VISTOR_TO_ROOM VTH LEFT JOIN T_USER_INFO U ");
        sql.append("ON U.I_USER_ID=VTH.I_USER_ID LEFT JOIN T_HOTEL_ROOM R ON VTH.I_ROOM_ID = R.I_ROOM_ID ");
        sql.append("LEFT JOIN T_HOTEL_INFO H ON H.I_HOTEL_ID = R.I_HOTEL_ID where H.I_HOTEL_ID="+I_HOTEL_ID);
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    /**
     * 查询酒店下的所有房型房型
     */
    public List queryRoomStyle(int I_HOTEL_ID){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT I_ROOM_ID,S_ROOM_TYPE,I_PRICE,I_HOTEL_ID,S_PATH ");
        sql.append("FROM T_HOTEL_ROOM ");
        sql.append("WHERE I_HOTEL_ID="+I_HOTEL_ID);
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    /**
     * 查询某房型详细信息
     */
    public List queryRoomInfo(int I_ROOM_ID){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT ROOM.I_ROOM_ID,ROOM.S_ROOM_TYPE,ROOM.I_PRICE,HOTEL.S_HOTEL_NAME ");
        sql.append("FROM T_HOTEL_ROOM ROOM LEFT JOIN T_HOTEL_INFO HOTEL ON HOTEL.I_HOTEL_ID = ROOM.I_HOTEL_ID ");
        sql.append("WHERE I_ROOM_ID="+I_ROOM_ID);
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    /**
     * 查询折扣
     */
    public List queryDiscount(int I_ROOM_ID){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT I_DISCOUNT,D_START_TIME,D_END_TIME FROM T_ROOM_DISCOUNT ");
        sql.append("WHERE I_ROOM_ID="+I_ROOM_ID+" AND D_START_TIME<=DATE_FORMAT(SYSDATE(),'%Y-%m-%d') ");
        sql.append("AND D_END_TIME>=DATE_FORMAT(SYSDATE(),'%Y-%m-%d') ORDER BY I_DISCOUNT ASC");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    /**
     * 下单
     */
    public int order(Map map){
        StringBuffer sql = new StringBuffer();
        sql.append("INSERT INTO T_ORDER (I_USER_ID,D_OP_DATE,D_IN_DATE,D_OUT_DATE,I_ORDER_PRICE,S_ORDER_STATUS,");
        sql.append("I_COUNT,I_MAN_COUNT,I_IS_CHILD,I_ROOM_ID");
        sql.append(",I_DISCOUNT");
        sql.append(") VALUES (");
        sql.append(map.get("I_USER_ID")+",");
        sql.append("sysdate(),");
        sql.append("'"+map.get("D_IN_DATE")+"',");
        sql.append("'"+map.get("D_OUT_DATE")+"',");
        sql.append(map.get("I_ORDER_PRICE")+",");
        sql.append("'已预订',");
        sql.append(map.get("I_COUNT")+",");
        sql.append(map.get("I_MAN_COUNT")+",");
        sql.append(map.get("I_IS_CHILD")+",");
        sql.append(map.get("I_ROOM_ID"));
        if(StringUtil.checkObj(map.get("I_DISCOUNT"))){
            sql.append(","+map.get("I_DISCOUNT"));
        }else {
            sql.append(",100");
        }
        sql.append(")");
        return DateBaseUtil.updateBySQL(sql.toString());
    }

    /**
     * 旅客订单查询
     */
    public List queryOrderInVis(int I_USER_ID){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT O.I_ID,date_format(O.D_OP_DATE, '%Y-%m-%d') AS D_OP_DATE,");
        sql.append("date_format(O.D_IN_DATE, '%Y-%m-%d') AS D_IN_DATE,date_format(O.D_OUT_DATE,'%Y-%m-%d') ");
        sql.append("AS D_OUT_DATE,O.I_ORDER_PRICE,O.S_ORDER_STATUS,R.S_ROOM_TYPE,U.S_NAME AS S_USER_NAME,");
        sql.append("O.I_ROOM_ID,O.I_USER_ID,H.S_HOTEL_NAME FROM T_ORDER O LEFT JOIN T_USER_INFO U ON U.I_USER_ID=O.I_USER_ID ");
        sql.append("LEFT JOIN T_HOTEL_ROOM R ON R.I_ROOM_ID=O.I_ROOM_ID LEFT JOIN T_HOTEL_INFO H ON H.I_HOTEL_ID = R.I_HOTEL_ID ");
        sql.append("WHERE U.I_USER_ID = "+I_USER_ID);
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    /**
     * 酒店订单查询
     */
    public List queryOrderInOwner(int I_USER_ID){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT O.I_ID,date_format(O.D_OP_DATE, '%Y-%m-%d') AS D_OP_DATE,");
        sql.append("date_format(O.D_IN_DATE, '%Y-%m-%d') AS D_IN_DATE,date_format(O.D_OUT_DATE,'%Y-%m-%d') ");
        sql.append("AS D_OUT_DATE,O.I_ORDER_PRICE,O.S_ORDER_STATUS,R.S_ROOM_TYPE,U.S_NAME AS S_USER_NAME,");
        sql.append("O.I_ROOM_ID,O.I_USER_ID,H.S_HOTEL_NAME FROM T_ORDER O LEFT JOIN T_USER_INFO U ON U.I_USER_ID=O.I_USER_ID ");
        sql.append("LEFT JOIN T_HOTEL_ROOM R ON R.I_ROOM_ID=O.I_ROOM_ID ");
        sql.append("LEFT JOIN T_HOTEL_INFO H ON H.I_HOTEL_ID = R.I_HOTEL_ID ");
        sql.append("WHERE R.I_HOTEL_ID IN (SELECT I_HOTEL_ID FROM T_HOTEL_STAFF WHERE I_USER_ID = "+I_USER_ID+")");
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    /**
     * 修改订单状态
     */
    public int done(int I_ID,String S_ORDER_STATUS){
        StringBuffer sql = new StringBuffer();
        sql.append("UPDATE T_ORDER SET S_ORDER_STATUS='"+S_ORDER_STATUS+"'  WHERE I_ID = "+I_ID);
        return DateBaseUtil.updateBySQL(sql.toString());
    }


    /**
     * 评价
     */
    public int eva_to_owner(Map map){
        StringBuffer sql = new StringBuffer();
        sql.append("INSERT INTO T_VISTOR_TO_ROOM(I_USER_ID, I_ROOM_ID, I_EVA_SCORE, S_EVA_CONTENT) VALUES ");
        sql.append("("+map.get("I_USER_ID")+",");
        sql.append(map.get("I_ROOM_ID")+",");
        sql.append(map.get("I_EVA_SCORE")+",");
        sql.append("'"+map.get("S_EVA_CONTENT")+"')");
        StringBuffer sql2 = new StringBuffer();
        sql2.append("UPDATE T_ORDER SET S_ORDER_STATUS = '已完成' WHERE I_ID = "+map.get("I_ORDER_ID"));
        DateBaseUtil.updateBySQL(sql2.toString());
        return DateBaseUtil.updateBySQL(sql.toString());
    }

    /**
     * 查询员工所属酒店详情
     */
    public List queryHotelByUser(int I_USER_ID){
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT H.I_HOTEL_ID,H.S_HOTEL_NAME,H.S_INTRO,H.S_PROVINCE,H.S_CITY,H.S_AREA,H.S_DOMAIN,H.S_PATH,H.I_STAR FROM T_HOTEL_INFO H ");
        sql.append("LEFT JOIN T_HOTEL_STAFF S ON H.I_HOTEL_ID = S.I_HOTEL_ID WHERE S.I_USER_ID = "+I_USER_ID);
        return DateBaseUtil.queryListBySQL(sql.toString());
    }

    /**
     * 更新酒店信息
     */
    public int updateHotel(Hotel hotel){
        StringBuffer sql = new StringBuffer();
        sql.append("UPDATE T_HOTEL_INFO SET S_HOTEL_NAME = '"+hotel.getS_HOTEL_NAME()+"' , ");
        sql.append("S_INTRO = '"+hotel.getS_INTRO()+"' , ");
        sql.append("S_PROVINCE = '"+hotel.getS_PROVINCE()+"' , ");
        sql.append("S_CITY = '"+hotel.getS_CITY()+"' , ");
        sql.append("S_AREA = '"+hotel.getS_AREA()+"' , ");
        sql.append("S_DOMAIN = '"+hotel.getS_DOMAIN()+"' , ");
        sql.append("S_PATH = '"+hotel.getI_HOTEL_ID()+"' , ");
        sql.append("I_STAR = "+hotel.getI_STAR()+" WHERE I_HOTEL_ID = "+hotel.getI_HOTEL_ID());
        return DateBaseUtil.updateBySQL(sql.toString());
    }

    /**
     * 发布房间信息
     */
    public int publishRoom(Room room){
        StringBuffer sql = new StringBuffer();
        sql.append("INSERT INTO T_HOTEL_ROOM(I_ROOM_ID,S_ROOM_TYPE,I_PRICE,I_HOTEL_ID,S_PATH) VALUES (");
        sql.append(room.getI_ROOM_ID()+",");
        sql.append("'"+room.getS_ROOM_TYPE()+"',");
        sql.append(room.getI_PRICE()+",");
        sql.append(room.getI_HOTEL_ID()+",");
        sql.append("'"+room.getI_ROOM_ID()+"')");
        return DateBaseUtil.updateBySQL(sql.toString());
    }

    /**
     * 发布折扣信息
     */
    public void publishDiscount(Map map){
        StringBuffer sql = new StringBuffer();
        sql.append("INSERT INTO T_ROOM_DISCOUNT(I_DISCOUNT,I_ROOM_ID,D_START_TIME,D_END_TIME) VALUES (");
        sql.append(map.get("I_DISCOUNT")+",");
        sql.append(map.get("I_ROOM_ID")+",");
        sql.append("'"+map.get("D_START_TIME")+"',");
        sql.append("'"+map.get("D_END_TIME")+"')");
        DateBaseUtil.updateBySQL(sql.toString());
    }

    //获取主键
    public int getId(){
        List<Map<String,String>> list = DateBaseUtil.queryListBySQL("SELECT ID FROM T_ID");
        int id = Integer.parseInt(list.get(0).get("ID"));
        DateBaseUtil.updateBySQL("UPDATE T_ID SET ID = "+(id+1));
        return id;
    }

    //查询所有用户
    public List queryUser(Map map){
        StringBuffer getCountSql = new StringBuffer();
        getCountSql.append("SELECT count(*) as totalCount FROM T_USER_INFO WHERE 1=1 ");
        if(StringUtil.checkObj(map.get("S_ACCOUNT"))){
            getCountSql.append("AND S_ACCOUNT = '"+map.get("S_ACCOUNT")+"'");
        }
        if(StringUtil.checkObj(map.get("S_USER_ROLE"))){
            getCountSql.append("AND S_USER_ROLE = '"+map.get("S_USER_ROLE")+"'");
        }
        List<Map> countList = DateBaseUtil.queryListBySQL(getCountSql.toString());
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT I_USER_ID,S_USER_ROLE,S_ACCOUNT,S_NAME,S_SEX,S_AGE,S_PHONE FROM T_USER_INFO WHERE 1=1 ");
        if(StringUtil.checkObj(map.get("S_ACCOUNT"))){
            sql.append("AND S_ACCOUNT = '"+map.get("S_ACCOUNT")+"'");
        }
        if(StringUtil.checkObj(map.get("S_USER_ROLE"))){
            sql.append("AND S_USER_ROLE = '"+map.get("S_USER_ROLE")+"'");
        }
        if(StringUtil.checkObj(map.get("I_USER_ID"))){
            sql.append("AND I_USER_ID = "+map.get("I_USER_ID"));
        }
        if(StringUtil.checkObj(map.get("pageNo"))){
            sql.append(" limit "+map.get("pageNo")+","+map.get("limit"));
        }
        List<Map> queryList = DateBaseUtil.queryListBySQL(sql.toString());
        if(queryList.size() > 0){
            queryList.get(0).put("totalCount",countList.get(0).get("totalCount"));
        }
        return queryList;
    }

    //修改用户信息
    public int editUser(Map map){
        StringBuffer sql = new StringBuffer();
        sql.append("UPDATE T_USER_INFO SET S_NAME='"+map.get("S_NAME")+"',");
        sql.append("S_SEX='"+map.get("S_SEX")+"',S_AGE='"+map.get("S_AGE")+"',");
        sql.append("S_PHONE='"+map.get("S_PHONE")+"' WHERE I_USER_ID = "+map.get("I_USER_ID"));
        return DateBaseUtil.updateBySQL(sql.toString());
    }

    //新增酒店
    public int addHotel(Map map){
        StringBuffer sql2 = new StringBuffer();
        sql2.append("SELECT I_USER_ID FROM T_HOTEL_STAFF WHERE I_USER_ID="+map.get("S_STAFF_ID"));
        if(DateBaseUtil.queryListBySQL(sql2.toString()).size() > 0){
            return -1;
        }
        int id = getId();
        StringBuffer sql = new StringBuffer();
        sql.append("INSERT INTO T_HOTEL_INFO(I_HOTEL_ID,S_HOTEL_NAME,D_REG_DATE) VALUES("+id+",'"+map.get("S_HOTEL_NAME")+"',SYSDATE())");
        DateBaseUtil.updateBySQL(sql.toString());
        return id;
    }

    //给酒店新增员工
    public int addStaff(Map map){
        StringBuffer sql = new StringBuffer();
        sql.append("INSERT INTO T_HOTEL_STAFF(I_HOTEL_ID,I_USER_ID) VALUES("+map.get("I_HOTEL_ID")+","+map.get("S_STAFF_ID")+")");
        return DateBaseUtil.updateBySQL(sql.toString());
    }
}
