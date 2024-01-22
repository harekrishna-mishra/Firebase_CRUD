// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCatJG1vv5vOnKrWFURCPO6N26gDkMrkOc",
  authDomain: "employee-crud-c9938.firebaseapp.com",
  projectId: "employee-crud-c9938",
  storageBucket: "employee-crud-c9938.appspot.com",
  messagingSenderId: "722915989994",
  appId: "1:722915989994:web:251063dc9c339a7d353a93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();

//it will ref to our fireStore Database