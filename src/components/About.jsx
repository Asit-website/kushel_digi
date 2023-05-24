import React, { useState } from "react";
import arrow3 from "../images/arrow5.png";
import ContactForm1 from "./common/ContactForm1";
import { NavLink } from "react-router-dom";
import SmallApproach from "./common/SmallApproach";
import asit from "../images/asit.png";
import chirag from "../images/chirag.png";
import arrow from '../images/arrow.png';
import sijo1 from '../images/sijo.png';
const About = () => {
  const [tab, setTab] = useState(1);

  const tabAnother = (e) => {
    document.getElementById("aa").style.visibility = "visible";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "hidden";
    setTab(1);
  };

  const tabAnother1 = (e) => {
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "visible";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "hidden";
    setTab(2);
  };

  const tabAnother2 = (e) => {
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "visible";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "hidden";
    setTab(3);
  };
  const tabAnother3 = (e) => {
    e.preventDefault();
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "visible";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "hidden";
    setTab(4);
  };
  const tabAnother4 = (e) => {
    e.preventDefault();
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "visible";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "hidden";
    setTab(5);
  };

  const tabAnother5 = (e) => {
    e.preventDefault();
    setTab(6);
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "visible";
    document.getElementById("gg").style.visibility = "hidden";
  };
  const tabAnother6 = (e) => {
    e.preventDefault();
    setTab(7);
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "visible";
  };

  return (
    <>
      <div className="about-main">
        <div className="about-main1 relative">
          <div className="about-main11 flex justify-start items-center">
            <div className="about-main111">
              <h3 className="mb-3">About Us</h3>
              <p>A Young Team With New Ideas</p>
            </div>
            <img className="absolute" src="/static/images/e6.png" alt="" />
          </div>
        </div>
        <div className="about-main2 relative">
          <div className="about-main21 flex justify-center items-center">
            <div className="about2 about21 flex flex-col justify-center items-center">
              <img src="/static/images/e1.png" alt="" />
              <p className="mt-2">
                <span className="font-bold">1500+ </span>Delivered The Best
              </p>
            </div>
            <div className="about2 about21 flex flex-col justify-center items-center">
              <img src="/static/images/e2.png" alt="" />
              <p className="mt-2">
                <span className="font-bold">45% </span>Customers Who Always
                Return
              </p>
            </div>
            <div className="about2 about21 flex flex-col justify-center items-center">
              <img src="/static/images/e3.png" alt="" />
              <p className="mt-2">
                <span className="font-bold">110+ </span>Brilliant Minds
              </p>
            </div>
            <div className="about2 flex flex-col justify-center items-center">
              <img src="/static/images/e4.png" alt="" />
              <p className="mt-2">
                <span className="font-bold">10+ </span>Industry Experience Since
              </p>
            </div>
          </div>
        </div>
        <div className="about-main3">
          <div className="about-main31 flex items-center justify-between">
            <div className="about31">
              <h6>About Kushel Digi</h6>
              <h3>Get To Know Us Better</h3>
              <p>
                In kushel digi, we keep our minds free from any boundaries so
                that they can imagine and conceive great ideas which can be
                loved by your clients. We know the value of your trust which you
                put on us and kushel digi always do its best to safeguard that
                trust by going beyond than client’s expectation. <br /> kushel
                digi is driven under the leadership and guidance of one dynamic
                experts shubham Gupta (Founder)
              </p>
              <button className="about-btn">
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
            <div className="about32">
              <img src="/static/images/e7.png" alt="" />
            </div>
          </div>
        </div>
        <div className="about-main-3">
          <div className="about-main-31 flex justify-between">
            <h1>What We Do Best</h1>
            <p>
              We start by listening to the issues, requirements, challenges and
              objectives. The process continues with an effort to understand the
              business, market sector and competitors to develop information
              which is combined with our technical knowledge, expertise and
              research in order to provide the best solution at the lowest cost
            </p>
          </div>
        </div>
        <div className="about-main4">
          <div className="about-main41">
            <h1 className="text-white text-center">
              Be Fair With Today to build
            </h1>
            <h1 className="text-white text-center">desired tomorrow</h1>
            <div className="about4 flex justify-center">
              <div className="about41 text-center mr-1">
                <img src="/static/images/e9.png" alt="" />
                <h5>Vision</h5>
                <p>
                  Provide best in class product & service to our partner and
                  thereby providing ultimate experience to users with the
                  objective of adding value to their life. For the employees,
                  establishing kushel digi as the best platform to serve
                  customers with a culture of fun, team building, safety,
                  freedom, innovation and value addition as core values, Along
                  with unmatched value to all our stakeholders.
                </p>
              </div>
              <div className="about41 text-center ml-1">
                <img src="/static/images/e10.png" alt="" />
                <h5>Our Mission</h5>
                <p>
                  Disrupt global Website & App development and gaming industry
                  by offering value driven customized products, Motivated and
                  passionate employees aligned with shared vision of serving the
                  customers. Our mission is to add constant values to our
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-main5">
          <div className="about-main51">
            <h1 className="text-center">Our Values</h1>
            <p className="over">
              Over the past 10 Years our values have been the driving force that{" "}
              <br /> keeps us on right path
            </p>
            <div className="about5">
              <div className="about51 flex justify-between">
                <div className="about5-card text-center">
                  <h4>WE ACT</h4>
                  <p>Emotional</p>
                </div>
                <div className="about5-card text-center">
                  <h4>THINK</h4>
                  <p>Logical</p>
                </div>
              </div>
              <div className="about52 justify-around">
                <div className="about5-card text-center">
                  <h4>WE SERVE</h4>
                  <p>People</p>
                </div>
                <div className="about5-card text-center">
                  <h4>WORKING</h4>
                  <p>Smartlty</p>
                </div>
              </div>
              <div className="about53 justify-evenly">
                <div className="about5-card text-center mr-4">
                  <h4>BEING</h4>
                  <p>Ethical & Humble</p>
                </div>
                <div className="about5-card text-center ml-4">
                  <h4>SOLVE</h4>
                  <p>Problems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="about-main6">
                    <div className="about-main61">
                        <h1 className='text-center'>Be Fair With Today to build</h1>
                    </div>
                </div> */}
        <div className="about-main7">
          <h1 className="text-center">Meet Our Team</h1>
          <div className="about-main71 flex  justify-center">
            <div className="about7 relative">
              <img src="/static/images/e11.png" alt="" />
              <div className="absolute flex flex-col">
                <p>Shubham Gupta</p>
                <p>(Founder)</p>
              </div>
            </div>
            <div className="about7 relative">
              <img src={asit} alt="asit" />
              <div className="absolute flex flex-col">
                <p>Asit Mandal</p>
                <p>Developer</p>
              </div>
            </div>
            <div className="about7 relative">
              <img src={chirag} alt="" />
              <div className="absolute flex flex-col">
                <p>Chirag Negi</p>
                <p>Developer</p>
              </div>
            </div>
            <div className="about7 relative">
              <img src={sijo1} alt="sijo1" />
              <div className="absolute flex flex-col">
                <p>Sijo Jose</p>
                <p>Business Development Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-main6">
          <div className="about-main61">
            <img src="/static/images/e12.png" alt="" />
          </div>
        </div>
        <div className="office-about">
          <div className="process-flex">
            <div className="process-flex1">
              <img src="/static/images/e14.png" alt="" />
            </div>
            <div className="process-flex2">
              <h2>Our process</h2>
              <p>
                We don’t just put thought into what we build but also how we get
                there. Our proven website process ensures a seamless workflow
                for our clients and our team.
              </p>
             <NavLink to="/approach"><button>See Our Approach More <img width={14} className=" inline ml-1.5" src={arrow} alt="" /> </button></NavLink>
            </div>
          </div>
          <div className="office-flex mt-5">
            <div className="office-flex1">
            <h2>Our process</h2>
              <p>
                We don’t just put thought into what we build but also how we get
                there. Our proven website process ensures a seamless workflow
                for our clients and our team.
              </p>
             <NavLink to="/approach"><button>See Our Approach More <img width={14} className=" inline ml-1.5" src={arrow} alt="" /> </button></NavLink>
            </div>
            <div className="office-flex2">
                <img src="/static/images/e15.png" alt="" />
            </div>
          </div>
        </div>
        <div className="about-main8">
          <div className="about-main81">
            <h2 className="history"> HISTORY</h2>
            {tab === 1 && (
              <div className="about80 flex items-center justify-between transition-all">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2017</b>
                  <p className="mb-2 mt-2 founded">Kushel digi is founded</p>
                  <p className="started">
                    We started with just 10 employees working passionately with
                    a vision to grow. With utmost dedication, we bagged our
                    first brand project within a month of our incorporation. Set
                    the grounds for success and unprecedented opportunities.
                  </p>
                </div>
                <div className="about81">
                  <img src="/static/images/e18.png" alt="" />
                </div>
              </div>
            )}
            {tab === 2 && (
              <div className="about80 flex items-center justify-between transition-all">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2018</b>
                  <p className="mb-2 mt-2 founded">Kushel digi is founded</p>
                  <p className="started">
                    We started with just 10 employees working passionately with
                    a vision to grow. With utmost dedication, we bagged our
                    first brand project within a month of our incorporation. Set
                    the grounds for success and unprecedented opportunities.
                  </p>
                </div>
                <div className="about81">
                  <img src="/static/images/e18.png" alt="" />
                </div>
              </div>
            )}

            {tab === 3 && (
              <div className="about80 flex items-center justify-between">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2019</b>
                  <p className="mb-2 mt-2 founded">Kushel digi is founded</p>
                  <p className="started">
                    We started with just 10 employees working passionately with
                    a vision to grow. With utmost dedication, we bagged our
                    first brand project within a month of our incorporation. Set
                    the grounds for success and unprecedented opportunities.
                  </p>
                </div>
                <div className="about81">
                  <img src="/static/images/e18.png" alt="" />
                </div>
              </div>
            )}

            {tab === 4 && (
              <div className="about80 flex items-center justify-between">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2020</b>
                  <p className="mb-2 mt-2 founded">Kushel digi is founded</p>
                  <p className="started">
                    We started with just 10 employees working passionately with
                    a vision to grow. With utmost dedication, we bagged our
                    first brand project within a month of our incorporation. Set
                    the grounds for success and unprecedented opportunities.
                  </p>
                </div>
                <div className="about81">
                  <img src="/static/images/e18.png" alt="" />
                </div>
              </div>
            )}

            {tab === 5 && (
              <div className="about80 flex items-center justify-between">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2021</b>
                  <p className="mb-2 mt-2 founded">Kushel digi is founded</p>
                  <p className="started">
                    We started with just 10 employees working passionately with
                    a vision to grow. With utmost dedication, we bagged our
                    first brand project within a month of our incorporation. Set
                    the grounds for success and unprecedented opportunities.
                  </p>
                </div>
                <div className="about81">
                  <img src="/static/images/e18.png" alt="" />
                </div>
              </div>
            )}

            {tab === 6 && (
              <div className="about80 flex items-center justify-between">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2022</b>
                  <p className="mb-2 mt-2 founded">Kushel digi is founded</p>
                  <p className="started">
                    We started with just 10 employees working passionately with
                    a vision to grow. With utmost dedication, we bagged our
                    first brand project within a month of our incorporation. Set
                    the grounds for success and unprecedented opportunities.
                  </p>
                </div>
                <div className="about81">
                  <img src="/static/images/e18.png" alt="" />
                </div>
              </div>
            )}

            {tab === 7 && (
              <div className="about80 flex items-center justify-between">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2023</b>
                  <p className="mb-2 mt-2 founded">Kushel digi is founded</p>
                  <p className="started">
                    We started with just 10 employees working passionately with
                    a vision to grow. With utmost dedication, we bagged our
                    first brand project within a month of our incorporation. Set
                    the grounds for success and unprecedented opportunities.
                  </p>
                </div>
                <div className="about81">
                  <img src="/static/images/e18.png" alt="" />
                </div>
              </div>
            )}
            <div className="about800 mt-8 px-12 relative">
              <div className="about802"></div>
              <div className="flex justify-between">
                <div className="about801">
                  <img id="aa" src="/static/images/e20.png" alt="" />
                  <b className=" cursor-pointer" onClick={tabAnother}>
                    2017
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="bb"
                    className="invisible"
                    src="/static/images/e20.png"
                    alt=""
                  />
                  <b className=" cursor-pointer" onClick={tabAnother1}>
                    2018
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="cc"
                    className="invisible"
                    src="/static/images/e20.png"
                    alt=""
                  />
                  <b
                    className=" cursor-pointer"
                    onClick={tabAnother2}
                    id="2019"
                  >
                    2019
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="dd"
                    className="invisible"
                    src="/static/images/e20.png"
                    alt=""
                  />
                  <b
                    className=" cursor-pointer"
                    onClick={tabAnother3}
                    id="2020"
                  >
                    2020
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="ee"
                    className="invisible"
                    src="/static/images/e20.png"
                    alt=""
                  />
                  <b
                    className=" cursor-pointer"
                    onClick={tabAnother4}
                    id="2021"
                  >
                    2021
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="ff"
                    className="invisible"
                    src="/static/images/e20.png"
                    alt=""
                  />
                  <b
                    className=" cursor-pointer"
                    onClick={tabAnother5}
                    id="2022"
                  >
                    2022
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="gg"
                    className="invisible"
                    src="/static/images/e20.png"
                    alt=""
                  />
                  <b
                    className=" cursor-pointer"
                    onClick={tabAnother6}
                    id="2023"
                  >
                    2023
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-main-12">
          <div className="about-main-120 flex items-center justify-center">
            <div className="about-11">
              <h3>Join the Kushel digi team!</h3>
              <p>
                Innovate with the latest and greatest technologies & get to work
                on some of the coolest projects you can imagine.
              </p>
              <button>Apply Now</button>
            </div>
            <div className="about-10">
              <img className="sersa" src="/static/images/e17.png" alt="" />
            </div>
          </div>
        </div>
        <SmallApproach />
        <ContactForm1 />
      </div>
    </>
  );
};

export default About;
