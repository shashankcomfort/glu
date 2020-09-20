import React, {useState} from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./filterScreensStyles";
// component
import HeaderBar from "../../../components/headerBar/header-Bar-component";
import Tutors from "../../../components/tutors/tutorsComponent";
// tempData
import TEMP_DATA from "../tempData";

const filterScreens = ({route, navigation}) => {
  const data = TEMP_DATA;

  const [modalVisible, setmodalVisible] = useState(false);

  const filterModal = (visible) => {
    setmodalVisible(visible);
  };

  //destructure
  const {title} = route.params;
  const {navigate} = navigation;

  return (
    <ScrollView style={styles.bkcolor}>
      <View styles={styles.container}>
        <HeaderBar />
        <View style={styles.textContainer}>
          <Text style={styles.tutorText}>{title}</Text>

          <TouchableOpacity
            onPress={() => {
              filterModal(true);
            }}>
            <Text style={styles.tutorText}>+ Filter</Text>
          </TouchableOpacity>
        </View>

        {/*********MODAL FILTER**********/}

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {}}>
          <View
            style={{
              flex: 1,
            }}>
            <View style={styles.filterContainer}>
              <Text style={styles.tutorText}>Filter</Text>

              <TouchableOpacity
                onPress={() => {
                  filterModal(!modalVisible);
                }}>
                <Text style={styles.crossText}>X</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    filterModal(!modalVisible);
                    navigate("filterDetailScreens");
                  }}>
                  <Text style={styles.subjectText}>{item.subjectName}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Modal>

        <View style={styles.imageContainer}>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => (
              <View>
                <Tutors {...item} navigation={navigation} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        {/*********HORIZONTAL FLATLIST**********/}

        <View style={styles.flatListContainer}>
          <View style={{marginTop: 25}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
              horizontal={true}
              renderItem={({item}) => (
                <View>
                  <Tutors {...item} navigation={navigation} />
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>

        <View style={styles.imageContainer}>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => (
              <View>
                <Tutors {...item} navigation={navigation} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default filterScreens;
