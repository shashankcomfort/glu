import React, {useEffect, useState} from "react";
import {View, Text, Image, ScrollView} from "react-native";
import styles from "./userOnlineStyles";
import {Images} from "../../../constants";

// components
import HeaderBar from "../../../components/headerBar/header-Bar-component";
import ChatUserList from "../../../components/ChatUserList/ChatUserListComponent";

const userOnline = ({navigation}) => {
  //destructure
  const {navigate} = navigation;
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <HeaderBar navigation={navigation} gotoBack="backScreen" />
        <View style={styles.container}>
          <View style={styles.newMsgContainer}>
            <Text style={styles.msgText}>Messages </Text>
            <Image
              resizeMode="contain"
              source={Images.Play}
              style={styles.rightIcon}
            />
          </View>
          <ChatUserList navigation={navigation} userOnline="online" />
        </View>
      </View>
    </ScrollView>
  );
};
export default userOnline;
