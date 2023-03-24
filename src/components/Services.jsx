import React from "react";
import solution from "../images/solution.png";
import ecomm from "../images/ecomm.png";
import PortCard from "./Cards/PortCard";
import a9 from "../images/a9.png";
import pads from "../images/pads.png";
import bds from "../images/bds.png";
import jones from "../images/jones.png";
import ContactForm from "./common/ContactForm";

const Services = () => {
  return (
    <>
      <div className="ser-main">
        <div className="ser1">
          <div className="ser11 px-24 pt-12 pb-4 flex items-center">
            <div className="ser111">
              <h1 className="">Services</h1>
              <h1 className="blue">Ecommerce Solutions</h1>
            </div>
            <div className="ser112">
              <img src="/static/images/b1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="ser2">
          <div className="ser21">
            <div className="home412 flex justify-center items-center">
              <div className="home4121">
                <img
                  className=" block m-auto"
                  src="/static/images/a7.png"
                  alt=""
                />
                <p>Shopify</p>
              </div>
              <div className="home4121">
                <img
                  className=" block m-auto"
                  src="/static/images/a5.png"
                  alt=""
                />
                <p>Woo Commerce</p>
              </div>
              <div className="home4121">
                <img
                  className=" block m-auto"
                  src="/static/images/a6.png"
                  alt=""
                />
                <p>Big Commerce</p>
              </div>
              <div className="home4121">
                <img
                  className=" block m-auto"
                  src="/static/images/a8.png"
                  alt=""
                />
                <p>Magento</p>
              </div>
              <div className="home4121">
                <img
                  className="block m-auto"
                  src="/static/images/b3.png"
                  alt=""
                />
                <p>Wordpress</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ecommerce-solution">
          <img className="solution" src={solution} alt="solution" />
          <div className="ecomm">
            <div className="first-ecom">
              <button className="serv">ECOMMERCE SOLUTIONS AND SERVICES</button>
              <h1 className="mt-8">Top Ecommerce Business</h1>
              <h1> Solution Providers</h1>
              <p>
                Ecommerce solutions at Designs Raptor encompass every technical
                assistance ensuring that our clients attain higher traffic and
                sales. Our Online Ecommerce Solutions can be customized to meet
                the unique demands and various industry verticals of our clients
                from across the globe.
              </p>
              <button className="com">
                Contact Us <i className="fa-regular fa-arrow-right"></i>
              </button>
            </div>
            <div className="second-ecom">
              <img src={ecomm} alt="ecom" />
            </div>
          </div>
        </div>

        <div className="home5  pb-20   poty">
          <div className="home51 px-24 py-10">
            <div className="home511 text-center mb-8">
              <h1 className="font-bold mb-2 mt-4">OUR PORTFOLIO</h1>
              <p>View Our Custom Online Ecommerce Solutions And Get Amazed</p>
            </div>
            <div className="home512 flex flex-wrap justify-center mt-14">
              <PortCard pads={a9} />
              <PortCard pads={pads} />
              <PortCard pads={bds} />
              <PortCard pads={jones} />
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

        <div className="segment">
          <h2>Segment We Serve</h2>
          <p className="mt-3.5">
            We stand out as the best Web Development Company among others with our
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
