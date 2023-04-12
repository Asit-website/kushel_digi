import React from "react";
import website from "../images/website.png";
import reactjs1 from "../images/reactjs.png";
import htmls from "../images/htmls.png";
import phpos from "../images/phpos.png";
import nodejs1 from "../images/nodejs1.png";
import words from "../images/words.png";
import vuejs1 from "../images/vuejs1.png";
import delivery from "../images/delivery.png";
import mobileJi from "../images/mobilieji.png";
import developments from "../images/developments.png";
import docu from "../images/docu.png";
import setting from "../images/setting.png";
import sign from "../images/sign.png";
import admi from "../images/admi.png";
import admi1 from "../images/admi1.png";
import admi2 from "../images/admi2.png";
import track from "../images/track.png";
const WebsiteDev = () => {
  return (
    <>
      <div className="ser-main">
        <div className="ser1 serji serji1">
          <div className="ser11 px-24 pt-12 pb-4 flex items-center justify-between">
            <div className="ser111">
              <h1 className="">Services </h1>
              <h1 className="blue">Website Design & Development</h1>
              <p className="ac">Accelerate your business with an app</p>
              <p>Faster | Better | Easier</p>
            </div>
            <div className="ser112">
              <img src={website} alt="" />
            </div>
          </div>
        </div>
        <div className="ser2 ser-vertical">
          <div className="ser21 ser23">
            <div className="home412 flex justify-center items-center">
              <div className="home4121">
                <img className=" block m-auto" src={reactjs1} alt="" />
                <p>REACT JS</p>
              </div>
              <div className="home4121">
                <img className=" block m-auto" src={htmls} alt="" />
                <p>HTML 5</p>
              </div>
              <div className="w-full sis  home4121">
                <img className="block m-auto phpos" src={phpos} alt="" />
                {/* <p>PHP</p> */}
              </div>
              <div className="w-full sis1  home4121">
                <img className=" block m-auto nodejs1" src={nodejs1} alt="" />
                {/* <p>Node</p> */}
              </div>
              <div className="home4121">
                <img className="block m-auto" src={words} alt="" />
                <p>Wordpress</p>
              </div>
              <div className="home4121">
                <img className="block m-auto" src={vuejs1} alt="" />
                <p>PYTHON</p>
              </div>
            </div>
          </div>
        </div>
        <div className="developments">
          <img className="dev1" src={developments} alt="developments" />
          <div className="development">
            <div className="development1">
              <h3>
                Web Development Solutions <br /> To Grow The Business
              </h3>
              <p className="knowrs">
                Known for our world-class web development services, Kushel digi
                is the best website development company for businesses looking
                to grow their online presence and reach new audiences.
              </p>
              <p className="knowers1">
                We provide top-tier custom website development and application
                development services, allowing you to create the best possible
                online experience for your customers. Our team of skilled
                developers is thoroughly experienced in all aspects of website
                design and development, and we work closely with our clients to
                ensure that each project meets their unique business needs.
              </p>
            </div>
            <div className="development2">
              <img src={mobileJi} alt="mobileji" />
            </div>
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
          <p className="reason">These are some of the reasons why we are the best website development company for your project:</p>
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
              Our team of experienced developers and designers are experts in their field and can create custom solutions to meet your specific needs and requirements.
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
              We use the latest technology and tools to create websites that are not only visually appealing but also functional and easy to use.
              </p>
            </div>
            <div className="business-box business-box3 relative text-center cursor-pointer">
              <div className="business-card-img bus-card-img1">
                <img src={admi2} alt="" />
              </div>
              <h5>Affordable Solutions</h5>
              <p>
              We use the latest technology and tools to create websites that are not only visually appealing but also functional and easy to use.
              </p>
            </div>
          </div>
          </div>
        </div>

        <div className="benifits">
           
        </div>
      </div>
    </>
  );
};

export default WebsiteDev;
