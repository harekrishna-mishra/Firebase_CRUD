import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import EmployeeServices from "../services/Employee.Services";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/features/renderEmpslice";

function AddEmpForm({ FrmDis }) {
  const form = useForm();
  const { register, control, handleSubmit, formState,reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const [message, setMessage] = useState({ error: false, msg: "" });
  const employee = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const [alrt, setAlrt] = useState(false);
  const [empData, setEmpData] = useState({
    empId: 0,
    empName: "",
    empEmail: "",
    empSalary: 0,
  });

  const dis = () => {
    FrmDis();
  };

  const onSubmit = async (data) => {
    console.log("form submitted", data);
    setAlrt(true);
    function alt() {
      setAlrt(false);
    }
    setTimeout(alt, 2000);

    dispatch(addEmployee(data));
    try {
      setMessage({ error: false, msg: "Employee data added successfully." });
      EmployeeServices.addEmployee(data);
      reset()
    } catch (err) {
      setMessage({ error: true, msg: err.message });
      setTimeout(alt, 2000);
    }
  };
  return (
    <div>
      <div className="popup">
        <div className="container form_pp p-5">
          <div className="container">
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
          </div>
          <div className="cnl">
            <button className="cancel" onClick={dis}>
              Cancel
            </button>
          </div>
          <h2 className="for_font">Add Employee</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* <label htmlFor="empId"></label> */}
            <input
              placeholder="Emp Id"
              type="number"
              className="my-1"
              id="empId"
              {...register("empId", {
                required: { value: true, message: "required to fill" },
              })}
            ></input>
            {/* displaying error  */}
            <p id="errorMess">{errors.empId?.message}</p>

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
            {/* displaying error  */}
            <p id="errorMess">{errors.empEmail?.message}</p>

            {/* <label htmlFor="empId">Salary</label> */}
            <input
              placeholder="Emp Salary"
              className="my-1"
              type="number"
              id="empSalary"
              {...register("empSalary", {
                required: { value: true, message: "required to fill" },
              })}
            ></input>
            {/* displaying error  */}
            <p id="errorMess">{errors.empSalary?.message}</p>

            <button className="for_font btn my-3">Submit</button>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
}

export default AddEmpForm;
