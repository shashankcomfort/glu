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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {AppVariable, ColorConstant} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import AsyncStorage from "@react-native-community/async-storage";
import {CHILD_DETAIl} from "../../utils/ApiEndPoint";
import {put} from "../../utils/ApiCalls";
import {objectValidation} from "../../utils/FormValidation";

const EditChild = (props) => {
  const {userType, childData} = props.route.params;
  const [firstName, setFirstName] = useState(
    childData.Student !== null ? childData.Student.firstName : "",
  );
  const [lastName, setLastName] = useState(
    childData.Student !== null ? childData.Student.lastName : "",
  );
  const [email, setEmail] = useState(
    childData.Student !== null
      ? childData.Student.User !== null
        ? childData.Student.User.email
        : ""
      : "",
  );
  const [countryCode, setCountryCode] = useState(
    childData.Student !== null ? childData.Student.phoneNumber.slice(0, 3) : "",
  );
  const [phone, setPhone] = useState(
    childData.Student !== null
      ? childData.Student.phoneNumber.slice(3, 13)
      : "",
  );
  const [location, setLocation] = useState(
    childData.Student !== null ? childData.Student.location : "",
  );
  const [validationResponse, setValidationResponse] = useState(null);
  const [userDetail, setUserDetail] = useState("");

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

  const onUpdateChildDetail = () => {
    var formBody = {
      firstName: {
        value: firstName,
        isRequired: true,
        isCharOnly: false,
        isEmail: false,
      },
      lastName: {
        value: lastName,
        isRequired: true,
        isCharOnly: false,
        isEmail: false,
      },
      email: {
        value: email,
        isRequired: true,
        isCharOnly: false,
        isEmail: true,
      },
      location: {
        value: location,
        isRequired: true,
        isCharOnly: false,
        isEmail: false,
      },
      countryCode: {
        value: countryCode,
        isRequired: true,
        isCharOnly: false,
        isEmail: false,
      },
      phone: {
        value: phone,
        isRequired: true,
        isCharOnly: false,
        isEmail: false,
      },
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
        firstName: firstName,
        lastName: lastName,
        phoneNumber: countryCode + phone,
        location: location,
        email: email,
      };
      console.log("body: ", body);
      let url = CHILD_DETAIl + "/" + childData.studentId;
      put(url, header, JSON.stringify(body)).then((onUpdateChildResponse) => {
        console.log(onUpdateChildResponse);
        console.log(userType);
        if (onUpdateChildResponse.success) {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setLocation("");
          setValidationResponse(null);
          Alert.alert("Message", onUpdateChildResponse.message);
          props.navigation.navigate("childList", {userType: userType});
        } else {
          Alert.alert("Message", onUpdateChildResponse.message);
          setValidationResponse(null);
        }
      });
    }
  }, [validationResponse]);

  const onClickNext = () => {
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
            <Text style={styles.bodyText}>{"Step 3/4 Your children"}</Text>
          </View>
          <View style={styles.firstNameContainer}>
            <Text style={styles.headerText}>{"First Name"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setFirstName(e.nativeEvent.text);
            }}
            value={firstName}
            style={styles.textInput}
          />
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.firstName.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>{"Last Name"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setLastName(e.nativeEvent.text);
            }}
            value={lastName}
            style={styles.textInput}
          />
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.lastName.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <View style={styles.inputContainer}>
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
                  value="+91"
                  color={ColorConstant.BLACK}
                />
                <Picker.Item
                  label="US/+12"
                  value="+12"
                  color={ColorConstant.BLACK}
                />
                <Picker.Item
                  label="UK/+34"
                  value="+34"
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
              maxLength={10}
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
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>{"Location"}</Text>
          </View>
          <View style={styles.locationInputContainer}>
            <TextInput
              onChange={(e) => {
                setLocation(e.nativeEvent.text);
              }}
              value={location}
              style={styles.locationInput}
            />
            <View style={styles.locationContainer}>
              <MaterialIcons
                name="location-searching"
                size={hp(25)}
                color={ColorConstant.LIGHT_GREY}
              />
            </View>
          </View>
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.location.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <TouchableOpacity
            onPress={() => {
              onUpdateChildDetail();
            }}
            style={styles.addButton}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Update"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onClickNext();
            }}
            style={[styles.nextButton, {marginTop: hp(77)}]}>
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
    maxWidth: wp(125),
    lineHeight: hp(30),
  },
  firstNameContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(43),
  },
  inputContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(29.5),
  },
  textInput: {
    marginHorizontal: wp(31),
    marginTop: hp(8),
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    borderBottomColor: ColorConstant.LIGHT_GREY,
    borderBottomWidth: hp(1),
    paddingVertical: hp(2),
    color: ColorConstant.BLACK,
    textAlign: "left",
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
  locationInputContainer: {
    marginHorizontal: wp(31),
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: ColorConstant.LIGHT_GREY,
    borderBottomWidth: hp(1),
  },
  locationInput: {
    width: "90%",
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    paddingVertical: hp(2),
    color: ColorConstant.BLACK,
    textAlign: "left",
  },
  locationContainer: {
    width: "10%",
    paddingVertical: hp(2),
    alignItems: "flex-end",
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

export default EditChild;
