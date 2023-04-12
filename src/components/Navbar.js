import React from "react";
import location from "../images/location.png";
import mail from "../images/mail.png";
import phone from "../images/phone.png";
import timer from "../images/timer.png";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import india from "../images/india.png";
import OutsideClickHandler from "react-outside-click-handler";
import mon1 from "../images/mon1.png";
import mon4 from "../images/mon4.png";
import mon2 from "../images/mon2.png";
import mon3 from "../images/mon3.png";
const Navbar = () => {
  const [cont, setCont] = useState(1);

  const toggleMenu = () => {
    document.querySelector(".mob-nav2").classList.toggle("mob-nav2-active");
  };
  const toggleMenu1 = () => {
    document.querySelector(".mob-nav2").classList.add("mob-nav2-active");
  };
  const toggleService = () => {
    document.querySelector(".ser-nav").classList.toggle("hidden");
  };

  const toggleService1 = () => {
    console.log("yes");
    document.querySelector(".ser-nav-mob").classList.toggle("hidden");
  };

  const toggleService2 = () =>{
    document.querySelector(".ser-nav10").classList.toggle("hidden");
  }
  const shFunc = (index) => {
    setCont(index);
  };

  const toggleCont = () => {
    document.querySelector(".sh").classList.toggle("hidden");
  };

  return (
    <>
      <div id="header1" className="overflow-auto w-full">
        <header className="header">
          <div className="first-header">
            <div className="noida">
              <img src={location} alt="location" />
              <p>
                g-9,first Floor, Sector 63, Noida <span>|</span>{" "}
              </p>
            </div>
            <a href="mailto:shubham@kusheldigi.com">
              <div className="email">
                <img src={mail} alt="mail" />
                <p>shubham@kusheldigi.com</p>
              </div>
            </a>
            {/* <div className="phone">
              <img src={phone} alt="phone" />
              <p>9045301702</p>
            </div> */}
          </div>
          <div className="second-header flex items-center">
            {/* <div className="second-header1">
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
            </div> */}

            <div className="flex items-center">
              <img src={india} alt="alt" />
              <p className="ml-2">+ 91 9045301702</p>
            </div>

            <div className="flex items-center ml-10">
              <img src="/static/images/c1.png" alt="alt" />
              <p className="ml-2">+ 1 (917)854 0688</p>
            </div>
          </div>
        </header>
      </div>

      <div className="navigation">
        <nav className="navbar">
          <NavLink to="/">
            {" "}
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </NavLink>

          <div className="navbar-text desk-nav">
            <ul>
              {/* <li>
                <NavLink to="">about us</NavLink>
              </li> */}
              <li className="mar">
                <OutsideClickHandler
                  onOutsideClick={() => {
                    if (
                      !document
                        .querySelector(".ser-nav10")
                        .classList.contains("hidden")
                    ) {
                      document
                        .querySelector(".ser-nav10")
                        .classList.toggle("hidden");
                    }
                  }}
                >
                  <div
                    onClick={toggleService2}
                    className="flex items-center cursor-pointer"
                  >
                    <p className="sar" to="">
                    about us
                    </p>
                    <svg
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
                    </svg>
                  </div>
                  <div className="ser-nav10 hidden">
                      <div className="compan flex items-start justify-between">
                          <div className="first-compan mt-3 flex items-start justify-evenly">
                             <div className="second-compan mr-10">
                                <h5 className="cpm" >The Company</h5>
                                <p className="cpmpa" >Who We Are</p>
                                <p className="cpmpa" >Our Misson & Vision</p>
                                <p className="cpmpa" >Our Work Process</p>
                                <p className="cpmpa" >Our Team</p>
                                <p className="cpmpa" >Social Cause - NGO</p>
                                <p className="cpmpa" >Blog</p>
                                <p className="cpmpa" >Contact Us</p>
                             </div>
                             <div className="second-compan mr-5">
                             <h5 className="cp" >The Company</h5>
                            <NavLink onClick={toggleService2} to="/partner"><p className="cpmpa" >Partner With us</p></NavLink>
                                <p className="cpmpa" >Our Work</p>
                                <p className="cpmpa" >Our Clients</p>
                                <p className="cpmpa" >Testimonials</p>
                                <p className="cpmpa" >Career with us</p>
                             </div>
                          </div>
                          <div className="second-compan1">
                                 <div className="comapn-sect">
                                    <h3>GET FREE CONSULTATION</h3>
                                    <p className="wanna">Want to validate your mobile app idea? Tell us a little bit about your requirements</p>
                                 </div>
                          </div>
                      </div>
                  </div>
                </OutsideClickHandler>
              </li>
              <li className="mar">
                <OutsideClickHandler
                  onOutsideClick={() => {
                    if (
                      !document
                        .querySelector(".ser-nav")
                        .classList.contains("hidden")
                    ) {
                      document
                        .querySelector(".ser-nav")
                        .classList.toggle("hidden");
                    }
                  }}
                >
                  <div
                    onClick={toggleService}
                    className="flex items-center cursor-pointer"
                  >
                    <p className="sar" to="">
                      services
                    </p>
                    <svg
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
                    </svg>
                  </div>
                  <div className="ser-nav hidden">
                  <div className="ser-nav5">
                    <div className="ser-tag">
                      <div className="tag1">
                        <div className="">
                         <NavLink onClick={toggleService} to="/mobileApp"> <div className="flex items-center">
                            <img src={mon1} alt="" />
                            <h4>Mobile App Development</h4>
                          </div></NavLink>
                          <p className="yamini">
                            i Phone <span>|</span> Android <span>|</span>{" "}
                            Flutter <span>|</span> React Native <span>|</span>{" "}
                            Kotlin
                            <span>|</span> Swift
                          </p>
                        </div>
                        <div className=" mt-7">
                         <NavLink onClick={toggleService} to="/service"> <div className="flex items-center">
                            <img src={mon2} alt="" />
                            <h4>E - Commerce Solutions</h4>
                          </div></NavLink>
                          <p className="yamini">
                            Shopify <span> |</span> Woo Commerce <span> |</span>{" "}
                            Big Commerce <span> |</span>
                            Magento <span> |</span> Wordpress
                          </p>
                        </div>
                        <div className=" mt-7">
                          <div className="flex items-center">
                            <img src={mon3} alt="" />
                            <h4>Graphic Design</h4>
                          </div>
                          <p className="yamini">
                            Adobe Illustrator <span>|</span> Adobe Photoshop{" "}
                            <span>|</span> <br />
                            CorelDRAW <span>|</span> After Effect <span>|</span>{" "}
                            Premium Pro
                          </p>
                        </div>
                      </div>
                      <div className="tag1 ml-10">
                        <div className="">
                         <NavLink onClick={toggleService} to="/website"><div className="flex items-center">
                            <img src={mon4} alt="" />
                            <h4>Web development</h4>
                          </div></NavLink>
                          <p className="yamini">
                            php <span>|</span> React js <span>|</span> HTML5{" "}
                            <span>|</span> Wordpress <span>|</span> Vue Js
                            <span>|</span> Node js
                          </p>
                        </div>
                        <div className="w-full mt-7">
                          <div className="flex items-center">
                            <img src={mon4} alt="" />
                            <h4>UI/UX Design</h4>
                          </div>
                          <p className="yamini">
                            Figma <span>|</span> Adobe XD <span>|</span> Sketch{" "}
                            <span>|</span> Affinity
                          </p>
                        </div>
                        <div className="w-full mt-7">
                          <div className="flex items-center">
                            <img src={mon4} alt="" />
                            <h4>Digital Marketing</h4>
                          </div>
                          <p className="yamini uppercase">
                            SEO <span>|</span> SMO <span>|</span> PPC
                          </p>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  <div className="teal flex items-center justify-between">
                        <div className="tael-head">
                            <h3>GET FREE CONSULTATION</h3>
                            <p className="want">Want to validate your mobile app idea? Tell us a little bit <br /> about your requirements</p>
                        </div>
                        <div className="teal-contact">
                            <button className="conj">Contact Us</button>
                        </div>
                    </div>
                  </div>
                </OutsideClickHandler>
              </li>
              <li className="mar">
                <NavLink className="sar" to="">
                  Solutions
                </NavLink>
              </li>
              <li className="mar">
                <NavLink className="sar" to="">
                  Our portfolio
                </NavLink>
              </li>
              <li className="mar">
                <NavLink to="/staff" className="sar">
                  Hire
                </NavLink>
              </li>
              <li className="mar">
                <NavLink to="/staff" className="sar">
                  Resource
                </NavLink>
              </li>
              <li className="mar">
                <NavLink to="/contact">
                  <button className="sar">Contact Us</button>
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
                  <NavLink to="">about us</NavLink>
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
                  <NavLink className="sar" to="">
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
