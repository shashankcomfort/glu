import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: wp(8),
  },
  pic: {
    width: wp(70),
    height: hp(80),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(280),
  },
  nameTxt: {
    marginLeft: wp(15),
    fontWeight: "600",
    color: "#222",
    fontSize: wp(18),
    width: wp(200),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgTxt: {
    fontWeight: "400",
    color: ColorConstant.GREY,
    fontSize: wp(18),
    marginLeft: wp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  lastSeenTxt: {
    marginTop: hp(10),
    fontWeight: "400",
    color: ColorConstant.GREY,
    fontSize: wp(18),
    marginLeft: wp(15),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  onlineUser: {
    width: wp(90),
    height: hp(100),
  },
  onlineView: {
    marginTop: hp(8),
    backgroundColor: ColorConstant.GREEN,
    borderRadius: 50,
    height: hp(10),
    width: wp(8),
    marginRight: wp(10),
  },
});
