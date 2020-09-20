import React from "react";
import {Image, Text, View, TouchableHighlight} from "react-native";
import {Images} from "../../../constants";
import {widthToDp as wp} from "../../../utils/ResponsiveUI";
import styles from "./ExtraCurricularStyle";

export const ExtraCurricularCard = (props) => {
  const {item, index} = props;
  return (
    <TouchableHighlight
      underlayColor={"transparent"}
      onPress={() => props.onPressExtraCurricularItem()}>
      <View key={"" + item + index} style={[styles.recommendedTutorList]}>
        <Image source={Images.test} style={{width: wp(352), height: wp(250)}} />
        <Text style={[styles.chartPercentage]}>
          Natural selection and more. Biology, Jeff Lee
        </Text>
        <View style={styles.dateTutorContainer}>
          <Text style={[styles.blackSmallFont]}>AED200 / 45mins</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
