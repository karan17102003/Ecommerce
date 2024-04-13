// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0GuANXPuhhS_ISjlkfYDwaCI7SpntPD8",
  authDomain: "myfirst-56532.firebaseapp.com",
  projectId: "myfirst-56532",
  storageBucket: "myfirst-56532.appspot.com",
  messagingSenderId: "83857159916",
  appId: "1:83857159916:web:d1601535d5f505d43c97c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}