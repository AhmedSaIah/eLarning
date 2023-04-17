import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBIjfJ0-tnqjOgX2-qof1vcWOl241XwMM",
  authDomain: "talabat-bb278.firebaseapp.com",
  projectId: "talabat-bb278",
  storageBucket: "talabat-bb278.appspot.com",
  messagingSenderId: "1072406929830",
  appId: "1:1072406929830:web:ff1ee86d73535901f72f67",
  measurementId: "G-E75LKGG8ZZ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);