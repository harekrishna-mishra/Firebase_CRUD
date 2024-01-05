import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import EmployeeServices from "../services/Employee.Services";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

function UpdateEmpPopup({ FrmDis, getEmp }) {
  const [empId, setEmpId] = useState();
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empSalary, setEmpSalary] = useState();
  const [message, setmessage] = useState({ error: false, msg: "" });
  const [alrt, setAlrt] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const nameRegex = /^[a-zA-Z\s]+$/;

  const employee = useSelector((state) => state.employees);

  useState(() => {
    setEmpId(employee.employees.empId);
    setEmpName(employee.employees.empName);
    setEmpEmail(employee.employees.empEmail);
    setEmpSalary(employee.employees.empSalary);
  }, []);

  const dis = () => {
    FrmDis();
  };

  const handleSubmit = async (e) => {
    getEmp();
    e.preventDefault();
    setAlrt(true);
    function alt() {
      setAlrt(false);
    }
    setTimeout(alt, 2000);

    if (empId === "" || empName === "" || empEmail === "" || empSalary === "") {
      setmessage({ error: true, msg: "All fields are mindatory to fill...!" });
      return;
    }
    const nEmp = {
      empId,
      empName,
      empEmail,
      empSalary,
    };
    console.log(nEmp);
    try {
      if (!empName.match(nameRegex)) {
        setmessage({
          error: true,
          msg: "Employee Name can not include number...!",
        });
      }if(!empEmail.match(emailRegex)) {
        setmessage({
            error: true,
            msg: "Please Enter valid Email...!"
        })
      }else {
        EmployeeServices.updateEmployee(employee.employees.id, nEmp);
        setmessage({ error: false, msg: "Employee updated successfully" });
        setTimeout(FrmDis, 500);
      }
    } catch (err) {
      setmessage({ error: true, msg: err.message });
      setEmpId(employee.employees.empId);
      setEmpName(employee.employees.empName);
      setEmpEmail(employee.employees.empEmail);
      setEmpSalary(employee.employees.empSalary);
      setTimeout(alt, 2000);
    }
  };

  return (
    <div>
      {alrt ? (
        <div id="popup">
          <div className="alert">
            {message?.msg && (
              <Alert
                variant={message?.error ? "danger" : "success"}
                dismissible
                onClose={() => setmessage("")}
              >
                {message?.msg}
              </Alert>
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <Form onSubmit={handleSubmit}>
        <div className="popup">
          <div className=" container form_pp row d-flex flex-column p-5">
            <div className="cnl">
              <button className="cancel" onClick={dis}>
                Cancel
              </button>
            </div>
            <h2 className="for_font">Update Employee</h2>
            <input
              /* onChange={(e)=>{setEmpId(e.target.value)}} */ value={empId}
              placeholder="Emp Id"
              className="my-2 for_font "
            ></input>
            <input
              onChange={(e) => {
                setEmpName(e.target.value);
              }}
              value={empName}
              placeholder="Emp Name"
              type="text"
              className="my-2 for_font "
            ></input>
            <input
              onChange={(e) => {
                setEmpEmail(e.target.value);
              }}
              value={empEmail}
              placeholder="Emp Email"
              className="my-2 for_font "
            ></input>
            <input
              onChange={(e) => {
                setEmpSalary(e.target.value);
              }}
              value={empSalary}
              placeholder="Emp Salary"
              type="number"
              className="my-2 for_font "
            ></input>
            <div className="parent">
              <div>
                <button id="sbmt" className="for_font btn my-3" type="Submit">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default UpdateEmpPopup;
