import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

function User() {
  const [serchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = serchParams.get("filter") === "active"
  return (
    <div className='container form_data my-5 p-5'>
      <div className='d-flex justify-content-around'>
        <Button  onClick={()=> setSearchParams({ filter: "active"})}>Active user</Button>
        <Button  onClick={()=> setSearchParams({})}>Reset filter</Button>
      </div>
      <h3>All Users</h3>
      <Outlet/>

      {
        showActiveUsers ? (<h3>Only Active Users</h3> ): (<h3>Show all users</h3>)
      }
    </div>
  )
}

export default User
