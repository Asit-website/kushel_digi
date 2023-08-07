import React, { useState, useEffect } from "react";
import website from "../images/website.png";
import reactjs1 from "../images/reactjs.png";
import htmls from "../images/htmls.png";
import phpos from "../images/phpos.png";
import nodejs1 from "../images/nodejs1.png";
import words from "../images/words.png";
import vuejs1 from "../images/vuejs1.png";
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
import Certified from "./common/Certified";
import dec1 from "../images/dec1.png";
import dec2 from "../images/dec2.png";
import dec3 from "../images/dec3.png";
import dec4 from "../images/dec4.png";
import dec5 from "../images/dec5.png";
import dec6 from "../images/dec6.png";
import dec7 from "../images/dec7.png";
import dilkush from "../images/dilkush.png";
import punto from "../images/punto.png";
import process2 from "../images/process2.png";
import posis2 from "../images/posis2.png";
import posis3 from "../images/posis3.png";
import posis4 from "../images/posis4.png";
import posis5 from "../images/posis5.png";
import posis6 from "../images/posis6.png";
import posis7 from "../images/posis7.png";
import posis8 from "../images/posis8.png";
import posis10 from "../images/posis10.png";
import tweb from "../images/tewb.png";
import thir1 from "../images/thir1.png";
import webMinar from "../images/webMinar.png";
import thir2 from '../images/thir2.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ContactForm from "./common/ContactForm";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const WebsiteDev = () => {
  const [perPage, setPerPage] = useState(6);
  useEffect(() => {
    if (window.matchMedia("(max-width: 1350px)").matches) {
      setPerPage(4);
    }
    if (window.matchMedia("(max-width: 850px)").matches) {
      setPerPage(3);
    }
    if (window.matchMedia("(max-width: 750px)").matches) {
      setPerPage(1);
    }
  }, []);
  let heading = "www.2ndAmendment.com";
  let heading1 = "www.kickeez.com";
  let heading2 = "www.protrucks.com";
  let heading3 = "www.jonesbuilt.com";
  const [start, setStart] = useState(false);
  const handleChange = () => {
    setStart(!start);
  };

  // const setTab = () =>{
  //   document.getElementById("img").src=`${thir2}`
  // }

  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  const [hovered8, setHovered8] = useState(false);

  const [tab, setTab] = useState(1);

  const ChangeImage1 = () => {
    setTab(1);
    document.getElementById("img1").src = `${thir2}`;
    document.getElementById("img2").src = `${thir1}`;
    document.getElementById("img3").src = `${thir1}`;
    document.getElementById("img4").src = `${thir1}`;
    document.getElementById("img5").src = `${thir1}`;
  }
  const ChangeImage2 = () => {
    setTab(2);
    document.getElementById("img1").src = `${thir1}`;
    document.getElementById("img2").src = `${thir2}`;
    document.getElementById("img3").src = `${thir1}`;
    document.getElementById("img4").src = `${thir1}`;
    document.getElementById("img5").src = `${thir1}`;
  }
  const ChangeImage3 = () => {
    setTab(3);
    document.getElementById("img1").src = `${thir1}`;
    document.getElementById("img2").src = `${thir1}`;
    document.getElementById("img3").src = `${thir2}`;
    document.getElementById("img4").src = `${thir1}`;
    document.getElementById("img5").src = `${thir1}`;
  }

  const ChangeImage4 = () => {
    setTab(4);
    document.getElementById("img1").src = `${thir1}`;
    document.getElementById("img2").src = `${thir1}`;
    document.getElementById("img3").src = `${thir1}`;
    document.getElementById("img4").src = `${thir2}`;
    document.getElementById("img5").src = `${thir1}`;
  }

  const ChangeImage5 = () => {
    setTab(5);
    document.getElementById("img1").src = `${thir1}`;
    document.getElementById("img2").src = `${thir1}`;
    document.getElementById("img3").src = `${thir1}`;
    document.getElementById("img4").src = `${thir1}`;
    document.getElementById("img5").src = `${thir2}`;
  }
  return (
    <>
      <div className="ser-main">
        <div className="ser1 serji serji1 ">
          <div className="ser11 px-24 pt-12 pb-4 flex items-center justify-between">
            <div className="ser111">
              <h1 className="seru">Services </h1>
              <h1 className="blue">Website Design & Development</h1>
              <p className="ac">
                Solution based Web development services to skyrocket the growth
              </p>
            </div>
            <div className="ser112">
              <img src={website} alt="" />
            </div>
          </div>
        </div>
        <div className="ser2 ser-vertical">
          <div className="ser21 ser23">
            <div className="home412 flex justify-center items-center">
              <Splide
                className=" w-full"
                aria-label="Our Services"
                options={{
                  perPage,
                  perMove: 1,
                  autoplay: true,
                  pauseOnHover: true,
                  type: "loop",
                  interval: 1600,
                  drag: true,
                }}
              >
                <SplideSlide>
                  <div className="home4121">
                    <img className=" block m-auto" src={reactjs1} alt="" />
                    <p>REACT JS</p>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="home4121">
                    <img className=" block m-auto" src={htmls} alt="" />
                    <p>HTML 5</p>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-full sis  home4121">
                    <img className="block m-auto phpos" src={phpos} alt="" />
                    {/* <p>PHP</p> */}
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-full sis1  home4121">
                    <img
                      className=" block m-auto nodejs1"
                      src={nodejs1}
                      alt=""
                    />
                    {/* <p>Node</p> */}
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="home4121">
                    <img className="block m-auto" src={words} alt="" />
                    <p>Wordpress</p>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="home4121">
                    <img className="block m-auto" src={vuejs1} alt="" />
                    <p>PYTHON</p>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
        <div className="developments">
          <marquee behavior="scroll" direction="right" scrollamount="20">
            <img className="dev1" src={tweb} alt="developments" />
            {/* <h1 className="seema">Website design & Development</h1> */}
          </marquee>

          <div className="development">
            <div className="development1">
              <h3>
                Web Development Solutions <br /> To Grow The Business
              </h3>
              <p className="knowrs">
                The look, structure, and functions of an internet site are
                created by a web design service. We provide freelance work for
                building and developing websites in PHP. All website owners
                should know that unless visitors have an enjoyable experience
                while on their website, they are typically likely to leave
                looking for a better option. There is a requirement for a
                website developer to draw in and hold on to clients.
              </p>
              {/* <p className="knowers1">
                We provide top-tier custom website development and application
                development services, allowing you to create the best possible
                online experience for your customers. Our team of skilled
                developers is thoroughly experienced in all aspects of website
                design and development, and we work closely with our clients to
                ensure that each project meets their unique business needs.
              </p> */}
            </div>
            <div className="development2">
              <img src={mobileJi} alt="mobileji" />
            </div>
          </div>
        </div>

        <div className="why_website">
          <h2>Why website designing?</h2>
          <div className="thir_button_flex">
            <div onClick={ChangeImage1} className="thir_img">
              <p>Customized design</p>
              <img id="img1" src={thir2} alt="thir1" />
            </div>
            <div onClick={ChangeImage2} className="thir_img">
              <p>Professionalism</p>
              <img id="img2" src={thir1} alt="thir1" />
            </div>
            <div onClick={ChangeImage3} className="thir_img">
              <p>Contact & Graphics</p>
              <img id="img3" src={thir1} alt="thir1" />
            </div>
            <div onClick={ChangeImage4} className="thir_img">
              <p>SEO Service</p>
              <img id="img4" src={thir1} alt="thir1" />
            </div>
            <div onClick={ChangeImage5} className="thir_img">
              <p>Website Maintenance</p>
              <img id="img5" src={thir1} alt="thir1" />
            </div>
          </div>

          <div className="body_website">
            {
              tab === 1 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>
                        Your website is representative of your company or
                        organization's spirit. It should retain the uniqueness of your
                        brand. To ensure the same, it is best to get a customized
                        design that a website design company can create for you.
                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>It supports and establishes your brand</span>
                      <span>It optimized the customer experience</span>
                      <span>It helps increase SEO optimization</span>
                      <span>It gives better control over website hosting</span>
                      <span>It gives better control over website hosting</span>
                    </div>
                  </div>
                </>
              )
            }

            {
              tab === 2 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>
                        Your website is representative of your company or
                        organization's spirit. It should retain the uniqueness of your
                        brand. To ensure the same, it is best to get a customized
                        design that a website design company can create for you.
                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>It supports and establishes your brand</span>
                      <span>It optimized the customer experience</span>
                      <span>It helps increase SEO optimization</span>
                      <span>It gives better control over website hosting</span>
                      <span>It gives better control over website hosting</span>
                    </div>
                  </div>
                </>
              )
            }

            {
              tab === 3 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>
                        Your website is representative of your company or
                        organization's spirit. It should retain the uniqueness of your
                        brand. To ensure the same, it is best to get a customized
                        design that a website design company can create for you.
                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>It supports and establishes your brand</span>
                      <span>It optimized the customer experience</span>
                      <span>It helps increase SEO optimization</span>
                      <span>It gives better control over website hosting</span>
                      <span>It gives better control over website hosting</span>
                    </div>
                  </div>
                </>
              )
            }

            {
              tab === 4 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>
                        Your website is representative of your company or
                        organization's spirit. It should retain the uniqueness of your
                        brand. To ensure the same, it is best to get a customized
                        design that a website design company can create for you.
                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>It supports and establishes your brand</span>
                      <span>It optimized the customer experience</span>
                      <span>It helps increase SEO optimization</span>
                      <span>It gives better control over website hosting</span>
                      <span>It gives better control over website hosting</span>
                    </div>
                  </div>
                </>
              )
            }
            {
              tab === 5 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>
                        Your website is representative of your company or
                        organization's spirit. It should retain the uniqueness of your
                        brand. To ensure the same, it is best to get a customized
                        design that a website design company can create for you.
                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>It supports and establishes your brand</span>
                      <span>It optimized the customer experience</span>
                      <span>It helps increase SEO optimization</span>
                      <span>It gives better control over website hosting</span>
                      <span>It gives better control over website hosting</span>
                    </div>
                  </div>
                </>
              )
            }
            <div className="right_website">
              <img src={webMinar} alt="webMinar" />
            </div>
          </div>

        </div>

        <div className="experience-user">
          <div className="experience-user-sect experience-user-sect1">
            <img src={punto} alt="usto" />
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
            Request A Call{" "}
            <img width={13} className="inline ml-2" src={arrow1} alt="arrow1" />
          </button>
        </div>

        <div className="development-process">
          <h3>Our development process</h3>
          <p>
            Our process ensures that an interface is seamless for the end-user
            to become familiar with and competent in using during the first
            contact they make. The agile approach makes it intuitive for users
            to achieve their objectives and easy to recall on subsequent visits.
            Our designers work with developers to make the attributes stand out
            by turning the usability to the max.
          </p>

          <img src={process2} alt="process2" />
        </div>

        <div className="home5     poty poty1">
          <div className="home51 px-24 ">
            <div className="home511 text-center ">
              <h1 className="font-bold mb-2 mt-4">OUR PORTFOLIO</h1>
            </div>
            {/* <div className="home512 flex flex-wrap justify-center mt-10">
              <PortCard link="ammed" heading={heading} pads={a9} />
              <PortCard link="kick" heading={heading1} pads={pads} />
              <PortCard link="protrack" heading={heading2} pads={bds} />
              <PortCard link="jones" heading={heading3} pads={jones} />
            </div> */}

            <div className="homeswar mt-14">
              <h4>We create success stories.</h4>
              <h3>Website Development Portfolio</h3>
              <div className="homeswar-side mt-5">
                <div className="homeswar-flex">
                  <div className="homeswar-card homeswar-card9 ">
                    <div className="homeswar-sect">
                      <h5>SUMMER-READY SKIN</h5>
                      <p>
                        Hydrate and plumb with the <br />
                        super serum duo
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>


                      <a target="_blank" href="https://skknbykim.com/">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card10">
                    <div className="homeswar-sect">
                      <h5>
                        CREATE THE REMARKABLE <br /> DIMENSIONS WITH MPM
                      </h5>
                      <p>
                        Connecting people across the globe.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>

                      <a target="_blank" href="https://mpmoverseas.com/">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card11">
                    <div className="homeswar-sect">
                      <h5>DOLIWALA EVENTS & WEDDING</h5>
                      <p>
                        Solution for all weddings and corporate events management and entertainment.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>

                      <a target="_blank" href="https://www.doliwala.com/">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="homeswar-flex">
                  <div className="homeswar-card homeswar-card12 ">
                    <div className="homeswar-sect">
                      <h5>SPINNING</h5>
                      <p>
                        Bring the studioexperience homewith <br /> the original indoor cycling brand.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>


                      <a target="_blank" href="https://spinning.com/">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card13">
                    <div className="homeswar-sect">
                      <h5>MIX IT UP</h5>
                      <p>
                        Find your look for your iphone 14
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>

                      <a target="_blank" href="https://speckproducts.com/">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card14">
                    <div className="homeswar-sect">
                      <h5>DISCOVER YOUR BETTER</h5>
                      <p>
                        With a daily routine customized to your <br /> wellness goals.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>

                      <a target="_blank" href="https://www.bulletproof.com/">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
              <div
                className="indu-box"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <img src={hovered ? posis10 : dilkush} alt="" />
                <p>Healthcare & Wellness</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
              >
                <img src={hovered2 ? posis2 : dec1} alt="" />
                <p>Real Estate</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
              >
                <img src={hovered3 ? posis3 : dec2} alt="" />
                <p>IT, Software & Internet Marketing</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered4(true)}
                onMouseLeave={() => setHovered4(false)}
              >
                <img src={hovered4 ? posis4 : dec3} alt="" />
                <p>Finance & Banking</p>
              </div>
            </div>
            <div className="indu-card">
              <div
                className="indu-box"
                onMouseEnter={() => setHovered5(true)}
                onMouseLeave={() => setHovered5(false)}
              >
                <img src={hovered5 ? posis5 : dec4} alt="" />
                <p>
                  Government & Public <br /> Sector Enterprises
                </p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered6(true)}
                onMouseLeave={() => setHovered6(false)}
              >
                <img src={hovered6 ? posis6 : dec5} alt="" />
                <p>Travel & Tour</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered7(true)}
                onMouseLeave={() => setHovered7(false)}
              >
                <img src={hovered7 ? posis7 : dec6} alt="" />
                <p>Retail</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered8(true)}
                onMouseLeave={() => setHovered8(false)}
              >
                <img src={hovered8 ? posis8 : dec7} alt="alg" />
                <p>SPORTS ( outdoor & indoor )</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Certified /> */}

        <div className="home9 mb-12 home278">
          <div className="home91 flex px-24">
            <div className="home911 text-center">
              <h2 className="font-bold text-gray-700">JUST THE FAQs</h2>
            </div>
            <div className="home912">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Do you have experience in developing single-vendor
                      website?
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
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
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
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
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
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
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
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </>
  );
};

export default WebsiteDev;
