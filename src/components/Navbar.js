import React from 'react'
import location from '../images/location.png';
import mail from '../images/mail.png';
import phone from '../images/phone.png';
import timer from '../images/timer.png';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import india from '../images/india.png';
const Navbar = () => {
  const [cont, setCont] = useState(1);

  const toggleMenu = () => {
    document.querySelector('.mob-nav2').classList.toggle('mob-nav2-active');
  }

  const toggleService = () => {
    console.log('yes');
    document.querySelector('.ser-nav').classList.toggle('hidden');
  };

  const toggleService1 = () => {
    console.log('yes');
    document.querySelector('.ser-nav-mob').classList.toggle('hidden');
  };

  const shFunc = (index) => {
    setCont(index);
  };

  const toggleCont = () => {
    document.querySelector('.sh').classList.toggle('hidden');
  };

  return (
    <>
      <div id="header1" className='overflow-auto w-full'>
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
          <div className='second-header flex items-center'>
            <div className="second-header1">
              {cont === 1 ? <div onClick={toggleCont} id="cont1" className="flex items-center cursor-pointer">
                <img src="/static/images/c1.png" alt="" />
                <p className='ml-2 text-white text-lg united'>United States</p>
              </div> : cont === 2 ? <div onClick={toggleCont} id="cont2" className="flex items-center cursor-pointer">
                <img src={india} alt="india" />
                <p className='ml-2 text-white text-lg united'>India</p>
              </div> : null}
            </div>
            <div className='ml-1.5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            <div className="sh fixed hidden">
              <div onClick={() => {
                shFunc(1);
                toggleCont();
              }} className={`flex items-center cursor-pointer py-1.5 my-1.5 px-2 sh1 sh2 ${cont === 1 ? 'sh-active' : ''}`}>
                <img src="/static/images/c1.png" alt="" />
                <p className='ml-2 text-white text-lg united'>United States</p>
              </div>
              <div onClick={() => {
                shFunc(2);
                toggleCont();
              }} className={`flex items-center cursor-pointer py-1.5 my-1.5 px-2 sh1 sh2 ${cont === 2 ? 'sh-active' : ''}`}>
                <img src={india} alt="" />
                <p className='ml-2 text-white text-lg united'>India</p>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className='navigation'>
        <nav className='navbar'>
          <NavLink to="/"> <div className="logo">
            <img src={logo} alt="logo" />
          </div></NavLink>
          <div className='navbar-text desk-nav'>
            <ul>
              <li><NavLink to="">about us</NavLink></li>
              <li className='mar'>
                <div onClick={toggleService} className="flex items-center cursor-pointer">
                  <p className='sar' to="">services</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="ml-1 bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
                <div className="ser-nav hidden">
                  <div className="ser-nav1 flex flex-col">
                    <NavLink onClick={toggleService} to="/service">Ecommerce Solutions</NavLink>
                    <NavLink onClick={toggleService} to="/website">Website Design & Development</NavLink>
                    <NavLink onClick={toggleService} to="#">Web Application Development</NavLink>
                    <NavLink onClick={toggleService} to="#">UI/UX Design</NavLink>
                    <NavLink onClick={toggleService} to="/mobileApp">Mobile App Development</NavLink>
                    <div className='p-2'>
                      <div onClick={() => {
                        document.getElementById("digi-nav").classList.toggle("hidden");
                      }} className="flex items-center cursor-pointer">
                        <p>Digital Marketing</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="opg ml-1 bi bi-chevron-down" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </div>
                      <div id="digi-nav" className='hidden py-2'>
                        <NavLink onClick={toggleService} to="#">Lorem, ipsum.</NavLink>
                      </div>
                    </div>
                    <NavLink onClick={toggleService} to="#">Graphic Design</NavLink>
                  </div>
                </div>
              </li>
              <li className='mar'><NavLink className='sar' to="">Our portfolio</NavLink></li>
              <li className='mar'><NavLink className='sar' to="">Blog</NavLink></li>
              <li className='mar'><NavLink to="/staff" className='sar'>cAREER</NavLink></li>
              <li className='mar'>
                <NavLink to="/contact"><button className='sar'>Contact Us</button></NavLink>
              </li>
            </ul>
          </div>

          <div className="mob-nav">
            <div onClick={toggleMenu} className="mob-nav1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
            <div className="mob-nav2">
              <ul>
                <li><NavLink to="">about us</NavLink></li>
                <li className='mar'>
                  <div className='flex justify-center items-center'>
                    <p onClick={toggleService1} className='sar'>services</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="opg ml-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </div>
                  <div className="ser-nav-mob hidden">
                    <div className="ser-nav1 flex flex-col">
                      <NavLink onClick={toggleService1} to="/service">Ecommerce Solutions</NavLink>
                      <NavLink onClick={toggleService1} to="#">Website Design & Development</NavLink>
                      <NavLink onClick={toggleService1} to="#">Web Application Development</NavLink>
                      <NavLink onClick={toggleService1} to="#">UI/UX Design</NavLink>
                      <NavLink onClick={toggleService1} to="/mobileApp">Mobile App Development</NavLink>
                      <div className='pb-3'>
                        <div onClick={() => {
                          document.getElementById("digi-nav1").classList.toggle("hidden");
                        }} className="flex justify-center items-center cursor-pointer">
                          <p>Digital Marketing</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="opg ml-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                          </svg>
                        </div>
                        <div id="digi-nav1" className='hidden py-2'>
                          <NavLink onClick={toggleService1} to="#">Lorem, ipsum.</NavLink>
                        </div>
                      </div>
                      <NavLink onClick={toggleService1} to="#">Graphic Design</NavLink>
                    </div>
                  </div>
                </li>
                <li className='mar'><NavLink className='sar' to="">Our portfolio</NavLink></li>
                <li className='mar'><NavLink className='sar' to="">Blog</NavLink></li>
                <li className='mar'><NavLink to="/staff" className='sar'>CAREER</NavLink></li>
                <li className='mar'>
                  <NavLink to="/contact"><button className='sar'>Contact Us</button></NavLink>
                </li>
              </ul>
            </div>
          </div>

        </nav>
      </div>

    </>
  )
}

export default Navbar