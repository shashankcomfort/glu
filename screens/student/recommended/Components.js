import React from "react";
import {Image, Text, View} from "react-native";
import {ColorConstant, Images} from "../../../constants";
import {widthToDp as wp} from "../../../utils/ResponsiveUI";
import styles from "./RecommendedStyle";

export const RecommendedTutor = (props) => {
  const {item, index} = props;
  return (
    <View key={"" + item + index} style={[styles.recommendedTutorList]}>
      <Image source={Images.test} style={{width: wp(352), height: wp(250)}} />
      <View style={{flexDirection: "row"}}>
        <Text style={[styles.chartPercentage]}>Suggested by Mr. Smith</Text>
        <Text style={[styles.chartPercentage]}>
          How chlorophyll absorbs light. Biology
        </Text>
      </View>
      <View style={styles.dateTutorContainer}>
        <Text style={[styles.blackSmallFont, {color: ColorConstant.BLACK}]}>
          11/08/20
        </Text>
        <Text style={[styles.blackSmallFont, {color: ColorConstant.BLACK}]}>
          Sue Lee
        </Text>
      </View>

      <Text style={[styles.blackSmallFont, styles.flexOne]}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </Text>
    </View>
  );
};
