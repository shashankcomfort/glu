import React, {useState, useEffect} from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {AppVariable, ColorConstant} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import AsyncStorage from "@react-native-community/async-storage";
import {CHILD_DETAIl} from "../../utils/ApiEndPoint";
import {get, del} from "../../utils/ApiCalls";

const ChildList = (props) => {
  const {userType} = props.route.params;
  const [childList, setChildList] = useState([]);
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
      getChildDetail(userDetailValue);
      setUserDetail(userDetailValue);
    } catch (e) {
      // error reading value
    }
  };

  const getChildDetail = (detail) => {
    let token = detail.access_token;
    console.log(token);
    let header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    };
    let url = CHILD_DETAIl;
    get(url, header).then((getChildDetailResponse) => {
      console.log(getChildDetailResponse);
      console.log(JSON.stringify(getChildDetailResponse));
      if (getChildDetailResponse.success) {
        if (getChildDetailResponse.data.length > 0) {
          setChildList(getChildDetailResponse.data);
        } else {
          props.navigation.navigate("addChild", {userType: userType});
        }
      } else {
      }
    });
  };

  const onDeleteChildDetail = (childId) => {
    let header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: userDetail.access_token,
    };
    let url = CHILD_DETAIl + "/" + childId;
    del(url, header).then((onDeleteChildDetailResponse) => {
      console.log(onDeleteChildDetailResponse);
      if (onDeleteChildDetailResponse.success) {
        Alert.alert("Message", onDeleteChildDetailResponse.message);
        getChildDetail(userDetail);
      } else {
      }
    });
  };

  const onEditChildDetail = (childDetail) => {
    props.navigation.navigate("editChild", {
      userType: userType,
      childData: childDetail,
    });
  };

  const onClickAddMore = () => {
    props.navigation.navigate("addChild", {userType: userType});
  };

  const onClickNext = () => {
    if (childList.length > 0) {
      props.navigation.navigate("sendOtp", {userType: userType});
    } else {
      Alert.alert("Message", "Add your child detail.");
    }
  };

  const renderChildRow = (data) => {
    const {item, index} = data;
    return (
      <React.Fragment key={index}>
        <View style={styles.educationHeader}>
          <Text style={styles.educationText}>{"Child " + (index + 1)}</Text>
          <View style={styles.editDeleteRow}>
            <TouchableOpacity
              onPress={() => {
                onEditChildDetail(item);
              }}
              style={styles.editEducation}>
              <Text style={styles.editText}>{"Edit"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onDeleteChildDetail(item.studentId);
              }}>
              <Text style={styles.editText}>{"Delete"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.educationBody}>
          <Text style={styles.educationBodyText}>
            {item.Student !== null
              ? item.Student.firstName + " " + item.Student.lastName
              : ""}
          </Text>
          <Text style={styles.educationBodyText}>
            {item.Student !== null
              ? item.Student.User !== null
                ? item.Student.User.email
                : ""
              : ""}
          </Text>
          <Text style={styles.educationBodyText}>
            {item.Student !== null ? item.Student.phoneNumber : ""}
          </Text>
        </View>
      </React.Fragment>
    );
  };

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
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
          <View style={styles.flatListHead} />
          <FlatList
            data={childList}
            renderItem={renderChildRow}
            extraData={childList}
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
    maxWidth: wp(125),
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

export default ChildList;
