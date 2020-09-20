import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './monthlyCalendarStyles';

const MonthlyCalendar = () => (
  <View>
    <View style={styles.tutorContainer}>
      <Text style={styles.tutorText}>July 2020</Text>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.seeAllText}>Calendar</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.leftBorder}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>15/07/20 10am- 10.45am</Text>
        <Text style={styles.dateText}>How does language develop? French</Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.minText}>70mins</Text>
        <Text style={styles.minText}>Martin Lewis</Text>
      </View>
    </View>

    <View style={styles.leftBorder}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>24/07/20 4pm- 4.30pm</Text>
        <Text style={styles.dateText}>
          Organising a discursive essay. English
        </Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.minText}>30mins</Text>
        <Text style={styles.minText}>Martin Lewis</Text>
      </View>
    </View>
  </View>
);
export default MonthlyCalendar;
