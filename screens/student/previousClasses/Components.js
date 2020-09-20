import React from "react";
import {Image, Text, View} from "react-native";
import {Images} from "../../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../../utils/ResponsiveUI";
import styles from "./PreviousClassesStyle";

export const PreviousClass = (props) => {
  const {item, index} = props;
  return (
    <View key={"" + item + index} style={[styles.recommendedTutorList]}>
      <Image source={Images.test} style={{width: wp(352), height: wp(250)}} />
      <Text style={[styles.chartPercentage, {marginTop: hp(24)}]}>
        Natural selection and more. Biology, Jeff Lee
      </Text>
      <View style={styles.ratingContainer}>
        <Text style={[styles.blackSmallFont, styles.flexOne]}>45mins</Text>
        <Text style={styles.blackSmallFont}>Purchased 21/10/20</Text>
      </View>
    </View>
  );
};
