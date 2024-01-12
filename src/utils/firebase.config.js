// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHDqbB6lIb8YLsIjOIuHipG--Va59D6GE",
  authDomain: "react-netflix-ui-dc970.firebaseapp.com",
  projectId: "react-netflix-ui-dc970",
  storageBucket: "react-netflix-ui-dc970.appspot.com",
  messagingSenderId: "208517276869",
  appId: "1:208517276869:web:d3186d4b5f8ef31212bcac",
  measurementId: "G-ECKYMPBL7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
