import React,{useState} from "react";
import arrow4 from "../images/arrow4.png";
import androidSis from "../images/android-sis.png";
import bigcompt from "../images/bigcomt.png";
import img1 from "../images/Group.png";
import img2 from "../images/Group (1) (1).png";
import img3 from "../images/Group (1).png";
import img4 from "../images/Group (3).png";
import img5 from "../images/Group (4).png";
import img6 from "../images/Group (5).png";
import arrowing from "../images/arrowing.png";
import caktam from "../images/caktam.png";
import caktam1 from "../images/caktam1.png";
import caktam2 from "../images/caktam2.png";
import caktam3 from "../images/caktam3.png";
import ContactForm1 from "./common/ContactForm1";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";
// import sideimg from "./image/Untitled-4 2.png";
const BigCommerce = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  return (
    <>
      <div className="ser-main">
        <div className="bigCommerce-back">
          <div className="bigCommerce-back1">
            <p>Expert BigCommerce Consulting</p>
            <h2 className="">
              Bigcommerce <br /> Development Service
            </h2>
            <button>
              Consult our BigCommerce Team
              <img width={13} className="ml-1.5 inline" src={arrow4} alt="" />
            </button>
          </div>
          <div className="bigCommerce-back2">
            <img className="bigcompt" src={bigcompt} alt="androids" />
          </div>
        </div>

        <div className="android2-app bigCommerce-app">
          <div className="android-fun">
            <div className="android-fun1">
              <h2>BigCommerce</h2>
              <h2>Development</h2>
              <h2>Services</h2>
              <img className="ftp" src={androidSis} alt="" />
              <h5>
                Discuss your goals with us{" "}
                <img width={14} className="ml-1 inline" src={arrowing} alt="" />{" "}
              </h5>
            </div>
            <div className="android-fun2 bigCommerce-fun2">
              <p>
                BigCommerce is a one-stop solution if you are looking for a
                completely functional online store to sell either digital or
                physical products.
              </p>
              <p className="mt-4">
                At Avid Brio, our goal is to exceed your expectations by
                developing the ultimate eCommerce store for you. Our BigCommerce
                developers are experienced in providing exceptional BigCommerce
                development services, whether it’s for a startup ecommerce store
                or a large eCommerce Enterprise.
              </p>
            </div>
          </div>
        </div>

        <div className="paper2">
          <h2>BIGCOMMERCE SERVICES OFFERED</h2>
          <h3>
            We develop BigCommerce stores that provide a unique and refined
            experience to site visitors
          </h3>
          <h4>which results in better conversions and higher AOV.</h4>
          <div className="paperbox">
            <div className="first1" id="new"
              onMouseEnter={()=> setHovered(true)}
              onMouseLeave={()=> setHovered(false)}
            >
              <img src={img1} className="startup" alt="img" />
              <h3>Startup</h3>
              <h5>
                We can help you start up a BigCommerce store that is completely
                SEO friendly, high on user experience, and easy to maintain.
              </h5>
            </div>
            <div className="first1">
              <img src={img2} className="startup" alt="img" />
              <h3>Design</h3>
              <h5>
                Our BigCommerce design team has demonstrated its excellence in
                designing custom BigCommerce themes with all the desired
                features and capabilities
              </h5>
            </div>
            <div className="first1">
              <img src={img3} className="startup" alt="img" />
              <h3>Migration</h3>
              <h5>
                We make migration to BigCommerce easy. We guarantee that no data
                will be lost and that your SEO ranking will be back up in a
                short time.
              </h5>
            </div>
            <div className="first1">
              <img src={img4} className="startup" alt="img" />
              <h3>Programming</h3>
              <h5>
                If you need something that is out of the box we can help you
                achieve the same with our BigCommerce expertise and knowledge
              </h5>
            </div>
            <div className="first1">
              <img src={img5} className="startup" alt="img" />
              <h3>Maintenance</h3>
              <h5>
                We maintain and manage several BigCommerce stores helping them
                with their operations and scalability
              </h5>
            </div>
            <div className="first1">
              <img src={img6} className="startup" alt="img" />
              <h3>Customization</h3>
              <h5>
                Whether you are looking to migrate from blueprint to stencil or
                are looking for some out of the box compliance checks or
                customizations, we are here to serve you.
              </h5>
            </div>
          </div>
        </div>

        <div className="latest latest1">
          <h2>BigCommerce Features</h2>
          <div className="business-card business1-card flex-wrap mt-20">
            <div className="business-box business-box1 relative text-center cursor-pointer white-soni lat-soni">
              <div className="business-card-img">
                <img src={caktam} alt="" />
              </div>
              <h5>Custom Design</h5>
              <p>- Sell anything: products, events, services, downloads</p>
              <p className="mt-2">- Sell anywhere with multiple currencias</p>
              <p className="mt-2">- Fully responsive store</p>
              <p className="mt-2">- Gorgeous themes</p>
              <p className="mt-2">- Completely customizable</p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer white-soni lat-soni">
              <div className="business-card-img">
                <img src={caktam1} alt="" />
              </div>
              <h5>Highly Secure Store</h5>
              <p>- Level1 PCI Compliant</p>
              <p className="mt-2">- Automated fraud detection</p>
              <p className="mt-2">- DDOS protection</p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer white-soni lat-soni">
              <div className="business-card-img">
                <img src={caktam2} alt="" />
              </div>
              <h5>Admin Features</h5>
              <p>- Multiple products option</p>
              <p className="mt-2">- Custom domain names</p>
              <p className="mt-2">- Multiple payments options</p>
              <p className="mt-2">- Bulk products import/export</p>
              <p className="mt-2">- Flexible returns system </p>
              <p className="mt-2">- Real time shipping rates</p>
              <p className="mt-2">- Outsource fulfillment with dropshipping</p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer white-soni lat-soni">
              <div className="business-card-img">
                <img src={caktam3} alt="" />
              </div>
              <h5>Built In Marketing Tools</h5>
              <p>- Built in SEO features</p>
              <p className="mt-2">- Sell on social media</p>
              <p className="mt-2">- Sell on marketplaces</p>
              <p className="mt-2">- Extensive analytic reports</p>
              <p className="mt-2">- Email marketing integration</p>
            </div>
          </div>
        </div>

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
                    How much does it cost to hire a flutter app developer?
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
                    How long does it take to develop a flutter app?
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
                    What types of apps can you make with flutter?
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
        <ContactForm1/>
      </div>
    </>
  );
};

export default BigCommerce;
