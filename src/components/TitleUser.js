import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PopupUser from "./PopupUser";

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

    return (
        <div className="container-fluid my-2">
            <div className="title">
                <div className="d-flex justify-content-around">
                    <h3 className="for_font my-2">All User</h3>
                    <button onClick={()=>setPopup(true)} className="btn my-2">Add User</button>
                    {
                        popup ? <PopupUser FrmDis={FrmDis}/> : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Title;

