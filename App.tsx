import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screen/SplashScreen';
import LandingPage from './screen/LandingPage';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LandingPage" component={LandingPage} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        <MyStack></MyStack>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
