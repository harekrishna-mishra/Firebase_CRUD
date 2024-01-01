import React, { useState } from "react"
import Form from 'react-bootstrap/Form';
import EmployeeServices from "../services/Employee.Services";


function PopupEmp({FrmDis}){
    const [empId, setEmpId]= useState();
    const [empName, setEmpName]= useState("");
    const [empEmail, setEmpEmail]= useState("");
    const [empSalary, setEmpSalary]= useState();
    const [message, setmessage]= useState({error:false, message:""})

    const dis=()=>{
        FrmDis()
    }

    const handleSubmit= async (e)=>{
        /* e.preventDefault() */
        if(empId === "" || empName === "" || empEmail === "" || empSalary === ""){
            setmessage({error:true, message:"All fields are mindatory to fill...!"})
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
         EmployeeServices.addEmployee(nEmp)
         setmessage({error:false, message:"New book added successfully"})
       }catch(err){
            setmessage({error:true, message: err.message})
       }
       setEmpId(0)
       setEmpName("")
       setEmpEmail("")
       setEmpSalary(0)
    }

    return(
        <>
        <Form  onSubmit={handleSubmit}>
                    <div className="popup">
                        <div className=" container form_pp row d-flex flex-column p-5">
                            <div className="cnl">
                                <button className="cancel" onClick={dis}>Cancel</button>
                            </div>
                            <h2 className="for_font">Add Employee</h2>
                            <input onChange={(e)=>{setEmpId(e.target.value)}} value={empId} placeholder="Emp Id" className="my-2 for_font "></input>
                            <input onChange={(e)=>{setEmpName(e.target.value)}} value={empName} placeholder="Emp Name" className="my-2 for_font "></input>
                            <input onChange={(e)=>{setEmpEmail(e.target.value)}} value={empEmail} placeholder="Emp Email" className="my-2 for_font "></input>
                            <input onChange={(e)=>{setEmpSalary(e.target.value)}} value={empSalary} placeholder="Emp Salary" className="my-2 for_font "></input>
                            <div className="parent">
                                <div>
                                <button id="sbmt"  className="for_font btn my-3" type="Submit">Submit form</button>
                                </div>
                            </div>
                        </div>  
                    </div>
            </Form>
        </>
    )
}
export default PopupEmp;