import React, { useState } from "react";
import arrow4 from "../images/arrow4.png";
import reactus from "../images/reactus.png";
import magentos from "../images/magentos.png";
import admis from "../images/admis.png";
import greenish from "../images/greenish.png";
import misad from "../images/misad.png";
import andis from "../images/andis.png";
import andis1 from "../images/andis1.png";
import andis2 from "../images/andis2.png";
import andis3 from "../images/andis3.png";
import andis4 from "../images/andis4.png";
import andis5 from "../images/andis5.png";
import gatr from "../images/gatr.png";
import gatr1 from "../images/gatr1.png";
import gatr2 from "../images/gatr2.png";
import gatr3 from "../images/gatr3.png";
import gatr4 from "../images/gatr4.png";
import gatr5 from "../images/gatr5.png";
import framingts from "../images/framingts.png";
import uin from "../images/uin.png";
import uin1 from "../images/uin1.png";
import uin2 from "../images/uin2.png";
import uin3 from "../images/uin3.png";
import uin4 from "../images/uin4.png";
import uin5 from "../images/uin5.png";
import uin6 from "../images/uin6.png";
import piloy from "../images/piloy.png";
import magh from "../images/magh.png";
import wrappet from '../images/wrappert.png'
// import CaseStudy from "./common/CaseStudy";
import sigmat from '../images/sigmat.png';
import ghiradel from '../images/ghiradel.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ContactForm1 from "./common/ContactForm1";
import kiktas from '../images/kiktas.png';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Magento = () => {
  const [front, setFront] = useState(1);

  const tabAnother = (e) => {
    e.preventDefault();
    setFront(1);
    document.getElementById("mobile").style.borderBottom = "2px solid #085881";
    document.getElementById("frontend").style.borderBottom = "none";
    document.getElementById("backend").style.borderBottom = "none";
    document.getElementById("cms").style.borderBottom = "none";

    document.getElementById("mobile").style.opacity = "96%";
    document.getElementById("frontend").style.opacity = "50%";
    document.getElementById("backend").style.opacity = "50%";
    document.getElementById("cms").style.opacity = "50%";
  };

  const tabAnother1 = (e) => {
    e.preventDefault();
    setFront(2);
    document.getElementById("mobile").style.borderBottom = "none";
    document.getElementById("frontend").style.borderBottom =
      "2px solid #085881";
    document.getElementById("backend").style.borderBottom = "none";
    document.getElementById("cms").style.borderBottom = "none";

    document.getElementById("mobile").style.opacity = "50%";
    document.getElementById("frontend").style.opacity = "96%";
    document.getElementById("backend").style.opacity = "50%";
    document.getElementById("cms").style.opacity = "50%";
  };

  const tabAnother2 = (e) => {
    e.preventDefault();
    setFront(3);
    document.getElementById("mobile").style.borderBottom = "none";
    document.getElementById("frontend").style.borderBottom = "none";
    document.getElementById("backend").style.borderBottom = "2px solid #085881";
    document.getElementById("cms").style.borderBottom = "none";

    document.getElementById("mobile").style.opacity = "50%";
    document.getElementById("frontend").style.opacity = "50%";
    document.getElementById("backend").style.opacity = "96%";
    document.getElementById("cms").style.opacity = "50%";
  };

  const tabAnother3 = (e) => {
    e.preventDefault();
    setFront(4);
    document.getElementById("mobile").style.borderBottom = "none";
    document.getElementById("frontend").style.borderBottom = "none";
    document.getElementById("backend").style.borderBottom = "none";
    document.getElementById("cms").style.borderBottom = "2px solid #085881";

    document.getElementById("mobile").style.opacity = "50%";
    document.getElementById("frontend").style.opacity = "50%";
    document.getElementById("backend").style.opacity = "50%";
    document.getElementById("cms").style.opacity = "96%";
  };

  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  return (
    <>
      <div className="ser-main">
        <div className="magento-back">
          <div className="magento_back1">
            <h2>
              Magento Development <br /> Services
            </h2>
            <p>
              If you want to develop your website with the help of field
              experts, just tell us.
            </p>
            <button className="lets_talking">
              LET’S TALK
            </button>
          </div>
          <div className="magento_back2 relative">
            <div className="magentos">
              <img className="reacting animate__animated animate__pulse animate__infinite" src={reactus} alt="reactus" />
            </div>
            <img className="reactus" src={magentos} alt="magentos" />
          </div>
        </div>
        <div className="magento_service">
          <div className="magento_service1">
            <h2>
              Our <span>Magento</span> development <br /> services
            </h2>
            <p>
              Our Magento development services are designed to help you create a
              powerful and feature-rich online store that drives conversions and
              boosts revenue. Here are some of the key services we offer:
            </p>
          </div>
          <div className="magento_service2">
            <div className="greenish">
              <img src={greenish} alt="greenish" />
            </div>
            <img className="admis" src={admis} alt="admis" />
          </div>
        </div>
        <div className="magento_services">
          <div className="magento_services1">
            <img src={misad} alt="misad" />
          </div>
          <div className="magento_services2">
            <h2>Why You Should choose</h2>
            <h2>
              {" "}
              <span>Magento E-commerce</span> Solution
            </h2>
            <p>
              Magento is a big advantage when it comes to e-commerce if your
              website’s retail business is struggling to control costs because
              Magento is an open-source solution used for e-commerce
              applications. Yes, the big retail websites do use this system
              which was formerly owned by the Varien company but if you are a
              small player trying to compete against the big boys then every
              cent you save counts in the long run. Because of this even major
              auction site eBay recognizes the usefulness of being associated
              with Magento (eBay has already bought out 100% ownership of
              Magento). So maybe you should too as well. There is more to
              e-commerce than just boring financial data that make your eyes
              glaze over. A website devoted to e-commerce wants to know what its
              customers are thinking and Magento can do that through its Magento
              Mobile service. With Magento Mobile, your business will be able to
              develop your own apps that can work for hand in glove with your
              online retail operations. So what does that mean? It means these
              native apps can help your customers gain a better online
              e-commerce experience while you get more data on what customers
              are buying and what are being ignored. You can create retail
              business apps that will run on Android gadgets as well as iPads
              and iPhones. This is a big advantage if you want to shave off
              losing products and stick to products that you know your customers
              are willing to pay for.
            </p>
          </div>
        </div>

        <div className="magento_tech">
          <h2>Technologies We Work On</h2>
          <div className="magento_nav">
            <div className="magent_navbar">
              <p onClick={tabAnother} id="mobile">
                Mobile
              </p>
              <p onClick={tabAnother1} id="frontend">
                Frontend
              </p>
              <p onClick={tabAnother2} id="backend">
                Backend
              </p>
              <p onClick={tabAnother3} id="cms">
                CMS
              </p>
            </div>
            <hr className="magento_hr" />
          </div>
          {front === 1 && (
            <>
              <div className="magento_nag">
                <div className="magento_box">
                  <img src={andis} alt="andis" />
                  <p>Android</p>
                </div>
                <div className="magento_box">
                  <img src={andis1} alt="andis" />
                  <p>IOS</p>
                </div>
                <div className="magento_box">
                  <img src={andis2} alt="andis" />
                  <p>Flutter</p>
                </div>
                <div className="magento_box">
                  <img src={andis3} alt="andis" />
                  <p>React Native</p>
                </div>
                <div className="magento_box">
                  <img src={andis4} alt="andis" />
                  <p>Kotlin</p>
                </div>
                <div className="magento_box">
                  <img src={andis5} alt="andis" />
                  <p>Swift</p>
                </div>
              </div>
            </>
          )}

          {front === 2 && (
            <>
              <div className="magento_nag">
                <div className="magento_box">
                  <img src={andis} alt="andis" />
                  <p>Android</p>
                </div>
                <div className="magento_box">
                  <img src={andis1} alt="andis" />
                  <p>IOS</p>
                </div>
                <div className="magento_box">
                  <img src={andis2} alt="andis" />
                  <p>Flutter</p>
                </div>
                <div className="magento_box">
                  <img src={andis3} alt="andis" />
                  <p>React Native</p>
                </div>
                <div className="magento_box">
                  <img src={andis4} alt="andis" />
                  <p>Kotlin</p>
                </div>
                <div className="magento_box">
                  <img src={andis5} alt="andis" />
                  <p>Swift</p>
                </div>
              </div>
            </>
          )}

          {front === 3 && (
            <>
              <div className="magento_nag">
                <div className="magento_box">
                  <img src={andis} alt="andis" />
                  <p>Android</p>
                </div>
                <div className="magento_box">
                  <img src={andis1} alt="andis" />
                  <p>IOS</p>
                </div>
                <div className="magento_box">
                  <img src={andis2} alt="andis" />
                  <p>Flutter</p>
                </div>
                <div className="magento_box">
                  <img src={andis3} alt="andis" />
                  <p>React Native</p>
                </div>
                <div className="magento_box">
                  <img src={andis4} alt="andis" />
                  <p>Kotlin</p>
                </div>
                <div className="magento_box">
                  <img src={andis5} alt="andis" />
                  <p>Swift</p>
                </div>
              </div>
            </>
          )}

          {front === 4 && (
            <>
              <div className="magento_nag">
                <div className="magento_box">
                  <img src={andis} alt="andis" />
                  <p>Android</p>
                </div>
                <div className="magento_box">
                  <img src={andis1} alt="andis" />
                  <p>IOS</p>
                </div>
                <div className="magento_box">
                  <img src={andis2} alt="andis" />
                  <p>Flutter</p>
                </div>
                <div className="magento_box">
                  <img src={andis3} alt="andis" />
                  <p>React Native</p>
                </div>
                <div className="magento_box">
                  <img src={andis4} alt="andis" />
                  <p>Kotlin</p>
                </div>
                <div className="magento_box">
                  <img src={andis5} alt="andis" />
                  <p>Swift</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="process_bigt">
          <h2>Process We Follow</h2>
          <div className="paperbox">
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <img
                src={hovered ? uin : framingts}
                className="startup"
                alt="img"
              />
              <h3>1. Requirement Gathering</h3>
              <h5>
                We follow the first and foremost priority of gathering
                requirements, resources, and information to begin our project.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <img src={hovered2 ? uin1 : gatr} className="startup" alt="img" />
              <h3>2. UI/UX Design</h3>
              <h5>
                We create catchy and charming designs with the latest tools of
                designing to make it a best user-friendly experience.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
            >
              <img
                src={hovered3 ? uin2 : gatr1}
                className="startup"
                alt="img"
              />
              <h3>3. Prototype</h3>
              <h5>
                After designing, you will get your prototype, which will be sent
                ahead for the development process for the product.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered4(true)}
              onMouseLeave={() => setHovered4(false)}
            >
              <img
                src={hovered4 ? uin3 : gatr2}
                className="startup"
                alt="img"
              />
              <h3>4. Development</h3>
              <h5>
                Development of mobile application/web/blockchain started using
                latest tools and technologies with transparency.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered5(true)}
              onMouseLeave={() => setHovered5(false)}
            >
              <img
                src={hovered5 ? uin4 : gatr3}
                className="startup"
                alt="img"
              />
              <h3>5. Quality Assurance</h3>
              <h5>
                Hyperlink values quality and provides 100% bug free application
                with no compromisation in it.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered6(true)}
              onMouseLeave={() => setHovered6(false)}
            >
              <img
                src={hovered6 ? uin5 : gatr4}
                className="startup"
                alt="img"
              />
              <h3>6. Deployment</h3>
              <h5>
                After trial and following all processes, your app is ready to
                launch on the App store or Play Store.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered7(true)}
              onMouseLeave={() => setHovered7(false)}
            >
              <img
                src={hovered7 ? uin6 : gatr5}
                className="startup"
                alt="img"
              />
              <h3>7. Support & Maintenance</h3>
              <h5>
                Our company offers you all support and the team is always ready
                to answer every query after deployment.
              </h5>
            </div>
          </div>
        </div>

        <div className="magento_sus">
          <div className="piloy">
            <img src={piloy} alt="piloy" />
          </div>
        </div>

        {/* <CaseStudy /> */}

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
              <div className="kickta_big kickta_mag">
                <div className="kickta_big1 kickta_magst">
                  <img src={sigmat} alt="kikma" />
                  <div className="headst_big">
                    <h2>Semi-annual</h2>
                    <h2>sale</h2>
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
              <div className="kickta_big kickta_mag1">
                <div className="kickta_big1 kickta_magst1">
                  <img src={wrappet} alt="kikma" />
                  <div className="headst_big">
                    <h2>Try on 5 frames without</h2>
                    <h2>leaving home</h2>
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
              <div className="kickta_big kickta_mag2">
                <div className="kickta_big1 kickta_magst2">
                  <img src={ghiradel} alt="kikma" />
                  <div className="headst_big">
                    <h2>Customize your‘S</h2>
                    <h2>mores with</h2>
                    <h2>ghirardelli</h2>
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

        <div className="dedicated_dreams">
          <h3>Dedicated Dreams.</h3>
          <div className="dedicated_dreams1">
            <div className="dedicated1">
              <p>4 to 6 Year of Exp. Magento Developer</p>
            </div>
            <div className="dedicated_content">
              <div className="dedicated_content1">
                <img src={magh} alt="magh" />
              </div>
              <div className="dedicated_content2">
                <p>
                  You will get an experienced Magento professional with 6 to 8
                  years of real-time live project experience. He will work on
                  your project dedicatedly and deliver the best outcomes as per
                  your custom business requirements.
                </p>
              </div>
            </div>
            <div className="dedicated2">
              <p>SCHEDULE A DEVELOPER INTERVIEW</p>
            </div>
          </div>
        </div>

        <ContactForm1 />

        <div className="home9 py-20 bigcom9">
          <div className="home91 flex px-20">
            <div className="home911 text-center">
              <h2 className="font-bold text-gray-700">JUST THE FAQs</h2>
            </div>
            <div className="home912">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How many team members will you assign to my Magento project? Please define their roles.
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
                      Who will be my Point of Contact in case I hire Magento development services from Elsner Technologies Pvt. Ltd.?
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
                      Will we get the sole ownership of the source files once the project gets over?
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
                      What is the support period provided by your company?
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

export default Magento;
