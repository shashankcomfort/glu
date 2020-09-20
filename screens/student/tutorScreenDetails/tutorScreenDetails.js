import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import styles from "./tutorScreenDetailsStyles";
// components

import TutorHeder from "../../../components/tutorHeader/tutorHeaderComponent";
import LiveClass from "../../../components/LiveClass/LiveClassComponent";
import RecordClass from "../../../components/RecordClass/RecordClassComponent";
import AboutTutor from "../../../components/AboutTutor/AboutTutorComponent";
import Tutors from "../../../components/tutors/tutorsComponent";
import TutorReview from "../../../components/TutorReview/TutorReviewComponent";
import SimilarTutor from "../../../components/SimilarTutor/SimilarTutorComponent";

// tempData
import TEMP_DATA from "../tempData";

const tutorScreenDetails = ({navigation}) => {
  const data = TEMP_DATA;
  //destructure
  const {navigate} = navigation;
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <TutorHeder navigation={navigation} />

        {/*********HORIZONTAL FLATLIST**********/}

        <View style={styles.flatListContainer}>
          <View style={{marginTop: 25}}>
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
        <View style={{backgroundColor: "#fff"}}>
          <LiveClass navigation={navigation} />
          <RecordClass navigation={navigation} />
        </View>
        <AboutTutor navigation={navigation} />
        <TutorReview navigation={navigation} />
        <SimilarTutor navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default tutorScreenDetails;
