import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signInWithPopup, signOut,signInWithCustomToken, GoogleAuthProvider } from "firebase/auth"

import { app } from "../firebase/FirebaseConfig";

const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider()

class AuthServices{

    signUpUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    continueWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    logOut = ()=>{
        return signOut(auth)
    }

}

export default new AuthServices;