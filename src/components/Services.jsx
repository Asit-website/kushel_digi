import React,{useState,useEffect} from "react";
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
const Services = () => {
  const [perPage, setPerPage] = useState(5);
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
  return (
    <>
      <div className="ser-main">
        <div className="ser1">
          <div className="ser11 px-24 pt-12 pb-4 flex items-center">
            <div className="ser111">
              <h1 className="seru">Services</h1>
              <h1 className="blue">Ecommerce Solutions</h1>
              <p className="ac">Website & Application Development Services</p>
            </div>
            <div className="ser112">
              <img src="/static/images/b1.png" alt="" />
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
        <div className="ecommerce-solution">
          <marquee behavior="scroll" direction="right" scrollamount="20">
            <img className="solution" src={solution} alt="solution" />
          </marquee>

          <div className="ecomm">
            <div className="first-ecom">
              {/* <button className="serv">ECOMMERCE SOLUTIONS AND SERVICES</button> */}
              <h1 className="mt-8">Top Ecommerce Business</h1>
              <h1> Solution Providers</h1>
              <p>
                {/* Ecommerce solutions at Designs Raptor encompass every technical
                assistance ensuring that our clients attain higher traffic and
                sales. Our Online Ecommerce Solutions can be customized to meet
                the unique demands and various industry verticals of our clients
                from across the globe. */}
                We continuously align our operations with ever-changing, tech-savvy, and cross-channel consumers. Our e-commerce solutions make things available at the right place, at the right time, and at the right price.

              </p>
              <NavLink to="/contact">
                <button className="com">
                  Contact Us <img className="tih" src={arrow1} alt="" />
                </button>
              </NavLink>
            </div>
            <div className="second-ecom">
              <img src={ecomm} alt="ecom" />
            </div>
          </div>
        </div>

        <div className="unified">
          <h2 className="unified-heading">
            Our unified commerce offering is designed with a
          </h2>
          <h3 className="unified-heading1">#Focus On Experience</h3>
          <img src={focus} alt="focus" />
        </div>

        <div className="strategy">
          <h2>
            ECommerce Web Development <br /> Strategy
          </h2>
          <img src={ecommerce1} alt="ecommerce1" />
        </div>

        <div className="tasking">
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
        </div>

        <div className="bff">
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
        </div>

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

        <div className="home5     poty poty1">
          <div className="home51 px-24 ">
            <div className="home511 text-center ">
              <h1 className="font-bold mb-2 mt-4">OUR PORTFOLIO</h1>
              <p className="view">
                View Our Custom Online Ecommerce Solutions And Get Amazed
              </p>
            </div>
            <div className="home512 flex flex-wrap justify-center mt-14">
              <PortCard heading={heading} pads={a9} />
              <PortCard heading={heading1} pads={pads} />
              <PortCard heading={heading2} pads={bds} />
              <PortCard heading={heading3} pads={jones} />
            </div>
          </div>
          <div className="home52 w-full text-center">
            <button className="btn btn1 m-auto btn3">
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
            </button>
          </div>
        </div>
        <Certified />
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

        <div className="segment">
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
        </div>
        <ContactForm/>
      </div>
    </>
  );
};

export default Services;
