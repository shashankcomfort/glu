import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./nextClassStyles";

const NextClass = ({watchRecordScreen}) => {
  return (
    <View
      style={{
        backgroundColor:
          watchRecordScreen === "watchScreen" ? "#F7F7F7" : "#fff",
      }}>
      <View style={styles.classContainer}>
        {watchRecordScreen == "watchScreen" ? (
          <Text style={styles.nextText}> Watch Next</Text>
        ) : (
          <Text style={styles.nextText}> Next Class </Text>
        )}

        <Image
          source={require("../../assets/brown-brim.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>19/07/20 9am- 10.15am</Text>
        <Text style={styles.dateText}>
          Creating a running plan for a 5K race. PE
        </Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.minText}>75mins</Text>
        <Text style={styles.minText}>Harriet Earl</Text>
      </View>
    </View>
  );
};

export default NextClass;
// watchRecordScreen === 'watchScreen' ? backgroundColor : '#fff': "#000"
