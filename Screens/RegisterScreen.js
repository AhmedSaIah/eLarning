import { React, useState } from "react";
import { View } from "react-native";
import { register } from "../Firebase/auth";
import { COLORS } from "../assets/COLORS";
import { globalStyles } from "../styles/style";
import GInput from "../Components/GInput";
import GButton from "../Components/GButton";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // const minNumberofChars = 6;
  // const maxNumberofChars = 16;
  // const namePattern = /^[a-zA-Z ]{2,30}$/;

  function registerUser() {
    if (email === "" || password === "") {
      alert("Email or password or username is empty");
    } else if (!emailPattern.test(email)) {
      alert("Please use a real email");
    }
    // else if (password < minNumberofChars || password > maxNumberofChars) {
    //   // Something is wrong in this case
    //   alert("Can not use this password");
    // }
    else if (password !== confirmPassword) {
      alert("Passwords doesn't match");
    }
    // else if (!namePattern.test(displayName)) {
    //   alert("Invalid display name!");
    // }
    else {
      register(email, password).then(() => {
        navigation.navigate("Login");
      });
    }
  }

  return (
    <View style={globalStyles.container}>
      <GInput
        modeValue={"outlined"}
        labelName={"Email"}
        onChangeText={setEmail}
        value={email}
      />
      <GInput
        modeValue={"outlined"}
        labelName={"Password"}
        onChangeText={setPassword}
        value={password}
      />
      <GInput
        modeValue={"outlined"}
        labelName={"Confirm Password"}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <GButton
        mode="contained"
        labelStyle={globalStyles.btnText}
        title={"Register"}
        buttonColor={COLORS.primary}
        textColor={COLORS.white}
        onPress={() => registerUser()}
      />
    </View>
  );
}
