import {StyleSheet} from "react-native";
import {ColorConstant} from "../../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../../utils/ResponsiveUI";
import {AppVariable} from "../../../constants/AppVariable";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    paddingHorizontal: wp(20),
    marginTop: hp(120),
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: wp(350),
    height: hp(250),
  },
  icon: {
    width: wp(20),
    height: hp(20),
    tintColor: ColorConstant.GREY,
    marginLeft: wp(10),
    alignSelf: "center",
  },
  iconTextConatiner: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  favouriteText: {
    color: ColorConstant.GREY,
    width: wp(80),
    marginLeft: wp(8),
    fontSize: hp(18),
    fontWeight: "600",
  },
  availableText: {
    color: ColorConstant.GREY,
    marginLeft: wp(8),
    fontSize: hp(18),
    fontWeight: "600",
  },
  tutorText: {
    fontWeight: "800",
    fontSize: hp(35),
    marginVertical: 25,
    marginHorizontal: 10,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp(35),
  },
  dateText: {
    color: "#000",
    fontSize: hp(25),
    fontWeight: "700",
    width: wp(170),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  addClassButton: {
    marginVertical: hp(15),
    backgroundColor: "#fff",
    borderWidth: 1,
    alignSelf: "center",
    marginBottom: wp(25),
    borderColor: ColorConstant.LIGHT_GREY,
  },
  addClassBlue: {
    marginVertical: hp(15),
    backgroundColor: "#fff",
    borderWidth: 1,
    alignSelf: "center",
    marginBottom: wp(25),
    borderColor: "#2267FF",
  },
  adeText: {
    color: "#5F5F5F",
    fontWeight: "600",
    fontSize: hp(18),
  },
  adeText2: {
    color: "#2267FF",
    fontWeight: "bold",
  },
  btnContainer: {
    width: wp(340),
    paddingTop: hp(6),
    paddingBottom: wp(6),
    fontSize: hp(18),
    fontWeight: "700",
    textAlign: "center",
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },
  confrimText: {
    width: wp(340),
    paddingTop: wp(6),
    paddingBottom: wp(6),
    fontSize: hp(22),
    fontWeight: "500",
    textAlign: "center",
    color: "#2267FF",

    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
  },

  descripationText: {
    color: ColorConstant.GREY,
    fontSize: hp(18),
    alignSelf: "center",
    marginLeft: wp(15),
  },
});
