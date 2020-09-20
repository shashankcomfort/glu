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
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {AppVariable, ColorConstant} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import AsyncStorage from "@react-native-community/async-storage";
import {USER_REGISTER} from "../../utils/ApiEndPoint";
import {post} from "../../utils/ApiCalls";
import {objectValidation} from "../../utils/FormValidation";

const RegisterStep2 = (props) => {
  const {userType} = props.route.params;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [acceptPromotion, setAcceptPromotion] = useState(false);
  const [validationResponse, setValidationResponse] = useState(null);
  const [passError, setPassError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onPressBack = () => {
    props.navigation.goBack();
  };

  const onSignIn = () => {
    props.navigation.navigate("login");
  };

  const onRegister = () => {
    var formBody = {
      firstName: {
        value: firstName,
        isRequired: true,
        isCharOnly: true,
        isEmail: false,
      },
      lastName: {
        value: lastName,
        isRequired: true,
        isCharOnly: true,
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
      password: {
        value: password,
        isRequired: true,
        isCharOnly: false,
        isEmail: false,
      },
      confirmPassword: {
        value: confirmPassword,
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
      if (password === confirmPassword) {
        setPassError(false);
        if (acceptTerm) {
          setTermError(false);
          let header = {
            "Content-Type": "application/json",
            Accept: "application/json",
          };
          let body = {
            firstName: firstName,
            lastName: lastName,
            role: userType,
            location: location,
            password: password,
            gender: "other",
            email: email,
            termsCondition: acceptTerm,
            sendPromotionalOffer: acceptPromotion,
          };
          console.log("body: ", body);
          let url = USER_REGISTER;
          post(url, JSON.stringify(body), header).then((onRegisterResponse) => {
            console.log(onRegisterResponse);
            if (onRegisterResponse.success) {
              storeData(onRegisterResponse.data);
              setFirstName("");
              setLastName("");
              setEmail("");
              setLocation("");
              setPassword("");
              setConfirmPassword("");
              setValidationResponse(null);
              Alert.alert("Message", onRegisterResponse.message);
              if (userType == AppVariable.USER_TYPE_STUDENT) {
                props.navigation.navigate("addEducation", {userType: userType});
              } else if (userType == AppVariable.USER_TYPE_GUARDIAN) {
                props.navigation.navigate("addChild", {userType: userType});
              } else if (userType == AppVariable.USER_TYPE_TEACHER) {
                props.navigation.navigate("aboutYou", {userType: userType});
              }
            } else {
              Alert.alert("Message", onRegisterResponse.message);
              setValidationResponse(null);
            }
          });
        } else {
          setTermError(true);
          setValidationResponse(null);
        }
      } else {
        setPassError(true);
        setValidationResponse(null);
      }
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
                (userType ==
                (AppVariable.USER_TYPE_STUDENT ||
                  AppVariable.USER_TYPE_GUARDIAN)
                  ? "2/4"
                  : "2/8") +
                " Your details"}
            </Text>
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
          {validationResponse != null &&
            validationResponse !== true &&
            !validationResponse.email.isRequired &&
            validationResponse.email.isEmail && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{"Enter a valid email."}</Text>
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
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>{"Password"}</Text>
          </View>
          <View style={styles.locationInputContainer}>
            <TextInput
              onChange={(e) => {
                setPassword(e.nativeEvent.text);
              }}
              value={password}
              secureTextEntry={hidePassword}
              style={styles.locationInput}
            />
            <TouchableOpacity
              onPress={() => {
                setHidePassword(!hidePassword);
              }}
              style={styles.locationContainer}>
              {!hidePassword ? (
                <AntDesign
                  name="eye"
                  size={hp(25)}
                  color={ColorConstant.LIGHT_GREY}
                />
              ) : (
                <Entypo
                  name="eye-with-line"
                  size={hp(25)}
                  color={ColorConstant.LIGHT_GREY}
                />
              )}
            </TouchableOpacity>
          </View>
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.password.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>{"Confirm Password"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setConfirmPassword(e.nativeEvent.text);
            }}
            value={confirmPassword}
            secureTextEntry={hidePassword}
            style={styles.textInput}
          />
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.confirmPassword.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          {passError && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                {"Password and Confirm password should be same."}
              </Text>
            </View>
          )}
          <View style={styles.termContainer}>
            <TouchableOpacity
              onPress={() => {
                setAcceptTerm(!acceptTerm);
              }}
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
              {!acceptTerm ? (
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
            <Text style={styles.termText}>
              {"I accept the Terms and Conditions"}
            </Text>
          </View>
          <View style={styles.promotionContainer}>
            <TouchableOpacity
              onPress={() => {
                setAcceptPromotion(!acceptPromotion);
              }}
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
              {!acceptPromotion ? (
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
            <Text style={styles.promotionText}>
              {"Send me promotional offers and surverys via email or SMS"}
            </Text>
          </View>
          {termError && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                {"Accept the terms and condition."}
              </Text>
            </View>
          )}
          <TouchableOpacity
            onPress={() => {
              onRegister();
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
  termContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(46.5),
    flexDirection: "row",
    alignItems: "flex-start",
  },
  termText: {
    marginLeft: wp(10),
    fontSize: hp(12),
    fontFamily: AppVariable.FONT_CIRCULARXX_MONO_REGULAR,
    color: ColorConstant.GREY,
    textAlign: "left",
  },
  promotionContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(26),
    flexDirection: "row",
    alignItems: "flex-start",
  },
  promotionText: {
    marginLeft: wp(10),
    fontSize: hp(12),
    fontFamily: AppVariable.FONT_CIRCULARXX_MONO_REGULAR,
    color: ColorConstant.GREY,
    maxWidth: wp(220),
    lineHeight: 16,
    textAlign: "left",
  },
  nextButton: {
    marginHorizontal: wp(31),
    marginTop: hp(77),
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

export default RegisterStep2;
