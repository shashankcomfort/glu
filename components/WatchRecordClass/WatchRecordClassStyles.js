import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  container: {
    paddingHorizontal: wp(20),
    alignSelf: "center",
    marginTop: hp(80),
  },
  tutorText: {
    fontWeight: "bold",
    fontSize: hp(25),
    marginVertical: hp(45),
  },
  image: {
    width: wp(350),
    height: hp(350),
    alignSelf: "center",
    marginBottom: wp(25),
  },
  playIcon: {
    width: wp(28),
    height: hp(28),
  },
  icon: {
    width: wp(18),
    height: hp(18),
    tintColor: ColorConstant.BLACK,
  },
  iconTextConatiner: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: wp(25),
  },
  dateText: {
    color: "#000",
    fontSize: hp(35),
    fontWeight: "700",
    width: wp(350),
    marginBottom: wp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  favouriteText: {
    color: ColorConstant.GREY,
    width: wp(280),
    marginLeft: wp(5),
    fontSize: hp(18),
    fontWeight: "600",
  },
  minText: {
    color: "#000",
    fontSize: hp(25),
    fontWeight: "700",
    width: wp(150),
    marginBottom: wp(30),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  descripationContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  descripationText: {
    color: ColorConstant.BLACK,
    fontSize: hp(25),
    alignSelf: "center",
    marginLeft: wp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    fontWeight: "500",
    marginVertical: hp(25),
  },
  leftBorder: {
    borderLeftWidth: 1.3,
    marginVertical: hp(12),
    borderLeftColor: "#0000001A",
    marginLeft: wp(15),
  },
  addClassButton: {
    marginVertical: hp(15),
    borderWidth: 1,
    alignSelf: "center",
    marginBottom: 1,
    borderColor: ColorConstant.LIGHT_GREY,
    marginLeft: wp(15),
  },
  adeText: {
    color: ColorConstant.GREY,
    fontWeight: "700",
    fontSize: hp(20),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  btnContainer: {
    padding: wp(8),
    fontWeight: "700",
    textAlign: "center",
    color: ColorConstant.BLACK,
  },
  skillsText: {
    fontWeight: "700",
    fontSize: hp(18),
    marginLeft: wp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  ResourceText: {
    fontWeight: "700",
    fontSize: hp(25),
    marginLeft: wp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    marginVertical: hp(15),
  },
  textBook: {
    fontWeight: "500",
    fontSize: hp(18),
    marginLeft: wp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  textDownload: {
    fontWeight: "500",
    fontSize: hp(18),
    marginLeft: wp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.GREY,
  },
  playTextContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: wp(15),
  },
  playText: {
    color: ColorConstant.BLACK,
    fontSize: hp(18),
    fontWeight: "600",
  },
  verticalLine: {
    borderBottomWidth: 1.2,
    marginVertical: hp(10),
    width: "90%",
    marginLeft: wp(15),
  },
});
