import React, {useState} from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import styles from "./TutorClassStyles";
import Tutors from "../tutors/tutorsComponent";
// tempData
import TEMP_DATA from "../tempData";

const TutorClass = ({navigation}) => {
  const data = TEMP_DATA;

  //destructure
  const {navigate} = navigation;

  return (
    <View>
      <View style={styles.tutorContainer}>
        <Text style={styles.tutorText}>Tutors</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigate("filterScreen", {
              data: {data: data},
              title: "Tutors",
            })
          }>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flatListCoatiner}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          horizontal={true}
          renderItem={({item}) => (
            <View>
              <Tutors {...item} navigation={navigation} screenName="Tutors" />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default TutorClass;
