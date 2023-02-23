import React from 'react'

function FooterTop() {
    const GoTop = () =>{
        window.scrollTo(0,0)
    }
    return (
        <div className="footer-top d-flex">
            <div className='col-6'>
                <div className='d-flex align-items-center'>
                    <i className='bi bi-layers-half blue-self'></i>
                    <p className='m-0 ms-3'>Secured</p>
                </div>
            </div>
            <div className='col-6 d-flex justify-content-end'>
                <i className="bi bi-arrow-up-circle blue-self" onClick={GoTop}></i>
            </div>
        </div>
    )
}

export default FooterTop