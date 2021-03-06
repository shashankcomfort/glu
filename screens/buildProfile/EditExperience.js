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
import {AppVariable, ColorConstant} from "../../constants";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import AsyncStorage from "@react-native-community/async-storage";
import {TEACHER_EXPERIENCE} from "../../utils/ApiEndPoint";
import {put} from "../../utils/ApiCalls";
import {objectValidation} from "../../utils/FormValidation";

const EditExperience = (props) => {
  const {userType, experienceData} = props.route.params;
  const [workplace, setWorkplace] = useState(
    experienceData.Experience !== null
      ? experienceData.Experience.workPlace
      : "",
  );
  const [position, setPosition] = useState(
    experienceData.Experience !== null
      ? experienceData.Experience.position
      : "",
  );
  const [department, setDepartment] = useState(
    experienceData.Experience !== null
      ? experienceData.Experience.department
      : "",
  );
  const [startDate, setStartDate] = useState(
    experienceData.Experience !== null
      ? experienceData.Experience.startDate.split("T")[0]
      : "",
  );
  const [endDate, setEndDate] = useState(
    experienceData.Experience !== null
      ? experienceData.Experience.endDate.split("T")[0]
      : "",
  );
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [validationResponse, setValidationResponse] = useState(null);
  const [userDetail, setUserDetail] = useState({});

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

  const onUpdateExperienceDetail = () => {
    var formBody = {
      workplace: {value: workplace, isRequired: true, isCharOnly: false},
      position: {value: position, isRequired: true, isCharOnly: false},
      department: {value: department, isRequired: true, isCharOnly: false},
      startDate: {value: startDate, isRequired: true, isCharOnly: false},
      endDate: {value: endDate, isRequired: true, isCharOnly: false},
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
        workPlace: workplace,
        position: position,
        department: department,
        startDate: startDate,
        endDate: endDate,
        description: "description",
        stillWorking: "false",
      };
      console.log("body: ", body);
      let url = TEACHER_EXPERIENCE + "/" + experienceData.experienceId;
      put(url, header, JSON.stringify(body)).then(
        (onUpdateExperienceDetailResponse) => {
          console.log(onUpdateExperienceDetailResponse);
          if (onUpdateExperienceDetailResponse.success) {
            setWorkplace("");
            setPosition("");
            setStartDate("");
            setEndDate("");
            setDepartment("");
            setValidationResponse(null);
            Alert.alert("Message", onUpdateExperienceDetailResponse.message);
            props.navigation.navigate("experienceList", {userType: userType});
          } else {
            Alert.alert("Message", onUpdateExperienceDetailResponse.message);
            setValidationResponse(null);
          }
        },
      );
    }
  }, [validationResponse]);

  const onClickNext = () => {
    props.navigation.navigate("skill", {userType: userType});
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
            <Text style={styles.bodyText}>{"Step 5/8 Experience"}</Text>
          </View>
          <View style={styles.workplaceContainer}>
            <Text style={styles.headerText}>{"Workplace"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setWorkplace(e.nativeEvent.text);
            }}
            value={workplace}
            style={styles.textInput}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>{"Position"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setPosition(e.nativeEvent.text);
            }}
            value={position}
            style={styles.textInput}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>{"Department"}</Text>
          </View>
          <TextInput
            onChange={(e) => {
              setDepartment(e.nativeEvent.text);
            }}
            value={department}
            style={styles.textInput}
          />
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
          <TouchableOpacity
            onPress={() => {
              onUpdateExperienceDetail();
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
    maxWidth: wp(120),
    lineHeight: hp(30),
  },
  workplaceContainer: {
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
});

export default EditExperience;
