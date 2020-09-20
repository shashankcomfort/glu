import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, TouchableOpacity, FlatList} from "react-native";
import styles from "./homeStyles";
// components
import HeaderBar from "../../../components/headerBar/header-Bar-component";
import MenuSlider from "../../../components/menu-slider/menu-Slider-Components";
import NextClass from "../../../components/nextClass/nextClassComponent";
import UpComingClass from "../../../components/upComingClass/upComingClassComponent";
import MonthlyCalendar from "../../../components/monthlyCalendar/monthlyCalendarComponent";
import RecordClass from "../../../components/RecordClass/RecordClassComponent";
import LiveClass from "../../../components/LiveClass/LiveClassComponent";
import FeaturedTutor from "../../../components/FeaturedTutor/FeaturedTutorComponent";
import FeaturedSubject from "../../../components/FeaturedSubject/FeaturedSubjectComponent";
import TutorClass from "../../../components/TutorClass/TutorClassComponent";
import TermCondition from "../../../components/term&Conditon/term&ConditonComponent";

const home = ({navigation}) => {
  //destructure
  const {navigate} = navigation;

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {/** **************MENU-SLIDER****************/}
        <MenuSlider />

        {/** **************HEADER-BAR****************/}
        <HeaderBar screenName="HomeScreen" />

        {/** **************NEXT CLASS****************/}
        <NextClass />

        {/** **************FEATURED SUBJECT****************/}

        <FeaturedSubject navigation={navigation} />

        {/** **************RECORDED CLASSES****************/}

        <View style={{backgroundColor: "#fff"}}>
          <RecordClass navigation={navigation} />

          {/** **************MENU-SLIDER****************/}

          <MenuSlider />

          {/****UPCOMING CLASS******* */}

          <UpComingClass />

          {/*************JULY CALENDAR************/}

          <MonthlyCalendar />

          {/** **************LIVE CLASSES****************/}
          <LiveClass navigation={navigation} />

          {/** **************FEATURED TUTORS****************/}
          <FeaturedTutor navigation={navigation} />
          {/* 
        
          {/** **************MENU-SLIDER****************/}

          <MenuSlider />

          {/** **************TUTORS****************/}
          <TutorClass navigation={navigation} />

          {/**********TERM AND CONDITION**********/}

          <TermCondition />
        </View>
      </View>
    </ScrollView>
  );
};
export default home;
