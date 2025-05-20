import React from 'react'

const Footer = () => {
  return (
    <div className='mx-[3%] mt-[3%] h-20'>
         <hr className=' border-3 border-gray-300'></hr>
      <div className='mt-[2%] flex justify-between'>
       
        <div className='w-6/12 font-semibold text-gray-500 flex justify-between'>
            <span>Home</span>
            <span>Project</span>
            <span>About</span>
            <span>Contact</span>
        </div>
        <div className='text-center text-gray-300 font-semibold'>
            © 2023 Tharindu.dev. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
