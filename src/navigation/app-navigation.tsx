import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SignupScreen } from '../screens';

const Stack = createNativeStackNavigator();
function AppNavigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="SignUp" component={SignupScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default AppNavigation;