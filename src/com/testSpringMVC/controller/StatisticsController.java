package com.testSpringMVC.controller;

import com.testSpringMVC.entity.Hotel;
import com.testSpringMVC.entity.Order;
import com.testSpringMVC.entity.Room;
import com.testSpringMVC.entity.User;
import com.testSpringMVC.service.MyService;
import com.testSpringMVC.service.StatisticsService;
import com.testSpringMVC.util.StringUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.FileOutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 注册
 */
@Controller
public class StatisticsController {
    StatisticsService service = new StatisticsService();

    //会员预定次数
    @ResponseBody
    @RequestMapping("/userBookTime.action")
    public List userBookTime(){
        return service.userBookTime();
    }

    //各房型预定次数
    @ResponseBody
    @RequestMapping("/setRoom_Book_Time.action")
    public List setRoom_Book_Time(){
        return service.setRoom_Book_Time();
    }

    //预定总金额
    @ResponseBody
    @RequestMapping("/bookTotalPrice.action")
    public List bookTotalPrice(){
        return service.bookTotalPrice();
    }

    //预定总金额
    @ResponseBody
    @RequestMapping("/bookAvgPrice.action")
    public List bookAvgPrice(){
        return service.bookAvgPrice();
    }

    //各季度消费走势
    @ResponseBody
    @RequestMapping("/setQuarter_Cost_Trend.action")
    public List setQuarter_Cost_Trend(){
        return service.setQuarter_Cost_Trend();
    }

    //各年消费走势
    @ResponseBody
    @RequestMapping("/setYear_Cost_Trend.action")
    public List setYear_Cost_Trend(){
        return service.setYear_Cost_Trend();
    }

    //会员平均每次订单折扣
    @ResponseBody
    @RequestMapping("/userAvgDiscount.action")
    public List userAvgDiscount(){
        return service.userAvgDiscount();
    }

    //平均每次优惠金额
    @ResponseBody
    @RequestMapping("/userAvgCut.action")
    public List userAvgCut(){
        return service.userAvgCut();
    }

    //会员预定的到店入住率
    @ResponseBody
    @RequestMapping("/userInPer.action")
    public List userInPer(){
        return service.userInPer();
    }

    //注册会员每月数量、增长数
    @ResponseBody
    @RequestMapping("/userRegNum.action")
    public List userRegNum(){
        return service.userRegNum();
    }

    //会员年龄分布图
    @ResponseBody
    @RequestMapping("/userAge.action")
    public List userAge(){
        return service.userAge();
    }

    //会员性别分布图
    @ResponseBody
    @RequestMapping("/userSex.action")
    public List userSex(){
        return service.userSex();
    }

    //注册酒店每月数量、增长数
    @ResponseBody
    @RequestMapping("/hotelRegNum.action")
    public List hotelRegNum(){
        return service.hotelRegNum();
    }

    //酒店地域的数量及收益总额分布
    @ResponseBody
    @RequestMapping("/hotelArea.action")
    public List hotelArea(){
        return service.hotelArea();
    }

    //每天所有酒店收益总额
    @ResponseBody
    @RequestMapping("/dayIn.action")
    public List dayIn(){
        return service.dayIn();
    }

    //每季度所有酒店收益总额
    @ResponseBody
    @RequestMapping("/quartIn.action")
    public List quartIn(){
        return service.quartIn();
    }

    //每天每类客房预定量
    @ResponseBody
    @RequestMapping("/dayBook.action")
    public List dayBook(){
        return service.dayBook();
    }

    //每季度每类客房预定量
    @ResponseBody
    @RequestMapping("/quartBook.action")
    public List quartBook(){
        return service.quartBook();
    }

    //每天每类客房收益
    @ResponseBody
    @RequestMapping("/dayIncome.action")
    public List dayIncome(){
        return service.dayIncome();
    }

    //每季度每类客房收益
    @ResponseBody
    @RequestMapping("/quartIncome.action")
    public List quartIncome(){
        return service.quartIncome();
    }

    //每天每类客房的实付率
    @ResponseBody
    @RequestMapping("/dayPayPer.action")
    public List dayPayPer(){
        return service.dayPayPer();
    }

    //每季度每类客房的实付率
    @ResponseBody
    @RequestMapping("/quartPayPer.action")
    public List quartPayPer(){
        return service.quartPayPer();
    }

    //不同类型客房的闲置率
    @ResponseBody
    @RequestMapping("/roomFreePer.action")
    public List roomFreePer(){
        return service.roomFreePer();
    }

    //顾客回头率
    @ResponseBody
    @RequestMapping("/lookBackPer.action")
    public List lookBackPer(){
        return service.lookBackPer();
    }

    //房型的顾客满意度
    @ResponseBody
    @RequestMapping("/roomStit.action")
    public List roomStit(){
        return service.roomStit();
    }
}
