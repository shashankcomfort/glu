import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import {AppVariable} from "../../constants/AppVariable";

export default StyleSheet.create({
  container: {
    paddingHorizontal: wp(20),
    backgroundColor: "#F7F7F7",
  },
  blackView: {
    backgroundColor: ColorConstant.BLACK,
    borderRadius: wp(70),
    height: hp(10),
    width: wp(8),
    // marginBottom: wp(15),
  },
  tutorText: {
    fontWeight: "700",
    fontSize: hp(25),
    marginVertical: hp(45),
  },
  image: {
    width: wp(370),
    height: hp(250),
    // alignSelf: "center",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp(15),
  },
  dateText: {
    color: "#000",
    fontSize: hp(25),
    fontWeight: "700",
    width: wp(150),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  minText: {
    color: "#000",
    fontSize: hp(18),
    fontWeight: "700",
    width: wp(150),
    marginBottom: wp(30),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
});
