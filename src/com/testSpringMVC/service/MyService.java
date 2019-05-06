package com.testSpringMVC.service;


import com.testSpringMVC.dao.MyDao;
import com.testSpringMVC.entity.Hotel;
import com.testSpringMVC.entity.Order;
import com.testSpringMVC.entity.Room;
import com.testSpringMVC.entity.User;
import com.testSpringMVC.util.StringUtil;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MyService {
    MyDao dao = new MyDao();

    /**
     * 注册
     */
    public int reg(User user){
        if(dao.checkAccount(user.getS_ACCOUNT()).size() > 0){
            return -1;
        }
        return dao.reg(user);
    }

    /**
     * 登陆
     */
    public List login(User user){
        return dao.login(user);
    }

    /**
     * 查询酒店列表
     */
    public List queryHotels(Hotel hotel,Map map){
        return dao.queryHotels(hotel,map);
    }

    /**
     * 更新个人信息
     */
    public int update_Personal(User user){
        return dao.update_Personal(user);
    }

    /**
     * 查询某酒店的房东所有评价和房源
     */
    public Map queryEvalueateandHotels(int I_HOTEL_ID){
        return dao.queryEvalueateandHotels(I_HOTEL_ID);
    }
    /**
     * 查询某酒店的评分平均分
     */
    public List queryScore(int I_HOTEL_ID){
        return dao.queryScore(I_HOTEL_ID);
    }
    /**
     * 查询某酒店的评论
     */
    public List queryEvalueate(int I_HOTEL_ID){
        return dao.queryEvalueate(I_HOTEL_ID);
    }

    /**
     * 查询酒店下的所有房型房型
     */
    public List queryRoomStyle(int I_HOTEL_ID){
        return dao.queryRoomStyle(I_HOTEL_ID);
    }

    /**
     * 查询某房型详细信息
     */
    public List queryRoomInfo(int I_ROOM_ID){
        return dao.queryRoomInfo(I_ROOM_ID);
    }

    /**
     * 查询折扣
     */
    public List queryDiscount(int I_ROOM_ID){
        return dao.queryDiscount(I_ROOM_ID);
    }

    /**
     * 下单
     */
    public int order(Map map){
        return dao.order(map);
    }

    /**
     * 旅客订单查询
     */
    public List queryOrderInVis(int I_USER_ID){
        return dao.queryOrderInVis(I_USER_ID);
    }

    /**
     * 酒店订单查询
     */
    public List queryOrderInOwner(int I_USER_ID){
        return dao.queryOrderInOwner(I_USER_ID);
    }

    /**
     * 修改订单状态
     */
    public int done(int I_ID,String S_ORDER_STATUS){
        return dao.done(I_ID,S_ORDER_STATUS);
    }

    /**
     * 修改订单状态
     */
    public int eva_to_owner(Map map){
        return dao.eva_to_owner(map);
    }

    /**
     * 查询员工所属酒店详情
     */
    public List queryHotelByUser(int I_USER_ID){
        return dao.queryHotelByUser(I_USER_ID);
    }

    /**
     * 更新酒店信息
     */
    public int updateHotel(Hotel hotel){
        return dao.updateHotel(hotel);
    }

    /**
     * 发布房间信息
     */
    public int publishRoom(Room room){
        return dao.publishRoom(room);
    }

    /**
     * 发布折扣信息
     */
    public void publishDiscount(Map<String,String> map){
        int count = Integer.parseInt(map.get("count"));
        int I_ROOM_ID = Integer.parseInt(map.get("I_ROOM_ID"));
        for (int i = 0;i<count;i++){
            Map param = new HashMap();
            param.put("I_DISCOUNT",map.get("DISCOUNT_PRICE"+i));
            param.put("I_ROOM_ID",I_ROOM_ID);
            param.put("D_START_TIME",map.get("DISCOUNT_START_DATE"+i));
            param.put("D_END_TIME",map.get("DISCOUNT_END_DATE"+i));
            dao.publishDiscount(param);
        }
    }

    /**
     * 发布折扣信息
     */
    public int getId(){
        return dao.getId();
    }

    //查询所有用户
    public List queryUser(Map map){
        return dao.queryUser(map);
    }

    //修改用户信息
    public int editUser(Map map){
        return dao.editUser(map);
    }

    //新增酒店
    public int addHotel(Map map){
        return dao.addHotel(map);
    }

    //给酒店新增员工
    public int addStaff(Map<String,String> map){
        return dao.addStaff(map);
    }

    public static void main(String[] args) {
    }
}
