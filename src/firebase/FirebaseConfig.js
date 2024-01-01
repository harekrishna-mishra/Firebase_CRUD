// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
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
const app = initializeApp(firebaseConfig);

//it will ref to our fireStore Database
 export const db = getFirestore(app)