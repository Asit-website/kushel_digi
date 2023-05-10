import React, { useState } from 'react'
import footerMail from '../images/footerMail.png';
import footerCall from '../images/footerCall.png';
import footerLoc from '../images/footerLoc.png';
import drible from '../images/drible.png';
import fb from '../images/fb.png';
import insta from '../images/insta.png';
import link from '../images/link.png';
import pint from '../images/pint.png';
import twiter from '../images/twiter.png';
import india from '../images/india.png';
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const [cont, setCont] = useState(1);

  const shFunc = (index) => {
    setCont(index);
  };

  const toggleCont = () => {
    console.log('yes');
    document.querySelector('.shf').classList.toggle('hidden');
  };

  return (
    <>
      <footer className='foot'>
        <div className="foot1 flex justify-between">
          <div className="foot11 foot111">
            <div className="foot10 footsa">
              <img src={'/static/images/c9.png'} alt="" />
              <h4 className='text-start'>Revolutionising your <br /> business
                through Technology.</h4>
            </div>
          </div>

          <div className="foot11 foot12">
            <h5>Quick Links</h5>
            <div className="foot10 flex flex-col">
              <NavLink to="/service">Ecommerce Solutions</NavLink>
              <NavLink to="/website">Website Design & Development</NavLink>
              <NavLink to="/">Web Application Development</NavLink>
              <NavLink to="/">UI/UX Design</NavLink>
              <NavLink to="/mobileApp">Mobile App Development</NavLink>
              <NavLink to="/">Digital Marketing</NavLink>
              <NavLink to="/">Graphic Design</NavLink>
            </div>
          </div>
          <div className="foot11 foot13">
            <h5></h5>
            <div className="foot10 reji flex flex-col">
              <NavLink to="/refund">Refund Policy</NavLink>
              <NavLink to="/quality">Quality policy</NavLink>
              <NavLink to="/nda">NDA Policy</NavLink>
              <NavLink to="/privacy">Privacy Policy</NavLink>
              <NavLink to="/terms">Terms & Conditions</NavLink>
            </div>
          </div>

          <div className="foot11 foot14">
            <h5>Find Us</h5>
            <div className="foot10">
              <div className="flex foot140 items-center mt-5">
                <img src={footerLoc} alt="" />
                <p>G-9, first Floor, Sector 63, Noida</p>
              </div>
             <a href="mailto:shubham@kusheldigi.com"><div className="flex foot140 items-center">
                <img src={footerMail} alt="" />
                <p>info@kusheldigi.com</p>
              </div></a>
              <div className="flex foot140 items-center">
                <img src={footerCall} alt="" />
                <p>9045301702</p>
              </div>
            </div>
          </div>

          <div className="foot11 foot15">
            <h5 className='find_us'>Follow Us On</h5>
            <div className="foot10">
              <div className="foot151 flex items-center">
                <img src={drible} alt="" />
               <a target='_blank' href="https://www.facebook.com/kusheldigi"><img src={fb} alt="" /></a>
               <a target='_blank' href="https://www.instagram.com/kusheldigi/"><img src={insta} alt="" /></a>
               <a target='_blank' href="https://www.linkedin.com/company/kusheldigisolutions/"><img src={link} alt="" /></a>
                <img src={pint} alt="" />
                <img src={twiter} alt="" />
              </div>
              {/* <div className='second-header foot-second-header flex items-center'>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="text-white bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
              
              <div className="shf relative hidden">
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
              </div> */}
             <div className="footer-india flex items-center">
                <img src={india} alt="india" />
                <p className='ml-2'>+ 91 9045301702</p>
             </div>
             <div className="footer-india flex items-center">
                <img src="/static/images/c1.png" alt="india" />
                <p className='ml-2'>+ 1 5855662070</p>
             </div>
            </div>
          </div>
        </div>

        <div className="foot2">
          <p className="text-center text-white py-5 font-semibold italic proms">© 2023 Kusheldigi. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer