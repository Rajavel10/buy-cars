import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigation from './Source/Navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#d7e3ce',
  },
});

export default App;