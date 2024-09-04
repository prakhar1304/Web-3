import * as React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screen/login/Login';



const Stack = createNativeStackNavigator();
export const navigateRef: any = createNavigationContainerRef();

function AppNavigation() {

  return (
    <NavigationContainer ref={navigateRef}>
      {true ?
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        :
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default AppNavigation;