import React, { useState } from "react"
import Alert from 'react-bootstrap/Alert';

function UpdateEmpPopup({deleteId,forDelete,deletePopupDisable}){
    const [alrt, setAlrt]=useState(false)


    const dis=()=>{
        deletePopupDisable()
    }

    const deleteHandle = () => {
        forDelete(deleteId)
        deletePopupDisable()
        
    }
    

    return(
        <div>
        {
            alrt ? 
            <div id="popup">
                <div className="alert">
                        <Alert variant="success">
                            <p>Deleted successfully...!</p>
                        </Alert>
                </div>
            </div>:""
        }

                    <div className="popup">
                        <div className=" container form_pp row d-flex flex-column p-5">
                            <div className="cnl">
                                <button className="cancel" onClick={dis}>Cancel</button>
                            </div>
                            <h2 className="for_font">Delete Employee.</h2>
                            <p>Are you sure, you want to delete...!</p>
                            <div className="parent">
                                <div>
                                <button id="sbmt" onClick={deleteHandle}  className="for_font btn my-3" type="Submit">Delete</button>
                                </div>
                            </div>
                        </div>  
                    </div>
        </div>
    )
}
export default UpdateEmpPopup;