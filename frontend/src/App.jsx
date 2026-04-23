import React from 'react'
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/admin/Register';
import background from './assets/backgroundvideo.mp4'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './Pages/admin/Login';
import AdminHome from './Pages/admin/AdminHome';
import ProtectedRoute from './Components/ProtectedRoute';
import Navbar from './Components/Navbar';
import Footer from './Components/Footor';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

function App() {
  return (
    <div className='min-h-screen relative '>
      <video  src={background} autoPlay loop muted playsInline className="fixed top-0 left-0 w-full h-full object-cover -z-10"></video>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/adminhome' element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      <ToastContainer position='top-right' autoClose={3000} theme='dark' />
    </div>
  )
}

export default App