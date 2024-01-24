import {createContext, useContext} from "react";
import { useState, useEffect } from "react";
import { app } from "../../../firebase/FirebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const FirebaseContext = createContext(null)
export const useFirebase = ()=> useContext(FirebaseContext)

export const FirebaseProvider = (props)=>{
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(false)
  const auth = getAuth(app)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setToken(user.accessToken)
      } else {
        setUser(null);
        setToken(false)
      }
    });
  }, []);

  
  return(
    <FirebaseContext.Provider value={{user, token}}>
       {props.children}
    </FirebaseContext.Provider>
  )
}

