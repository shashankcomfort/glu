import React, {useEffect, useState} from "react";
import {View, Text, Image, ScrollView} from "react-native";
import styles from "./messageStyles";
import {Images} from "../../../constants";

// components
import HeaderBar from "../../../components/headerBar/header-Bar-component";
import ChatUserList from "../../../components/ChatUserList/ChatUserListComponent";
import {TouchableOpacity} from "react-native-gesture-handler";

const message = ({navigation}) => {
  //destructure
  const {navigate} = navigation;
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <HeaderBar navigation={navigation} gotoBack="backScreen" />
        <View style={styles.container}>
          <Text style={styles.msgText}>Messages</Text>
          <Text style={styles.descripationText}>
            Looks like you need to start talking.
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.newMsgContainer}
            onPress={() => navigate("userOnline")}>
            <Image
              resizeMode="contain"
              source={Images.Play}
              style={styles.rightIcon}
            />
            <Text style={styles.newMsgText}>New message</Text>
          </TouchableOpacity>

          <ChatUserList navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};
export default message;
