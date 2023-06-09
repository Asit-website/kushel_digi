import React from "react";
import kick from "../images/kick.png";
import pick from "../images/pick.png";
import pick1 from "../images/pick1.png";
import pick2 from "../images/pick2.png";
import angrag from "../images/angrag.png";
import zinda from "../images/zinda.png";
import zinda1 from "../images/zinda1.png";
import zinda2 from "../images/zinda2.png";
import stepback from "../images/stepback.png";
import stepback1 from "../images/stepback1.png";
import kick5 from "../images/kick5.png";
// import azib from '../images/azib.png';
import arrow4 from "../images/arrow4.png";
import conjun from "../images/conjun.png";
import azib2 from "../images/azib2.png";
import azib3 from "../images/azib3.png";
import azib4 from "../images/azib4.png";
import { NavLink } from "react-router-dom";
import rel1 from "../images/rel1.png";
import rel2 from "../images/rel2.png";
import rel3 from "../images/rel3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Kickiz = () => {
  return (
    <>
      <div className="ser-main">
        <div className="kick-back">
          <div className="kick-sect">
            <img src={kick} alt="kick" />
          </div>
        </div>
        <div className="kick-start">
          <div className="kick-first">
            <div className="kick-box">
              <h4>KICK-EEZ</h4>
              <p className="kick-para">
                {/* KICK- EEZ Premium, Made in America recoil pads and accessories
                to make your shooting experience more comfortable. */}
                A variety of shotgun and rifle recoil pads and shooting accessories are available from KICK-EEZ®. Its products use Sorbothane and are made in America. It was created using Shopify.
              </p>
              <div className="kick-sard flex items-center mt-10">
                <div className="kick-fard">
                  <img className="pick" src={pick} alt="" />
                  <h5>Industry</h5>
                  <p>E-commerce</p>
                </div>
                <div className="kick-fard">
                  <img className="pick1" src={pick1} alt="" />
                  <h5>Country</h5>
                  <p>USA</p>
                </div>
              </div>
              <div className="visit-kart mt-10">
                <p>Visit Website</p>
                <a target="_blank" href="https://kickeezproducts.com/"></a>{" "}
                <p className="kinza">www.kickeezproducts.com</p>
              </div>
            </div>
          </div>
          <div className="kick-second relative">
            <img className=" absolute about161" src={angrag} alt="" />
            <img className=" relative z-10 about162" src={pick2} alt="" />
          </div>
        </div>

        <div className="service-kick">
          <h2>Services Provided</h2>
          <div className="service-kick-flex">
            <div className="service-kick-sect">
              <img src={zinda} alt="" />
              <p>UX/UI Website Design</p>
            </div>
            <div className="service-kick-sect">
              <img src={zinda1} alt="" />
              <p>Website Development</p>
            </div>
            <div className="service-kick-sect">
              <img src={zinda2} alt="" />
              <p>QA & Website Testing</p>
            </div>
          </div>
        </div>

        <div className="back-story">
          <div className="step1-back">
            <div className="step-backs1">
              <h3 className="nila">01</h3>
              <h3>BACKSTORY</h3>
            </div>
            <div className="step-backs2">
              <p>
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since. */}
                Three years ago, RJ bought the business and used Shopify to create its first online store. He had a clear logo and a strong brand. The website failed to make an emotional connection with the customer or explain the problem that he solved. The website makes use of Shiphation.

              </p>
              {/* <p className="mt-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p> */}
            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <img className="stepback" src={stepback1} alt="stepback" />
            <img className="stepback1" src={stepback} alt="stepback1" />
          </div>
        </div>

        <div className="challenge-story">
          <div className="challenge-story1">
            <h3 className="nila">02</h3>
            <h3>
              Challenges <br /> & Solutions
            </h3>
          </div>
          <div className="challenge-story2 flex">
            <div className="challenge-box challenge-box2 ">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  {/* <div className="nilust"></div> */}
                  <p>
                  Shopify is becoming less and less tolerant of firearms. Their website was poorly designed and only converted at a rate of 1.25%. The website as it stands does not engage the audience emotionally or convey the problem that KICK-EEZ® solves.

                  </p>
                </div>
                {/* <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="challenge-box ml-3 challenge-box2">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  {/* <div className="nilust"></div> */}
                  <p>
                  -Design a new website in Figma and develop the website in BigCommerce
-Data Migration of KICK-EEZ® from Shopify to BigCommerce
-Incorporate ShipStation, as RJ was already using it.
-Build the material that the search engines are currently crawling.
-The use of Hoth to provide SEO services We resell The Hoth's services as a white-label SEO firm.
-To handle trade in both wholesale and retail We must ensure that all price categories and levels are included in the data conversion.

                  </p>
                </div>
                {/* <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="goals-statgy">
            <h2>Goasl and Strategies</h2>
            <ul >
              <li>Make it simpler for customers to contact the company.</li>
              <li>Reduce customer misunderstandings regarding returns and exchanges, particularly with the choice of replacement products.</li>
              <li>Boost the efficacy and efficiency of client service.</li>
            </ul>
        </div>

        <div className="challenge-ziz">
          <div className="challenge-ziz-sect">
            <img src={kick5} alt="" />
          </div>
        </div>

        <div className="azib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">04</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since.
                </p>
                <p className="mt-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img className="conjun" src={conjun} alt="" />
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <img src={azib2} alt="" />
              <img src={azib3} alt="" />
              <img src={azib4} alt="" />
            </div>
          </div>
        </div>

        <div className="client-apperication">
          <h2>Client Appreciation</h2>
          <p>
            “Thank you Affle team for all your hardwork, patience and continuous
            support. The app is getting positive reviews and we hope to continue
            to improve and evolve the app. Looking forward to our continued
            growth.”
          </p>
          <h4>Sandeep Sharma</h4>
        </div>

        <div className="other-project">
          <h2 className="text-center ">OTHER PROJECTS</h2>
          <Splide
                aria-label="Our Services"
                options={{
                  perPage:3,
                  perMove: 1,
                  autoplay: true,
                  pauseOnHover: true,
                  type: "loop",
                  interval: 2000,
                  drag: true,
                }}
              >
          
             <SplideSlide>
            <div className="other-card">
              <div className="other-box">
                <img src={rel1} alt="rel1" />
              </div>
              <div className="other-tox-para">
                <h3>RELY INNOVATION</h3>
                <p>
                  Get peace of mind. install alarms that not only notify you of
                  danger, but also clearly instructs you on what to do next.
                </p>
               <NavLink to="/rely"><button>View</button></NavLink>
              </div>
            </div>
            </SplideSlide>
            <SplideSlide>
            <div className="other-card">
              <div className="other-box other-box1">
                <img src={rel2} alt="rel1" />
              </div>
              <div className="other-tox-para">
                <h3>PRO TRUCKS</h3>
                <p>
                  Aftermarket suspension lift kits,  leveling  kits and 
                  accessories  for 4X4 off-road truck and jeep enthusiasts
                </p>
               <NavLink to="/protrack"><button>View</button></NavLink>
              </div>
            </div>
            </SplideSlide>
           <SplideSlide>
            <div className="other-card">
              <div className="other-box other-box3">
                <img className="rel3" src={rel3} alt="rel1" />
              </div>
              <div className="other-tox-para">
                <h3>SOLENOID NINJA</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
               <NavLink to="/solenoid"><button>View</button></NavLink>
              </div>
            </div>
            </SplideSlide>
            <SplideSlide>
            <div className="other-card">
              <div className="other-box other-box3">
                <img className="rel3" src={rel3} alt="rel1" />
              </div>
              <div className="other-tox-para">
                <h3>SOLENOID NINJA</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
                <button>View</button>
              </div>
            </div>
            </SplideSlide>
            <SplideSlide>
            <div className="other-card">
              <div className="other-box other-box3">
                <img className="rel3" src={rel3} alt="rel1" />
              </div>
              <div className="other-tox-para">
                <h3>SOLENOID NINJA</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
                <button>View</button>
              </div>
            </div>
            </SplideSlide>
         
            </Splide>
         
         
          
        </div>

        <div className="req">
          <div className="req-sect">
            <h2>
              Would You Like To Talk To <br /> About Your Project?
            </h2>
            <p>
              {" "}
              You can send us the details of your project, and a member of our
              team will contact you shortly.
            </p>
            <NavLink to="/contact">
              <button>
                Request A Call{" "}
                <img width={13} className=" inline ml-2" src={arrow4} alt="" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kickiz;
