import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: wp(20),
    justifyContent: "space-between",
    marginVertical: hp(15),
  },
  image: {
    width: wp(180),
    height: hp(180),
    marginLeft: wp(10),
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
  subjectText: {
    fontSize: hp(18),
    marginLeft: wp(12),
    fontWeight: "700",
    width: wp(140),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  rattingText: {
    marginLeft: wp(12),
    fontSize: hp(18),
    fontWeight: "700",
    width: wp(140),
    color: ColorConstant.GREY,
    marginBottom: wp(30),
  },
});
