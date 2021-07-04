import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/mainScreen';

const Stack = createStackNavigator();

export default class App extends Component {
  render() { return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            options={{
              headerShown:false,
            }} 
            name="mainScreen" 
            component={MainScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

  )};

}


