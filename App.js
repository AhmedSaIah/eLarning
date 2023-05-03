import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { React } from "react";
import { View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import HomeScreen from "./Screens/HomeScreen";
import ForgotScreen from "./Screens/ForgotScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import IntroScreen from "./Screens/IntroScreen";
import OnboardingScreen from "./Screens/OnBoardingScreen";
import EditProfileScreen from "./Screens/EditProfileScreen";
const Stack = createNativeStackNavigator();

export default function App({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" component={OnboardingScreen} options={{headerShown: false}} />
        <Stack.Screen name="Intro" component={IntroScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen}  options={{headerShown: false}}/>

      </Stack.Navigator>
      <View>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
