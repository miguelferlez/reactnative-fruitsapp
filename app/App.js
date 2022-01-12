import React from 'react';
import { View } from 'react-native';
import BottomTabNavigator from './src/navigation/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
export default App;