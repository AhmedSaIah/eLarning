import {useState,useContext} from 'react';
import * as React from "react";
import { View,StyleSheet,Text, TouchableOpacity, ActivityIndicator,KeyboardAvoidingView, Keyboard} from 'react-native';
import {Title, Subheading,TextInput} from 'react-native-paper';
import {login} from "../Firebase/auth";
import GButton from '../Components/GButton';
import GInput from '../Components/GInput';
import COLORS from '../assets/COLORS';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function Login({navigation})  {
    const InstructorEmail = 'instructor@keeper.com';
    const InstructorPassword = 'instructor';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [color, setColor] = useState(COLORS.secondary);
    const [secureText, setSecureText] = useState(true);

    async function signInUser() {
        if(login(InstructorEmail,InstructorPassword)){
            // goToInstructorHome();
        }
        login(email, password).then(() => {
            goToHome();
        }).catch((e) => {
            alert(e.message);
            console.log(e.message);
        });
    }

    function goToHome() {
        navigation.navigate('Courses');
    }

    // function  goToInstructorHome(){
    //     navigation.navigate('InstructorHome');
    // }
    
    function onPress(){
        setColor(COLORS.primary);
        setSecureText(!secureText);
      }
    
    return(
        <KeyboardAvoidingView style ={{flex:1}}>
        <View style = {styles.container} onPress ={Keyboard.dismiss}>
            <Title style = {styles.Title}>Welcome Back!</Title>

            <Subheading>Log in to continue</Subheading>

            <View style = {{paddingTop : 50}}>
            <GInput
                modeValue={"outlined"} 
                labelName={"Email"}
                placeholder = "user@gmail.com"
                onChangeText={setEmail} 
                value={email}   
            />

            <GInput 
                modeValue={"outlined"}
                labelName={"Password"}
                secureTextEntry={secureText} 
                right = {<TextInput.Icon name = "eye" onPress = {onPress} color = {COLORS.black}/>}
                onChangeText={setPassword}
                value={password}     
            />

            <GButton
                mode = "text"
                labelStyle={[styles.ContinuesButtonLabel,{textDecorationLine : 'underline'}]}
                title={"Forgot Password ?"}
                textColor = {COLORS.black}
                onPress= {() =>  navigation.navigate('ForgotPassword')}
            />

            <GButton
                mode = "contained"
                labelStyle={styles.ContinuesButtonLabel}
                title={"Login"}
                buttonColor = {COLORS.primary}
                onPress = {() => {signInUser()}}
            />

        </View>

            <Text style = {styles.Text}>OR</Text>
{/* 
            <FormButton
                mode = "outlined"
                icon={"facebook"}
                labelStyle={styles.ContinuesButtonLabel}
                title={"Login With Facebook"}
                color = {COLORS.primary}
            />

            <FormButton
                mode = "outlined"
                icon={"google"}
                labelStyle={styles.ContinuesButtonLabel}
                title={"Login With Google"}
                color = {COLORS.primary}
            /> */}

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    marginTop: 40,
                    marginBottom: 20,
                }}>
                <Text style={{color: COLORS.black, fontWeight: 'bold'}}>
                    don't have an account ?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                    <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
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
      alignItems: 'center',
    },

    Title:{
        fontSize : 24,
        fontWeight: 'bold',
        paddingTop : 50
    },

    ContinuesButtonLabel : {
        fontSize: 14,
    },

    Text :{
        fontSize : 14,
        paddingTop : 20,
        alignItems: 'center',
    }

});