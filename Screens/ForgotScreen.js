import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { resetPassword } from "../Firebase/auth";

export default function ForgotScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function forgetPassword() {
    resetPassword(email)
      .then(() => {
        setSent(true);
        alert("An email has been sent to reset your password");
        navigation.navigate("Login");
      })
      .catch((e) => {
        alert("Error", e.message);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Find your talabat account</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => forgetPassword()}>
        <Text style={styles.textStyle}>Send password reset link</Text>
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
  headerText: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 15,
  },
  textStyle:{
    color: "white",
    fontSize: 15,
  },
  inputView: {
    backgroundColor: "#FF7000",
    borderRadius: 10,
    width: "85%",
    height: 45,
    marginBottom: 15,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 18,
    textAlign: "center",
  },
  btn: {
    width: "45%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF7000",
  },
  forgot: {
    height: 30,
    marginBottom: 30,
  },
});
