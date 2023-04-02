import { StatusBar } from "expo-status-bar";
import { React } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { auth } from "../Firebase/firebase-config";
import { logout } from "../Firebase/auth";
import COLORS from "../assets/COLORS";

export default function ProfileScreen({ navigation }) {
  async function logoutUser() {
    logout();
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://www.booksie.com/files/profiles/22/mr-anonymous_230x230.png",
        }}
      />
      <Text style={styles.TextInput}>{auth.currentUser.email}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => logoutUser()}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  TextInput: {
    padding: 10,
    paddingTop: 55,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonContainer: {
    margin: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 15,
    backgroundColor: COLORS.orange,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15, 
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  header:{
    backgroundColor: COLORS.black,
    height:200,
  },
});
