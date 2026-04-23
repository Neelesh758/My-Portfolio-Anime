import React from 'react'
import background from '../assets/backgroundvideo.mp4'
import eye from '../assets/eye1.png';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { anticipate,easeOut , motion } from "motion/react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footor';
import cv from '../assets/PNG_Characters_and_icons/resumeicon.png';
import git from '../assets/PNG_Characters_and_icons/github.png';
import link from '../assets/PNG_Characters_and_icons/linkdn.png';
import kakashi from '../assets/PNG_Characters_and_icons/kakashi.png.png'
import naruto1 from '../assets/PNG_Characters_and_icons/narutocar.png'


export default function Home() {

  const [text] = useTypewriter({
    words: ["👋Hii, Welcome to My Portfolio"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });


  return (
    <div className='w-full min-h-screen overflow-hidden relative  flex flex-col justify-between'>
      <motion.div
      animate={{
        x:4000,
      }}
      transition={{
        delay:6,
        duration:1
      }} 
      className='bg-black min-h-screen absolute inset-0 z-10 '></motion.div>
      <motion.div
      animate={{
        x:4000,
      }}
      transition={{
        delay:6,
        duration:1
      }} 
      className='absolute inset-0 z-20 flex items-center justify-center flex-col gap-9 '>
        <h1 className="text-white text-2xl md:text-4xl font-bold">{text}<Cursor cursorStyle="|" /></h1>
        <motion.img 
        animate={{
          scale:3.2,
          y:-150,
          rotate:360,
        }}
        transition={{
          delay:3,
          duration:4,
          ease:anticipate
        }}
        src={eye} alt="" className='h-60  mt-10' />
      </motion.div>
      {/* <div className='h-screen relative flex justify-center items-center'> */}
        {/* <video  src={background} autoPlay loop muted playsInline></video> */}
      {/* </div> */}
      {/* <Navbar /> */}
      <Navbar />
      <div className='flex justify-between px-7 flex-wrap-reverse '>
        <div className='flex justify-between lg:w-auto w-full'>
          <div className='flex flex-col gap-7 justify-center '>
          <motion.a
          href='/CV.pdf'
          download
          // Animate
          initial={{x:-80,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{
            duration:0.5,
            ease:"easeOut",
            delay:6.5
          }}
          className='flex justify-start items-center'>
            <img src={cv} className=' lg:h-[40px] lg:w-[40px] h-[30px] w-[30px]' alt="Download Cv" />
            <h1 className='font-mono font-bold lg:text-lg text-white mx-3'>Download CV</h1>
          </motion.a>
          <motion.a
          href='https://github.com/Neelesh758'
          target='_blank'
          initial={{x:-80,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{
            duration:0.5,
            ease:"easeOut",
            delay:7
          }}
          className='flex justify-start items-center'>
            <img src={git} className=' lg:h-[40px] lg:w-[40px] h-[30px] w-[30px]' alt="GitHub" />
            <h1 className='font-mono font-bold  lg:text-lg text-white mx-3'>GitHub</h1>
          </motion.a>
          <motion.a
          href='https://www.linkedin.com/in/neelesh-pandey-86a3a02a3/'
          target="_blank"
          initial={{x:-80,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{
            duration:0.5,
            ease:"easeOut",
            delay:7.5
          }}
          className='flex justify-start items-center'>
            <img src={link} className=' lg:h-[40px] lg:w-[40px] h-[30px] w-[30px]' alt="LinkedIn" />
            <h1 className='font-mono font-bold lg:text-lg text-white mx-3'>LinkedIn</h1>
          </motion.a>
        </div>
        <motion.div
        initial={{x:80,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{
          duration:0.5,
          ease:"easeout",
          delay:6.5
        }}
        className='md:hidden'>
          <img src={naruto1} className=' h-40' alt="" />
        </motion.div>
        </div>
        <motion.div
        //Animation
        initial={{x:80,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{
          duration:0.5,
          ease:"easeOut",
          delay:6.5
        }}
        className='flex justify-center items-center h-[500px] w-[550px]'>
          <div className='w-[30%] hidden md:block'>
            <img src={kakashi} className='h-[500px]' alt="kakashi" />
          </div>
          <div className='flex flex-col justify-between w-[99%] md:w-[70%] gap-7 border border-zinc-400 p-4 rounded-xl shadow-[0_0_35px_rgba(255,255,255,0.15)]'>
            <h1 className='text-center font-bold text-3xl text-white'>Education</h1>
            <div className='flex flex-col gap-7'>
              <div className='flex justify-between '>
                <div>
                  <h2 className='text-lg text-gray-200'>Full Stack Development</h2>
                  <p className='text-gray-400'>Internshala Trainings</p>
                </div>
                <p className='text-lg text-gray-200'>Mar-25</p>
              </div>
              <div className='flex justify-between '>
                <div>
                  <h2 className='text-lg text-gray-200'>B.Com (Hons.)</h2>
                  <p className='text-gray-400'>University of Delhi</p>
                </div>
                <p className='text-lg text-gray-200'>Jun-24</p>
              </div>
              <div className='flex justify-between '>
                <div>
                  <h2 className='text-lg text-gray-200'>Intermidiate</h2>
                  <p className='text-gray-400'>DKSV Delhi</p>
                </div>
                <p className='text-lg text-gray-200'>Mar-21</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer /> 
    </div>
  )
}
