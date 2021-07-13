import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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
        <Picker.Item label="EECS" value="eecs" />
        <Picker.Item label="MATH" value="math" />
      </Picker>

      <StatusBar style="auto" />
    </View>
  );
}

export default App;

