import React from 'react'
import location from '../images/location.png';
import mail from '../images/mail.png';
import phone from '../images/phone.png';
import timer from '../images/timer.png';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div className='navigation'>
      <header className='header'>
           <div className='first-header'>
              <div className="noida">
                  <img src={location} alt="location" />
                  <p>g-9,first Floor, Sector 63, Noida  <span>|</span>  </p>
              </div>
              <div className="email">
                 <img src={mail} alt="mail" />
                 <p>shubham@kusheldigi.com   <span>|</span> </p>
              </div>
              <div className="phone">
                  <img src={phone} alt="phone" />
                  <p>9045301702</p>
              </div>
           </div>
           <div className='second-header'>
                <div className="timer">
                     <img src={timer} alt="timer" />
                     <p>Office Hours 24 Hours</p>
                </div>
           </div>
      </header>
        <nav className='navbar'>
          <NavLink to="/"> <div className="logo">
              <img src={logo} alt="logo" />
           </div></NavLink>
           <div className='navbar-text'>
               <ul >
                 <li><a href="">about us</a></li>
                 <li className='mar'><a className='sar' href="">services</a></li>
                 <li className='mar'><a className='sar' href="">Our portfolio</a></li>
                 <li className='mar'><a className='sar' href="">Blog</a></li>
                 <li className='mar'><NavLink to="/staff" className='sar' href="">cAREER</NavLink></li>
                 <li className='mar'>
                   <NavLink to="/contact"><button className='sar'>Contact Us</button></NavLink>
                 </li>
               </ul>
           </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar