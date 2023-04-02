import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { login } from "../Firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const adminEmail = "";
  // const adminPassword = "";
  function signInUser() {
    // if (login(adminEmail, adminPassword)) {
    //    TODO: Implement admin authority
    //   navigation.navigate("Profile");
    // }
    login(email, password)
      .then(() => {
        navigation.navigate("Profile");
      })
      .catch((e) => {
        alert("Something went wrong while logging you in ", e.message);
        navigation.navigate("Login");
        console.log("Error logging user in: ", e.message);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="white"
          autoFocus= {true}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity
        style={styles.forgot}
        onPress={() => navigation.navigate("Forgot")}
      >
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login} onPress={() => signInUser()}>
        <Text style={styles.textStyle}>Login</Text>
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
  inputView: {
    backgroundColor: "#FF7000",
    borderRadius: 10,
    width: "85%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  textStyle:{
    color: "white",
    fontSize: 15,
  },
  login: {
    alignItems: "center",
    width: "35%",
    height: 40,
    borderRadius: 15,
    backgroundColor: "#FF7000",
    textAlign: 'center',
    padding: 10
  },
  forgot: {
    height: 30,
    marginBottom: 20,
    fontWeight: "bold"
  },
});
