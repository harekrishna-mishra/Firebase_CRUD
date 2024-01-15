import React from 'react'
import { useParams } from 'react-router-dom'

function UsersDetails() {
    //it is URL params
    const params = useParams()
    const useId = params.userId;
  return (
    <div className='container form_data my-5 p-5'>
      <h3>it is user {useId}</h3>
    </div>
  )
}

export default UsersDetails
