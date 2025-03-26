import React, { useState } from 'react'
import userContext from './context'
function Userdata({children}) {
    const[user,setUser]=useState('')
  return (
   <userContext.Provider value={{user,setUser}}>
    {children} 
   </userContext.Provider>
  )
}

export default Userdata
