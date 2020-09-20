import React from "react";
import {Image, Text, View, TouchableHighlight} from "react-native";
import {ColorConstant, Images} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import styles from "./EditProfileStyle";

export const EducationTile = (props) => {
  const {item, index} = props;
  return (
    <>
      <View
        style={[
          styles.educationHeader,
          !props.hideTopBorder && styles.topBorderStyle,
        ]}>
        <View style={styles.editDeleteRow}>
          <Text style={styles.educationText}>{"Current Education"}</Text>
          <TouchableHighlight
            onPress={() => {
              props.onEditEducation();
            }}
            style={styles.editEducation}>
            <Text style={styles.editText}>{"Edit"}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              props.onDeleteEducation();
            }}>
            <Text style={styles.editText}>{"Delete"}</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.educationBody}>
        <Text style={styles.educationBodyText}>{"Dane Court Grammar"}</Text>
        <Text style={styles.educationBodyText}>{"A-Level"}</Text>
        <Text style={styles.educationBodyText}>{"Maths, Enlgish, ICT"}</Text>
      </View>
    </>
  );
};
