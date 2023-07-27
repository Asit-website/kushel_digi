import React, { useState,useEffect } from 'react';
import kes1 from '../images/kes1.png';
import kes2 from '../images/kes2.png';
import kes3 from '../images/kes3.png';
import kes4 from '../images/kes4.png';
import sidhaTandi from '../images/sidhaTandi.png';
import bulbset from '../images/bulbset.png';
import mingi1 from '../images/minigi1.png';
import mingi2 from '../images/mingi2.png';
import gt1 from '../images/gt1.png';
import gt3 from '../images/gt3.png';
import gtt2 from '../images/gtt2.png';
import gtt3 from '../images/gtt3.png';
import nativeSer1 from '../images/nativeSer1.png';
import nativeSer2 from '../images/nativeSer2.png';
import nativeSer3 from '../images/nativeSer3.png';
// import nativeSer4 from '../images/nativeSer4.png';
import nativeSer5 from '../images/nativeSer5.png';
import nativeSer6 from '../images/nativeSer6.png';
import nativeSer7 from '../images/nativeSer7.png';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
const FluterHire = () => {
    const [tab, setTab] = useState(1);
    const [perPage, setPerPage] = useState(3);
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
        document.getElementById("pex1").style.color = "#0C61FF";
        document.getElementById("pex2").style.color = "#33475B";
        document.getElementById("pex3").style.color = "#33475B";
        document.getElementById("pex4").style.color = "#33475B";
    }
    const tabAnother2 = () => {
        setTab(2);
        document.getElementById("pex1").style.color = "#33475B";
        document.getElementById("pex2").style.color = "#0C61FF";
        document.getElementById("pex3").style.color = "#33475B";
        document.getElementById("pex4").style.color = "#33475B";
    }
    const tabAnother3 = () => {
        setTab(3);
        document.getElementById("pex1").style.color = "#33475B";
        document.getElementById("pex2").style.color = "#33475B";
        document.getElementById("pex3").style.color = "#0C61FF";
        document.getElementById("pex4").style.color = "#33475B";

    }
    const tabAnother4 = () => {
        setTab(4);
        document.getElementById("pex1").style.color = "#33475B";
        document.getElementById("pex2").style.color = "#33475B";
        document.getElementById("pex3").style.color = "#33475B";
        document.getElementById("pex4").style.color = "#0C61FF";
    }
    return (
        <>
            <div className="ser-main">
                <div className="php-back">
                    <div className="php-back1 native_back1">
                        <h2>Elevate your brand's visibility with Flutter</h2>
                        <h2>App Development Company</h2>
                        <p>
                            We are a reputable provider of Flutter app development services, dominating the market with the right cross-platform capabilities.
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
                            <h2>Empower your business with our Flutter App Development services</h2>
                            <p>Kushel Digi is a leading flutter app development company that holds an empowering team of Flutter app developers to build robust and feature-rich applications to inspire not only our clients but also investors. We work on industry niches and are always thrilled to take up versatile projects. Hire our dedicated flutter developers to create a cross-platform app that successfully transforms your digital presence to full throttle.</p>
                        </div>
                        <div className='key_tanda'>
                            <div className="key_tanda1">
                                <img src={sidhaTandi} alt="" />
                                <div className='tandi_nav'>
                                    <p onClick={tabAnother1} id='pex1'>Flutter App Development Consultation</p>
                                    <p onClick={tabAnother2} id='pex2'>Flutter App UI/UX</p>
                                    <p onClick={tabAnother3} id='pex3'>Custom Flutter App Development</p>
                                    <p onClick={tabAnother4} id='pex4'>Flutter Software Testing</p>
                                </div>
                            </div>
                            <div className="key_tanda2">
                                {
                                    tab === 1 && (
                                        <div className='key_imgTand'>
                                            <p>To achieve outstanding results, work with our flutter app developers. We approach every project with a personalized and case-by-case basis. DianApps is renowned for its professionalism, commitment, and tailored solutions that address certain business needs.</p>
                                            <img className='float-right' src={bulbset} alt="adimanus" />
                                        </div>
                                    )
                                }

                                {
                                    tab === 2 && (
                                        <div className='key_imgTand'>
                                            <p>To achieve outstanding results, work with our flutter app developers. We approach every project with a personalized and case-by-case basis. DianApps is renowned for its professionalism, commitment, and tailored solutions that address certain business needs.</p>
                                            <img className='float-right' src={bulbset} alt="adimanus" />
                                        </div>
                                    )
                                }

                                {
                                    tab === 3 && (
                                        <div className='key_imgTand'>
                                            <p>To achieve outstanding results, work with our flutter app developers. We approach every project with a personalized and case-by-case basis. DianApps is renowned for its professionalism, commitment, and tailored solutions that address certain business needs.</p>
                                            <img className='float-right' src={bulbset} alt="adimanus" />
                                        </div>
                                    )
                                }

                                {
                                    tab === 4 && (
                                        <div className='key_imgTand'>
                                            <p>To achieve outstanding results, work with our flutter app developers. We approach every project with a personalized and case-by-case basis. DianApps is renowned for its professionalism, commitment, and tailored solutions that address certain business needs.</p>
                                            <img className='float-right' src={bulbset} alt="adimanus" />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==============yaha par our process lagega========== */}

                <div className="android_teck">
                    <h1>T E C H N O L O G I E S</h1>
                    <div className='ttr'></div>
                    <div className="android_tect_card">

                        <div className='ty_py ty_py11'>
                            <div className="ty_py1">
                                <div className="koiy_img">
                                    <img src={mingi1} alt="" />
                                </div>
                                <p>Swift</p>
                            </div>
                            <div className="ty_py1">
                                <div className="koiy_img">
                                    <img src={mingi2} alt="" />
                                </div>
                                <p>objective-C</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why_chose_ios">
                    <h1 >Why Choose Kushel Digi for ios App Development?</h1>
                    <p className='why_chst'>Kushel Digi sees every project as a personal project. We take the complete responsibility of building apps which are built to rule the platforms they are
                        made live on. However, our flutter app development services doesn’t just end there. We ensure that the world knows about your offering through our
                        extensive marketing efforts.</p>

                    <div className="apli-cards">
                        <div className="apli-card">
                            <div className="apli-box">
                                <img src={gt1} alt="" />
                                <div className="gt_head">
                                    <h2>Client satisfaction</h2>
                                    <p>We have a 80% return client base. Our expertise mixed with our work ethics makes clients our life-long partners.</p>
                                </div>
                            </div>
                            <div className="apli-box">
                                <img src={gtt2} alt="" />
                                <div className="gt_head">
                                    <h2>Hack-proof software</h2>
                                    <p>We ensure that your app is ready to face every network and operational change in a hack and glitch proof manner.</p>
                                </div>
                            </div>
                            <div className="apli-box">
                                <img src={gtt3} alt="" />
                                <div className="gt_head">
                                    <h2>On-time delivery</h2>
                                    <p>We take your need to have a competitive edge very seriously. We ensure that your software is delivered well within the projected timeline.</p>
                                </div>
                            </div>

                            <div className="apli-box">
                                <img src={gt3} alt="" />
                                <div className="gt_head">
                                    <h2>Dedicated marketing support</h2>
                                    <p>We make your software an internet and offline sensation at the back of excellent development and extensive marketing efforts.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="boost boost1">
                    <div className="boost_sect boost_sect1 boost_sect2">
                        <h1>We hold the key to making your app rule the digital space</h1>
                        <p>Let's work together</p>
                        <div className="boost_button boost_button1">
                            <button>HIRE NOW</button>
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
                                            What potential benefits does outsourcing Flutter app development offer?
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
                                            How much does hiring a Flutter app developer cost?
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
                                            Can we use flutter for Web development?
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
                                            How much does it cost to build a Flutter application?
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
        </>
    )
}

export default FluterHire;