package com.testSpringMVC.service;


import com.testSpringMVC.dao.MyDao;
import com.testSpringMVC.dao.StatisticsDao;
import com.testSpringMVC.entity.Hotel;
import com.testSpringMVC.entity.Order;
import com.testSpringMVC.entity.Room;
import com.testSpringMVC.entity.User;
import com.testSpringMVC.util.DateBaseUtil;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StatisticsService {
    StatisticsDao dao = new StatisticsDao();
    /*****用户统计*****/
    //会员预定次数
    public List userBookTime(){
        return dao.userBookTime();
    }

    //各房型预定次数
    public List setRoom_Book_Time(){
        return dao.setRoom_Book_Time();
    }

    //预定总金额
    public List bookTotalPrice(){
        return dao.bookTotalPrice();
    }

    //预定总金额
    public List bookAvgPrice(){
        return dao.bookAvgPrice();
    }

    //各季度消费走势
    public List setQuarter_Cost_Trend(){
        return dao.setQuarter_Cost_Trend();
    }

    //各年消费走势
    public List setYear_Cost_Trend(){
        return dao.setYear_Cost_Trend();
    }

    //会员平均每次订单折扣
    public List userAvgDiscount(){
        return dao.userAvgDiscount();
    }

    //平均每次优惠金额
    public List userAvgCut(){
        return dao.userAvgCut();
    }

    //会员预定的到店入住率
    public List userInPer(){
        return dao.userInPer();
    }

    //注册会员每月数量、增长数
    public List userRegNum(){
        return dao.userRegNum();
    }

    //会员年龄分布图
    public List userAge(){
        return dao.userAge();
    }

    //会员性别分布图
    public List userSex(){
        return dao.userSex();
    }

    //注册酒店每月数量、增长数
    public List hotelRegNum(){
        return dao.hotelRegNum();
    }

    //酒店地域的数量及收益总额分布
    public List hotelArea(){
        return dao.hotelArea();
    }

    //每天所有酒店收益总额
    public List dayIn(){
        return dao.dayIn();
    }

    //每季度所有酒店收益总额
    public List quartIn(){
        return dao.quartIn();
    }

    //每天每类客房预定量
    public List dayBook(){ return dao.dayBook();}

    //每季度每类客房预定量
    public List quartBook(){ return dao.quartBook();}

    //每天每类客房收益
    public List dayIncome(){ return dao.dayIncome();}

    //每季度每类客房收益
    public List quartIncome(){ return dao.quartIncome();}

    //每天每类客房的实付率
    public List dayPayPer(){ return dao.dayPayPer();}

    //每季度每类客房的实付率
    public List quartPayPer(){ return dao.quartPayPer();}

    //不同类型客房的闲置率
    public List roomFreePer(){ return dao.roomFreePer();}

    //顾客回头率
    public List lookBackPer(){ return dao.lookBackPer();}

    //房型的顾客满意度
    public List roomStit(){ return dao.roomStit();}

    public static void main(String[] args) {
    }
}
