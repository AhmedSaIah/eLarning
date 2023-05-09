import { React, useState } from "react";
import { Alert, View } from "react-native";
import { resetPassword } from "../Firebase/auth";
import { globalStyles } from "../styles/style";
import COLORS from "../assets/COLORS";
import GButton from "../Components/GButton";
import GInput from "../Components/GInput";
import { Title } from "react-native-paper";


export default function ForgotScreen({ navigation }) {
  const [email, setEmail] = useState("");

  function forgetPassword() {
    resetPassword(email)
      .then(() => {
        // setSent(true);
        alert("An email has been sent to reset your password");
        navigation.navigate("Login");
      })
      .catch((e) => {
        Alert.alert("Error", e.message);
      });
  }

  return (
    <View style={globalStyles.container}>
      <Title>Find Your Account</Title>
      <GInput
        modeValue={"outlined"}
        labelName={"Email"}
        onChangeText={setEmail}
        value={email}
      />
      <GButton
        mode="contained"
        labelStyle={globalStyles.btnText}
        title={"Reset Password"}
        buttonColor={COLORS.primary}
        textColor={COLORS.white}
        onPress={() => forgetPassword()}
      />
    </View>
  );
}
