import React from "react";
import {Image, TouchableHighlight, View} from "react-native";
import {Images} from "../../constants";
import {widthToDp as wp} from "../../utils/ResponsiveUI";
import styles from "./HeaderStyles";

export const HeaderComponent = (props) => {
  return (
    <View style={styles.headerContainer}>
      {!props.hideBack && (
        <TouchableHighlight
          underlayColor={"transparent"}
          onPress={() => props.onPressBackIcon()}>
          <Image
            source={Images.Left}
            style={styles.LeftIcon}
            resizeMode={"contain"}
          />
        </TouchableHighlight>
      )}

      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={() => props.onPressBellIcon()}
        style={{marginLeft: wp(40)}}>
        <Image
          source={Images.Notifications}
          style={styles.bellIcon}
          resizeMode={"contain"}
        />
      </TouchableHighlight>
    </View>
  );
};
