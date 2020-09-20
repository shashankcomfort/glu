import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {AppVariable} from "../../constants/AppVariable";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: wp(20),
    justifyContent: "space-between",
    marginVertical: hp(15),
  },
  termConditonText: {
    color: ColorConstant.BLACK,
    fontSize: hp(12),
    width: wp(200),
    fontFamily: AppVariable.FONT_CIRCULARXX_MONO_REGULAR,
  },
  gluText: {
    color: ColorConstant.BLACK,
    fontSize: hp(12),
    width: wp(80),
  },
});
