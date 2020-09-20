import {StyleSheet} from "react-native";
import {ColorConstant, AppVariable} from "../../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../../utils/ResponsiveUI";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstant.WHITE,
  },
  bigText: {
    fontSize: hp(34),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  scrollEleContainer: {
    paddingTop: hp(47),
  },
  topViewContainer: {
    marginHorizontal: wp(31),
    paddingBottom: hp(97),
  },
  headerContainer: {
    flexDirection: "row",
  },
  LeftIcon: {
    width: wp(9),
    height: hp(18),
  },
  moreIcon: {
    width: wp(30),
    height: hp(18),
  },
  bellIcon: {
    width: wp(18),
    height: hp(23),
  },
  alignToFlexEnd: {flex: 1, alignItems: "flex-end"},
  burgerIconContainer: {position: "absolute", top: hp(47), right: wp(31)},
  dashboardText: {
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
  },
  monthText: {
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
    flex: 1,
  },
  flexOne: {flex: 1},
  blackSmallFont: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.GREY,
    flex: 1,
  },
  chartPercentage: {
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
    marginTop: hp(24),
    flex: 1,
  },
  flexDirectionRow: {flexDirection: "row", alignItems: "center"},
  seeAllText: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.SKY_BLUE,
    marginTop: hp(20),
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(13),
  },
  recommendedTutorList: {
    marginTop: hp(44),
  },
  nodataContainer: {marginBottom: hp(70), marginHorizontal: wp(31)},
  dateTutorContainer: {
    flexDirection: "row",
    paddingBottom: hp(41),
    paddingTop: hp(12),
  },
});
