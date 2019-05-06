/*
 Navicat MySQL Data Transfer

 Source Server         : navicatToMysql
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : localhost:3306
 Source Schema         : hotel

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 30/03/2019 12:22:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_hotel_info
-- ----------------------------
DROP TABLE IF EXISTS `t_hotel_info`;
CREATE TABLE `t_hotel_info`  (
  `I_HOTEL_ID` int(11) NOT NULL AUTO_INCREMENT,
  `S_HOTEL_NAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `I_PRICE` int(11) NULL DEFAULT NULL,
  `S_INTRO` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_PROVINCE` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_CITY` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_AREA` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_DOMAIN` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_PATH` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_PUBLISH_STATUS` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `I_OWNER_ID` int(11) NULL DEFAULT NULL,
  `I_STAR` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `D_REG_DATE` date NULL DEFAULT NULL,
  PRIMARY KEY (`I_HOTEL_ID`) USING BTREE,
  INDEX `I_OWNER_ID`(`I_OWNER_ID`) USING BTREE,
  CONSTRAINT `t_hotel_info_ibfk_1` FOREIGN KEY (`I_OWNER_ID`) REFERENCES `t_user_info` (`I_USER_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_hotel_room
-- ----------------------------
DROP TABLE IF EXISTS `t_hotel_room`;
CREATE TABLE `t_hotel_room`  (
  `I_ROOM_ID` int(11) NOT NULL AUTO_INCREMENT,
  `S_ROOM_TYPE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `I_PRICE` int(11) NULL DEFAULT NULL,
  `I_HOTEL_ID` int(11) NULL DEFAULT NULL,
  `S_PATH` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`I_ROOM_ID`) USING BTREE,
  INDEX `I_HOTEL_ID`(`I_HOTEL_ID`) USING BTREE,
  CONSTRAINT `t_hotel_room_ibfk_1` FOREIGN KEY (`I_HOTEL_ID`) REFERENCES `t_hotel_info` (`I_HOTEL_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_hotel_staff
-- ----------------------------
DROP TABLE IF EXISTS `t_hotel_staff`;
CREATE TABLE `t_hotel_staff`  (
  `I_HOTEL_ID` int(11) NULL DEFAULT NULL,
  `I_USER_ID` int(11) NULL DEFAULT NULL,
  INDEX `I_HOTEL_ID`(`I_HOTEL_ID`) USING BTREE,
  INDEX `I_USER_ID`(`I_USER_ID`) USING BTREE,
  CONSTRAINT `t_hotel_staff_ibfk_1` FOREIGN KEY (`I_HOTEL_ID`) REFERENCES `t_hotel_info` (`I_HOTEL_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `t_hotel_staff_ibfk_2` FOREIGN KEY (`I_USER_ID`) REFERENCES `t_user_info` (`I_USER_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_id
-- ----------------------------
DROP TABLE IF EXISTS `t_id`;
CREATE TABLE `t_id`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_order
-- ----------------------------
DROP TABLE IF EXISTS `t_order`;
CREATE TABLE `t_order`  (
  `I_ID` int(11) NOT NULL AUTO_INCREMENT,
  `I_USER_ID` int(11) NULL DEFAULT NULL,
  `D_OP_DATE` date NULL DEFAULT NULL,
  `D_IN_DATE` date NULL DEFAULT NULL,
  `D_OUT_DATE` date NULL DEFAULT NULL,
  `I_ORDER_PRICE` int(11) NULL DEFAULT NULL,
  `S_ORDER_STATUS` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `I_COUNT` int(11) NULL DEFAULT NULL,
  `I_MAN_COUNT` int(11) NULL DEFAULT NULL,
  `I_IS_CHILD` int(11) NULL DEFAULT NULL,
  `I_ROOM_ID` int(11) NULL DEFAULT NULL,
  `I_DISCOUNT` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`I_ID`) USING BTREE,
  INDEX `I_USER_ID`(`I_USER_ID`) USING BTREE,
  INDEX `I_ROOM_ID`(`I_ROOM_ID`) USING BTREE,
  CONSTRAINT `t_order_ibfk_1` FOREIGN KEY (`I_USER_ID`) REFERENCES `t_user_info` (`I_USER_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `t_order_ibfk_2` FOREIGN KEY (`I_ROOM_ID`) REFERENCES `t_hotel_room` (`I_ROOM_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_room_discount
-- ----------------------------
DROP TABLE IF EXISTS `t_room_discount`;
CREATE TABLE `t_room_discount`  (
  `I_ID` int(11) NOT NULL AUTO_INCREMENT,
  `I_DISCOUNT` int(11) NULL DEFAULT NULL,
  `I_ROOM_ID` int(11) NULL DEFAULT NULL,
  `D_START_TIME` date NULL DEFAULT NULL,
  `D_END_TIME` date NULL DEFAULT NULL,
  PRIMARY KEY (`I_ID`) USING BTREE,
  INDEX `I_ROOM_ID`(`I_ROOM_ID`) USING BTREE,
  CONSTRAINT `t_room_discount_ibfk_1` FOREIGN KEY (`I_ROOM_ID`) REFERENCES `t_hotel_room` (`I_ROOM_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_user_info
-- ----------------------------
DROP TABLE IF EXISTS `t_user_info`;
CREATE TABLE `t_user_info`  (
  `I_USER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `S_USER_ROLE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_ACCOUNT` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_PASSWORD` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_NAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_PATH` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_SEX` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_AGE` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_PHONE` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `D_REG_DATE` date NULL DEFAULT NULL,
  PRIMARY KEY (`I_USER_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_vistor_to_room
-- ----------------------------
DROP TABLE IF EXISTS `t_vistor_to_room`;
CREATE TABLE `t_vistor_to_room`  (
  `I_ID` int(11) NOT NULL AUTO_INCREMENT,
  `I_USER_ID` int(11) NULL DEFAULT NULL,
  `I_ROOM_ID` int(11) NULL DEFAULT NULL,
  `I_EVA_SCORE` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `S_EVA_CONTENT` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`I_ID`) USING BTREE,
  INDEX `I_USER_ID`(`I_USER_ID`) USING BTREE,
  INDEX `I_ROOM_ID`(`I_ROOM_ID`) USING BTREE,
  CONSTRAINT `t_vistor_to_room_ibfk_1` FOREIGN KEY (`I_USER_ID`) REFERENCES `t_user_info` (`I_USER_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `t_vistor_to_room_ibfk_2` FOREIGN KEY (`I_ROOM_ID`) REFERENCES `t_hotel_room` (`I_ROOM_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
