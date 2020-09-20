import React from "react";
import {View, Text, FlatList} from "react-native";
import styles from "./AboutTutorStyles";

// tempData
import TEMP_DATA from "../tempData";

const AboutTutor = ({navigation}) => {
  const data = TEMP_DATA;
  //destructure
  const {navigate} = navigation;

  return (
    <View style={styles.container}>
      <Text style={styles.tutorText}>About</Text>
      <View style={styles.dateContainer}>
        <View style={styles.verticalBorder}></View>
        <View style={styles.verticalBorder}></View>
      </View>
      <View style={styles.dateContainer}>
        {/* <View style={styles.verticalBorder}></View> */}
        <Text style={styles.dateText}>Experience</Text>
        <Text style={styles.dateText}>Education</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.minText}>
          2014-Present Dubai British School Chemistry Head of Dep
        </Text>
        <Text style={styles.minText}>University of Essex Management MSc</Text>
      </View>
      <View style={styles.schoolContainer}>
        <Text style={styles.minText}>
          2012-2014 Gems Intl. School Science Teacher
        </Text>
        <Text style={styles.minText}>
          Leicester University Biomedical Science BSc Honours
        </Text>
      </View>

      <View style={styles.leftBorder}>
        <Text style={styles.skillsText}>Skills</Text>
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
      <View style={{height: 50}} />
    </View>
  );
};
export default AboutTutor;
