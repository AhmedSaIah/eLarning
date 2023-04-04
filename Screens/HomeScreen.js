import { StatusBar } from "expo-status-bar";
import { React } from "react";
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import {globalStyles} from "../styles/style";

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.homeContainer}>
      <ImageBackground
      style={globalStyles.background}
      source={require("../assets/eLearn.jpg")}>
      </ImageBackground>
      <View>
        <Text style={globalStyles.headerText}>Already a user?</Text>
      </View>
        <TouchableOpacity style={globalStyles.btnContainer} onPress={() => navigation.navigate("Login")}>
          <Text style={globalStyles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.btnContainer} onPress={() => navigation.navigate("Register")}> 
          <Text style={globalStyles.btnText}>Register</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
        <Text style={globalStyles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
