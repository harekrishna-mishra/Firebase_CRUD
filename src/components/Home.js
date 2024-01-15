import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Home() {
  const nevigate = useNavigate()
  return (
    <div className='container my-5 p-5 form_data'>
      <h2>Indian institute of technology</h2>
      <p>Indian institute of technology. Indian institute of technology. 
      Indian institute of technology. Indian institute of technology. 
      institute of technology. Indian institute of technology. 
      Indian institute of technology. Indian institute of technology. 
      Indian institute of . Indian institute of technology. 
      Indian institute of technology. Indian institute of technology. 
      Indian institute of technology. Indian  of technology. 
      </p>
      
      <div className=' d-flex justify-content-center flex-column  '>
        <h4>Click here to place order.</h4>
        <Button onClick={(e)=>{nevigate("order-summary",{replace: true})}} variant='success'>Place order</Button>
      </div>
    </div>
  )
}

export default Home
