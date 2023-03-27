import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ForgotScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Find your talabat account</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email or username"
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text>Next</Text>
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
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
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
  btn: {
    width: "35%",
    borderRadius: 25,
    height: 50,
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
