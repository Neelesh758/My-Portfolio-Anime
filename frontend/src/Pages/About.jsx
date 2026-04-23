import React from 'react'
import me from '../assets/PNG_Characters_and_icons/me.jpeg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footor'
export default function About() {
  return (
    <div className='flex flex-col min-h-screen w-full overflow-hidden'>
      <Navbar />
      <div className='flex flex-col justify-center items-center mt-6 '>
        <div className='w-24 h-24 md:w-40 md:h-40 rounded-full border border-white overflow-hidden'>
          <img src={me} alt="" />
        </div>
        <div className='px-2 flex justify-center text-center mb-5'>
          <h1 className='font-extrabold text-2xl text-white [text-shadow:2px_2px_14px_rgba(255,255,255,0.6)]'>Neelesh Pandey - Full Stack Developer</h1>
        </div>
      </div>
      <div className='px-8 flex flex-col gap-6'>
        <div className='bg-black/40 backdrop-blur-sm px-6 py-6 rounded-md '>
          <h2 className='text-xl text-gray-300 font-bold [text-shadow:2px_2px_10px_rgba(255,255,255,0.6)]'>Meet Me..</h2>
          <p className='text-gray-100 text-lg'>I completed my Bachelor of Commerce (Honours) from the School of Open Learning, University of Delhi, graduating in June 2024. Alongside my academic journey, I developed a strong interest in technology and problem-solving, which motivated me to pursue Full Stack Development. To build a solid technical foundation, I completed a Full Stack Development program from Internshala Trainings in March 2025, where I gained hands-on experience in modern web technologies</p>
          <p className='text-gray-100 text-lg'>As a Full Stack Developer, I enjoy building responsive, scalable, and user-friendly web applications. I focus on writing clean, maintainable code and continuously improving my skills to stay aligned with industry standards. I am passionate about transforming ideas into functional digital solutions and enjoy working across both frontend and backend development.</p>
        </div>
        <div className='bg-black/40 backdrop-blur-sm px-6 py-6 rounded-md'>
          <h2 className='text-xl text-gray-300 font-bold [text-shadow:2px_2px_10px_rgba(255,255,255,0.6)]'>Technical Skills</h2>
          <ul className='text-gray-100 text-lg'>
            <li>Frontend: HTML, CSS, JavaScript</li>
            <li>Frameworks & Libraries: Tailwind CSS, React.js</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MongoDB</li>
          </ul>
        </div>
        <div className='bg-black/40 backdrop-blur-sm px-6 py-6 rounded-md'>
          <h2 className='text-xl text-gray-300 font-bold [text-shadow:2px_2px_10px_rgba(255,255,255,0.6)]'>Career Transition: Commerce to IT</h2>
          <p className='text-gray-100 text-lg'>My transition from the commerce field to the IT industry began when I discovered that it is possible to pursue a career in the science and technology domain even after completing studies in commerce. As I explored this path further, I developed a strong interest in software development and modern web technologies. Additionally, seeing some of my friends already working and growing in the Full Stack Development field inspired me to understand the domain more deeply.</p>
        </div>
        <div className='bg-black/40 backdrop-blur-sm px-6 py-6 rounded-md'>
          <h2 className='text-xl text-gray-300 font-bold [text-shadow:2px_2px_10px_rgba(255,255,255,0.6)]'>Professional Experience</h2>
          <p className='text-gray-100 text-lg'>Although I am a fresher in the IT industry, I bring 3.5 years of professional experience as an E-commerce Manager at Amai Traders, Delhi. In this role, I handled operations, online sales management, product listings, coordination, and decision-making responsibilities. This experience has helped me develop strong skills in communication, time management, teamwork, and business awareness—qualities that add significant value to my role as a developer.</p>
        </div>
        <div className='bg-black/40 backdrop-blur-sm px-6 py-6 rounded-md'>
          <h2 className='text-xl text-gray-300 font-bold [text-shadow:2px_2px_10px_rgba(255,255,255,0.6)]'>Future Plans</h2>
          <p className='text-gray-100 text-lg'>Looking ahead, I am committed to continuously enhancing my technical skills and growing as a software professional. My immediate goal is to deepen my understanding of Data Structures and Algorithms (DSA) to strengthen my problem-solving abilities and write more efficient, optimized code. Alongside this, I plan to learn Next.js to build high-performance, scalable, and SEO-friendly web applications using modern React-based architecture.</p>
          <p className='text-gray-100 text-lg'>In the long term, I aim to pursue a Master of Computer Applications (MCA) to gain in-depth academic knowledge of computer science, software engineering principles, and advanced technologies. This will help me strengthen my theoretical foundation while complementing my practical industry skills, enabling me to take on more complex challenges and grow into a well-rounded software professional.</p>
        </div>
        <div className='bg-black/40 backdrop-blur-sm px-6 py-6 rounded-md'>
          <h2 className='text-xl text-gray-300 font-bold [text-shadow:2px_2px_10px_rgba(255,255,255,0.6)]'>Closing Note</h2>
          <p className='text-gray-100 text-lg'>I am a motivated learner, adaptable professional, and enthusiastic developer who believes in continuous growth. With a strong foundation in full stack development and real-world business experience, I am eager to contribute to impactful projects and grow as a technology professional. I look forward to opportunities where I can apply my skills, learn from experienced teams, and build meaningful digital solutions.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
