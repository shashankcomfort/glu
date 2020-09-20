import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  flatListCoatiner: {
    paddingHorizontal: 20,
  },
  tutorContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 45,
  },
  tutorText: {
    fontWeight: "700",
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  seeAllText: {
    color: ColorConstant.GREY,
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  leftBorder: {
    borderLeftWidth: 1.3,
    marginVertical: 12,
    borderLeftColor: "#0000001A",
  },
  icon: {
    width: wp(20),
    height: hp(20),
    tintColor: ColorConstant.BLACK,
    marginLeft: 18,
    marginTop: 6,
  },
  textIcon: {
    width: wp(15),
    height: hp(15),
    tintColor: ColorConstant.BLACK,
    marginLeft: 18,
    marginTop: 6,
  },
  reviewText: {
    fontSize: hp(18),
    marginTop: hp(10),
    marginLeft: wp(12),
    fontWeight: "700",
    width: wp(150),
    color: ColorConstant.GREY,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  nameText: {
    fontSize: hp(18),
    marginTop: hp(10),
    marginLeft: wp(12),
    fontWeight: "700",
    width: wp(140),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  rattingsText: {
    fontWeight: "500",
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    marginLeft: wp(8),
  },
});
