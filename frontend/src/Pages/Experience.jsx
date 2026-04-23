import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footor'
import axios from 'axios';

export default function Experience() {

  //fetching states
  const [data,setData] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);

  //filter state
  const [filter , setFilter] = useState("Tech");

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get('https://my-portfolio-anime.onrender.com/api/v1/exp/getexp');
        setData(res.data.experience)
        console.log(res)
      } catch (error) {
        setError("Failed to Fetch Data")
      } finally{
        setLoading(false)
      }
    }
    fetchData();
  },[])
  const filterData = data.filter(item => item.category === filter);

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
    <div className='min-h-screen flex justify-between flex-col'>
      <div>
        <Navbar />
      </div>
      <div className='flex flex-col justify-start gap-5 items-center'>
        <h1 className='w-[250px] h-14 rounded-xl flex justify-center items-center font-semibold text-xl text-gray-200 bg-black/35 backdrop-blur-sm  border border-white/40 shadow-md shadow-white/40'>Work Experience</h1>
        <div className='flex gap-3'>
          <button className='w-28 border border-red-400/40 h-9 rounded-lg flex justify-center items-center font-medium text-sm px-4 bg-black/40 backdrop-blur-sm text-gray-100' onClick={()=>setFilter("Tech")}>Tech</button>
          <button className='w-28 border border-red-400/40 h-9 rounded-lg flex justify-center items-center font-medium text-sm px-4 bg-black/40 backdrop-blur-sm text-gray-100' onClick={()=>setFilter("Non Tech")}>Non-Tech</button>
        </div>
        <div>
          {
            filterData.length > 0 ?
            (
              filterData.map((item,index)=>(
              <div key={index} className='w-[345px] h-80  flex flex-col justify-evenly items-start bg-black/35 border border-white/30 backdrop-blur-sm shadow-md shadow-white/30 text-gray-100 rounded-xl p-3 mt-5'>
            <div className='w-full flex flex-col justify-center items-center mb-4'>
              <h2 className='text-xl font-extrabold'>{item.jobTitle}</h2>
              <h3 className='text-lg font-bold'>{item.company}</h3>
            </div>
            <p className='text-md font-semibold mb-2'>From {item.start} to {item.end}</p>
            <p className='text-gray-400 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]-hidden'>{item.description}</p>
          </div>
            ))
            ):(
              <div className='w-[345px] h-80  flex flex-col justify-evenly items-start bg-black/35 border border-white/30 backdrop-blur-sm shadow-md shadow-white/30 text-gray-100 rounded-xl p-3 mt-5'>
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-xl font-extrabold tracking-wide">Fresher</h2>
                <h3 className="text-md  text-white font-semibold mt-1">Actively Learning & Building Projects</h3>
                <p className="text-sm text-gray-400 mt-4 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]-hidden">Currently focused on strengthening full stack development skills by building real-world projects. Comfortable working with modern frontend and backend technologies, and eager to gain hands-on industry experience.</p>
              </div>
            )
          }
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
