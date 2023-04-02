import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { register } from "../Firebase/auth";

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
      // Something is wrong in this case
      alert("Can not use this password");
    } else if (password !== confirmPassword) {
      alert("Passwords doesn't match");
    } else {
      register(email, password).then(() => {
        navigation.navigate("Login");
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
          autoFocus={true}
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
        onPress={() => navigation.navigate("Forgot")}
      >
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.login}
        onPress={() => {
          registerUser();
        }}
      >
        <Text style={styles.textStyle}>Register</Text>
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
  textStyle: {
    color: "white",
    fontSize: 15,
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
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  login: {
    alignItems: "center",
    width: "35%",
    height: 40,
    borderRadius: 30,
    backgroundColor: "#FF7000",
    textAlign: "center",
    padding: 10,
  },
  forgot: {
    height: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
