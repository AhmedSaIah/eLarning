import { StatusBar } from "expo-status-bar";
import { React } from "react";
import { StyleSheet, View, Text } from "react-native";
import { auth } from "../Firebase/firebase-config";

export default function DashboardScreen( {navigation} ) {
  return (
      <View style={styles.container}>
        <Text style={styles.TextInput}>Welcom Abroad </Text>
        <Text style={styles.userName}>{auth.currentUser.email}</Text>
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
  TextInput: {
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 25,
    textAlign: "left",
  },
  userName: {
    flex: 1,
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
  },
});
