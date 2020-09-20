import React from "react";
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import {ColorConstant, Images} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import styles from "./NotificationStyle";

const NotificationScreen = (props) => {
  let notificationList = [
    {
      title: "Today",
      data: [
        {
          notiTitle: "GEMS School",
          notiDet:
            "You have been given after school detention between 3.30 and 4pm.",
          notiSince: "Now",
          notiAction: [],
        },
        {
          notiTitle: "Message Request",
          notiDet: "Jen Holden is trying to send you a message.",
          notiSince: "20sec ago",
          notiAction: [
            {
              actionName: "Accept",
            },
            {
              actionName: "Ignore",
            },
          ],
        },
        {
          notiTitle: "GEMS School",
          notiDet:
            "You have been given after school detention between 3.30 and 4pm.",
          notiSince: "Now",
          notiAction: [],
        },
      ],
    },
    {
      title: "Yesterday",
      data: [
        {
          notiTitle: "GEMS School",
          notiDet:
            "You have been given after school detention between 3.30 and 4pm.",
          notiSince: "Yesterday, 12.34pm",
          notiAction: [],
        },
        {
          notiTitle: "Topped Up",
          notiDet: "Your wallet has been topped up with AED250",
          notiSince: "Yesterday, 9.45am",
          notiAction: [],
        },
      ],
    },
    {
      title: "3 Days Ago",
      data: [
        {
          notiTitle: "GEMS School",
          notiDet:
            "You have been given after school detention between 3.30 and 4pm.",
          notiSince: "3 Days Ago",
          notiAction: [],
        },
        {
          notiTitle: "Topped Up",
          notiDet: "Your wallet has been topped up with AED250",
          notiSince: "3 Days Ago",
          notiAction: [],
        },
        {
          notiTitle: "Booking confirmed",
          notiDet:
            "Private Maths class with Ray Smith has been added to your calendar",
          notiSince: "3 Days Ago",
          notiAction: [],
        },
      ],
    },
  ];

  const onPressCrossIcon = () => {
    props.navigation.goBack();
  };

  const renderNotification = ({item, index}) => {
    return (
      <>
        <Text style={[styles.header, index === 0 && {marginTop: hp(70)}]}>
          {item.title}
        </Text>
        {item.data.map((notification, notiIndex) => {
          return (
            <View
              key={notification + notiIndex}
              style={[
                {paddingVertical: hp(25)},
                notiIndex !== item.data.length - 1 && styles.separatorStyle,
              ]}>
              <Text style={styles.notificationTitle}>
                {notification.notiTitle}
              </Text>
              <Text style={styles.notificationDetails}>
                {notification.notiDet}
              </Text>
              {notification.notiAction && notification.notiAction.length > 0 && (
                <View style={styles.notiActionContainer}>
                  {notification.notiAction.map((action, actionIndex) => (
                    <TouchableHighlight
                      key={action.actionName + actionIndex}
                      style={[
                        styles.notiAction,
                        actionIndex % 2 === 0 && {marginRight: wp(20)},
                      ]}>
                      <View>
                        <Text style={styles.notiActionText}>
                          {action.actionName}
                        </Text>
                      </View>
                    </TouchableHighlight>
                  ))}
                </View>
              )}
              <Text style={styles.notiSince}>{notification.notiSince}</Text>
            </View>
          );
        })}
      </>
    );
  };

  return (
    <>
      <StatusBar
        backgroundColor={ColorConstant.WHITE}
        barStyle={"dark-content"}
      />
      <View style={styles.container}>
        <FlatList
          data={notificationList}
          contentC
          renderItem={(data) => renderNotification(data)}
          keyExtractor={(item, index) => item.title + index}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={[styles.crossIconContainer]}>
              <TouchableHighlight
                underlayColor={"transparent"}
                onPress={() => onPressCrossIcon()}>
                <Image
                  source={Images.Close}
                  style={styles.moreIcon}
                  resizeMode={"contain"}
                />
              </TouchableHighlight>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.clearAllContainer}>
              <Text style={styles.clearAllText}>Clear all</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default NotificationScreen;
