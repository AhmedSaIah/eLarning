import { React } from "react";
import { View, Text, Image } from "react-native";
import { auth } from "../Firebase/firebase-config";
import { logout } from "../Firebase/auth";
import { globalStyles } from "../styles/style";
import GButton from "../Components/GButton";
import COLORS from "../assets/COLORS";

export default function ProfileScreen({ navigation }) {
  async function signOut() {
    await logout();
    navigation.navigate("Intro");
  }

  return (
    <View style={globalStyles.profileContainer}>
      <View style={globalStyles.header}></View>
      <Image
        style={globalStyles.avatar}
        source={{
          uri: "https://www.booksie.com/files/profiles/22/mr-anonymous_230x230.png",
        }}
      />
      <Text style={globalStyles.textProfile}>{auth.currentUser.email}</Text>
      <GButton
        mode="contained"
        labelStyle={globalStyles.btnText}
        title={"SignOut"}
        buttonColor={COLORS.primary}
        textColor={COLORS.white}
        onPress={() => signOut()}
      />
    </View>
  );
}
