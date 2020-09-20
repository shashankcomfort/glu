import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./header-Bar-styles";
import {Images} from "../../constants";

const HeaderBar = ({screenName, gotoBack, navigation}) => (
  <View>
    {gotoBack == "backScreen" ? (
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            source={Images.Left}
            style={[
              styles.backIcon,
              {tintColor: screenName == "HomeScreen" ? "#fff" : "#000"},
            ]}
          />
        </TouchableOpacity>
        <View style={styles.rightIconContiner}>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={Images.Notifications}
              style={[
                styles.imagenoti1,
                {tintColor: screenName == "HomeScreen" ? "#fff" : "#000"},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={Images.Burger}
              style={[
                styles.rightIcon,
                {tintColor: screenName == "HomeScreen" ? "#fff" : "#000"},
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View style={styles.headerBar}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            resizeMode="contain"
            source={Images.Notifications}
            style={[
              styles.imagenoti,
              {tintColor: screenName == "HomeScreen" ? "#fff" : "#000"},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={Images.Burger}
            style={[
              styles.image,
              {tintColor: screenName == "HomeScreen" ? "#fff" : "#000"},
            ]}
          />
        </TouchableOpacity>
      </View>
    )}
  </View>
);

export default HeaderBar;
