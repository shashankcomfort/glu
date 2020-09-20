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
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-community/async-storage";
import {TEACHER_SKILL} from "../../utils/ApiEndPoint";
import {get, post, del} from "../../utils/ApiCalls";

const Skill = (props) => {
  const {userType} = props.route.params;
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [skillError, setSkillError] = useState(false);
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
      const userDetailValue = jsonValue != null ? JSON.parse(jsonValue) : null;
      getSkillList(userDetailValue);
      setUserDetail(userDetailValue);
    } catch (e) {
      // error reading value
    }
  };

  const getSkillList = (detail) => {
    let token = detail.access_token;
    console.log(token);
    let header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    };
    let url = TEACHER_SKILL;
    get(url, header).then((getSkillListResponse) => {
      console.log(getSkillListResponse);
      console.log(JSON.stringify(getSkillListResponse));
      if (getSkillListResponse.success) {
        setSkillList(getSkillListResponse.data[0].Skills);
      } else {
      }
    });
  };

  const onAddSkill = () => {
    if (skill.trim() !== "") {
      let header = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: userDetail.access_token,
      };
      let url = TEACHER_SKILL;
      let body = [{skillName: skill}];
      post(url, JSON.stringify(body), header).then((onAddSkillResponse) => {
        console.log(onAddSkillResponse);
        if (onAddSkillResponse.success) {
          getSkillList(userDetail);
          Alert.alert("Message", onAddSkillResponse.message);
          setSkill("");
          setSkillError(false);
        } else {
          Alert.alert("Message", onAddSkillResponse.message);
        }
      });
    } else {
      setSkillError(true);
    }
  };

  const onDeleteSkill = (skillId) => {
    let header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: userDetail.access_token,
    };
    let url = TEACHER_SKILL + "/" + skillId;
    del(url, header).then((onDeleteSkillResponse) => {
      console.log(onDeleteSkillResponse);
      if (onDeleteSkillResponse.success) {
        getSkillList(userDetail);
        Alert.alert("Message", onDeleteSkillResponse.message);
      } else {
        Alert.alert("Message", onDeleteSkillResponse.message);
      }
    });
  };

  const onClickNext = () => {
    if (skillList.length > 0) {
      props.navigation.navigate("uploadDocument", {userType: userType});
    } else {
      Alert.alert("Message", "Add your skills");
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
            <Text style={styles.bodyText}>{"Step 6/8 Your skills"}</Text>
          </View>
          <View style={styles.addNewContainer}>
            <Text style={styles.headerText}>{"Add new"}</Text>
          </View>
          <View style={styles.skillInputContainer}>
            <TextInput
              onChange={(e) => {
                setSkill(e.nativeEvent.text);
              }}
              value={skill}
              style={styles.textInput}
            />
            <TouchableOpacity
              onPress={() => {
                onAddSkill();
              }}
              style={styles.skillAddButton}>
              <Text style={styles.addButtonText}>{"ADD"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.skillContainer}>
            {skillList.map((val, id) => {
              return (
                <View key={id} style={styles.skillItem}>
                  <TouchableOpacity
                    onPress={() => {
                      onDeleteSkill(val.id);
                    }}
                    style={styles.skillDeleteButton}>
                    <AntDesign
                      name="close"
                      size={hp(18)}
                      color={ColorConstant.BLACK}
                    />
                  </TouchableOpacity>
                  <Text style={styles.skillItemText}>{val.skillName}</Text>
                </View>
              );
            })}
          </View>
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
  addNewContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(43),
  },
  skillInputContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(8),
    borderBottomColor: ColorConstant.LIGHT_GREY,
    borderBottomWidth: hp(1),
    flexDirection: "row",
  },
  textInput: {
    width: "85%",
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    paddingVertical: hp(2),
    color: ColorConstant.BLACK,
    textAlign: "left",
  },
  skillAddButton: {
    width: "15%",
    paddingVertical: hp(2),
    alignItems: "flex-end",
  },
  addButtonText: {
    fontSize: hp(25),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "right",
  },
  skillContainer: {
    marginHorizontal: wp(26),
    marginTop: hp(45.51),
    flexDirection: "row",
    flexWrap: "wrap",
    minHeight: hp(354),
  },
  skillItem: {
    marginHorizontal: wp(5),
    marginVertical: hp(5),
    paddingHorizontal: wp(10),
    paddingTop: hp(12),
    paddingBottom: hp(8),
    borderWidth: hp(1),
    borderColor: ColorConstant.LIGHT_GREY,
  },
  skillItemText: {
    fontSize: hp(20),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
    textAlign: "left",
    marginRight: wp(20),
    marginTop: -hp(12),
  },
  skillDeleteButton: {
    width: "100%",
    alignItems: "flex-end",
  },
  nextButton: {
    marginHorizontal: wp(31),
    marginTop: hp(50),
    marginBottom: hp(50),
    height: hp(40),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Skill;
