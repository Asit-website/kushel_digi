import React, { useState, useEffect } from 'react';
import kes1 from '../images/kes1.png';
import kes2 from '../images/kes2.png';
import kes3 from '../images/kes3.png';
import kes4 from '../images/kes4.png';
import sidhaTandi from '../images/sidhaTandi.png';
import adimanus from '../images/adimanus.png';
import CaseStudy from './common/CaseStudy';
import nativeSer1 from '../images/nativeSer1.png';
import nativeSer2 from '../images/nativeSer2.png';
import nativeSer3 from '../images/nativeSer3.png';
// import nativeSer4 from '../images/nativeSer4.png';
import nativeSer5 from '../images/nativeSer5.png';
import nativeSer6 from '../images/nativeSer6.png';
import nativeSer7 from '../images/nativeSer7.png';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ContactForm1 from './common/ContactForm1';

import img14 from "../images/earthpap.png";
import img15 from "../images/Group 1000006826.png";
import img16 from "../images/shot.png";
import img18 from "../images/Group 1000006829.png";
import img19 from "../images/Frame (1).png";

const ReactNativeHire = () => {

    const [perPage, setPerPage] = useState(3);

    const [tab, setTab] = useState(1);

    useEffect(() => {
        if (window.matchMedia("(max-width: 1350px)").matches) {
            setPerPage(3);
        }
        if (window.matchMedia("(max-width: 750px)").matches) {
            setPerPage(1);
        }
    }, []);


    const tabAnother1 = () => {
        setTab(1);
        document.getElementById("pex1").style.color="#0C61FF";
        document.getElementById("pex2").style.color="#33475B";
        document.getElementById("pex3").style.color="#33475B";
        document.getElementById("pex4").style.color="#33475B";
    }
    const tabAnother2 = () => {
        setTab(2);
        document.getElementById("pex1").style.color="#33475B";
        document.getElementById("pex2").style.color="#0C61FF";
        document.getElementById("pex3").style.color="#33475B";
        document.getElementById("pex4").style.color="#33475B";
    }
    const tabAnother3 = () => {
        setTab(3);
        document.getElementById("pex1").style.color="#33475B";
        document.getElementById("pex2").style.color="#33475B";
        document.getElementById("pex3").style.color="#0C61FF";
        document.getElementById("pex4").style.color="#33475B";
        
    }
    const tabAnother4 = () => {
        setTab(4);
        document.getElementById("pex1").style.color="#33475B";
        document.getElementById("pex2").style.color="#33475B";
        document.getElementById("pex3").style.color="#33475B";
        document.getElementById("pex4").style.color="#0C61FF";
    }


    return (
        <div className="ser-main">
            <div className="php-back">
                <div className="php-back1 native_back1">
                    <h2>Enhance Your Market Presence With React</h2>
                    <h2>Native App Development Company</h2>
                    <p>
                        Build an app that delights users with a feature-rich and branded-looking mobile app for both iOS and Android platform..
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
                <div className="key_features2">
                    <div className='key_features_head'>
                        <h2>Leverage Our React Native App Development Services</h2>
                        <p>Our React Native app development team delivers high-performing mobile apps that bring your business ideas to life. From customization to consulting and support, Kushel Digi offers the whole spectrum of React Native app development services. We also take care of the design, development, and deployment of your React Native app backed by high-growth engines to ensure your app is ready to escalate in the market from day one.</p>
                    </div>
                    <div className='key_tanda'>
                        <div className="key_tanda1">
                            <img src={sidhaTandi} alt="" />
                            <div className='tandi_nav'>
                                <p onClick={tabAnother1} id='pex1'>React Native App Consultation & Support</p>
                                <p onClick={tabAnother2} id='pex2'>React Native for Android & iOS <br />App Development</p>
                                <p onClick={tabAnother3} id='pex3'>Cross-platform Migration Services</p>
                                <p onClick={tabAnother4} id='pex4'>React Native UI/UX services</p>
                            </div>
                        </div>
                        <div className="key_tanda2">
                            {
                                tab === 1 && (
                                    <div className='key_imgTand'>
                                        <p>Developing a React Native app comes with countless advantages and complications as well. Therefore, to allow you a seamless ride our React Native app services ensure that they understand your product expectations and offer you the best-fitting solution that aligns with your business mission and vision.</p>
                                        <img className='float-right' src={adimanus} alt="adimanus" />
                                    </div>
                                )
                            }

                            {
                                tab === 2 && (
                                    <div className='key_imgTand'>
                                        <p>Developing a React Native app comes with countless advantages and complications as well. Therefore, to allow you a seamless ride our React Native app services ensure that they understand your product expectations and offer you the best-fitting solution that aligns with your business mission and vision.</p>
                                        <img className='float-right' src={adimanus} alt="adimanus" />
                                    </div>
                                )
                            }

                            {
                                tab === 3 && (
                                    <div className='key_imgTand'>
                                        <p>Developing a React Native app comes with countless advantages and complications as well. Therefore, to allow you a seamless ride our React Native app services ensure that they understand your product expectations and offer you the best-fitting solution that aligns with your business mission and vision.</p>
                                        <img className='float-right' src={adimanus} alt="adimanus" />
                                    </div>
                                )
                            }

                            {
                                tab === 4 && (
                                    <div className='key_imgTand'>
                                        <p>Developing a React Native app comes with countless advantages and complications as well. Therefore, to allow you a seamless ride our React Native app services ensure that they understand your product expectations and offer you the best-fitting solution that aligns with your business mission and vision.</p>
                                        <img className='float-right' src={adimanus} alt="adimanus" />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* ============third banega=============== */}
            {/* <div className="five-create">
        <p className="intutive">
          Our Process to Create Intuitive React Native Apps
        </p>
        <p className="leverage">
          Unlock your true potential, leverage the best of technology, and
          create apps based on modern algorithms with our React Native
          development experts.
        </p>
        <div className="triple-mainbox">
          <div className="discover-box">
            <div className="line">
              <img src={img14} id="delo"></img>
            </div>
            <p className="discover">Discover</p>
            <p className="project">
              There goes a lot in the back to turn your project into a success
              story.
            </p>
          </div>
          <hr className="horzt" />
          <div className="discover-box">
            <img src={img15} id="delo"></img>
            <p className="discover">Define</p>
            <p className="project">
              Determining the scope of how we can convert your idea into
              reality.
            </p>
          </div>
          <hr className="horzt" />
          <div className="discover-box">
            <img src={img16} id="delo"></img>
            <p className="discover">Design</p>
            <p className="project">Offering you breakthrough app prototypes</p>
          </div>
        </div>
        <div className="double-mainbox">
          <div className="discover-box">
            <img src={img18} id="delo"></img>
            <p className="discover">Analyze & Deliver</p>
            <p className="project">
              Stable and secure application served at your table as per the
              deadlines
            </p>
          </div>
          <hr className="horzt" />
          <div className="discover-box">
            <img src={img19} id="delo"></img>
            <p className="discover">Develop</p>
            <p className="project" id="important">
              We’d commence development with a - milestone based plan of action.
            </p>
          </div>
          <hr id="line2" />
          <hr id="vertical" />
        </div>
      </div> */}
            {/* ================third end=============== */}
            <div className="why_kushel_native">
                <div className='native_think'>
                    <h2>Why Choose Kushel Digi for React Native App Development ?</h2>
                    <p>Being the most recognized React Native app development company, Kushel Digi has delivered a range of successful apps inclining clients to ace the digital space outstandingly. We know when and how to use our React Native expertise, therefore, providing the easiest yet most reliable way to reach the market.</p>
                </div>
                <div className="native_card">
                    <div className="native_box">
                        <h3>Client satisfaction</h3>
                        <p>We have an 80% return client base.
                            Our React Native expertise is mixed
                            with our work ethics making client
                            hooked for life-long partnerships.</p>
                    </div>
                    <div className="native_box">
                        <h3>Hack-proof software</h3>
                        <p>Our React Native team ensures that
                            your app is ready to face every
                            network and operational change in a hack and glitch-proof manner.</p>
                    </div>
                    <div className="native_box">
                        <h3>On-time delivery</h3>
                        <p>We take your need to have a competitive edge very seriously therefore our React Native experts ensure that your software is delivered well within the projected timeline.</p>
                    </div>
                    <div className="native_box">
                        <h3>Dedicated marketing <br />
                            support</h3>
                        <p>Our React Native team makes your software an internet and offline sensation at the back of excellent development and extensive marketing efforts.</p>
                    </div>
                </div>
            </div>
            <div className="boost">
                <div className="boost_sect">
                    <h1>We hold the key to making your app rule the digital space</h1>
                    <p>Let’s build your React Native app together!</p>
                    <div className="boost_button boost_button1">
                        <button>Hire React Native App Developers</button>
                    </div>
                </div>
            </div>

            <div className="php_portfolio">
                <div className="php_port">
                    <h2 className="our_php">Our <span>React Native</span>  Web Development <span>Portfolio</span></h2>
                </div>
                <CaseStudy />
            </div>

            <div className="why_pnt">
                <div className="why_pnt2 why_pnt22">
                    <div className="hire_steps_php">
                        <h1>Hire React Native Developers In 4 Steps</h1>
                        <p>
                            Hiring a React Native developer from Kushel Digi is simple. Follow 4 easy steps to employ a team for your innovative web application.
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
                                Take interview of the <br /> React native team
                            </p>
                        </div>
                        <div className="hire_phpStep_box">
                            <h1>04</h1>
                            <p>Hire the React Native <br /> developers</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="home3 pb-20 bg-gray-100 relative">
                <div className="home31 py-8 px-24">
                    <div className="home311 text-center mb-4">
                        <h1 className="mb-3">
                            <span className="font-bold m-1">OUR</span> SERVICES
                        </h1>
                        <p>
                            Offering scalable and custom-made development services using
                            agile methodologies and sturdy coding.
                        </p>
                    </div>
                    <div className="home312 homanta">
                        <Splide
                            aria-label="Our Services"
                            options={{
                                perPage,
                                perMove: 1,
                                autoplay: true,
                                pauseOnHover: true,
                                type: "loop",
                                interval: 1600,
                                drag: true,
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
                                        <img src={nativeSer1} alt="baty" />
                                    </div>
                                    <div className="nat_heading">
                                        <h3>E-commerce Solutions</h3>
                                        <p>Teams at fast-growing companies use Superside to get quality graphic design done at scale. </p>
                                        <span>Read More</span>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div> */}

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
                            gap:1
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

            {/* <ContactForm1 /> */}
        </div>
    )
}

export default ReactNativeHire