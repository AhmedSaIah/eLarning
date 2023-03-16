import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Logo from "./assets/Talabat-logo.png";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);
  const Stack = createNativeStackNavigator();

  return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={Logo} />
        </View>
        <View style={styles.inputView}>
          <TouchableOpacity>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <TouchableOpacity>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    aspectRatio: 2 / 1,
    alignItems: "center",
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FF7000",
    borderRadius: 30,
    width: "85%",
    height: 45,
    marginBottom: 20,
    padding: 10,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 15,
  },
  login: {
    width: "30%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF7000",
    color: "white",
  },
  forgot: {
    height: 30,
    marginBottom: 30,
  },
});
