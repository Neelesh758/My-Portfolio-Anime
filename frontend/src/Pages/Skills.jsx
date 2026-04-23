import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footor'
import sample from '../assets/PNG_Characters_and_icons/obito.png'
import axios from "axios";


export default function Skills() {

  // Fetching Data
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null)

  //filter state
  const [filter,setFilter] = useState("All");


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get('https://my-portfolio-anime.onrender.com/api/v1/skills/getskill');
        setData(res.data.skills);
        console.log(res.data)
      } catch (error) {
        setError("Failed to Fetch Data")
      } finally {
        setLoading(false);
      }
    }
    fetchData()
  },[])
  const filterData = filter === "All" ? data : data.filter(item=>item.category === filter)

  ///Loading
  if (loading)
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 bg-black">
      <div className="w-12 h-12 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
      <p className="text-white text-xl font-semibold tracking-wide">
        Loading, please wait…
      </p>
    </div>
  );


  //Error 
  if (error)
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 bg-black text-center px-4">
      <div className="text-5xl">⚠️</div>
      <p className="text-red-500 text-xl font-semibold">
        Something went wrong
      </p>
      <p className="text-gray-300 max-w-md">
        {error || "We couldn’t load the data right now. Please try again later."}
      </p>

      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
      >
        Retry
      </button>
    </div>
  );
  return (
    <div className='flex flex-col w-full justify-between min-h-screen'>
      <Navbar />
      <div className='flex flex-col py-5 h-[60%] w-full px-5 items-center'>
        <div className='flex flex-col items-center w-full mb-10'>
          <div className='w-28 h-12 rounded-xl flex justify-center items-center font-semibold text-xl text-gray-200 bg-black/35 backdrop-blur-sm  border border-white/40 shadow-md shadow-white/40'>
            <h1>Skills</h1>
          </div>
          <div className='flex w-full justify-start gap-6 mt-9 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]-hidden md:justify-center'>
            <button className='w-28 border border-red-400/40 h-9 rounded-lg flex justify-center items-center font-medium text-sm px-4 bg-black/40 backdrop-blur-sm text-gray-100' onClick={()=>setFilter("All")}>All</button>
            <button className='w-28 border border-red-400/40 h-9 rounded-lg flex justify-center items-center font-medium text-sm px-4 bg-black/40 backdrop-blur-sm text-gray-100' onClick={()=>setFilter("Frontend")}>Frontend</button>
            <button className='w-28 border border-red-400/40 h-9 rounded-lg flex justify-center items-center font-medium text-sm px-4 bg-black/40 backdrop-blur-sm text-gray-100' onClick={()=>setFilter("Backend")}>Backend</button>
            <button className='w-28 border border-red-400/40 h-9 rounded-lg flex justify-center items-center font-medium text-sm px-4 bg-black/40 backdrop-blur-sm text-gray-100' onClick={()=>setFilter("Tools")}>Tools</button>
            <button className='w-28 border border-red-400/40 h-9 rounded-lg flex justify-center items-center font-medium text-sm px-4 bg-black/40 backdrop-blur-sm text-gray-100' onClick={()=>setFilter("Non Tech")}>Non Tech</button>
          </div>
        </div>
        
        <div className='sm:w-full lg:w-[40%] flex flex-wrap justify-center gap-3 '>
        {
          filterData.map((item,index)=>(
            <div key={index} className=' w-36 h-36  flex flex-col justify-evenly items-center bg-black/35 border border-white/30 backdrop-blur-sm shadow-md shadow-white/30 text-gray-100 rounded-xl '>
            <img src={item.img} alt="" className='h-1/3' />
            <p className='font-semibold font-mono text-xl text-center'>{item.skillName}</p>
          </div>
          ))
        }
        </div>
      </div>
      <Footer />
    </div>
  )
}
