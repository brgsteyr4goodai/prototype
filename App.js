import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Cellular from 'expo-cellular';
import Test from "./app/components/Test.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> {Cellular.carrier} {"<->"} {Cellular.isoCountryCode} : {Cellular.mobileCountryCode} : {Cellular.mobileNetworkCode}</Text>
      <Test />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
