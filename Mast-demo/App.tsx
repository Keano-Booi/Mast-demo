import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen 1" component={Screen1} />
        <Tab.Screen name="Screen 2" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
