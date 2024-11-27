import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SigninScreen from './Source/Screens/SigninScreen/SigninScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <SigninScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#d7e3ce'
  },
});