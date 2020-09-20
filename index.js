/**
 * @format
 */
import React from "react";
import {AppRegistry, SafeAreaView, StyleSheet} from "react-native";
import App from "./App";
import {name as appName} from "./app.json";

const gluLerning = () => (
  <SafeAreaView style={styles.safeAreStyle} forceInset={{top: "always"}}>
    <App />
  </SafeAreaView>
);

const styles = StyleSheet.create({safeAreStyle: {flex: 1}});

AppRegistry.registerComponent(appName, () => gluLerning);
