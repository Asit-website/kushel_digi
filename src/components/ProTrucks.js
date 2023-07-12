import React from "react";
import pick from "../images/pick.png";
import pick1 from "../images/pick1.png";
import angrag from "../images/angrag.png";
import zinda from "../images/zinda.png";
import zinda1 from "../images/zinda1.png";
import zinda2 from "../images/zinda2.png";
// import azib from '../images/azib.png';
import arrow4 from "../images/arrow4.png";
import conjun from "../images/conjun.png";
import { NavLink } from "react-router-dom";
import trackent from "../images/trackent.png";
import laptop from "../images/laptop.png";
import pt2 from "../images/pt2.jpg";
import pt3 from "../images/pt3.jpg";
import pt4 from "../images/pt4.jpg";
import pt5 from "../images/pt5.jpg";
import pt6 from "../images/pt6.jpg";
import banning from "../images/banning.jpg";
const ProTrucks = () => {
  return (
    <>
      <div className="ser-main">
        <div className="kick-back kick-back2">
          <div className="kick-sect">
            <img src={trackent} alt="trackent" />
          </div>
        </div>
        <div className="kick-start">
          <div className="kick-first">
            <div className="kick-box">
              <h4>PRO TRUCKS</h4>
              <p className="kick-para">
                The company works extensively on trucks and jeeps. They install
                every imaginable type of customization, including lighting, lift
                kits, wheels, lighting, electronics, and performance
                components.The ownership is gradually being transferred to Luke,
                who manages the day-to-day operations.
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
                <a href="https://www.protrucksandcars.net/" target="_blank">
                  <p className="kinza">www.protrucksandcars.net</p>
                </a>
              </div>
            </div>
          </div>
          <div className="kick-second relative">
          <div className="about165">
            <img className=" absolute about161 animate__animated animate__pulse animate__infinite" src={angrag} alt="" />
            </div>
            <img className=" relative z-10" src={laptop} alt="" />
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
                Luke's parents founded this business as an aftermarket
                performance automobile store. The business has had outstanding
                success and wants to transition to an online store. Their annual
                revenue in a relatively small shop is between $3 and $4 million.
              </p>
              {/* <p className="mt-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p> */}
            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <img
              className="stepback solenoid-stepback1"
              src={pt2}
              alt="stepback"
            />
            <img
              className="stepback1 solenoid-stepback1"
              src={pt3}
              alt="stepback1"
            />
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
            <div className="challenge-box challenge-box2">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  {/* <div className="nilust"></div> */}
                  <p>
                    The business,which has had amazing success, wants to switch
                    to an internet store.Luke is highly dedicated to the
                    endeavour, and he has already employed a social media
                    specialist to assist in building his brand online.
                  </p>
                </div>
                {/* <div className="challenge-list1">
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
                </div> */}
              </div>
            </div>
            <div className="challenge-box challenge-box3 ml-3 challenge-box2">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  {/* <div className="nilust"></div> */}
                  <p>
                    -We will construct a store with a unique design. -All the
                    data and pricing information will be imported to the store
                    using the Data Here to There plugin. Categories, products,
                    images, prices, and specifications will be automatically set
                    up. -The Launch Pack, a new offering from MadFish, will be
                    implemented. It includes:
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>Training for BigCommerce</p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>Competitive analysis</p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>SEO keyword analysis</p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>20 SEO-focused category descriptions</p>
                </div>
                <div className="challenge-list1">
                  {/* <div className="nilust"></div> */}
                  <p>
                    -Install an email marketing program -Utilize Google
                    Analytics -Utilize Google Search Console -Design an email
                    template with keywords for marketing Create an SEO project
                    using our tools for SE Ranking. -Create a plan for managing
                    the food in the marketplace. -Conduct reviews at 30, 60, and
                    90-day intervals. Throughout the initial year of operation,
                    perform reviews on a quarterly basis. -For client
                    engagement, email marketing, marketing automation, chat
                    bots, and customer support chat, we will additionally set up
                    Zoho CRM Plus. This was our first user of it, and it has the
                    potential to generate a lot of future money.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="goals-statgy">
            <h2>Goasl and Strategies</h2>
            <ul >
              <li>Make it simpler for customers to contact the company.</li>
              <li>Reduce customer misunderstandings regarding returns and exchanges, particularly with the choice of replacement products.</li>
              <li>Boost the efficacy and efficiency of client service.</li>
            </ul>
        </div>


        {/* <div className="challenge-ziz">
          <div className="challenge-ziz-sect">
            <img src={trackent} alt="trackent" />
          </div>
        </div> */}

        <div className="bg-video-wrap">
    <video src="/static/images/proty.mp4" loop muted autoPlay>
    </video>
    <div className="overlay">
    </div>
    <img className="kini" src={trackent} alt="" />
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
                The customer-business interaction has been enhanced through the implementation of Zoho CRM Plus and the website optimization. Customers now have the convenience of completing the onboarding form, which significantly contributes to the improvement of the business.

                </p>
                {/* <p className="mt-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p> */}
                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img className="conjun" src={conjun} alt="" />
                </div>
              </div>
            </div>
            <div className="azib-images flex items-center justify-center">
              <img src={pt4} alt="pt4" />
              <img src={pt5} alt="pt5" />
              <img src={pt6} alt="pt6" />
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
          <h4>Sandeep Sharma</h4>
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
            <NavLink to="/contact">
              <button>
                Request A Call{" "}
                <img width={13} className=" inline ml-2" src={arrow4} alt="" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProTrucks;
