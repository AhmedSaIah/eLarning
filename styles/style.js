import { StyleSheet } from "react-native";
import {COLORS} from "../assets/COLORS";

export const globalStyles = StyleSheet.create({
  // RegisterScreen & LoginScreen

  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderColor: COLORS.black,
    borderWidth: 1,
    width: "85%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color: COLORS.black,
  },
  textStyle: {
    color: "white",
    fontSize: 15,
  },
  login: {
    alignItems: "center",
    width: "35%",
    height: 40,
    borderRadius: 15,
    backgroundColor: COLORS.orange,
    textAlign: "center",
    padding: 10,
  },
  forgot: {
    height: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },
  registerBtn: {
    alignItems: "center",
    width: "35%",
    height: 40,
    borderRadius: 15,
    backgroundColor: COLORS.orange,
    textAlign: "center",
    padding: 10,
    marginVertical: 30,
  },

  //   ProfileScreen

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  header: {
    backgroundColor: COLORS.black,
    height: 200,
    width: 400,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: 10,
  },
  textProfile: {
    padding: 10,
    paddingTop: 55,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    margin: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 15,
    backgroundColor: COLORS.orange,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 15,
  },

  //   HomeScreen & ForgotScreen - container

  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 15,
  },
  imagesView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  leftLogo: {
    height: 95,
    width: 73,
    marginRight: 15,
    marginHorizontal: 30,
  },
  rightLogo: {
    height: 95,
    width: 95,
    marginLeft: 15,
  },
  btnContainer: {
    margin: 10,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: "85%",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 50,
  },
});

export default globalStyles;
