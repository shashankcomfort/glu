import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './term&ConditonStyles';

const TermCondition = () => (
  <View style={styles.container}>
    <Text style={styles.termConditonText}>
      T&C’s / Privacy & Cookies Made by Six Build by Someone
    </Text>
    <Text style={styles.gluText}>Glu ©2020</Text>
  </View>
);
export default TermCondition;
