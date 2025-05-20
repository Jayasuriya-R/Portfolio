import React from 'react'
import Home from './Home'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Body = () => {
  
     
  return (
    <>
    <Header/> 
    <div className='ml-[8%] mt-[12%]'>  
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Body
