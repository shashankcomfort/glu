import React, {useState} from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {AppVariable, ColorConstant} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";

const RegisterStep1 = (props) => {
  const optionArr = ["I am a Student", "I am a Parent", "I am a Tutor"];
  const userType = [
    AppVariable.USER_TYPE_STUDENT,
    AppVariable.USER_TYPE_GUARDIAN,
    AppVariable.USER_TYPE_TEACHER,
  ];
  const [selectedOption, setSelectedOption] = useState(0);

  const onPressBack = () => {
    props.navigation.goBack();
  };

  const onSignIn = () => {};

  const onClickNext = () => {
    props.navigation.navigate("registerStep2", {
      userType: userType[selectedOption],
    });
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
                (selectedOption == 0 || selectedOption == 1 ? "1/4" : "1/8") +
                " Who are you"}
            </Text>
          </View>
          <View style={styles.optionContainer}>
            {optionArr.map((val, id) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedOption(id);
                  }}
                  key={id}
                  style={styles.optionBody}>
                  <View>
                    {selectedOption == id ? (
                      <AntDesign
                        name="checkcircleo"
                        color={ColorConstant.BLACK}
                        size={hp(17)}
                      />
                    ) : (
                      <FontAwesome
                        name="circle-thin"
                        color={ColorConstant.LIGHT_GREY}
                        size={hp(20)}
                      />
                    )}
                  </View>
                  <Text style={styles.optionText}>{val}</Text>
                </TouchableOpacity>
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
          <View style={styles.bottom} />
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
    marginTop: hp(71.77),
  },
  bodyText: {
    fontSize: hp(25),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "left",
    maxWidth: wp(120),
  },
  optionContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(45),
  },
  optionBody: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    marginLeft: wp(10),
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
    textAlign: "left",
  },
  nextButton: {
    marginHorizontal: wp(31),
    marginTop: hp(440),
    height: hp(40),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    height: hp(10),
  },
});

export default RegisterStep1;
