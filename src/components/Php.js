import React, { useState } from 'react'
import arrow4 from "../images/arrow4.png";
import phpgr from "../images/phpgr.png";
import greenish from "../images/greenish.png";
import teaser from "../images/teaser.png";
import benift from "../images/benift.png";
import why1 from "../images/why1.png";
import why2 from "../images/why2.png";
import why3 from "../images/why3.png";

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
import { NavLink } from 'react-router-dom';
import ContactForm1 from "./common/ContactForm1";
import phpya from '../images/phpya.png';
import travisHead from '../images/travisHead.png';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import kiktas from '../images/kiktas.png';
import sulua from '../images/sulua.png';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import onring from "../images/onring.png";
import onring1 from '../images/onring1.png';
import engag1 from '../images/engag1.png';
import engag2 from '../images/engag2.png';
import engag3 from '../images/engag3.png';

const Php = () => {
    // const [hovered, setHovered] = useState(false);
    // const [hovered2, setHovered2] = useState(false);
    // const [hovered3, setHovered3] = useState(false);
    // const [hovered4, setHovered4] = useState(false);
    // const [hovered5, setHovered5] = useState(false);
    // const [hovered6, setHovered6] = useState(false);
    // const [hovered7, setHovered7] = useState(false);

    const [tab8, setTab8] = useState(1);

    const openSource = (e) => {
        e.preventDefault();
        setTab8(1);
        document.getElementById("open").style.borderBottom = "2px solid #1B6BFF";
        document.getElementById("platform").style.borderBottom = "none";
        document.getElementById("extension").style.borderBottom = "none";
        document.getElementById("developer").style.borderBottom = "none";
    };
    const openSource1 = (e) => {
        e.preventDefault();
        setTab8(2);
        document.getElementById("open").style.borderBottom = "none";
        document.getElementById("platform").style.borderBottom = "2px solid #1B6BFF";
        document.getElementById("extension").style.borderBottom = "none";
        document.getElementById("developer").style.borderBottom = "none";
    };
    const openSource2 = (e) => {
        e.preventDefault();
        setTab8(3);
        document.getElementById("open").style.borderBottom = "none";
        document.getElementById("platform").style.borderBottom = "none";
        document.getElementById("extension").style.borderBottom = "2px solid #1B6BFF";
        document.getElementById("developer").style.borderBottom = "none";
    };
    const openSource3 = (e) => {
        e.preventDefault();
        setTab8(4);
        document.getElementById("open").style.borderBottom = "none";
        document.getElementById("platform").style.borderBottom = "none";
        document.getElementById("extension").style.borderBottom = "none";
        document.getElementById("developer").style.borderBottom = "2px solid #1B6BFF";
    };
    return (
        <>
            <div className="ser-main">
                {/* <div className="php-bscks">
                     <div className="php-backs1">
                              
                     </div>
                     <div className="php-backs">

                     </div>
                 </div> */}
                <div className="magento-back php_backs">
                    <div className="magento_back1 php_backs1">
                        <h2>
                            PHP Web <br /> Development
                        </h2>
                        <p>
                            Kushel Digi Provides Best PHP Development For Our Customers
                        </p>
                        <button className='lets_talking'>
                            LET’S TALK
                        </button>
                    </div>
                    <div className="relative php_backs2">
                        <img className="phpya" src={phpya} alt="magentos" />
                    </div>
                </div>
                <div className="magento_service php_service">
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
                            {
                                tab8 === 1 && (
                                    <>
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
                                    </>
                                )
                            }

                            {
                                tab8 === 2 && (
                                    <>
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
                                    </>
                                )
                            }

                            {
                                tab8 === 3 && (
                                    <>
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
                                    </>
                                )
                            }

                            {
                                tab8 === 4 && (
                                    <>
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
                                    </>
                                )
                            }





                        </div>
                        <div className="php_ben2">
                            <img src={benift} alt="benift" />
                        </div>
                    </div>

                </div>

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


                <div className="why_phpDevr">
                    <h1>Why Choose <span>Kushel Digi</span>  for <span>PHP</span>  Development?</h1>
                    <p className='kt_rd'>Kushel Digi is a PHP-specialized software house with over 20 mid-to-senior PHP Developers. We are trusted by enterprises of all sizes to do just about anything your business needs to grow and create a reliable, secure, maintainable, and feature-ready application. Our experts solve many of the pain points you need to touch on when developing an app with PHP, from handling development lifecycle and design, to building, shipping releases as well as support and maintenance.</p>

                    <div className="php_stakflow">
                        <div className="php_stackflow_card">
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>1</h3>
                                    <h2>Partner-Driven Developers</h2>
                                    <hr />
                                    <p>Working with Kushel Digi means having a software house that feels like your own. We make the effort to go all-in with your success to plan, strategize and develop long-term PHP solutions that deliver real outcomes for your business.</p>
                                </div>
                            </div>
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>2</h3>
                                    <h2>Enterprise-grade Features</h2>
                                    <hr />
                                    <p>Made for lightning-fast user experiences, PHP provides the server-side backbone for secure and fast enterprise applications. Over 80% of the web is run on PHP, making it one of the world’s most popular technologies for cost-efficient and robust web development projects.</p>
                                </div>
                            </div>
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>3</h3>
                                    <h2>PHP Support & Maintenance</h2>
                                    <hr />
                                    <p>Our teams have worked closely with clients to maintain reliability in their business-critical applications. Whether you want to upgrade, carry out security and software updates, or simply need to eliminate the headache of regular maintenance, Kushel Digi provides support.</p>
                                </div>
                            </div>
                        </div>
                        <div className="php_stackflow_card">
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>4</h3>
                                    <h2>PHP-friendly Experiences</h2>
                                    <hr />
                                    <p>Choosing PHP as your backend technology is a great choice for versatility and assured performance. PHP excels mainly in web development projects, where it has been battle-proven and time-tested to deliver business results in short timeframes.</p>
                                </div>
                            </div>
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>5</h3>
                                    <h2>Full Cycle Product Development</h2>
                                    <hr />
                                    <p>We take care of your project from A to Z by leading your entire design and development process with proven agile methods that are designed to get all stakeholders (even non-technical ones) in alignment.</p>
                                </div>
                            </div>
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>6</h3>
                                    <h2>Competitive Pricing</h2>
                                    <hr />
                                    <p>As a well-documented open source framework with many pre-built components, PHP projects tend to be extremely cost efficient in the long run. Development and maintenance costs are often reduced to a minimum, and Polcode offers models to fit your budget.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="php_portfolio">
                    <div className="php_port">
                        <h2 className="our_php">Our <span>PHP</span>  Web Development <span>Portfolio</span> </h2>
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
                                <div className="kickta_big kickta_php">
                                    <div className="kickta_big1 kickta_phpt">
                                        <img src={travisHead} alt="kikma" />
                                        <div className="headst_big">
                                            <h2>Pain Relieving</h2>
                                            <h2>apparel</h2>
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
                                <div className="kickta_big kickta_php1">
                                    <div className="kickta_big1 kickta_phpt1">
                                        <img src={sulua} alt="kikma" />
                                        <div className="headst_big headst_bigttt">
                                            <h2>Deliver awesome,</h2>
                                            <h2>robust, reliable websites</h2>
                                            <h2>with Sulu CMS</h2>
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
                                <div className="kickta_big kickta_php2">
                                    <div className="kickta_big1 kickta_phpt2">
                                        <img src={sulua} alt="kikma" />
                                        <div className="headst_big headst_bigttt">
                                            <h2>data and experience</h2>
                                            <h2>management plat</h2>
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

                {/* <div className="php_techStack">
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
                </div> */}

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

                <div>
                    <div id="hello">
                        <div className="content">
                            <div className="content1">
                                <h1 className="heading">
                                    Our PHP Development <br />
                                    Services
                                </h1>
                                <hr className="ha" />
                                <p className="pra">
                                    Kushel Digi gives you expert PHP developers who work closely with your
                                    team across the entire development lifecycle. From UX/UI and design,
                                    to building, deploying and providing maintenance - our services ensure
                                    your PHP project is stable, secure, and maintainable.
                                </p>
                            </div>
                            <div className="content2">
                                <div className="content-2-1">
                                    <div className="first">
                                        <p className="pre1"> PHP Enterprise Solutions</p>
                                    </div>
                                    <div className="second">
                                        <p className="pre2">PHP for eCommerce </p>
                                    </div>
                                </div>
                                <div className="content-2-1">
                                    <div className="first">
                                        <p className="pre1"> PHP for CMS Development</p>
                                    </div>
                                    <div className="second">
                                        <p className="pre2">PHP-based APIs </p>
                                    </div>
                                </div>
                                <div className="content-2-1">
                                    <div className="first">
                                        <p className="pre1"> Legacy Application Rescue</p>
                                    </div>
                                    <div className="second">
                                        <p className="pre2">Code &amp; UX/UI Audits </p>
                                    </div>
                                </div>
                                <div className="content-2-1">
                                    <div className="first">
                                        <p className="pre1"> Mobile App Backend Development</p>
                                    </div>
                                    <div className="second">
                                        <p className="pre2">PHP Migrations &amp; Updates </p>
                                    </div>
                                </div>
                                <div className="content-2-1">
                                    <div className="first">
                                        <p className="pre1"> PHP Support &amp; Maintenance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="add">
                        <div className="content-2">
                            <h1 className="heading-3">
                                Why Should You Go for <span> PHP </span> Web Development?
                            </h1>
                            <p className="pra3">
                                PHP is a popular programming language widely used for developing web
                                applications. There are many reasons why businesses should opt for PHP
                                web development, including :
                            </p>
                        </div>
                        <div className="content-3">
                            <div className="dic1">
                                <img src={onring} alt="" className="one" />
                            </div>
                            <div className="dic2">
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src={onring1} alt="" className="icon" />
                                    </div>
                                    <div>
                                        <h1 className="heading-2">Scalability</h1>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        PHP web development is highly scalable, making it easy to add new
                                        features and functionalities to your website as your business grows.
                                    </p>
                                </div>
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src={onring1} alt="" className="icon" />
                                    </div>
                                    <div>
                                        <h1 className="heading-2">Open-source &amp; Free</h1>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        PHP is an open-source language, which means it is free and can be
                                        easily downloaded and installed on various platforms.
                                    </p>
                                </div>
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src={onring1} alt="" className="icon" />
                                    </div>
                                    <div>
                                        <h1 className="heading-2">Accessibility</h1>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        PHP is highly versatile, allowing its applications to be used across
                                        Windows, Linux, and Mac OS, providing excellent accessibility.
                                        PHP-based web apps can be effortlessly released across all major
                                        platforms.
                                    </p>
                                </div>
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src={onring1} alt="" className="icon" />
                                    </div>
                                    <div>
                                        <h1 className="heading-2">Security</h1>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        PHP is pre-equipped with protective measures to secure your website
                                        from potential malicious attacks but can be bolstered further
                                        through third-party security plugins and tools.
                                    </p>
                                </div>
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src={onring1} alt="" className="icon" />
                                    </div>
                                    <div>
                                        <h1 className="heading-2">Fast Development</h1>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        Due to its user-friendly design and thorough instructions, PHP web
                                        development projects can be accomplished quickly, allowing
                                        businesses to start profiting rapidly upon website launch.
                                    </p>
                                </div>
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src={onring1} alt="" className="icon" />
                                    </div>
                                    <div>
                                        <h1 className="heading-2">Large Development Community</h1>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        Developers remain passionate about PHP, and their support has
                                        allowed for the continual development of libraries and tools that
                                        have kept the language reliable and updated.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="get_in_php get_in_php1">
                    <div className="engag_mod engag_mod11">
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


                <ContactForm1 />

                <div className="home9 py-20 bigcom9">
                    <div className="home91 flex px-24">
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
    )
}

export default Php