import React, {Component} from "react";
import {View, Text, ScrollView, Image} from "react-native";
import styles from "./favouriteStyles";
// components
import HeaderBar from "../../../components/headerBar/header-Bar-component";

const favourite = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <HeaderBar />
      <View style={styles.tutorContainer}>
        <Text style={styles.tutorText}>Favourites </Text>
        <Text style={styles.desText}>Save Classes, Products and Tutors.</Text>
      </View>
    </ScrollView>
  );
};
export default favourite;
