import { React, useState } from "react";
import { View } from "react-native";
import { register } from "../Firebase/auth";
import { COLORS } from "../assets/COLORS";
import { globalStyles } from "../styles/style";
import GInput from "../Components/GInput";
import GButton from "../Components/GButton";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/firebase-config";
export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [Phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  // const minNumberofChars = 6;
  // const maxNumberofChars = 16;
  // const namePattern = /^[a-zA-Z ]{2,30}$/;
  const phonePattern = /^01[0-2]{1}[0-9]{8}$/;;
  const BirthdatePattern = /^((0[1-9])|(1[0-2]))\/((0[1-9])|([1-2][0-9])|(3[0-1]))\/\d{4}$/;


  function registerUser() {
    if (email === "" || password === ""||Phone === "") {
      alert("Email or password or Phone is empty");
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
    else if (!phonePattern.test(Phone)) {
      alert("Invalid phone number format");
    }
    else if (!BirthdatePattern.test(Birthdate)) {
      alert("Invalid Birthdate format");
    }
    // else if (!namePattern.test(displayName)) {
    //   alert("Invalid display name!");
    // }
    else {
      register(email, password,Phone).then(() => {
        addUserToDatabase();
        navigation.navigate("Login");
      });
      
    }
  }

  const handlePhoneNumChange=(value)=>{
    setPhone(value);
    setErrorMessage('');
  };
  // const handleSubmit=()=>{
  //   if(phonePattern.test(Phone)){
  //     db.collection('phoneNumbers').add({
  //       phoneNumber: Phone,
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     }).then(() => {
  //       console.log('valid number')
  //     }).catch((error) => {
  //       console.error('Error adding phone number: ', error);
  //     });
  //   }else{
  //     setErrorMessage('Invalid phone number format');
  //   }
  // };

  const addUserToDatabase =async()=>{
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      FirstName: FirstName,
      SecondName: SecondName,
      Phone:Phone,
      Birthdate:Birthdate,
      email: email
    });
  }

  return (
    <View style={globalStyles.container}>
      <GInput
        modeValue={"outlined"}
        labelName={"First Name"}
        onChangeText={setFirstName}
        value={FirstName}
      />
      <GInput
        modeValue={"outlined"}
        labelName={"Second Name"}
        onChangeText={setSecondName}
        value={SecondName}
      />
      <GInput
        modeValue={"outlined"}
        labelName={"MM/DD/YYYY"}
        onChangeText={setBirthdate}
        value={Birthdate}
      />
      <GInput
        modeValue={"outlined"}
        labelName={"Phone"}
        KeyboardType="phone=pad"
        onChangeText={handlePhoneNumChange}
        value={Phone}
      />
      {errorMessage ?<Text style={styles.error}>{errorMessage}</Text>:null}
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
