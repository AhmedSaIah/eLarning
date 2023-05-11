import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding from '../Screens/OnBoardingScreen';
import Intro from '../Screens/IntroScreen';
import CreateAccount from '../Screens/RegisterScreen';
import Login from '../Screens/LoginScreen';
import ForgotPassword from '../Screens/ForgotScreen';
import Courses from "../Screens/Courses";

const Stack = createNativeStackNavigator();

export default function AuthStack() {

    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  
    useEffect(() => {
      AsyncStorage.getItem('alreadyLaunched').then(value => {
        if(value === null){
          AsyncStorage.setItem('alreadyLaunched','true');
          setIsFirstLaunch(true);
        }else{
          setIsFirstLaunch(false);
        }
      });
  
    },[]);
  
    if(isFirstLaunch === null){
      return null;
    }else if (isFirstLaunch === true){
      return(
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Onboarding" component={Onboarding}  options = {{headerShown : false}}/>
              <Stack.Screen name='Intro' component={Intro} options = {{headerShown : false}}/>
              <Stack.Screen name='CreateAccount' component={CreateAccount}/>
              <Stack.Screen name='Login' component={Login}/>
              <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
              <Stack.Screen name='Courses' component={Courses} options ={{headerShown : false}}/> 

            </Stack.Navigator>
          </NavigationContainer>
      );
    }else{
      return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Intro'>
          <Stack.Screen name='Intro' component={Intro} options = {{headerShown : false}}/>
          <Stack.Screen name='CreateAccount' component={CreateAccount}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
          <Stack.Screen name='Courses' component={Courses} options ={{headerShown : false}}/> 

        </Stack.Navigator>
      </NavigationContainer>
      ) 
    }

}