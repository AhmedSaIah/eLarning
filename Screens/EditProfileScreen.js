import React from 'react'
import { Button, View , Text, TouchableOpacity, ImageBackground} from 'react-native'
import { globalStyles } from "../styles/style";
import GInput from "../Components/GInput";
import GButton from "../Components/GButton";
import { COLORS } from "../assets/COLORS";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Title } from 'react-native-paper';
export default function EditProfileScreen() {

  const handleUpdate = ()=>{
    
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
      />
        </View>
        <View style={globalStyles.row}>
    <GInput
        modeValue={"outlined"}
        labelName={"Last Name"}
      />
        </View>
        <View style={globalStyles.row}>
    <GInput
        modeValue={"outlined"}
        labelName={"Email"}
      />
        </View>
        <View style={globalStyles.row}>
    <GInput
        modeValue={"outlined"}
        labelName={"Phone Number"}
      />
        </View>
        <View style={globalStyles.row}>
    <GInput
        color={"#777777"}
        modeValue={"outlined"}
        labelName={"Birthdate"}
      />
        </View>
        <GButton title="Update"
        mode="contained"
        labelStyle={globalStyles.btnText}
        buttonColor={COLORS.primary}
        textColor={COLORS.white}
         onPress={handleUpdate}/>
   </View>
   
  )
}
