import React from "react";
import {Image, Text, TouchableHighlight, View} from "react-native";
import {ColorConstant, Images} from "../../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../../utils/ResponsiveUI";
import styles from "./StudentDashboardStyle";

export const UpcomingClasses = (props) => {
  return (
    <View style={styles.upcomingClassContainer}>
      <View style={styles.flexDirectionRow}>
        <View style={styles.flexOne}>
          <Text style={styles.upcomingClassText}>Upcoming</Text>
          <Text style={styles.upcomingClassText}>classes</Text>
        </View>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View style={{paddingTop: hp(43)}}>
        <View style={styles.alignToFlexEnd}>
          {
            // <View style={styles.upcomingImage} />
            <Image source={Images.test} style={styles.upcomingImage} />
          }
        </View>
        <View style={[styles.flexDirectionRow, {paddingTop: hp(24)}]}>
          <View style={styles.flexOne}>
            <Text style={[styles.upcomingClassText, {width: wp(104)}]}>
              19/07/20 9am- 10.15am
            </Text>
          </View>
          <View style={styles.alignToFlexEnd}>
            <Text style={[styles.upcomingClassText, {width: wp(146)}]}>
              Igneous, Sedimentaryand Meta…
            </Text>
            <Text style={[styles.upcomingClassText, {width: wp(146)}]}>
              Geography
            </Text>
          </View>
        </View>
        <View style={[styles.flexDirectionRow, {paddingTop: hp(12)}]}>
          <View style={styles.flexOne}>
            <Text style={[styles.blackSmallFont, {width: wp(104)}]}>
              45mins
            </Text>
          </View>
          <View style={styles.alignToFlexEnd}>
            <Text style={[styles.blackSmallFont, {width: wp(146)}]}>
              Ray Smith
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.flexDirectionRow, styles.dashContainer]}>
        {[1, 2, 3, 4].map((item, index) => (
          <View
            style={[
              styles.totalTimeBar,
              {width: wp(63)},
              props.activeIndex === index && {
                borderBottomColor: ColorConstant.BLACK,
              },
            ]}
            key={"" + index}>
            {/* <View
              style={[
                props.activeIndex&&styles.completionBar,
                props.activeIndex && styles.dashComplition,
                {width: wp(20)},
              ]}
            /> */}
          </View>
        ))}
      </View>
    </View>
  );
};

export const TileComponent = (props) => {
  return (
    <TouchableHighlight
      onPress={() => {
        props.onPressTile ? props.onPressTile() : {};
      }}
      underlayColor={"transparent"}>
      <View
        style={[styles.tileContainer, props.leftTile && {marginRight: wp(19)}]}>
        <Text style={[styles.blackSmallFont, {height: hp(65)}]}>
          {props.data.topText}
        </Text>
        <Text style={[styles.blackSmallFont]}>{props.data.bottomText}</Text>
      </View>
    </TouchableHighlight>
  );
};

export const TaskListComponent = (props) => {
  return (
    <View style={[styles.flexDirectionRow, styles.tasksListContainer]}>
      <View style={styles.timeLineStyle} />
      <View style={styles.todayTaskContainer}>
        <Text style={[styles.upcomingClassText, {height: hp(123)}]}>
          {"29/07/20\n9am- 10.15am"}
        </Text>
        <Text style={[styles.blackSmallFont, {paddingTop: hp(12)}]}>
          75mins
        </Text>
      </View>
      <View style={{width: wp(166)}}>
        <Text style={[styles.upcomingClassText, {height: hp(123)}]}>
          {"Organising a discursive essay.\nEnglish"}
        </Text>
        <Text style={[styles.blackSmallFont, {paddingTop: hp(12)}]}>
          Harriet Earl
        </Text>
      </View>
    </View>
  );
};

export const SchoolTaskListComponent = (props) => {
  return (
    <View style={[styles.flexDirectionRow, styles.tasksListContainer]}>
      <View style={[styles.timeLineStyle]} />
      <View style={{paddingLeft: wp(21)}}>
        <View style={styles.flexDirectionRow}>
          <View style={styles.flexOne}>
            <Text style={[styles.upcomingClassText]}>{"9am- 10.15am"}</Text>
            <Text style={[styles.upcomingClassText]}>{"Maths"}</Text>
          </View>
          {props.isBreak && (
            <Image
              source={Images.Break}
              style={styles.breakIcon}
              resizeMode={"contain"}
            />
          )}
        </View>
        {!props.isBreak ? (
          <View style={[styles.flexDirectionRow, styles.flexOne]}>
            <View style={styles.flexOne}>
              <Text style={[styles.blackSmallFont, {paddingTop: hp(13)}]}>
                Classroom
              </Text>
              <Text style={[styles.blackSmallFont]}>3B</Text>
            </View>
            <View style={styles.flexOne}>
              <Text style={[styles.blackSmallFont, {paddingTop: hp(13)}]}>
                Teacher
              </Text>
              <Text style={[styles.blackSmallFont]}>Mrs M Smith</Text>
            </View>
          </View>
        ) : (
          <View style={{padding: hp(44)}} />
        )}

        <View style={[styles.totalTimeBar, {width: wp(331)}]}>
          <View
            style={[
              styles.completionBar,
              {borderColor: ColorConstant.SKY_BLUE, width: wp(120)},
            ]}
          />
        </View>
      </View>
    </View>
  );
};
