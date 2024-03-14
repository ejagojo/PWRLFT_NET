// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDePz-aV1vwBaDYUVnAaHfN-IrsyhlJ2bs",
  authDomain: "pwrlft-net.firebaseapp.com",
  projectId: "pwrlft-net",
  storageBucket: "pwrlft-net.appspot.com",
  messagingSenderId: "947228351193",
  appId: "1:947228351193:web:eb3d2025ce4cb38b4a3cc8",
  measurementId: "G-XJCNHLS5BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);