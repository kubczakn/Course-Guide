import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {

  }
});

const CourseScreen = (props) => {

  return (
    <View style={styles.title}>
      <Text>Course Page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default CourseScreen;

