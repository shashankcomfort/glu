import React, {useState} from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {AppVariable, ColorConstant} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";

const ForgetPassword = (props) => {
  const [email, setEmail] = useState("");

  const onSignUp = () => {};

  const onSignIn = () => {
    props.navigation.navigate("login");
  };

  const onPressSend = () => {
    props.navigation.navigate("resetPassword");
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
          <View style={styles.bodyHeader}>
            <Text style={styles.bodyHeaderText}>{"Reset Password"}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              {
                "We will send a link to the email address your account is registered with, so you can reset your password."
              }
            </Text>
          </View>
          <View style={styles.emailContainer}>
            <Text style={styles.headerText}>{"Email Address"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setEmail(e.nativeEvent.text);
            }}
            value={email}
            style={styles.textInput}
          />
          <TouchableOpacity
            onPress={() => {
              onPressSend();
            }}
            style={styles.sendButton}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Send"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstant.WHITE,
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
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "left",
  },
  bodyHeader: {
    marginHorizontal: wp(31),
    marginTop: hp(230),
  },
  bodyHeaderText: {
    fontSize: hp(25),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "left",
  },
  body: {
    marginHorizontal: wp(31),
    marginTop: hp(20),
  },
  bodyText: {
    fontSize: hp(18),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "left",
  },
  emailContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(44),
  },
  textInput: {
    marginHorizontal: wp(30.5),
    marginTop: hp(8),
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    borderBottomColor: ColorConstant.LIGHT_GREY,
    borderBottomWidth: hp(1),
    paddingVertical: hp(2),
    color: ColorConstant.BLACK,
    textAlign: "left",
  },
  sendButton: {
    marginHorizontal: wp(31),
    marginTop: hp(50.5),
    height: hp(40),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ForgetPassword;
