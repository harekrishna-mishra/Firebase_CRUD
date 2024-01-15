import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function PlaceOrder() {
    const nevigate = useNavigate()
  return (
   <div className='container form_data my-5 p-5'>
     <div className='contianer d-flex flex-column justify-content-center align-item-center'>
        <Alert className='my-5' variant='success'>Order Plced Successfully</Alert>
        <div>
        <h3>Order placed Successfully</h3>
        <p>
        Indian institute of technology. Indian institute of technology. 
      Indian institute of technology. Indian institute of technology. 
      institute of technology. Indian institute of technology. 
      Indian institute of technology. Indian institute of technology. 
      Indian institute of . Indian institute of technology. 
      Indian institute of technology. Indian institute of technology. 
      Indian institute of technology. Indian  of technology.
        </p>
        </div>
        <Button onClick={(e)=>{nevigate(-1)}} >Done</Button>
    </div>
   </div>
  )
}

export default PlaceOrder
