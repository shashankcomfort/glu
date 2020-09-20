import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  flatListCoatiner: {
    paddingHorizontal: wp(10),
  },
  bkcolor: {
    backgroundColor: "#F7F7F7",
  },
  tutorContainer: {
    flexDirection: "row",
    paddingHorizontal: wp(20),
    justifyContent: "space-between",
    marginVertical: 45,
  },
  tutorText: {
    fontWeight: "700",
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  seeAllText: {
    color: ColorConstant.SKY_BLUE,
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
});
