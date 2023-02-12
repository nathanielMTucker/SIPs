// Apple Developer Console :: https://ignition-a826c.firebaseapp.com/__/auth/handler
// Facebook app configuration :: https://ignition-a826c.firebaseapp.com/__/auth/handler

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FirebaseContext } from './context/authentication';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Main } from './pages/Main';
import { Authentication, ForgotPassword, Register } from './pages/Authentication';
import { Splash } from './pages/Loading';
import { Error } from './pages/Error'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const auth = React.useContext(FirebaseContext)
  
  const [user, loading, error] = useAuthState(auth)

  const Start = () => {
    if(loading){
      return <Stack.Screen 
      name="Splash"
      component={Splash}
    />
    }
    if(user) {
      return <Tab.Navigator>
        <Tab.Screen 
              name="Main"
              component={Main}
            />
      </Tab.Navigator>
    }
    if(error){
      return <Stack.Screen
      name="Error"
      component={Error}
      />
    }
    return <Stack.Group>
       <Stack.Screen
        name="Login"
        component={Authentication}
      />
      <Stack.Screen
        name="Forgot_Password"
        component={ForgotPassword}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
     </Stack.Group>
    
  }

  return (
    <SafeAreaView 
      style={{
        // backgroundColor : "black",
        minHeight : "100%",
      }}
    >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            {Start()}
            
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
