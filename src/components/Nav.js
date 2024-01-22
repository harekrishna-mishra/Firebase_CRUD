import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function Navb() {
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

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
      <Navbar  expand="lg" sticky="top" className="bg-body-tertiary navv">
        <Container className="d-lg-flex flex-row-reverse">
          <div>
            <div className=" i d-flex flex-column mx-2">
              <button className="pfl">
                <i className="fa-solid fa-user porfile-icon"></i>
              </button>
              Aditya mishra
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
                    < span className="logo d-flex align-item-center">
                        FirebaseCRUD
                    </span>
                </div>
              <div className="navItem p-2">
                <Nav.Link href="/users" className="navItems">
                  USERS
                </Nav.Link>
                <Nav.Link href="/" className="navItems">
                  EMPLOYEE
                </Nav.Link>
              </div>
            </Nav>
            <div className="login-div">
              <button
                onClick={() => setLogIn(true)}
                id="login"
                className="btn login"
              >
                Log In
              </button>
              <button
                onClick={() => setSignUp(true)}
                id="login"
                className="btn mx-2 login"
              >
                Sign Up
              </button>
            </div>
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
