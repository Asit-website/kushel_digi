import React, { useState } from "react";
import arrow4 from "../images/arrow4.png";
import phpgr from "../images/phpgr.png";
import greenish from "../images/greenish.png";
import teaser from "../images/teaser.png";
import benift from "../images/benift.png";
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
import CaseStudy from "./common/CaseStudy";
import som2 from "../images/som2.png";
import som3 from "../images/som3.png";
import som4 from "../images/som4.png";
import som5 from "../images/som5.png";
import som6 from "../images/som6.png";
import som8 from "../images/som8.png";
import why1 from "../images/why1.png";
import why2 from "../images/why2.png";
import why3 from "../images/why3.png";
import ContactForm1 from "./common/ContactForm1";
import engag1 from "../images/engag1.png";
import engag2 from "../images/engag2.png";
import engag3 from "../images/engag3.png";
import frema from "../images/frema.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { NavLink } from "react-router-dom";
const Php = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);

  const [tab8, setTab8] = useState(1);

  const openSource = (e) => {
    e.preventDefault();
    setTab8(1);
    document.getElementById("open").style.borderBottom = "1px solid #085881";
    document.getElementById("platform").style.borderBottom = "none";
    document.getElementById("extension").style.borderBottom = "none";
    document.getElementById("developer").style.borderBottom = "none";
  };
  const openSource1 = (e) => {
    e.preventDefault();
    setTab8(2);
    document.getElementById("open").style.borderBottom = "none";
    document.getElementById("platform").style.borderBottom =
      "1px solid #085881";
    document.getElementById("extension").style.borderBottom = "none";
    document.getElementById("developer").style.borderBottom = "none";
  };
  const openSource2 = (e) => {
    e.preventDefault();
    setTab8(3);
    document.getElementById("open").style.borderBottom = "none";
    document.getElementById("platform").style.borderBottom = "none";
    document.getElementById("extension").style.borderBottom =
      "1px solid #085881";
    document.getElementById("developer").style.borderBottom = "none";
  };
  const openSource3 = (e) => {
    e.preventDefault();
    setTab8(4);
    document.getElementById("open").style.borderBottom = "none";
    document.getElementById("platform").style.borderBottom = "none";
    document.getElementById("extension").style.borderBottom = "none";
    document.getElementById("developer").style.borderBottom =
      "1px solid #085881";
  };
  return (
    <>
      <div className="ser-main">
        <div className="php-back">
          <div className="php-back1">
            <h2>Hire PHP Developers</h2>
            <p>
              Planning to build a dynamic website for your brand? Our PHP
              developers can help. DianApps has a team of 20+ dedicated PHP
              developers with the skillsets to make innovative digital
              platforms.
            </p>
            <button>Hire Developer</button>
          </div>
          <div className="php-back2">
            <div className="exam_form">
              <h3>Build Your Team</h3>
              <p>Hire india’s best pre-vetted software developers on -demand</p>
              <form>
                <div className="form_exam w-full">
                  <label htmlFor="">Your Name</label>
                  <input
                    className="w-full mt-3"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form_exam w-full mt-5">
                  <label htmlFor="">Your Email</label>
                  <input
                    className="w-full mt-3"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form_exam w-full mt-5">
                  <label htmlFor="">Your Requirement</label>
                  <textarea
                    className="w-full mt-3"
                    placeholder="Enter your Requirement"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="form_exam_btn">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="pgp_service">
          <div className="pgp_card">
            <div className="pgp_box">
              <h1>20+</h1>
              <p>
                Dedicated PHP <br /> Developers
              </p>
            </div>
            <div className="pgp_box">
              <h1>50+</h1>
              <p>
                PHP-based projects <br /> deployed
              </p>
            </div>
            <div className="pgp_box">
              <h1>1000+</h1>
              <p>
                Satisfied customer <br /> base
              </p>
            </div>
          </div>
        </div>
        {/* ==============crausol============== */}
        <div className="hire_kui">
          <div className="hire_line">
            <hr className="hg1" />
            <h1>
              {" "}
              <span>Hire</span> Kushel Digi <span>PHP Developers</span> for
              Elevated Experience
            </h1>
            <hr className="hg2" />
          </div>
          <div className="hire_py">
            <p>
              Our PHP developers specialise in end-to-end development services
              which includes consultancy, PHP web app development, continuous
              maintenance, and the upgradation of software. We are skilled to
              take your project to the next level with the right mix of
              strategy, toolset, and development approach.Hire PHP developers
              from DianApps to experience unmatched quality offering which is
              built for success, with the future in mind.
            </p>
          </div>
          <div className="migartion_card">
            <Splide
              className="w-full"
              aria-label="Our Services"
              options={{
                perPage: 3,
                perMove: 1,
                autoplay: true,
                pauseOnHover: true,
                type: "loop",
                interval: 1600,
                drag: true,
              }}
            >
              <SplideSlide>
                <div className="migration_box">
                  <div className="mig1">
                    <h4>1</h4>
                  </div>
                  <div className="mig2">
                    <h1>Full stack PHP development</h1>
                    <p>
                      We help you migrate your software to PHP, ensuring that it
                      gets the benefits that the language offers. We also hold
                      an experience in upgrading your current software into PHP.
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="migration_box">
                  <div className="mig1">
                    <h4>2</h4>
                  </div>
                  <div className="mig2">
                    <h1>Custom PHP app development</h1>
                    <p>
                      We hold the specialisation in building custom PHP app
                      development. We ensure that your software looks and works
                      different from the plethora of platforms operating online.
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="migration_box">
                  <div className="mig1">
                    <h4>3</h4>
                  </div>
                  <div className="mig2">
                    <h1>PHP migration and upgradations</h1>
                    <p>
                      We help you migrate your software to PHP, ensuring that it
                      gets the benefits that the language offers. We also hold
                      an experience in upgrading your current software into PHP.
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="migration_box">
                  <div className="mig1">
                    <h4>4</h4>
                  </div>
                  <div className="mig2">
                    <h1>Software maintenance</h1>
                    <p>
                      We help you migrate your software to PHP, ensuring that it
                      gets the benefits that the language offers. We also hold
                      an experience in upgrading your current software into PHP.
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="migration_box">
                  <div className="mig1">
                    <h4>4</h4>
                  </div>
                  <div className="mig2">
                    <h1>PHP CMS development</h1>
                    <p>
                      We help you migrate your software to PHP, ensuring that it
                      gets the benefits that the language offers. We also hold
                      an experience in upgrading your current software into PHP.
                    </p>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        {/* =================crausol=============== */}

        <div className="get_in_php">
          <div className="get_mig">
            <hr className="get_mig1" />
            <button>Get in Touch with our PHP Developers</button>
            <hr className="get_mig2" />
          </div>
          <div className="engag_mod">
            <h1>Our Engagment Models</h1>
            <div className="engag_php_card">
              <div className="engag_php_box">
                <h2>Fix cost and time</h2>
                <img src={engag1} alt="" />
                <p>
                  We estimate the scope of the after gathering a complete
                  understanding of the clear requirements and the hours it would
                  take for development and deployment. Once we have gathered the
                  data, we share a fixed cost and time estimate with you of when
                  we will deliver the project.
                </p>
              </div>
              <div className="engag_php_box">
                <h2>On Site</h2>
                <img src={engag2} alt="" />
                <p>
                  We send our resources to your place of operation to work
                  alongside your team on the project. This model suits
                  businesses that have a skilled team but require an expert to
                  take care of certain aspects of the project. It’s
                  cost-effective, risk-free, fast, and 100% transparent.
                </p>
              </div>
              <div className="engag_php_box">
                <h2>Time and Model</h2>
                <img src={engag3} alt="" />
                <p>
                  We use the Time & Material Model when the software is in the
                  range of medium to high complexity. Here, we charge you for
                  the number and time of resources that we have employed to
                  develop your software, on an hourly level. This model best
                  suits businesses that require constant updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="why_pnt">
          <div className="why_pnt1">
            <div className="why_php_h">
              <h1>
                Why Hire PHP Developers <br /> From <span>Kushel Digi?</span>{" "}
              </h1>
            </div>
            <p>
              The validation of our service excellence lies in the ability of
              our PHP developers’ skills in developing a range of different web
              applications designed to meet different business objectives.
            </p>
            <div className="pnt_card">
              <div className="pnt_card1">
                <div className="frenta">
                  <img src={frema} alt="" />
                  <h4>Skilled programmers</h4>
                </div>
                <div className="frenta">
                  <img src={frema} alt="" />
                  <h4>Cost-effective project scope</h4>
                </div>
                <div className="frenta">
                  <img src={frema} alt="" />
                  <h4>Protection of idea and IP rights</h4>
                </div>
                <div className="frenta">
                  <img src={frema} alt="" />
                  <h4>Zero contract lock-ins</h4>
                </div>
                <div className="frenta">
                  <img src={frema} alt="" />
                  <h4>High scalability</h4>
                </div>
              </div>
              <div className="pnt_card2">
                <div className="frenta">
                  <img src={frema} alt="" />
                  <h4>Complete control</h4>
                </div>
                <div className="frenta">
                  <img src={frema} alt="" />
                  <h4>On time delivery</h4>
                </div>
                <div className="frenta">
                  <img src={frema} alt="" />
                  <h4>Daily, weekly, and monthly updates</h4>
                </div>
                <div className="frenta">
                  <img src={frema} alt="" />
                  <h4>Flexible engagement models</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="why_pnt2">
            <div className="hire_steps_php">
              <h1>Hire PHP Developers In 4 Steps</h1>
              <p>
                Hiring a PHP developer from DianApps is simple. Follow 4 easy
                steps to employ a team for your innovative web application.
              </p>
            </div>
            <div className="hire_phpStep_card">
              <div className="hire_phpStep_box">
                <h1>01</h1>
                <p>Tell us your requirements</p>
              </div>
              <div className="hire_phpStep_box">
                <h1>02</h1>
                <p>
                  We shortlist the best <br /> talents
                </p>
              </div>
              <div className="hire_phpStep_box">
                <h1>03</h1>
                <p>
                  Take interview of the <br /> PHP team
                </p>
              </div>
              <div className="hire_phpStep_box">
                <h1>04</h1>
                <p>Hire the PHP developers</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="magento_service php_service">
          <div className="magento_service1">
            <h2>
              Why Should You Choose <span>PHP</span> <br /> Development?
            </h2>
            <p>
              For the newbies among us, PHP is a web development language that
              has been widely adopted for multiple websites throughout the
              world. It also has its uses in general programming functions.
              Literally millions of websites are now running on the PHP language
              which means that your e-commerce business may need to be founded
              on the PHP language as well to facilitate smooth operations with
              other PHP based websites. If you are looking for a developer to
              make a PHP based web solution for you, Kushel Digi could be the
              right company for the job.
            </p>
          </div>
          <div className="magento_service2">
            <div className="greenish">
              <img src={greenish} alt="greenish" />
            </div>
            <img className="admis" src={teaser} alt="admis" />
          </div>
        </div>

        <div className="benifits_php">
          {tab8 === 1 && (
            <>
              <div className="php_benifits_flex">
                <div className="php_ben1">
                  <h2>
                    Benefits Of <span>PHP</span> Development
                  </h2>
                  <div className="php_navbar">
                    <p onClick={openSource} id="open">
                      Open - Source
                    </p>
                    <p onClick={openSource1} id="platform">
                      Platform Diversity
                    </p>
                    <p onClick={openSource2} id="extension">
                      Extensions and add - ons
                    </p>
                    <p onClick={openSource3} id="developer">
                      Developer community
                    </p>
                  </div>
                  <div className="main_php_para">
                    <p>
                      PHP is an Open - Source language, meaning it is free and
                      easy to use and has a vast amount of documentation
                      available. this makes it the most cost- effective way to
                      build reliable websites and take over space online without
                      considering legal obligations and subscription fees.
                      additionally, PHP lowers entry barriers for new websites
                      developers through PHP development services, enabling them
                      to utilize their coding skills and talent to get started
                      efficiently.
                    </p>
                  </div>
                  <button>START PROJECT</button>
                </div>
                <div className="php_ben2">
                  <img src={benift} alt="benift" />
                </div>
              </div>
            </>
          )}

          {tab8 === 2 && (
            <>
              <div className="php_benifits_flex">
                <div className="php_ben1">
                  <h2>
                    Benefits Of <span>PHP</span> Development
                  </h2>
                  <div className="php_navbar">
                    <p onClick={openSource} id="open">
                      Open - Source
                    </p>
                    <p onClick={openSource1} id="platform">
                      Platform Diversity
                    </p>
                    <p onClick={openSource2} id="extension">
                      Extensions and add - ons
                    </p>
                    <p onClick={openSource3} id="developer">
                      Developer community
                    </p>
                  </div>
                  <div className="main_php_para">
                    <p>
                      PHP is an Open - Source language, meaning it is free and
                      easy to use and has a vast amount of documentation
                      available. this makes it the most cost- effective way to
                      build reliable websites and take over space online without
                      considering legal obligations and subscription fees.
                      additionally, PHP lowers entry barriers for new websites
                      developers through PHP development services, enabling them
                      to utilize their coding skills and talent to get started
                      efficiently.
                    </p>
                  </div>
                  <button>START PROJECT</button>
                </div>
                <div className="php_ben2">
                  <img src={benift} alt="benift" />
                </div>
              </div>
            </>
          )}

          {tab8 === 3 && (
            <>
              <div className="php_benifits_flex">
                <div className="php_ben1">
                  <h2>
                    Benefits Of <span>PHP</span> Development
                  </h2>
                  <div className="php_navbar">
                    <p onClick={openSource} id="open">
                      Open - Source
                    </p>
                    <p onClick={openSource1} id="platform">
                      Platform Diversity
                    </p>
                    <p onClick={openSource2} id="extension">
                      Extensions and add - ons
                    </p>
                    <p onClick={openSource3} id="developer">
                      Developer community
                    </p>
                  </div>
                  <div className="main_php_para">
                    <p>
                      PHP is an Open - Source language, meaning it is free and
                      easy to use and has a vast amount of documentation
                      available. this makes it the most cost- effective way to
                      build reliable websites and take over space online without
                      considering legal obligations and subscription fees.
                      additionally, PHP lowers entry barriers for new websites
                      developers through PHP development services, enabling them
                      to utilize their coding skills and talent to get started
                      efficiently.
                    </p>
                  </div>
                  <button>START PROJECT</button>
                </div>
                <div className="php_ben2">
                  <img src={benift} alt="benift" />
                </div>
              </div>
            </>
          )}

          {tab8 === 4 && (
            <>
              <div className="php_benifits_flex">
                <div className="php_ben1">
                  <h2>
                    Benefits Of <span>PHP</span> Development
                  </h2>
                  <div className="php_navbar">
                    <p onClick={openSource} id="open">
                      Open - Source
                    </p>
                    <p onClick={openSource1} id="platform">
                      Platform Diversity
                    </p>
                    <p onClick={openSource2} id="extension">
                      Extensions and add - ons
                    </p>
                    <p onClick={openSource3} id="developer">
                      Developer community
                    </p>
                  </div>
                  <div className="main_php_para">
                    <p>
                      PHP is an Open - Source language, meaning it is free and
                      easy to use and has a vast amount of documentation
                      available. this makes it the most cost- effective way to
                      build reliable websites and take over space online without
                      considering legal obligations and subscription fees.
                      additionally, PHP lowers entry barriers for new websites
                      developers through PHP development services, enabling them
                      to utilize their coding skills and talent to get started
                      efficiently.
                    </p>
                  </div>
                  <button>START PROJECT</button>
                </div>
                <div className="php_ben2">
                  <img src={benift} alt="benift" />
                </div>
              </div>
            </>
          )}
        </div> */}

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

        <div className="php_portfolio">
          <div className="php_port">
            <h2 className="our_php">Our PHP Web Development Portfolio</h2>
          </div>
          <CaseStudy />
        </div>

        {/* <div className="hire_dedicated_php">
          <div className="hire_dedicated_sect">
            <h3>Hire dedicated PHP team</h3>
            <div className="hire_php_card">
              <div className="hire_php_box">
                <h4>
                  You can hire skilled PHP developers from Belitsoft either as
                  an augmentation to existing in-house staff or as a fully
                  functional software team united by a single goal. The
                  developers are handpicked to match the requirements of the
                  client, who has full control over their working activities. We
                  can build the teams of 5-40 specialists. To date, our largest
                  projects involve 7-10 PHP programmers working together. Also,
                  with our dedicated teams, it is possible to reduce costs by
                  40%+.Read more on the https://belitsoft.com/php-development
                  services
                </h4>
              </div>
              <div className="hire_php_box">
                <h4>
                  Over 15 years, Belitsoft has gathered invaluable expertise in
                  progressive staff training and providing first-class dedicated
                  teams for a large variety of projects. Development and
                  customization of SaaS platform for insurance brokers, custom
                  LMS for an ed-tech company, custom EHR - these are just some
                  of the projects we are proud of.Read more on the
                  https://belitsoft.com/php-development-services
                </h4>
              </div>
            </div>
            <NavLink to="/hire">
              <button>HIRE Dedicated PHP team</button>
            </NavLink>
          </div>
        </div> */}

        <div className="php_techStack">
          <h2 className="php_heading1">Our PHP development tech stack </h2>
          <div className="mt-3">
            <p className="php_para1">
              Our PHP developers have a firm grasp of all major PHP frameworks
              as well as a profound understanding
            </p>
            <p className="php_para1">
              of PHP coding peculiarities to nail the most elaborate project
              requirements.
            </p>
          </div>
          <div className="php_techStack_cards">
            <div className="php_techStack_card">
              <div className="php_techStack_box php_techStack_box1">
                <div className="tech_left">
                  <img src={som8} alt="som1" />
                </div>
                <div className="tech_right">
                  <h4>Backend</h4>
                  <h4>
                    Frameworks: <span>Laravel, Yii2, Zend, Slim, Symfony</span>{" "}
                  </h4>
                  <h4>Pure PHP </h4>
                  <h4>
                    CMS:{" "}
                    <span>
                      Joomla, Drupal. Ecommerce: Magento, Opencart, Prestashop.
                    </span>{" "}
                  </h4>
                </div>
              </div>
              <div className="php_techStack_box php_techStack_box2">
                <div className="tech_left">
                  <img src={som2} alt="som1" />
                </div>
                <div className="tech_right">
                  <h4>Frontend</h4>
                  <span>Frontend</span>
                </div>
              </div>
            </div>
            <div className="php_techStack_card">
              <div className="php_techStack_box php_techStack_box1">
                <div className="tech_left">
                  <img src={som3} alt="som1" />
                </div>
                <div className="tech_right">
                  <h4>Data Management</h4>
                  <span>My SQL, MariaDB, PostgreSQ; MongoDB</span>
                </div>
              </div>
              <div className="php_techStack_box php_techStack_box2">
                <div className="tech_left">
                  <img src={som4} alt="som1" />
                </div>
                <div className="tech_right">
                  <h4>Optimization helpers</h4>
                  <span>Elasticsearch, RabbitMQ</span>
                </div>
              </div>
            </div>
            <div className="php_techStack_card">
              <div className="php_techStack_box php_techStack_box1">
                <div className="tech_left">
                  <img src={som5} alt="som1" />
                </div>
                <div className="tech_right">
                  <h4>HTTP Servers</h4>
                  <span>Apache, Nginx</span>
                </div>
              </div>
              <div className="php_techStack_box php_techStack_box2">
                <div className="tech_left">
                  <img src={som6} alt="som1" />
                </div>
                <div className="tech_right">
                  <h4>OS and platforms</h4>
                  <span>Ubuntu, Centos, Docker, Kubernetes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="why_kushel_php">
          <h2>Why Kusheldigi?</h2>
          <div className="why_me_card">
            <div className="why_me_box why_me_box1">
              <h3>Reliable partnership</h3>
              <img src={why1} alt="why1" />
              <p>
                We focus on stable and fruitful cooperation, offering value for
                money PHP services. This is proved by 20+ clients that stay with
                us for more than 5 years.
              </p>
            </div>
            <div className="why_me_box why_me_box2">
              <h3>Low attrition rate</h3>
              <img src={why2} alt="why2" />
              <p>
                We focus on stable and fruitful cooperation, offering value for
                money PHP services. This is proved by 20+ clients that stay with
                us for more than 5 years.
              </p>
            </div>
            <div className="why_me_box why_me_box3">
              <h3>Fast project Kickoff</h3>
              <img src={why3} alt="why2" />
              <p>
                We focus on stable and fruitful cooperation, offering value for
                money PHP services. This is proved by 20+ clients that stay with
                us for more than 5 years.
              </p>
            </div>
          </div>
        </div> */}
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
                      What is the average cost of developing a PHP website?
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
                      Can I modify my website design in the future?
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
                      Do you develop mobile-friendly PHP websites?
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
                      How do you ensure the quality of the project?
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
                      Is PHP development services suitable for large projects?
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

export default Php;
