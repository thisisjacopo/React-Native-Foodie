
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';


const Root = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{
      <Root.Navigator>
         <Root.Screen name="SearchScreen" 
         component={SearchScreen} /> 
         <Root.Screen name="ResultShowScreen" 
         component={ResultShowScreen} />
      </Root.Navigator>
    }</NavigationContainer>
  );
}

