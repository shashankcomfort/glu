import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable, ColorConstant} from "../../constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";
import {ABOUT_TEACHER_DETAIL} from "../../utils/ApiEndPoint";
import {put} from "../../utils/ApiCalls";
import {objectValidation} from "../../utils/FormValidation";

const AboutYou = (props) => {
  const {userType} = props.route.params;
  const [bio1, setBio1] = useState("");
  const [bio2, setBio2] = useState("");
  const [bio3, setBio3] = useState("");
  const [bio4, setBio4] = useState("");
  const [bio5, setBio5] = useState("");
  const [bio6, setBio6] = useState("");
  const [userDetail, setUserDetail] = useState("");
  const [validationResponse, setValidationResponse] = useState(null);

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
      const userValue = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserDetail(userValue);
    } catch (e) {
      // error reading value
    }
  };

  const onClickNext = () => {
    console.log(userType);
    let bio =
      bio1.trim() +
      bio2.trim() +
      bio3.trim() +
      bio4.trim() +
      bio5.trim() +
      bio6.trim();
    var formBody = {
      bio: {value: bio, isRequired: true},
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
        bio:
          bio1.trim() +
          "\n" +
          bio2.trim() +
          "\n" +
          bio3.trim() +
          "\n" +
          bio4.trim() +
          "\n" +
          bio5.trim() +
          "\n" +
          bio6.trim(),
      };
      console.log("body: ", body);
      let url = ABOUT_TEACHER_DETAIL + "/" + userDetail.userRoleId;
      put(url, header, JSON.stringify(body)).then((onAboutYouResponse) => {
        console.log(onAboutYouResponse);
        if (onAboutYouResponse.success) {
          setBio1("");
          setBio2("");
          setBio3("");
          setBio4("");
          setBio5("");
          setBio6("");
          setValidationResponse(null);
          Alert.alert("Message", onAboutYouResponse.message);
          props.navigation.navigate("addEducation", {userType: userType});
        } else {
          Alert.alert("Message", onAboutYouResponse.message);
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
            <Text style={styles.bodyText}>{"Step 3/8 About you"}</Text>
          </View>
          <View style={styles.bioContainer}>
            <Text style={styles.headerText}>{"Bio"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setBio1(e.nativeEvent.text);
            }}
            value={bio1}
            style={styles.textInput}
          />
          <TextInput
            onChange={(e) => {
              setBio2(e.nativeEvent.text);
            }}
            value={bio2}
            style={styles.textInput}
          />
          <TextInput
            onChange={(e) => {
              setBio3(e.nativeEvent.text);
            }}
            value={bio3}
            style={styles.textInput}
          />
          <TextInput
            onChange={(e) => {
              setBio4(e.nativeEvent.text);
            }}
            value={bio4}
            style={styles.textInput}
          />
          <TextInput
            onChange={(e) => {
              setBio5(e.nativeEvent.text);
            }}
            value={bio5}
            style={styles.textInput}
          />
          <TextInput
            onChange={(e) => {
              setBio6(e.nativeEvent.text);
            }}
            value={bio6}
            style={styles.textInput}
          />
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.bio.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{"Enter your bio detail."}</Text>
              </View>
            )}
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
  bioContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(43),
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
  nextButton: {
    marginHorizontal: wp(31),
    marginTop: hp(190),
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

export default AboutYou;
