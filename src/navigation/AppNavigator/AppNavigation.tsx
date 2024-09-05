import * as React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screen/login/Login';
import Home from '../../screen/Home/Home';
import BottomNavigator from '../BottomNavigator/BottomNavigator';



const Stack = createNativeStackNavigator();


function AppNavigation() {

  return (

    <Stack.Navigator screenOptions={{headerShown: false}}> 
     <Stack.Screen 
       name="BottomNavigator" 
       component={BottomNavigator} 
       options={{animation: 'slide_from_bottom'}}
       /> 

<Stack.Screen name="SignScreen" component={Home} 
       options={{animation: 'slide_from_bottom'}}
       /> 
    </Stack.Navigator>
        // <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        //   <Stack.Screen name="BottomNavigation" component={BottomNavigator} />
        // </Stack.Navigator>
        
        // <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        //   <Stack.Screen name="Login" component={Login} />
        // </Stack.Navigator>
      
    
  );
}

export default AppNavigation;