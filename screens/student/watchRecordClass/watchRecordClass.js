import React, {useState} from "react";
import {View, Text} from "react-native";
import styles from "./watchRecordClassStyles";
// components
import WatchRecordClass from "../../../components/WatchRecordClass/WatchRecordClassComponent";

const watchRecordClass = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <WatchRecordClass navigation={navigation} />
    </View>
  );
};
export default watchRecordClass;
