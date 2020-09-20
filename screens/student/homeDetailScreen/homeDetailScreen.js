import React, {useState} from "react";
import {TouchableOpacity, Text, Image, View, ScrollView} from "react-native";
import styles from "./homeDetailScreenStyles";
import {Images} from "../../../constants";

// component
import HeaderBar from "../../../components/headerBar/header-Bar-component";

const homeDetailScreen = ({navigation}) => {
  const [btnVisible, setbtnVisible] = useState(false);

  const purchaseBtn = (visible) => {
    setbtnVisible(visible);
  };
  //destructure
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderBar gotoBack="backScreen" navigation={navigation} />
        <View style={styles.imageContainer}>
          <Image
            resizeMode={"cover"}
            source={require("../../../assets/brown-brim.png")}
            style={styles.image}
          />
          <Text style={styles.tutorText}>
            Introducing advanced long devision
          </Text>

          <View style={styles.iconTextConatiner}>
            <Image
              resizeMode={"cover"}
              source={Images.heart}
              style={styles.icon}
            />
            <Text style={styles.favouriteText}>Favourite</Text>
            <Image
              resizeMode={"cover"}
              source={require("../../../assets/icon/ic_bell.png")}
              style={styles.icon}
            />
            <Text style={styles.availableText}>Available slots</Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>19/07/20 9am- 10.15am</Text>
            <Text style={styles.dateText}>Frankie Smith Maths</Text>
          </View>

          {btnVisible == false ? (
            <TouchableOpacity
              style={styles.addClassButton}
              onPress={purchaseBtn}>
              <Text style={styles.btnContainer}>
                Purchase{"   "}
                <Text style={styles.adeText}>AED200</Text>
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.addClassBlue}
              onPress={() => navigate("watchRecordClass")}>
              <Text style={[styles.confrimText]}>
                Confirm{"   "}
                <Text style={styles.adeText2}>AED200</Text>
              </Text>
            </TouchableOpacity>
          )}

          <Text style={styles.descripationText}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </Text>
        </View>
        <View style={{height: 40}} />
      </ScrollView>
    </View>
  );
};
export default homeDetailScreen;
