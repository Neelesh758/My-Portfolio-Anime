import React from 'react'
import { useState } from 'react';
import { FaEye , FaEyeSlash } from "react-icons/fa";
import { easeOut, motion } from "motion/react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const navigate = useNavigate();
  //State for Password Hide
  const [showPassword , setShowPassword] = useState(false)



  //states for inputs
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("")

  //api call
  const handleRegister = async (e) => {
    e.preventDefault();


    //Basic Vallidation
    if(!email ||!password){
      toast.error("All Fiels Required");
      return;
    }


    try {
      const res = await axios.post(
        '/api/v1/admin/login',
        {email,password},
        {withCredentials:true}
      )

      toast.success(res.data.message || "Login Successful")
      // console.log(res)

      navigate('/adminhome')
    } catch (error) {
      console.log(error);
      toast.error(
      error.response?.data?.message || "Something went wrong"
     )
    }
  }
  return (
    <motion.div
    // animation

    initial={{y:80,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{
      duration:0.6,
      ease:"easeOut"
    }}
    className='w-[350px] h-[400px] bg-black/70 backdrop-blur-md border border-red-500/30 rounded-2xl'>
      <div>
        <h1 className='text-red-500 font-bold text-center text-3xl mb-4 mt-2'>Login</h1>
        <p className='text-gray-400 text-md mb-6 text-center'>Login to your Account</p>
      </div>
      <div className='p-4'>
        <div className=' flex flex-col justify-between items-center'>
          {/* First Input */}
          <input type="email" value={email} placeholder='email' onChange={(e)=>setEmail(e.target.value)} className='w-full mb-4 px-4 py-3 rounded-lg bg-zinc-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition' />
          {/* Second Input */}
          <div className='w-full relative'>
            <input type={showPassword? "text" : "password"} value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} className=' relative w-[100%] mb-4 px-4 py-3 rounded-lg bg-zinc-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition' />
            <button className='absolute right-4 bottom-7 text-gray-400 hover:text-red-500' onClick={()=>setShowPassword(!showPassword)}>{showPassword? <FaEyeSlash size={25} /> : <FaEye size={25} />}</button>
          </div>
        </div>
        <button className='w-full mt-4 py-3 rounded-lg font-semibold bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-500 hover:to-red-700 transition duration-300' onClick={handleRegister}>Login</button>
      </div>
    </motion.div>
  )
}
