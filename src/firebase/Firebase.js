import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyA54yxpXtsWBmBfEDbVWum7j7eMP9K7Qxw",
    authDomain: "myfirstporject-a6dce.firebaseapp.com",
    projectId: "myfirstporject-a6dce",
    storageBucket: "myfirstporject-a6dce.appspot.com",
    messagingSenderId: "474400658810",
    appId: "1:474400658810:web:f9d8e1aa8c78f24406b2c3",
    databaseURL: "https://myfirstporject-a6dce-default-rtdb.firebaseio.com/"
  };

const app = initializeApp(firebaseConfig)
export const db=getFirestore(app)
