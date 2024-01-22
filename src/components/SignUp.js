import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/FirebaseConfig";

function SignUp({ FrmDisSignUp }) {
  const auth = getAuth(app);
  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [alrt, setAlrt] = useState(false);
  const [empData, setEmpData] = useState({
    empName: "",
    empEmail: "",
    empPassword: "",
  });

  const dis = () => {
    FrmDisSignUp();
  };
  const onSubmit = async (data) => {
    console.log("form submitted", data);
    setAlrt(true);
    function alt() {
      setAlrt(false);
    }
    setTimeout(alt, 2000);
    try {
      await createUserWithEmailAndPassword(
        auth,
        data.empEmail,
        data.empPassword
      ).then((value) => console.log(value));
      setMessage({ error: false, msg: "Sign Up successfully." });
      reset();
    } catch (err) {
      setMessage({ error: true, msg: err.message });
      setTimeout(alt, 2000);
    }
  };

  return (
    <div>
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
        <div className="container form_pp p-5">
          <div className="cnl">
            <button className="cancel" onClick={dis}>
              Cancel
            </button>
          </div>
          <h2 className="for_font p-2">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* <label htmlFor="empId">Name</label> */}
            <input
              placeholder="Emp Name"
              className="my-1"
              type="text"
              id="empName"
              {...register("empName", {
                required: { value: true, message: "Name only take alphabet." },
                pattern: {
                  value: /^[a-zA-Z ]+$/,
                  message: "name take alphabet only",
                },
              })}
            ></input>
            {/* displaying error  */}
            <p id="errorMess">{errors.empName?.message}</p>

            {/*  <label htmlFor="empId">Email</label> */}
            <input
              placeholder="Emp Email"
              className="my-1"
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

            <input
              placeholder="Password"
              className="my-1"
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
            <button className="for_font btn my-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
