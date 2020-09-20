import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  tutorContainer: {
    flexDirection: "row",
    paddingHorizontal: wp(20),
    justifyContent: "space-between",
    marginVertical: hp(45),
  },
  tutorText: {
    fontWeight: "700",
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  seeAllText: {
    color: ColorConstant.SKY_BLUE,
    fontSize: hp(18),
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(20),
  },
  dateText: {
    color: "#000",
    fontSize: hp(25),
    fontWeight: "700",
    width: wp(150),
    marginLeft: 0,
    marginBottom: wp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  minText: {
    color: "#000",
    fontSize: hp(18),
    fontWeight: "500",
    width: wp(150),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  leftBorder: {
    borderLeftWidth: 1.3,
    marginLeft: wp(18),
    marginVertical: hp(12),
    borderLeftColor: "#0000001A",
  },
});
