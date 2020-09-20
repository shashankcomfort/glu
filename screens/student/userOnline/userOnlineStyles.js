import {StyleSheet} from "react-native";
import {ColorConstant} from "../../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../../utils/ResponsiveUI";
import {AppVariable} from "../../../constants/AppVariable";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 22,
    marginTop: 70,
  },
  msgText: {
    fontSize: hp(25),
    marginVertical: hp(50),
    fontWeight: "700",
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  descripationText: {
    fontSize: hp(45),
    marginVertical: 15,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  newMsgText: {
    fontSize: hp(30),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    marginLeft: 7,
    color: ColorConstant.SKY_BLUE,
  },
  rightIcon: {
    width: wp(25),
    height: hp(25),
    marginTop: hp(58),
  },
  newMsgContainer: {
    flexDirection: "row",
    marginBottom: wp(20),
  },
});
