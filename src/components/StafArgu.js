import React from "react";
import digital from "../images/digital.png";
import digital2 from "../images/digital2.png";
import quality from "../images/quality.png";
import cart from "../images/cart.png";
import pro from "../images/process.png";
import check from "../images/check.png";
import market from '../images/market.png';
import arrow1 from '../images/arrow1.png';
import backImg from '../images/back-img.png';
import sideImg from '../images/side-img.png';
import '../components/css/app4.css';
import ik1 from '../images/ik1.png';
import ik2 from '../images/ik2.png';
import ik3 from '../images/ik3.png';
import ik4 from '../images/ik4.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import ContactForm from "./common/ContactForm";
const StafArgu = () => {
  return (
    <>
    <div className="home-main">
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
        {/* <h2 className="sta">STAFF AUGMENTATION</h2> */}
        <h3 className="cab">CAPABILITIES</h3>
        <div className="card">
          <div className="box">
            <div className="sard">
            <div>
              <h3>
                Digital Product
              </h3>
              <h2>Engineering</h2>
              </div>
              <img src={digital} alt="digital" />
            </div>
            <div className="staff-para">
              <p>UI/UX | Frontend | API | Web | Mobile | Dev</p>
            </div>
          </div>
          <div className="box">
            <div className="sard">
            <div>
              <h3>
                Digital
              </h3>
              <h2>Transformation</h2>
              </div>
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
            <div>
              <h3>
                Quality
              </h3>
              <h2>Engineering</h2>
              </div>
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

      <div className="main-contanier">
  <div className="contanier">
    <div className="content">
      <div className="content-1">
        <h1 className="hr111">What is staff augmentation?</h1>
        <p className="pr1">
          Staff augmentation is the process of adding talent to your existing
          team through a third party. This could be anything from 10 engineers
          joining 10 different teams, to a single developer with niche
          expertise.
        </p>
        <p className="pr2">
          Staff augmentation removes the overhead associated with sourcing,
          recruiting, training and retaining talent. It can help you meet short
          and long term technology goals with added flexibility and instant
          access to a high-quality talent pool.
        </p>
      </div>
      <div className="content-2">
        <div className="con">
          <img src={backImg} alt="" className="img-2" />
        </div>
        <img src={sideImg} alt="" className="img" />
      </div>
    </div>
  </div>
  <div className="contanier-1">
    <h1 className="hr3">Benefits of staff augmentation</h1>
    <div className="content1">
      <div className="content-1-1">
        <div>
          <img src={ik1} alt="" className="icon1" />
        </div>
        <div className="hee">
          <h1 className="hr2">Streamline communications</h1>
          <p className="pr3">
            Our developers align with your work hours, provide and listen to
            feedback, and have exceptional communication skills.
          </p>
        </div>
      </div>
      <div className="content-1-2">
        <div>
          {" "}
          <img src={ik2} alt="" className="icon2" />
        </div>
        <div className="hee">
          <h1 className="hr2">Create healthy teams</h1>
          <p className="pr3">
            We grill developers on their soft and behavioral skills to ensure
            seamless integration and positive culture-fit alignment.
          </p>
        </div>
      </div>
    </div>
    <div className="content1">
      <div className="content-2-1">
        <div>
          <img src={ik3} alt="" className="icon1" />
        </div>
        <div className="hee">
          <h1 className="hr2">Skip recruitment delays</h1>
          <p className="pr3">
            Hiring the right talent is time-consuming. We assemble the right
            team of experts and onboard them in record time.
          </p>
        </div>
      </div>
      <div className="content-2-2">
        <div>
          {" "}
          <img src={ik4} alt="" className="icon2" />
        </div>
        <div className="hee">
          <h1 className="hr2">Access high-quality, pre-vetted talent</h1>
          <p className="pr3">
            We’ve already done the rigorous testing for technical, logical, and
            soft-skill abilities so you don’t have to.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* <div className="benifits">
        <div className="benifits1">
          <h2>
            BENEFITS
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
          <button className="call">Request A Call <img width={13} height={13} className="inline ml-1" src={arrow1} alt="arrow1" /></button>
        </div>
        <div className="benifits2">
          <img src={'/static/images/c3.png'} alt="hath" />
        </div>
      </div>


      <div className="staff-process">
        <h3 className="aug">STAFF AUGMENTATION</h3>
        <h2 className="pro">THE PROCESS</h2>
        <div className="process-img">
          <img src={pro} alt="process" />
        </div>
      </div> */}

      
      {/* <div className="staff-service">
        <div className="staff-service1">
          <h2>
            Staff Augmentation <br /> <span>Services</span>
          </h2>
          <p>
            No wasted interviews - talk to the best qualified candidates only
          </p>
          <button>Send Your Request <img width={12} className=" inline ml-1" src={arrow1} alt="" /></button>
        </div>
        <div className="staff-service-second">
           <img src={staf} alt="staf" />
        </div>
      </div> */}

      <div className="home9 mb-12 home278 home480">
          <div className="home91 flex px-24">
            <div className="home911 text-center">
              <h2 className='font-bold text-gray-700'>JUST THE FAQs</h2>
            </div>
            <div className="home912">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    What is the experience level of your Software Developers?
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
                    How long will you take to share the suitable candidate profiles?
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
                      Can I view the resumes of software developers before hiring?
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
                    What happens if I hire someone, but they do not meet my expectations standards?
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
              <div className="home9121 font-semibold w-fit">
                See All FAQs
              </div>
            </div>
          </div>
        </div>
       <ContactForm/>
      </div>
    </>
  );
};

export default StafArgu;
