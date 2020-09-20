/* eslint-disable quotes */
import React, {useState} from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import {ColorConstant, Images} from "../../../constants";

import {heightToDp as hp, widthToDp as wp} from "../../../utils/ResponsiveUI";
import {SchoolOnBoarding} from "./SchoolOnBoarding";
import {SelfOnboarding} from "./SelfOnboarding";
import styles from "./StudentDashboardStyle";

const StudentDashboard = (props) => {
  let [personalDash, changeDashType] = useState(true);
  let onBordType = "school";

  let studentDashType = <SelfOnboarding {...props} />;
  let dashBoardHeader = <Text style={styles.dashboardText}>Dashboard</Text>;
  if (onBordType === "school") {
    let disSelectionColor = {color: ColorConstant.GREY1};
    dashBoardHeader = (
      <View style={[styles.flexDirectionRow, {marginTop: hp(69)}]}>
        <TouchableHighlight
          onPress={() => changeDashType(true)}
          underlayColor={"transparent"}>
          <Text
            style={[
              styles.upcomingClassText,
              !personalDash && disSelectionColor,
            ]}>
            Personal
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => changeDashType(false)}
          style={{marginLeft: wp(10)}}
          underlayColor={"transparent"}>
          <Text
            style={[
              styles.upcomingClassText,
              personalDash && disSelectionColor,
            ]}>
            School
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  if (!personalDash) {
    studentDashType = <SchoolOnBoarding {...props} />;
  }

  const onPressBellIcon = () => {
    props.navigation.navigate("notification");
  };

  return (
    <>
      <StatusBar
        backgroundColor={ColorConstant.WHITE}
        barStyle={"dark-content"}
      />
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps={"always"}
          showsVerticalScrollIndicator={false}>
          <View style={styles.scrollEleContainer}>
            <View style={styles.headerContainer}>
              <TouchableHighlight
                underlayColor={"transparent"}
                onPress={() => onPressBellIcon()}>
                <Image
                  source={Images.Notifications}
                  style={styles.bellIcon}
                  resizeMode={"contain"}
                />
              </TouchableHighlight>

              {dashBoardHeader}
            </View>
            {studentDashType}
          </View>
        </ScrollView>
        <View style={[styles.alignToFlexEnd, styles.burgerIconContainer]}>
          <Image
            source={Images.Burger}
            style={styles.moreIcon}
            resizeMode={"contain"}
          />
        </View>
      </View>
    </>
  );
};

export default StudentDashboard;
