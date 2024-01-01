import React from "react"
import Form from 'react-bootstrap/Form';


function PopupUser({FrmDis}) {
    const dis=()=>{
        FrmDis()
    }

    return (
        <>
            <Form noValidate /* onSubmit={handleSubmit} */>
                <div className="popup">
                    <div className=" container form_pp row d-flex flex-column p-5">
                        <div className="cnl">
                            <button className="cancel" onClick={dis}>Cancel</button>
                        </div>
                        <h2 className="for_font">Add User</h2>
                        <input placeholder="Emp Id" className="my-2 for_font "></input>
                        <input placeholder="Emp Name" className="my-2 for_font "></input>
                        <input placeholder="Emp Email" className="my-2 for_font "></input>
                        <input placeholder="Emp Salary" className="my-2 for_font "></input>
                        <div className="parent">
                            <div>
                                <button id="sbmt" className="for_font btn my-3" type="submit">Submit form</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    )
}
export default PopupUser;