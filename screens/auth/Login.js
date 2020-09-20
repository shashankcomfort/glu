import React, {useState, useEffect} from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {AppVariable, ColorConstant} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import AsyncStorage from "@react-native-community/async-storage";
import {USER_LOGIN} from "../../utils/ApiEndPoint";
import {post} from "../../utils/ApiCalls";
import {objectValidation} from "../../utils/FormValidation";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signed, setSigned] = useState(false);
  const [validationResponse, setValidationResponse] = useState(null);

  const onSignUp = () => {
    props.navigation.navigate("registerStep1");
  };

  const onLogin = () => {
    var formBody = {
      email: {value: email, isRequired: true, isCharOnly: true, isEmail: false},
      password: {
        value: password,
        isRequired: true,
        isCharOnly: false,
        isEmail: false,
      },
    };

    var validationResult = objectValidation(formBody);
    console.log("Validation result:... ", validationResult);
    setValidationResponse(validationResult);
  };

  useEffect(() => {
    if (validationResponse !== true) {
      console.log("Some Error!!!");
    } else if (validationResponse == true) {
      let header = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      let body = {
        username: email.trim(),
        password: password.trim(),
      };
      console.log("body: ", body);
      let url = USER_LOGIN;
      post(url, JSON.stringify(body), header).then((onLoginResponse) => {
        console.log(onLoginResponse);
        if (onLoginResponse.success) {
          storeData(onLoginResponse.data);
          setEmail("");
          setPassword("");
          setValidationResponse(null);
          Alert.alert("Message", onLoginResponse.message);
          props.navigation.navigate("rootHome");
          // if (onLoginResponse.data.role == AppConstant.USER_TYPE_STUDENT) {
          //   console.log("");
          // } else if (onLoginResponse.data.role == AppConstant.USER_TYPE_TEACHER) {
          //   console.log("");
          // } else if (onLoginResponse.data.role == AppConstant.USER_TYPE_GUARDIAN) {
          //     console.log("");
          // } else {

          // }
        } else {
          Alert.alert("Message", onLoginResponse.message);
          setValidationResponse(null);
        }
      });
    }
  }, [validationResponse]);

  const storeData = async (value) => {
    console.log(value);
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(AppVariable.ASYNC_USER_DETAIL, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const onFrogetPassword = () => {
    props.navigation.navigate("forgetPassword");
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
          <TouchableOpacity
            onPress={() => {
              onSignUp();
            }}
            style={styles.header}>
            <Text style={styles.headerText}>{"Sign Up"}</Text>
          </TouchableOpacity>
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
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.email.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <View style={styles.passwordContainer}>
            <Text style={styles.headerText}>{"Password"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setPassword(e.nativeEvent.text);
            }}
            value={password}
            secureTextEntry={true}
            style={styles.textInput}
          />
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.password.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <TouchableOpacity
            onPress={() => {
              // onLogin();
              props.navigation.navigate("rootHome");
            }}
            style={styles.loginButton}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Sign In"}
            </Text>
          </TouchableOpacity>
          <View style={styles.signedContainer}>
            <TouchableOpacity
              onPress={() => {
                setSigned(!signed);
              }}
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
              {!signed ? (
                <FontAwesome
                  name="circle-thin"
                  color={ColorConstant.LIGHT_GREY}
                  size={hp(20)}
                />
              ) : (
                <AntDesign
                  name="checkcircleo"
                  color={ColorConstant.BLACK}
                  size={hp(17)}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.signedText}>{"Keep me signed in"}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              onFrogetPassword();
            }}
            style={styles.bottomContainer}>
            <Text style={styles.bottomText}>{"Forgot my password"}</Text>
          </TouchableOpacity>
          <View style={styles.bottom}></View>
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
  },
  headerText: {
    fontSize: hp(18),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "left",
  },
  emailContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(220),
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
  passwordContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(33),
  },
  loginButton: {
    marginHorizontal: wp(31),
    marginTop: hp(50.5),
    height: hp(40),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
  signedContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(26),
    flexDirection: "row",
    alignItems: "center",
  },
  signedText: {
    marginLeft: wp(10),
    fontSize: hp(12),
    fontFamily: AppVariable.FONT_CIRCULARXX_MONO_REGULAR,
    color: ColorConstant.GREY,
    textAlign: "left",
  },
  bottomContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(200),
  },
  bottomText: {
    fontSize: hp(12),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_MONO_REGULAR,
    textAlign: "left",
  },
  bottom: {
    height: hp(10),
  },
  errorContainer: {
    marginHorizontal: wp(31),
  },
  errorText: {
    color: ColorConstant.MAROON_RED,
    fontSize: hp(12),
  },
});

export default Login;
