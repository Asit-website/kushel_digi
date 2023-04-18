import React from "react";

import VectorArrow from "../digimarket assets/Vector.svg";
// import KickProduction1 from '../digimarket assets/0109_Kick-Eez-Production 1.png'
// import KickProduction2 from '../digimarket assets/0109_Kick-Eez-Production 1 (1).png'
// import KickProduction3 from '../digimarket assets/0109_Kick-Eez-Production 1 (2).png'
// import KickProduction4 from '../digimarket assets/0109_Kick-Eez-Production 2.png'

// import Close1 from '../digimarket assets/close 1.svg'
// import Group72322 from '../digimarket assets/Group 72322.svg'
// import Group72323 from '../digimarket assets/Group 72323.svg'
// import Group72327 from '../digimarket assets/Group 72327.svg'

// import check1 from '../digimarket assets/check 1.svg'
// import check4 from '../digimarket assets/check (1) 4.svg'

import Rectangle17725 from "../digimarket assets/Rectangle 17725.png";
import Rectangle17726 from "../digimarket assets/Rectangle 17726.png";
import Ellipse37 from "../digimarket assets/Ellipse 37.png";

import Group72437 from "../digimarket assets/Group 72437.svg";
import Speed1 from "../digimarket assets/speed 1.svg";
import ContentWriting1 from "../digimarket assets/content-writing 1.svg";
import Search1 from "../digimarket assets/search 1.svg";
import SaveMoney1 from "../digimarket assets/save-money 1.svg";
import Test1 from "../digimarket assets/test 1.svg";

// import Group72246 from '../digimarket assets/Group 72246.svg'
import Arrow from "../digimarket assets/arrow.svg";
// import Vector1 from '../digimarket assets/Vector (1).png'
// import Vector2 from '../digimarket assets/Vector (2).png'
// import Vector3 from '../digimarket assets/Vector (3).png'
// import Vector from '../digimarket assets/Vector.png'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ContactForm1 from "./common/ContactForm1";

function DigitalMarketing() {
  return (
    <>
      <div className="ser-main digi-ser-main">
        <div className="digitalMarketing">
          {/* // <!-- Hero Section --> */}
          <section className="heroSection">
            <div className="hero-container">
              <div className="hero-content">
                <h1>
                  Digital Marketing{" "}
                  <strong>
                    Agency that <br /> will
                  </strong>{" "}
                  skyrocket your sales
                </h1>
                <hr className="blueLine" />
                <p>
                  Measurable, results-driven digital <br />
                  marketing services.
                </p>
                {/* <!-- input for email --> */}
                <div className="input">
                  <input
                    type="email"
                    placeholder="Enter your business e-mail"
                  />
                  <button>
                    SCHEDULE YOUR FREE STRATEGY SESSION{" "}
                    <img src={VectorArrow} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div class="ourtalent">
              <div class="ourtalent-text">
                <div class="ourtalent-text__heading">
                  <h1>
                    Full-Service Digital Marketing Agency in india. Best Place
                    for Digital Advertisement.{" "}
                  </h1>
                </div>
                <div class="ourtalent-text__para">
                  <p>
                    Delivering exceptional UI/UX design services is at the core
                    of everything we do here at kushel digi. Our skilled
                    designers understand that a successful website must engage
                    and delight visitors. Whether you need a new website design
                    or help optimizing the UI/UX of an existing website, our
                    experienced UI/UX designers have the skills and expertise to
                    deliver results.
                  </p>
                </div>
                <div className="ourtalent-text__button">
                  <button>
                    Learn More &nbsp; <img src={VectorArrow} alt="" />
                  </button>
                </div>
              </div>
              <div class="ourtalent-image">
                <img src={Rectangle17725} alt="not found" />
                <img src={Rectangle17726} alt="" />
                <img src={Ellipse37} alt="" />
              </div>
            </div>
          </section>
          {/* <!-- End of Hero Section --> */}

          {/* <!-- Package Section --> */}
          <section>
            <div className="packages digi-packages">
              <div className="package-types text-center">
                <h3 className="font-bold">Why Does Your Businesses Need</h3>
                <h3 className="font-bold">Digital Marketing Services</h3>
                <p>
                  The businesses need digital marketing services for a wider
                  audience reach, cost-effectiveness, data-driven approach,
                  increased competitiveness, measurable results, and improved
                  customer experience.{" "}
                </p>
              </div>
              <div className="package-cards w-full">
                <img className="w-full" src="/static/images/d1.png" alt="" />
              </div>
            </div>
          </section>
          {/* <!-- End of Package Section --> */}

          {/* <!-- Package Section --> */}
          <section>
            <div className="packages digi-packages digi-packages1">
              <div className="package-types text-center">
                <h3 className="font-bold">
                  What Kushel digi As Digital Marketing
                </h3>
                <h3 className="font-bold">Agency Can Do for Your Business?</h3>
                <p>
                  We take great pride in offering the best and high-quality
                  digital marketing services. our clients have seen significant
                  growth in their business through our online marketing
                  strategies. you don’t just have to take our word for it you
                  can watch the complete testimonials regarding their experience
                  working with us.
                </p>
              </div>
              {/* <div className="package-cards w-full">
                            <img className='w-full' src="/static/images/d1.png" alt="" />
                        </div> */}
            </div>
          </section>
          {/* <!-- End of Package Section --> */}

          {/* <!-- Portfolio Section --> */}
          <section>
            <div class="process">
              <h1 className="font-bold">
                Our <span>R.O.C.K.E.T</span> process
              </h1>
              <div class="process-container">
                <div class="process-container__card">
                  <div class="process-container__card__heading">
                    <h3>Research</h3>
                    <img src={Group72437} alt="" />
                  </div>
                  <div class="process-container__card__text">
                    <p>
                      When we kick-off an SEO campaign, your dedicated SEO
                      consultant begins by doing a deep dive into your company,
                      your website, your competitors and your industry. <br />
                      <br />- In-depth Competitor Analysis <br />
                      <br />- Site & Server Analysis <br />
                      <br />- Analyze 200+ On-Site SEO Factors
                      <br />
                      <br />
                      We put on our detective hats and use data to put together
                      a roadmap for your website’s SEO.
                    </p>
                  </div>
                </div>
                <div class="process-container__card">
                  <div class="process-container__card__heading">
                    <h3>Optimize</h3>
                    <img src={Speed1} alt="" />
                  </div>
                  <div class="process-container__card__text">
                    <p>
                      From IA to UX, we make hundreds of changes both big and
                      small to your website to help Google better understand who
                      you are.
                      <br />
                      <br />- Attention-grabbing titles & meta descriptions{" "}
                      <br />
                      <br />- Improve usability <br />
                      <br />- Update Site Architecture
                      <br />
                      <br />
                      With a dedicated web development team, our SEO company
                      will also take care of your technical SEO, helping you
                      increase the usability, speed, and functionality of your
                      website.
                    </p>
                  </div>
                </div>
                <div class="process-container__card">
                  <div class="process-container__card__heading">
                    <h3>Content</h3>
                    <img src={ContentWriting1} alt="" />
                  </div>
                  <div class="process-container__card__text">
                    <p>
                      Your website content is what users count on to help
                      educate and guide them through the purchasing funnel.{" "}
                      <br />
                      <br />- Website SEO Copy That Converts <br />
                      <br />- Longform Copy That Educates
                      <br />
                      <br />- Informative Blog Posts That Intrigue
                      <br />
                      <br />
                      Whether discussing your company’s unique selling point or
                      providing educational content, we’ll provide topic
                      suggestions, professional copy, and quality content to
                      propel not only your site’s ranking but also your
                      company’s growth.
                    </p>
                  </div>
                </div>
                <div class="process-container__card">
                  <div class="process-container__card__heading">
                    <h3>Keywords</h3>
                    <img src={Search1} alt="" />
                  </div>
                  <div class="process-container__card__text">
                    <p>
                      Our meticulous keyword research process is at the heart of
                      our SEO services. The specific keywords we target help us
                      define our audience and drive valuable traffic to your
                      site.
                      <br />
                      <br />- Competitor Keyword Analysis <br />
                      <br />- Keyword Mapping Report <br />
                      <br />- Advanced Rank Tracking
                      <br />
                      <br />
                      With relevant traffic heading to your website, your
                      company can secure fresh leads, high-value sales, and
                      more.
                    </p>
                  </div>
                </div>
                <div class="process-container__card">
                  <div class="process-container__card__heading">
                    <h3>Earned media & links</h3>
                    <img src={SaveMoney1} alt="" />
                  </div>
                  <div class="process-container__card__text">
                    <p>
                      Earned media and off-page SEO are crucial services for
                      getting your site in front of your target audience. <br />
                      <br />- Content Promotion <br />
                      <br />- Relevant Mentions From Blogs/Press
                      <br />
                      <br />- Viral Marketing Campaigns
                      <br />
                      <br />
                      Our dedicated content marketing team will create new
                      opportunities for website growth by helping your company
                      build links (and relationships) with trusted experts in
                      your industry.
                    </p>
                  </div>
                </div>
                <div class="process-container__card">
                  <div class="process-container__card__heading">
                    <h3>Testing</h3>
                    <img src={Test1} alt="" />
                  </div>
                  <div class="process-container__card__text">
                    <p>
                      Getting relevant, qualified search traffic to your site is
                      just the beginning of our SEO optimization services.{" "}
                      <br />
                      <br />- Conversion Path Analysis <br />
                      <br />- Calls-to-action Improvements
                      <br />
                      <br />- Continual Improvements Via ROI Tracking
                      <br />
                      <br />
                      We believe in testing everything and making continual
                      improvements to your SEO marketing strategy so your
                      business can continue to drive revenue from SEO.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Contact Us Section --> */}
          <section>
          <div className="improved">
             <h2>Improved Sales. Quick ROI. <br /> Faster Growth.</h2>
             <p>15-day free trial. No credit card required.</p>
             <div className="improved-btn flex items-center justify-center">
                <button className="sign">SIGN UP FOR FREE</button>
                <button className="plans">SEE PLANS AND PRICING</button>
             </div>
          </div>
            <div className="bookus">
              <div className="bookus-heading">
                <h2>Get free Consultation</h2>
                <p>
                  Book an appoinment with our team through google meet / Zoom
                  call
                </p>
              </div>
              <div className="bookus-button">
                <button>
                  Schedule a meeting &nbsp; <img src={Arrow} alt="" />
                </button>
              </div>
            </div>

            <div className="connectus">
              <p>DO YOU WANT TO RANK YOUR WEBSITE</p>
              <button>LET’S CONNECT</button>
            </div>

            <div className="home9  home278 home568">
              <div className="home91 flex px-24">
                <div className="home911 text-center">
                  <h2 className="font-bold text-gray-700">JUST THE FAQs</h2>
                </div>
                <div className="home912">
                  <Accordion allowZeroExpanded>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>What is SEO?</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How does SEO work?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          In ad velit in ex nostrud dolore cupidatat consectetur
                          ea in ut nostrud velit in irure cillum tempor laboris
                          sed adipisicing eu esse duis nulla non.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What are SEO services?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          In ad velit in ex nostrud dolore cupidatat consectetur
                          ea in ut nostrud velit in irure cillum tempor laboris
                          sed adipisicing eu esse duis nulla non.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How much do SEO services cost?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          In ad velit in ex nostrud dolore cupidatat consectetur
                          ea in ut nostrud velit in irure cillum tempor laboris
                          sed adipisicing eu esse duis nulla non.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How do I know which type of SEO service I need?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          In ad velit in ex nostrud dolore cupidatat consectetur
                          ea in ut nostrud velit in irure cillum tempor laboris
                          sed adipisicing eu esse duis nulla non.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
            <ContactForm1/>
            {/* <div className="contactus">
              <div className="contactus-container__left">
                <div className="contactus-heading">
                  <h2>Let’s Discuss Your Project Today</h2>
                  <p>
                    Please fill in the form and let’s chat understand how we can
                    help you better
                  </p>
                </div>
                <div className="contactus-form mt-8">
                  <form action="">
                    <div className="contactus-form__input">
                      <input type="text" placeholder="Name*" />
                      <input type="text" placeholder="Email Address*" />
                    </div>
                    <div className="contactus-form__input">
                      <input type="email" placeholder="Phone number*" />
                      <select name="" id="">
                        <option value="">Service Required</option>
                        <option value="">Web</option>
                        <option value="">App</option>
                      </select>
                    </div>

                    <div className="contactus-form__input">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div className="contactus-form__input">
                      <button>
                        Submit{" "}
                        <img
                          width={14}
                          className=" inline ml-1"
                          src={Arrow}
                          alt=""
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div> */}
            
          </section>
        </div>
      </div>
    </>
  );
}

export default DigitalMarketing;
