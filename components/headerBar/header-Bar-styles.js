import {StyleSheet} from "react-native";
import {ColorConstant} from "../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";

export default StyleSheet.create({
  headerBar: {
    flexDirection: "row",
    paddingHorizontal: wp(18),
    justifyContent: "space-between",
    marginVertical: hp(35),
    position: "absolute",
    width: "100%",
  },
  image: {
    width: wp(18),
    height: hp(18),
  },
  rightIconContiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "92%",
  },
  rightIcon: {
    width: wp(18),
    height: hp(18),
    marginLeft: wp(20),
    marginTop: hp(15),
  },
  backIcon: {
    width: wp(25),
    height: hp(25),
    marginTop: hp(15),
    // marginLeft: wp(2),
  },
  imagenoti1: {
    width: wp(24),
    height: hp(24),
    marginTop: hp(16),
    marginLeft: wp(5),
  },
  imagenoti: {
    width: wp(24),
    height: hp(24),
  },
});
