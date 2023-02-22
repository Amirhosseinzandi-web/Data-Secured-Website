import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from "../footer/Footer"

function Recovery() {
  return (
    <>
    <Navbar />
      <div className="recovery d-flex">
      <div className="container-xxl d-flex align-items-center">
      
        <div className="pages-style-center d-flex flex-column justify-content-center px-lg-4">
          <div className='d-flex align-items-center'>
            <span className='blue-self'>Data</span>
            <h2 className='m-0 mx-2 text-white'>Recovery</h2>
          </div>
          <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at veritatis quisquam voluptatem nostrum reprehenderit, tempore sint placeat, aperiam alias, facilis voluptate quod itaque deleniti molestiae non odit esse necessitatibus.
          </p>
        </div>
        
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Recovery