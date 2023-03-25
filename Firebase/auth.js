import { app } from "./firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

export const auth = getAuth(app);

// onAuthStateChanged(authentication, (user) => {
//     if (user != null) {
//         console.log("authorized user: ", user);
//         console.log(authentication.currentUser)
//     }
//     console.log('isSignedIn=', isSignedIn())
// });

async function isSignedIn() {
  console.log("from isSignedIn method: ", auth.currentUser);
  return (await auth.currentUser) != null;
}

async function getUserUId() {
  if (auth.currentUser != null) {
    return auth.currentUser.uid;
  } else {
    return null;
  }
}

async function getUserToken() {
  if (auth.currentUser != null) {
    return await auth.currentUser.getIdToken();
  }
  return null;
}

async function register(email, password) {
  console.log("Register called successfully email=", email, " and password=", password);
  await createUserWithEmailAndPassword(auth, email, password);
}

async function login(email, password) {
  console.log("Login called successfully email=", email, " and password=", password);
  await signInWithEmailAndPassword(auth, email, password);
}

async function restPassword(email) {
  await sendPasswordResetEmail(auth, email);
}

async function singinWithSocial(provider) {
  await signInWithPopup(authentication, provider);
}

async function logout() {
  authentication
    .signOut()
    .then()
    .catch((e) => console.log(e.message));
}

export {
  register,
  login,
  isSignedIn,
  restPassword,
  getUserUId,
  logout,
  getUserToken,
  singinWithSocial,
  onAuthStateChanged,
};
