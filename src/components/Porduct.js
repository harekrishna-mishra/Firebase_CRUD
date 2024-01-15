import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'

function Porduct() {
  return (
    <nav className='container m-5'>
        
        <div className=' form_data d-flex justify-content-around'>
            <NavLink to="electronics">Electronics</NavLink>
            <NavLink to="grocery">Grocery</NavLink>
            <input placeholder='search Items'></input>
        </div>
        <div className='d-flex justify-content-around'>
            <Outlet/>
        </div>
    </nav>
  )
}

export default Porduct
