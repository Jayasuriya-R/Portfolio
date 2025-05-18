import React from 'react'
import github from "../assets/github.png"
import linkdin from "../assets/linkdin.png"
import instagram from "../assets/instagram.png"
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <div className='grid grid-cols-12 '>
      <div className='col-span-7'>
        
        <h1 className='font-bold text-6xl my-[6%]'>Full-stack web and mobile app developer, and amateur astronaut.</h1>
        <p className='text-2xl font-serif text-gray-700 mb-[5%]'>I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.</p>
        <div className='flex'>
        <img className='w-15 h-15 mx-2' src={github}/>
        <img className='w-15 h-15 mx-2' src={linkdin}/>
        <img className='w-15 h-15 mx-2' src={instagram}/>
      </div>
      </div>
      
      <div className='col-span-5 mt-[10%] ml-[5%]'>
         <img className='w-10/12 h-10/12 rounded-2xl' src='https://reactfolio.tharindu.dev/homepage.jpg'/>
      </div>
    </div>
    <Contact/>
    </>
  )
}

export default Home
