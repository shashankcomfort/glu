import {StyleSheet} from "react-native";
import {ColorConstant} from "../../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../../utils/ResponsiveUI";
import {AppVariable} from "../../../constants/AppVariable";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: wp(22),
    marginTop: hp(90),
  },
  msgText: {
    marginVertical: hp(35),
    fontWeight: "700",
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  descripationText: {
    fontWeight: "700",
    fontSize: hp(35),
    marginVertical: hp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  newMsgText: {
    fontSize: hp(30),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    marginLeft: wp(7),
    color: ColorConstant.SKY_BLUE,
    marginVertical: hp(25),
  },
  rightIcon: {
    width: wp(30),
    height: hp(30),
    marginTop: hp(32),
  },
  newMsgContainer: {
    flexDirection: "row",
    marginBottom: wp(20),
  },
});
