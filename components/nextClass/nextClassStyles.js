import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  classContainer: {
    flexDirection: "row",
    paddingHorizontal: wp(20),
    justifyContent: "space-between",
    marginVertical: hp(15),
    marginTop: hp(50),
  },
  nextText: {
    color: ColorConstant.BLACK,
    fontSize: hp(25),
    fontWeight: "700",
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  image: {
    width: wp(145),
    height: hp(130),
  },

  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp(15),
    paddingHorizontal: wp(20),
  },
  dateText: {
    color: "#000",
    fontSize: hp(25),
    fontWeight: "700",
    width: wp(150),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  minText: {
    color: "#000",
    fontSize: hp(18),
    fontWeight: "600",
    width: wp(150),
    marginBottom: wp(30),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
});
