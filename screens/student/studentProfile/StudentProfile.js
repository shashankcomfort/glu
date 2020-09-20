import React from "react";
import {Image, ScrollView, StatusBar, Text, View} from "react-native";
import {HeaderComponent, ProfileComponent} from "../../../components";
import {ColorConstant, Images} from "../../../constants";
import {heightToDp as hp} from "../../../utils/ResponsiveUI";
import {EducationTile} from "./Components";
import styles from "./StudentProfileStyle";

const StudentProfile = (props) => {
  let isProfileCompleted = true;

  const onPressBellIcon = () => {
    props.navigation.navigate("notification");
  };

  const onPressBackIcon = () => {
    props.navigation.goBack();
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
            <View style={[styles.topViewContainer, {paddingBottom: hp(0)}]}>
              <HeaderComponent
                onPressBackIcon={() => onPressBackIcon()}
                onPressBellIcon={() => onPressBellIcon()}
              />
            </View>

            <View style={styles.profileContainer}>
              <ProfileComponent />
            </View>
            {isProfileCompleted && (
              <View style={styles.otherDetContainer}>
                <Text style={styles.bioText}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Text>
                <View style={{paddingTop: hp(50)}}>
                  <EducationTile />
                  <EducationTile />
                </View>
              </View>
            )}
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

export default StudentProfile;
