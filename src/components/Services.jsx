import React, { useState, useEffect } from "react";
import solution from "../images/solution.png";
import ecomm from "../images/ecomm.png";
import PortCard from "./Cards/PortCard";
import a9 from "../images/a9.png";
import pads from "../images/pads.png";
import bds from "../images/bds.png";
import jones from "../images/jones.png";
import ContactForm from "./common/ContactForm";
import arrow1 from "../images/arrow1.png";
import kushel1 from '../images/kushel1.png';
import focus from "../images/focus.png";
import { NavLink } from "react-router-dom";
import lohta from '../images/lohta.png';
import ertia from '../images/ertia.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Certified from "./common/Certified";
import ecommerce1 from "../images/ecommerce1.png";
import kushel2 from '../images/kushel2.png';
import kushel3 from '../images/kushel3.png';
import kushel4 from '../images/kushel4.png';
import kushel5 from '../images/kushel5.png';
import kushel6 from '../images/kushel6.png';
import kushel7 from '../images/kushel7.png';
import kushel8 from '../images/kushel8.png';
import drugs from '../images/drugs.png';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import kene from '../images/kene.png';
import yt1 from '../images/yt1.png';
import yt2 from "../images/yt2.png";
import yt3 from '../images/yt3.png';
import yt4 from '../images/yt4.png';
import yt5 from '../images/yt5.png';
import yt6 from '../images/yt6.png';
import yt7 from '../images/yt7.png';
import yt8 from '../images/yt8.png';
import yt9 from '../images/yt9.png';
import grinji1 from '../images/grinji1.png';
import grinji2 from '../images/grinji2.png';
import grinji3 from '../images/grinji3.png';
import grinji4 from '../images/grinji4.png';
import grinji5 from '../images/grinji5.png';
import fourPeople from '../images/fourPeople.png';
import frtsa from '../images/frtsa.png';
import canocialJi from '../images/cannocialji.png';
import lojo from '../images/lojo.png';
import lojoFrame from '../images/lojoFrame.png';
import womanMan from '../images/womanMan.png';
const Services = () => {
  const [perPage, setPerPage] = useState(5);
  const [fard, setFard] = useState(1);
  useEffect(() => {
    if (window.matchMedia("(max-width: 1300px)").matches) {
      setPerPage(4);
    }
    if (window.matchMedia("(max-width: 1000px)").matches) {
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

  let para1 = "Get peace of mind. install alarms that not only notify you of danger, but also clearly instructs you on what to do next."

  let para2 = "KICK- EEZ Premium, Made in America recoil pads and accessories to make your shooting"
  let para3 = "The company works extensively on trucks and jeeps."
  let para4 = "Get peace of mind. install alarms that not only notify you of danger"

  const stats = () => {
    setFard(1);
    document.getElementById("stat1").style.borderBottom = "1px solid #007ac1";
    document.getElementById("stat2").style.borderBottom = "none";
    document.getElementById("stat3").style.borderBottom = "none";
    document.getElementById("stat4").style.borderBottom = "none";
  }

  const stats1 = () => {
    setFard(2);
    document.getElementById("stat1").style.borderBottom = "none";
    document.getElementById("stat2").style.borderBottom = "1px solid #007ac1";
    document.getElementById("stat3").style.borderBottom = "none";
    document.getElementById("stat4").style.borderBottom = "none";
  }

  const stats2 = () => {
    setFard(3);
    document.getElementById("stat1").style.borderBottom = "none";
    document.getElementById("stat2").style.borderBottom = "none";
    document.getElementById("stat3").style.borderBottom = "1px solid #007ac1";
    document.getElementById("stat4").style.borderBottom = "none";
  }

  const stats3 = () => {
    setFard(4);
    document.getElementById("stat1").style.borderBottom = "none";
    document.getElementById("stat2").style.borderBottom = "none";
    document.getElementById("stat3").style.borderBottom = "none";
    document.getElementById("stat4").style.borderBottom = "1px solid #007ac1";
  }

  return (
    <>
      <div className="ser-main">
        <div className="ser121">
          <div className="ser11 px-24 pt-12 pb-4 flex items-center justify-between">
            <div className="ser111">
              <h1 className="seru">Services</h1>
              <h1 className="blue">eCommerce Solutions</h1>
              <p className="ac">Website & Application Development Services</p>
            </div>
            <div className="ser112 ser444">
              <img src={kene} alt="" />
            </div>
          </div>
        </div>

        <div className="ser2">
          <div className="ser21">
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
                    <img
                      className=" block m-auto"
                      src="/static/images/a7.png"
                      alt=""
                    />
                    <p>Shopify</p>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="home4121">
                    <img
                      className=" block m-auto"
                      src="/static/images/a5.png"
                      alt=""
                    />
                    <p>Woo Commerce</p>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="home4121">
                    <img
                      className=" block m-auto"
                      src="/static/images/a6.png"
                      alt=""
                    />
                    <p>Big Commerce</p>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="home4121">
                    <img
                      className=" block m-auto"
                      src="/static/images/a8.png"
                      alt=""
                    />
                    <p>Magento</p>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="home4121">
                    <img
                      className="block m-auto"
                      src="/static/images/b3.png"
                      alt=""
                    />
                    <p>Wordpress</p>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>

        <div className="ecommerce-solution ecomm346">
          <marquee behavior="scroll" direction="right" scrollamount="20">
            <img className="solution" src={solution} alt="solution" />
          </marquee>

          <div className="ecomm">
            <div className="first-ecom">
              <h1 className="mt-8">Top <span>eCommerce</span>  Business</h1>
              <h1>Solution Providers</h1>
              <p>
                We continuously align our operations with ever-changing, tech-savvy, and cross-channel consumers. Our e-commerce solutions make things available at the right place, at the right time, and at the right price.
              </p>
            </div>
            <div className="second-ecom">
              <img src={lohta} alt="ecom" />
            </div>
          </div>
        </div>

        <div className="ecom_selling">
          <div className="start_collapse">
            <p onClick={stats} id="stat1">START SELLING</p>
            <p onClick={stats1} id="stat2">MOVE YOUR BUSINESS ONLINE</p>
            <p onClick={stats2} id="stat3">MAINTAIN & GROW</p>
            <p onClick={stats3} id="stat4">AUDIT YOUR ONLINE STORE</p>
          </div>

          <div className="stat_selling mt-24">
            <div className="left_selling">
              <h2>Start selling</h2>
              <p>Build an eCommerce site backed by powerful technologies that satisfy customers, drive sales and organize your day-to-day tasks within a single platform. We can rapidly develop custom solutions to get you selling, shipping, and processing payments in no time.</p>
              <button>START YOUR PROJECT</button>
            </div>
            <div className="right_selling">
              <div className="right_selling_carts">
                <div className="sell_hard">
                  <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3" r="3" fill="#1265FF" />
                  </svg>
                  <p>eCommerce development</p>
                </div>
                <div className="sell_hard">
                  <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3" r="3" fill="#1265FF" />
                  </svg>
                  <p>eCommerce UX/UI design</p>
                </div>
                <div className="sell_hard">
                  <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3" r="3" fill="#1265FF" />
                  </svg>
                  <p>Global payment processing</p>
                </div>
                <div className="sell_hard">
                  <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3" r="3" fill="#1265FF" />
                  </svg>
                  <p>Omnichannel support</p>
                </div>
                <div className="sell_hard">
                  <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3" r="3" fill="#1265FF" />
                  </svg>
                  <p>Analytics and reporting</p>
                </div>
                <div className="sell_hard">
                  <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3" r="3" fill="#1265FF" />
                  </svg>
                  <p>Customer engagement tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why_ecoming">
          <h1>Why <span> E-Commerce  Development</span> with <br />
            kushel digi solutions</h1>
          <div className="headings_para">
            <img src={ertia} alt="ertia" />
            <p>Make your next online project go smoothly with our battle-tested <br /> eCommerce development services.</p>
          </div>

          <div className="ecoming_cards">
            <div className="ecoming_card">
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src={yt1} alt="" />
                </div>
                <div className="yt_heading">
                  <h3>Boost sales potential</h3>
                  <p>We know the eCommerce
                    technology stack inside-out, and
                    follow the latest trends, design principles, and best practices.</p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src={yt2} alt="" />
                </div>
                <div className="yt_heading">
                  <h3>Scale up flexibly</h3>
                  <p>Involve us at any phase of your eCommerce journey, and our
                    experts will happily adapt to your preferred workflows.</p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src={yt3} alt="" />
                </div>
                <div className="yt_heading">
                  <h3>Attract customers</h3>
                  <p>Get 360-degree expertise in technical, design, and marketing areas to ensure we match the right solution with your needs.</p>
                </div>
              </div>
            </div>
            <div className="ecoming_card">
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src={yt4} alt="" />
                </div>
                <div className="yt_heading">
                  <h3>Improve reliability</h3>
                  <p>Our eCommerce teams continuously work towards your growth—finding ways to drive traffic, sales, and performance.</p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src={yt5} alt="" />
                </div>
                <div className="yt_heading">
                  <h3>Deliver new experiences</h3>
                  <p>We design intuitive user interfaces, build loyalty programs, and improve checkout experiences to enhance conversion potential.</p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src={yt6} alt="" />
                </div>
                <div className="yt_heading">
                  <h3>Upgrade security</h3>
                  <p>Deploy strategies, analytics, and forecasting tools to help boost average order values and adapt to economic events.</p>
                </div>
              </div>
            </div>
            <div className="ecoming_card">
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src={yt7} alt="" />
                </div>
                <div className="yt_heading">
                  <h3>Drive growth</h3>
                  <p>Our eCommerce teams continuously work towards your growth—finding ways to drive traffic, sales, and performance.</p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src={yt8} alt="" />
                </div>
                <div className="yt_heading">
                  <h3>Improve conversions</h3>
                  <p>We design intuitive user interfaces, build loyalty programs, and improve checkout experiences to enhance conversion potential.</p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src={yt9} alt="" />
                </div>
                <div className="yt_heading">
                  <h3>Increase order values</h3>
                  <p>Deploy strategies, analytics, and forecasting tools to help boost average order values and adapt to economic events.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tech_stacksEcom">
          <h1>Our <span>eCommerce</span>  technology stack</h1>
          <p className="mx">Make your next online project go smoothly with our battle-tested </p>
          <p className="mx">eCommerce development services.</p>
          <div className="stacks-tex">
            <div className="stacks_shop">
              <img src={grinji1} alt="" />
              <p>SHOPIFY</p>
            </div>
            <div className="stacks_shop">
              <img src={grinji2} alt="" />
              <p>WOO COMMERCE</p>
            </div>
            <div className="stacks_shop">
              <img src={grinji3} alt="" />
              <p>BIG COMMERCE</p>
            </div>
            <div className="stacks_shop">
              <img src={grinji4} alt="" />
              <p>MAGENTO</p>
            </div>
            <div className="stacks_shop">
              <img src={grinji5} alt="" />
              <p>WORDPRESS</p>
            </div>
          </div>
        </div>

        <div className="suris">
          <div className="frtsa">
            <img src={frtsa} alt="frtsa" />
          </div>
          <div className="suris_tech">
            <div className="suris_tech_left">
              <h1>Not sure where to start?</h1>
              <p>Make your next online project go smoothly with our battle-tested eCommerce development services.</p>
             <NavLink to="/contact"><button>LET’S TALK</button></NavLink>
            </div>
            <div className="suris_tech_right">
              <img src={fourPeople} alt="fourPeople" />
            </div>
          </div>
        </div>

        <div className="Ecommerce_sent">
          <div className="ecommerce_left">
            <h1>Our eCommerce <br /> Development Process</h1>
            <p>We take care of your projects with proven agile methods that are designed to get all stakeholders (even non-technical ones) in alignment. Our workflow amplifies collaboration and faster turnarounds to achieve even the most ambitious goals.</p>
           <NavLink to="/howWork"><div className="see_workk mt-8">
              <span>SEE HOW WE WORK</span>
              <svg className="ml-3" width="24" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.1478 6.60438C23.9541 6.60438 23.7604 6.60438 23.5774 6.60438C16.2385 6.60438 8.91027 6.60438 1.5713 6.60438C1.3776 6.60438 1.17315 6.61537 0.979449 6.59339C0.409119 6.52746 -0.0105586 6.04394 0.000202318 5.4835C0.0109633 4.93405 0.419879 4.4835 0.968688 4.41757C1.16239 4.39559 1.36684 4.40658 1.56054 4.40658C8.89951 4.40658 16.2277 4.40658 23.5667 4.40658C23.7604 4.40658 23.9541 4.40658 24.2446 4.40658C24.094 4.21977 23.9971 4.09889 23.9003 3.989C23.2331 3.29669 22.5444 2.62636 21.888 1.92306C21.4253 1.43955 21.4145 0.791195 21.8342 0.351634C22.2539 -0.0879262 22.9103 -0.109904 23.373 0.351634C24.8042 1.79119 26.2246 3.24174 27.6343 4.70328C28.1186 5.20878 28.1186 5.81317 27.6343 6.31867C26.2246 7.78021 24.8042 9.23075 23.373 10.6703C22.8995 11.1428 22.2539 11.1209 21.8342 10.6813C21.4145 10.2417 21.4145 9.59339 21.8772 9.10988C22.6412 8.31867 23.4376 7.54944 24.2123 6.75823C24.1908 6.69229 24.1693 6.64834 24.1478 6.60438Z" fill="#1265FF" />
              </svg>

            </div></NavLink>
          </div>
          <div className="ecommerce_right">
            <img src={canocialJi} alt="canocialJi" />
          </div>
        </div>

        <div className="meet_theCom">
          <div className="theCom_left">
            <div className="lojo1">
              <img src={lojoFrame} alt="" />
            </div>
            <img className="lojokk" src={lojo} alt="" />
          </div>
          <div className="theCom_right">
            <h1>Meet our people</h1>
            <p>In kushel digi, we keep our minds free from any boundaries so that they can imagine and conceive great ideas which can be loved by your clients. We know the value of your trust which you put on us and kushel digi always do its best to safeguard that trust by going beyond than client’s expectation.</p>
           <NavLink to="/about"><button>ABOUT US</button></NavLink>
          </div>
        </div>


        <div className="ready_talks">
          <div className="ready_folks">
            <div className="ready_left">
              <div className="rdar_talk">
                <h1>Ready to talk about your</h1>
                <h1>eCommerce project?</h1>
                <div className="fantars">
                  <div className="tellUs">
                    <div className="tellUs_right">
                      <h1>1.</h1>
                    </div>
                    <div className="tellUs_left">
                      <span>Tell us more</span>
                      <p>Fill out a quick form describing your needs. You can always add details later on and we’ll reply within a day!</p>
                     <NavLink to="/contact"><button>GET IN TOUCH</button></NavLink>
                    </div>
                  </div>
                  <div className="tellUs">
                    <div className="tellUs_right">
                      <h1>2.</h1>
                    </div>
                    <div className="tellUs_left">
                      <span>Tell us more</span>
                      <p>Fill out a quick form describing your needs. You can always add details later on and we’ll reply within a day!</p>

                    </div>
                  </div>
                  <div className="tellUs">
                    <div className="tellUs_right">
                      <h1>3.</h1>
                    </div>
                    <div className="tellUs_left">
                      <span>Tell us more</span>
                      <p>Fill out a quick form describing your needs. You can always add details later on and we’ll reply within a day!</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ready_right">
              <div className="ready_side">
                <img src={womanMan} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="unified">
          <h2 className="unified-heading">
            Our unified commerce offering is designed with a
          </h2>
          <h3 className="unified-heading1">#Focus On Experience</h3>
          <img src={focus} alt="focus" />
        </div> */}

        {/* <div className="strategy">
          <h2>
            ECommerce Web Development <br /> Strategy
          </h2>
          <img src={ecommerce1} alt="ecommerce1" />
        </div> */}

        {/* <div className="tasking">
          <h2>
            Why <span>E-Commerce Development</span> with <br />
            kushel digi solutions
          </h2>
          <div className="tasking-cards">
            <div className="tasking-card">
              <div className="tasking-box">
                <div className="tasking-head">
                  <img src={kushel1} alt="" />
                  <p>Custom e Commerce <br /> Website Design</p>
                </div>
              </div>
              <div className="tasking-box">
                <div className="tasking-head">
                  <img src={kushel2} alt="" />
                  <p>Efficient Integrated <br /> Shipment Solution</p>
                </div>
              </div>
              <div className="tasking-box">
                <div className="tasking-head">
                  <img src={kushel3} alt="" />
                  <p>Inventory Management <br /> Made Easy</p>
                </div>
              </div>
              <div className="tasking-box">
                <div className="tasking-head">
                  <img src={kushel4} alt="" />
                  <p>Self Managable <br /> eCommerce Platform</p>
                </div>
              </div>
            </div>
            <div className="tasking-card">
              <div className="tasking-box">
                <div className="tasking-head">
                  <img src={kushel5} alt="" />
                  <p>Integrated Delivery <br /> Machanism</p>
                </div>
              </div>
              <div className="tasking-box">
                <div className="tasking-head">
                  <img src={kushel6} alt="" />
                  <p>Responsive eCommerce <br /> Websites</p>
                </div>
              </div>
              <div className="tasking-box">
                <div className="tasking-head">
                  <img src={kushel7} alt="" />
                  <p>Hassle Free Catalog <br /> Management</p>
                </div>
              </div>
              <div className="tasking-box">
                <div className="tasking-head">
                  <img src={kushel8} alt="" />
                  <p>Smart Order Management</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="bff">
          <h2>Benefits of Our <span>E-Commerce</span> <br /> Development Services</h2>
          <div className="faltus-card mt-4">
            <div className="faltu-card">
              <div className="faltu-box relative">
                <div className="faltu-box0 absolute">
                  <img src="/static/images/d7.png" alt="" />
                </div>
                <div className="faltu-sard">
                  <img className="drugs" src={drugs} alt="" />
                  <div className="faltu-head">
                    <h4>Mobile-Friendly</h4>
                    <p>When we kick-off an SEO campaign, your dedicated SEO consultant begins by doing a deep dive into your company, your website, your competitors and your industry.</p>
                  </div>
                </div>
              </div>
              <div className="faltu-box relative">
                <div className="faltu-box0 absolute">
                  <img src="/static/images/d8.png" alt="" />
                </div>
                <div className="faltu-sard">
                  <img className="drugs" src={drugs} alt="" />
                  <div className="faltu-head">
                    <h4>Scalable</h4>
                    <p>Our ecommerce solutions are designed to handle the extra workload as your business grows smoothly and seamlessly.</p>
                  </div>
                </div>
              </div>
              <div className="faltu-box relative">
                <div className="faltu-box0 absolute">
                  <img src="/static/images/d9.png" alt="" />
                </div>
                <div className="faltu-sard">
                  <img className="drugs" src={drugs} alt="" />
                  <div className="faltu-head">
                    <h4>Superior UI/UX</h4>
                    <p>Pamper your customers with pleasing visuals, user friendly interfaces, and exciting experiences while browsing and shopping on your ecommerce site.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faltu-card">
              <div className="faltu-box">
                <div className="faltu-box0 absolute">
                  <img src="/static/images/d10.png" alt="" />
                </div>
                <div className="faltu-sard">
                  <img className="drugs" src={drugs} alt="" />
                  <div className="faltu-head">
                    <h4>Smooth Deployment</h4>
                    <p>Once we are done creating your online store, we will launch it for you without hassles, on the platform of your choice.</p>
                  </div>
                </div>
              </div>
              <div className="faltu-box">
                <div className="faltu-box0 absolute">
                  <img src="/static/images/d10.png" alt="" />
                </div>
                <div className="faltu-sard">
                  <img className="drugs" src={drugs} alt="" />
                  <div className="faltu-head">
                    <h4>Technologically  Advanced</h4>
                    <p>Once we are done creating your online store, we will launch it for you without hassles, on the platform of your choice.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div> */}

        {/* <div className="customize">
          <h2>
            Customizing the platform of your choice to fit <br /> your goals
          </h2>
          <div className="customized-card  customized-card1 mt-10">
            <div className="customized-box">
              <img src={customized} alt="customized" />
              <div className="custo-head">
                <h3>Advisory and Consultation</h3>
                <p>
                  We provide in depth, forward-thinking insights on eCommerce
                  strategy and technology that maximize return on investment and
                  improve customer experience. From new eCommerce platform
                  selection and system integration to loyalty programs and
                  omnichannel solutions, we offer unbiased consultative
                  services.
                </p>
              </div>
            </div>
            <div className="customized-box">
              <img src={customized1} alt="customized1" />
              <div className="custo-head">
                <h3>Implementation Services</h3>
                <p>
                  We immerse ourselves in your brand and business to ensure the
                  successful implementation of leading eCommerce and related
                  platforms. We can deliver rapid and cost-effective
                  implementations using an agile methodology.
                </p>
              </div>
            </div>
          </div>
          <div className="customized-card mt-6">
            <div className="customized-box">
              <img src={customized2} alt="customized" />
              <div className="custo-head">
                <h3>Upgrade & Migration</h3>
                <p>
                  We have customized services that can help you upgrade and
                  migrate your current eCommerce platforms with less effort and
                  investment. We offer solutions to address your legacy software
                  as well.
                </p>
              </div>
            </div>
            <div className="customized-box">
              <img src={customized3} alt="customized1" />
              <div className="custo-head">
                <h3>Support & Maintenance</h3>
                <p>
                  We offer support and maintenance services based on deep
                  insights into your customers, business processes, and long
                  term goals. Our dedicated team of support specialists diagnose
                  and fix issues to help you maintain business continuity and
                  improve your customer experience.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="home5 poty poty1">
          <div className="home51 px-24 ">
            <div className="home511 text-center ">
              <h1 className="font-bold mb-2 mt-4">OUR PORTFOLIO</h1>
              <p className="view">
                View Our Custom Online Ecommerce Solutions And Get Amazed
              </p>
            </div>
            <div className="home512 flex flex-wrap justify-center mt-14">
              <PortCard heading={heading} pads={a9} para={para1} link="#" />
              <PortCard heading={heading1} pads={pads} para={para2} link="https://kickeezproducts.com/" />
              <PortCard heading={heading2} pads={bds} para={para3} link="#" />
              <PortCard heading={heading3} pads={jones} para={para4} link="#" />
            </div>
          </div>
          <div className="home52 w-full text-center">
            <NavLink to="/portfolio"><button className="btn btn1 m-auto btn3">
              <span className="mr-2">View All Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button></NavLink>
          </div>
        </div>
        {/* <Certified /> */}
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
                      What are the different mobile app development services you
                      offer?
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
                      Is Expand My Business a mobile app development company?
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
                      For what businesses do you offer mobile app development
                      services?
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
                      How long does a App take to build?
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

        {/* <div className="segment">
          <h2>Segment We Serve</h2>
          <p className="mt-3.5">
            We stand out as the best Web Development Company among others with
            our
          </p>
          <p> unparalleled web designing & development services:</p>
          <div className="img-section">
            <div className="img-filter">
              <img src="static/images/a5.png" alt="static" />
            </div>
            <div className="img-filter">
              <img src="static/images/a6.png" alt="static" />
            </div>
            <div className="img-filter">
              <img src="static/images/a7.png" alt="static" />
            </div>
            <div className="img-filter">
              <img src="static/images/a8.png" alt="static" />
            </div>
            <div className="img-filter">
              <img src="static/images/b3.png" alt="static" />
            </div>
          </div>
        </div> */}
        <ContactForm />
      </div>
    </>
  );
};

export default Services;
