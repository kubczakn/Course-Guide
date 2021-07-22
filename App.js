import React, { useState } from 'react';
import HomeScreen from './src/components/homeScreen'
import SubjectScreen from './src/components/subjectScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = (props) => {

   return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Subject" component={SubjectScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;

