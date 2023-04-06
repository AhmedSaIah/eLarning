import { StatusBar } from "expo-status-bar";
import { React } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { auth } from "../Firebase/firebase-config";
import { logout } from "../Firebase/auth";
import { globalStyles } from "../styles/style";

export default function ProfileScreen({ navigation }) {
  async function logoutUser() {
    await logout();
    navigation.navigate("Home");
  }

  return (
    <View style={globalStyles.profileContainer}>
      <View style={globalStyles.header}></View>
      <Image
        style={globalStyles.avatar}
        source={{
          uri: "https://www.booksie.com/files/profiles/22/mr-anonymous_230x230.png",
        }}
      />
      <Text style={globalStyles.textProfile}>{auth.currentUser.email}</Text>
      <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => logoutUser()}
      >
        <Text style={globalStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
