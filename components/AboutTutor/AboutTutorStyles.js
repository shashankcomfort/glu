import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  container: {
    paddingHorizontal: wp(20),
    backgroundColor: "#F7F7F7",
  },
  tutorText: {
    fontWeight: "700",
    fontSize: hp(25),
    marginVertical: hp(25),
    marginTop: hp(50),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  image: {
    width: wp(350),
    height: hp(250),
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp(10),
  },
  schoolContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 0,
  },
  dateText: {
    color: "#000",
    fontSize: hp(18),
    fontWeight: "500",
    width: wp(150),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  minText: {
    color: "#000",
    fontSize: hp(25),
    fontWeight: "500",
    width: wp(150),
    marginBottom: wp(10),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  verticalBorder: {
    borderBottomColor: "#0000001A",
    borderBottomWidth: 1,
    width: "40%",
  },
  leftBorder: {
    borderLeftWidth: 1.3,
    marginVertical: hp(12),
    borderLeftColor: "#0000001A",
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
    padding: 8,
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
});
