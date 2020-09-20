import {StyleSheet} from "react-native";
import * as AppVariable from "../../constants/AppVariable";
import * as ColorConstant from "../../constants/ColorConstant";
import {heightToDp as hp} from "../../utils/ResponsiveUI";

export default StyleSheet.create({
  flexDirectionRow: {flexDirection: "row"},
  profileText: {
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
    flex: 1,
  },
  flexOne: {flex: 1},
  profileDetailText: {
    fontSize: hp(34),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  editText: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    paddingTop: hp(20),
    color: ColorConstant.GREY,
  },
});
