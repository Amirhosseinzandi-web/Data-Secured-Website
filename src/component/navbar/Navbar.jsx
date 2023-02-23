import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'




function Navbar() {
    const [on , setOn] = useState(false)

    const HamburgerMenu = () =>{
        setOn(!on)
    }

    window.addEventListener("scroll" , ()=>{
        let currentScroll = document.documentElement.scrollTop;
        // console.log(currentScroll);
        if(currentScroll>50){
            document.querySelector("header").style.backgroundColor = ` rgba(0, 0, 0, 0.336) `
            document.querySelector("header").style.backdropFilter = ` blur(7.5px) `
        }else{
            document.querySelector("header").style.backgroundColor = ` unset `
            document.querySelector("header").style.backdropFilter = ` unset `
        }
    })
  return (
    <header className='col-12'>
        <section className='d-flex justify-content-between px-lg-4 container-xxl'>
        <div className='logo d-flex align-items-center'>
        <i className="bi bi-layers-half blue-self"></i>
        <p className='m-0 ms-3'>Secured</p>
        </div>
        <nav className='d-flex align-items-center'>
        <i className={on?(`bi bi-x-lg d-lg-none`):(`bi bi-justify d-lg-none`)} onClick={HamburgerMenu}></i>
            <ul className={on?("active menu d-lg-flex"):("menu d-lg-flex")}>
                <li><NavLink to="/" style={({isActive})=>{
                    return {color: isActive?("#936C00"):("white") }
                }}>Home</NavLink></li>
                <li><NavLink to="/recovery" style={({isActive})=>{
                    return {color: isActive?("#936C00"):("white") }
                }}>Recovery</NavLink></li>
                <li><NavLink to="/cloud" style={({isActive})=>{
                    return {color: isActive?("#936C00"):("white") }
                }}>Cloud</NavLink></li>
                <li><NavLink to="/contact" style={({isActive})=>{
                    return {color: isActive?("#936C00"):("white") }
                }}>Contatc</NavLink></li>
                <li><NavLink className="blue-bg">Sign in</NavLink></li>
            </ul>
        </nav>
        </section>
    </header>
  )
}

export default Navbar