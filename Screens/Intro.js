import { React, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, StyleSheet, Text, ActivityIndicator } from "react-native";
import { Headline, Subheading, Paragraph } from "react-native-paper";
import GButton from "../Components/GButton";
import COLORS from "../assets/COLORS";
import { singinWithSocial } from "../Firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import globalStyles from "../styles/style";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
WebBrowser.maybeCompleteAuthSession();

export default function Intro({ navigation }) {
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    expoClientId:
      "1072406929830-e7iuul1qrfemaf5h3ktqk081ap1bpves.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.assToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  function continuesWithGoogle() {
    setLoading(true);
    singinWithSocial(googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setLoading(false);
        goToHome();
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function continuesWithFacebook() {
    singinWithSocial(facebookProvider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        setLoading(false);
        goToHome();
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(error);
      });
  }

  function goToHome() {
    navigation.navigate("Home");
  }

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
        <Subheading>Learn New Skills</Subheading>
      </View>

      <GButton
        mode="outlined"
        icon={"facebook"}
        labelStyle={globalStyles.btnText}
        title={"Sign in with Facebook"}
        buttonColor={COLORS.white}
        textColor={COLORS.primary}
        onPress={() => {
          continuesWithFacebook();
        }}
      />

      {userInfo === null ? (
        <GButton
          mode="outlined"
          icon={"google"}
          labelStyle={globalStyles.btnText}
          title={"Sign in with Google"}
          buttonColor={COLORS.white}
          textColor={COLORS.darkOrange}
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      ) : (
        <Text>{userInfo.name}</Text>
      )}

      <GButton
        mode="contained"
        labelStyle={styles.ContinuesButtonLabel}
        title={"Sign In"}
        buttonColor={COLORS.primary}
        textColor={COLORS.white}
        onPress={() => navigation.navigate("Login")}
      />

      <Text style={styles.Text}>OR</Text>

      <GButton
        mode="contained"
        labelStyle={styles.ContinuesButtonLabel}
        title={"Create Account"}
        buttonColor={COLORS.primary}
        textColor={COLORS.white}
        onPress={() => navigation.navigate("Register")}
      />

      <Paragraph style={styles.Paragraph}>
        By Tapping, Create Account or Use another Account. I agree to Keeper’s
        Terms of Services, Privacy Policy
      </Paragraph>
      <StatusBar style="auto" />
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

  Text: {
    fontSize: 14,
    paddingTop: 20,
    alignItems: "center",
  },
});
