import React from "react";
import reactjs from "../images/reactjs.png";
import fluterjs from "../images/fluterjs.png";
import swiftjs from "../images/swiftjs.png";
import kotlinjs from "../images/kotlinjs.png";
import java from "../images/java.png";
import python from "../images/python.png";
import app from "../images/app.png";
import appdev from "../images/appdev.png";
import webm from "../images/webm.png";
import webdev1 from "../images/webdev1.png";
import tripleMob from '../images/tripleMob.png';
import doubleMob from '../images/doubleMob.png';
import { NavLink } from "react-router-dom";
import arrow1 from '../images/arrow1.png'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import ContactForm from "./common/ContactForm";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import MobCard from "./Cards/MobCard";

const MobileApp = () => {

  return (
    <>
      <div className="ser-main">
        <div className="ser1 serji">
          <div className="ser11 px-24 pt-12 pb-4 flex items-center justify-between">
            <div className="ser111">
              <h1 className="">Services</h1>
              <h1 className="blue">Mobile App Development</h1>
              <p className="ac">Mobile app development agency focused on designing the best <br />
experience for your users</p>
              <p>Faster | Better | Easier</p>
            </div>
            <div className="ser112 fitor">
              <img src={tripleMob} alt="tripleMob" />
            </div>
          </div>
        </div>
        <div className="ser2 ser-vertical">
          <div className="ser21 ser23">
            <div className="home412 flex justify-center items-center">
              <div className="home4121">
                <img className=" block m-auto" src={reactjs} alt="" />
                <p>REACT NATIVE</p>
              </div>
              <div className="home4121">
                <img className=" block m-auto" src={fluterjs} alt="" />
                <p>FLUTTER</p>
              </div>
              <div className="home4121">
                <img className=" block m-auto" src={swiftjs} alt="" />
                <p>SWIFT</p>
              </div>
              <div className="home4121">
                <img className=" block m-auto" src={kotlinjs} alt="" />
                <p>KOTLIN</p>
              </div>
              <div className="home4121">
                <img className="block m-auto" src={java} alt="" />
                <p>JAVA</p>
              </div>
              <div className="home4121">
                <img className="block m-auto" src={python} alt="" />
                <p>PYTHON</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-app">
          <img className="app" src={app} alt="app" />
          {/* <h2>Why choose us?</h2>
          <p className="part mt-1">
            We have a wide variety of certified partners and a customer-centric
          </p> */}
          {/* <p className="part">team to manage your projects end-to-end.</p> */}
          <div className="deliver">

            <div className="first-delivery">
              <h3>Top Custom App Development And <br /> Design Company</h3>
              <div className="deivery-date">
                 <p className="ensure ensure1">
                 Our dedicated App development professionals are known for cutting-edge technologies, most intuitive, native, and interactive apps. We believe in collaborative work to bring out the best innovative and advanced mobile apps. We deliver apps that are supported on modern platforms like android wearable, TV, or the web.
                 </p>
              </div>
              <NavLink to="/contact"><button className="com">
                Contact Us <img className="tih" src={arrow1} alt="" />
              </button></NavLink>
            </div>
            <div className="second-delivery">
              <div className="delivery-img">
                <img src={doubleMob} alt="doubleMob" />
              </div>
            </div>
          </div>
        </div>
        <div className="help-business">
          <h3>
            We Help Businesses Around the Globe to Build, Manage, and Modernize
          </h3>
          <h3>
            Custom Applications using the Latest Advances in Technology with our
          </h3>
          <h3>Industry-leading App Development Services</h3>
          <h3 className="host"> We Help Businesses Around the Globe to Build, Manage, and Modernize Custom Applications using the Latest Advances in Technology with our Industry-leading App Development Services</h3>
          <div className="business-card">
            <div className="business-box">
              <div className="business-set flex items-center">
                <img className="appdev" src={appdev} alt="" />
                <div>
                  <p>Native App</p>
                  <p>Development Services</p>
                </div>
              </div>
              <p className="develop">
                Develop native web and mobile applications using custom
                frameworks. Our engineering teams have delivered award winning
                applications and have deep hands-on knowledge of popular open
                source technology, such as react native.
              </p>
            </div>
            <div className="business-box">
              <div className="business-set flex items-center">
                <img className="webdev" src={webdev1} alt="" />
                <div>
                  <p>Progressive Web Application</p>
                  <p>Development</p>
                </div>
              </div>
              <p className="develop">
                A native app like experience, no matter what device you are
                using. Built using an API ecosystem, PWAs deliver a standard
                user experience on a singular codebase.
              </p>
            </div>
            <div className="business-box">
              <div className="business-set flex items-center">
                <img className="webm" src={webm} alt="" />
                <div>
                  <p>Smart Web & Mobile </p>
                  <p>Application Development</p>
                </div>
              </div>
              <p className="develop">
                Cognitive, conversational, and contextual application development to provide a superior CX by integrating data-driven insights into the application ecosystem. Offer immersive experiences that include AR, VR, and Mixed Reality capabilities.
              </p>
            </div>
          </div>
        </div>

        <div className="mob-app1">
          <div className="mob-app11">
            <div className="mob-app111">
              <h1>How Our Custom Developed Apps</h1>
              <h1>Helped These Companies</h1>
            </div>
            <div className="mob-app112">
              <Splide aria-label="Our Services" options={{
                perPage: 1,
                perMove: 1
              }} >
                <SplideSlide>
                  <MobCard />
                </SplideSlide>
                <SplideSlide>
                  <MobCard />
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>

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
                      How long does it take to build a mobile app?
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
                      What are the different mobile app development services you offer?
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
                      Is Expand My Business a mobile app development company?
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
                      For what businesses do you offer mobile app development services?
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
                      How long does a App take to build?
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
              {/* <div className="home9121 font-semibold w-fit">
                See All FAQs
              </div> */}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default MobileApp;
