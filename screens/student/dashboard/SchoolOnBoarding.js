import React from "react";
import {Text, View, TouchableHighlight} from "react-native";
import {G, Line, Svg} from "react-native-svg";
import {LineChart} from "react-native-svg-charts";
import {ColorConstant} from "../../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../../utils/ResponsiveUI";
import {SchoolTaskListComponent, TileComponent} from "./Components";
import {ProfileComponent} from "../../../components";
import styles from "./StudentDashboardStyle";
import {getCurrentTime, getDatePostFix, getDay, getMonth} from "./Utils";

export const SchoolOnBoarding = (props) => {
  let firstTileList = [
    {
      topText: "School Timetable",
      bottomText: "Classes\n5",
      onPressTile: () => {},
    },
    {
      topText: "School Info",
      bottomText: "Secondary\nDubai, UAE",
      onPressTile: () => {},
    },
    {
      topText: "Homework",
      bottomText: "Assignments\n34",
      onPressTile: () => {},
    },
    {
      topText: "Reccomended",
      bottomText: "Total\n12",
      onPressTile: () => moveToReccomended(),
    },
    {
      topText: "Extra Curricular",
      bottomText: "Enrolled\n13",
      onPressTile: () => moveToExtraCurricular(),
    },
  ];

  let secondTileList = [
    {
      topText: "Whiteboard",
      bottomText: "Try out what the class will be like.",
    },
    {
      topText: "School Bus Tracking",
      bottomText: "Take a look and see where the bus is.",
    },
  ];

  const getTimeText = () => {
    let today = getDay();

    let date = "" + new Date().getDate();
    today +=
      date +
      getDatePostFix(date) +
      " " +
      getMonth() +
      " " +
      new Date().getFullYear();
    return today;
  };

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

  const moveToReccomended = () => {
    props.navigation.navigate("recommended");
  };

  const moveToExtraCurricular = () => {
    props.navigation.navigate("extraCurricular");
  };

  const onPressProfile = () => {
    props.navigation.navigate("studentProfile");
  };

  const CustomGrid = ({x, y}) => {
    return (
      <G>
        {[0, 50, 40, 75, 50, 60].map((_, index) => {
          if (index === [0, 50, 40, 75, 50, 60].length - 1) {
            return null;
          }
          return (
            <Line
              key={index}
              y1={"0%"}
              y2={"100%"}
              x1={x(index)}
              x2={x(index)}
              stroke={ColorConstant.GREY2}
            />
          );
        })}
      </G>
    );
  };

  return (
    <>
      <View style={{marginHorizontal: wp(31), marginTop: hp(44)}}>
        <View
          style={{backgroundColor: ColorConstant.WHITE, paddingLeft: wp(20)}}>
          <View style={styles.classReportContainer}>
            <View style={styles.flexOne}>
              <Text style={[styles.upcomingClassText]}>Class Reports</Text>
              <Text style={[styles.upcomingClassText]}>Mar-Aug</Text>
            </View>
            <View>
              <Text style={[styles.seeAllText, {alignItems: "flex-end"}]}>
                See all
              </Text>
            </View>
          </View>

          <LineChart data={data} style={styles.lineChart}>
            <Svg belowChart={true}>
              {[70, 50].map((item, index) => (
                <Line
                  key={"" + item + index}
                  x1="0"
                  y1={(hp(item) * hp(111)) / hp(100)}
                  x2={wp(316)}
                  y2={(hp(item) * hp(111)) / hp(100)}
                  stroke={ColorConstant.GREY2}
                  strokeWidth="1"
                  strokeDasharray={(wp(8), wp(8))}
                />
              ))}
            </Svg>
            <CustomGrid belowChart={true} />
          </LineChart>

          <View style={styles.chartSummaryContainer}>
            <View style={styles.flexOne}>
              <View style={styles.chartDesc} />
              <Text style={styles.blackSmallFont}>Your average</Text>
              <Text style={styles.blackSmallFont}>56%</Text>
            </View>
            <View style={styles.flexOne}>
              <View style={[styles.chartDesc, {opacity: 0.25}]} />
              <Text style={styles.blackSmallFont}>Student average</Text>
              <Text style={styles.blackSmallFont}>45%</Text>
            </View>
          </View>
        </View>
        <View style={styles.tileListContainer}>
          {firstTileList.map((tile, tileIndex) => (
            <TileComponent
              data={tile}
              leftTile={tileIndex % 2 === 0 ? true : false}
              key={"topTile" + tileIndex}
              onPressTile={() => tile.onPressTile()}
            />
          ))}
        </View>

        <View style={styles.schedularContainer}>
          <View style={styles.flexDirectionRow}>
            <View style={{width: wp(208)}}>
              <Text style={styles.todayText}>{getTimeText()}</Text>
            </View>
          </View>
          <View style={[styles.flexDirectionRow, {marginTop: hp(142)}]}>
            <View style={{width: wp(85), marginRight: wp(103)}}>
              <Text style={styles.blackSmallFont}>Upcoming Classes</Text>
              <Text style={styles.blackSmallFont}>4</Text>
            </View>
            <View style={{width: wp(85)}}>
              <Text style={styles.blackSmallFont}>Private Classes</Text>
              <Text style={styles.blackSmallFont}>4</Text>
            </View>
          </View>
        </View>

        <View style={styles.tileListContainer}>
          {secondTileList.map((tile, tileIndex) => (
            <TileComponent
              data={tile}
              leftTile={tileIndex % 2 === 0 ? true : false}
              key={"topTile" + tileIndex}
            />
          ))}
        </View>
      </View>
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={() => onPressProfile()}>
        <View style={styles.profileCotainer}>
          <ProfileComponent />
        </View>
      </TouchableHighlight>

      <View
        style={{
          marginHorizontal: wp(31),
          marginTop: hp(79),
        }}>
        <View style={styles.flexDirectionRow}>
          <Text style={[styles.upcomingClassText, styles.flexOne]}>
            Your Day
          </Text>
          <Text style={[styles.upcomingClassText]}>{getCurrentTime()}</Text>
        </View>
        <SchoolTaskListComponent />
        <SchoolTaskListComponent />
        <SchoolTaskListComponent isBreak />
      </View>

      <View
        style={[
          styles.flexDirectionRow,
          {marginHorizontal: wp(31), marginTop: hp(81)},
        ]}>
        <Text style={[styles.footerText, styles.flexOne]}>
          {"T&C’s / Privacy & Cookies\nMade by Six\nBuild by Someone"}
        </Text>
        <Text style={[styles.footerText]}>Glu ©2020</Text>
      </View>
    </>
  );
};
