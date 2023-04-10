import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { React } from "react";
import { View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import HomeScreen from "./Screens/HomeScreen";
import ForgotScreen from "./Screens/ForgotScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import Intro from "./Screens/Intro";
import OnboardingScreen from "./Screens/OnBoarding";
const Stack = createNativeStackNavigator();

export default function App({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen}  options = {{headerShown : false}}/>
        <Stack.Screen name='Intro' component={Intro} options = {{headerShown : false}}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      <View>
      </View>
    </NavigationContainer>
  );
}
