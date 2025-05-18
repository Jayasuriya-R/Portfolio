import React from 'react'
import github from '../assets/github.png'
import linkdin from '../assets/linkdin.png'
import instagram from '../assets/instagram.png'

const Contact = () => {
  return (
    <div>
        <h1 className='font-bold text-6xl my-[5%] w-6/12'>Let's Get in Touch: Ways to Connect with Me</h1>
        <p className='text-2xl mb-[2%] w-11/12 font-serif text-gray-700'>Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at   mail@tharindu.dev. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Alternatively, you can use the contact form on my website to get in touch. Simply fill out the required fields and I'll get back to you as soon as possible. Finally, if you prefer to connect on social media, you can find me on https://instagram.com/. I post regular updates and engage with my followers there, so don't hesitate to reach out. Thanks again for your interest, and I look forward to hearing from you!</p>
    <div >
           <div>
            <img className='w-10 h-10 my-2 inline mr-2' src={github}/>
            <span>Follow on GitHub</span>
            </div>
            <div>
            <img className='w-10 h-10 my-2 inline mr-2' src={linkdin}/>
            <span>Follow on LinkedIn</span>
            </div>
            <div>
            <img className='w-10 h-10 my-2 inline mr-2'  src={instagram}/>
            <span>Follow on Instagram</span>
            </div>
          </div>
    </div>
  )
}

export default Contact
