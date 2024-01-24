import React from "react";
import { set, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/FirebaseConfig";
import AuthServices from "../services/Firebase.Auth";

function LogIn({ FrmDisLogIn, FrmDisSignUpInLogIn }) {
  const auth = getAuth(app);
  const form = useForm();
  const googleProvider = new GoogleAuthProvider();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const [message, setMessage] = useState({ error: false, msg: "" });
  const employee = useSelector((state) => state.employees);
  const [alrt, setAlrt] = useState(false);
  const [empData, setEmpData] = useState({
    empEmail: "",
    empPassword: "",
  });

  const dis = () => {
    FrmDisLogIn();
  };
  const onSubmit = async (data) => {
    setAlrt(true);
    function alt() {
      setAlrt(false);
    }
    setTimeout(alt, 2000);
    try {
      /* await signInWithEmailAndPassword(
            auth, 
            data.empEmail, 
            data.empPassword
            ).then((value)=>{console.log(value)}).then(setMessage({ error: false, msg: "Login successfully." })) */

      await AuthServices.logInUser(data.empEmail, data.empPassword)
        .then((value) => {
          console.log(value);
        })
        .then(setMessage({ error: false, msg: "Login successfully." }));
      reset();
    } catch (err) {
      setTimeout(alt, 2000);
      setMessage({ error: true, msg: err.message });
    }
  };

  const SingUpWithGoogle = () => {
    setAlrt(true);
    function alt() {
      setAlrt(false);
    }
    try {
      AuthServices.continueWithGoogle()
        .then(setMessage({ error: false, msg: "Login successfully." }))
        .then(setAlrt(true));
      setTimeout(alt, 2000);
      dis();
      setMessage({ error: false, msg: "Login successfully." });
    } catch (error) {
      setMessage({ error: true, msg: error.message });
      setTimeout(alt, 2000);
    }
  };

  return (
    <div className="">
      {alrt ? (
        <div id="popup">
          <div className="alert">
            {message?.msg && (
              <Alert
                style={{ zIndex: "2" }}
                variant={message?.error ? "danger" : "success"}
                dismissible
                onClose={() => setMessage("")}
              >
                {message?.msg}
              </Alert>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="popup">
        {alrt ? (
          <div id="popup">
            <div className="alert">
              {message?.msg && (
                <Alert
                  variant={message?.error ? "danger" : "success"}
                  dismissible
                  onClose={() => setMessage("")}
                >
                  {message?.msg}
                </Alert>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className=" container form_pp p-5">
          <div className="cnl">
            <button className="cancel" onClick={dis}>
              Cancel
            </button>
          </div>
          <h2 className="for_font p-2">Log In</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input
              placeholder="Email"
              className="my-3"
              type="email"
              id="empEmail"
              {...register("empEmail", {
                required: { value: true, message: "required to fill" },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "invalid email format",
                },
              })}
            ></input>
            {/* displaying error  */}
            <p id="errorMess">{errors.empEmail?.message}</p>

            {/* <label htmlFor="empId">Salary</label> */}
            <input
              placeholder="Password"
              className="my-3"
              type="password"
              id="empSalary"
              {...register("empPassword", {
                required: { value: true, message: "required to fill" },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Minimum eight characters, at least one letter, one number and one special character",
                },
              })}
            ></input>
            {/* displaying error  */}
            <p id="errorMess">{errors.empPassword?.message}</p>

            <div className="row d-flex justify-content-between">
              <button className="for_font btn my-3">Submit</button>
              <div className="d-flex justify-content-center align-item-center m-2 col-lg-5 col-sm-12">
                <button
                  className="link-btn"
                  type="button"
                  onClick={(e) => {
                    FrmDisSignUpInLogIn();
                    dis();
                  }}
                >
                  Don't have an account
                </button>
                {/* {" "}/{" "}
                  <button className='link-btn' type='button' href='#'>Forget Password</button> */}
              </div>
            </div>
            <div>
              <button
                onClick={SingUpWithGoogle}
                type="button"
                className="pfl login-icon"
                style={{ color: "red" }}
              >
                <i class="fa-brands fa-google fa-beat fa-xl"></i>
                <span className="login-words">Sign in with google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;