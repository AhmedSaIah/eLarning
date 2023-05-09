import React, { useState } from 'react'
import { View, TouchableOpacity, ImageBackground} from 'react-native'
import { globalStyles } from "../styles/style";
import GInput from "../Components/GInput";
import GButton from "../Components/GButton";
import { COLORS } from "../assets/COLORS";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Title } from 'react-native-paper';
import { auth, db } from '../Firebase/firebase-config';
import { doc, updateDoc, getDoc } from "firebase/firestore";

export default function EditProfileScreen({navigation}) {
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const getUser=async()=>{
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const data = docSnap.data();
      setFirstName(data.FirstName);
      setSecondName(data.SecondName);
      setBirthdate(data.Birthdate);
      setPhone(data.Phone);
      setEmail(data.email);
    } else {
  // docSnap.data() will be undefined in this case
    console.log("No such document!");
}
  }

  const handleUpdate = async()=>{
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      FirstName: FirstName,
      SecondName: SecondName,
      Birthdate: Birthdate,
      Phone: Phone
    });
  } 
  
  const handleOnPress = async() => {
    await handleUpdate();
    await getUser();
    navigation.navigate("Profile");
  }

  return (
   <View style={globalStyles.Editcontainer}>

     <TouchableOpacity>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: "https://www.booksie.com/files/profiles/22/mr-anonymous_230x230.png",
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Title style={globalStyles.Title}>Edit Your Profile</Title>
    <View style={globalStyles.row}>
    <GInput
        modeValue={"outlined"}
        labelName={"First Name"}
        onChangeText = {FirstName => setFirstName(FirstName)}
      />
        </View>
        <View style={globalStyles.row}>
    <GInput
        modeValue={"outlined"}
        labelName={"Last Name"}
        onChangeText = {SecondName => setSecondName(SecondName)}

      />
        </View>
        <View style={globalStyles.row}>
        </View>
        <View style={globalStyles.row}>
    <GInput
        modeValue={"outlined"}
        labelName={"Phone Number"}
        onChangeText = {Phone => setPhone(Phone)}

      />
        </View>
        <View style={globalStyles.row}>
    <GInput
        color={"#777777"}
        modeValue={"outlined"}
        labelName={"Birthdate"}
        onChangeText = {Birthdate => setBirthdate(Birthdate)}
      />
        </View>
        <GButton title="Update"
        mode="contained"
        labelStyle={globalStyles.btnText}
        buttonColor={COLORS.primary}
        textColor={COLORS.white}
         onPress={() => handleOnPress()}/>
   </View>
   
  )
}
