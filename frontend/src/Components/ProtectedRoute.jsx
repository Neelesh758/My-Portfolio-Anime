import axios from 'axios'
import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'

export default function ProtectedRoute({children}) {
  const [loading , setLoading] = useState(true)
  const [auth , setAuth] = useState(false)

  useEffect(()=>{
    const checkAuth = async () => {
      try {
        await axios.get('api/v1/admin/me',{withCredentials:true})
        setAuth(true);
      } catch (error) {
        setAuth(false)
      } finally{
        setLoading(false)
      }
    }
    checkAuth()
  },[]);

  if(loading) return <div className='text-center text-white text-3xl'>Checking Auth ...</div>
  return auth ? children : <Navigate to='/login' />;
  return (
    <div>ProtectedRoute</div>
  )
}
