import React, { useState } from "react";
import sss1 from "../images/sa1.png";
import ss4 from "../images/sa4.png";
import ss5 from "../images/sa5.png";
import sss2 from "../images/sa2.png";
import nn1 from "../images/n1.png";
import nn2 from "../images/n2.png";
import nn3 from "../images/n3.png";
import nn4 from "../images/n4.png";
import nn5 from "../images/n5.png";
import nn6 from "../images/n6.png";
import nn7 from "../images/n7.png";
import nn8 from "../images/n8.png";
import nn9 from "../images/n9.png";
import g11 from "../images/g1.png";
import g12 from "../images/g2.png";
import g13 from "../images/g3.png";
import g14 from "../images/g4.png";
import g15 from "../images/g5.png";
import g16 from "../images/g6.png";
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
import wrappet from "../images/wrappert.png";
// import CaseStudy from "./common/CaseStudy";
import sigmat from "../images/sigmat.png";
import ghiradel from "../images/ghiradel.png";
import poli1 from '../images/poli1.png';
import poli2 from '../images/poli2.png';
import poli3 from '../images/poli3.png';
import poli4 from '../images/poli4.png';
import poli5 from '../images/poli5.png';
import poli6 from '../images/poli6.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ContactForm1 from "./common/ContactForm1";
import kiktas from "../images/kiktas.png";
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
            <button className="lets_talking">LET’S TALK</button>
          </div>
          <div className="magento_back2 relative">
            <div className="magentos">
              <img src={sss1} alt="reactus" />
            </div>
            <img className="reactus" src={sss2} alt="magentos" />
          </div>

          {/* <div className="magento_back2 relative">
            <div className="magentos">
              <img className="reacting animate__animated animate__pulse animate__infinite" src={reactus} alt="reactus" />
            </div>
            <img className="reactus" src={magentos} alt="magentos" />
          </div> */}
        </div>
        {/* <div className="magento_service">
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
        </div> */}

        {/* new_s*/}
        <div className="magento_service">
          <div className="magento_service1">
            <h2>
              <span>Magento</span> Development
            </h2>
            <p>
              Magento provides you a bundle of features and extensions that are
              flexible enough to be modulated according to your business layout
              and needs. Altogether, you get to experiment with Magento and
              develop a solution for your ecommerce needs. Magento helps in the
              growth of new technologies and innovation and that’s what makes it
              the most sought-after technology. Our development team integrates
              a number of extensions like payment gateway, store management,
              retail management and other store management related platforms
              into one. Magento is one of the most sought after solutions when
              it comes to content management system owing to its robust and SEO
              friendly features along with customizable specifications and we
              prove to be an efficient website development company.
            </p>
            <button className="newbtn">Let’s Get Started</button>
          </div>
          <div className="magento_service2">
            <img className="admis" src={ss4} alt="admis" />
          </div>
        </div>

        <div className="megento_new">
          <div className="megento_new1">
            <h1>Our Magento Solutions</h1>
          </div>
          <div className="news_cards">
            <div className="megento_new2">
              <div className="megento_new3">
                <img className="g1-img" src={g11} alt="" />
                <h1>Magento Enterprise Edition</h1>
                <p>
                  This is an expensive solution and is often used by large
                  enterprises for building their online stores. It comes with a
                  lot of technical assistance and ecommerce features.
                </p>
              </div>
              <div className="megento_new3">
                <img className="g1-img" src={g12} alt="" />
                <h1> Magento Community Edition</h1>
                <p>
                  This is a free version offered by Magento but is filled with a
                  lot of features that one can make use of to build an online
                  store
                </p>
              </div>
              <div className="megento_new3">
                <img className="g1-img" src={g13} alt="" />
                <h1> Magento Extension Development</h1>
                <p>
                  Our developers are pretty well versed with Magento development
                  services and that is why we provide the best services in terms
                  of Magento in the market.
                </p>
              </div>
            </div>
            <div className="megento_new4">
              <div className="megento_new3">
                <img className="g1-img" src={g14} alt="" />
                <h1>Magento Theme Development</h1>
                <p>
                  Because of first impression matters, hence choosing an appealing
                  theme for your website is indispensable. Thus, we at Bliss help
                  you choose and customize a theme for your website.
                </p>
              </div>
              <div className="megento_new3">
                <img className="g1-img" src={g15} alt="" />
                <h1> Magento Customization</h1>
                <p>
                  Once the theme is chosen, it is upon us to customize it
                  according to your requirements and make it look like it is
                  crafted just for you and your enterprise.
                </p>
              </div>
              <div className="megento_new3">
                <img className="g1-img" src={g16} alt="" />
                <h1>Magento Commerce</h1>
                <p>
                  With Magento, we serve you in developing the most dynamic and
                  flexible e-commerce website ever.
                </p>
              </div>
            </div>
            <div className="megento_new_ptn">
              <button>Let’s Get Started</button>

            </div>
          </div>
        </div>

        {/* end */}
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
        {/* new.s */}


        <div className="server_megy">
          <h1>Magento Development Services</h1>
          <div className="server_merging">
          <div className="server_mergs">
            <div className="server_meg">
              <img src={poli1} alt=""  className="p22"/>
              <h3>Consulting</h3>
              <p>Our consulting services go integrally
                with the development policies at
                Atharva. We provide this as a
                standalone service and with our
                development team. You get the best
                Magento assistance with the
                transformation and design of your
                business site.</p>
            </div>
            <div className="server_meg_2">
              <img src={poli2} alt=""  className="p22" />
              <h3>Customization</h3>
              <p>We work on different levels to shape
superior business solutions that will
help our clients to win the market. As
per your business needs, we deliver
extensions and themes at cost-
effective prices. Our team configures
out-of-the-box Magento services with
trusted third-party plugins.</p>
            </div>
            <div className="server_meg_3">
              <img src={poli3} alt=""  className="p22"/>
              <h3>UX And UI Design</h3>
              <p>In any business, the most effective
customer-facing component is its
website and it is responsible for the
conversions and business revenue.
We apply the best practices to
building a meaningful user
experience for better brand visibility.</p>
            </div>
          </div>
          <div className="server_mergs">
            <div className="server_meg_4">
              <img src={poli4} alt=""  className="p22" />
              <h3>PWA Development</h3>
              <p>We create superior PWA solutions for
the Magento websites of our clients.
PWAs are more profitable for your
businesses. You can reach out with a
superior eCommerce website and
these opportunities are opened up by
Magento PWA.</p>
            </div>
            <div className="server_meg_5">
              <img src={poli5} alt=""  className="p22" />
              <h3>Migration</h3>
              <p>As our developers help you to migrate
to a new version from the earlier
Magento releases or even to another
e-commerce platform, we help you to
transfer data and do much more. We
help to deliver a better version post-
migration.</p>
            </div>
            <div className="server_meg_6">
              <img src={poli6} alt=""  className="p22" />
              <h3>Integration</h3>
              <p>Our team effectively automates the
back-office processes with
integration into the IT infrastructure.
We create integration solutions with
external APIs and our team helps to
map the data flow to eradicate the
manual data entry.</p>
            </div>
          </div>
          </div>
        </div>

        <div className="php_portfolio">
          <div className="php_port">
            <h2 className="our_php">Why Choose<span>Kushel Digi Magento</span>  <br />
              Development Services?  </h2>
          </div>
        </div>

        <div className="megento_old">

          <div className="old_cards">
            <div className="megento_old2">
              <div className="megento_old3">
                <img className="n1-img" src={nn1} alt="" />
                <h1>Expertise and experience</h1>
                <p>
                  With nearly 10 years of experience, our
                  dedicated developers have extensive
                  knowledge of developing and customizing
                  Magento extensions and solutions.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src={nn2} alt="" />
                <h1>Customized solutions</h1>
                <p>
                  Every business is unique. We develop
                  customized Magento solutions to increase
                  your efficiency, profitability, and
                  customer satisfaction.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src={nn3} alt="" />
                <h1> Comprehensive services</h1>
                <p>
                  We offer a wide range of Magento
                  development solutions, including
                  Magento development & customization,
                  Magento web development UK, US, etc.
                </p>
              </div>
            </div>
            <div className="megento_old4">
              <div className="megento_old3">
                <img className="n1-img" src={nn4} alt="" />
                <h1>Quality and reliability</h1>
                <p>
                  We’re committed to delivering high-
                  quality, reliable solutions to clients. Our
                  team follows Magento coding standards
                  to ensure all solutions are robust,
                  scalable, and secure.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src={nn5} alt="" />
                <h1> Transparency and communication</h1>
                <p>
                  We offer regular updates and progress
                  reports to ensure you’re informed and
                  involved throughout the Magento
                  development process.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src={nn6} alt="" />
                <h1>Security</h1>
                <p>
                  Your website security is well protected by
                  us - a professional Magento development
                  agency. No data loss or hacker attacks to
                  worry about.
                </p>
              </div>
            </div>
            <div className="megento_old5">

              <div className="megento_old3">
                <img className="n1-img" src={nn5} alt="" />
                <h1>Quality assurance</h1>
                <p>
                  We place a strong emphasis on quality
                  assurance, using rigorous testing and
                  quality control processes to ensure that
                  all projects meet the highest standards.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src={nn6} alt="" />
                <h1> Flexible pricing</h1>
                <p>
                  Stop worrying about budget, because we
                  have different Magento website
                  development packages that suit your
                  needs.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src={nn7} alt="" />
                <h1>Dedicated support</h1>
                <p>
                  Mageplaza is a dedicated USA Magento
                  development company offering you 16
                  hours/day support to ensure the best
                  performance out of your store.
                </p>
              </div>
            </div>
          </div>
        </div>






        {/* 
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
        </div> */}

        {/* <div className="process_bigt">
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
        </div> */}
        {/* 
        <div className="magento_sus">
          <div className="piloy">
            <img src={piloy} alt="piloy" />
          </div>
        </div> */}

        {/* <CaseStudy /> */}
        <div className="php_portfolio">
          <div className="php_port">
            <h2 className="our_php">Our <span>Megento</span>  Web Development <span>Portfolio</span> </h2>
          </div>
        </div>
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

        {/* new_s  */}
        <div className="main_section_ss">
          <div className="section_ss">
            <div className="section_ss1">
              <img src={ss5} alt="" className="section_ss1_img" />
            </div>
            <div className="section_ss2">
              <h1>Run your <br />
                business efficiently <br />
                with Magento</h1>
              <button>Let’s Connect</button>
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
                      How many team members will you assign to my Magento
                      project? Please define their roles.
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
                      Who will be my Point of Contact in case I hire Magento
                      development services from Elsner Technologies Pvt. Ltd.?
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
                      Will we get the sole ownership of the source files once
                      the project gets over?
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
