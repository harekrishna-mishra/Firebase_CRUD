import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PopupEmp from "./PopupEmp";

import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Title() {

    const [validated, setValidated] = useState(false);
    const [popup, setPopup]= useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }
    const Frm= ()=>{
        setPopup(true)
    }
    const FrmDis=()=>{
        setPopup(false)
    }

    const Popover = (
                <Form noValidate validated={validated} /* onSubmit={handleSubmit} */>
                    <div className="popup">
                        <div className=" container form_pp row d-flex flex-column p-5">
                            <button className="cancel">Cancel</button>
                            <h2 className="for_font">Add Employee</h2>
                            <input placeholder="Emp Id" className="my-2 for_font "></input>
                            <input placeholder="Emp Name" className="my-2 for_font "></input>
                            <input placeholder="Emp Email" className="my-2 for_font "></input>
                            <input placeholder="Emp Salary" className="my-2 for_font "></input>
                            <button id="sbmt" className="for_font btn my-3" type="submit" onClick={Frm}>Submit form</button>
                        </div>  
                    </div>
                </Form>
    );
    return (
        <div className="container-fluid my-2">
            <div className="title">
                <div className="d-flex justify-content-around">
                    <h3 className="for_font my-2">All Employees</h3>
                    <button onClick={()=>setPopup(true)} className="btn my-2">Add Employee</button>
                    {
                        popup ? <PopupEmp FrmDis={FrmDis}/> : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Title;

