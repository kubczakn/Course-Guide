import React, { useState } from 'react';
import HomeScreen from './src/components/homeScreen'
import CourseScreen from './src/components/courseScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = (props) => {

   return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Course" component={CourseScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;

