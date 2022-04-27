/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ThreeDSScreen from 'react_geideapay/components/ThreeDSScreen.js';
import CheckoutScreen from 'react_geideapay/components/CheckoutScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Geidea Example'}}
        />
        <Stack.Screen
          name="Browser"
          component={ThreeDSScreen}
          options={({route}) => ({title: route.params.title})}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={({route}) => ({title: route.params.screenTitle})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
