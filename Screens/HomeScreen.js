import { React } from "react";
import { ImageBackground, View } from "react-native";
import { Title, Subheading } from "react-native-paper";
import { globalStyles } from "../styles/style";
import GButton from "../Components/GButton";
import COLORS from "../assets/COLORS";

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.homeContainer}>
      <View style={globalStyles.imagesView}>
        <ImageBackground
          style={globalStyles.leftLogo}
          source={require("../assets/icon.png")}
        />
        <ImageBackground
          style={globalStyles.rightLogo}
          source={require("../assets/restIcon.png")}
        />
      </View>
      <Title style={globalStyles.Title}>Keeper</Title>
      <Subheading>Learning platform</Subheading>
      <GButton
        mode="contained"
        labelStyle={globalStyles.btnText}
        title={"Login"}
        buttonColor={COLORS.primary}
        textColor={COLORS.white}
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <GButton
        mode="outlined"
        labelStyle={globalStyles.btnText}
        title={"Create Account"}
        buttonColor={COLORS.white}
        textColor={COLORS.primary}
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
}
