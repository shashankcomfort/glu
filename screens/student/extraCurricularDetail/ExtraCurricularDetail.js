import React, {useState} from "react";
import {Image, ScrollView, StatusBar, View} from "react-native";
import {HeaderComponent} from "../../../components";
import {ColorConstant, Images} from "../../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../../utils/ResponsiveUI";
import {ExtraCurricularActivity} from "./Components";
import styles from "./ExtraCurricularDetailStyle";

const ExtraCurricularDetail = (props) => {
  const [extraCurricular, updateRecommended] = useState([
    {
      month: "June",
      data: [
        {
          isExpanded: false,
          subjectName: "Introducing Linear Alegbra",
          date: "19/07/20",
          tutor: "Esme Wilson",
          desc:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
          yourAvg: "85%",
          stdAvg: "92%",
        },
        {
          isExpanded: false,
          subjectName: "Introducing Linear Alegbra",
          date: "19/07/20",
          tutor: "Esme Wilson",
          desc:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
          yourAvg: "85%",
          stdAvg: "92%",
        },
      ],
    },
    {
      month: "July",
      data: [
        {
          isExpanded: false,
          subjectName: "Introducing Linear Alegbra",
          date: "19/07/20",
          tutor: "Esme Wilson",
          desc:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
          yourAvg: "85%",
          stdAvg: "92%",
        },
      ],
    },
  ]);
  const [favourite, setFavourite] = useState(false);

  const addToFav = () => {
    setFavourite(!favourite);
  };

  const onPressBellIcon = () => {
    props.navigation.navigate("notification");
  };

  const onPressBackIcon = () => {
    props.navigation.goBack();
  };

  return (
    <>
      <StatusBar
        backgroundColor={ColorConstant.WHITE}
        barStyle={"dark-content"}
      />
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps={"always"}
          showsVerticalScrollIndicator={false}>
          <View style={styles.scrollEleContainer}>
            <View style={[styles.topViewContainer, {paddingBottom: hp(0)}]}>
              <HeaderComponent
                onPressBackIcon={() => onPressBackIcon()}
                onPressBellIcon={() => onPressBellIcon()}
              />
            </View>

            <View style={{paddingHorizontal: wp(31), paddingTop: hp(25)}}>
              <ExtraCurricularActivity
                addToFav={() => addToFav()}
                favourite={favourite}
              />
            </View>
          </View>
        </ScrollView>
        <View style={[styles.alignToFlexEnd, styles.burgerIconContainer]}>
          <Image
            source={Images.Burger}
            style={styles.moreIcon}
            resizeMode={"contain"}
          />
        </View>
      </View>
    </>
  );
};

export default ExtraCurricularDetail;
