import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { login } from "../Firebase/auth";
import { COLORS } from "../assets/COLORS";
import { Title, Subheading, TextInput } from "react-native-paper";
import GButton from "../Components/GButton";
import GInput from "../Components/GInput";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState(COLORS.black);
  const [secureText, setSecureText] = useState(true);
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
        console.log("Error logging user in: ", e.message);
      });
  }

  function onPress() {
    setColor(COLORS.primary);
    setSecureText(!secureText);
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container} onPress={Keyboard.dismiss}>
        <Title style={styles.Title}>Welcome Back!</Title>
        <Subheading>Login to continue</Subheading>

        <View style={{ paddingTop: 50 }}>
          <GInput
            modeValue={"outlined"}
            labelName={"Email"}
            placeholder="user@gmail.com"
            onChangeText={setEmail}
            value={email}
          />

          <GInput
            modeValue={"outlined"}
            labelName={"Password"}
            secureTextEntry={secureText}
            // Fix eye not showing 
            right={
              <TextInput.Icon name={secureText ? "eye" : "eye-off"} color={color} onPress={onPress} />
            }
            onChangeText={setPassword}
            value={password}
          />

          <GButton
            mode="text"
            labelStyle={[
              styles.ContinuesButtonLabel,
              { textDecorationLine: "underline" },
            ]}
            title={"Forgot Password ?"}
            onPress={() => navigation.navigate("Forgot")}
          />

          <GButton
            mode="contained"
            labelStyle={styles.ContinuesButtonLabel}
            title={"Login"}
            buttonColor={COLORS.primary}
            textColor = {COLORS.white}
            onPress={() => {signInUser()}}
          />
        </View>

        <Text style={styles.Text}>OR</Text>

        <GButton
            mode = "outlined"
            icon={"facebook"}
            labelStyle={styles.ContinuesButtonLabel}
            title={"Login With Facebook"}
            buttonColor = {COLORS.secondary}
            textColor = {COLORS.primary}
        />
        <GButton
            mode = "outlined"
            icon={"google"}
            labelStyle={styles.ContinuesButtonLabel}
            title={"Login With Google"}
            buttonColor = {COLORS.secondary}
            textColor = {COLORS.darkOrange}
        /> 

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
  },

  Title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 50,
  },

  ContinuesButtonLabel: {
    fontSize: 14,
  },

  Text: {
    fontSize: 14,
    paddingTop: 20,
    alignItems: "center",
  },
});
