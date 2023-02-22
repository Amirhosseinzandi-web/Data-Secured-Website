import React from 'react'
import Navbar from '../navbar/Navbar'
import PageOneCenter from './PageOneCenter'



function PageOne() {
  return (
    <>
      <Navbar/>
    <div className="page-one d-flex">
        <div className="container-xxl d-flex align-items-center">
        <PageOneCenter/>
        </div>
    </div>
    </>
  )
}

export default PageOne