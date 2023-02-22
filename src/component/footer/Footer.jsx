import React from 'react'
import FooterBottom from './FooterBottom'
import FooterTop from './FooterTop'

function Footer() {
  return (
    <footer className='p-2'>
        <div className="container-xxl">
            <section className='footer-content'>
                <FooterTop/>
                <FooterBottom/>
            </section>
        </div>
    </footer>
  )
}

export default Footer