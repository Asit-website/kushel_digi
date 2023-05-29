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
              <h4 className='text-start'>Engineering businesses <br /> for hyper performance</h4>
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
              <a target='_blank' href="https://www.linkedin.com/company/kusheldigisolutions/"><img src={link} alt="" /></a>
              <a target='_blank' href="https://www.instagram.com/kusheldigi/"><img src={insta} alt="" /></a>
               <a target='_blank' href="https://www.facebook.com/kusheldigisolutions/"><img src={fb} alt="" /></a>
                <img src={twiter} alt="" />
                {/* <img src={drible} alt="" /> */}
                {/* <img src={pint} alt="" /> */}
              </div>
             <div className="footer-india flex items-center">
                <img src={india} alt="india" />
                <p className='ml-2'>+91-9045-301-702</p>
             </div>
             <div className="footer-india flex items-center">
                <img src="/static/images/c1.png" alt="india" />
                <p className='ml-2'>+1-585-566-2070</p>
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