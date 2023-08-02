import React, { useState, useEffect } from 'react';
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
import golita from '../images/golita.png';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import nativeSer1 from '../images/nativeSer1.png';
import nativeSer2 from '../images/nativeSer2.png';
import nativeSer3 from '../images/nativeSer3.png';
// import nativeSer4 from '../images/nativeSer4.png';
import nativeSer5 from '../images/nativeSer5.png';
import nativeSer6 from '../images/nativeSer6.png';
import nativeSer7 from '../images/nativeSer7.png';
import ServiceCommon from './common/ServiceCommon';
const ReactJsHire = () => {
    const [perPage, setPerPage] = useState(3);
    useEffect(() => {
        if (window.matchMedia("(max-width: 1350px)").matches) {
            setPerPage(3);
        }
        if (window.matchMedia("(max-width: 750px)").matches) {
            setPerPage(1);
        }
    }, []);
    return (
        <>
            <div className="ser-main">
                <div className="php-back">
                    <div className="php-back1">
                        <h2>Hire ReactJS Developers</h2>
                        <p>
                            Looking to create a front-end application that not only sells but also compliments your modern idea? Hire ReactJS developers from DianApps to escalate your dream project.
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
                <div className="hire_kui hire-kutta">
                    <div className="hire_line">
                        <hr className="hg1 hg19" />
                        <h1>

                            <span>Hire</span>  Kushel Digi <span>ReactJS</span>  Developers to strategically Build Complex-Free Apps

                        </h1>
                        <hr className="hg2 hg20" />
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
                                        <h1>ReactJS Consultancy</h1>
                                        <p>
                                            Looking for a front-end ReactJS solution? Our senior ReactJS executives may assist you to clarify all your concerns and queries while helping to create scalable solutions. We don’t just sketch your business workflows but also find various tactics & proposals to make sure the brand is ready to rank from day one of its releases.
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
                                        <h1>Material Design Integrations</h1>
                                        <p>
                                            Your fantastic app concept merits a beautiful design solution. Our innovative UI/UX designers and ReactJS developers work together to create a feature-rich and aesthetically appealing front-end design that encourages customers to explore the platform and choose the customer journey.
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
                                        <h1>Single Page Apps </h1>
                                        <p>
                                            We take all critical measures to improve your website visitors' experience by creating Single Page Apps with quicker response times, server-side rendering that benefits Google SERPs and dynamic content that adjusts to suit varied user preferences. DianApps never fails to deliver the ultimate results to its clients.
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
                                        <h1>Custom & Real-time Apps</h1>
                                        <p>
                                            No matter what sector your company is in or how unique your ReactJS app development needs are. Our ReactJS developers are capable of delivering modern, real-time web app solutions adapted to your individual requirements, resulting in improved outcomes and great ROIs for the long run accomplishments.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box">
                                    <div className="mig1">
                                        <h4>5</h4>
                                    </div>
                                    <div className="mig2">
                                        <h1>Plugin Implementation</h1>
                                        <p>
                                            Our ReactJS engineers make full use of the ReactJS front-end JavaScript library's full power to construct reusable plugins and widgets, improving the usability of your business-critical solution, which ultimately helps you stand out from the competition and claim success.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box">
                                    <div className="mig1">
                                        <h4>6</h4>
                                    </div>
                                    <div className="mig2">
                                        <h1>App Migration </h1>
                                        <p>
                                            We use the best practices of the ReactJS library to effortlessly transfer your conventional apps to ReactJS for greater performance and, as a result, more potential to gain users' interest, leading to a higher return on investment and sustainability.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box">
                                    <div className="mig1">
                                        <h4>6</h4>
                                    </div>
                                    <div className="mig2">
                                        <h1>App Support & Maintenance </h1>
                                        <p>
                                            Hire specialized ReactJS developers for app maintenance and support services as needed to ensure the top-notch performance of your ReactJS application at all times. They deliver app version upgrades with bug fixes and security patches on a regular and proactive basis to keep your app up to date in all technical aspects.


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
                                Why Hire ReactJS
                                Developers <br />
                                From  <span>Kushel Digi?</span>
                            </h1>
                        </div>
                        <p>
                            Hire professional ReactJS engineers from DianApps to transform your company ideas into dependable and lucrative software solutions.
                            Let's have a look at some of the reasons why you should engage our developers for your project:
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
                            <h1>Hire ReactJS Developers From kushel Digi  In 4 Steps</h1>
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

                {/* <ContactForm1 /> */}

                <ServiceCommon/>

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
                                        How do I hire ReactJS developers?
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
                                        Are ReactJS Developers in demand?
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
                                        What is the cost of hiring a ReactJS developer?
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
                                        Why should I hire a ReactJS developer from Kushel Digi?
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

export default ReactJsHire