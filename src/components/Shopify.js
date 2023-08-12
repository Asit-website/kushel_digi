import React, { useState } from "react";
// import arrow4 from "../images/arrow4.png";
import imgast from "../images/imgast.png";
import lyt from "../images/lyt.png";
import appConfig from "../images/appConfig.png";
import appinstall from "../images/appinstall.png";
import customMar from "../images/customMar.png";
import customTheme from "../images/cutsomtheme.png";
import thirdParty from "../images/thirdParty.png";
// import teen1 from "../images/teen1.png";
import teen2 from "../images/teen2.png";
import teen3 from "../images/teen3.png";
import teen4 from "../images/teen4.png";
import toning1 from "../images/toning1.png";
import toning2 from "../images/toning2.png";
import toning3 from "../images/toning3.png";
import toning4 from "../images/toning4.png";
import laps from "../images/laps.png";
import laptop2 from "../images/laptop2.png";
import laptop3 from "../images/laptop3.png";
import laptop4 from "../images/laptop4.png";
import laptop5 from "../images/laptop5.png";
import singlr from "../images/singlr.png";
import kiking from "../images/kiking.png";
import circle55 from "../images/circle55.png";
import testiEllipse from "../images/testiEllipse.png";
import testiEllipse1 from "../images/tsetiEllipse1.png";
import tinih from "../images/tinih.png";
import skknt from '../images/skknt.png';
import kiktas from '../images/kiktas.png';
import hinghing from '../images/hingingh.png';
import greenish from '../images/greenish.png';
// import tilli from '../images/tilli.png';
import skinniuy from '../images/skinniu.png';
import laras1 from '../images/laras1.png';
import laras2 from '../images/laras2.png';
import laras3 from '../images/laras3.png';
import laras4 from '../images/laras4.png';
import ikk1 from '../images/icon-1.png';
import ikk2 from '../images/icon-2.png';
import ikk3 from '../images/icon-3.png';
import ikk4 from '../images/icon-4.png';
import ikk5 from '../images/icon-5.png';
import ikk6 from '../images/icon-6.png';
import ikk7 from '../images/icon-7.png';
import ikk8 from '../images/icon-8.png';
import ikk9 from '../images/icon-9.png';
import ikk10 from '../images/icon-10.png';
import ikk11 from '../images/icon-11.png';
import ikk12 from '../images/icon-12.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import soin1 from "../images/1ax.png";
import soin2 from "../images/2ax.png";
import soin3 from "../images/3ax.png";
import soin4 from "../images/4ax.png";
import soin5 from "../images/5ax.png";
import soin6 from "../images/6ax.png";
import setui from "../images/setui.png";
import ContactForm1 from "./common/ContactForm1";
import nuting from '../images/nutig.png';
import skyo from '../images/skyo.png';
import shopifu from '../images/shopfiu.png';
import seeting1 from '../images/seeting1.png';
import seeting2 from '../images/seeting2.png';
import seeting3 from '../images/seeting3.png';
import seeting4 from '../images/seeting4.png';
import seeting5 from '../images/seeting5.png';
import seeting6 from '../images/seeting6.png';
import '../components/css/app5.css';
const Shopify = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  return (
    <>
      <div className="ser-main">
        <div className="bigCommerce-back shopify-back">
          <div className="bigCommerce-back1 shopify-back1">
            <h2 className="">
              Shopify Development <br /> Services
            </h2>
            <p>
              We provide high quality Shopify Development services to provide
              you best Ecommerce solution for your shopping cart.
            </p>
            <button className="lets_talking">
              LET’S TALK
            </button>
          </div>
          <div className="bigCommerce-back2 shopify-back2">
            <img className="bigcompt" src={shopifu} alt="androids" />
          </div>
        </div>

        <div className="affordable_shopify">
          <div className="affordable_shopify1">
            <h2>
              Affordable <span>Shopify</span> Development Solutions
            </h2>
            <p>
              We are one of the Best Shopify Development companies providing
              customized eCommerce Website Development services over the globe.
              We are having experience and a skilled in-house team of Shopify
              eCommerce Developers. As a Top Shopify Development Company, we are
              having expertise in Designing and Development of custom eCommerce
              solutions as per your business requirements. At Next Big
              Technology, we always follow the best coding standards to come up
              with a secure and responsive Shopify-based eCommerce Website.
            </p>
            {/* <div className="goal-shopify">
              <p>
                Discuss your goals with us{" "}
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3698_54)">
                    <path
                      d="M15.0811 9.14268C14.8304 9.14268 14.6785 9.14268 14.5342 9.14268C10.1051 9.14268 5.6761 9.14268 1.24707 9.14268C0.35823 9.14268 -0.203945 8.41126 0.0695453 7.61888C0.236678 7.15411 0.578542 6.9103 1.06475 6.85697C1.20149 6.84173 1.34583 6.85697 1.48258 6.85697C5.85083 6.85697 10.2115 6.85697 14.5797 6.85697C14.7165 6.85697 14.8532 6.85697 15.0735 6.85697C14.9368 6.70459 14.8532 6.60554 14.7621 6.51411C13.2883 5.03602 11.8144 3.5503 10.333 2.07221C9.99118 1.72935 9.78606 1.3484 9.9228 0.845542C10.1431 0.0531607 11.0548 -0.25922 11.7081 0.236018C11.8296 0.327446 11.936 0.441732 12.0424 0.548399C14.2303 2.74268 16.4106 4.92935 18.5985 7.11602C19.1303 7.64935 19.1455 8.33507 18.6137 8.86078C16.3878 11.0932 14.1543 13.3255 11.9284 15.5579C11.5865 15.9008 11.1991 16.0913 10.6977 15.9389C9.9228 15.7027 9.62652 14.8113 10.1127 14.1636C10.2039 14.0417 10.3178 13.9351 10.4242 13.8284C11.8676 12.3808 13.3035 10.9408 14.7469 9.49316C14.838 9.40173 14.9292 9.30268 15.0811 9.14268Z"
                      fill="#21698E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3698_54">
                      <rect width="19" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </p>
            </div> */}
          </div>
          {/* <div className="affordable-shopify2">
            <img src={imgast} alt="imgast" />
          </div> */}
          <div className="magento_service2">
            <div className="greenish1">
              <img src={greenish} alt="greenish1" />
            </div>
            <img className="admis admis22" src={hinghing} alt="admis" />
          </div>
        </div>

        {/* <div className="top-shopify">
          <h2>HOW TO HIRE TOP DEVELOPERS WITH KUSHEL DIGI SOLUTIONS?</h2>
          <p>
            Hire Top Class Developers on different basis as per your
            requirements and budget.
          </p>
          <button>Let’s Talk</button>
        </div> */}

        {/* <div className="shopify-scalability">
          <div className="shopify-scalability1">
            <h2>
              Best <span>scalability</span> features for Shopify stores
            </h2>
            <div className="scale-cards">
              <div className="scale-card">
                <div className="scale-box">
                  <div className="scale-box1">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="15"
                        cy="15"
                        r="14.5"
                        fill="#085881"
                        stroke="#1667FF"
                      />
                      <g clip-path="url(#clip0_3730_87)">
                        <path
                          d="M12.883 18.3169C13.6659 17.5134 14.4181 16.7455 15.166 15.9777C17.0205 14.0803 18.8793 12.1875 20.7337 10.2902C20.9349 10.0848 21.1448 9.94641 21.4466 10.0134C21.9583 10.1294 22.1682 10.7277 21.8358 11.1428C21.7877 11.2009 21.7352 11.25 21.6828 11.3035C18.9492 14.0937 16.2201 16.8839 13.4866 19.6696C13.0667 20.0982 12.7212 20.0982 12.3057 19.6741C10.9499 18.2902 9.59403 16.9062 8.2382 15.5223C7.97579 15.2544 7.9233 14.9419 8.08075 14.6518C8.23383 14.3705 8.53999 14.2187 8.84177 14.3125C8.9861 14.3571 9.13043 14.4598 9.23977 14.5669C10.4032 15.7455 11.5622 16.933 12.7212 18.116C12.7737 18.1785 12.8174 18.2366 12.883 18.3169Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3730_87">
                          <rect
                            width="14"
                            height="10"
                            fill="white"
                            transform="translate(8 10)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="scale-box2">
                    <p>Save Time and Efforts</p>
                  </div>
                </div>
                <div className="scale-box scale-box4">
                  <div className="scale-box1">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="15"
                        cy="15"
                        r="14.5"
                        fill="#085881"
                        stroke="#1667FF"
                      />
                      <g clip-path="url(#clip0_3730_87)">
                        <path
                          d="M12.883 18.3169C13.6659 17.5134 14.4181 16.7455 15.166 15.9777C17.0205 14.0803 18.8793 12.1875 20.7337 10.2902C20.9349 10.0848 21.1448 9.94641 21.4466 10.0134C21.9583 10.1294 22.1682 10.7277 21.8358 11.1428C21.7877 11.2009 21.7352 11.25 21.6828 11.3035C18.9492 14.0937 16.2201 16.8839 13.4866 19.6696C13.0667 20.0982 12.7212 20.0982 12.3057 19.6741C10.9499 18.2902 9.59403 16.9062 8.2382 15.5223C7.97579 15.2544 7.9233 14.9419 8.08075 14.6518C8.23383 14.3705 8.53999 14.2187 8.84177 14.3125C8.9861 14.3571 9.13043 14.4598 9.23977 14.5669C10.4032 15.7455 11.5622 16.933 12.7212 18.116C12.7737 18.1785 12.8174 18.2366 12.883 18.3169Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3730_87">
                          <rect
                            width="14"
                            height="10"
                            fill="white"
                            transform="translate(8 10)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="scale-box2">
                    <p>Improve Data Errors</p>
                  </div>
                </div>
              </div>
              <div className="scale-card mt-8">
                <div className="scale-box">
                  <div className="scale-box1">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="15"
                        cy="15"
                        r="14.5"
                        fill="#085881"
                        stroke="#1667FF"
                      />
                      <g clip-path="url(#clip0_3730_87)">
                        <path
                          d="M12.883 18.3169C13.6659 17.5134 14.4181 16.7455 15.166 15.9777C17.0205 14.0803 18.8793 12.1875 20.7337 10.2902C20.9349 10.0848 21.1448 9.94641 21.4466 10.0134C21.9583 10.1294 22.1682 10.7277 21.8358 11.1428C21.7877 11.2009 21.7352 11.25 21.6828 11.3035C18.9492 14.0937 16.2201 16.8839 13.4866 19.6696C13.0667 20.0982 12.7212 20.0982 12.3057 19.6741C10.9499 18.2902 9.59403 16.9062 8.2382 15.5223C7.97579 15.2544 7.9233 14.9419 8.08075 14.6518C8.23383 14.3705 8.53999 14.2187 8.84177 14.3125C8.9861 14.3571 9.13043 14.4598 9.23977 14.5669C10.4032 15.7455 11.5622 16.933 12.7212 18.116C12.7737 18.1785 12.8174 18.2366 12.883 18.3169Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3730_87">
                          <rect
                            width="14"
                            height="10"
                            fill="white"
                            transform="translate(8 10)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="scale-box2">
                    <p>Better Business Insights</p>
                  </div>
                </div>
                <div className="scale-box scale-box4">
                  <div className="scale-box1">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="15"
                        cy="15"
                        r="14.5"
                        fill="#085881"
                        stroke="#1667FF"
                      />
                      <g clip-path="url(#clip0_3730_87)">
                        <path
                          d="M12.883 18.3169C13.6659 17.5134 14.4181 16.7455 15.166 15.9777C17.0205 14.0803 18.8793 12.1875 20.7337 10.2902C20.9349 10.0848 21.1448 9.94641 21.4466 10.0134C21.9583 10.1294 22.1682 10.7277 21.8358 11.1428C21.7877 11.2009 21.7352 11.25 21.6828 11.3035C18.9492 14.0937 16.2201 16.8839 13.4866 19.6696C13.0667 20.0982 12.7212 20.0982 12.3057 19.6741C10.9499 18.2902 9.59403 16.9062 8.2382 15.5223C7.97579 15.2544 7.9233 14.9419 8.08075 14.6518C8.23383 14.3705 8.53999 14.2187 8.84177 14.3125C8.9861 14.3571 9.13043 14.4598 9.23977 14.5669C10.4032 15.7455 11.5622 16.933 12.7212 18.116C12.7737 18.1785 12.8174 18.2366 12.883 18.3169Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3730_87">
                          <rect
                            width="14"
                            height="10"
                            fill="white"
                            transform="translate(8 10)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="scale-box2">
                    <p>Simplicity and Efficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shopify-scalability2">
            <img src={lyt} alt="lyt" />
          </div>
        </div> */}


        <div className="why_chose_shopify">
          <h2>Why choose our <span>Shopify</span>  development company</h2>
          <p className="php_specializied">
            Kushel Digi is a PHP-specialized software house with over 20 mid-to-senior PHP Developers. We are trusted by enterprises of all sizes to do just about anything your business needs to grow and create a reliable, secure, maintainable, and feature-ready application. Our experts solve many of the pain points you need to touch on when developing an app with PHP, from handling development lifecycle and design, to building, shipping releases as well as support and maintenance.
          </p>
          <div className="proffessional_shopify_cards">
            <div className="proffessional_shopify_card">
              <div className="proffessional_shopify_box">
                <div className="team_box">
                  <img src={laras1} alt="" />
                  <div className="team_para">
                    <h4>Professional team</h4>
                    <hr />
                    <p>
                      Kushel Digi is a team with comprehensive expertise in
                      building custom software for various platforms and
                      domains. We treat every project with attention to
                      technical details and help our clients achieve their
                      business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="proffessional_shopify_box tr7">
                <div className="team_box">
                  <img src={laras2} alt="" />
                  <div className="team_para">
                    <h4>Considerable Shopify expertise</h4>
                    <hr />
                    <p>
                      Over the years, we’ve gained considerable expertise in
                      building custom web and mobile apps for the e-commerce
                      industry, headless development, and development with major
                      platforms like BigCommerce, Magento, and all kinds of
                      Shopify apps: public and custom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="proffessional_shopify_card">
              <div className="proffessional_shopify_box">
                <div className="team_box">
                  <img className="teen3" src={laras3} alt="" />
                  <div className="team_para">
                    <h4>Business-focused mindset</h4>
                    <hr />
                    <p>
                      Our clients are our source of gaining unique expertise,
                      new skills, and inspiration to move forward. Working on
                      new projects, we foster collaboration with customers to
                      help them improve their business strategies and achieve
                      their business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="proffessional_shopify_box tr7">
                <div className="team_box">
                  <img src={laras4} alt="" />
                  <div className="team_para">
                    <h4>Focus on end users</h4>
                    <hr />
                    <p>
                      We strive to build projects that bring value not only to
                      their creators but to end users as well. To build projects
                      with high impact, we precisely analyze the target audience
                      and their needs, conduct user research, and run various
                      hypotheses to find valuable insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="paper2">
          <h2>Our <span>Shopify</span>  App Development Services</h2>
          <p className="shop_top">
            Shopify apps connect third-party tools and processes to your
            ecommerce store, allowing you to complete a task or increase your
            workflow efficiency. They also allow you to add or customize the
            features of your store.
          </p>
          <div className="paperbox">
            <div
              className="first1"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <img
                src={hovered ? setui : seeting1}
                className="startup startup11"
                alt="img"
              />
              <h3>Custom Feature Additions</h3>
              <h5>
                Need to add a Unique feature to your store? our team can develop
                a shopify app that gives you the custom functionality you need
                to delight your customers and boost conversions.
              </h5>
            </div>
            <div
              className="first1"
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <img
                src={hovered2 ? soin2 : seeting2}
                className="startup startup11"
                alt="img"
              />
              <h3>Third-party Integrations </h3>
              <h5>
                Connect the tools that work best for you. Integrate your ERP,
                CRM, Shipping, accounting, payment and others tools with a
                custom Shopify app that we build and tailor for you.
              </h5>
            </div>
            <div
              className="first1"
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
            >
              <img
                src={hovered3 ? soin3 : seeting3}
                className="startup startup11"
                alt="img"
              />
              <h3>App Installation</h3>
              <h5>
                Our team will help you install and configure the custom apps you
                need, verifying changes and taking backups so your store data is
                always safe and secure.
              </h5>
            </div>
            <div
              className="first1"
              onMouseEnter={() => setHovered4(true)}
              onMouseLeave={() => setHovered4(false)}
            >
              <img
                src={hovered4 ? soin4 : seeting4}
                className="startup startup12"
                alt="img"
              />
              <h3>App Configuration</h3>
              <h5>
                We can also help you configure and optimize any existing apps
                you have installed, so that you can get the best performance out
                of your ecommerce store.
              </h5>
            </div>
            <div
              className="first1"
              onMouseEnter={() => setHovered5(true)}
              onMouseLeave={() => setHovered5(false)}
            >
              <img
                src={hovered5 ? soin5 : seeting5}
                className="startup startup11"
                alt="img"
              />
              <h3>Custom Theme Apps</h3>
              <h5>
                Want to make tweaks to your shopify theme? we can build a custom
                theme app to help you add custom features, edit your shopify
                themes, and import or export setting
              </h5>
            </div>
            <div
              className="first1"
              onMouseEnter={() => setHovered6(true)}
              onMouseLeave={() => setHovered6(false)}
            >
              <img
                src={hovered6 ? soin6 : seeting6}
                className="startup startup11"
                alt="img"
              />
              <h3>Custom Marketing Apps</h3>
              <h5>
                We can also build custom Shopify apps to help you connect your
                marketing tech stack, segment audiences, automate A/B tests, and
                get real-time reports
              </h5>
            </div>
          </div>
        </div>


        <div className="main-box">
          <div className="box111">
            <h1 className="heading-1">
              Key Benefits Of <samp className="blue">Shopify </samp> Development
            </h1>
          </div>
          <div className="box-2">
            <div className="content">
              <div className="content-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2"> SIMPLE AND EASY INSTALLATION</h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk1} alt="" className="icon1" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    Incredibly easy to use and configure, even for a non-technical
                    person.
                  </p>
                </div>
              </div>
              <div className="content-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2"> HOSTED SERVER</h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk2} alt="" className="icon2" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    Shopify provides a secure &amp; affordable Hosted server for your
                    eCommerce store, making it easy to manage business.
                  </p>
                </div>
              </div>
              <div className="content-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2">
                        {" "}
                        ATTRACTIVE &amp; MOBILE FRIENDLY UI
                      </h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk3} alt="" className="icon3" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    Shopify provides a secure &amp; affordable Hosted server for your
                    eCommerce store, making it easy to manage business.
                  </p>
                </div>
              </div>
              <div className="content-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2"> RICH-FEATURED</h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk4} alt="" className="icon4" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    Boost your sales success and increase your company's productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-3">
            <div className="content-2">
              <div className="content-2-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2"> EASY NAVIGATION</h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk5} alt="" className="icon5" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    Provides easy navigation to keep your potential users interested.
                  </p>
                </div>
              </div>
              <div className="content-2-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2"> MULTI-STORE FACILITIES</h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk6} alt="" className="icon6" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    Manages multiple storefronts for various brands from a single place.
                  </p>
                </div>
              </div>
              <div className="content-2-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2"> SHOPIFY APPS</h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk7} alt="" className="icon7" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    Shopify Apps Store has 4,000+ certified apps making it easier to
                    customize your store.
                  </p>
                </div>
              </div>
              <div className="content-2-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2">SECURED ADMIN PANEL</h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk8} alt="" className="icon8" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    Implements well-established security standards and safety factors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-4">
            <div className="content-3">
              <div className="content-3-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2">VARIED PRODUCTS CATALOGS</h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk9} alt="" className="icon9" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    Makes it easy to manage a variety of product catalogs.
                  </p>
                </div>
              </div>
              <div className="content-3-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2">THIRD-PARTY INTEGRATION</h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk10} alt="" className="icon10" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    Expands the scope of custom integrations available to an online
                    business.
                  </p>
                </div>
              </div>
              <div className="content-3-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2">SEO-FRIENDLY</h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk11} alt="" className="icon11" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    Better SEO functionality and execution to draw more traffic.
                  </p>
                </div>
              </div>
              <div className="content-3-1">
                <div className="inner-box">
                  <div className="inner-box-1">
                    <div className="box-content-1">
                      <h1 className="heading-2">API INTEGRATION</h1>
                    </div>
                    <div className="box-content-2">
                      <img src={ikk12} alt="" className="icon12" />
                    </div>
                  </div>
                  <hr className="hr-1" />
                  <p className="pra-1">
                    API framework allows you to integrate web services and Third-party
                    CRM, ERP &amp; POS systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="php_portfolio">
          <div className="php_port">
            <h2 className="our_php">Our <span>Shopify</span>  Web Development <span>Portfolio</span> </h2>
          </div>
        </div>


        <div className="gting">
          <Splide
            className="w-full"
            aria-label="Our Services"
            options={{
              perPage: 1,
              perMove: 1,
              autoplay: true,
              pauseOnHover: true,
              type: "loop",
              interval: 2200,
              drag: true,
            }}
          >
            <SplideSlide>
              <div className="kickta_big kickta_bigs">
                <div className="kickta_big1 kickta_bigst1">
                  <img src={nuting} alt="kikma" />
                  <div className="headst_big">
                    <h2>Pain Relieving</h2>
                    <h2>apparel</h2>
                    {/* <h2>recoil pads</h2> */}
                  </div>
                  <div className="kickma-arrow">
                    <p>View Website</p>
                    <img src={kiktas} alt="kiktas" />
                  </div>
                </div>
                {/* <div className="kickta_big2">
            <div className="kakiji">
            <img src={kinu} alt="kinu" />
            </div>
          </div> */}
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="kickta_big kickta_bigs1">
                <div className="kickta_big1 kickta_bigst2">
                  <img src={skknt} alt="kikma" />
                  <div className="headst_big">
                    <h2>summer-ready <br /> skin</h2>
                    {/* <p>Find your look for your iPhone 14</p> */}
                    {/* <h2>recoil pads</h2> */}
                  </div>
                  <div className="kickma-arrow">
                    <p>View Website</p>
                    <img src={kiktas} alt="kiktas" />
                  </div>
                </div>
                {/* <div className="kickta_big2">
            <div className="kakiji">
            <img src={kinu} alt="kinu" />
            </div>
          </div> */}
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="kickta_big kickta_bigs2">
                <div className="kickta_big1 kickta_bigst3">
                  <img className="trryr" src={skinniuy} alt="kikma" />
                  <div className="headst_big">
                    <h2>The classic matte</h2>
                    <h2>palette</h2>
                    <p className="mt-2">Your everyday palette</p>
                    {/* <h2>recoil pads</h2> */}
                  </div>
                  <div className="kickma-arrow">
                    <p>View Website</p>
                    <img src={kiktas} alt="kiktas" />
                  </div>
                </div>
                {/* <div className="kickta_big2">
            <div className="kakiji">
            <img src={kinu} alt="kinu" />
            </div>
          </div> */}
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="kickta_big kickta_bigs3">
                <div className="kickta_big1 kickta_bigst4">
                  <img className="trryr" src={skyo} alt="kikma" />
                  <div className="headst_big">
                    <h2>Discover your</h2>
                    <h2>better</h2>
                    <p className="mt-2">With a daily routine customized to your wellness goals</p>
                    {/* <h2>recoil pads</h2> */}
                  </div>
                  <div className="kickma-arrow">
                    <p>View Website</p>
                    <img src={kiktas} alt="kiktas" />
                  </div>
                </div>
                {/* <div className="kickta_big2">
            <div className="kakiji">
            <img src={kinu} alt="kinu" />
            </div>
          </div> */}
              </div>
            </SplideSlide>

          </Splide>
        </div>


        <div className="shopify_benifits">
          <h2>Benefits of Custom Shopify Application Development</h2>
          <div className="shopify_benifits_card">
            <div className="shopify_benifits_box">
              <img src={toning1} alt="tomning" />
              <h4>Feature-Rich App</h4>
            </div>
            <div className="shopify_benifits_box">
              <img src={toning2} alt="tomning" />
              <h4>Workflow Management</h4>
            </div>
            <div className="shopify_benifits_box">
              <img className="toning3" src={toning3} alt="tomning" />
              <h4>
                Higher Conversation <br /> Rates
              </h4>
            </div>
            <div className="shopify_benifits_box">
              <img className="toning4" src={toning4} alt="tomning" />
              <h4>
                Security And <br /> Reliability
              </h4>
            </div>
          </div>
          <button>Develop A Shopify App</button>
        </div>

        <div className="shopify-work">
          <h2>How It Works?</h2>
          <div className="shpoify_work_card">
            <div className="shpoify_work_box">
              <div className="golt">
                <div className="goal_one">
                  <p>1</p>
                </div>
                <h3>Discovery</h3>
              </div>
              <img src={laps} alt="laps" />
            </div>
            <div className="shpoify_work_box">
              <div className="golt">
                <div className="goal_one">
                  <p>2</p>
                </div>
                <h3>Design</h3>
              </div>
              <img src={laptop2} alt="laps" />
            </div>
            <div className="shpoify_work_box">
              <div className="golt">
                <div className="goal_one">
                  <p>3</p>
                </div>
                <h3>Development</h3>
              </div>
              <img src={laptop3} alt="laps" />
            </div>
            <div className="shpoify_work_box">
              <div className="golt">
                <div className="goal_one">
                  <p>4</p>
                </div>
                <h3>Testing</h3>
              </div>
              <img src={laptop4} alt="laps" />
            </div>
            <div className="shpoify_work_box">
              <div className="golt">
                <div className="goal_one">
                  <p>5</p>
                </div>
                <h3>Delivery</h3>
              </div>
              <img src={laptop5} alt="laps" />
            </div>
          </div>
        </div>

        {/* <div className="work_speaks">
          <h2 className="testi_p">Our Work Speaks</h2>
          <p className="testi_s">
            Our Work Speaks Kushel Digi provide top notch Web and Mobile App
            Solutions, we develop high quality and innovative Web and Mobile
            Applications which can be easily stand out in competitive market.
          </p>
          <div className="work_app">
            <div className="work_app1">
              <div className="app_store">
                <p>APP</p>
              </div>
              <div className="app_store_para">
                <h2>
                  About Mobile App <br /> Development
                </h2>
                <p>
                  We build high quality Android and IOS mobile applications
                  using latest app development technologies. We design
                  innovative and unique mobile apps which help you to grow and
                  standout your business. Our developed mobile applications are
                  top trending and high performing in all environments.
                </p>

                <p className="sgy">
                  {" "}
                  <a className="more_details_app" href="">
                    View More Details
                  </a>
                </p>
              </div>
            </div>
            <div className="work_app2">
              <img src={singlr} alt="singlr" />
            </div>
          </div>
        </div> */}

        {/* <div className="about_treating">
          <div className="about_website">
            <div className="about-website1">
              <div className="cirles">
                <img
                  className="animate__animated animate__pulse animate__infinite"
                  src={circle55}
                  alt=""
                />
              </div>
              <img className="kiking" src={kiking} alt="" />
            </div>
            <div className="about-website2">
              <div className="wett">
                <p>Website</p>
              </div>
              <h2>About Website Development</h2>
              <p className="testi8">
                We build top notch and quality websites, our developed websites
                are secure, fully responsive, speed optimized and seo friendly.
                We design creative and eye catching websites, which help you to
                build online presence for your business and stand tall in
                competitive market.
              </p>
              <p className="sgy">
                {" "}
                <a className="more_details_app" href="">
                  View More Details
                </a>
              </p>
            </div>
          </div>
          <div className="abouse_btn">
            <button>Show More</button>
          </div>
        </div> */}
        {/* <div className="client_testimonials">
          <h2>Client Testimonials</h2>
          <p className="words_ji">
            Words that describe our quality and keep us motivated...
          </p>
          <Splide
            className=" w-full"
            aria-label="Our Services"
            options={{
              perPage: 1,
              perMove: 1,
              autoplay: true,
              pauseOnHover: true,
              type: "loop",
              interval: 4000,
              drag: true,
            }}
          >
            <SplideSlide>
              <div className="clients_testi">
                <div className="client_testi1">
                  <div className="surgical">
                    <img
                      className="animate__animated animate__pulse animate__infinite"
                      src={testiEllipse}
                      alt="testi"
                    />
                  </div>
                  <img className="tinih" src={tinih} alt="tinih" />
                  <div className="surgical1">
                    <img
                      className="testiEllipse1"
                      src={testiEllipse1}
                      alt="test"
                    />
                  </div>
                </div>
                <div className="client_testi2">
                  <h4>Fred</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="clients_testi">
                <div className="client_testi1">
                  <div className="surgical">
                    <img
                      className="animate__animated animate__pulse animate__infinite"
                      src={testiEllipse}
                      alt="testi"
                    />
                  </div>
                  <img className="tinih" src={tinih} alt="tinih" />
                  <div className="surgical1">
                    <img
                      className="testiEllipse1"
                      src={testiEllipse1}
                      alt="test"
                    />
                  </div>
                </div>
                <div className="client_testi2">
                  <h4>Fred</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div> */}
        <ContactForm1 />
        <div className="home9 home967  home278">
          <div className="home91 flex px-24">
            <div className="home911 text-center">
              <h2 className="font-bold text-gray-700">JUST THE FAQs</h2>
            </div>
            <div className="home912">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is the difference between Shopify app development and
                      Shopify mobile app development?
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
                      Can I turn my Shopify store into an app?
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
                      What other Shopify services do you provide?
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
                      How much time does it take to create a Shopify app?
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
                      How long does it typically take to develop a custom
                      Shopify app?
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
      </div>
    </>
  );
};

export default Shopify;
