import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  leftBorder: {
    marginLeft: wp(20),
    borderLeftWidth: 1.3,
    marginVertical: hp(10),
    borderLeftColor: "#0000001A",
  },
  row: {
    flexDirection: "row",
    marginBottom: wp(10),
  },
  pic: {
    width: wp(60),
    height: hp(70),
    marginTop: 6,
    marginLeft: wp(15),
  },
  fullpic: {
    width: wp(290),
    height: hp(193),
    marginTop: hp(6),
    marginLeft: wp(20),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(280),
  },
  descripationText: {
    fontWeight: "700",
    paddingHorizontal: wp(22),
    fontSize: hp(18),
    // marginVertical: hp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  nameTxt: {
    marginLeft: wp(15),
    fontWeight: "700",
    color: "#222",
    fontSize: wp(18),
    width: wp(230),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },

  lastSeenTxt: {
    marginTop: hp(10),
    fontWeight: "400",
    color: ColorConstant.GREY,
    fontSize: wp(18),
    marginLeft: wp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  timeText: {
    marginTop: hp(10),
    fontWeight: "400",
    color: ColorConstant.GREY,
    fontSize: wp(18),
    marginLeft: 20,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  sendText: {
    fontWeight: "400",
    color: ColorConstant.GREY,
    fontSize: wp(18),
    marginRight: wp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  textInputStyle: {
    alignSelf: "flex-end",
    width: wp(260),
    borderBottomWidth: 1,
    borderBottomColor: "#9E9E9E",
    marginBottom: wp(90),
  },
  SectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: ColorConstant.WHITE,
    borderBottomWidth: 0.5,
    borderColor: "#000",
    height: hp(55),
    borderRadius: 5,
    margin: wp(10),
  },
  icon: {
    width: wp(25),
    height: hp(25),
    tintColor: ColorConstant.BLACK,
    marginLeft: wp(15),
    alignSelf: "center",
  },
  darkModeIcon: {
    width: wp(22),
    height: hp(22),
    tintColor: ColorConstant.BLACK,
    marginVertical: hp(15),
    marginLeft: wp(25),
  },
});
