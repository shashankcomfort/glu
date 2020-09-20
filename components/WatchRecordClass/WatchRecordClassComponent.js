import React from "react";
import {View, Text, Image, ScrollView, FlatList} from "react-native";
import styles from "./WatchRecordClassStyles";
import {Images} from "../../constants";
// component
import HeaderBar from "../headerBar/header-Bar-component";
import NextClass from "../nextClass/nextClassComponent";

// tempData
import TEMP_DATA from "../tempData";

const WatchRecordClass = ({navigation}) => {
  const data = TEMP_DATA;
  //destructure
  const {navigate} = navigation;
  return (
    <ScrollView>
      <View>
        <HeaderBar gotoBack="backScreen" navigation={navigation} />
        <View style={styles.container}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.tutorText}>
              Jordan Day{"  "}
              <Image
                resizeMode="contain"
                source={Images.Play}
                style={styles.playIcon}
              />
            </Text>
          </View>
          <Text style={styles.dateText}>
            How to structure narrative in fiction. English
          </Text>
          <View style={styles.iconTextConatiner}>
            <Image
              resizeMode={"cover"}
              source={Images.heart}
              style={[styles.icon, {marginTop: 3}]}
            />
            <Text style={styles.favouriteText}>Favourite</Text>
          </View>
          <Image
            resizeMode={"cover"}
            source={require("../../assets/brown-brim.png")}
            style={styles.image}
          />

          <Text style={styles.minText}>0.00/ 05.20</Text>
        </View>
        <View style={styles.descripationContainer}>
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
          <View style={styles.leftBorder}>
            <Text style={styles.skillsText}>Tags</Text>
            <FlatList
              data={data}
              numColumns={2}
              renderItem={({item}) => (
                <View style={styles.addClassButton}>
                  <Text style={styles.btnContainer}>
                    <Text style={styles.adeText}>{item.subjectName}</Text>
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <Text style={[styles.ResourceText]}>Resources</Text>
          <View style={styles.leftBorder}>
            <Text style={[styles.textBook, {marginBottom: 15}]}>
              Text books
            </Text>
            <Text style={styles.textBook}>AQA Fiction</Text>
            <Text style={[styles.textDownload, {marginBottom: 15}]}>
              Download
            </Text>
            <Text style={styles.textBook}>Fiction for beginners</Text>
            <Text style={styles.textDownload}>Download</Text>
          </View>
          <View style={styles.leftBorder}>
            <Text style={[styles.textBook, {marginBottom: 15}]}>
              Audio Clips
            </Text>
            <Text style={styles.textBook}>Extract from AQA Fiction</Text>
            <View style={styles.verticalLine} />
            <View style={styles.playTextContainer}>
              <Text style={[styles.playText, {marginBottom: 15}]}>
                <Image
                  resizeMode={"cover"}
                  source={Images.heart}
                  style={[styles.icon, {marginTop: 5}]}
                />
                {"  "}
                Play
              </Text>
              <Text
                style={[styles.playText, {marginBottom: 15, paddingRight: 15}]}>
                3:00/14:15
              </Text>
            </View>
          </View>
        </View>
        <NextClass watchRecordScreen="watchScreen" />
      </View>
    </ScrollView>
  );
};
export default WatchRecordClass;
