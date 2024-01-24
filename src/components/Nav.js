import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebase/FirebaseConfig";
import { useContext } from "react";
import { useFirebase } from "../services/firebaseAuth/context/Firebase";
import AuthServices from "../services/Firebase.Auth" 


function Navb() {
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(false)
  const firebase = useFirebase()


  const auth = getAuth(app);

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

  /* if(user==null){
    return(
      <>
      
      </>
    )
  } */

  const FrmDisSignUp = () => {
    setSignUp(false);
  };
  const FrmDisLogIn = () => {
    setLogIn(false);
  };
  const FrmDisSignUpInLogIn = () => {
    setSignUp(true);
  };
  return (
    <div className="nv">
      <Navbar expand="lg" sticky="top" className="bg-body-tertiary navv">
        <Container className="d-lg-flex flex-row-reverse">
          <div>
            <div className=" i d-flex flex-column mx-2">
              <button className="pfl">
                <i className="pfl-icon fa-solid fa-user porfile-icon"></i>
              </button>
              {
                console.log("sign up user data",user)
              }
              {
                user ? (user.displayName ? user.displayName: user.email) :
                <>
                <button className="sm-login"
                  onClick={() => setLogIn(true)}
                >
                  Log In
                </button>
                </>
              }
            </div>
          </div>
          {/* <div>
                <h3 className="logo">
                <span id="">F</span>irebase <span id="">CRUD</span>
                </h3>
            </div> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="d-flex align-item-center justify-content-center">
                <span className="logo d-flex align-item-center">
                <i className="icn fa-solid fa-f fa-beat"></i>
                  irebaseCRUD
                </span>
              </div>
              <div className="navItem p-2 d-sm-flex flex-sm-row">
                <Nav.Link href="/users" className="navItems">
                  USERS
                </Nav.Link>
                <Nav.Link href="/" className="navItems">
                  EMPLOYEE
                </Nav.Link>
              </div>
            </Nav>
            {user ? (
              <div className="login-div">
                  <button
                  onClick={() => AuthServices.logOut()}
                  id="login"
                  className="btn login"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="login-div">
                <button
                  onClick={() => setLogIn(true)}
                  id="login"
                  className="btn login"
                >
                  Log In
                </button>
                {/* <button
                  onClick={() => setSignUp(true)}
                  id="login"
                  className="btn mx-2 login"
                >
                  Sign Up
                </button> */}
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {logIn ? (
        <LogIn
          FrmDisLogIn={FrmDisLogIn}
          FrmDisSignUpInLogIn={FrmDisSignUpInLogIn}
        />
      ) : (
        ""
      )}
      {signUp ? <SignUp FrmDisSignUp={FrmDisSignUp} /> : ""}
    </div>
  );
}

export default Navb;
