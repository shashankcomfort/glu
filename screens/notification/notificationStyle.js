import {StyleSheet} from "react-native";
import {ColorConstant, AppVariable} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstant.WHITE,
    paddingHorizontal: wp(31),
  },
  crossIconContainer: {paddingTop: hp(47)},
  alignToFlexEnd: {flex: 1, alignItems: "flex-end"},
  moreIcon: {
    width: wp(21),
    height: wp(21),
  },
  header: {
    marginTop: hp(74),
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    marginBottom: hp(15),
  },
  clearAllContainer: {
    paddingTop: hp(74),
    paddingBottom: hp(47),
  },
  separatorStyle: {
    borderBottomColor: ColorConstant.GREY2,
    borderBottomWidth: hp(1),
  },
  notificationTitle: {
    fontSize: hp(18),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  notificationDetails: {
    fontSize: hp(18),
    color: ColorConstant.GREY,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  notiActionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: hp(18),
  },
  notiAction: {
    padding: hp(12),
    width: wp(166),
    borderColor: ColorConstant.GREY2,
    borderWidth: hp(1),
    alignItems: "center",
    justifyContent: "center",
  },
  notiActionText: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
  },
  notiSince: {
    fontSize: hp(18),
    color: ColorConstant.GREY,
    paddingTop: hp(14),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  clearAllText: {
    fontSize: hp(12),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_MONO_REGULAR,
  },
});
