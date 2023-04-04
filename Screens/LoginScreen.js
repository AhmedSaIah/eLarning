import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { login } from "../Firebase/auth";
import { COLORS } from "../assets/COLORS";
import {globalStyles} from "../styles/style";

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
    <View style={globalStyles.container}>
      <View style={globalStyles.inputView}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Email"
          placeholderTextColor="black"
          cursorColor={COLORS.orange}
          autoFocus= {true}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={globalStyles.inputView}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          cursorColor={COLORS.orange}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Forgot")}
      >
        <Text style={globalStyles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.login} onPress={() => signInUser()}>
        <Text style={globalStyles.textStyle}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
