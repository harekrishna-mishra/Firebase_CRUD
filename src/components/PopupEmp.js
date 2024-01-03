import React, { useState } from "react"
import Form from 'react-bootstrap/Form';
import EmployeeServices from "../services/Employee.Services";
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/renderEmpslice";

function PopupEmp({FrmDis}){
    const [empId, setEmpId]= useState(Number);
    const [empName, setEmpName]= useState("");
    const [empEmail, setEmpEmail]= useState("");
    const [empSalary, setEmpSalary]= useState();
    const [message, setmessage]= useState({error:false, msg:""})
    const [alrt, setAlrt]=useState(false)
    const [tagInputVal, setTagInputVal] = useState()
    

    const employee = useSelector((state)=> state.employees)
    const dispatch = useDispatch();

    function onChangeTagInputValidate(e) {
        /* setTagInputVal(e.target.value.replace(/[^a-zA-Z\d]/ig, "")); */
        /* setEmpName(e.target.value.replace(/[^a-zA-Z\d]/ig, "")) */
    }
    

    const dis=()=>{
        FrmDis()
    }

    const handleSubmit= async (e)=>{
        e.preventDefault()
        setAlrt(true)
        function alt(){
            setAlrt(false)
        }
        setTimeout(alt, 2000)

        dispatch(addEmployee(true))

        if(empId === "" || empName === "" || empEmail === "" || empSalary === ""){
            setmessage({error:true, msg:"All fields are mindatory to fill...!"})
            return;
        }
        const nEmp={
            empId,
            empName,
            empEmail,
            empSalary
        }
        console.log(nEmp)
       try{
         if(empId == 0) {
            setmessage({error:true, msg:"EmpId can not be 0...!"})
         } else if(empName.includes("1")){
                setmessage({error:true, msg:"Employee Name can not include number...!"})
            }
         else{
            setmessage({error:false, msg:"New Employee added successfully"})
            EmployeeServices.addEmployee(nEmp)
            setEmpId(0)
            setEmpName("")
            setEmpEmail("")
            setEmpSalary(0)  
         }
       }catch(err){
            setmessage({error:true, msg: err.message})
            setTimeout(alt, 2000)
       }
       
    }

    

    return(
        <div>
        {
            alrt ? 
            <div id="popup">
                <div className="alert">
                    {message?.msg && (
                        <Alert 
                            variant={message?.error ? "danger": "success"} 
                            dismissible 
                            onClose={ ()=>setmessage("")}
                        >
                            {message?.msg}   
                        </Alert>
                    )}
                </div>
            </div>:""
        }

        <Form  onSubmit={handleSubmit}>
                    <div className="popup">
                        <div className=" container form_pp row d-flex flex-column p-5">
                            <div className="cnl">
                                <button className="cancel" onClick={dis}>Cancel</button>
                            </div>
                            <h2 className="for_font">Add Employee</h2>
                            <input onChange={(e)=>{setEmpId(e.target.value); onChangeTagInputValidate(e)}} value={empId} placeholder="Emp Id" className="my-2 for_font " type="number" /* pattern='[0-9]{0,5}' *//>
                            <input onChange={(e)=>{setEmpName(e.target.value)}} value={empName} placeholder="Emp Name" type="text"  className="my-2 for_font"></input>
                            <input onChange={(e)=>{setEmpEmail(e.target.value)}} value={empEmail} placeholder="Emp Email" type="email" className="my-2 for_font "></input>
                            <input onChange={(e)=>{setEmpSalary(e.target.value)}} value={empSalary} placeholder="Emp Salary" type="number" className="my-2 for_font "></input>
                            <div className="parent">
                                <div>
                                <button id="sbmt"  className="for_font btn my-3" type="Submit">Submit</button>
                                </div>
                            </div>
                        </div>  
                    </div>
            </Form>
        </div>
    )
}
export default PopupEmp;