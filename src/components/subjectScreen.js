import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , FlatList, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
  },
  text: {
    fontSize: 24,
  },
  title: {
      fontSize: 20,
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
    marginVertical: 2,
    marginHorizontal: 4,
    backgroundColor: '#00274C'
  },
  button: {
    color: "#A9A9A9",
    margin: 10,
  }
});


const onCoursePress = ( { course } ) => {
  const courseLabel = course.substr(0, course.indexOf(' '))
  const courseNum = course.substr(course.indexOf(' ') + 1)
  const url = `https://atlas.ai.umich.edu/course/${courseLabel}%20${courseNum}/`;

  Linking.openURL(url);

}


const Item = ({ course }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onCoursePress( { course } )}>
      <Text style={styles.title}>{course}</Text>
    </TouchableOpacity>
  );
};

const SubjectScreen = ( { route, navigation } ) => {
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

    setFilteredCourses( () => {
      const res = returnedCourses.filter(function (course) {
        return course.medianGrade == val;
      });
      return res;
    });
    
  }


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

export default SubjectScreen;

