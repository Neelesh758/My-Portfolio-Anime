import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminHome() {

  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.post('/api/v1/admin/logout',{},{withCredentials:true});
    navigate('/login')
  }
  return (
    <div>
      <div>hii</div>
      <button className='bg-red-800 px-9 py-3 text-white font-bold text-2xl' onClick={handleLogout}>Logout</button>
    </div>
  )
}
