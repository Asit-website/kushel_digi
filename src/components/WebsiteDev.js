import React, { useState } from "react";
import website from "../images/website.png";
import reactjs1 from "../images/reactjs.png";
import htmls from "../images/htmls.png";
import phpos from "../images/phpos.png";
import nodejs1 from "../images/nodejs1.png";
import words from "../images/words.png";
import vuejs1 from "../images/vuejs1.png";
import delivery from "../images/delivery.png";
import mobileJi from "../images/mobilieji.png";
import developments from "../images/developments.png";
import docu from "../images/docu.png";
import setting from "../images/setting.png";
import sign from "../images/sign.png";
import admi from "../images/admi.png";
import admi1 from "../images/admi1.png";
import admi2 from "../images/admi2.png";
import track from "../images/track.png";
import vertical from "../images/vertical.png";
import arrow1 from "../images/arrow1.png";
import PortCard from "./Cards/PortCard";
import a9 from "../images/a9.png";
import pads from "../images/pads.png";
import bds from "../images/bds.png";
import jones from "../images/jones.png";
import industry from "../images/industry.png";
import industry1 from "../images/industry1.png";
import industry2 from "../images/industry2.png";
import industry3 from "../images/industry3.png";
import industry4 from "../images/industry4.png";
import industry5 from "../images/industry5.png";
import industry6 from "../images/industry6.png";
import industry7 from "../images/industry7.png";
import Certified from "./common/Certified";
import healthcare from '../images/healthcare.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import arrow3 from '../images/arrow3.png'
import arrow4 from '../images/arrow4.png';
const WebsiteDev = () => {
  const [start, setStart] = useState(false);
  const handleChange = () => {
    setStart(!start);
  };
  return (
    <>
      <div className="ser-main">
        <div className="ser1 serji serji1">
          <div className="ser11 px-24 pt-12 pb-4 flex items-center justify-between">
            <div className="ser111">
              <h1 className="">Services </h1>
              <h1 className="blue">Website Design & Development</h1>
              <p className="ac">Accelerate your business with an app</p>
              <p>Faster | Better | Easier</p>
            </div>
            <div className="ser112">
              <img src={website} alt="" />
            </div>
          </div>
        </div>
        <div className="ser2 ser-vertical">
          <div className="ser21 ser23">
            <div className="home412 flex justify-center items-center">
              <div className="home4121">
                <img className=" block m-auto" src={reactjs1} alt="" />
                <p>REACT JS</p>
              </div>
              <div className="home4121">
                <img className=" block m-auto" src={htmls} alt="" />
                <p>HTML 5</p>
              </div>
              <div className="w-full sis  home4121">
                <img className="block m-auto phpos" src={phpos} alt="" />
                {/* <p>PHP</p> */}
              </div>
              <div className="w-full sis1  home4121">
                <img className=" block m-auto nodejs1" src={nodejs1} alt="" />
                {/* <p>Node</p> */}
              </div>
              <div className="home4121">
                <img className="block m-auto" src={words} alt="" />
                <p>Wordpress</p>
              </div>
              <div className="home4121">
                <img className="block m-auto" src={vuejs1} alt="" />
                <p>PYTHON</p>
              </div>
            </div>
          </div>
        </div>
        <div className="developments">
          <img className="dev1" src={developments} alt="developments" />
          <div className="development">
            <div className="development1">
              <h3>
                Web Development Solutions <br /> To Grow The Business
              </h3>
              <p className="knowrs">
                Known for our world-class web development services, Kushel digi
                is the best website development company for businesses looking
                to grow their online presence and reach new audiences.
              </p>
              <p className="knowers1">
                We provide top-tier custom website development and application
                development services, allowing you to create the best possible
                online experience for your customers. Our team of skilled
                developers is thoroughly experienced in all aspects of website
                design and development, and we work closely with our clients to
                ensure that each project meets their unique business needs.
              </p>
            </div>
            <div className="development2">
              <img src={mobileJi} alt="mobileji" />
            </div>
          </div>
        </div>

        <div className="how-we">
          <h3>How We Works</h3>
          <h1>3 Easy Steps</h1>
          <div className="step-card">
            <div className="step-box">
              <div className="step-img">
                <img src={setting} alt="" />
              </div>
              <div className="step-head">
                <h4>Choose the Services</h4>
                <p>
                  Reaserch, Decide which services to <br /> purchase based on
                  your needs.
                </p>
              </div>
            </div>
            <div className="step-box">
              <div className="step-img">
                <img src={docu} alt="" />
              </div>
              <div className="step-head">
                <h4>Give us your Requirement</h4>
                <p>
                  Give us requirement during our <br /> strategic kickoff
                  meeting.
                </p>
              </div>
            </div>
            <div className="step-box">
              <div className="step-img">
                <img src={sign} alt="" />
              </div>
              <div className="step-head">
                <h4>Relax and Rest</h4>
                <p>
                  Do what you love, and we’ll obtain <br /> the best result for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="top-chose">
          <h3>
            Why Kushel digi Is The Top Choice For <br /> Web Development
            Services?
          </h3>
          <p className="reason">
            These are some of the reasons why we are the best website
            development company for your project:
          </p>
          <div className="card-son">
            <div className="business-card">
              <div className="business-box business-box3 relative text-center cursor-pointer">
                <div className="business-card-img bus-card-img1">
                  <img src={track} alt="track" />
                </div>
                <h5>Proven Track Record</h5>
                <p>
                  Our native app development services We have a proven track
                  record of success, having developed hundreds of websites for
                  businesses of all sizes. wearables.
                </p>
              </div>
              <div className="business-box business-box3 relative text-center cursor-pointer">
                <div className="business-card-img bus-card-img1">
                  <img src={admi} alt="" />
                </div>
                <h5>Experienced Web Developers</h5>
                <p>
                  Our team of experienced developers and designers are experts
                  in their field and can create custom solutions to meet your
                  specific needs and requirements.
                </p>
              </div>
            </div>
            <div className="business-card">
              <div className="business-box business-box3 relative text-center cursor-pointer">
                <div className="business-card-img bus-card-img1">
                  <img src={admi1} alt="" />
                </div>
                <h5>Latest Technology</h5>
                <p>
                  We use the latest technology and tools to create websites that
                  are not only visually appealing but also functional and easy
                  to use.
                </p>
              </div>
              <div className="business-box business-box3 relative text-center cursor-pointer">
                <div className="business-card-img bus-card-img1">
                  <img src={admi2} alt="" />
                </div>
                <h5>Affordable Solutions</h5>
                <p>
                  We use the latest technology and tools to create websites that
                  are not only visually appealing but also functional and easy
                  to use.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ben-da">
          <h3>
            Benefits Of Working With Us <br />
            To Build Your Website
          </h3>
          <p>
            A quality website offers several chances to demonstrate your
            authenticity. When you choose us, you can relax knowing that we'll
            take care of your website's design and development needs as well as
            SEO services to improve website ranking.
          </p>

          <img className="ben-img" src={vertical} alt="" />
          <button>
            Request A Call <img className="inline" src={arrow1} alt="arrow1" />
          </button>
        </div>

        <div className="home5     poty poty1">
          <div className="home51 px-24 ">
            <div className="home511 text-center ">
              <h1 className="font-bold mb-2 mt-4">OUR PORTFOLIO</h1>
            </div>
            <div className="home512 flex flex-wrap justify-center mt-10">
              <PortCard pads={a9} />
              <PortCard pads={pads} />
              <PortCard pads={bds} />
              <PortCard pads={jones} />
            </div>
          </div>
          <div className="home52 w-full text-center"></div>
        </div>

        <div className="indu-s">
          <h3>INDUSTRIES WE SERVE</h3>
          <p>
            We have the expertise and skills to serve a wide range of industries
            and meet their requirements of web & mobile development on any
            scale. Our team has years of experience in delivering projects for
            clients/businesses across industry verticals.
          </p>
          <div className="indu-fard mt-8">
            <div className="indu-card">
              <div className="indu-box">
                <img src={healthcare} alt="" />
                <p>Healthcare & Wellness</p>
              </div>
              <div className="indu-box">
                <img src={industry1} alt="" />
                <p>Real Estate</p>
              </div>
              <div className="indu-box">
                <img src={industry2} alt="" />
                <p>IT, Software & Internet Marketing</p>
              </div>
              <div className="indu-box">
                <img src={industry3} alt="" />
                <p>Finance & Banking</p>
              </div>
            </div>
            <div className="indu-card">
              <div className="indu-box">
                <img src={industry4} alt="" />
                <p>Government & Public <br /> Sector Enterprises</p>
              </div>
              <div className="indu-box">
                <img src={industry5} alt="" />
                <p>Travel & Tour</p>
              </div>
              <div className="indu-box">
                <img src={industry6} alt="" />
                <p>Retail</p>
              </div>
              <div className="indu-box">
                <img src={industry7} alt="" />
                <p>SPORTS ( outdoor & indoor )</p>
              </div>
            </div>
          </div>
        </div>
        <Certified/>

        <div className="home9 mb-12 home278">
          <div className="home91 flex px-24">
            <div className="home911 text-center">
              <h2 className='font-bold text-gray-700'>JUST THE FAQs</h2>
            </div>
            <div className="home912">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Do you have experience in developing single-vendor website?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Exercitation in fugiat est ut ad ea cupidatat ut in
                      cupidatat occaecat ut occaecat consequat est minim minim
                      esse tempor laborum consequat esse adipisicing eu
                      reprehenderit enim.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Can I test my website before making it live?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur
                      ea in ut nostrud velit in irure cillum tempor laboris
                      sed adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    What languages do you use for website development?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur
                      ea in ut nostrud velit in irure cillum tempor laboris
                      sed adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    What type of websites do you develop?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur
                      ea in ut nostrud velit in irure cillum tempor laboris
                      sed adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    How long does a website take to build?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur
                      ea in ut nostrud velit in irure cillum tempor laboris
                      sed adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className='flex items-start justify-center discusion-form discusion-form1'>
           <div className="w-full  mrs mrs1">
            <h3>Let’s Discuss your Project</h3>
            <form action="">
                <div className=" flex items-start common-form">
                     <div className="first-form">  
                         <div className="form-field">
                            <input type="text" placeholder="Name*" />
                         </div>
                         <div className="form-field mt-5">
                            <input type="text" placeholder="Phone number*" />
                         </div>
                         <div className="form-field mt-5">
                            <input type="email" placeholder="Email Address*" />
                         </div>
                         <div>
                  <button>Submit <img className="tih" src={arrow1} alt="" /></button>
               </div>
                     </div>
                     <div className="second-form">
                        <div className="form-filed1">
                            <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                     </div>
                </div>
               
            </form>
        </div>
        <div className='w-full   loofs loofs1'>
           {/* <h3>How can we help?</h3>
           <p>Are you looking for a reliable mobile application development company? Contact our expert team — we will help your business build a successful mobile strategy and create convenient omnichannel experience for all your customers and clients.</p>
           <button>Let’s Talk <img className="tih" src={arrow1} alt="" /></button> */}
             <div className=" loofs-sect1">
                  <h2>Would You Like To Talk To Our Experts About Your Project?</h2>
                  <p> You can send us the details of your project, and a member of our team will contact you shortly.</p>
                  <button>Request A Call <img  width={12} className="inline ml-1" src={arrow4} alt="arrow3" /></button>
             </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteDev;
