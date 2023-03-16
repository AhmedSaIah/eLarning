import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);

    registerFunc = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      alert("Account created in successfully !")
    // ...
  })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    // ..
  });
    }
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(email) => setEmail(email)}
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          /> 
        </View>
        <TouchableOpacity  style={styles.forgot} onPress={() => navigation.navigation("ForgotPass")}>
          <Text>Forgot Password?</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.loginText} onPress={() => registerFunc}>Login</Text>
        </TouchableOpacity>
        <Text>You clicked me {count} times</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      aspectRatio: 2/1,
      alignItems: 'center',
      marginBottom: 40,
    },
    inputView: {
      backgroundColor: "#FF7000",
      borderRadius: 30,
      width: "90%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      fontSize: 15
    },
    login:{
      width: "30%",
      borderRadius: 25,
      height: 50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      backgroundColor:"#FF7000",
      color: "white",
    },
    forgot: {
      height: 30,
      marginBottom: 30,
    },
  });
  