import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from "react-native";
import {AppVariable, ColorConstant} from "../../constants";
import {widthToDp as wp, heightToDp as hp} from "../../utils/ResponsiveUI";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-community/async-storage";
import {
  UPLOAD_PROFILE,
  UPLOAD_TEACHER_DOCUMENTS,
  USER_PROFILE,
} from "../../utils/ApiEndPoint";
import {get, put, signedPut} from "../../utils/ApiCalls";
import ImagePicker from "react-native-image-picker";

const UploadDocument = (props) => {
  const {userType} = props.route.params;
  const optionArr = ["Drivers License", "Passport", "National ID"];
  const docType = ["drivers license", "passport", "national id"];
  const [selectedOption, setSelectedOption] = useState(0);
  const [document1, setDocument1] = useState("");
  const [document2, setDocument2] = useState("");
  const [userDetail, setUserDetail] = useState("");

  const onPressBack = () => {
    props.navigation.goBack();
  };

  const onSignIn = () => {
    props.navigation.navigate("login");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(
        AppVariable.ASYNC_USER_DETAIL,
      );
      const userValue = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserDetail(userValue);
    } catch (e) {
      // error reading value
    }
  };

  const options = {
    title: "Upload your document",
    maxWidth: 432,
    maxHeight: 576,
    // customButtons: [{ name: 'Upload Document', title: 'Choose document to upload' }],
    storageOptions: {
      skipBackup: true,
      path: "images",
      cameraRoll: true,
      waitUntilSaved: true,
    },
  };

  const uploadDocument = () => {
    ImagePicker.showImagePicker(options, (response) => {
      //   console.log('Response = ', response);
      console.log("Response stringify = ", JSON.stringify(response));

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        onSaveDocument(response);
      }
    });
  };

  const onSaveDocument = (data) => {
    let url = UPLOAD_PROFILE + "/" + data.fileName;
    let header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: userDetail.access_token,
    };
    get(url, header).then(async (urlResponse) => {
      console.log(urlResponse);
      if (urlResponse.success) {
        let signedUrl = urlResponse.data.url;
        let signedFileName = urlResponse.data.fileName;
        let signedHeader = {"x-amz-acl": "public-read"};
        const resp = await fetch(data.uri);
        const body = await resp.blob();
        signedPut(signedUrl, signedHeader, body).then((uploadResponse) => {
          console.log(uploadResponse);
          if (uploadResponse.status == 200) {
            let uploadUrl = UPLOAD_TEACHER_DOCUMENTS;
            let uploadHeader = {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: userDetail.access_token,
            };
            let uploadBody = {
              fileName: signedFileName,
              documentType: docType[selectedOption],
            };
            put(uploadUrl, uploadHeader, JSON.stringify(uploadBody)).then(
              (imageUploadResponse) => {
                console.log(imageUploadResponse);
                console.log(JSON.stringify(imageUploadResponse));
                getTeacherProfile();
              },
            );
          }
        });
      }
    });
  };

  const getTeacherProfile = () => {
    let header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: userDetail.access_token,
    };
    let url = USER_PROFILE;
    get(url, header).then((getTeacherProfileResponse) => {
      console.log(getTeacherProfileResponse);
      console.log(JSON.stringify(getTeacherProfileResponse));
      if (getTeacherProfileResponse.success) {
        setDocument1(getTeacherProfileResponse.data.document);
      }
    });
  };

  const onClickNext = () => {
    if (document1 !== "") {
      props.navigation.navigate("registrationSuccess", {userType: userType});
    } else {
      Alert.alert("Message", "Upload your document");
    }
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
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                onPressBack();
              }}
              hitSlop={{left: 50, right: 50, top: 50, bottom: 50}}>
              <FontAwesome
                name="angle-left"
                size={hp(24)}
                color={ColorConstant.BLACK}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onSignIn();
              }}>
              <Text style={styles.headerText}>{"Sign In"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>{"Step 7/8 Identity"}</Text>
          </View>
          <View style={styles.optionContainer}>
            {optionArr.map((val, id) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedOption(id);
                  }}
                  key={id}
                  style={styles.optionBody}>
                  <View>
                    {selectedOption == id ? (
                      <AntDesign
                        name="checkcircleo"
                        color={ColorConstant.BLACK}
                        size={hp(17)}
                      />
                    ) : (
                      <FontAwesome
                        name="circle-thin"
                        color={ColorConstant.LIGHT_GREY}
                        size={hp(20)}
                      />
                    )}
                  </View>
                  <Text style={styles.optionText}>{val}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            onPress={() => {
              uploadDocument();
            }}
            style={styles.uploadButton}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Upload"}
            </Text>
          </TouchableOpacity>
          <View style={styles.documentContainer}>
            {document1 !== "" && (
              <Image
                resizeMode={"contain"}
                source={{uri: document1}}
                style={{width: wp(180), height: wp(180)}}
              />
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              onClickNext();
            }}
            style={styles.nextButton}>
            <Text style={[styles.headerText, {textAlign: "center"}]}>
              {"Next"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstant.WHITE,
  },
  header: {
    marginHorizontal: wp(31),
    marginTop: hp(50),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: hp(18),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "left",
  },
  body: {
    marginHorizontal: wp(31),
    marginTop: hp(70),
  },
  bodyText: {
    fontSize: hp(25),
    color: ColorConstant.BLACK,
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    textAlign: "left",
    maxWidth: wp(120),
    lineHeight: hp(30),
  },
  optionContainer: {
    marginHorizontal: wp(31),
    marginTop: hp(45),
  },
  optionBody: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    marginLeft: wp(10),
    fontSize: hp(25),
    fontFamily: AppVariable.FONT_CIRCULARXX_BOOK,
    color: ColorConstant.BLACK,
    textAlign: "left",
  },
  uploadButton: {
    marginHorizontal: wp(31),
    marginTop: hp(50.5),
    width: wp(166),
    height: hp(40),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
  documentContainer: {
    minHeight: hp(285),
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    marginHorizontal: wp(31),
    marginTop: hp(50),
    marginBottom: hp(50),
    height: hp(40),
    borderColor: ColorConstant.LIGHT_GREY,
    borderWidth: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UploadDocument;
