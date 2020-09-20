import {StyleSheet} from "react-native";
import {ColorConstant} from "../../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../../utils/ResponsiveUI";
import {AppVariable} from "../../../constants/AppVariable";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bkcolor: {
    backgroundColor: ColorConstant.WHITE,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(20),
    marginVertical: hp(15),
    marginTop: hp(80),
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(20),
    marginVertical: hp(45),
    marginTop: hp(30),
  },
  crossText: {
    fontWeight: "500",
    fontSize: hp(25),
    marginTop: hp(25),
  },
  flatListContainer: {
    paddingHorizontal: wp(10),
    backgroundColor: "#F7F7F7",
    marginVertical: 0,
  },
  tutorText: {
    fontSize: hp(25),
    marginTop: hp(30),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  imageContainer: {
    marginVertical: hp(30),
    paddingHorizontal: wp(10),
    backgroundColor: ColorConstant.WHITE,
  },
  subjectText: {
    fontWeight: "700",
    fontSize: hp(35),
    paddingHorizontal: wp(20),
    width: "90%",
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
});
