import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
  },
  title: {
    
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
  }
});


const Item = ({ course }) => {
  return (
    <View style={styles.item}>
      <Text>{course}</Text>
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

  const onGradePress = () => {
    setFilteredCourses( () => {
      const res = returnedCourses.filter(function (course) {
        return course.medianGrade == grade;
      });
      return res;
    });
  }

  // TODO: Add links for each item

  return (
    <View style={styles.container}>
      <View style={styles.title}>
          <Text >View Median Grade for Subject Courses</Text>
      </View>
      <View style={styles.dropDown}>
        <Picker
          style={{margin: 10}}
          selectedValue={grade}
          onValueChange={(itemValue) =>
            setGrade(itemValue)
          }>
          <Picker.Item  label='A' value='A' />
          <Picker.Item  label='A-' value='A-' />
          <Picker.Item  label='B+' value='B+' />
          <Picker.Item  label='B' value='B' />
          <Picker.Item  label='B-' value='B-' />
        </Picker>
        <TouchableOpacity
                      style={{margin: 10}}
                      onPress={() => onGradePress()}>
                      <Text>Select Grade</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={filteredCourses}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
        numColumns={2}
      />
{/*       
      <View>
        {results}
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

export default CourseScreen;

