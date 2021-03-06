import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
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
import {
  STUDENT_QUALIFICATION,
  TEACHER_QUALIFICATION,
} from "../../utils/ApiEndPoint";
import {post} from "../../utils/ApiCalls";
import {objectValidation} from "../../utils/FormValidation";

const AddEducation = (props) => {
  const {userType} = props.route.params;
  const [school, setSchool] = useState("");
  const [qualification, setQualification] = useState("");
  const [studyField, setStudyField] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [userDetail, setUserDetail] = useState("");
  const [validationResponse, setValidationResponse] = useState(null);

  const showStartDateSelection = () => {
    setShowStartDate(true);
  };

  const onStartDateConfirm = (evt, dt) => {
    if (evt.type == "set") {
      console.log(dt);
      let value1 = moment(dt).format("YYYY-MM-DD");
      console.log(value1);
      setShowStartDate(false);
      setStartDate(value1);
    } else if (evt.type == "dismissed") {
      setShowStartDate(false);
    }
  };

  const showEndDateSelection = () => {
    setShowEndDate(true);
  };

  const onEndDateConfirm = (evt, dt) => {
    if (evt.type == "set") {
      console.log(dt);
      let value1 = moment(dt).format("YYYY-MM-DD");
      console.log(value1);
      setShowEndDate(false);
      setEndDate(value1);
    } else if (evt.type == "dismissed") {
      setShowEndDate(false);
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

  const onAddEducationDetail = () => {
    var formBody = {
      school: {
        value: school,
        isRequired: true,
        isCharOnly: false,
        isEmail: false,
      },
      qualification: {
        value: qualification,
        isRequired: true,
        isCharOnly: false,
        isEmail: false,
      },
      studyField: {
        value: studyField,
        isRequired: true,
        isCharOnly: false,
        isEmail: false,
      },
      startDate: {
        value: startDate,
        isRequired: true,
        isCharOnly: false,
        isEmail: false,
      },
      endDate: {
        value: endDate,
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
        school: school,
        qualification: qualification,
        startDate: startDate,
        endDate: endDate,
        fieldOfStudy: studyField,
      };
      console.log("body: ", body);
      let url =
        userType == AppVariable.USER_TYPE_STUDENT
          ? STUDENT_QUALIFICATION
          : TEACHER_QUALIFICATION;
      post(url, JSON.stringify(body), header).then((onAddEducationResponse) => {
        console.log(onAddEducationResponse);
        console.log(userType);
        if (onAddEducationResponse.success) {
          setSchool("");
          setQualification("");
          setStartDate("");
          setEndDate("");
          setStudyField("");
          setValidationResponse(null);
          Alert.alert("Message", onAddEducationResponse.message);
          props.navigation.navigate("educationList", {userType: userType});
        } else {
          Alert.alert("Message", onAddEducationResponse.message);
          setValidationResponse(null);
        }
      });
    }
  }, [validationResponse]);

  const onClickNext = () => {
    if (userType == AppVariable.USER_TYPE_STUDENT) {
      props.navigation.navigate("sendOtp", {userType: userType});
    } else if (userType == AppVariable.USER_TYPE_TEACHER) {
      props.navigation.navigate("addExperience", {userType: userType});
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
                (userType == AppVariable.USER_TYPE_STUDENT ||
                userType == AppVariable.USER_TYPE_GUARDIAN
                  ? "3/4"
                  : "4/8") +
                " Education"}
            </Text>
          </View>
          <View style={styles.schoolContainer}>
            <Text style={styles.headerText}>{"School/College"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setSchool(e.nativeEvent.text);
            }}
            value={school}
            style={styles.textInput}
          />
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.school.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>{"Qualification"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setQualification(e.nativeEvent.text);
            }}
            value={qualification}
            style={styles.textInput}
          />
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.qualification.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>{"Field of Study"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setStudyField(e.nativeEvent.text);
            }}
            value={studyField}
            style={styles.textInput}
          />
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.studyField.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>{"Start Date"}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              showStartDateSelection();
            }}
            style={styles.dateContainer}>
            <Text style={styles.dateText}>{startDate}</Text>
          </TouchableOpacity>
          {showStartDate && (
            <DateTimePicker
              maximumDate={new Date()}
              value={new Date()}
              mode={"date"}
              display="default"
              onChange={onStartDateConfirm}
            />
          )}
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.startDate.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>{"End Date"}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              showEndDateSelection();
            }}
            style={styles.dateContainer}>
            <Text style={styles.dateText}>{endDate}</Text>
          </TouchableOpacity>
          {showEndDate && (
            <DateTimePicker
              maximumDate={new Date()}
              value={new Date()}
              mode={"date"}
              display="default"
              onChange={onEndDateConfirm}
            />
          )}
          {validationResponse != null &&
            validationResponse !== true &&
            validationResponse.endDate.isRequired && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {"This field is required."}
                </Text>
              </View>
            )}
          <TouchableOpacity
            onPress={() => {
              onAddEducationDetail();
            }}
            style={styles.addButton}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Add"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onClickNext();
            }}
            style={[styles.nextButton, {marginTop: hp(77)}]}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {userType == AppVariable.USER_TYPE_TEACHER
                ? "Next"
                : "Skip / Next"}
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
  flatListHead: {
    height: hp(43),
  },
  educationHeader: {
    marginHorizontal: wp(31),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  educationText: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
    textAlign: "left",
  },
  itemSeparator: {
    marginHorizontal: wp(31),
    marginTop: hp(24.5),
    marginBottom: hp(29.5),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(0.5),
  },
  schoolContainer: {
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
  dateContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(8),
    borderBottomColor: ColorConstant.LIGHT_GREY,
    borderBottomWidth: hp(1),
    paddingVertical: hp(2),
  },
  dateText: {
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
    textAlign: "left",
  },
  addMoreButton: {
    marginHorizontal: wp(31),
    marginTop: hp(50.5),
    marginBottom: hp(140),
    width: wp(166),
    height: hp(40),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(1),
    justifyContent: "center",
    alignItems: "center",
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

export default AddEducation;
