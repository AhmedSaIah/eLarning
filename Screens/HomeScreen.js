import { StatusBar } from "expo-status-bar";
import { React } from "react";
import { StyleSheet,ImageBackground, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
      style={styles.background}
      source={require("../assets/talabatlogo.png")}>
      </ImageBackground>
      <View>
        <Text style={styles.headerText}>Already a user?</Text>
      </View>
      <View style={styles.inputView}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.TextInput}>       Login      </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}> 
          <Text style={styles.TextInput}>       Register        </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
        <Text style={styles.forgot}>        Forgot Password?        </Text>
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
    height: 61,
    width: "82%",
    marginLeft: 50,
    marginBottom: 20,
    resizeMode: "cover",
  },
  inputView: {
    backgroundColor: "#FF7000",
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 50,
    width: "90%",
    height: 45,
    marginBottom: 20,
    padding: 10,
    alignItems: "center",
  },
  TextInput: {
    marginLeft: 20,
    fontSize: 18,
    color: "white",
    textAlign:"left",
    fontWeight: "bold",
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
    fontWeight: "bold",
  },
});
