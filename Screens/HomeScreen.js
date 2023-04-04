import { StatusBar } from "expo-status-bar";
import { React } from "react";
import { StyleSheet,ImageBackground, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
      style={styles.background}
      source={require("../assets/eLearn.jpg")}>
      </ImageBackground>
      <View>
        <Text style={styles.headerText}>Already a user?</Text>
      </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Register")}> 
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
        <Text style={styles.forgot}>Forgot Password?</Text>
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
    textAlign: "left",
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
  background:{
    height: 150,
    width: "82%",
    marginLeft: 50,
    marginBottom: 20,
    resizeMode: "cover",
  },
  buttonContainer: {
    margin: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: "85%",
    borderRadius: 10,
    backgroundColor: "#FF7000",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18, 
  },
  TextInput: {
    marginLeft: 20,
    fontSize: 18,
    color: "white",
    textAlign:"left",
    fontWeight: "bold",
  },
  forgot: {
    height: 30,
    fontWeight: "bold",
  },
});
