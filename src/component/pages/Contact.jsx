import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

function Contact() {
  return (
    <>
      <Navbar/>
      <div className="contact d-flex justify-content-center align-items-center">
        <div className="container-xxl d-flex align-items-center">
        <form className='form-container p-0 col-12 col-lg-6' onSubmit={(e)=>e.preventDefault()}>
          <div className='d-flex align-items-center'>
            <span className='blue-self'>Contact</span>
            <h2 className='m-0 mx-2 text-white'>Us</h2>
          </div>
          <div className='col-12'>
            <input type="text" placeholder='Enter your name' className='w-100'/>
          </div>
          <div className='my-4 col-12'>
            <input type="email" placeholder='Enter your email' className='w-100'/>
          </div>
          <div className='col-12'>
            <textarea rows="9" className='w-100' placeholder='Enter your Text'></textarea>
          </div>
          <button className='my-4 blue-bg'>Submit</button>
        </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact