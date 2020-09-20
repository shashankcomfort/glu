import {StyleSheet} from "react-native";
import * as ColorConstant from "../../../constants/ColorConstant";
import {widthToDp as wp, heightToDp as hp} from "../../../utils/ResponsiveUI";
import * as AppVariable from "../../../constants/AppVariable";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  bkcolor: {
    backgroundColor: "#F7F7F7",
  },
  flatListContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#F7F7F7",
    marginVertical: 0,
  },
});
