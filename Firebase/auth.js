import { app } from "./firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,x
} from "firebase/auth";

export const auth = getAuth(app);

// onAuthStateChanged(auth, (user) => {
//     if ( user ) {
//       const email = user.email;

//       console.log("Authorized user email: ", email);
//       console.log(auth.currentUser);
//     }
//     console.log("isSignedIn= ", isSignedIn());
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
  console.log("Register called successfully with email=", email, " and password=", password);
  await createUserWithEmailAndPassword(auth, email, password);
}

async function login(email, password) {
  console.log("Login called successfully with email=", email, " and password=", password);
  await signInWithEmailAndPassword(auth, email, password);
}

async function restPassword(email) {
  await sendPasswordResetEmail(auth, email);
}

async function singinWithSocial(provider) {
  await signInWithPopup(auth, provider);
}

async function logout() {
  auth
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
