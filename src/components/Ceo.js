import React from 'react';
import pick from "../images/pick.png";
import pick1 from "../images/pick1.png";
import angrag from "../images/angrag.png";
import zinda from "../images/zinda.png";
import zinda1 from "../images/zinda1.png";
import zinda2 from "../images/zinda2.png";
// import azib from '../images/azib.png';
import arrow4 from "../images/arrow4.png";
import conjun from '../images/conjun.png';
import { NavLink } from "react-router-dom";
import trackent1 from "../images/trackent1.png";
import soling1 from '../images/soling1.jpg';
import soling2 from '../images/soling2.jpg';
import soling3 from '../images/soling3.jpg';
import soling4 from '../images/soling4.png';
import soling5 from '../images/soling5.jpg';
import soling6 from '../images/soling6.jpg';
import wheels from '../images/wheels.png';
const Ceo = () => {
  return (
    <>
          <div className="ser-main">
        <div className="kick-back kick-back1">
          <div className="kick-sect">
            <img src={wheels} alt="kick" />
          </div>
        </div>
        <div className="kick-start">
          <div className="kick-first">
            <div className="kick-box">
              <h4>CEO WHEELS</h4>
              <p className="kick-para">
                Where ninja-like expertise meets high-quality solutions.
              </p>
              <div className="kick-sard flex items-center mt-10">
                <div className="kick-fard">
                  <img className="pick" src={pick} alt="" />
                  <h5>Industry</h5>
                  <p>E-commerce</p>
                </div>
                <div className="kick-fard">
                  <img className="pick1" src={pick1} alt="" />
                  <h5>Country</h5>
                  <p>USA</p>
                </div>
              </div>
              <div className="visit-kart mt-10">
                <p>Visit Website</p>
               <a href="https://solenoid-ninja.com/" target='_blank'><p className="kinza">www.solenoid-ninja.com</p></a>
              </div>
            </div>
          </div>
          <div className="kick-second relative">
            <img className=" absolute about161" src={angrag} alt="" />
            <img className=" relative z-10" src={soling4} alt="" />
          </div>
        </div>

        <div className="service-kick">
          <h2>Services Provided</h2>
          <div className="service-kick-flex">
            <div className="service-kick-sect">
              <img src={zinda} alt="" />
              <p>UX/UI Website Design</p>
            </div>
            <div className="service-kick-sect">
              <img src={zinda1} alt="" />
              <p>Website Development</p>
            </div>
            <div className="service-kick-sect">
              <img src={zinda2} alt="" />
              <p>QA & Website Testing</p>
            </div>
          </div>
        </div>

        <div className="back-story">
          <div className="step1-back">
            <div className="step-backs1">
              <h3 className="nila">01</h3>
              <h3>BACKSTORY</h3>
            </div>
            <div className="step-backs2">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since.
              </p>
              <p className="mt-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <img className="stepback solenoid-stepback" src={soling6} alt="stepback" />
            <img className="stepback1 solenoid-stepback1" src={soling5} alt="stepback1" />
          </div>
        </div>

        <div className="challenge-story">
          <div className="challenge-story1">
            <h3 className="nila">02</h3>
            <h3>
              Challenges <br /> & Solutions
            </h3>
          </div>
          <div className="challenge-story2 flex">
            <div className="challenge-box">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="challenge-box ml-3">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="challenge-ziz">
          <div className="challenge-ziz-sect">
            <img src={wheels} alt="track" />
          </div>
        </div>

        <div className="azib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">04</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since.
                </p>
                <p className="mt-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
                <div className="azib-tech">
                    <h3>Technologies Used</h3>
                    <img className="conjun" src={conjun} alt="" />
                </div>
              </div>
            </div>

              <div className="azib-images flex items-center justify-center">
                  <img className='soling1' src={soling1} alt="" />
                  <img className='soling1' src={soling2} alt="" />
                  <img className='soling1' src={soling3} alt="" />
              </div>
          </div>
        </div>

        <div className="client-apperication">
          <h2>Client Appreciation</h2>
          <p>
            “Thank you Affle team for all your hardwork, patience and continuous
            support. The app is getting positive reviews and we hope to continue
            to improve and evolve the app. Looking forward to our continued
            growth.”
          </p>
          <h4>Matt Reeder</h4>
        </div>

        <div className="req">
          <div className="req-sect">
            <h2>
              Would You Like To Talk To <br /> About Your Project?
            </h2>
            <p>
              {" "}
              You can send us the details of your project, and a member of our
              team will contact you shortly.
            </p>
          <NavLink to="/contact"><button>
              Request A Call{" "}
              <img width={13} className=" inline ml-2" src={arrow4} alt="" />
            </button></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ceo