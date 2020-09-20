import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import styles from "./chatStyles";
import {Images} from "../../../constants";

// components
import HeaderBar from "../../../components/headerBar/header-Bar-component";
import MessageList from "../../../components/MessageList/MessageListComponent";

// tempData
import TEMP_DATA from "../../../components/tempData";
const chat = ({navigation}) => {
  const data = TEMP_DATA;
  //destructure
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <HeaderBar navigation={navigation} gotoBack="backScreen" />
      <View style={styles.newMsgContainer}>
        <Text style={styles.msgText}>Matt Goss{"  "}</Text>
        <View style={styles.onlineView} />
      </View>
      <MessageList navigation={navigation} />
    </View>
  );
};
export default chat;
