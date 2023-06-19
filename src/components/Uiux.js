import React, { useState, useEffect } from "react";
import website from "../images/website.png";
import phonewith from "../images/phonwith.png";
import arrow from "../images/arrow.png";
// import processda from "../images/processda.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import full from "../images/full.png";
import full1 from "../images/full1.png";
import full2 from "../images/full2.png";
import full3 from "../images/full3.png";
import pathji from "../images/pathji.png";
import PortCard from "./Cards/PortCard";
import a9 from "../images/a9.png";
import pads from "../images/pads.png";
import bds from "../images/bds.png";
import jones from "../images/jones.png";
import bhojan from "../images/bhojan.png";
import arrow1 from "../images/arrow1.png";
import arrow4 from "../images/arrow4.png";
import ustu from "../images/ustu.png";
import uiy from "../images/uyi.png";
import stand from "../images/stand.png";
import howux from "../images/howux.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ContactForm from "./common/ContactForm";
const Uiux = () => {
  let heading = "www.2ndAmendment.com";
  let heading1 = "www.kickeez.com";
  let heading2 = "www.protrucks.com";
  let heading3 = "www.jonesbuilt.com";
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    if (window.matchMedia("(max-width: 1100px)").matches) {
      setPerPage(1);
    }
  }, []);

  return (
    <>
      <div className="ser-main">
        <div className="ser1 serji  serji2">
          <div className="ser11 px-24 pt-12 pb-4 flex items-center justify-between">
            <div className="ser111">
              <h1 className="seru">Services </h1>
              <h1 className="blue">UI/UX Design</h1>
              {/* <p className="ac">Solution based Web development services to skyrocket the growth</p> */}
              {/* <p>Faster | Better | Easier</p> */}
            </div>
            <div className="ser112">
              <img src={uiy} alt="uiy" />
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
              <p className="mt-2">
                {/* Engaging, intuitive, and functional UI and UX designs that help
                your website be unique and stand out from the crowd. */}
                We have been able to streamline and improve the interaction
                between the target customers of our clients' businesses and
                their online presence thanks to our expertise in user experience
                design (UX).
                <p className="mt-3">
                  {/* Delivering exceptional UI/UX design services is at the core of
                everything we do here at kushel digi. Our skilled designers
                understand that a successful website must engage and delight
                visitors. Whether you need a new website design or help
                optimizing the UI/UX of an existing website, our experienced
                UI/UX designers have the skills and expertise to deliver
                results. */}
                  Our designs provide a distinctive digital experience, whether
                  they are used in a website, mobile application, email
                  campaign, social media campaign, or even an ad banner. Our UX
                  has made it possible for our companies to build appealing
                  online presences, which has increased brand value and sparked
                  customer loyalty.
                </p>
              </p>
            </div>
            <button>
              Learn More{" "}
              <img width={14} className="inline ml-2" src={arrow} alt="" />
            </button>
          </div>
          <div className="second-experiencedji">
            <img src={ustu} alt="aly" />
          </div>
        </div>

        <div className="uiux-process">
          <h2>Our UI/UX Process</h2>
          <p>
            We Take A User-Centric Approach To UI/UX Design, Which Means That We
            Put The Needs Of Your Users First. Here Are The Significant Steps Of
            Our UI/UX Design Process:
          </p>
          <div>
            <img src={stand} alt="process" />
          </div>
        </div>

        <div className="perfect-choice">
          <h2>
            Why Is kushel digi A Perfect Choice <br /> For UI/UX Design
            Services?
          </h2>
          <p className="perf-p">
            With years of experience in the field and a team of talented UI/UX
            designers, we are the perfect choice for all your UI/UX design
            needs. Look at some of our core strengths and benefits below to see
            why TheJointApps is the right choice for you:
          </p>
          <div className="mt-20">
            <Splide
              aria-label="Our Services"
              options={{
                perPage,
                perMove: 1,
                autoplay: true,
                pauseOnHover: true,
                type: "loop",
                interval: 2000,
                drag: true,
              }}
            >
              <SplideSlide>
                <div className="business-box business-box20 relative text-center cursor-pointer">
                  <div className="business-card-img">
                    <img src={full} alt="" />
                  </div>
                  <h5>Excellent User Experience</h5>
                  <p>
                    After all, UI/UX is all about creating an excellent user
                    experience. And that’s something we excel at. With our years
                    of experience and UI/UX best practices, we can help you
                    create a user-friendly interface and user experience to
                    engage and convert your target audience.
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="business-box business-box20 relative text-center cursor-pointer">
                  <div className="business-card-img">
                    <img src={full1} alt="" />
                  </div>
                  <h5>Increased Engagement And Conversion Rates</h5>
                  <p>
                    After all, UI/UX is all about creating an excellent user
                    experience. And that’s something we excel at. With our years
                    of experience and UI/UX best practices, we can help you
                    create a user-friendly interface and user experience to
                    engage and convert your target audience.
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="business-box business-box20 relative text-center cursor-pointer">
                  <div className="business-card-img">
                    <img src={full2} alt="" />
                  </div>
                  <h5>Comprehensive Design Services</h5>
                  <p>
                    In addition to UI/UX design, we also offer eCommerce design
                    and development, wearables app design, AR/VR app design, and
                    product design services. Whatever your UI/UX needs may be,
                    The kushel digi has you covered.
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="business-box business-box20 relative text-center cursor-pointer">
                  <div className="business-card-img">
                    <img src={full3} alt="" />
                  </div>
                  <h5>Vast Industry Expertise</h5>
                  <p>
                    We have worked with clients in various industries, including
                    healthcare, education, retail, and more. No matter what
                    industry you’re in, we can help you create UI/UX designs
                    tailored to your specific needs.
                  </p>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>

        <div className="how-ux">
          <div className="how-ux1">
            <h2>
              How is UX design valuable to my <br /> business?
            </h2>
            <p>
              Everyone wants to be customer-focused, but websites often serve
              splintered, internal agendas that don’t resonate with the intended
              audience. Here’s your opportunity to stand out. All you have to do
              is answer the needs of your target audience on your site. Reduce
              barriers on your site to increase engagement and conversion.
              Delight your customers more and annoy them less to improve their
              satisfaction with your brand. Optimize your ecommerce checkout to
              help them convert more easily. By definition, UX design should
              help your customers—while your business gains even more.
            </p>
          </div>
          <div className="how-ux2">
            <img src={howux} alt="howux" />
          </div>
        </div>

        <div className="deliver-p">
          <h2>How We Deliver UI & UX Services</h2>
          <p>
            A decade in design has allowed our team to perfect the process of
            delivering UI and UX services. We follow established design
            standards, workflows, and guidelines — you get the product you need,
            delivered by expert designers within the set timeframe.
          </p>

          <div className="deliver-p-img">
            <img src={pathji} alt="" />
          </div>
        </div>

        <div className="benifits-ui">
          <h2>Benefits Of Our UI & UX Services</h2>
          <p className="when-p">
            When you choose our services, you get everything to realise your
            product idea properly, from experience of working with Fortune 500
            clients to design standards that will help us deliver your product
            quicker and without loss in quality.
          </p>

          <div className="benifits-ui-card">
            <div className="benifits-ui-box">
              <div className="ui-sect">
                <h4>DECADE IN DESIGN</h4>
                <p>
                  From basic event apps to scalable enterprise software for
                  Fortune 500 companies, our long-standing design team can help
                  your any idea come into being with the latest tools and tech.
                  Our well-established process and standardised approach to
                  design will ensure the final product looks and works as you
                  required.
                </p>
              </div>
            </div>
            <div className="benifits-ui-box1">
              <div className="ui-sect">
                <h4 className="text-center">ESTABLISHED IN-HOUSE STANDARDS</h4>
              </div>
            </div>
            <div className="benifits-ui-box2">
              <div className="ui-sect">
                <h4 className="text-center">BROAD-RANGING EXPERTISE</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="home5     poty poty1">
          <div className="home51 px-24 ">
            <div className="home511 text-center ">
              <h1 className="font-bold mb-2 mt-4">OUR PORTFOLIO</h1>
            </div>
            <div className="home512 flex flex-wrap justify-center mt-14">
              <PortCard pads={a9} heading={heading} />
              <PortCard pads={pads} heading={heading1} />
              <PortCard heading={heading2} pads={bds} />
              <PortCard heading={heading3} pads={jones} />
            </div>
          </div>
          {/* <div className="home52 w-full text-center">
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
          </div> */}
        </div>

        <div className="how-did flex items-start justify-center">
          <div className="how-did-first">
            <img src={bhojan} alt="bhojan" />
          </div>
          <div className="how-did-second">
            <h3>How do we work?</h3>
            <div className="how-did-para">
              <p>
                We provide UX/UI and web design services that unlock your
                product value for the customer. With over ten years of online
                experience creating websites and themes, we bring the expertise
                you need and adapt our team to your plan.
              </p>
              <p>
                You are in the right place whether you already have a perfect
                pixel design or you need magic for a brand new digital image.
                Our friendly team supports you in each step of the project and
                builds it in stages as you are in complete control and approve
                the changes.
              </p>
            </div>
            <button>
              Request A Quote{" "}
              <img width={14} src={arrow} className="inline ml-2" alt="" />
            </button>
          </div>
        </div>

        <div className="home9 mb-12 home278">
          <div className="home91 flex px-24">
            <div className="home911 text-center">
              <h2 className="font-bold text-gray-700">JUST THE FAQs</h2>
            </div>
            <div className="home912">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Why Choose kushel digi as my next UI/UX design partner?
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
                      What industries do you specialize in?
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
                      How do you stay up-to-date with the latest UI/UX design
                      trends?
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
                      Do you keep my idea co- protected?
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
                      What platforms do you design for?
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
        <ContactForm />
      </div>
    </>
  );
};

export default Uiux;
