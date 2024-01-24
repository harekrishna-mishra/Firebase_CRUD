import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AddEmpForm from "../components/AddEmpForm";
import { useFirebase } from "../services/firebaseAuth/context/Firebase";
import Alert from "react-bootstrap/Alert";

import { useState } from "react";

function Title() {
  const [validated, setValidated] = useState(false);
  const [popup, setPopup] = useState(false);
  const [alrt, setAlrt] = useState(false)
  const [err, setErr] = useState({
    error: false,
    message: "",
  });
  const firebase = useFirebase();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const Frm = () => {
    setPopup(true);
  };
  const FrmDis = () => {
    setPopup(false);
  };

  const addEmp=()=>{
    
    function alt(){
      setAlrt(false)
    }
    setTimeout(alt, 2000)
    if (firebase.token) {
      setPopup(true);
    } else {
      setAlrt(true)
      setErr({ err: true, message: "please login first...!" });
    }
  }

  return (
    <div>
      {alrt ? (
          <div className="container">
            <Alert className="alrtt" variant="success">
              {err.message}
            </Alert>
          </div>
      ) : (
        ""
      )}
      <div className="my-2 title1 ">
        <div className="title p-1">
          <div className="d-flex justify-content-around">
            <h3 className="for_font my-2">All Employees</h3>
            <button
              onClick={addEmp}
              className="btn my-2"
            >
              Add Employee
            </button>
          </div>
          {
            /* popup ? <PopupEmp FrmDis={FrmDis}/> : "" */
            popup ? <AddEmpForm FrmDis={FrmDis} /> : ""
          }
        </div>
      </div>
    </div>
  );
}

export default Title;
