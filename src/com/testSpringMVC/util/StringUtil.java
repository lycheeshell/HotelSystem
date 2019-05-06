package com.testSpringMVC.util;

/**
 * Created by liangjiahui on 2018/4/23.
 */
public class StringUtil {
    public static boolean checkObj(Object obj) {
        boolean bool = true;
        //if (obj == null || "".equals(obj.toString().trim()))  //任意对象转字符串，效率低，obj内容越多越会影响性能
        if (obj == null || ( (obj instanceof String ||  obj instanceof StringBuffer)  &&  "".equals(obj.toString().trim())) )
            bool = false;
        return bool;
    }

    public static String toString(Object obj) {
        return obj != null ? obj.toString().trim() : "";
    }
}
