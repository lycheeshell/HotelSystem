package com.testSpringMVC.controller;

import com.testSpringMVC.entity.Hotel;
import com.testSpringMVC.entity.Order;
import com.testSpringMVC.entity.Room;
import com.testSpringMVC.entity.User;
import com.testSpringMVC.service.MyService;
import com.testSpringMVC.util.StringUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.FileOutputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 注册
 */
@Controller
public class MyController {
    MyService service = new MyService();

    /**
     *  注册
     */
    @ResponseBody
    @RequestMapping("/reg.action")
    public int reg(User user,HttpServletRequest req){
        upload(req,user);
        return service.reg(user);
    }

    /**
     * 登陆
     */
    @ResponseBody
    @RequestMapping("/login.action")
    public List login(User user){
        return service.login(user);
    }

    /**
     * 查询酒店列表
     */
    @ResponseBody
    @RequestMapping("/queryHotels.action")
    public List queryHotels(Hotel hotel,String START_EVA,String END_EVA,String START_PRICE,String END_PRICE,String order){
        Map param = new HashMap();
        param.put("START_EVA",START_EVA);
        param.put("END_EVA",END_EVA);
        param.put("START_PRICE",START_PRICE);
        param.put("END_PRICE",END_PRICE);
        param.put("order",order);
        return service.queryHotels(hotel,param);
    }

    /**
     *  注册
     */
    @ResponseBody
    @RequestMapping("/update_Personal.action")
    public int update_Personal(User user,HttpServletRequest req){
        upload(req,user);
        return service.update_Personal(user);
    }

    /**
     *  上传
     */
    public void upload(HttpServletRequest req, Object obj){
        MultipartHttpServletRequest mreq = (MultipartHttpServletRequest)req;
        MultipartFile file = mreq.getFile("file");
        String fileType = file.getOriginalFilename();
        if(file == null){                           //没有上传图片
            return;
        }
        if(!StringUtil.checkObj(fileType)){                           //没有上传图片
            return;
        }
        String fileName = "";
        String packageName = "";                //文件夹名字
        if(obj instanceof User){
            fileName = ((User)obj).getS_ACCOUNT();
            packageName = "user";
        }else if(obj instanceof Hotel){
            fileName = ((Hotel)obj).getI_HOTEL_ID()+"";
            packageName = "hotel";
        }else if(obj instanceof Room){
            fileName = ((Room)obj).getI_ROOM_ID()+"";
            packageName = "room";
        }
        if(!"".equals(obj)){
            try {
                FileOutputStream fos = new FileOutputStream(req.getSession().getServletContext().getRealPath("/")+
                        "bigHomeWork/source/"+packageName+"/"+fileName+fileType.substring(fileType.lastIndexOf('.')).toLowerCase());
                fos.write(file.getBytes());
                fos.flush();
                fos.close();
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }

    /**
     *  查询某酒店的房东所有评价和房源
     */
    @ResponseBody
    @RequestMapping("/queryEvalueateandHotels.action")
    public Map queryEvalueateandHotels(int I_HOTEL_ID){
        return service.queryEvalueateandHotels(I_HOTEL_ID);
    }

    /**
     *  查询某酒店的评分平均分
     */
    @ResponseBody
    @RequestMapping("/queryScore.action")
    public List queryScore(int I_HOTEL_ID){
        return service.queryScore(I_HOTEL_ID);
    }

    /**
     *  查询某酒店的评论
     */
    @ResponseBody
    @RequestMapping("/queryEvalueate.action")
    public List queryEvalueate(int I_HOTEL_ID){
        return service.queryEvalueate(I_HOTEL_ID);
    }

    /**
     *  查询酒店下的所有房型房型
     */
    @ResponseBody
    @RequestMapping("/queryRoomStyle.action")
    public List queryRoomStyle(int I_HOTEL_ID){
        return service.queryRoomStyle(I_HOTEL_ID);
    }

    /**
     *  查询某房型详细信息
     */
    @ResponseBody
    @RequestMapping("/queryRoomInfo.action")
    public List queryRoomInfo(int I_ROOM_ID){
        return service.queryRoomInfo(I_ROOM_ID);
    }

    /**
     *  查询房型
     */
    @ResponseBody
    @RequestMapping("/queryDiscount.action")
    public List queryDiscount(int I_ROOM_ID){
        return service.queryDiscount(I_ROOM_ID);
    }

    /**
     *  下单
     */
    @ResponseBody
    @RequestMapping("/order.action")
    public int order(@RequestParam Map<String,String> map){
        return service.order(map);
    }

    /**
     *  旅客订单查询
     */
    @ResponseBody
    @RequestMapping("/queryOrderInVis.action")
    public List queryOrderInVis(int I_USER_ID){
        return service.queryOrderInVis(I_USER_ID);
    }

    /**
     *  酒店订单查询
     */
    @ResponseBody
    @RequestMapping("/queryOrderInOwner.action")
    public List queryOrderInOwner(int I_USER_ID){
        return service.queryOrderInOwner(I_USER_ID);
    }

    /**
     *  修改订单状态
     */
    @ResponseBody
    @RequestMapping("/done.action")
    public int done(int I_ID,String S_ORDER_STATUS){
        return service.done(I_ID,S_ORDER_STATUS);
    }

    /**
     *  修改订单状态
     */
    @ResponseBody
    @RequestMapping("/eva_to_owner.action")
    public int eva_to_owner(int I_USER_ID,int I_ROOM_ID,int I_EVA_SCORE,int I_ORDER_ID,String S_EVA_CONTENT){
        Map map = new HashMap();
        map.put("I_USER_ID",I_USER_ID);
        map.put("I_ROOM_ID",I_ROOM_ID);
        map.put("I_EVA_SCORE",I_EVA_SCORE);
        map.put("I_ORDER_ID",I_ORDER_ID);
        map.put("S_EVA_CONTENT",S_EVA_CONTENT);
        return service.eva_to_owner(map);
    }

    /**
     *  修改订单状态
     */
    @ResponseBody
    @RequestMapping("/queryHotelByUser.action")
    public List queryHotelByUser(int I_USER_ID){
        return service.queryHotelByUser(I_USER_ID);
    }

    /**
     *  更新酒店信息
     */
    @ResponseBody
    @RequestMapping("/updateHotel.action")
    public int updateHotel(Hotel hotel,HttpServletRequest req){
        upload(req,hotel);
        return service.updateHotel(hotel);
    }

    /**
     *  发布房间信息
     */
    @ResponseBody
    @RequestMapping("/publishRoom.action")
    public int publishRoom(Room room, HttpServletRequest req){
        int id = service.getId();
        room.setI_ROOM_ID(id);
        upload(req,room);
        service.publishRoom(room);
        return id;
    }

    /**
     *  发布折扣
     */
    @ResponseBody
    @RequestMapping("/publishDiscount.action")
    public void publishDiscount(@RequestParam Map<String,String> map){
        service.publishDiscount(map);
    }

    /**
     *  查询所有用户
     */
    @ResponseBody
    @RequestMapping("/queryUser.action")
    public List queryUser(@RequestParam Map<String,String> map){
        return service.queryUser(map);
    }

    /**
     *  修改用户信息
     */
    @ResponseBody
    @RequestMapping("/editUser.action")
    public int editUser(@RequestParam Map<String,String> map){
        return service.editUser(map);
    }

    /**
     *  修改用户信息
     */
    @ResponseBody
    @RequestMapping("/addHotel.action")
    public int addHotel(@RequestParam Map<String,String> map){
        return service.addHotel(map);
    }

    /**
     *  修改用户信息
     */
    @ResponseBody
    @RequestMapping("/addStaff.action")
    public int addStaff(@RequestParam Map<String,String> map){
        return service.addStaff(map);
    }
}
