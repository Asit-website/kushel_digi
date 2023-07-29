import React, { useState, useEffect } from 'react'
import kes1 from '../images/kes1.png';
import kes2 from '../images/kes2.png';
import kes3 from '../images/kes3.png';
import kes4 from '../images/kes4.png';
import nodeFrame1 from '../images/nodeFrame1.png';
import nodeFrame2 from '../images/nodeFrame2.png';
import nodeFrame3 from '../images/nodeFrame3.png';
import nodeFrame4 from '../images/nodeFrame4.png';
import nodeFrame5 from '../images/nodeFrame5.png';
import nodeFrame6 from '../images/nodeFrame6.png';
import frena1 from '../images/frena1.png';
import frena2 from '../images/frena2.png';
import frena3 from '../images/frena3.png';
import frena4 from '../images/frena4.png';
import frena5 from '../images/frena5.png';
import frena6 from '../images/frena6.png';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import nativeSer1 from '../images/nativeSer1.png';
import nativeSer2 from '../images/nativeSer2.png';
import nativeSer3 from '../images/nativeSer3.png';
// import nativeSer4 from '../images/nativeSer4.png';
import nativeSer5 from '../images/nativeSer5.png';
import nativeSer6 from '../images/nativeSer6.png';
import nativeSer7 from '../images/nativeSer7.png';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
const HireNodeJs = () => {
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
        <div className="ser-main">
            <div className="php-back">
                <div className="php-back1">
                    <h2>Hire Node.js Developers</h2>
                    <p>
                        Looking for the best Node.js developers in the digital world? The Kushel Digi Node team carry an expertise in building scalable, robust frontend and backend of future-ready software solutions. One that helps you become tomorrow’s leaders.
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

            <div className="key_features">
                <div className="key_features1">
                    <h2>KEY FEATURES</h2>
                    <div className="features_card">
                        <div className="features_box">
                            <img src={kes1} alt="" />
                            <p>Cost Effective</p>
                        </div>
                        <div className="features_box">
                            <img src={kes2} alt="" />
                            <p>High Performance</p>
                        </div>
                        <div className="features_box">
                            <img src={kes3} alt="" />
                            <p>Web Support</p>
                        </div>
                        <div className="features_box">
                            <img src={kes4} alt="" />
                            <p>Open Source</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="hire_kui">
                <div className="hire_line">
                    <hr className="hg1 hg11" />
                    <h1>
                        <span>Hire</span>  Kushel Digi <span>Node.js</span>  for End-to-end Services
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
                            <div className="migration_box migration_box1">
                                <div className="mig1">
                                    <h4>1</h4>
                                </div>
                                <div className="mig2">
                                    <h1>Node.js consultation</h1>
                                    <p>
                                        Our team of Node.js developers in India hold an expertise in keeping your software up and running under a range of different network conditions. We ensure that your project is aligned with the market needs and your business goal by integrating all the up and coming updates and features in the app.
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="migration_box migration_box1">
                                <div className="mig1">
                                    <h4>2</h4>
                                </div>
                                <div className="mig2">
                                    <h1>Custom Node.js development</h1>
                                    <p>
                                        Our team of developers know every trick of the trade required to create high-performance mobile applications at the back of Node.js capabilities. We ensure that your software stands apart from the many projects in the digital space. Characteristics like scalable, high-performance, and cross-platform is what defines the software we build.
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="migration_box migration_box1">
                                <div className="mig1">
                                    <h4>3</h4>
                                </div>
                                <div className="mig2">
                                    <h1>Enterprise Node.js apps</h1>
                                    <p>
                                        We specialize in the creation of solutions that make enterprises scalable, lean, and highly secure. Our Node.js developers have worked with a number of enterprise level clients with the same outcome - multi-platform running scalable applications. We ensure that the software we build plays a role in strengthening your digitalization efforts.
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="migration_box migration_box1">
                                <div className="mig1">
                                    <h4>4</h4>
                                </div>
                                <div className="mig2">
                                    <h1>Node.js migration</h1>
                                    <p>
                                        Our team understands that over time software gets outdated and needs to be upgraded to maintain the same competitive edge. We know how to migrate an existing application into one built on Node.js, with zero runtime issues. We can help you migrate your outdated solutions into a platform that supports lean.
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="migration_box migration_box1">
                                <div className="mig1">
                                    <h4>5</h4>
                                </div>
                                <div className="mig2">
                                    <h1>Node.js maintenance</h1>
                                    <p>
                                        Our team of Node.js developers in India hold an expertise in keeping your software up and running under a range of different network conditions. We ensure that your project is aligned with the market needs and your business goal by integrating all the up and coming updates and features in the app.
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>


            <div className="technical_sunt">
                <h2>Our <span>Node.js Developers’</span>  Technical Expertise</h2>
                <div className="node-cards">
                    <div className="node-card">
                        <div className="node-box">
                            <div className="node_img">
                                <img src={nodeFrame1} alt="" />
                            </div>
                            <div className="nodung-head">
                                <h3>Node.js Consulting and <br />
                                    Maintenance</h3>
                                <p>Get assistance with code review, app scaling, implementing development best practices, finding performance issues, and more with SPEC India’s consultation service. We have a qualified team of developers who would keep your data extensive Node JS application running smoothly by providing comprehensive support and maintenance service. The team will also help you to scale, update and improve the app performance as per your project’s requirements.</p>
                            </div>
                        </div>
                        <div className="node-box">
                            <div className="node_img">
                                <img src={nodeFrame2} alt="" />
                            </div>
                            <div className="nodung-head">
                                <h3>Enterprise Node.js Web  <br /> Apps</h3>
                                <p>Make your large-scale enterprise available with a modular, secure, and flexible web app with Node.js. Scalability and adaptability are the key features of Node JS owning to its microservices architecture. Further, you can hire Node JS developers from us to execute all your custom web app requirements. Its support for tools and third-party modules enables the developer to build complex apps without starting the development from the scratch.</p>
                            </div>
                        </div>
                        <div className="node-box">
                            <div className="node_img">
                                <img src={nodeFrame3} alt="" />
                            </div>
                            <div className="nodung-head">
                                <h3>Node.js Plugin <br />
                                    Development</h3>
                                <p>Enhancing the app’s performance, writing the app’s backend in JavaScript, and adding new features and functionalities are now made easy with custom plugins that our Node.JS developers build. Further, these plugins also facilitate expansion and customizations of any minimal viable product. Despite the increase in business size, our Node.js programmers’ plugin development skills would help to extend the app with ease.</p>
                            </div>
                        </div>
                    </div>
                    <div className="node-card mt-20">
                        <div className="node-box">
                            <div className="node_img">
                                <img src={nodeFrame4} alt="" />
                            </div>
                            <div className="nodung-head">
                                <h3>Node.js Application <br /> Migration</h3>
                                <p>It is high time to migrate your app from your current PHP, .NET, or JAVA platform to Node.js, our developers’ extensive skills in migrating to Node.js would be of great assistance. Node.js is an ideal choice if you are looking for a runtime environment that supports scalability, great performance, uninterrupted user experience and overcomes the specific weakness of your existing app development platform.</p>
                            </div>
                        </div>

                        <div className="node-box">
                            <div className="node_img">
                                <img src={nodeFrame5} alt="" />
                            </div>
                            <div className="nodung-head">
                                <h3>API Integration and <br /> Development</h3>
                                <p>Leverage our Node JS developer for hire service to build rest-for-use, secure, robust, scalable, Node.js JSON, Express, and REST API. To enhance the performance of your application hire Node JS developer who will assist you in integrating APIs (existing or newly developed) into your existing technologies. Apart from it we also have experience in developing, implementing, and integrating custom APIs for app improvement.</p>
                            </div>
                        </div>

                        <div className="node-box">
                            <div className="node_img">
                                <img src={nodeFrame6} alt="" />
                            </div>
                            <div className="nodung-head">
                                <h3>Custom Node.js <br /> Development</h3>
                                <p>We deploy a dedicated team of Node.js developers to understand your business requirements to tailor custom Node.js development services. The custom Node.JS application soothes custom requirements of the app like scalability, high performance, and security along with the required size and complexity of the application. Our programmers would also update the features and functionalities to address the changing requirements and app growth.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="nodes_ben">
                <h2>Benefits of Node JS Development Services</h2>
                <div className='mt-4'>
                    <p className='strug'>Developers struggle to juggle between front-end and back-end, but this runtime environment makes the</p>
                    <p className='strug'>development effortless and faster as it can be used for both. The other Node.js benefits include:</p>
                </div>

                <div className="node_bents">
                    <div className="node_bent">
                        <div className="node_benta">
                            <div className="head_brnta">
                                <h3>Scalability</h3>
                            </div>
                            <p>Owning its mechanism of handling non-blocking I/O calls with a single thread makes it highly scalable which empowers the app to make a considerable connection in a single instance.</p>
                        </div>
                        <div className="node_benta">
                            <div className="head_brnta">
                                <h3>Quick Caching</h3>
                            </div>
                            <p>Caching module enables Node JS developers to eliminate code execution or task overload with the feature of single-module caching. As a result, its users get quicker responses when accessing web pages.</p>
                        </div>
                        <div className="node_benta">
                            <div className="head_brnta">
                                <h3>Single-threaded</h3>
                            </div>
                            <p>The ability of Node JS to effortlessly handle more concurrent client requests is because of its Single Threaded Event Loop Model. This further reduces memory and resource usage.</p>
                        </div>
                    </div>
                    <div className="node_bent">
                        <div className="node_benta">
                            <div className="head_brnta">
                                <h3>Asynchronous & Event Driven I/O</h3>
                            </div>
                            <p>Owning its mechanism of handling non-blocking I/O calls with a single thread makes it highly scalable which empowers the app to make a considerable connection in a single instance.</p>
                        </div>
                        <div className="node_benta">
                            <div className="head_brnta">
                                <h3>Faster Time-To-Market</h3>
                            </div>
                            <p>Caching module enables Node JS developers to eliminate code execution or task overload with the feature of single-module caching. As a result, its users get quicker responses when accessing web pages.</p>
                        </div>
                        <div className="node_benta">
                            <div className="head_brnta">
                                <h3>Extensibility</h3>
                            </div>
                            <p>The ability of Node JS to effortlessly handle more concurrent client requests is because of its Single Threaded Event Loop Model. This further reduces memory and resource usage.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="boost boost1">
                <div className="boost_sect boost_sect1 boost_secty">
                    <h1>Hire Node JS Developer for Your Dream Project</h1>
                    <p>We have a team of seasoned Node JS developers who can build you exceptional solutions! Our dedicated developers would help your dream project come alive!</p>
                    <div className="boost_button boost_button1">
                        <button>HIRE NOW</button>
                    </div>
                </div>
            </div>

            <div className="kushel_cant">
                <h1>Why Choose Kushel Digi Node.js Developers?</h1>
                <p className="we_are mt-2">We are a reputed Node JS development company driven by the motivation to provide
                </p>
                <p className="we_are">breakthrough Node JS development services.</p>

                <div className="dedicated_sings">
                    <div className="sing">
                        <div className="dedicated_singat">
                            <div className="singi_img">
                                <img src={frena1} alt="frena1" />
                                <h4>Dedicated <br /> development  team</h4>
                            </div>
                            <div className="singata-para">
                                <p>You can now have a team comprising of the best talents when you hire Node.js developer from us to meet all project development requirements at a preferable engagement model owing to our dedicated development team model.</p>
                            </div>
                        </div>
                        <div className="dedicated_singat">
                            <div className="singi_img">
                                <img src={frena2} alt="frena1" />
                                <h4>Timely Completion <br /> Assurance</h4>
                            </div>
                            <div className="singata-para">
                                <p>Our developers abide by strict time schedules these results in the timely completion of the project without compromising quality at any aspect of the development process.</p>
                            </div>
                        </div>
                        <div className="dedicated_singat">
                            <div className="singi_img">
                                <img src={frena3} alt="frena1" />
                                <h4>Effortless Onboarding <br /> Process</h4>
                            </div>
                            <div className="singata-para">
                                <p>It's our timebound software development, discrete project management processes, strategic implementation, and more than three decades of experience resulting in a seamless onboarding approach.</p>
                            </div>
                        </div>
                    </div>
                    <div className="sing">
                        <div className="dedicated_singat">
                            <div className="singi_img">
                                <img src={frena4} alt="frena1" />
                                <h4>Engagement Modes</h4>
                            </div>
                            <div className="singata-para">
                                <p>You can now have a team comprising of the best talents when you hire Node.js developer from us to meet all project development requirements at a preferable engagement model owing to our dedicated development team model.</p>
                            </div>
                        </div>
                        <div className="dedicated_singat">
                            <div className="singi_img">
                                <img src={frena5} alt="frena1" />
                                <h4>No Hidden Costs</h4>
                            </div>
                            <div className="singata-para">
                                <p>Our developers abide by strict time schedules these results in the timely completion of the project without compromising quality at any aspect of the development process.</p>
                            </div>
                        </div>
                        <div className="dedicated_singat">
                            <div className="singi_img">
                                <img src={frena6} alt="frena1" />
                                <h4>Unhindered 24x7 <br /> Support</h4>
                            </div>
                            <div className="singata-para">
                                <p>It's our timebound software development, discrete project management processes, strategic implementation, and more than three decades of experience resulting in a seamless onboarding approach.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="why_pnt why_pnt1111">

                <div className="why_pnt2 why_pnt23">
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

            <div className="others_nat_serv">
                <h3 className='ot_ser'>Other Services</h3>
                <hr className='ot_line' />
                <div className="nat_card">
                    <Splide
                        className="w-full"
                        aria-label="Our Services"
                        options={{
                            perPage: perPage,
                            perMove: 1,
                            autoplay: true,
                            pauseOnHover: true,
                            type: "loop",
                            interval: 3000,
                            drag: true,
                            gap: 1
                        }}
                    >
                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img src={nativeSer1} alt="baty" />
                                </div>
                                <div className="nat_heading">
                                    <h3>E-commerce Solutions</h3>
                                    <p>Teams at fast-growing companies use Superside to get quality graphic design done at scale. </p>
                                    <span>Read More</span>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img src={nativeSer2} alt="baty" />
                                </div>
                                <div className="nat_heading">
                                    <h3>UI/UX Design</h3>
                                    <p>redesign, rebuild and redefine user
                                        experiences and craft interactions like no
                                        other with our best-in-class design services.</p>
                                    <span>Read More</span>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img src={nativeSer3} alt="baty" />
                                </div>
                                <div className="nat_heading">
                                    <h3>Mobile App Development</h3>
                                    <p>We design custom dynamic mobile apps using cutting-edge technologies to help you transform your business.</p>
                                    <span>Read More</span>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img src={nativeSer3} alt="baty" />
                                </div>
                                <div className="nat_heading">
                                    <h3>Web Development</h3>
                                    <p>Our web professionals create strong, durable, and bespoke websites that set you apart from the competition.</p>
                                    <span>Read More</span>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img src={nativeSer5} alt="baty" />
                                </div>
                                <div className="nat_heading">
                                    <h3>Graphic Design</h3>
                                    <p>Teams at fast-growing companies use Superside to get quality graphic design done at scale.</p>
                                    <span>Read More</span>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img src={nativeSer6} alt="baty" />
                                </div>
                                <div className="nat_heading">
                                    <h3>Digital Marketing</h3>
                                    <p>Drive sustainable growth, increase customer acquisition, and high website traffic with our online tools.</p>
                                    <span>Read More</span>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img src={nativeSer7} alt="baty" />
                                </div>
                                <div className="nat_heading">
                                    <h3>AR/VR</h3>
                                    <p>We assist clients to employ AR and VR technologies to captivate audiences and multiple ROI.</p>
                                    <span>Read More</span>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>

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
                                    Why choose Node JS for your web app development project?
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
                                    How much does it cost to hire Node JS developers?
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
                                    Is Node.js secure?
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
                                    What our Node.Js developers can do for you?
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
                        {/* <div className="home9121 font-semibold w-fit">
                See All FAQs
              </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireNodeJs