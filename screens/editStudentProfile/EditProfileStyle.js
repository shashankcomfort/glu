import {StyleSheet} from "react-native";
import {ColorConstant, AppVariable} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstant.OFF_WHITE,
  },
  otherDetContainer: {
    backgroundColor: ColorConstant.WHITE,
    paddingHorizontal: wp(31),
    paddingTop: hp(74),
    paddingBottom: hp(159),
    marginTop: hp(76),
  },
  scrollEleContainer: {
    paddingTop: hp(47),
  },
  topViewContainer: {
    marginHorizontal: wp(31),
    paddingBottom: hp(97),
  },
  profileContainer: {paddingHorizontal: wp(31), paddingTop: hp(69)},
  alignToFlexEnd: {flex: 1, alignItems: "flex-end"},
  burgerIconContainer: {position: "absolute", top: hp(47), right: wp(31)},
  moreIcon: {
    width: wp(30),
    height: hp(18),
  },

  bioText: {
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
  },
  flexOne: {flex: 1},
  blackSmallFont: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
  },
  flexDirectionRow: {flexDirection: "row", alignItems: "center"},

  educationHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  educationText: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
    flex: 1,
  },
  editDeleteRow: {
    flexDirection: "row",
  },
  editEducation: {
    marginRight: wp(20),
  },
  editText: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.GREY,
    textAlign: "right",
  },
  educationBody: {
    marginTop: hp(24),
  },
  educationBodyText: {
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
    textAlign: "left",
  },
  topBorderStyle: {
    paddingTop: hp(30),
    borderTopColor: ColorConstant.GREY2,
    borderTopWidth: hp(1),
    marginTop: hp(24),
  },
});
