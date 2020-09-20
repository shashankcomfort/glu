import React, {useState} from "react";
import {
  Image,
  LayoutAnimation,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  UIManager,
  View,
} from "react-native";
import {ColorConstant, Images} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import {NoDataFound, RenderTheReportData} from "./Components";
import styles from "./StudentReportStyle";

const StudentReport = (props) => {
  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  let recommendedTagList = [
    {
      tag: "Maths",
    },
    {
      tag: "Computer Science",
    },
    {
      tag: "Project Management",
    },
    {
      tag: "English",
    },
    {
      tag: "ICT",
    },
    {
      tag: "Languages",
    },
  ];

  let noData = false;

  const [resultData, updateresultData] = useState([
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

  const data = [
    {
      data: [0, 55, 40, 75, 50, 60],
      svg: {stroke: ColorConstant.SKY_BLUE, strokeWidth: wp(2)},
    },
    {
      data: [20, 45, 40, 55, 30, 20],
      svg: {stroke: ColorConstant.SKY_BLUE, strokeWidth: wp(2), opacity: 0.25},
    },
  ];

  const onPressBellIcon = () => {
    props.navigation.navigate("notification");
  };

  const updateLayout = (monthIndex, subIndex) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...resultData];
    array.map((mResult, mResultIndex) => {
      mResult.data.map((_, subResultIndex) => {
        if (monthIndex === mResultIndex && subIndex === subResultIndex) {
          array[mResultIndex].data[subResultIndex].isExpanded = !array[
            mResultIndex
          ].data[subIndex].isExpanded;
        } else {
          array[mResultIndex].data[subResultIndex].isExpanded = false;
        }
      });
    });

    updateresultData(array);
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
              <View style={styles.headerContainer}>
                <TouchableHighlight
                  underlayColor={"transparent"}
                  onPress={() => onPressBellIcon()}>
                  <Image
                    source={Images.Left}
                    style={styles.LeftIcon}
                    resizeMode={"contain"}
                  />
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor={"transparent"}
                  onPress={() => onPressBellIcon()}
                  style={{marginLeft: wp(40)}}>
                  <Image
                    source={Images.Notifications}
                    style={styles.bellIcon}
                    resizeMode={"contain"}
                  />
                </TouchableHighlight>
              </View>
              <Text style={[styles.dashboardText, {paddingTop: hp(69)}]}>
                Maths Report
              </Text>
            </View>
            {noData ? (
              <NoDataFound />
            ) : (
              <RenderTheReportData
                resultData={resultData}
                data={data}
                updateLayout={(mIndex, sIndex) => updateLayout(mIndex, sIndex)}
                recommendedTagList={recommendedTagList}
              />
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

export default StudentReport;
