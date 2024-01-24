import React, { useEffect, useState } from "react";
import Title from "../components/TitleEmp";
import EmployeeServices from "../services/Employee.Services";
/* import UpdateEmpPopup from "../components/updateEmpPopup"; */
import DeletePopup from "../components/DeletePopup";
import Alert from "react-bootstrap/Alert";
import UpdateEmpPopup from "../components/updateEmployeePopup";
import Employee from "../section/Employee";
import { useSelector, useDispatch } from "react-redux";
import { updateEmployee } from "../store/features/employeeSlice";
import Card from "react-bootstrap/Card";
import { useFirebase } from "../services/firebaseAuth/context/Firebase";

function Emp() {
  const [emps, setEmps] = useState([]);
  const [popup, setPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [alrt, setAlrt] = useState(false);
  const [err, setErr] = useState({
    error: false,
    message: "Error 404 not found...!",
  });
  const firebase = useFirebase()

  const employee = useSelector((state) => state.newEmployees);
  const dispatch = useDispatch();

  useEffect(() => {
    getEmp();
    console.log(employee);
  }, [employee]);

  const getEmp = async () => {
    try {
      const data = await EmployeeServices.getAllEmployee();
      console.log(emps);
      setEmps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      setErr({ err: true, message: error.message });
    }
  };

  const editHandler = (id) => {
    dispatch(updateEmployee(id));
  };

  const deleteHandler = async (id) => {
    /* await EmployeeServices.deleteEmployee(id) */
    if(firebase.token){
      setDeleteId(id);
      getEmp();
      setDeletePopup(true);
      setErr({error:false, message:"particular employee deleted successfully"})
    }else{
      setAlrt(true)
      function alt(){
        setAlrt(false)
      }
      setTimeout(alt, 2000)
      setErr({error:false, message:"please login first"})
    }
  };

  const forDelete = async (deleteId) => {
    await EmployeeServices.deleteEmployee(deleteId);
    setAlrt(true);
    getEmp();
    function alt() {
      setAlrt(false);
    }
    setTimeout(alt, 2000);
  };

  const FrmDis = () => {
    setPopup(false);
  };

  const popupset = () => {
    if(firebase.token){
      setPopup(true);
    }else{
      setAlrt(true)
      function alt(){
        setAlrt(false)
      }
      setTimeout(alt, 2000)
      setErr({error:false, message:"please login first"})
    }
    console.log(popup);
  };

  const deletePopupDisable = () => {
    setDeletePopup(false);
  };

  return (
    <div>
      {alrt ? (
          <div className="container">
            <Alert className="alrtt" variant="success">
              {/* <p>Particular Employee data deleted successfully...!</p> */}
              {
                err.message
              }
            </Alert>
          </div>
      ) : (
        ""
      )}

      {err.error ? (
        <div className="popupErr">
          <div className="alert">
            <h1 className="for_font">Error:</h1>
            <p>{err.message}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="container ttl">
            <Title />
          </div>
          <div className="container allEmployee">
            <div className="row">
              {emps.map((e, i) => {
                return (
                  <div key={i} className=" my-2 col-xl-4 col-lg-6 col-md-6">
                    <Employee data={e} />
                    <Card className="crd">
                      <Card.Body>
                      <div className="d-flex flex-direction-column justify-content-around">
                        <div className=" px-1">
                          <button
                          onClick={(et) => {
                            popupset();
                            editHandler(e);
                          }}
                          id="sbmt"
                          className=" btn_edit for_font btn my-3"
                        >
                          Edit
                        </button>
                        </div>
                        <div className=" px-1">
                          <button
                          onClick={(et) => {
                            deleteHandler(e.id);
                          }}
                          id="sbmt"
                          className="btn_del for_font btn my-3"
                        >
                          Delete
                        </button>
                        </div>
                    </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {popup ? (
        <UpdateEmpPopup submit={"submit"} FrmDis={FrmDis} getEmp={getEmp} />
      ) : (
        ""
      )}

      {deletePopup ? (
        <DeletePopup
          getEmp={getEmp}
          deleteId={deleteId}
          forDelete={forDelete}
          deletePopupDisable={deletePopupDisable}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Emp;
