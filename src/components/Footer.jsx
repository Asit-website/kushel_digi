import React, { useState } from "react";
import footerMail from "../images/footerMail.png";
import footerCall from "../images/footerCall.png";
import footerLoc from "../images/footerLoc.png";
import drible from "../images/drible.png";
import fb from "../images/fb.png";
import india from "../images/india.png";
import { NavLink } from "react-router-dom";
import young2 from "../images/young2.png";
import young3 from "../images/young3.png";
import behance from "../images/behance.png";
import linkedin from "../images/linkdin.png";
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import kdsKin from '../images/kdsKin.png';
import dri1 from '../images/dri1.png';
import dri2 from '../images/dri2.png';
import dri3 from '../images/dri3.png';
import dri4 from '../images/dri4.png';
import dri5 from '../images/dri5.png';
const Footer = () => {
  const [cont, setCont] = useState(1);

  const shFunc = (index) => {
    setCont(index);
  };

  const toggleCont = () => {
    console.log("yes");
    document.querySelector(".shf").classList.toggle("hidden");
  };

  return (
    <>
      <footer className="foot">
        <div className="foot1 flex justify-between">
          <div className="foot11 foot111">
            <div className="foot10 footsa">
              <img src={kdsKin} alt="kdskin" />
              <h4 className="text-start">
                Engineering businesses <br /> for hyper performance
              </h4>
            </div>
          </div>

          <div className="foot11 foot12">
            <h5>Quick Links</h5>
            <div className="foot10 flex flex-col">
              <NavLink to="/ecommerce-solutions-usa">Ecommerce Solutions</NavLink>
              <NavLink to="/web-development-usa">Website Design & Development</NavLink>
              {/* <NavLink to="/">Web Application Development</NavLink> */}
              <NavLink to="/ui-ux-designer-usa">UI/UX Design</NavLink>
              <NavLink to="/mobile-application-development-usa">Mobile App Development</NavLink>
              <NavLink to="/digital-marketing-agency-usa">Digital Marketing</NavLink>
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
                <img src={icon1} alt="" />
                <p>G-9, first Floor, Sector 63, Noida</p>
              </div>
              <a href="mailto:shubham@kusheldigi.com">
                <div className="flex foot140 items-center">
                  <img src={icon2} alt="" />
                  <p>info@kusheldigi.com</p>
                </div>
              </a>
              <div className="flex foot140 items-center">
                <img src={icon3} alt="" />
                <p>9045301702</p>
              </div>
            </div>
          </div>
          {/* <div className="foot11 foot15">
            <h5 className="find_us">Follow Us On</h5>
            <div className="foot10">
              <div className="foot151 flex items-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/kusheldigisolutions/"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
                <a target="_blank" href="https://www.instagram.com/kusheldigi/">
                  <img src={young3} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/kusheldigisolutions/"
                >
                  <img src={fb} alt="" />
                </a>
                <a target="_blank" href="https://twitter.com/KushelDigisoln">
                  <img src={young2} alt="young2" />
                </a>
                <a target="_blank" href="https://www.behance.net/kushelsolucti">
                  <img src={behance} alt="young1" />
                </a>
                <a target="_blank" href="https://dribbble.com/kusheldigi">
                  <img src={drible} alt="" />
                </a>
              </div>
              <div className="footer-india flex items-center">
                <img src={india} alt="india" />
                <p className="ml-2">+91-9045-301-702</p>
              </div>
              <div className="footer-india flex items-center">
                <img src="/static/images/c1.png" alt="india" />
                <p className="ml-2">+1-585-566-2070</p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="foot2">
          {/* <p className="text-center py-5 font-semibold italic proms">
            © 2023 Kusheldigi. All rights reserved.
          </p> */}
          <div className="foot_bottom">
              <div className="bottom1">
                  <h3>We are global</h3>
                  <div className="flex items-center footer_icon">
                     <img src="/static/images/c1.png" alt="" />
                     <img src={india} alt="india" />
                  </div>
                  <p> <span>©</span>  2023 Kusheldigi. All rights reserved.</p>
              </div>
              <div className="bottom2">
                     <div className="foot11 foot15">
            <h5 className="find_us">Follow Us On</h5>
            <div className="foot10">
              <div className="foot151 flex items-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/kusheldigisolutions/"
                >
                  <img src={dri5} alt="linkedin" />
                </a>
                <a target="_blank" href="https://www.instagram.com/kusheldigi/">
                  <img src={dri4} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/kusheldigisolutions/"
                >
                  <img src={dri2} alt="" />
                </a>
                <a target="_blank" href="https://twitter.com/KushelDigisoln">
                  <img src={dri3} alt="young2" />
                </a>
                <a target="_blank" href="https://www.behance.net/kushelsolucti">
                  <img style={{filter:"invert(1)"}} src={behance} alt="young1" />
                </a>
                <a target="_blank" href="https://dribbble.com/kusheldigi">
                  <img src={dri1} alt="" />
                </a>
              </div>
              
            </div>
          </div>
              </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
