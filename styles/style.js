import { StyleSheet } from "react-native";
import {COLORS} from "../assets/COLORS";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderColor: COLORS.orange,
    borderWidth: 2.2,
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
  textStyle:{
    color: "white",
    fontSize: 15,
  },
  login: {
    alignItems: "center",
    width: "35%",
    height: 40,
    borderRadius: 15,
    backgroundColor: COLORS.orange,
    textAlign: 'center',
    padding: 10
  },
  forgot: {
    height: 30,
    marginBottom: 20,
    fontWeight: "bold"
  },
  registerBtn: {
    alignItems: "center",
    width: "35%",
    height: 40,
    borderRadius: 15,
    backgroundColor: COLORS.orange,
    textAlign: "center",
    padding: 10,
    marginVertical: 30
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
  header:{
    backgroundColor: COLORS.black,
    height:200,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  textProfile: {
    padding: 10,
    paddingTop: 55,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold"
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

//   HomeScreen

homeContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
  },
headerText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
  background:{
    height: 150,
    width: "82%",
    marginLeft: 50,
    marginBottom: 20,
    resizeMode: "cover",
  },
  btnContainer: {
    margin: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: "85%",
    borderRadius: 10,
    backgroundColor: COLORS.orange,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 18, 
  },

// ForgotScreen



})


export default globalStyles;