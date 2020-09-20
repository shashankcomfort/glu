import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  headerBar: {
    flexDirection: "row",
    paddingHorizontal: wp(20),
    justifyContent: "space-between",
    marginVertical: hp(15),
  },
  nameText: {
    color: "#fff",
    marginVertical: hp(28),
    fontSize: hp(35),
    marginBottom: hp(45),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  timeText: {
    color: "#fff",
    fontSize: hp(18),
    lineHeight: wp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  descripationsText: {
    color: "#fff",
    fontSize: hp(35),
    width: wp(280),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
});
