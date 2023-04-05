import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { resetPassword } from "../Firebase/auth";
import {globalStyles} from "../styles/style";
import COLORS from "../assets/COLORS";

export default function ForgotScreen({ navigation }) {
  const [email, setEmail] = useState("");
  // const [sent, setSent] = useState(false);

  function forgetPassword() {
    resetPassword(email)
      .then(() => {
        // setSent(true);
        alert("An email has been sent to reset your password");
        navigation.navigate("Login");
      })
      .catch((e) => {
        alert("Error", e.message);
      });
  };

  return (
    <View style={globalStyles.container}>
      <View>
        <Text style={globalStyles.headerText}>Find your account</Text>
      </View>
      <View style={globalStyles.inputView}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Email"
          placeholderTextColor={COLORS.black}
          cursorColor={COLORS.black}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <TouchableOpacity style={globalStyles.btnContainer} onPress={() => forgetPassword()}>
        <Text style={globalStyles.textStyle}>Reset password</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
