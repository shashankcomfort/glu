import React, {useState} from "react";
import {View, Text, TouchableOpacity, Image, FlatList} from "react-native";
import styles from "./TutorReviewStyles";
import Tutors from "../tutors/tutorsComponent";
import {Images} from "../../constants";

import TEMP_DATA from "../tempData";

const TutorReview = ({navigation}) => {
  const data = TEMP_DATA;

  //destructure
  const {navigate} = navigation;

  return (
    <View style={{backgroundColor: "#fff"}}>
      <View style={styles.tutorContainer}>
        <Text style={styles.tutorText}>Reviews (136)</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={() =>
          //   navigate("filterScreen", {
          //     data: {data: data},
          //     title: "Recorded Classes",
          //   })
          // }
        >
          <Text style={styles.seeAllText}>Review</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row"}}>
        <Image source={Images.Star} style={styles.icon} />
        <Text style={styles.rattingsText}>5/5</Text>
      </View>
      <View style={styles.flatListCoatiner}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          horizontal={true}
          renderItem={({item}) => (
            <View style={styles.leftBorder}>
              <Text style={styles.nameText}>
                {item.name}
                {"  "}
                <Image source={Images.Star} style={styles.textIcon} />
                {"  "}
                3/3
              </Text>
              <Text style={styles.reviewText}>{item.review}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={{height: 40}} />
    </View>
  );
};
export default TutorReview;
