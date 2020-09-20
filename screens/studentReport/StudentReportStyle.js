import {StyleSheet} from "react-native";
import {ColorConstant, AppVariable} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstant.OFF_WHITE,
  },
  bigText: {
    fontSize: hp(34),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  chartHeader: {paddingTop: hp(66)},
  scrollEleContainer: {
    paddingTop: hp(47),
    paddingBottom: hp(160),
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
  lineChart: {
    marginRight: wp(15),
    height: hp(204),
    borderLeftColor: ColorConstant.GREY2,
    borderLeftWidth: wp(1),
    borderBottomColor: ColorConstant.GREY2,
    borderBottomWidth: wp(1),
    marginTop: hp(44),
  },
  chartSummaryContainer: {
    marginTop: hp(76),
  },
  flexOne: {flex: 1},
  chartDesc: {
    width: wp(8),
    height: wp(8),
    backgroundColor: ColorConstant.SKY_BLUE,
    marginBottom: hp(9),
  },
  blackSmallFont: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
  },
  studentAverage: {opacity: 0.25, marginTop: hp(16)},
  chartPercentage: {
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
  },
  extraPercentage: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
  },
  flexDirectionRow: {flexDirection: "row", alignItems: "center"},
  examResultsContainer: {
    backgroundColor: ColorConstant.WHITE,
    paddingHorizontal: wp(31),
    paddingVertical: hp(79),
  },
  expandlableHeader: {paddingVertical: hp(15)},
  expandlableHeaderText: {
    flex: 1,
  },
  expandlableDesc: {
    marginTop: 40,
    color: ColorConstant.GREY,
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  plusIcon: {
    width: wp(17),
    height: wp(17),
  },
  barChartDetContainer: {
    marginVertical: hp(30),
  },
  seeAllText: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.SKY_BLUE,
    marginTop: hp(73),
  },
  recommenedTagsContainer: {
    marginTop: hp(74),
    flexDirection: "row",
  },
  timeLineStyle: {
    backgroundColor: ColorConstant.BLACK,
    width: wp(1),
    // height: hp(142),
    opacity: 0.25,
  },
  recommendedTagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: hp(15),
  },
  recommended: {
    padding: hp(10),
    borderColor: ColorConstant.GREY2,
    borderWidth: hp(1),
    alignItems: "center",
    justifyContent: "center",
    marginRight: wp(10),
    marginTop: wp(10),
  },
  recommendedTagText: {
    fontSize: hp(20),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
  },
  recommendedTutorContainer: {
    marginLeft: wp(31),
    paddingTop: hp(79),
  },
  seeAllReccomText: {
    fontSize: hp(18),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.SKY_BLUE,
    flex: 1,
    textAlign: "right",
    marginRight: wp(31),
  },
  starMark: {width: wp(17), height: wp(16), marginRight: wp(5)},
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(13),
  },
  recommendedTutorList: {
    marginTop: hp(44),
    marginRight: wp(20),
  },
  barChart: {
    marginRight: wp(15),
    width: wp(352),
    height: hp(150),
    borderLeftColor: ColorConstant.GREY2,
    borderLeftWidth: wp(1),
    borderBottomColor: ColorConstant.GREY2,
    borderBottomWidth: wp(1),
    marginTop: hp(44),
  },
  nodataContainer: {marginBottom: hp(70), marginHorizontal: wp(31)},
});
