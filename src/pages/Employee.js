import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Title from "../components/TitleEmp";
import EmployeeServices from "../services/Employee.Services";
import UpdateEmpPopup from "../components/updateEmpPopup";
import DeletePopup from "../components/DeletePopup";
import Alert from "react-bootstrap/Alert";

import { useSelector, useDispatch } from "react-redux";
import { updateEmployee } from "../features/employeeSlice";

function Emp() {
  const [emps, setEmps] = useState([]);
  const [popup, setPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [alrt, setAlrt] = useState(false);

  const employee = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    getEmp();
    console.log(popup);
  }, []);

  const getEmp = async () => {
    const data = await EmployeeServices.getAllEmployee();
    console.log(data.docs);
    setEmps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const editHandler = (id) => {
    dispatch(updateEmployee(id));
    console.log("edit emp ", id);
  };

  const deleteHandler = async (id) => {
    /* await EmployeeServices.deleteEmployee(id) */
    setDeleteId(id);
    getEmp();
    setDeletePopup(true);
  };

  const forDelete = async (deleteId) => {
    await EmployeeServices.deleteEmployee(deleteId);
    setAlrt(true);
    function alt() {
      setAlrt(false);
    }
    setTimeout(alt, 2000);
  };

  const FrmDis = () => {
    setPopup(false);
  };

  const popupset = () => {
    setPopup(true);
    console.log(popup);
  };

  const deletePopupDisable = () => {
    setDeletePopup(false);
  };

  return (
    <div>
      {alrt ? (
        <div id="popup">
          <div className="alert">
            <Alert variant="success">
              <p>Deleted successfully...!</p>
            </Alert>
          </div>
        </div>
      ) : (
        ""
      )}
      <Title />
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>EMP ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>SALARY</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {emps.map((e) => {
              return (
                <tr>
                  <td>{e.empId}</td>
                  <td>{e.empName}</td>
                  <td>{e.empEmail}</td>
                  <td>{e.empSalary}</td>
                  <td>
                    <button
                      onClick={(et) => {
                        popupset();
                        editHandler(e);
                      }}
                      id="sbmt"
                      className="for_font btn my-3"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(et) => {
                        deleteHandler(e.id);
                      }}
                      id="sbmt"
                      className="for_font btn my-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {popup ? <UpdateEmpPopup submit={"submit"} FrmDis={FrmDis} /> : ""}

        {deletePopup ? (
          <DeletePopup
            deleteId={deleteId}
            forDelete={forDelete}
            deletePopupDisable={deletePopupDisable}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Emp;
