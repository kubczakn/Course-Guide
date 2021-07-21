import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
  },
  text: {
    fontSize: 28,
  },
  title: {
      fontSize: 24,
      color: 'white',
  },
  dropDown: {
      flexDirection: 'row',
      flexWrap: 'wrap',
  },
  list: {

  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#00274C'
  },
  button: {
    color: "#A9A9A9",
    margin: 10,
  }
});


const Item = ({ course }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{course}</Text>
    </View>
  );
};

const CourseScreen = ( { route, navigation } ) => {
  const { returnedCourses } = route.params;

  const [grade, setGrade] = useState('A');

  const [filteredCourses, setFilteredCourses] = useState(() => {
      const res = returnedCourses.filter(function (course) {
        return course.medianGrade == grade;
      });
      return res  
  });  

  const renderItem = ({ item }) => (
      <Item course={item.course} /> 
  );

  const onGradeChange = (val) => {
    setGrade(val);
    console.log(val);
    setFilteredCourses( () => {
      const res = returnedCourses.filter(function (course) {
        return course.medianGrade == val;
      });
      return res;
    });
    
  }

  console.log(filteredCourses);

  // TODO: Add links for each item, better variable naming

  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.text}>View Median Grade for Subject Courses</Text>
      </View>
      <View style={styles.dropDown}>
        <Picker
          style={{margin: 10, width: 100,}}
          selectedValue={grade}
          onValueChange={(itemVal) => onGradeChange(itemVal)}
          >
          <Picker.Item  label='A' value='A' />
          <Picker.Item  label='A-' value='A-' />
          <Picker.Item  label='B+' value='B+' />
          <Picker.Item  label='B' value='B' />
          <Picker.Item  label='B-' value='B-' />
        </Picker>
      </View>
      <FlatList 
        data={filteredCourses}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
        numColumns={2}
      />

      <StatusBar style="auto" />
    </View>
  );
}

export default CourseScreen;

