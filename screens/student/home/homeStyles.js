import {StyleSheet} from "react-native";
import {ColorConstant} from "../../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../../utils/ResponsiveUI";
import {AppVariable} from "../../../constants/AppVariable";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bkcolor: {
    backgroundColor: "#F7F7F7",
  },
  flatListCoatiner: {
    paddingHorizontal: wp(10),
  },
  tutorContainer: {
    flexDirection: "row",
    paddingHorizontal: wp(20),
    justifyContent: "space-between",
    marginVertical: hp(45),
  },
  tutorText: {
    fontWeight: "500",
    fontSize: hp(35),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  seeAllText: {
    color: ColorConstant.SKY_BLUE,
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
});
