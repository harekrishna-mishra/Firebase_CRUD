import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



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

    const popover = (
                <Form noValidate validated={validated} /* onSubmit={handleSubmit} */>
                    <div className="form_pp row d-flex flex-column p-5">
                        <h2 className="for_font">Add Employee</h2>
                        <input placeholder="Emp Id" className="my-2 for_font "></input>
                        <input placeholder="Emp Name" className="my-2 for_font "></input>
                        <input placeholder="Emp Email" className="my-2 for_font "></input>
                        <input placeholder="Emp Salary" className="my-2 for_font "></input>
                        <button id="sbmt" className="for_font btn my-3" type="submit" onClick={Frm}>Submit form</button>
                    </div>  
                </Form>
            
    );
    const Example = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <button className="btn my-2">Add Employee</button>
        </OverlayTrigger>
    );
    return (
        <div className="container-fluid my-2">
            <div className="title">
                <div className="d-flex justify-content-around">
                    <Example />
                    <button className="btn my-2">Manage Employee</button>
                </div>
            </div>
        </div>
    )
}

export default Title;

