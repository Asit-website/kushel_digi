import React from "react";
import androids from "../images/androids.png";
import arrow4 from "../images/arrow4.png";
import androidSis from "../images/android-sis.png";
import arrowing from "../images/arrowing.png";
import bulb1 from "../images/bulb1.png";
import bulb2 from "../images/bulb2.png";
import bulb3 from "../images/bulb3.png";
import bulb4 from "../images/bulb4.png";
import ecosys from "../images/ecosys.png";
import prot1 from '../images/prot1.png';
import prot2 from '../images/prot2.png';
import prot3 from '../images/prot3.png';
import prot4 from '../images/prot4.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ContactForm1 from "./common/ContactForm1";
import { NavLink } from "react-router-dom";
const Android = () => {
  return (
    <>
      <div className="ser-main">
        <div className="android-back">
          <div className="android-back1">
            <h2>
              Android App <br />
              Development Company
            </h2>
            <p className="android-son">
              Develop next-gen android apps that are quality tested for perfection
              with future-forward iOS application development services.
            </p>
            <button>
              Consult our Android Team{" "}
              <img width={13} className="ml-1 inline" src={arrow4} alt="" />
            </button>
          </div>
          <div className="android-back2">
            <img src={androids} alt="androids" />
          </div>
        </div>
        <div className="android2-app">
          <div className="android-fun">
            <div className="android-fun1">
              <h2>Our Android App</h2>
              <h2>Development</h2>
              <h2>Services</h2>
              <img className="ftp" src={androidSis} alt="" />
              <NavLink to="/contact">
              <h5>
                Discuss your goals with us{" "}
                <img width={14} className="ml-1 inline" src={arrowing} alt="" />{" "}
              </h5></NavLink>
            </div>
            <div className="android-fun2">
              <p>
                Kushel digi, an award-winning android app development company,
                possesses hands-on expertise in delivering tailor-made android
                app development solutions to assist you in boosting the growth
                of your business.
              </p>
              <p className="mt-4">
                Our android app development services are diligently designed to
                deliver robust, all-inclusive mobile applications. We offer the
                following services:
              </p>
            </div>
          </div>
          <div className="android-cards">
            <div className="android-card">
              <div className="android-box android-box1">
                <div className="android0-img flex items-center">
                  <img src={bulb1} alt="" />
                  <h4 className="ml-3">iOS App Development Consultation</h4>
                </div>
                <p>
                iOS applications, depending on the characteristics, are more suited for a particular type of business. Our team of iOS app developers help businesses decide whether iOS is a good fit for them and which tech stack best suits their needs.
                </p>
              </div>
              <div className="android-box android-box2">
                <div className="android0-img flex items-center">
                  <img src={bulb2} alt="" />
                  <h4 className="ml-3">
                  iOS UI/UX Design
                  </h4>
                </div>
                <p>
                iOS applications are known for their memorable and immersive designs. We align your brand with what your users expect from the Apple ecosystem. Our team of iOS app designers specialize in creating experiences that last.
                </p>
              </div>
            </div>
            <div className="android-card">
              <div className="android-box android-box3">
                <div className="android0-img flex items-center">
                  <img src={bulb3} alt="" />
                  <h4 className="ml-3">Custom iOS Application Development</h4>
                </div>
                <p>
                Our iPhone application developers carry in expertise in creating scalable, future-forward iOS solutions. We specialize in delivering custom iOS software to both first time entrepreneurs and enterprises across the sectors, across the globe.
                </p>
              </div>
              <div className="android-box android-box4">
                <div className="android0-img flex items-center">
                  <img src={bulb4} alt="" />
                  <h4 className="ml-3">iOS Software Testing</h4>
                </div>
                <p>
                Our iPhone mobile development process is structured to keep security and performance at the center. We make sure your application is glitch free and hack proof by applying a mix of manual and AI-driven automated mode of testing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="android-offer">
          <div className="android-offer1">
            <h3>
              We Offer Custom Android App <br /> Development across all
              platforms
            </h3>
            <p>
              We do not limit our services to Smartphones. Our Android mobile
              app development portfolio is a
              testament to our expertise across various Android devices and
              platforms. The full-cycle custom Android app development process
              that we follow has helped us to delve deep into the Android world.
              And we have explored all possible solutions - Smartphones, Android
              tablets, Android Wear, and Android TV. <br /> We use time-tested
              android app development software as our primary tech stack to
              deliver easy-to-use, intuitive apps. Our highly skilled Android
              app developers know the secret formula to develop apps that
              witness more than a million downloads on the Google Play Store.
            </p>
          </div>
          <div className="android-offer2">
            <img src={ecosys} alt="ecosys" />
          </div>
        </div>

        <div className="android-usa">
          <div className="android-usa1">
            <h3>
              Use Cases That Make  
            </h3>
            <h3>iOS Development The First Choice</h3>
            <h3>of SMEs and
              Enterprises</h3>
            <p>
              Our custom android app development services are engineered to
              provide you a magnitude of Android benefits.
            </p>
            <NavLink to="/contact">
            <h5>
              Explore Problem Solving with Android{" "}
              <img width={14} className="ml-1 inline" src={arrowing} alt="" />
            </h5></NavLink>
          </div>
          <div className="android-usa2"></div>
          <div className="android-usa3">
            <div className="android-usas">
              <div className="android-usas1">
                <div className="android-usast1">
                  <h3>1</h3>
                  <p>Multi-platform exposure</p>
                </div>

                <div className="android-usast1 android-usast2">
                  <h3>2</h3>
                  <p>Greater sources of revenue</p>
                </div>
              </div>
              <div className="android-usas1">
                <div className="android-usast1">
                  <h3>1</h3>
                  <p>Multi-platform exposure</p>
                </div>

                <div className="android-usast1 android-usast2">
                  <h3>2</h3>
                  <p>Greater sources of revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="android-pro">
        <div className="android-process">
           <div className="android-process1">
              <h2>Our Android App Development Process</h2>
              <p>We are the top Android app development company in USA famous for elevating your development strategy, strengthening viable solutions, designing seamless experiences, and building apps that add unmatched value to the users’ lives with our custom android services. We are a trusted Android application development company that designs and develops custom Android apps for all domains and scale of businesses.</p>
           </div>
           <div className="android-process2 ml-52">
             <div className="prot-process mt-5">
                <div className="prot">
                   <div className="prot-img">
                   <img src={prot1} alt="" />
                   </div>
                   <p>Multi-platform Development</p>
                </div>
                <div className="prot mt-14">
                   <div className="prot-img">
                   <img src={prot2} alt="" />
                   </div>
                   <p>Quality Assurance</p>
                </div>
                <div className="prot mt-14">
                   <div className="prot-img">
                   <img src={prot3} alt="" />
                   </div>
                   <p>App Store Submission</p>
                </div>
                <div className="prot mt-14">
                  <div className="prot-img">
                   <img src={prot4} alt="" />
                   </div>
                   <p>Post-launch Maintenance</p>
                </div>
                </div>
           </div>
        </div>
          <div className="android-perform mt-20">
              <div className="andoid-perform-flex">
                  <div className="android-pflex">
                      <h1>250+</h1>
                      <p>Android developers <br /> in-house</p>
                  </div>
                  <div className="android-pflex">
                  <h1>500+</h1>
                      <p>Android projects <br /> in-house</p>
                    </div>
                    <div className="android-pflex">
                    <h1>30+</h1>
                      <p>industries brought <br /> on Android</p>
                    </div>
              </div>
              <NavLink to="/contact">
              <h5 className="text-center">
               Lets Work Together
              <img width={14} className="ml-2 inline" src={arrowing} alt="" />
            </h5></NavLink>
          </div>
        </div>
         <ContactForm1/>
        <div className="home9 mb-12 home278 home480 home481">
          <div className="home91 flex px-24">
            <div className="home911 text-center">
              <h2 className="font-bold text-gray-700">JUST THE FAQs</h2>
            </div>
            <div className="home912">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Do I own the ownership and the code of my application?
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
                    Do you have flexible hiring models?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    How do you allocate the resources for my app development in android?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    What are some of the top android apps developed by you?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Which tools and technologies do you use?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
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
      </div>
    </>
  );
};

export default Android;
