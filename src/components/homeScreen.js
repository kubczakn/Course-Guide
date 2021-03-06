import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import db from '../firebase/config';

const getCourses = require('../../courses.js');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {

  }
});

const HomeScreen = ( { navigation }) => {

  const courses = getCourses();

  const [course, setCourse] = useState(courses[0]);

  const onCoursePress = async() => {
      let returnedCourses = [];
      const snapshot = await db.collection("CourseGrades").where("type", "==", course).get();
      snapshot.forEach(doc => {
        returnedCourses = doc.data().courses;
      }); 

      navigation.navigate('Course',
      {
          returnedCourses: returnedCourses,
      });

  }

  const pickerItems = courses.map((courseLabel, index) => 
      <Picker.Item key={index} label={courseLabel} value={courseLabel} />
  );

  return (
    <View style={styles.container}>
      <Text style={{margin: 10}}>Michigan Course Difficulty Guide</Text>
      <Image
        source={require('../../img/block-m.png')}
        style={{ width: 200, height: 200, margin: 10}}
      />

      <Picker
        style={{margin: 10}}
        selectedValue={course}
        onValueChange={(itemValue, itemIndex) =>
          setCourse(itemValue)
        }>
        {pickerItems}
      </Picker>
      <TouchableOpacity
                    onPress={() => onCoursePress()}>
                    <Text>Submit</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;

