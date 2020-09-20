import React, {useState} from "react";
import {Dimensions, Text, TouchableHighlight, View} from "react-native";
import Carousel from "react-native-snap-carousel";
import {heightToDp as hp, widthToDp as wp} from "../../../utils/ResponsiveUI";
import {ProfileComponent} from "../../../components";
import {TaskListComponent, TileComponent, UpcomingClasses} from "./Components";
import styles from "./StudentDashboardStyle";
import {getCurrentTime, getDatePostFix, getDay, getMonth} from "./Utils";
const sliderWidth = Dimensions.get("window").width;

export const SelfOnboarding = (props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
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

  const moveToPrevClass = () => {
    props.navigation.navigate("previousClasses");
  };

  const onPressProfile = () => {
    props.navigation.navigate("studentProfile");
  };

  return (
    <>
      <View style={{marginHorizontal: wp(31), marginTop: hp(44)}}>
        <View>
          <Carousel
            layout={"stack"}
            autoplay={true}
            loop={true}
            autoplayInterval={5000}
            data={[1, 2, 3, 4]}
            renderItem={({item, index}) => (
              <UpcomingClasses activeIndex={carouselIndex} />
            )}
            sliderWidth={sliderWidth - wp(62)}
            itemWidth={sliderWidth - wp(62)}
            onSnapToItem={(index) => setCarouselIndex(index)}
          />
        </View>

        <View style={styles.tileListContainer}>
          <TileComponent
            data={{
              topText: "Previous \nClasses",
              bottomText: "Purchased \n57",
            }}
            onPressTile={() => moveToPrevClass()}
            leftTile
          />
          <TileComponent
            data={{
              topText: "Whiteboard",
              bottomText: "Try out what the class will be like.",
            }}
          />
        </View>

        <View style={styles.schedularContainer}>
          <View style={styles.flexDirectionRow}>
            <View style={{width: wp(208)}}>
              <Text style={styles.todayText}>{getTimeText()}</Text>
            </View>
            <View style={[styles.flexOne, {alignItems: "flex-end"}]}>
              <Text style={styles.seeAllText}>Calendar</Text>
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
          <TileComponent
            data={{
              topText: "Wallet",
              bottomText: "Balance\nAED320",
            }}
            leftTile
          />
        </View>
      </View>

      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={() => onPressProfile()}>
        <View style={styles.profileCotainer}>
          <ProfileComponent />
        </View>
      </TouchableHighlight>

      <View style={{marginHorizontal: wp(31), marginTop: hp(79)}}>
        <View style={styles.flexDirectionRow}>
          <Text style={[styles.upcomingClassText, styles.flexOne]}>
            Your Day
          </Text>
          <Text style={[styles.upcomingClassText]}>{getCurrentTime()}</Text>
        </View>
        <TaskListComponent />
        <TaskListComponent />
        <TaskListComponent />
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
