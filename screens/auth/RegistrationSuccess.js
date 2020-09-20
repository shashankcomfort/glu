import React, {useState, useEffect} from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {AppVariable, ColorConstant} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import AsyncStorage from "@react-native-community/async-storage";
import {USER_PROFILE} from "../../utils/ApiEndPoint";
import {get} from "../../utils/ApiCalls";

const RegistrationSuccess = (props) => {
  const [firstName, setFirstName] = useState("");

  const onSignUp = () => {
    props.navigation.navigate("registerStep1");
  };

  const onSignIn = () => {
    props.navigation.navigate("login");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(
        AppVariable.ASYNC_USER_DETAIL,
      );
      const userValue = jsonValue != null ? JSON.parse(jsonValue) : null;
      getUserProfile(userValue);
    } catch (e) {
      // error reading value
    }
  };

  const getUserProfile = (data) => {
    let header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: data.access_token,
    };
    let url = USER_PROFILE;
    get(url, header).then((getTeacherProfileResponse) => {
      console.log(getTeacherProfileResponse);
      console.log(JSON.stringify(getTeacherProfileResponse));
      if (getTeacherProfileResponse.success) {
        setFirstName(getTeacherProfileResponse.data.firstName);
      }
    });
  };

  return (
    <>
      <StatusBar
        backgroundColor={ColorConstant.SKY_BLUE}
        barStyle={"light-content"}
      />
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps={"always"}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                onSignUp();
              }}>
              <Text style={styles.headerText}>{"Sign Up"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onSignIn();
              }}>
              <Text style={styles.headerText}>{"Sign In"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              {"Thank You " + firstName + "!"}
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstant.SKY_BLUE,
  },
  header: {
    marginHorizontal: wp(31),
    marginTop: hp(50),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: hp(18),
    color: ColorConstant.WHITE,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "left",
  },
  body: {
    marginHorizontal: wp(31),
    marginTop: hp(324),
  },
  bodyText: {
    fontSize: hp(60),
    color: ColorConstant.WHITE,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "left",
  },
});

export default RegistrationSuccess;
