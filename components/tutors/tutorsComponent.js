import React from "react";
import {TouchableOpacity, Text, Image} from "react-native";
import styles from "./tutorsStyles";

const Tutors = ({
  imageUrl,
  name,
  subject,
  ratting,
  rattingHour,
  navigation,
  screenName,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        screenName === "Tutors"
          ? navigation.navigate("tutorDetailScreens")
          : navigation.navigate("homeDetailScreen", {
              data: {
                data: imageUrl,
                name,
                subject,
                ratting,
                rattingHour,
              },
            });
      }}>
      <Image source={{uri: imageUrl}} style={styles.image}></Image>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.subjectText}>{subject}</Text>
      <Text style={styles.rattingText}>
        {ratting}
        {"  "}
        {rattingHour}
      </Text>
    </TouchableOpacity>
  );
};
export default Tutors;
