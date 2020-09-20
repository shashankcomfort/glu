import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import {AppVariable, ColorConstant} from "../../constants";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";
import {TEACHER_EXPERIENCE} from "../../utils/ApiEndPoint";
import {get, del} from "../../utils/ApiCalls";

const ExperienceList = (props) => {
  const {userType} = props.route.params;
  const [experienceList, setExperienceList] = useState([]);
  const [userDetail, setUserDetail] = useState("");

  const onPressBack = () => {
    props.navigation.goBack();
  };

  const onSignIn = () => {
    props.navigation.navigate("login");
  };

  useEffect(() => {
    getData();
  }, [props]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(
        AppVariable.ASYNC_USER_DETAIL,
      );
      const userDetailValue = jsonValue != null ? JSON.parse(jsonValue) : null;
      getExperienceDetail(userDetailValue);
      setUserDetail(userDetailValue);
    } catch (e) {
      // error reading value
    }
  };

  const getExperienceDetail = (detail) => {
    let token = detail.access_token;
    console.log(token);
    let header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    };
    let url = TEACHER_EXPERIENCE;
    get(url, header).then((getExperienceDetailResponse) => {
      console.log(getExperienceDetailResponse);
      console.log(JSON.stringify(getExperienceDetailResponse));
      if (getExperienceDetailResponse.success) {
        if (getExperienceDetailResponse.data.length > 0) {
          setExperienceList(getExperienceDetailResponse.data);
        } else {
          props.navigation.navigate("addExperience", {userType: userType});
        }
      } else {
      }
    });
  };

  const onDeleteExperienceDetail = (experienceId) => {
    let header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: userDetail.access_token,
    };
    let url = TEACHER_EXPERIENCE + "/" + experienceId;
    del(url, header).then((onDeleteExperienceDetailResponse) => {
      console.log(onDeleteExperienceDetailResponse);
      if (onDeleteExperienceDetailResponse.success) {
        getExperienceDetail(userDetail);
        Alert.alert("Message", onDeleteExperienceDetailResponse.message);
      } else {
      }
    });
  };

  const onEditExperienceDetail = (experienceDetail) => {
    props.navigation.navigate("editExperience", {
      userType: userType,
      experienceData: experienceDetail,
    });
  };

  const onClickAddMore = () => {
    props.navigation.navigate("addExperience", {userType: userType});
  };

  const onClickNext = () => {
    if (experienceList.length > 0) {
      props.navigation.navigate("skill", {userType: userType});
    } else {
      Alert.alert("Message", "Add your child detail.");
    }
  };

  const renderExperienceRow = (data) => {
    const {item, index} = data;
    return (
      <React.Fragment key={index}>
        <View style={styles.educationHeader}>
          <Text style={styles.educationText}>
            {"Experience " + (index + 1)}
          </Text>
          <View style={styles.editDeleteRow}>
            <TouchableOpacity
              onPress={() => {
                onEditExperienceDetail(item);
              }}
              style={styles.editEducation}>
              <Text style={styles.editText}>{"Edit"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onDeleteExperienceDetail(item.experienceId);
              }}>
              <Text style={styles.editText}>{"Delete"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.educationBody}>
          <Text style={styles.educationBodyText}>
            {item.Experience !== null ? item.Experience.workPlace : ""}
          </Text>
          <Text style={styles.educationBodyText}>
            {item.Experience !== null ? item.Experience.position : ""}
          </Text>
          <Text style={styles.educationBodyText}>
            {item.Experience !== null ? item.Experience.department : ""}
          </Text>
        </View>
      </React.Fragment>
    );
  };

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
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
          <View style={styles.flatListHead}></View>
          <FlatList
            data={experienceList}
            renderItem={renderExperienceRow}
            extraData={experienceList}
            ItemSeparatorComponent={renderItemSeparator}
          />
          <TouchableOpacity
            onPress={() => {
              onClickAddMore();
            }}
            style={styles.addMoreButton}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Add more"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.nextButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              onClickNext();
            }}
            style={[styles.nextButton, {marginTop: hp(50)}]}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Next"}
            </Text>
          </TouchableOpacity>
        </View>
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
  editDeleteRow: {
    flexDirection: "row",
  },
  editEducation: {
    marginRight: wp(20),
  },
  editText: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.GREY,
    textAlign: "right",
  },
  educationBody: {
    marginHorizontal: wp(31),
    marginTop: hp(24),
  },
  educationBodyText: {
    fontSize: hp(25),
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
  nextButtonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: ColorConstant.WHITE,
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

export default ExperienceList;
