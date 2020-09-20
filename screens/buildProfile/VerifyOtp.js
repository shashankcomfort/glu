import React, {useRef, useState, useEffect} from "react";
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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {AppVariable, ColorConstant} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import AsyncStorage from "@react-native-community/async-storage";
import {VERIFY_PHONE_NUMBER} from "../../utils/ApiEndPoint";
import {post} from "../../utils/ApiCalls";
import {objectValidation} from "../../utils/FormValidation";

const VerifyOtp = (props) => {
  const {userType, phone, countryCode} = props.route.params;
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const [userDetail, setUserDetail] = useState("");
  const [validationResponse, setValidationResponse] = useState(null);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const onChangeOtp1 = (val) => {
    setOtp1(val);
    if (val.length == 1) {
      ref2.current.focus();
    }
  };
  const onChangeOtp2 = (val) => {
    setOtp2(val);
    if (val.length == 1) {
      ref3.current.focus();
    } else if (val.length == 0) {
      ref1.current.focus();
    }
  };

  const onChangeOtp3 = (val) => {
    setOtp3(val);
    if (val.length == 1) {
      ref4.current.focus();
    } else if (val.length == 0) {
      ref2.current.focus();
    }
  };

  const onChangeOtp4 = (val) => {
    setOtp4(val);
    if (val.length == 1) {
      ref5.current.focus();
    } else if (val.length == 0) {
      ref3.current.focus();
    }
  };

  const onChangeOtp5 = (val) => {
    setOtp5(val);
    if (val.length == 1) {
      ref6.current.focus();
    } else if (val.length == 0) {
      ref4.current.focus();
    }
  };

  const onChangeOtp6 = (val) => {
    setOtp6(val);
    if (val.length == 0) {
      ref5.current.focus();
    }
  };

  const onPressBack = () => {
    props.navigation.goBack();
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
      const detail = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserDetail(detail);
    } catch (e) {
      // error reading value
    }
  };

  const onVerifyOtp = () => {
    var formBody = {
      otp1: {value: otp1, isRequired: true},
      otp2: {value: otp2, isRequired: true},
      otp3: {value: otp3, isRequired: true},
      otp4: {value: otp4, isRequired: true},
      otp5: {value: otp5, isRequired: true},
      otp6: {value: otp6, isRequired: true},
    };
    var validationResult = objectValidation(formBody);
    console.log(validationResult);
    setValidationResponse(validationResult);
  };

  useEffect(() => {
    if (validationResponse !== true) {
      console.log("Some Error!!!");
    } else if (validationResponse == true) {
      let header = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: userDetail.access_token,
      };
      let body = {
        phoneNumber:
          countryCode +
          " (" +
          phone.substr(0, 3) +
          ") " +
          phone.substr(3, 3) +
          "-" +
          phone.substr(6, 4),
        code: otp1 + otp2 + otp3 + otp4 + otp5 + otp6,
      };
      console.log("body: ", body);
      let url = VERIFY_PHONE_NUMBER;
      post(url, JSON.stringify(body), header).then((onSendOtpResponse) => {
        console.log(onSendOtpResponse);
        if (onSendOtpResponse.success) {
          setOtp1("");
          setOtp2("");
          setOtp3("");
          setOtp4("");
          setOtp5("");
          setOtp6("");
          setValidationResponse(null);
          Alert.alert("Message", onSendOtpResponse.message);
          props.navigation.navigate("registrationSuccess", {
            userType: userType,
          });
        } else {
          Alert.alert("Message", onSendOtpResponse.message);
          setValidationResponse(null);
        }
      });
    }
  }, [validationResponse]);

  const onResendOtp = () => {
    let header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: userDetail.access_token,
    };
    let body = {
      phoneNumber:
        countryCode +
        " (" +
        phone.substr(0, 3) +
        ") " +
        phone.substr(3, 3) +
        "-" +
        phone.substr(6, 4),
    };
    console.log("body: ", body);
    let url = API_END_POINT.ADD_PHONE;
    ApiCall.post(url, JSON.stringify(body), header).then(
      (onSendOtpResponse) => {
        console.log(onSendOtpResponse);
        if (onSendOtpResponse.success) {
          Alert.alert("Message", onSendOtpResponse.message);
        } else {
          Alert.alert("Message", onSendOtpResponse.message);
        }
      },
    );
  };

  const onChangeNumber = () => {
    props.navigation.navigate("sendOtp", {userType: userType});
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
                onPressBack();
              }}
              hitSlop={{left: 50, right: 50, top: 50, bottom: 50}}>
              <FontAwesome
                name="angle-left"
                size={hp(24)}
                color={ColorConstant.BLACK}
              />
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
              {"Step " +
                (userType == AppVariable.USER_TYPE_STUDENT ||
                userType == AppVariable.USER_TYPE_GUARDIAN
                  ? "4/4"
                  : "8/8") +
                " Verification"}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>{"Verification Code"}</Text>
          </View>
          <View style={styles.otpContainer}>
            <TextInput
              onChange={(e) => {
                onChangeOtp1(e.nativeEvent.text);
              }}
              value={otp1}
              ref={ref1}
              keyboardType={"numeric"}
              maxLength={1}
              style={styles.otpInput}
            />
            <TextInput
              onChange={(e) => {
                onChangeOtp2(e.nativeEvent.text);
              }}
              value={otp2}
              ref={ref2}
              keyboardType={"numeric"}
              maxLength={1}
              style={styles.otpInput}
            />
            <TextInput
              onChange={(e) => {
                onChangeOtp3(e.nativeEvent.text);
              }}
              value={otp3}
              ref={ref3}
              keyboardType={"numeric"}
              maxLength={1}
              style={styles.otpInput}
            />
            <TextInput
              onChange={(e) => {
                onChangeOtp4(e.nativeEvent.text);
              }}
              value={otp4}
              ref={ref4}
              keyboardType={"numeric"}
              maxLength={1}
              style={styles.otpInput}
            />
            <TextInput
              onChange={(e) => {
                onChangeOtp5(e.nativeEvent.text);
              }}
              value={otp5}
              ref={ref5}
              keyboardType={"numeric"}
              maxLength={1}
              style={styles.otpInput}
            />
            <TextInput
              onChange={(e) => {
                onChangeOtp6(e.nativeEvent.text);
              }}
              value={otp6}
              ref={ref6}
              keyboardType={"numeric"}
              maxLength={1}
              style={styles.otpInput}
            />
          </View>
          <View style={styles.sendOtpContainer}>
            <Text style={styles.sendOtpText}>
              {"We sent a code to " +
                countryCode +
                phone.slice(0, 4) +
                " " +
                phone.slice(4, 7) +
                " " +
                phone.slice(7, 10)}
            </Text>
          </View>
          <View style={styles.resendContainer}>
            <Text style={styles.sendOtpText}>{"Didn’t receive a code "}</Text>
            <TouchableOpacity
              onPress={() => {
                onResendOtp();
              }}>
              <Text style={styles.resendText}>{"Resend"}</Text>
            </TouchableOpacity>
            <Text style={styles.sendOtpText}>{" or "}</Text>
            <TouchableOpacity
              onPress={() => {
                onChangeNumber();
              }}>
              <Text style={styles.resendText}>{"Change number"}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              onVerifyOtp();
            }}
            style={styles.nextButton}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Complete"}
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
  body: {
    marginHorizontal: wp(31),
    marginTop: hp(70),
  },
  bodyText: {
    fontSize: hp(25),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "left",
    maxWidth: wp(120),
    lineHeight: hp(30),
  },
  inputContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(43),
  },
  otpContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(8),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otpInput: {
    width: "13%",
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    borderBottomColor: ColorConstant.LIGHT_GREY,
    borderBottomWidth: hp(1),
    paddingVertical: hp(2),
    color: ColorConstant.BLACK,
    textAlign: "center",
  },
  sendOtpContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(47.5),
  },
  sendOtpText: {
    fontSize: hp(12),
    fontFamily: AppVariable.FONT_CIRCULARXX_MONO_REGULAR,
    color: ColorConstant.BLACK,
    textAlign: "left",
  },
  resendContainer: {
    marginHorizontal: wp(31),
    flexDirection: "row",
  },
  resendText: {
    fontSize: hp(12),
    fontFamily: AppVariable.FONT_CIRCULARXX_MONO_REGULAR,
    color: ColorConstant.GREY,
    textAlign: "left",
    lineHeight: hp(16),
  },
  nextButton: {
    marginHorizontal: wp(31),
    marginTop: hp(369),
    marginBottom: hp(50),
    height: hp(40),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VerifyOtp;
