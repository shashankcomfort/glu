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

const ResetPassword = (props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSignUp = () => {};

  const onSignIn = () => {
    props.navigation.navigate("login");
  };

  const onResetClick = () => {
    props.navigation.navigate("changePasswordSuccess");
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
            <Text style={styles.bodyHeaderText}>{"Make New Password"}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              {
                "Enter a password that you’ll be able to remember. Make sure it contains one uppercase and one special character."
              }
            </Text>
          </View>
          <View style={styles.passwordContainer}>
            <Text style={styles.headerText}>{"New password"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setPassword(e.nativeEvent.text);
            }}
            value={password}
            secureTextEntry={true}
            style={styles.textInput}
          />
          <View style={styles.confirmPasswordContainer}>
            <Text style={styles.headerText}>{"Confirm password"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setConfirmPassword(e.nativeEvent.text);
            }}
            value={confirmPassword}
            secureTextEntry={true}
            style={styles.textInput}
          />
          <TouchableOpacity
            onPress={() => {
              onResetClick();
            }}
            style={styles.resetButton}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Reset"}
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
    marginTop: hp(186),
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
  passwordContainer: {
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
  confirmPasswordContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(29.5),
  },
  resetButton: {
    marginHorizontal: wp(31),
    marginTop: hp(50.5),
    height: hp(40),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResetPassword;
