import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./upComingClassStyles";

const UpComingClass = () => (
  <View style={styles.container}>
    <Text style={styles.tutorText}>
      <View style={styles.blackView} /> Upcoming Class
    </Text>

    <Image
      resizeMode={"cover"}
      source={require("../../assets/brown-brim.png")}
      style={styles.image}
    />
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>24/07/20 3pm- 4.30pm</Text>
      <Text style={styles.dateText}>
        Organising a discursive essay. English
      </Text>
    </View>
    <View style={styles.dateContainer}>
      <Text style={styles.minText}>AED200</Text>
      <Text style={styles.minText}>Esme Stannard</Text>
    </View>
  </View>
);
export default UpComingClass;
