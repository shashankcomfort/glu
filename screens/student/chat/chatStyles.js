import {StyleSheet} from "react-native";
import {ColorConstant} from "../../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../../utils/ResponsiveUI";
import {AppVariable} from "../../../constants/AppVariable";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstant.WHITE,
  },

  msgText: {
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    fontWeight: "700",
    marginVertical: hp(25),
  },

  newMsgContainer: {
    marginTop: hp(95),
    flexDirection: "row",
    marginBottom: wp(20),
    paddingHorizontal: wp(22),
  },
  onlineView: {
    marginTop: hp(35),
    backgroundColor: ColorConstant.GREEN,
    borderRadius: 50,
    height: 10,
    width: 10,
  },
});
