import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  classContainer: {
    flexDirection: "row",
    paddingHorizontal: wp(20),
    justifyContent: "space-between",
    marginVertical: 0,
    marginTop: hp(80),
  },
  nextText: {
    color: ColorConstant.WHITE,
    fontSize: hp(25),
    fontWeight: "700",
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  image: {
    width: wp(180),
    height: hp(220),
  },

  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(25),
    paddingHorizontal: wp(20),
  },
  dateText: {
    color: ColorConstant.WHITE,
    fontSize: hp(35),
    fontWeight: "600",
    width: wp(180),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    marginBottom: wp(20),
    lineHeight: hp(35),
  },
  icon: {
    width: wp(20),
    height: hp(20),
    tintColor: ColorConstant.WHITE,
    marginLeft: 15,
    alignSelf: "center",
  },
  iconTextConatiner: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  favouriteText: {
    color: ColorConstant.WHITE,
    width: wp(280),
    marginLeft: 8,
    fontSize: hp(18),
    fontWeight: "600",
    marginVertical: 8,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  descripationContainer: {
    paddingHorizontal: 15,
    marginVertical: 50,
  },
  descripationText: {
    color: ColorConstant.BLACK,
    fontSize: hp(25),
    alignSelf: "center",
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    fontWeight: "700",
  },
  limtedText: {
    color: ColorConstant.BLACK,
    fontSize: hp(18),
    marginVertical: 20,
    fontWeight: "700",
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  subjectText: {
    color: ColorConstant.BLACK,
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    fontWeight: "700",
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textInputStyle: {
    width: wp(340),
    borderBottomWidth: 1,
    borderBottomColor: "#9E9E9E",
    marginBottom: 20,
  },
  rightIcon: {
    width: wp(15),
    height: hp(15),
    tintColor: ColorConstant.BLACK,
    marginTop: 25,
    marginRight: 25,
  },
  smallTextInput: {
    width: wp(147),
    borderBottomWidth: 1,
    borderBottomColor: "#9E9E9E",
    marginBottom: 20,
  },
  addClassButton: {
    marginVertical: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    alignSelf: "center",
    marginBottom: 25,
    borderColor: ColorConstant.LIGHT_GREY,
  },
  adeText: {
    color: ColorConstant.GREY,
    fontWeight: "bold",
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  btnContainer: {
    width: wp(340),
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: hp(18),
    fontWeight: "700",
    textAlign: "center",
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
});
