import React, { useContext } from 'react'
import { loginContext } from './userContextProvider'

function SinglePost() {
   const login= useContext(loginContext)
   console.log(login);
  return (
    <div><h1>SinglePost</h1></div>
  )
}

export default SinglePost