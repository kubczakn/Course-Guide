import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const getCourses = require('./courses.js');

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

const App = (props) => {
  const [course, setCourse] = useState();

  const courses = getCourses();

  const pickerItems = courses.map((courseLabel, index) => 
      <Picker.Item key={index} label={courseLabel} value={courseLabel} />
  );

  return (
    <View style={styles.title}>
      <Text>Michigan Course Difficulty Guide</Text>
      <Image
        source={require('./img/block-m.png')}
        style={{ width: 200, height: 200}}
      />

      <Picker
        selectedValue={course}
        onValueChange={(itemValue, itemIndex) =>
          setCourse(itemValue)
        }>
        {pickerItems}
      </Picker>

      <StatusBar style="auto" />
    </View>
  );
}

export default App;

