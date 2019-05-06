package com.testSpringMVC.entity;

public class Room {
    private int I_ROOM_ID;
    private String S_ROOM_TYPE;
    private int I_PRICE;
    private int I_HOTEL_ID;
    private String S_PATH;

    public int getI_ROOM_ID() {
        return I_ROOM_ID;
    }

    public void setI_ROOM_ID(int i_ROOM_ID) {
        I_ROOM_ID = i_ROOM_ID;
    }

    public String getS_ROOM_TYPE() {
        return S_ROOM_TYPE;
    }

    public void setS_ROOM_TYPE(String s_ROOM_TYPE) {
        S_ROOM_TYPE = s_ROOM_TYPE;
    }

    public int getI_PRICE() {
        return I_PRICE;
    }

    public void setI_PRICE(int i_PRICE) {
        I_PRICE = i_PRICE;
    }

    public int getI_HOTEL_ID() {
        return I_HOTEL_ID;
    }

    public void setI_HOTEL_ID(int i_HOTEL_ID) {
        I_HOTEL_ID = i_HOTEL_ID;
    }

    public String getS_PATH() {
        return S_PATH;
    }

    public void setS_PATH(String s_PATH) {
        S_PATH = s_PATH;
    }
}
