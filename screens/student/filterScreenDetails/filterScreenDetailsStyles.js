import {StyleSheet} from "react-native";
import {ColorConstant} from "../../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../../utils/ResponsiveUI";
import {AppVariable} from "../../../constants/AppVariable";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: ColorConstant.WHITE,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(150),
  },
  subjectText: {
    fontWeight: "700",
    fontSize: hp(60),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "center",
  },
  iconTextConatiner: {
    flexDirection: "row",
    marginVertical: hp(10),
    alignSelf: "center",
  },
  icon: {
    width: wp(18),
    height: hp(18),
    tintColor: ColorConstant.BLACK,
  },
  favouriteText: {
    color: ColorConstant.GREY,

    marginLeft: wp(5),
    fontSize: hp(18),
    fontWeight: "600",
    textAlign: "center",
  },
  scrollViewContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    flex: 1,
  },
  transprent: {
    backgroundColor: "#fff",
  },
  addheight: {
    height: hp(540),
    width: "100%",
  },
});
