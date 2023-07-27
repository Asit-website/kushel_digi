import React from "react";
import location from "../images/location.png";
import mail from "../images/mail.png";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import india from "../images/india.png";
import OutsideClickHandler from "react-outside-click-handler";
import mon1 from "../images/mon1.png";
import mon4 from "../images/mon4.png";
import mon2 from "../images/mon2.png";
import mon3 from "../images/mon3.png";
import marketing from "../images/marketing.png";
import uiux from "../images/uiux.png";
import staffji from "../images/staffpar.png";

import ent3 from "../images/ent3.svg";
import ent4 from "../images/ent4.svg";
import ent5 from "../images/ent5.svg";

import tiim1 from '../images/tiim1.png';
import tiim2 from '../images/tiim2.png';
import tiim3 from '../images/tiim3.png';
import tiim4 from '../images/tiim4.png';

var st;

const Navbar = () => {
  const [cont, setCont] = useState(1);
  // const [flag10, setFlag10] = useState(false);
  var flag10 = false;
  var [flag11, setFlag11] = useState(false);
  const toggleMenu = () => {
    document.querySelector(".mob-nav2").classList.toggle("mob-nav2-active");
  };
  const toggleService1 = () => {
    console.log("yes");
    document.querySelector(".ser-nav-mob").classList.toggle("hidden");
  };
  return (
    <>
      <div id="header1" className="overflow-auto w-full">
        <header className="header">
          <div className="first-header">
            <div className="noida">
              <img src={location} alt="location" />
              <p>
                g-9, first Floor, Sector 63, Noida <span>|</span>{" "}
              </p>
            </div>

           <a href="mailto:info@kusheldigi.com"><div className="email">
              <img src={mail} alt="mail" />
              <p>info@kusheldigi.com</p>
            </div></a>
          </div>
          <div className="second-header flex items-center">
            <a  href="tel://+9045301702">
              <div className="flex items-center">
                <img src={india} alt="alt" />
                <p className="ml-2">+91-9045-301-702</p>
              </div>
            </a>

            <a href="tel:+15855662070">
              {" "}
              <div className="flex items-center ml-10">
                <img src="/static/images/c1.png" alt="alt" />
                <p className="ml-2">+1-585-566-2070</p>
              </div>{" "}
            </a>
          </div>
        </header>
      </div>

      <div className="navigation">
        <nav className="navbar">
          <NavLink to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </NavLink>

          <div className="navbar-text desk-nav">
            <ul>
           <li className="mar">
                <div className="flex items-center cursor-pointer nb-0 navLinks">
                  <p className="sar" to="/about">
                    about us
                  </p>
                  <div className="ser-nav10 hidden megaMenu">
                    <div className="compan flex items-start justify-between">
                      <div className="first-compan mt-3 flex items-start justify-evenly">
                        <div className="second-compan mr-10">
                          <NavLink
                            onClick={() =>
                              document
                                .querySelector(".ser-nav10")
                                .classList.toggle("ses")
                            }
                            to="/about"
                          >
                            <div className="flex items-center">
                            <img src={tiim1} alt="tiim1" />
                            <p className="cpmpa">Who We Are</p>
                            </div>
                          </NavLink>
                          {/* <p className="cpmpa">Testimonials</p> */}
                          {/* <p className="cpmpa">Blog</p> */}
                          <NavLink to="/partner">
                            <div className="flex items-center">
                            <img src={tiim2} alt="" />
                            <p className="cpmpa">Partner With us</p>
                            </div>
                          </NavLink>
                          {/* <p className="cpmpa">Social Cause - NGO</p> */}
                        </div>
                        <div className="second-compan mr-5">
                          {/* <p className="cpmpa">Our Work</p>
                          <p className="cpmpa">Our Clients</p> */}
                          <NavLink to="/career">
                            <div className="flex items-center">
                            <img src={tiim3} alt="" />
                            <p className="cpmpa">Careers</p>
                            </div>
                          </NavLink>
                          <NavLink to="/hire">
                            <div className="flex items-center">
                            <img src={tiim4} alt="" />
                            <p className="cpmpa">Hire team</p>
                            </div>
                          </NavLink>
                        </div>
                      </div>
                      <div className="second-compan1">
                        <div className="comapn-sect">
                          <h3>GET FREE CONSULTATION</h3>
                          <p className="wanna wannt">
                            Empowering companies at the intersection of UX
                            design, development, & business. <br />
                            Accelerate your digital transformation with our free
                            consultation
                          </p>
                          <NavLink to="/contact">
                            <button className="wanna-btn">Contact Us</button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
             <li className="mar">
                <div
                  className="flex items-center cursor-pointer nb-0 navLinks"
                >
                  <p className="sar" to="">
                    services
                  </p>
                </div>
                <div className="ser-nav hidden megaMenu">
                  <div className="ser-nav5">
                    <div className="ser-tag">
                      <div className="tag1">
                        <div className="">
                          <NavLink to="/mobile-application-development-usa">
                            {" "}
                            <div className="flex items-center">
                              <img src={mon1} alt="" />
                              <h4>Mobile App Development</h4>
                            </div>
                          </NavLink>
                          <p className="yamini">
                            <NavLink className="sonji" to="/ios">
                              iOs
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="/android">
                              Android{" "}
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="/native">
                            React Native
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="/fluter">
                                Flutter
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="/kotlin">
                              Kotlin
                            </NavLink>
                            {/* <span>|</span>{" "} */}
                            {/* <NavLink className="sonji" to="#!">
                              Swift
                            </NavLink> */}
                          </p>
                        </div>
                        <div className=" mt-7">
                          <NavLink to="/ecommerce-solutions-usa">
                            {" "}
                            <div className="flex items-center">
                              <img src={mon2} alt="" />
                              <h4>E - Commerce Solutions</h4>
                            </div>
                          </NavLink>
                          <p className="yamini">
                            <NavLink className="sonji" to="/bigComm">
                                BigCommerce{" "}
                            </NavLink>{" "}
                            <span> |</span>{" "}
                            <NavLink className="sonji" to="/shopify">
                              Shopify
                            </NavLink>{" "}
                            <span> |</span>{" "}
                            <NavLink className="sonji" to="/magento">
                               Magento{" "}
                            </NavLink>{" "}
                            <span className="relative span-wo"> |</span>
                            <NavLink className="sonji span-wo1" to="/wooCommerce">
                              WooCommerce
                            </NavLink>{" "}
                            {/* <span> |</span>{" "} */}
                            {/* <NavLink className="sonji" to="#!">
                              {" "}
                              Wordpress{" "}
                            </NavLink>
                            <span> |</span>{" "}
                            <NavLink className="sonji" to="#!">
                              {" "}
                              Shift4Shop{" "}
                            </NavLink> */}
                          </p>
                        </div>
                        <div className=" mt-7">
                        <NavLink to="/graphic">
                          <div className="flex items-center">
                            <img src={mon3} alt="" />
                            <h4>Graphic Design</h4>
                          </div>
                          </NavLink>
                          {/* <p className="yamini">
                            <NavLink className="sonji" to="#!">
                              Adobe illustrator
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              Adobe Photoshop
                            </NavLink>
                            <span>|</span> <br />
                            <NavLink className="sonji" to="#!">
                              {" "}
                              CorelDRAW
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              After Effect
                            </NavLink>
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              Premium Pro
                            </NavLink>
                          </p> */}
                        </div>
                      </div>
                      <div className="tag1 ml-10">
                        <div className="">
                          <NavLink to="/web-development-usa">
                            <div className="flex items-center">
                              <img src={mon4} alt="" />
                              <h4>Web development</h4>
                            </div>
                          </NavLink>
                          <p className="yamini">
                            <NavLink className="sonji" to="/php">
                              PHP
                            </NavLink>{" "}
                            {/* <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              React.js
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              HTML5
                            </NavLink>
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              Wordpress
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              Vue.js
                            </NavLink>
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              Node.js
                            </NavLink> */}
                          </p>
                        </div>
                        <div className="w-full mt-7">
                          <NavLink to="/ui-ux-designer-usa">
                            {" "}
                            <div className="flex items-center">
                              <img src={uiux} alt="" />
                              <h4>UI/UX Design</h4>
                            </div>
                          </NavLink>
                          {/* <p className="yamini">
                            <NavLink className="sonji" to="#!">
                              Figma
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              Adobe XD
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              Sketch
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              Affinity
                            </NavLink>
                          </p> */}
                        </div>
                        <div className="w-full mt-7">
                          <NavLink to="/digital-marketing-agency-usa">
                            <div className="flex items-center">
                              <img src={marketing} alt="" />
                              <h4>Digital Marketing</h4>
                            </div>
                          </NavLink>
                          {/* <p className="yamini uppercase">
                            <NavLink className="sonji" to="#!">
                              SEO
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              SMO
                            </NavLink>{" "}
                            <span>|</span>{" "}
                            <NavLink className="sonji" to="#!">
                              PPC
                            </NavLink>
                          </p> */}
                        </div>
                        <div className="w-full mt-7">
                          <NavLink to="/staff-augmentation">
                            <div className="flex items-center">
                              <img src={staffji} alt="staffji" />
                              <h4>Staff Augmentation</h4>
                            </div>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="teal flex items-center justify-between">
                    <div className="tael-head">
                      <h3>GET FREE CONSULTATION</h3>
                      <p className="want">
                        Want to validate your mobile app idea? Tell us a little
                        bit <br /> about your requirements
                      </p>
                    </div>
                    <div className="teal-contact">
                      <NavLink className="conj-hire" to="/contact">
                        <button className="conj">Contact Us</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>

            <NavLink to="/solution"><li className="mar">
                <div className="flex items-center cursor-pointer">
                  <p className="sar" to="">
                    Solutions
                  </p>
                </div>
              </li></NavLink>


              <li className="mar">
                <div className="flex items-center cursor-pointer">
                  <NavLink className="sar" to="/portfolio">
                    Our Portfolio
                  </NavLink>
                </div>
              </li>

            <NavLink to="/hire"><li className="mar" style={{ position: "relative" }}>
                <div className="flex items-center cursor-pointer nb-0 navLinks">
                  <p className="sar" to="">
                    Hire
                  </p>
                </div>
                <div className="hire-nav hidden megaMenu">
                  <div className="hire-nav__containers ">
                    <div className="hire-nav__container">
                      <div className="hire-nav__container__header">
                        <img src={ent3} alt="" />
                        <h3>Web Development</h3>
                      </div>
                      <ul>
                        <li>
                          <NavLink to="/phpHire">PHP Developer</NavLink>
                        </li>
                        <li>
                          <NavLink to="#!">Laravel Web Developer</NavLink>
                        </li>
                        <li>
                          <NavLink to="/nodeHire">Node Js Developer</NavLink>
                        </li>
                        <li>
                          <NavLink to="#!">React Js Developer</NavLink>
                        </li>
                        <li>
                          <NavLink to="#!">Wordpress Developer</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="hire-nav__container">
                      <div className="hire-nav__container__header">
                        <img style={{ width: "0.7rem" }} src={ent4} alt="" />
                        <h3>Mobile App Developer</h3>
                      </div>
                      <ul>
                        <li>
                          <NavLink to="/androidHire">Android Developer</NavLink>
                        </li>
                        <li>
                          <NavLink to="/iosHire">IOS Developer</NavLink>
                        </li>
                        <li>
                          <NavLink to="/fluterHire">Flutter Developer</NavLink>
                        </li>
                        <li>
                          <NavLink to="/nativeHire">React Native Developer</NavLink>
                        </li>
                        {/* <li>
                          <NavLink to="#!">Kotlin Developer</NavLink>
                        </li>
                        <li>
                          <NavLink to="#!">Swift Developer</NavLink>
                        </li> */}
                      </ul>
                    </div>
                    <div className="hire-nav__container">
                      <div className="hire-nav__container__header">
                        <img src={ent5} alt="" />
                        <h3>Hire a Designer</h3>
                      </div>
                      <ul className=" relative left-3">
                        <li>
                          <NavLink to="#!">Website Designer</NavLink>
                        </li>
                        <li>
                          <NavLink to="#!">
                            UI/UX Designer (3 Year +) EXP.{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#!">
                            Graphic Designer (3Year +) EXP.
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="teal flex items-center justify-between">
                    <div className="tael-head">
                      <h3>GET FREE CONSULTATION</h3>
                      <p className="want">
                        Want to validate your mobile app idea? Tell us a little
                        bit <br /> about your requirements
                      </p>
                    </div>
                    <div className="teal-contact">
                      <NavLink className="conj-hire" to="/contact">
                        <button className="conj">Contact Us</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li></NavLink>
              <li className="mar">
                <div className="flex items-center cursor-pointer nb-0 navLinks">
                  <p className="sar" to="">
                    Resources
                  </p>
                  {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="currentColor"
                      className="ml-1 bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg> */}
                </div>
                <div className="ser-nav-resource hidden megaMenu">
                  <div className="resource flex items-center px-5 py-5">
                    <div className="resources1 flex flex-col items-center mr-4">
                      <img src="/static/images/d3.png" alt="" />
                      <NavLink to="#!" className="resource11 mt-3">
                        Blog
                      </NavLink>
                    </div>
                    <div className="resources1 flex flex-col items-center mr-4">
                      <img src="/static/images/d4.png" alt="" />
                      <NavLink to="#!" className="resource11 mt-3">
                        News
                      </NavLink>
                    </div>
                    <div className="resources1 flex flex-col items-center mr-4">
                      <img src="/static/images/d5.png" alt="" />
                      <NavLink to="#!" className="resource11 mt-3">
                        Case Study
                      </NavLink>
                    </div>
                    <div className="resources1 flex flex-col items-center">
                      <img src="/static/images/d6.png" alt="" />
                      <NavLink to="#!" className="resource11 mt-3">
                        Events
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mar">
                <NavLink className="bts-naba" to="/contact">
                  <button className="sar tart">Contact Us</button>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="mob-nav">
            <div onClick={toggleMenu} className="mob-nav1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>

            <div className="mob-nav2">
              <ul>
                <li>
                  <NavLink to="/about">about us</NavLink>
                </li>
                <li className="mar">
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      if (
                        !document
                          .querySelector(".ser-nav-mob")
                          .classList.contains("hidden")
                      ) {
                        document
                          .querySelector(".ser-nav-mob")
                          .classList.toggle("hidden");
                      }
                    }}
                  >
                    <div className="flex justify-center items-center">
                      <p onClick={toggleService1} className="sar">
                        services
                      </p>
                    </div>
                    <div className="ser-nav-mob hidden">
                      <div className="ser-nav1 flex flex-col">
                        <NavLink onClick={toggleService1} to="/service">
                          Ecommerce Solutions
                        </NavLink>
                        <NavLink onClick={toggleService1} to="/website">
                          Website Design & Development
                        </NavLink>
                        <NavLink onClick={toggleService1} to="#">
                          Web Application Development
                        </NavLink>
                        <NavLink onClick={toggleService1} to="#">
                          UI/UX Design
                        </NavLink>
                        <NavLink onClick={toggleService1} to="/mobileApp">
                          Mobile App Development
                        </NavLink>
                        <div className="pb-3">
                          <div
                            onClick={() => {
                              document
                                .getElementById("digi-nav1")
                                .classList.toggle("hidden");
                            }}
                            className="flex justify-center items-center cursor-pointer"
                          >
                            <p>Digital Marketing</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="opg ml-2 bi bi-caret-down-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                          </div>
                          <div id="digi-nav1" className="hidden py-2">
                            <NavLink onClick={toggleService1} to="#">
                              Lorem, ipsum.
                            </NavLink>
                          </div>
                        </div>
                        <NavLink onClick={toggleService1} to="#">
                          Graphic Design
                        </NavLink>
                      </div>
                    </div>
                  </OutsideClickHandler>
                </li>
                <li className="mar">
                  <NavLink className="sar" to="/portfolio">
                    Our portfolio
                  </NavLink>
                </li>
                <li className="mar">
                  <NavLink className="sar" to="">
                    Blog
                  </NavLink>
                </li>
                <li className="mar">
                  <NavLink to="/staff" className="sar">
                    CAREER
                  </NavLink>
                </li>
                <li className="mar">
                  <NavLink to="/contact">
                    <button className="sar">Contact Us</button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
