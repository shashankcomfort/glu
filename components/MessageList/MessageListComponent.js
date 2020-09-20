import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  FlatList,
  TextInput,
} from "react-native";
import styles from "./MessageListStyles";
import {Images} from "../../constants";

// tempData
import TEMP_DATA from "../tempData";

const MessageList = ({navigation}) => {
  const data = TEMP_DATA;
  //destructure
  const {navigate} = navigation;
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.descripationText}>
                Hey, I need some help with the new French vocab homework. Do you
                have a bit of time to walk me through it?
              </Text>
              <View style={styles.leftBorder}>
                <View style={styles.row}>
                  <Image source={{uri: item.imageUrl}} style={styles.pic} />
                  <View>
                    <View style={styles.nameContainer}>
                      <Text style={styles.nameTxt}>{item.review}</Text>
                    </View>
                    <Text style={styles.lastSeenTxt}>3.15 pm</Text>
                  </View>
                </View>
              </View>
              <Image source={{uri: item.imageUrl}} style={styles.fullpic} />
              <Text style={styles.timeText}>3.15 pm</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.SectionStyle}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            resizeMode="contain"
            source={Images.attach}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput
          style={{flex: 1.5}}
          placeholder="Say something"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <Image source={Images.heart} style={styles.darkModeIcon} />
      </TouchableOpacity>
    </View>
  );
};
export default MessageList;
