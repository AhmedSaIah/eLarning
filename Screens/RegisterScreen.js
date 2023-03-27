import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { register } from "../firebase/auth";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const minNumberofChars = 6;
  const maxNumberofChars = 16;
  const namePattern = /^[a-zA-Z ]{2,30}$/;

  function registerUser() {
    if (email === "" || password === "") {
      alert("Email or password is empty");
    } else if (!emailPattern.test(email)) {
      alert("Please use a real email");
    } else if (password < minNumberofChars || password > maxNumberofChars) {
      alert("Can not use this password");
    } else if (password !== confirmPassword) {
      alert("Passwords doesn't match");
    } else {
      register(email, password).then(() => {
        navigation.navigate("Dashboard");
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="white"
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setConfirmPassword(password)}
        />
      </View>
      <TouchableOpacity
        style={styles.forgot}
        onPress={() => navigation.navigate("Forgot")}
      >
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.login}
        onPress={() => {registerUser()}}
      >
        <Text>Register</Text>
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
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 15,
    textAlign: "center",
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
