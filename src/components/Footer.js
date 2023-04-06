import React from 'react'
import white from '../images/white.png'
import footerMail from '../images/footerMail.png';
import footerCall from '../images/footerCall.png';
import footerLoc from '../images/footerLoc.png';
import drible from '../images/drible.png';
import fb from '../images/fb.png';
import insta from '../images/insta.png';
import link from '../images/link.png';
import pint from '../images/pint.png';
import twiter from '../images/twiter.png';
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <>
       <footer className='foot'>
          <div className="footer">
              <div className="first-footer">
                 <img src={white} alt="logo" />
              </div>
              <div className="second-footer">
                <img src={footerLoc} alt="loc" />
                <p>g-9,first Floor, Sector 63, Noida</p>
              </div>
              <div className="third-footer">
                  <img src={footerMail} alt="mail" />
                  <p className='maa'>shubham@kusheldigi.com</p>
              </div>
              <div className="fourth-footer">
                <img src={footerCall} alt="phone" />
                <p>9045301702</p>
              </div>
          </div>

          <div className='lower-footer'>
             <div className="first-lower">
               <p className='atthe'>© 2023 Kusheldigi. All rights reserved.</p>
               <div className='information'>
                 <NavLink to="/nda"><p>About Us <span>|</span></p></NavLink>
                 <NavLink to="/refund"><p className='ins'>Insights  <span>|</span></p></NavLink> 
                  <p className='ins'>Blog  <span>|</span></p>
                 <NavLink to="/privacy"><p className='ins'> Privacy Policy  <span>|</span></p></NavLink>
                 <NavLink to="/quality"><p className='ins'>Sitemap</p></NavLink>
               </div>
             </div>
             <div className="second-lower">
                  <h3>Follow Us On</h3>
                  <div className="social-links">
                     <img src={drible} alt="" />
                     <img className='fb' src={fb} alt="" />
                     <img className='fb' src={insta} alt="" />
                     <img className='fb' src={link} alt="" />
                     <img className='fb' src={pint} alt="" />
                     <img className='fb' src={twiter} alt="" />
                  </div>
             </div>
          </div>
       </footer>
    </>
  )
}

export default Footer