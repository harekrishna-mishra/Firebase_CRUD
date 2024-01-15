import React from 'react'
import { Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='container form_data my-5 p-5'>
      <h3>All Users</h3>
      <Outlet/>
    </div>
  )
}

export default User
