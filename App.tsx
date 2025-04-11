import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screen/SplashScreen';
import LandingPage from './screen/LandingPage';
import CreateBusiness from './screen/CreateBusiness';
import ListBusiness from './screen/ListBusiness';
import CreateArticle from './screen/CreateArticle';
import ArticaleList from './screen/ArticaleList';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="CreateBusiness" component={CreateBusiness} />
      <Stack.Screen name="ListBusiness" component={ListBusiness} />
      <Stack.Screen name="CreateArticle" component={CreateArticle} />
      <Stack.Screen name="ArticaleList" component={ArticaleList} />

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
