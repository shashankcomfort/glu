import React, {useState} from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import styles from "./tutorHeaderStyles";
import {Images} from "../../constants";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";

// third Libaray

const TutorHeder = ({navigation}) => {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  //Date & Time Function

  return (
    <View style={{}}>
      <View style={{backgroundColor: "#474A41"}}>
        <View style={styles.classContainer}>
          <Text style={styles.nextText}>Tutor</Text>
          <Image
            source={require("../../assets/brown-brim.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Jen Holden London, UK</Text>
        </View>
        <View style={styles.iconTextConatiner}>
          <Image
            resizeMode={"cover"}
            source={Images.heart}
            style={styles.icon}
          />
          <Text style={styles.favouriteText}>Favourite</Text>
        </View>
        <View style={[styles.iconTextConatiner, {marginVertical: hp(35)}]}>
          <Image
            resizeMode={"cover"}
            source={Images.Star}
            style={styles.icon}
          />
          <Text style={styles.favouriteText}>
            3/5{"    "}Primary, Secondary
          </Text>
        </View>
      </View>
      <View style={{backgroundColor: "#fff", paddingHorizontal: wp(10)}}>
        <View style={styles.descripationContainer}>
          <Text style={styles.descripationText}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
          <Text style={styles.limtedText}>Limited Availability</Text>
          <Text style={styles.subjectText}>Subject</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Select Subject"
              placeholderTextColor="#9E9E9E"
              value={subject}
              onChange={(e) => {
                setSubject(e.nativeEvent.text);
              }}
              autoCapitalize="none"
            />
            <TouchableOpacity>
              <Image
                resizeMode={"cover"}
                source={Images.down}
                style={styles.rightIcon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.subjectText}>Date</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="DD MM YY"
              placeholderTextColor="#9E9E9E"
              value={date}
              onChange={(e) => {
                setDate(e.nativeEvent.text);
              }}
              autoCapitalize="none"
            />
            <TouchableOpacity>
              <Image
                resizeMode={"cover"}
                source={require("../../assets/icon/ic_bell.png")}
                style={styles.rightIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.inputContainer, {width: "77%"}]}>
            <Text style={styles.subjectText}>Start Time</Text>
            <Text style={styles.subjectText}>End Time</Text>
          </View>

          <View style={[styles.inputContainer, {width: "80%"}]}>
            <TextInput
              style={styles.smallTextInput}
              placeholder="10.00 am"
              placeholderTextColor="#9E9E9E"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.nativeEvent.text);
              }}
              autoCapitalize="none"
            />
            <TouchableOpacity>
              <Image source={Images.down} style={styles.rightIcon} />
            </TouchableOpacity>

            <TextInput
              style={styles.smallTextInput}
              placeholder="10.00 am"
              placeholderTextColor="#9E9E9E"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.nativeEvent.text);
              }}
              autoCapitalize="none"
            />
            <TouchableOpacity>
              <Image source={Images.down} style={styles.rightIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addClassButton} activeOpacity={0.7}>
            <Text style={styles.btnContainer}>
              Book{"   "}
              <Text style={styles.adeText}>AED200</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TutorHeder;
