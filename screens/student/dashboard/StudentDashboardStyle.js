import {StyleSheet} from "react-native";
import {ColorConstant, AppVariable} from "../../../constants";

import {heightToDp as hp, widthToDp as wp} from "../../../utils/ResponsiveUI";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstant.OFF_WHITE,
  },
  scrollEleContainer: {
    paddingTop: hp(47),
    paddingBottom: hp(47),
  },
  dashboardText: {
    paddingTop: hp(69),
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
  },
  upcomingClassContainer: {
    backgroundColor: ColorConstant.WHITE,
    padding: wp(20),
    borderRadius: wp(3),
  },
  upcomingClassText: {
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
  },
  seeAllText: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.SKY_BLUE,
  },
  blackSmallFont: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
  },
  upcomingImage: {
    width: wp(146),
    height: hp(110),
  },
  flexOne: {flex: 1},
  flexDirectionRow: {flexDirection: "row"},
  alignToFlexEnd: {flex: 1, alignItems: "flex-end"},
  bellIcon: {
    width: wp(18),
    height: hp(23),
  },
  breakIcon: {
    width: wp(21),
    height: hp(23),
  },
  moreIcon: {
    width: wp(30),
    height: hp(18),
  },
  dashIcon: {
    backgroundColor: ColorConstant.BLACK,
    opacity: 0.25,
    height: hp(3),
    width: wp(63),
  },
  tileContainer: {
    backgroundColor: ColorConstant.WHITE,
    padding: hp(19),
    borderRadius: wp(3),
    width: wp(166),
    height: hp(166),
    marginTop: hp(20),
  },
  tileListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  schedularContainer: {
    backgroundColor: ColorConstant.WHITE,
    paddingHorizontal: wp(20),
    paddingVertical: hp(13),
    marginTop: hp(20),
  },
  todayText: {
    fontSize: hp(34),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  profileCotainer: {
    backgroundColor: ColorConstant.WHITE,
    paddingHorizontal: wp(31),
    paddingTop: hp(79),
    paddingBottom: hp(45),
    marginTop: hp(80),
  },
  timeLineStyle: {
    backgroundColor: ColorConstant.BLACK,
    width: wp(1),
    height: hp(142),
    top: hp(12),
    opacity: 0.25,
  },
  todayTaskContainer: {
    paddingLeft: wp(21),
    width: wp(137),
    flex: 1,
    paddingRight: wp(28),
  },
  tasksListContainer: {
    marginTop: hp(38),
    height: hp(152),
  },

  footerText: {
    fontSize: hp(12),
    fontFamily: AppVariable.FONT_CIRCULARXX_MONO_REGULAR,
    color: ColorConstant.BLACK,
  },
  headerContainer: {marginHorizontal: wp(31)},
  completionBar: {
    borderWidth: hp(1),
    position: "absolute",
    top: -1,
    left: -1,
  },
  totalTimeBar: {
    borderWidth: hp(1),
    borderColor: ColorConstant.GREY2,
  },
  classReportContainer: {
    paddingRight: wp(20),
    paddingTop: hp(19),
    flexDirection: "row",
  },
  lineChart: {
    marginRight: wp(15),
    height: hp(111),
    borderLeftColor: ColorConstant.GREY2,
    borderLeftWidth: wp(1),
    borderBottomColor: ColorConstant.GREY2,
    borderBottomWidth: wp(1),
    marginTop: hp(44),
  },
  chartSummaryContainer: {
    marginTop: hp(50),
    marginBottom: hp(15),
    flexDirection: "row",
  },
  dashCompletion: {
    borderColor: ColorConstant.BLACK,
    opacity: 0.5,
  },
  dashContainer: {justifyContent: "space-between", paddingTop: hp(45)},
  chartDesc: {
    width: wp(8),
    height: wp(8),
    backgroundColor: ColorConstant.SKY_BLUE,
    marginBottom: hp(9),
  },
  burgerIconContainer: {position: "absolute", top: hp(47), right: wp(31)},
});
