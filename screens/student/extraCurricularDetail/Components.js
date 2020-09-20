import React from "react";
import {Image, Text, View, TouchableHighlight} from "react-native";
import {ColorConstant, Images} from "../../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../../utils/ResponsiveUI";
import styles from "./ExtraCurricularDetailStyle";

export const ExtraCurricularActivity = (props) => {
  const {item, index} = props;
  return (
    <View key={"" + item + index} style={[styles.recommendedTutorList]}>
      <Image source={Images.test} style={{width: wp(352), height: wp(250)}} />
      <Text style={[styles.bigText]}>Football Club</Text>

      <TouchableHighlight
        onPress={() => props.addToFav()}
        underlayColor={"transparent"}>
        <View style={styles.favouriteContainer}>
          <Image
            source={props.favourite ? Images.Favourited : Images.Favourite}
            style={styles.favouriteIcon}
          />
          <Text style={[styles.blackSmallFont]}>Favourite</Text>
        </View>
      </TouchableHighlight>

      <View
        style={[
          styles.favouriteContainer,
          styles.flexOne,
          {marginTop: hp(44)},
        ]}>
        <Text style={[styles.dashboardText, styles.flexOne]}>
          Wednesdays 9.15-10.15am
        </Text>
        <Text style={[styles.dashboardText, styles.flexOne]}>
          Esme Wilson Sport
        </Text>
      </View>

      <View style={styles.purchaseButtonContainer}>
        <Text
          style={[
            styles.blackSmallFont,
            {color: ColorConstant.BLACK, marginRight: wp(10)},
          ]}>
          Join{"  "}
          <Text style={[styles.blackSmallFont]}>AED200</Text>
        </Text>
      </View>

      <View style={styles.dateTutorContainer}>
        <Text style={[styles.blackSmallFont]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Text>
      </View>
    </View>
  );
};
