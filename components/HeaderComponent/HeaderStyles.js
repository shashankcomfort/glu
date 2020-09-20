import {StyleSheet} from "react-native";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";

export default StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
  },
  LeftIcon: {
    width: wp(9),
    height: hp(18),
  },
  bellIcon: {
    width: wp(18),
    height: hp(23),
  },
});
