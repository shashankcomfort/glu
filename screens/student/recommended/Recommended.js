import React, {useState} from "react";
import {Image, ScrollView, StatusBar, Text, View} from "react-native";
import {HeaderComponent} from "../../../components";
import {ColorConstant, Images} from "../../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../../utils/ResponsiveUI";
import {RecommendedTutor} from "./Components";
import styles from "./RecommendedStyle";

const Recommended = (props) => {
  let noData = false;

  const [recommended, updateRecommended] = useState([
    {
      month: "June",
      data: [
        {
          isExpanded: false,
          subjectName: "Introducing Linear Alegbra",
          date: "19/07/20",
          tutor: "Esme Wilson",
          desc:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
          yourAvg: "85%",
          stdAvg: "92%",
        },
        {
          isExpanded: false,
          subjectName: "Introducing Linear Alegbra",
          date: "19/07/20",
          tutor: "Esme Wilson",
          desc:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
          yourAvg: "85%",
          stdAvg: "92%",
        },
      ],
    },
    {
      month: "July",
      data: [
        {
          isExpanded: false,
          subjectName: "Introducing Linear Alegbra",
          date: "19/07/20",
          tutor: "Esme Wilson",
          desc:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
          yourAvg: "85%",
          stdAvg: "92%",
        },
      ],
    },
  ]);

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
              <View
                style={[
                  styles.flexDirectionRow,
                  styles.flexOne,
                  {paddingTop: hp(69)},
                ]}>
                <Text style={[styles.dashboardText, styles.flexOne]}>
                  Recommended
                </Text>
              </View>
            </View>
            {noData ? (
              <>
                <View style={styles.nodataContainer}>
                  <Text style={[styles.bigText, {paddingTop: hp(66)}]}>
                    {"You haven’t had any suggestions yet."}
                  </Text>
                </View>
              </>
            ) : (
              <View
                style={{
                  paddingHorizontal: wp(31),
                  paddingTop: hp(45),
                }}>
                {recommended.map((item, index) => (
                  <View key={index} style={{paddingBottom: hp(45)}}>
                    <View
                      style={{
                        paddingTop: hp(30),
                        borderTopWidth: hp(1),
                        borderTopColor: ColorConstant.GREY2,
                      }}>
                      <Text style={styles.monthText}>{item.month}</Text>
                    </View>
                    {item.data.map((recomdDet, recomIndex) => (
                      <RecommendedTutor
                        item={recomdDet}
                        index={recomIndex}
                        key={"" + index + recomIndex}
                      />
                    ))}
                  </View>
                ))}
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

export default Recommended;
