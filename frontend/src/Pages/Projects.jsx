import { useEffect, useState } from "react";
import Footer from "../Components/Footor";
import Navbar from "../Components/Navbar";
import axios from "axios";


export default function Projects() {
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null)

  //fetching data
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/v1/projects/getproject');
        setData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        setError("Unable to Fetch Data");
      } finally{
        setLoading(false);
      }
    }
    fetchData();
  },[])

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
    <div className="h-screen w-full flex flex-col justify-between  text-white">
      <div className="w-full px-1 pt-2 mb-3">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="h-[77%] px-8 overflow-y-auto w-full flex flex-col gap-8 items-center" >
        <h1 className="text-3xl font-bold mb-6 tracking-wide">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item,key)=>(
          <div key={key} className="bg-white/10 backdrop-blur-md rounded-xl w-80 h-[410px] p-5 border border-white/10 hover:border-red-500 transition">
            <div className="h-40 rounded-lg bg-black/40 flex items-center justify-center mb-4">
              <img
                src={item.img}
                alt="project"
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              {item.title}
            </h2>
            <ul className="text-sm text-gray-300 mb-4 space-y-1 h-24 overflow-y-auto">
              <li>{item.des1}</li>
              <li>{item.des1}</li>
              <li>{item.des1}</li>
            </ul>
            <div className="flex gap-3">
              <a href={item.link}>
                <button className="flex-1 bg-red-600 hover:bg-red-700 transition py-2 px-4 rounded-md text-sm">
                  View
                </button>
              </a>
              <a href={item.github}>
                <button className="flex-1 bg-black/40 hover:bg-black/60 transition py-2 px-3 rounded-md text-sm border border-white/10">
                  GitHub
                </button>
              </a>
            </div>
          </div>
          ))} 
        </div>
      </div>

      {/* Footer */}
      <div className="h-[10%] flex items-center justify-center px-6">
        <Footer />
      </div>
    </div>
  )
}
