import React, {useState} from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import styles from "./SimilarTutorStyles";
import Tutors from "../tutors/tutorsComponent";

import TEMP_DATA from "../tempData";

const SimilarTutor = ({navigation}) => {
  const data = TEMP_DATA;

  //destructure
  const {navigate} = navigation;

  return (
    <View>
      <View style={styles.tutorContainer}>
        <Text style={styles.tutorText}>Similar Tutors</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigate("filterScreen", {
              data: {data: data},
              title: "Similar Tutors",
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
              <Tutors {...item} navigation={navigation} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default SimilarTutor;
