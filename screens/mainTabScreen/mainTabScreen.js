import {createStackNavigator} from "@react-navigation/stack";
import React, {useState} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {Images} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import {PreviousClasses} from "../student/previousClasses";
import {StudentProfile} from "../student/studentProfile";
import {ExtraCurricular} from "../student/extraCurricular";
import {Recommended} from "../student/recommended";
import {ExtraCurricularDetail} from "../student/extraCurricularDetail";

import Dashboard from "../student/dashboard";
import Favorite from "../student/favourite";
// Student Panel bottom Nav
import Home from "../student/home";
import Message from "../student/message";
import Search from "../student/search";

const Stack = createStackNavigator();

const MainTabScreen = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  let tabs = [
    {
      icon: Images.Home_Nav,
      activeIcon: Images.Home_Nav,
    },
    {
      icon: Images.Dashboard_Nav,
      activeIcon: Images.Dashboard_Nav,
    },
    {
      icon: Images.Favourites_Nav,
      activeIcon: Images.Favourites_Nav,
    },
    {
      icon: Images.Search_Nav,
      activeIcon: Images.Search_Nav,
    },
    {
      icon: Images.Messages_Nav,
      activeIcon: Images.Messages_Nav,
    },
  ];

  const _showSelectedScreen = () => {
    if (activeTab === 0) {
      return <Home {...props} />;
    } else if (activeTab === 1) {
      return (
        <Stack.Navigator initialRouteName={"Dashboard"} headerMode="none">
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="previousClasses" component={PreviousClasses} />
          <Stack.Screen name="studentProfile" component={StudentProfile} />
          <Stack.Screen name="recommended" component={Recommended} />
          <Stack.Screen name="extraCurricular" component={ExtraCurricular} />
          <Stack.Screen
            name="extraCurricularDetail"
            component={ExtraCurricularDetail}
          />
        </Stack.Navigator>
      );
    } else if (activeTab === 2) {
      return <Favorite {...props} />;
    } else if (activeTab === 3) {
      return <Search {...props} />;
    } else if (activeTab === 4) {
      return <Message {...props} />;
    }
  };

  return (
    <View style={styles.mainContainer}>
      {_showSelectedScreen()}
      <View style={styles.footerContainer}>
        {tabs.map((item, index) => {
          return (
            <View key={index} style={styles.footerItemContainer}>
              <TouchableOpacity
                style={styles.centerFooterButton}
                onPress={() => setActiveTab(index)}>
                <Image
                  source={index === activeTab ? item.activeIcon : item.icon}
                  style={[styles.footerImage]}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  footerContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: wp(25),
    borderTopRightRadius: wp(25),
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowColor: "#0000001A",
    elevation: 10,
    shadowOpacity: 0.5,
  },
  footerItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: hp(25),
    paddingBottom: hp(37),
  },
  centerFooterButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerImage: {
    width: hp(23),
    height: hp(23),
  },
});

export default MainTabScreen;
