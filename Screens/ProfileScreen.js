import { React , useState} from "react";
import { View, Text, Image , SafeAreaView, TouchableOpacity } from "react-native";
import { auth, db } from "../Firebase/firebase-config";
import { logout } from "../Firebase/auth";
import { globalStyles } from "../styles/style";
import { Caption, Title } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { doc, getDoc } from "firebase/firestore";


export default function ProfileScreen({ navigation , route}) {
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [Phone, setPhone] = useState("");

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
  async function signOut() {
    await logout();
    navigation.navigate("Intro");
  }
  getUser();
  return (
    <SafeAreaView style={globalStyles.profileContainer}>
      <View style={globalStyles.header}>
        <View>
      <Image
        style={globalStyles.avatar}
        source={{
          uri: "https://www.booksie.com/files/profiles/22/mr-anonymous_230x230.png",
        }}
        size={80}
      />
      </View>
      
      </View>
      <Text style={globalStyles.Title}>{FirstName}{SecondName}</Text>
      {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
      <Caption style={globalStyles.caption}>Computer Sci</Caption>
      <View style={globalStyles.userBtnWrapper}>
        <TouchableOpacity style={globalStyles.userBtn} 
         onPress={() => {navigation.navigate("EditProfile");
        }}>
          <Text style={globalStyles.userBtnTxt}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.userBtn} onPress={() => signOut()}>
          <Text style={globalStyles.userBtnTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* <Text style={globalStyles.textProfile}>{auth.currentUser.email}</Text> */}
      {/* <Text style={globalStyles.textProfile}>{auth.currentUser.phoneNumber}</Text> */}
     <View style={globalStyles.userInfoSection}>
        <View style={globalStyles.row}>
          <Icon name="map-marker-radius" color="#777777" size={30}/>
          <Title style={{color:"#777777" , marginLeft:10}}>Cairo-Egypt</Title>
        </View>
        <View style={globalStyles.row}>
          <Icon name="phone" color="#777777" size={30}/>
          <Title style={{color:"#777777" , marginLeft:10}}>{Phone}</Title>
        </View>
        <View style={globalStyles.row}>
          <Icon name="email" color="#777777" size={30}/>
          <Title style={{color:"#777777" , marginLeft:10}}>{email}</Title>
        </View>
        <View style={globalStyles.row}>
          <Icon name="power" color="#777777" size={30}/>
          <Title style={{color:"#777777" , marginLeft:10}}>{Birthdate}</Title>
        </View>
     </View>
      {/* <GButton
        mode="contained"
        labelStyle={globalStyles.btnText}
        title={"SignOut"}
        buttonColor={COLORS.primary}
        textColor={COLORS.white}
        onPress={() => signOut()}
      /> */}
    </SafeAreaView>
  );
}