import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function ForgotScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      <View style={styles.container}>
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
