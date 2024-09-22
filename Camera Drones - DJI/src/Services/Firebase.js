// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3scMklJEBJI3ppmmIS8vGw5JpnH34COY",
  authDomain: "react-final-project-6035f.firebaseapp.com",
  projectId: "react-final-project-6035f",
  storageBucket: "react-final-project-6035f.appspot.com",
  messagingSenderId: "496681875957",
  appId: "1:496681875957:web:cb6455f16e9821ba0188bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Google Provider
export const GoogleProvider = new GoogleAuthProvider();

// Facebook Provider
export const FacebookProvider = new FacebookAuthProvider();