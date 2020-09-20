import React from "react";
import {Image, Text, TouchableHighlight, View} from "react-native";
import {ColorConstant, Images} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import styles from "./StudentProfileStyle";

export const ProfileComponent = (props) => {
  return (
    <>
      <View style={styles.flexDirectionRow}>
        <Text style={styles.profileText}>Profile</Text>
        <Image source={Images.test} style={{width: wp(166), height: wp(166)}} />
      </View>
      <Text style={[styles.profileDetailText, {marginTop: hp(80)}]}>
        Frank Howard
      </Text>
      <Text style={[styles.profileDetailText, {marginTop: hp(40)}]}>
        Dubai, UAE
      </Text>
      <Text style={styles.profileDetailText}>(+971) 4 554 0350</Text>
      <Text style={styles.profileDetailText}>frankhwrd@gmail.com</Text>
      <Text style={styles.editText}>Edit profile</Text>
    </>
  );
};
