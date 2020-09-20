import React from "react";
import {View, Text, ScrollView, Image} from "react-native";
import styles from "./filterScreenDetailsStyles";
import {Images} from "../../../constants";

// components
import HeaderBar from "../../../components/headerBar/header-Bar-component";
import MenuSlider from "../../../components/menu-slider/menu-Slider-Components";
import UpComingClass from "../../../components/upComingClass/upComingClassComponent";
import LiveClass from "../../../components/LiveClass/LiveClassComponent";
import RecordClass from "../../../components/RecordClass/RecordClassComponent";
import FeaturedTutor from "../../../components/FeaturedTutor/FeaturedTutorComponent";
import Tutors from "../../../components/tutors/tutorsComponent";
import TermCondition from "../../../components/term&Conditon/term&ConditonComponent";

// tempData
import TEMP_DATA from "../tempData";

const filterScreenDetails = ({navigation}) => {
  const data = TEMP_DATA;
  //destructure
  const {navigate} = navigation;
  return (
    <View style={styles.mainContainer}>
      <HeaderBar />
      <View style={styles.container}>
        <Text style={styles.subjectText}> Maths. </Text>
        <Text style={styles.subjectText}> Tutors 215 </Text>
        <Text style={styles.subjectText}> 719 Classes </Text>
        <View style={styles.iconTextConatiner}>
          <Image
            // resizeMode={"cover"}
            source={Images.heart}
            style={[styles.icon, {marginTop: 3, marginLeft: 0}]}
          />
          <Text style={styles.favouriteText}>Favourite</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.addheight} />
        <View style={styles.transprent}>
          <MenuSlider />
          <UpComingClass navigation={navigation} />
          <LiveClass navigation={navigation} />
          <MenuSlider />
          <RecordClass navigation={navigation} />
          <FeaturedTutor navigation={navigation} />
          <TermCondition />
        </View>
      </ScrollView>
    </View>
  );
};

export default filterScreenDetails;
