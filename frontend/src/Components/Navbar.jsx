import React, { useState } from 'react'
import {motion,AnimatePresence} from "motion/react";
import {Link} from 'react-router-dom'
import profile from '../assets/PNG_Characters_and_icons/sharingan3.png';
import home from '../assets/PNG_Characters_and_icons/rinegan.png';
import about from '../assets/PNG_Characters_and_icons/obito.png';
import skills from '../assets/PNG_Characters_and_icons/kunaai.png';
import project from '../assets/PNG_Characters_and_icons/ninjastar.png';
import exp from '../assets/PNG_Characters_and_icons/ninjascroll.png';
import certificate from '../assets/PNG_Characters_and_icons/scrollV.png';
import contact from '../assets/PNG_Characters_and_icons/mail.png';
import resumeicon from '../assets/PNG_Characters_and_icons/resumeicon.png'
import me from '../assets/PNG_Characters_and_icons/me.jpeg'
import sama from '../assets/PNG_Characters_and_icons/sama.png.png'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./navbar.css";
export default function Navbar() {

  const [openMenu , setOpenMenu] = useState(false)

  const [text] = useTypewriter({
    words:["# Full Stack Chakra Master.."],
    loop:true,
    typeSpeed:70,
    deleteSpeed:40,
    delaySpeed:1500
  })
  //Making Animation Variants for this
  const varMenu = {
    hidden:{
      x:"-100%",
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        duration:0.35,
        ease: "easeOut"
      }
    },
    exit:{
      x:"-100%",
      opacity:0,
      transition:{
        duration:0.28,
        ease:"easeIn"
      }
    }
  }
  return (
    <>
    <div className='flex lg:hidden justify-center items-center w-full '>
      <div className='w-[95%] h-16 bg-black/60 backdrop:blur-lg  border border-red-500/30 rounded-lg shadow-md flex justify-between items-center mt-3 p-3' >
        <div className='w-[12%] flex justify-center items-center '>
          <div className='h-16 w-[64px] rounded-[50%] relative flex justify-center items-center '>
            <img src={profile} alt="profile" onClick={()=>setOpenMenu(!openMenu)} className='cursor-pointer'  />
          </div>
        </div>
        <div className='w-[10%] flex justify-center items-center mr-3'>
          <a href='/CV.pdf' download className='h-16 flex flex-col items-center justify-center'>
            <img src={resumeicon} className='h-[40%]' alt="" />
            <h2 className='font-semibold text-sm text-white'>Download</h2>
          </a>
        </div>  
      </div>
    </div>
    <AnimatePresence>
      {openMenu && (
      <motion.div
      variants={varMenu}
      initial="hidden"
      animate="visible"
      exit="exit"
      className='flex flex-col justify-start gap-4 items-center fixed inset-0 bg-black/80 backdrop-blur-lg h-screen  w-full z-10 '>
        <div className='flex justify-end w-full p-4'>
          <h1 className='font-extrabold text-red-900 bg-gray-200 w-6 h-6 text-center rounded-full text-lg flex justify-center items-center' onClick={()=>setOpenMenu(false)}>X</h1>
        </div>
        <div className='flex flex-col justify-start gap-4 mb-10'>
          <Link to="/" className='flex justify-center   items-center gap-4 w-[400px]  h-16'>
            <img src={home} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Home</h2>
          </Link>
          <Link to="/about" className='flex justify-center   items-center gap-4 w-[400px] h-16'>
            <img src={about} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>About</h2>
          </Link>
          <Link to="/skills" className='flex justify-center   items-center gap-4 w-[400px] h-16'>
            <img src={skills} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Skills</h2>
          </Link>
          <Link to="/projects" className='flex justify-center   items-center gap-4 w-[400px] h-16'>
            <img src={project} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Projects</h2>
          </Link>
          <Link to="/experience" className='flex justify-center   items-center gap-4 w-[400px] h-16'>
            <img src={exp} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Experience</h2>
          </Link>
          {/* <Link to="/certificates" className='flex justify-center   items-center gap-4 w-[400px] h-16'>
            <img src={certificate} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Certificates</h2>
          </Link> */}
          <Link to="/contact" className='flex justify-center   items-center gap-4  h-16'>
            <img src={contact} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Contact</h2>
          </Link>
        </div>
      </motion.div>
    )}
    </AnimatePresence>



    {/* Desktop Navbar */}
    <div className='hidden lg:flex justify-center mt-6'>
      <div className='w-[90%] h-20 bg-black/60 backdrop:blur-lg  border border-red-500/30 rounded-lg shadow-md flex justify-between items-center'>
        <div className='w-[10%] flex justify-center items-center'>
          <div className='h-16 w-[64px] rounded-[50%] relative group'>
            <img src={profile} alt="profile" className='hover:rotate-180 transition-transform duration-500 ease-in-out' />
            {/* hover content */}
            <div className= 'profile-hover-card top-full mt-4 left-52 h-[550px] w-[550px] rounded-xl -translate-x-1/2 opacity-0 scale-95 absolute group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none flex flex-col justify-between items-center z-10 '>
              <div className='h-[25%] w-full flex justify-center items-center '>
                <img src={me} alt="my_photo" className='h-24 w-24 rounded-full border border-zinc-900' />
              </div>
              <div className='flex justify-center w-full h-[70%]'>
                <div className='w-[35%]'>
                  <img src={sama} className='h-80 w-full' alt="OruchimaruImg" />
                </div>
                <div className='w-[65%]'>
                  <h1 className='font-bold text-xl '>Hii,My Name is Neelesh</h1>
                  <h2 className='font-mono font-bold'>I am a Full Stack Developer</h2>
                  <p className='font-mono italic mr-10'>Full Stack Developer with a growing passion for building responsive and scalable web applications using modern technologies. Comfortable working across both frontend and backend, with a love for clean code, smooth performance, and thoughtful, user-friendly design. Always curious, always learning, and steadily improving with every project.</p>
                </div>
              </div>
              <div>
                <h2 className='font-serif font-bold text-red-900/90 text-2xl mb-4'>{text}<Cursor cursorStyle="🌿" /></h2>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between w-[60%]'>
          <Link to="/" className='flex justify-center items-center flex-col  h-16'>
            <img src={home} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Home</h2>
          </Link>
          <Link to="/about" className='flex justify-center items-center flex-col h-16'>
            <img src={about} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>About</h2>
          </Link>
          <Link to="/skills" className='flex justify-center items-center flex-col h-16'>
            <img src={skills} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Skills</h2>
          </Link>
          <Link to="/projects" className='flex justify-center items-center flex-col h-16'>
            <img src={project} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Projects</h2>
          </Link>
          <Link to="/experience" className='flex justify-center items-center flex-col h-16'>
            <img src={exp} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Experience</h2>
          </Link>
          {/* <Link to="/certificates" className='flex justify-center items-center flex-col h-16'>
            <img src={certificate} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Certificates</h2>
          </Link> */}
          <Link to="/contact" className='flex justify-center items-center flex-col h-16'>
            <img src={contact} className='h-[40%]' alt="home" />
            <h2 className='font-bold text-md text-white'>Contact</h2>
          </Link>
        </div>
        <div className='w-[10%] flex justify-center items-center'>
          <a href='/CV.pdf' download className='h-16 flex flex-col items-center justify-center'>
            <img src={resumeicon} className='h-[40%]' alt="" />
            <h2 className='font-bold text-md text-white'>Download</h2>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}
