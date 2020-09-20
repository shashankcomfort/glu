import {StyleSheet} from "react-native";
import {ColorConstant} from "../../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../../utils/ResponsiveUI";
import {AppVariable} from "../../../constants/AppVariable";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: ColorConstant.WHITE,
  },

  flatListCoatiner: {
    paddingHorizontal: wp(10),
  },
  tutorContainer: {
    paddingHorizontal: wp(22),
    marginTop: hp(90),
  },
  tutorText: {
    marginVertical: hp(15),
    marginBottom: 20,
    fontWeight: "500",
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    fontWeight: "700",
    color: ColorConstant.BLACK,
  },
  desText: {
    marginVertical: hp(35),
    fontWeight: "700",
    color: ColorConstant.BLACK,
    fontSize: hp(35),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
});
