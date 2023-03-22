import React from "react";
import digital from "../images/digital.png";
import digital2 from "../images/digital2.png";
import quality from "../images/quality.png";
import cart from "../images/cart.png";
import pro from "../images/process.png";
import hath from "../images/hath.png";
import check from "../images/check.png";
import staf from '../images/staf.png';
import market from '../images/market.png';
const StafArgu = () => {
  return (
    <>
      <div className="staff-back">
        <div className="staff-sect">
          <h2>
            STAFF <br /> <span>AUGMENTATION</span>
          </h2>
          <p>
            Expect the best technology and UI/UX design resources on demand from
            us.
          </p>
        </div>
      </div>
      <div className="staff-cap">
        <h2 className="sta">STAFF AUGMENTATION</h2>
        <h3 className="cab">CAPABILITIES</h3>
        <div className="card">
          <div className="box">
            <div className="sard">
              <h3>
                Digital Product <br /> <span>Engineering</span>
              </h3>
              <img src={digital} alt="digital" />
            </div>
            <div className="staff-para">
              <p>UI/UX | Frontend | API | Web | Mobile | Dev</p>
            </div>
          </div>
          <div className="box">
            <div className="sard">
              <h3>
                Digital <br /> <span>Transformation</span>{" "}
              </h3>
              <img src={digital2} alt="digital2" />
            </div>
            <div className="staff-para">
              <p>
                SEO | SEM | Creative & Design | Media | Email & Marketing
                Automation
              </p>
            </div>
          </div>
          <div className="box">
            <div className="sard">
              <h3>
                Quality <br /> <span>Engineering</span>
              </h3>
              <img src={quality} alt="quality" />
            </div>
            <div className="staff-para">
              <p>UI/UX | Frontend | API | Web | Mobile | Dev</p>
            </div>
          </div>
          <div className="box">
            <div className="sard">
              <h3 className="e-com">E-Commerce</h3>
              <img src={cart} alt="cart" />
            </div>
            <div className="staff-para">
              <p>UI/UX | Frontend | API Web | Mobile | Dev</p>
            </div>
          </div>
        </div>
      </div>

      <div className="staff-process">
        <h3 className="aug">STAFF AUGMENTATION</h3>
        <h2 className="pro">THE PROCESS</h2>
        <div className="process-img">
          <img src={pro} alt="process" />
        </div>
      </div>

      <div className="benifits">
        <div className="benifits1">
          <h2>
            BENEFITS OF <br /> <span>STAFF AUGMENTATION</span>
          </h2>
          <div className="list mt-7">
            <div className="check">
              <img src={check} alt="" />
              <p>Industry-leading junior, mid-level, and senior talent</p>
            </div>
            <div className="check mt-5">
              <img src={check} alt="" />
              <p>Motivated, productive, and talented resources</p>
            </div>
            <div className="check mt-5">
              <img src={check} alt="" />
              <p>Availability, reliability, and quality guaranteed</p>
            </div>
            <div className="check mt-5">
              <img src={check} alt="" />
              <p>
                Team members fully versed in using the Agile Scrum methodology
              </p>
            </div>
            <div className="check mt-5">
              <img src={check} alt="" />
              <p>Paying only for what you need</p>
            </div>
            <div className="check mt-5">
              <img src={check} alt="" />
              <p>Better control over existing staff</p>
            </div>
          </div>
        </div>
        <div className="benifits2">
          <img src={hath} alt="hath" />
        </div>
      </div>

      <div className="staff-service">
        <div className="staff-service1">
          <h2>
            Staff Augmentation <br /> <span>Services</span>
          </h2>
          <p>
            No wasted interviews - talk to the best qualified candidates only
          </p>
          <button>Send Your Request <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="staff-service-second">
           <img src={staf} alt="staf" />
        </div>
      </div>

      <div className="staff-market">
          <div className="staff-market1">
          <h2>STAFF AUGMENTATION <br /> <span>MARKETS</span></h2>
             <div className="list mt-7">
            <div className="check">
              <img src={check} alt="" />
              <p>Currently working with various clients in the US and Canada</p>
            </div>
            <div className="check mt-5">
              <img src={check} alt="" />
              <p>Team working across multiple time zones.</p>
            </div>
          </div>
          </div>
          <div className="staff-market2">
              <img src={market} alt="market" />
          </div>
      </div>
    </>
  );
};

export default StafArgu;
