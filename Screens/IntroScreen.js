import { React, useState } from "react";
import { View, Image, StyleSheet, Text, ActivityIndicator } from "react-native";
import { Headline, Subheading, Paragraph, Alert } from "react-native-paper";
import GButton from "../Components/GButton";
import COLORS from "../assets/COLORS";
import globalStyles from "../styles/style";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../Firebase/auth";
import { auth } from "../Firebase/firebase-config";

export default function IntroScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  async function onGooglePress(){
    setLoading(true);
    await signInWithPopup(auth, googleProvider)
      .then((resuult) => {
        const credential = GoogleAuthProvider.credentialFromResult(resuult);
        const token = credential.accessToken;
        const secret = credential.secret;
        const user = resuult.user;
        setLoading(false);
        navigation.navigate("Profile");
      })
      .catch((e) => {
        setLoading(false);
        const eCode = e.code;
        const eMessage = e.message;
        const email = e.auth.email;
        const credential = GoogleAuthProvider.credentialFromError(e);
      });
  };

  // const facebookProvider = new FacebookAuthProvider();

  // function continuesWithFacebook (){
  //   singinWithSocial(facebookProvider).then((result) => {
  //     const user = result.user;
  //     const credential = FacebookAuthProvider.credentialFromResult(result);
  //     const accessToken = credential.accessToken;
  //     setLoading(false);
  //     goToHome();
  //   })
  //   .catch((error) => {
  //     setLoading(false);
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     const email = error.customData.email;
  //     const credential = FacebookAuthProvider.credentialFromError(error);
  //     console.log(error);

  //   });
  // }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : null}
      <Image
        source={require("../assets/Intro.png")}
        style={{ marginTop: 100 }}
      />

      <View style={styles.Textviwe}>
        <Headline>Welcome to Keeper</Headline>
        <Subheading>Learn skills daily</Subheading>
      </View>

      <GButton
        mode="contained"
        labelStyle={styles.ContinuesButtonLabel}
        icon="facebook"
        title={"Sign In with Facebbok"}
        buttonColor={COLORS.primary}
        textColor={COLORS.white}
        onPress={() => {}}
      />

      <GButton
        mode="contained"
        labelStyle={styles.ContinuesButtonLabel}
        icon="google"
        title={"Sign In with Google"}
        buttonColor={COLORS.primary}
        textColor={COLORS.white}
        onPress={() => {
          onGooglePress();
        }}
      />

      <GButton
        mode="outlined"
        labelStyle={styles.ContinuesButtonLabel}
        title={"Create Account"}
        color={COLORS.primary}
        onPress={() => navigation.navigate("Register")}
      />

      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          marginBottom: 20,
        }}
      >
        <Text
          style={{ color: COLORS.black, fontWeight: "bold", marginBottom: 20 }}
        >
          You have an account?
        </Text>
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
      </View>
      <Paragraph style={styles.Paragraph}>
        By Signing In or Creating Account. I agree to Keeper's Terms of
        Services, Privacy Policy
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  ContinuesButtonLabel: {
    fontSize: 14,
  },

  Textviwe: {
    padding: 30,
    alignItems: "center",
  },

  Paragraph: {
    textAlign: "center",
    padding: 50,
    fontSize: 14,
  },
});
