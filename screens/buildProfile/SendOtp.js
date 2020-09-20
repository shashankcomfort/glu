import {Picker} from "@react-native-community/picker";
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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {AppVariable, ColorConstant} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import AsyncStorage from "@react-native-community/async-storage";
import {ADD_PHONE} from "../../utils/ApiEndPoint";
import {post} from "../../utils/ApiCalls";
import {objectValidation} from "../../utils/FormValidation";

const SendOtp = (props) => {
  const {userType} = props.route.params;
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [userDetail, setUserDetail] = useState();
  const [validationResponse, setValidationResponse] = useState(null);

  const onPressBack = () => {
    props.navigation.goBack();
  };

  const onSignIn = () => {
    props.navigation.navigate("login");
  };

  const onClickNext = () => {
    props.navigation.navigate("verifyOtp", {userType: userType});
  };

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

  useEffect(() => {
    getData();
  }, []);

  const onSendOtp = () => {
    var formBody = {
      phone: {value: phone, isRequired: true, isMobile: true},
      countryCode: {value: countryCode, isRequired: true, isMobile: false},
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
          countryCode.split("/")[1] +
          " (" +
          phone.slice(0, 3) +
          ") " +
          phone.slice(3, 6) +
          "-" +
          phone.slice(6, 10),
      };
      console.log("body: ", body);
      let url = ADD_PHONE;
      post(url, JSON.stringify(body), header).then((onSendOtpResponse) => {
        console.log(onSendOtpResponse);
        if (onSendOtpResponse.success) {
          let phoneNumber = phone;
          let code = countryCode.split("/")[1];
          setPhone("");
          setCountryCode("");
          setValidationResponse(null);
          Alert.alert("Message", onSendOtpResponse.message);
          props.navigation.navigate("verifyOtp", {
            userType: userType,
            phone: phoneNumber,
            countryCode: code,
          });
        } else {
          Alert.alert("Message", onSendOtpResponse.message);
          setValidationResponse(null);
        }
      });
    }
  }, [validationResponse]);

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
            <Text style={styles.headerText}>{"Mobile Number"}</Text>
          </View>
          <View style={styles.phoneInputContainer}>
            <View style={styles.countryCodePickerContainer}>
              <Picker
                selectedValue={countryCode}
                style={styles.countryCodePicker}
                onValueChange={(itemValue, itemIndex) =>
                  setCountryCode(itemValue)
                }>
                <Picker.Item
                  label="Country Code"
                  value=""
                  color={ColorConstant.GREY}
                />
                <Picker.Item
                  label="IN/+91"
                  value="IN/+91"
                  color={ColorConstant.BLACK}
                />
                <Picker.Item
                  label="US/+12"
                  value="US/+12"
                  color={ColorConstant.BLACK}
                />
                <Picker.Item
                  label="UK/+34"
                  value="UK/+34"
                  color={ColorConstant.BLACK}
                />
              </Picker>
            </View>
            <TextInput
              onChange={(e) => {
                setPhone(e.nativeEvent.text);
              }}
              value={phone}
              keyboardType={"numeric"}
              style={styles.phoneInput}
            />
          </View>
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.phone.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <TouchableOpacity
            onPress={() => {
              onSendOtp();
            }}
            style={styles.addButton}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Send code"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onClickNext();
            }}
            style={styles.nextButton}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Next"}
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
  phoneInputContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(8),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countryCodePickerContainer: {
    width: "30%",
    borderBottomColor: ColorConstant.LIGHT_GREY,
    borderBottomWidth: hp(1),
    paddingVertical: hp(2),
  },
  countryCodePicker: {
    flex: 1,
    height: hp(25),
  },
  phoneInput: {
    width: "65%",
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    borderBottomColor: ColorConstant.LIGHT_GREY,
    borderBottomWidth: hp(1),
    paddingVertical: hp(2),
    color: ColorConstant.BLACK,
    textAlign: "left",
  },
  addButton: {
    marginHorizontal: wp(31),
    marginTop: hp(50.5),
    width: wp(166),
    height: hp(40),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    marginHorizontal: wp(31),
    marginTop: hp(359),
    marginBottom: hp(50),
    height: hp(40),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    marginHorizontal: wp(31),
  },
  errorText: {
    color: ColorConstant.MAROON_RED,
    fontSize: hp(12),
  },
});

export default SendOtp;
