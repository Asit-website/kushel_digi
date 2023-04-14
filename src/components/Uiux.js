import React from "react";
import website from "../images/website.png";
import phonewith from '../images/phonwith.png'
import arrow from '../images/arrow.png'
import processda from '../images/processda.png';
const Uiux = () => {
  return (
    <>
      <div className="ser-main">
        <div className="ser1 serji serji1 serji2">
          <div className="ser11 px-24 pt-12 pb-4 flex items-center justify-between">
            <div className="ser111">
              <h1 className="seru">Services </h1>
              <h1 className="blue">UI/UX Design</h1>
              {/* <p className="ac">Solution based Web development services to skyrocket the growth</p> */}
              {/* <p>Faster | Better | Easier</p> */}
            </div>
            <div className="ser112">
              <img src={website} alt="" />
            </div>
          </div>
        </div>

        <div className="experiencedji">
          <div className="first-experiencedji">
            <h2>
              Get Experienced UI/UX Design <br />
              Services!
            </h2>
            <div className="para-exp">
                <p className="mt-2">Engaging, intuitive, and functional UI and UX designs that help your website be unique and stand out from the crowd.</p>
                <p className="mt-3">Delivering exceptional UI/UX design services is at the core of everything we do here at kushel digi. Our skilled designers understand that a successful website must engage and delight visitors. Whether you need a new website design or help optimizing the UI/UX of an existing website, our experienced UI/UX designers have the skills and expertise to deliver results.</p>
            </div>
            <button>Learn More <img width={14} className="inline ml-2" src={arrow} alt="" /></button>
          </div>
          <div className="second-experiencedji">
              <img src={phonewith} alt="aly" />
          </div>
        </div>

        <div className="uiux-process">
            <h2>Our UI/UX Process</h2>
            <p>We Take A User-Centric Approach To UI/UX Design, Which Means That We Put The Needs Of Your Users First. Here Are The Significant Steps Of Our UI/UX Design Process:</p>
            <div>
              <img src={processda} alt="process" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Uiux;
