import React from 'react'
import naruto2 from '../assets//PNG_Characters_and_icons/naruto2.png'
import naruto3 from '../assets//PNG_Characters_and_icons/naruto3.png'
import { easeOut, motion } from 'motion/react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footor'

export default function Contact() {
  return (
    <div className='flex flex-col justify-between  min-h-screen'>
      <Navbar />
      <form
      action="https://formspree.io/f/xaqqoqob" method='post' className='flex flex-col justify-center items-center md:flex md:items-center'>
        {/* <div className='h-96 flex  relative md:hidden mb-24'>
          <motion.img
          initial={{y:-60,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{
            duration:0.5,
            ease:easeOut
          }}
          src={naruto2} className='h-96' alt="" />
        </div> */}
        {/* <div className='hidden md:flex'>
          <img src={naruto3} alt="" />
        </div> */}
        <motion.div
        initial={{y:-60,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{
          duration:0.5,
          ease:easeOut
        }}
        className='w-80 bg-black/60 backdrop-blur-md h-80   top-[350px] left-7 rounded-lg p-5 flex flex-col justify-between   items-center'>
          <div className='text-center'>
            <h1 className='font-extrabold text-xl text-red-500'>Contact Me</h1>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <input type="email" className='px-4 py-3 rounded-lg bg-zinc-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition w-full' placeholder='Enter Your Mail ID Here'  />
            <textarea name='message' className='px-4 py-3 rounded-lg bg-zinc-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition w-full' placeholder='Wanna Say Something...' id=""></textarea>
          </div>
          <button type='submit' className='w-full mt-4 py-3 rounded-lg font-semibold bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-500 hover:to-red-700 transition duration-300'>Submit</button>
        </motion.div>
      </form>
      <Footer />
    </div>
  )
}
