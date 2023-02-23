import React from 'react'

function FooterBottom() {
    const FormSub = (e) =>{
        e.preventDefault()
    }
    return (
        <div className="footer-bottom d-flex flex-wrap">
            <div className='col-12 col-lg-8 d-flex flex-wrap justify-content-between'>
                <div className='my-3'>
                    <h3>NAVIGATION</h3>
                    <ul className='p-0 mt-4'>
                        <li>Home</li>
                        <li>Data</li>
                        <li>Cloud</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='my-3'>
                    <h3>NAVIGATION</h3>
                    <ul className='p-0 mt-4'>
                        <li>Home</li>
                        <li>Data</li>
                        <li>Cloud</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='my-3'>
                    <h3>NAVIGATION</h3>
                    <ul className='p-0 mt-4'>
                        <li>Home</li>
                        <li>Data</li>
                        <li>Cloud</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='my-3'>
                    <h3>NAVIGATION</h3>
                    <ul className='p-0 mt-4'>
                        <li>Home</li>
                        <li>Data</li>
                        <li>Cloud</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </div>
            <form className='form col-12 col-lg-4 my-3' onSubmit={FormSub}>
                <h3 className='mx-auto'>JOIN OUR TEAM</h3>
                <div className='my-3'>
                <input type="email" id='mail' placeholder='Enter your email' />
                <i className="bi bi-envelope"></i>
                </div>
                
                <div className='social-group d-flex flex-wrap'>
                    <div><i className="bi bi-instagram"></i></div>
                    <div><i className="bi bi-telegram"></i></div>
                    <div><i className="bi bi-facebook"></i></div>
                    <div><i className="bi bi-linkedin"></i></div>
                    <div><i className="bi bi-github"></i></div>
                </div>
            </form>
        </div>
    )
}

export default FooterBottom