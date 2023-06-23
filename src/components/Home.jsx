import React, { useEffect, useState } from "react";
import DevCard from "./Cards/DevCard";
// import PortCard from "./Cards/PortCard";
// import { SplideTrack } from "@splidejs/react-splide";
import ServiceCard from "./Cards/ServiceCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import react from "../images/react.png";
import kotlin from "../images/kotlin.png";
import apple from "../images/apple.png";
import fluter from "../images/fluter.png";
import android from "../images/android.png";
import app1 from "../images/app1.png";
import web from "../images/web.png";
import php from "../images/php.png";
import wordpress from "../images/wordpress.png";
import laravel from "../images/laravel.png";
import kart from "../images/kart.png";
import Big from "../images/Big.png";
import shopify from "../images/shopify.png";
import woo from "../images/woo.png";
import Magento from "../images/magento.png";
import ui from "../images/ui.png";
import figma from "../images/figma.png";
import xd from "../images/xd.png";
import sketch1 from "../images/sketch.png";
import illustrator from "../images/illustrator.png";
import Photoshop from "../images/photoshop.png";
import portfolio from "../images/portfolio.png";
// import pads from "../images/pads.png";
// import bds from "../images/bds.png";
// import jones from "../images/jones.png";
// import major from "../images/major.png";
// import solenoid from "../images/solenoid.png";
// import a9 from "../images/a9.png";
import ladki1 from "../images/ladki1.png";
import star from "../images/star.png";
import star1 from "../images/star1.png";
// import finch from "../images/finch.png";
import pay1 from "../images/pay1.png";
import pay2 from "../images/pay2.png";
import pay3 from "../images/pay3.png";
import box2 from "../images/box2.png";
import box3 from "../images/box3.png";
import box4 from "../images/box4.png";
import box5 from "../images/box5.png";
import box6 from "../images/box6.png";
import box7 from "../images/box7.png";
import box8 from "../images/box8.png";
import box9 from "../images/box9.png";
import box10 from "../images/box10.png";
import box11 from "../images/box11.png";
import box12 from "../images/box12.png";
import box13 from "../images/box13.png";
import box14 from "../images/box14.png";
import box15 from "../images/box15.png";
import box16 from "../images/box16.png";
import re from "../images/re.png";
import re1 from "../images/re1.png";
import arrow from "../images/arrow.png";
import singi from "../images/singi.png";
import { NavLink } from "react-router-dom";
import chont1 from "../images/chont1.png";
import chont2 from "../images/chont2.png";
import chont3 from "../images/chont3.png";
import chont4 from "../images/chont4.png";
import chont5 from "../images/chont5.png";
import joki1 from "../images/joki1.png";
import joki2 from "../images/joki2.png";
import joki3 from "../images/joki3.png";
import joki4 from "../images/joki4.png";
import joki5 from "../images/joki5.png";
import joki6 from "../images/joki6.png";
import joki7 from "../images/joki7.png";
import joki8 from "../images/joki8.png";
import sync from "../images/sync.png";
import antist from "../images/antist.png";
import ContactForm1 from "./common/ContactForm1";
import abita from "../images/abita.png";
import surup from "../images/surup.png";
const Home = () => {
  let dev = "App";
  let dev1 = "Development";
  let dev2 = "Web";
  let dev3 = "Development";

  let dev4 = "Ecommerce";
  let dev5 = "Development";

  let dev6 = "UI & UX";

  let node1 = "Node js";

  let a = "Android App";
  let b = "IOS App";
  let c = "Flutter";
  let d = "React Native";
  let e = "Kotlin";

  let php1 = "PHP";
  let wordpress1 = "Wordpress";
  let laravel1 = "Laravel";

  let big = "Bigcommerce";
  let shop = "Shopify";
  let commerce = "Woo Commerce";
  let mag = "Magento";
  // let link = "kick";
  let figma1 = "Figma";
  let adobe1 = "Adobe XD";
  let sketch = "Sketch";
  let adobe2 = "Adobe illustrator";
  let adobe3 = "Adobe Photoshop";

  let tag = "Mobile-Friendly";
  let tag1 = "Scalable";
  let tag2 = "Superior UI/UX";
  let tag3 = "Smooth Deployment";
  let tag4 = "Technologically Advanced";

  let seo = "SEO";
  let seo1 = "SMO";
  let seo2 = "PPC";

  let digital = "Digital";
  let digital1 = "Marketing";

  // let heading = "www.2ndAmendment.com";
  // let heading1 = "www.kickeez.com";
  // let heading2 = "www.protrucks.com";
  // let heading3 = "www.jonesbuilt.com";
  // let heading4 = "www.Majorhospital.com";
  // let heading5 = "www.solenoidninja.com";

  const [perPage, setPerPage] = useState(4);
  const [perPage1, setPerPage1] = useState(5);
  const [perPage2, setPerPage2] = useState(5);

  useEffect(() => {
    if (window.matchMedia("(max-width: 1350px)").matches) {
      setPerPage(3);
    }
    if (window.matchMedia("(max-width: 750px)").matches) {
      setPerPage(1);
      setPerPage1(1);
    }
  }, []);
  useEffect(() => {
    if (window.matchMedia("(max-width: 1125px)").matches) {
      setPerPage2(1);
    }
  }, []);

  const [tab, setTab] = useState(1);

  const tabAnother = (e) => {
    e.preventDefault();
    setTab(1);
    document.getElementById("one").style.background = "#085881";
    document.getElementById("two").style.background = "none";
    document.getElementById("three").style.background = "none";
    document.getElementById("fourth").style.background = "none";

    document.getElementById("one").style.padding = "5px 22px";
    document.getElementById("two").style.padding = "0px 0px";
    document.getElementById("three").style.padding = "0px 0px";
    document.getElementById("fourth").style.padding = "0px 0px";

    document.getElementById("one").style.color = "#ffffff";
    document.getElementById("two").style.color = "#000000";
    document.getElementById("three").style.color = "#000000";
    document.getElementById("fourth").style.color = "#000000";

    document.getElementById("one").style.borderRadius = "20px";
    document.getElementById("two").style.borderRadius = "0px";
    document.getElementById("three").style.borderRadius = "0px";
    document.getElementById("fourth").style.borderRadius = "0px";
  };

  const tabAnother1 = (e) => {
    e.preventDefault();
    setTab(2);
    document.getElementById("one").style.background = "none";
    document.getElementById("two").style.background = "#085881";
    document.getElementById("three").style.background = "none";
    document.getElementById("fourth").style.background = "none";

    document.getElementById("one").style.padding = "0px 0px";
    document.getElementById("two").style.padding = "5px 22px";
    document.getElementById("three").style.padding = "0px 0px";
    document.getElementById("fourth").style.padding = "0px 0px";

    document.getElementById("one").style.color = "#000000";
    document.getElementById("two").style.color = "#ffffff";
    document.getElementById("three").style.color = "#000000";
    document.getElementById("fourth").style.color = "#000000";

    document.getElementById("one").style.borderRadius = "0px";
    document.getElementById("two").style.borderRadius = "20px";
    document.getElementById("three").style.borderRadius = "0px";
    document.getElementById("fourth").style.borderRadius = "0px";
  };

  const tabAnother2 = (e) => {
    e.preventDefault();
    setTab(3);

    document.getElementById("one").style.background = "none";
    document.getElementById("two").style.background = "none";
    document.getElementById("three").style.background = "#085881";
    document.getElementById("fourth").style.background = "none";

    document.getElementById("one").style.padding = "0px 0px";
    document.getElementById("two").style.padding = "0px 0px";
    document.getElementById("three").style.padding = "5px 22px";
    document.getElementById("fourth").style.padding = "0px 0px";

    document.getElementById("one").style.color = "#000000";
    document.getElementById("two").style.color = "#000000";
    document.getElementById("three").style.color = "#ffffff";
    document.getElementById("fourth").style.color = "#000000";

    document.getElementById("one").style.borderRadius = "0px";
    document.getElementById("two").style.borderRadius = "0px";
    document.getElementById("three").style.borderRadius = "20px";
    document.getElementById("fourth").style.borderRadius = "0px";
  };

  const tabAnother3 = (e) => {
    e.preventDefault();
    setTab(4);

    document.getElementById("one").style.background = "none";
    document.getElementById("two").style.background = "none";
    document.getElementById("three").style.background = "none";
    document.getElementById("fourth").style.background = "#085881";

    document.getElementById("one").style.padding = "0px 0px";
    document.getElementById("two").style.padding = "0px 0px";
    document.getElementById("three").style.padding = "0px 0px";
    document.getElementById("fourth").style.padding = "5px 22px";

    document.getElementById("one").style.color = "#000000";
    document.getElementById("two").style.color = "#000000";
    document.getElementById("three").style.color = "#000000";
    document.getElementById("fourth").style.color = "#ffffff";

    document.getElementById("one").style.borderRadius = "0px";
    document.getElementById("two").style.borderRadius = "0px";
    document.getElementById("three").style.borderRadius = "0px";
    document.getElementById("fourth").style.borderRadius = "20px";
  };

  const headings =
    "We create responsive e-commerce websites that are suitable for viewing on any mobile phone.";

  const headings1 =
    "Your website will not go down due to overload from increased traffic on the correct servers.";

  const headings2 =
    "We develop the e-commerce website in accordance with the latest UX and UI standards.";

  let headings3 =
    "We ensure the app works in a staging environment to achieve smooth deployment.";

  return (
    <>
      <div className="home-main">
        <div className="home1 mb-20">
          <div className="home11 flex px-24 pt-12 items-center relative">
            <div className="home111">
              <div className="home1111">
                <p className="welcome">
                  Welcome to <span>Kushel Digi</span>
                </p>
                <h2 className="mt-0 mb-2">
                  {/* Creating E-Commerce <br /> Experiences */}
                  Transforming your business <br /> with technology
                </h2>
                {/* <p className="tokin">We take the time to thoughtfully understand your brand voice and vision to deliver unmatched UX focused website design and development.</p> */}
                <p className="tokin">Specialized in ECommerce transformation</p>
              </div>
              <div className="home1112 absolute">
                <ul className="flex flex-row">
                  <li>SHOPIFY</li>
                  <li>WOOCOMMERCE</li>
                  <li>BIGCOMMERCE</li>
                  <li>MAGENTO</li>
                  <li>WORDPRESS</li>
                </ul>
              </div>
            </div>
            <div className="home112">
              <img src={ladki1} alt="ladki1" />
            </div>
          </div>
        </div>

        <div className="home2 mb-8">
          <div className="home21 px-24 flex">
            <div className="home211 mr-14">
              <img src={abita} alt="about" />
              <h5 className="text-blue-500 mt-16">Who are we?</h5>
              <h3 className="mb-2">
                {/* We are your digital partner for innovative design and reliable
                Web, Mobile, and Marketing solutions. */}
                {/* We are your go-to digital partner for trustworthy Web, mobile,
                and marketing solutions and cutting-edge design. */}
                Welcome to our Ecommerce Website Development Company!
              </h3>
              <p className="mb-3">
              We specialize in creating customized online stores that are visually stunning, user-friendly, and optimized for conversions. With our expertise and cutting-edge technologies, we empower businesses to establish a strong online presence, attract customers, and drive sales.
              </p>
              <NavLink to="/contact">
                {" "}
                <button className="btn btn1 btb-who">
                  <span className="mr-2"></span>
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
                </button>
              </NavLink>
            </div>
            <div className="home212 ml-14 relative">
              {/* <img className=' absolute jit' src={eli} alt="" /> */}
              <img className="jit1" src="/static/images/a2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="home3 pb-20 bg-gray-100 relative">
          <div className="home31 py-8 px-24">
            <div className="home311 text-center mb-4">
              <h1 className="mb-3">
                <span className="font-bold m-1">OUR</span> SERVICES
              </h1>
              <p>
                Offering scalable and custom-made development services using agile methodologies and sturdy coding.
              </p>
            </div>
            <div className="home312 homanta">
              <Splide
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
                  <ServiceCard
                    app1={ui}
                    dev={dev6}
                    a={figma1}
                    b={adobe1}
                    c={sketch}
                    d={adobe2}
                    e={adobe3}
                    android={figma}
                    apple={xd}
                    fluter={sketch1}
                    react={illustrator}
                    kotlin={Photoshop}
                    link={"ui-ux-designer-usa"}
                  />
                </SplideSlide>
                <SplideSlide>
                  <ServiceCard
                    dev={dev4}
                    dev1={dev5}
                    app1={kart}
                    android={Big}
                    apple={shopify}
                    react={Magento}
                    fluter={woo}
                    kotlin={laravel}
                    a={big}
                    b={shop}
                    c={commerce}
                    d={mag}
                    e={laravel1}
                    link={"ecommerce-solutions-usa"}
                  />
                </SplideSlide>
                <SplideSlide>
                  <ServiceCard
                    app1={web}
                    dev={dev2}
                    dev1={dev3}
                    android={php}
                    apple={laravel}
                    react={re1}
                    fluter={wordpress}
                    kotlin={re}
                    a={php1}
                    b={laravel1}
                    c={wordpress1}
                    d={node1}
                    e={"React js"}
                    link={"web-development-usa"}
                  />
                </SplideSlide>
                <SplideSlide>
                  <ServiceCard
                    react={react}
                    android={android}
                    apple={apple}
                    kotlin={kotlin}
                    fluter={fluter}
                    app1={app1}
                    dev={dev}
                    dev1={dev1}
                    a={a}
                    b={b}
                    c={c}
                    d={d}
                    e={e}
                    link={"mobile-application-development-usa"}
                  />
                </SplideSlide>
                <SplideSlide>
                  <ServiceCard
                    app1={app1}
                    dev={digital}
                    dev1={digital1}
                    a={seo}
                    b={seo1}
                    c={seo2}
                    android={pay1}
                    apple={pay2}
                    fluter={pay3}
                    class={"you"}
                    link={"#"}
                  />
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>

        <div className="home4 home-04 pb-20 bg-gray-100">
          <div className="home41">
            <div className="home411 text-center mb-10">
              <h1 className="mb-2">
                <span className="font-bold">TECHNOLOGIES</span> WE WORK WITH
              </h1>
              <p>
              We strive to work for perfection and we do so by using upgraded technology in line with today’s trends.
              </p>
            </div>
            <div className="home412 home456 flex justify-center items-center">
              <Splide
                aria-label="Our Services"
                options={{
                  perPage: perPage1,
                  perMove: 1,
                  // loop: true,
                  autoplay: true,
                  pauseOnHover: true,
                  type: "loop",
                  interval: 1600,
                  drag: true,
                }}
              >
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/a5.png" alt="" />
                    <p>Woo Commerce</p>
                  </div> */}
                  <img className="so" src={box2} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/a6.png" alt="" />
                    <p>Big Commerce</p>
                  </div> */}
                  <img className="so" src={box3} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/a7.png" alt="" />
                    <p>Shopify</p>
                  </div> */}
                  <img className="so" src={box4} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/a8.png" alt="" />
                    <p>Magento</p>
                  </div> */}
                  <img className="so" src={box5} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b3.png" alt="" />
                    <p>Wordpress</p>
                  </div> */}
                  <img className="so" src={box6} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b6.png" alt="" />
                    <p>Vue Js</p>
                  </div> */}
                  <img className="so" src={box7} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b7.png" alt="" />
                    <p>Php</p>
                  </div> */}
                  <img className="so" src={box8} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b8.png" alt="" />
                    <p>HTML 5</p>
                  </div> */}
                  <img className="so" src={box9} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b9.png" alt="" />
                    <p>Swift</p>
                  </div> */}
                  <img className="so" src={box10} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b10.png" alt="" />
                    <p>Python</p>
                  </div> */}
                  <img className="so" src={box11} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b11.png" alt="" />
                    <p>Java</p>
                  </div> */}
                  <img className="so" src={box12} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b12.png" alt="" />
                    <p>Node Js</p>
                  </div> */}
                  <img className="so" src={box13} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b13.png" alt="" />
                    <p>Flutter</p>
                  </div> */}
                  <img className="so" src={box14} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b14.png" alt="" />
                    <p>React Native</p>
                  </div> */}
                  <img className="so" src={box15} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b14.png" alt="" />
                    <p>React Native</p>
                  </div> */}
                  <img className="so" src={box16} alt="" />
                </SplideSlide>
              </Splide>
            </div>
          </div>
          <NavLink to="/contact">
            <button className="home-btns">
              Lets Together{" "}
              <img
                width={13}
                height={13}
                className="inline ml-1"
                src={arrow}
                alt="arrow"
              />
            </button>
          </NavLink>
        </div>
        {/* pehle mb-12 tha */}
        <div className="home5 pb-10  bg-gray-100">
          <div className="home51 px-24">
            <div className="home511 text-center mb-8">
              <marquee behavior="scroll" direction="right" scrollamount="20">
                <img className="portfolio" src={portfolio} alt="portfolio" />
              </marquee>
              {/* <h1 className="font-bold mb-2 mt-4">OUR PORTFOLIO</h1>
              <p>We design project designed with passion on time,</p>
              <p>within budget of full value</p> */}
            </div>
            <div className=" flex-thing flex items-center justify-center">
              <p
                id="one"
                onClick={tabAnother}
                className="inline all cursor-pointer"
              >
                all
              </p>
              <p id="two" onClick={tabAnother1} className=" cursor-pointer">
                WEBSITE DESIGN
              </p>
              <p id="three" onClick={tabAnother2} className=" cursor-pointer">
                E-COMMERCE SOLUTION
              </p>
              <p id="fourth" onClick={tabAnother3} className=" cursor-pointer">
                MOBILE APPLICATION
              </p>
            </div>
            {tab === 1 && (
              <div className="homeswar mt-14">
                <h4>We create success stories.</h4>
                <h3>BigCommerce Portfolio</h3>
                <div className="homeswar-side mt-5">
                  <div className="homeswar-flex">
                    <div className="homeswar-card">
                      <div className="homeswar-sect">
                        <h5>KICKEEZ</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                        <NavLink to="/kick">
                          <button>Details</button>
                        </NavLink>

                        <a target="_blank" href="https://kickeezproducts.com/">
                          <p>visit site</p>
                        </a>
                      </div>
                    </div>
                    <div className="homeswar-card homeswar-card1">
                      <div className="homeswar-sect">
                        <h5>SOLENOID NINJA</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                        <NavLink to="/solenoid">
                          <button>Details</button>
                        </NavLink>
                        <a target="_blank" href="https://solenoid-ninja.com/">
                          {" "}
                          <p>visit site</p>
                        </a>
                      </div>
                    </div>
                    <div className="homeswar-card homeswar-card2">
                      <div className="homeswar-sect">
                        <h5>PROTRUCKS</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                        <NavLink to="/protrack">
                          <button>Details</button>
                        </NavLink>
                        <a
                          target="_blank"
                          href="https://www.protrucksandcars.net/"
                        >
                          <p>visit site</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="homeswar-flex">
                    <div className="homeswar-card homeswar-card3">
                      <div className="homeswar-sect">
                        <h5>2ND AMENDMENT</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                        <NavLink to="/ammed">
                          <button>Details</button>
                        </NavLink>
                        <p>visit site</p>
                      </div>
                    </div>
                    <div className="homeswar-card homeswar-card4">
                      <div className="homeswar-sect">
                        <h5>RELY INNOVATION</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                        <NavLink to="/rely">
                          <button>Details</button>
                        </NavLink>
                       <a href="https://rely.mybigcommerce.com/?ctk=22b4785d-b154-406a-a998-f45dea313933"><p>visit site</p></a>
                      </div>
                    </div>
                    <div className="homeswar-card homeswar-card5">
                      <div className="homeswar-sect">
                        <h5>JONESBUILT</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                       <NavLink to="/jones"><button>Details</button></NavLink>
                        <p>visit site</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tab === 2 && (
              <div className="homeswar mt-14">
                <h4>We create success stories.</h4>
                <h3>BigCommerce Portfolio</h3>
                <div className="homeswar-side mt-5">
                  <div className="homeswar-flex">
                    <div className="homeswar-card">
                      <div className="homeswar-sect">
                        <h5>KICKEEZ</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                        <NavLink to="/kick">
                          <button>Details</button>
                        </NavLink>
                       
                         <a target="_blank" href="https://kickeezproducts.com/"><p>visit site</p></a>
                       
                      </div>
                    </div>
                    <div className="homeswar-card homeswar-card1">
                      <div className="homeswar-sect">
                        <h5>SOLENOID NINJA</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                       <NavLink to="/solenoid"><button>Details</button></NavLink>
                       <a target="_blank" href="https://solenoid-ninja.com/"><p>visit site</p></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tab === 3 && (
              <div className="homeswar mt-14">
                <h4>We create success stories.</h4>
                <h3>BigCommerce Portfolio</h3>
                <div className="homeswar-side mt-5">
                  <div className="homeswar-flex">
                    <div className="homeswar-card">
                      <div className="homeswar-sect">
                        <h5>KICKEEZ</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                        <NavLink to="/kick">
                          <button>Details</button>
                        </NavLink>
                        <a target="_blank" href="https://kickeezproducts.com/"><p>visit site</p></a>
                      </div>
                    </div>
                    <div className="homeswar-card homeswar-card1">
                      <div className="homeswar-sect">
                        <h5>SOLENOID NINJA</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                       <NavLink to="/solenoid"><button>Details</button></NavLink>
                       <a target="_blank" href="https://solenoid-ninja.com/"><p>visit site</p></a>
                      </div>
                    </div>
                    <div className="homeswar-card homeswar-card3">
                      <div className="homeswar-sect">
                        <h5>2ND AMENDMENT</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                        <NavLink to="/ammed">
                          <button>Details</button>
                        </NavLink>
                        
                          <p>visit site</p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tab === 4 && (
              <div className="homeswar mt-14">
                <h4>We create success stories.</h4>
                <h3>BigCommerce Portfolio</h3>
                <div className="homeswar-side mt-5">
                  <div className="homeswar-flex">
                    <div className="homeswar-card">
                      <div className="homeswar-sect">
                        <h5>KICKEEZ</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                        <NavLink to="/kick">
                          <button>Details</button>
                        </NavLink>
                        
                         <a target="_blank" href="https://kickeezproducts.com/"><p>visit site</p></a>
                        
                      </div>
                    </div>
                    <div className="homeswar-card homeswar-card1">
                      <div className="homeswar-sect">
                        <h5>SOLENOID NINJA</h5>
                        <p>
                          custom design / custom <br /> development
                        </p>
                      </div>
                      <div className="homeswar-sect1">
                       <NavLink to="/solenoid"><button>Details</button></NavLink>
                       <a target="_blank" href="https://solenoid-ninja.com/"><p>visit site</p></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="home52 w-full text-center">
            <NavLink to="/portfolio">
              <button className="btn btn1 m-auto btn3">
                <span className="mr-2">View our all portfolio</span>
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
              </button>
            </NavLink>
          </div>
        </div>
        <div className="home-chin">
          <h3 className="text-center">Why Choose Us</h3>
          <div className="chain-cards">
            <div className="chain-card flex items-center justify-center">
              <div className="chain-box chain-box1 w-full">
                <img src={chont1} alt="chont1" />
                <h4>Tailored Solutions</h4>
                <p>
                  We create customized solutions and develop eCommerce features
                  you want. If you can imagine it, we will work with you to get
                  it built.We create customized solutions and develop eCommerce
                  features you want. If you can imagine it, we will work with
                  you to get it built.
                </p>
              </div>

              <div className="chain-box chain-box1 w-full">
                <img src={chont1} alt="chont1" />
                <h4>
                  Experience and <br /> Know-How
                </h4>
                <p>
                  We've been supporting eCommerce merchants for over 20 years
                  and have worked on thousands of stores on a variety of
                  platforms.
                </p>
              </div>
              <div className="chain-box chain-box1 w-full">
                <img src={chont2} alt="chont1" />
                <h4>High Standards</h4>
                <p>
                  We have built an impeccable reputation and stand behind
                  everything we do. We do not commit to any job unless we know
                  we can do it well.
                </p>
              </div>
            </div>
            <div className="chain-card flex items-center justify-center">
              <div className="chain-box chain-box1 w-full">
                <img src={chont3} alt="chont1" />
                <h4>We Care</h4>
                <p>
                  Customer satisfaction is our driving force – we sincerely care
                  about our clients’ success and well-being.
                </p>
              </div>

              <div className="chain-box chain-box1 w-full">
                <img src={chont4} alt="chont1" />
                <h4>Increase Profitability</h4>
                <p>
                  Our solutions add significant value to websites and are
                  designed to help merchants efficiently manage their stores and
                  increase profitability.
                </p>
              </div>
              <div className="chain-box chain-box1 w-full">
                <img src={chont5} alt="chont1" />
                <h4>Original, Modern Code</h4>
                <p>
                  Our solutions add significant value to websites and are
                  designed to help merchants efficiently manage their stores and
                  increase profitability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home6 mb-16 py-14">
          <div className="home61 px-24">
            <div className="home611 mb-8 text-center">
              <h1 className="font-bold text-gray-700">Our Working Process</h1>
            </div>
            <div className="home612">
              <div className="home6122">
                <img className="w-full h-full signgi" src={surup} alt="mesr" />
              </div>
            </div>
          </div>
        </div>
        <div className="home7 mb-20">
          <div className="home71 px-44">
            <div className="home711 text-center mb-4">
              <h1 className="">
                Benefits of Our e-commerce <br /> development
              </h1>
            </div>
            <div className="home712 flex flex-wrap justify-center">
              <DevCard
                heading={tag}
                classji="the"
                imgSrc={"/static/images/a10.png"}
                headin={headings}
              />
              <DevCard
                headin={headings1}
                heading={tag1}
                imgSrc={"/static/images/a11.png"}
              />
              <DevCard
                headin={headings2}
                heading={tag2}
                imgSrc={"/static/images/a12.png"}
              />
              <DevCard
                headin={headings3}
                heading={tag3}
                imgSrc={"/static/images/a13.png"}
              />
              {/* <DevCard heading={tag4} imgSrc={"/static/images/a14.png"} /> */}
            </div>
          </div>
        </div>
        <div className="home8 mb-20 px-8">
          <h2 className="text-center">Our esteemed clients</h2>
          <p className="text-center">Pleasure to work with</p>
          <div className="home8-img client-slider px-4 w-full">
            <Splide
              //  className="w-full"
              options={{
                perPage: perPage2,
                autoplay: true,
                pauseOnHover: true,
                type: "loop",
                interval: 1000,
                drag: true,
                perMove: 1,
              }}
            >
              <SplideSlide>
                {/* <img className="chetri" src="/static/images/a15.png" alt="" /> */}
                <img className="joki1" src={joki1} alt="" />
              </SplideSlide>
              <SplideSlide>
                {/* <img className="chetri1" src="/static/images/a17.png" alt="" /> */}
                <img className="joki2" src={joki2} alt="" />
              </SplideSlide>
              <SplideSlide>
                {/* <img className="chetri2" src="/static/images/a16.png" alt="" /> */}
                <img className="joki3" src={joki3} alt="" />
              </SplideSlide>
              <SplideSlide>
                {/* <img className="chetri" src="/static/images/a15.png" alt="" /> */}
                <img className="joki4" src={joki4} alt="" />
              </SplideSlide>
              <SplideSlide>
                {/* <img className="chetri1" src="/static/images/a17.png" alt="" /> */}
                <img className="joki5" src={joki5} alt="" />
              </SplideSlide>
              <SplideSlide>
                {/* <img className="chetri2" src="/static/images/a16.png" alt="" /> */}
                <img className="joki6" src={joki6} alt="" />
              </SplideSlide>
              <SplideSlide>
                <img className="joki7" src={joki7} alt="" />
                {/* <img className="chetri" src="/static/images/a15.png" alt="" /> */}
              </SplideSlide>
              <SplideSlide>
                <img className="joki8" src={sync} alt="" />
                {/* <img className="chetri1" src="/static/images/a17.png" alt="" /> */}
              </SplideSlide>
              <SplideSlide>
                <img className="joki8" src={joki8} alt="" />
                {/* <img className="chetri2" src="/static/images/a16.png" alt="" /> */}
              </SplideSlide>
              <SplideSlide>
                <img className="joki7" src={joki7} alt="" />
                {/* <img className="chetri2" src="/static/images/a16.png" alt="" /> */}
              </SplideSlide>
              {/* <SplideSlide>
                <img className="chetri" src="/static/images/a15.png" alt="" />
              </SplideSlide>
              <SplideSlide>
                <img className="chetri1" src="/static/images/a17.png" alt="" />
              </SplideSlide>
              <SplideSlide>
                <img className="chetri2" src="/static/images/a16.png" alt="" />
              </SplideSlide> */}
            </Splide>
          </div>
        </div>
        <div className="testimonials">
          <div className="first-testimonials">
            <h3 className="tas">testimonials</h3>
            <h2 className="happy">OUR HAPPY CLIENT SAY</h2>
            <div className="testi-sec">
              <h2>
                4.7<span>/5</span>
              </h2>
              <div className="star flex items-center">
                <div className="first-star flex items-center ">
                  <img src={star} alt="star" />
                  <img className="ml-1" src={star} alt="" />
                  <img className="ml-1" src={star} alt="star" />
                  <img className="ml-1" src={star} alt="" />
                  <img className="ml-1" src={star1} alt="" />
                </div>
                <div className="second-star ml-3">
                  <p>200 reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second-testimonials">
            <div className="excellent">
              <h2>EXCELLENT WORK</h2>
              <div className="ex mt-1">
                <div className="first-ex flex">
                  <img src={star} alt="" />
                  <img className="ml-1" src={star} alt="" />
                  <img className="ml-1" src={star} alt="" />
                  <img className="ml-1" src={star} alt="" />
                  <img className="ml-1" src={star} alt="" />
                </div>
                <div className="second-ex">
                  <p>Sandeep Sharma</p>
                </div>
                <div className="third-ex">
                  <p>United States. 03/23/2023</p>
                </div>
              </div>
              <div className="para-ex">
                <p>
                  {/* Lorem ipsum is simply dummy text of the printing & Typesetting
                  industry. lorem ipsum has been the industry’s standard dummy
                  text ever since the 1500s, an unknown printer took a gallery. */}
                  We are overjoyed to have discovered Kushel Digi! They were a
                  fantastic partner in the web development process and had a
                  clear understanding of our goals and process. Team Kushel Digi
                  was proactive with discussions and updates throughout the
                  development process and found a means to effectively complete
                  our project in record time. I not only heartily suggest the
                  agency, but we will also keep working with them in the future.
                </p>
              </div>
            </div>

            <div className="excellent mt-3">
              <h2>EXCELLENT WORK</h2>
              <div className="ex mt-1">
                <div className="first-ex flex">
                  <img src={star} alt="" />
                  <img className="ml-1" src={star} alt="" />
                  <img className="ml-1" src={star} alt="" />
                  <img className="ml-1" src={star} alt="" />
                  <img className="ml-1" src={star} alt="" />
                </div>
                <div className="second-ex">
                  <p>Sandeep Sharma</p>
                </div>
                <div className="third-ex">
                  <p>United States. 03/23/2023</p>
                </div>
              </div>
              <div className="para-ex">
                <p>
                 
                  We are overjoyed to have discovered Kushel Digi! They were a
                  fantastic partner in the web development process and had a
                  clear understanding of our goals and process. Team Kushel Digi
                  was proactive with discussions and updates throughout the
                  development process and found a means to effectively complete
                  our project in record time. I not only heartily suggest the
                  agency, but we will also keep working with them in the future.
                </p>
              </div>
            </div>
            <div className="read-sec">
             <a target="_blank" href="https://www.google.com/search?q=kushel+digi+solutions&rlz=1C1JZEV_enIN1061IN1061&oq=kus&aqs=chrome.1.69i60j69i59j69i57j46i433i512j0i131i433i512j0i512j69i65j69i60.2813j0j7&sourceid=chrome&ie=UTF-8"><p>Read All 40 Reviews</p></a>
            </div>
          </div>
        </div>
        <div className="home-year">
          <div className="home-year1 flex items-center">
            <div className="home-year11">
              <h1>
                Over <span>5 Years</span> of
              </h1>
              <h1> Experience in the Online </h1>
              <h1>Design Industry</h1>
            </div>
            <div className="home-year12 flex items-center justify-center flex-wrap">
              <div className="home-year121">
                <img src="/static/images/b17.png" alt="" />
              </div>
              <div className="home-year121">
                <img src="/static/images/b18.png" alt="" />
              </div>
              <div className="home-year121">
                <img src="/static/images/b19.png" alt="" />
              </div>
              <div className="home-year121">
                <img src="/static/images/b20.png" alt="" />
              </div>
              <div className="home-year121">
                <img src="/static/images/b21.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="home9 mb-12">
          <div className="home91 flex px-20">
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
              <div className="home9121 font-semibold w-fit">See All FAQs</div>
            </div>
          </div>
        </div>
        <ContactForm1 />
      </div>
    </>
  );
};

export default Home;
