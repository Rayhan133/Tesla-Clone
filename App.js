import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import CarsList from './assets/components/CarsList';
import Header from './assets/components/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
      <Header />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
