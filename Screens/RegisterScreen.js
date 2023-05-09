import React, {useState} from 'react';
import { View,ScrollView,StyleSheet,TouchableOpacity,ActivityIndicator, Alert} from 'react-native';
import {Title, Subheading,TextInput,Text} from 'react-native-paper';
import {register, getUserUId, login} from "../Firebase/auth";
import {addUser} from "../Firebase/user";

import GButton from '../Components/GButton';
import GInput from '../Components/GInput';
import COLORS from '../assets/COLORS';

export default function CreateAccount({navigation})  {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLasttName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [color1, setColor1] = useState(COLORS.secondary);
    const [color2, setColor2] = useState(COLORS.secondary);
    const [secureText1, setSecureText1] = useState(true);
    const [secureText2, setSecureText2] = useState(true);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const minNumberofChars = 6;
    const maxNumberofChars = 16;
    const namePattern = /^[a-zA-Z ]{2,30}$/;

    function registerUser() {
      if (email === "" || password === "") {
        alert("Email or password is empty");
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
          getUserUId().then((id) => {
            addUser({id: id, email, firstName,lastName, userImage :'https://i.ibb.co/sQzK2YR/Avatar-03.png'});
        });
        login(email,password);
        navigation.navigate('Courses');
        });
      }
    }

    function onPress1(){
        setColor1(COLORS.primary);
        setSecureText1(false);
    }
      
    function onPress2(){
        setColor2(COLORS.primary);
        setSecureText2(false);
    }

    return(
        <ScrollView style = {styles.container} >
             {loading ? <ActivityIndicator size="large" color= {COLORS.primary} /> : null}
            
            
            <View style = {styles.Viewstyle}>
                <Title style = {styles.Title}>Welcome!</Title>
                <Subheading>Take a moment to Create Account</Subheading>
            </View>


             <Title style = {styles.font}>Personal information</Title>
            
            <View style = {{alignItems: 'center'}}>

                <GInput 
                    modeValue={"outlined"}
                    labelName={"First Name"}
                    placeholder = "Enter your First Name"
                    onChangeText={setFirstName}
                    value={firstName}
                />

                <GInput 
                    modeValue={"outlined"}
                    labelName={"Last Name"}
                    placeholder = "Enter your Last Name"
                    onChangeText={setLasttName}
                    value={lastName}  
                />

                <GInput 
                    modeValue={"outlined"}
                    labelName={"Email"}
                    placeholder = "User@gmail.com"
                    onChangeText={setEmail}
                    value={email}  
                />
            </View>

             <Title style = {styles.font}>Your Password</Title>

            <View style = {{alignItems: 'center'}}>
                
                <Text>Password must be more than 6 character</Text>
                <GInput 
                    modeValue={"outlined"}
                    labelName={"Password"}
                    right = {<TextInput.Icon name = "eye" onPress = {onPress1} 
                                        color = {color1} forceTextInputFocus = {false}/>}
                    secureTextEntry={secureText1}
                    onChangeText={setPassword}
                    value={password}
                />

                <GInput 
                    modeValue={"outlined"}
                    labelName={"Confirm Password"}
                    right = {<TextInput.Icon name = "eye" onPress = {onPress2} 
                                            color = {color2} forceTextInputFocus = {false}/>}
                    secureTextEntry={secureText2}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}        
                />

            </View>

             <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    marginTop: 40,
                    marginBottom: 20,
                }}>
                <Text style={{color: COLORS.black, fontWeight: 'bold'}}>
                    You have an account ?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
                    Sign-in
                    </Text>
                </TouchableOpacity>
            </View>

            <View style = {{paddingBottom: 20,alignItems: 'center'}}>
                <GButton
                    mode = "contained"
                    labelStyle={styles.ContinuesButtonLabel}
                    title={"Create Account"}
                    buttonColor = {COLORS.primary}
                    onPress = {() => {registerUser()}}
                />
            </View>  
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
      },

      Viewstyle:{
        paddingTop : 50,
        paddingLeft : 20,
      },

      Title:{
        fontSize : 30,
        fontWeight: 'bold',
    },

    RadioButton : {
        flexDirection: "row"
    },

    Text:{
        padding : 5,
        fontSize : 16,
    },

    ContinuesButtonLabel : {
        fontSize: 14,
    },

    font:{
        fontSize : 18,
        fontWeight : 'bold',
        color : COLORS.black,
        paddingTop : 10,
        paddingLeft : 20
    }
})