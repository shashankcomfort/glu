import React from "react";
import {TouchableOpacity, Text, Image, View, FlatList} from "react-native";
import styles from "./ChatUserListStyles";
// tempData
import TEMP_DATA from "../tempData";

const ChatUserList = ({navigation, userOnline}) => {
  const data = TEMP_DATA;
  //destructure
  const {navigate} = navigation;
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigate("Chat")}>
            <View
              style={[
                styles.row,
                {
                  borderBottomWidth: userOnline === "online" ? 1 : 0,
                  height: userOnline === "online" ? 85 : 60,
                  borderBottomColor: "#0000001A",
                },
              ]}>
              <Image
                source={{uri: item.imageUrl}}
                style={userOnline == "online" ? styles.onlineUser : styles.pic}
              />
              <View
                style={{
                  alignSelf: "flex-start",
                  marginTop: userOnline == "online" ? 5 : null,
                }}>
                <View style={styles.nameContainer}>
                  <Text
                    style={styles.nameTxt}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.name}
                  </Text>
                  <View
                    style={userOnline == "online" ? styles.onlineView : null}
                  />
                </View>
                <View style={styles.msgContainer}>
                  <Text style={styles.msgTxt}>{item.status}</Text>
                </View>

                {userOnline == "online" ? (
                  <Text style={styles.lastSeenTxt}>{item.lastSeen}</Text>
                ) : null}
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default ChatUserList;
