// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiIZRbpwfmboVOVVMN4-WQ9UIS7lWMi7M",
  authDomain: "application-assignment-3.firebaseapp.com",
  databaseURL: "https://application-assignment-3-default-rtdb.firebaseio.com",
  projectId: "application-assignment-3",
  storageBucket: "application-assignment-3.appspot.com",
  messagingSenderId: "306234577133",
  appId: "1:306234577133:web:3f483596d1e688fc2ffce4",
  measurementId: "G-GHZ65T0MEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);