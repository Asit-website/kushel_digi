import React, { useState, useEffect } from 'react';
import kes1 from '../images/kes1.png';
import kes2 from '../images/kes2.png';
import kes3 from '../images/kes3.png';
import kes4 from '../images/kes4.png';
import sidhaTandi from '../images/sidhaTandi.png';
import adimanus from '../images/adimanus.png'
import bulbing from '../images/bulbing.png';
import koiy from '../images/koiy.png';
import koiy1 from '../images/koyi1.png';
import gt1 from '../images/gt1.png';
import gt2 from '../images/gt2.png';
import gt3 from '../images/gt3.png';
import gt4 from '../images/gt4.png';
import nativeSer1 from '../images/nativeSer1.png';
import nativeSer2 from '../images/nativeSer2.png';
import nativeSer3 from '../images/nativeSer3.png';
// import nativeSer4 from '../images/nativeSer4.png';
import nativeSer5 from '../images/nativeSer5.png';
import nativeSer6 from '../images/nativeSer6.png';
import nativeSer7 from '../images/nativeSer7.png';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import framework1 from '../images/framework1.png';
import framework2 from '../images/framework2.png';
import assisment1 from '../images/Assisment1.png';
import assisment2 from '../images/Assisment2.png'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import ServiceCommon from './common/ServiceCommon';

const AndroidHire = () => {
    const [tab, setTab] = useState(1);
    const [fat, setFat] = useState(1);
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

    const techno1 = () => {
        setFat(1);
        document.getElementById("first").style.borderBottom = "3px solid #0142E1";
        document.getElementById("second").style.borderBottom = "none";
        document.getElementById("third").style.borderBottom = "none";
    }

    const techno2 = () => {
        setFat(2);
        document.getElementById("first").style.borderBottom = "none";
        document.getElementById("second").style.borderBottom = "3px solid #0142E1";
        document.getElementById("third").style.borderBottom = "none";
    }

    const techno3 = () => {
        setFat(3);
        document.getElementById("first").style.borderBottom = "none";
        document.getElementById("second").style.borderBottom = "none";
        document.getElementById("third").style.borderBottom = "3px solid #0142E1";
    }
    return (
        <>
            <div className="ser-main">
                <div className="php-back">
                    <div className="php-back1 native_back1">
                        <h2>Hire Android Developers</h2>
                        {/* <h2>Native App Development Company</h2> */}
                        <p>
                            Our full stack Android app developers have profound experience on design standards, user interface, code optimization, user experience, and core of Android technology
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
                            <h2>Full-Fledged Android App Development Services</h2>
                            <p>As a leading Android app development company, we understand the importance of mobile apps in today's digital world. Our team of experienced developers, designers, and strategists is here to help turn your ideas into reality. We specialize in creating custom Android apps that are not only user-friendly but also deliver a seamless user experience.Whether you have a complex application to build or a simple MVP android app, we are well-versed in providing the ultimate solutions with robust and innovative technologies while also ensuring that our team and you are on the same page by effectively communicating at every stage of the development.</p>
                        </div>
                        <div className='key_tanda'>
                            <div className="key_tanda1">
                                <img src={sidhaTandi} alt="" />
                                <div className='tandi_nav'>
                                    <p onClick={tabAnother1} id='pex1'>Android app development consultation</p>
                                    <p onClick={tabAnother2} id='pex2'>Android app UI/UX</p>
                                    <p onClick={tabAnother3} id='pex3'>Custom android app development</p>
                                    <p onClick={tabAnother4} id='pex4'>Android software testing</p>
                                </div>
                            </div>
                            <div className="key_tanda2">
                                {
                                    tab === 1 && (
                                        <div className='key_imgTand'>
                                            <p>Android apps have their user base and set of client requirements. We assist companies in integrating their concepts with these standards and an Android-specific customer base. Our Android app developers assist you in determining the ideal Android platform and methods for dominating the market.</p>
                                            <img className='float-right' src={bulbing} alt="adimanus" />
                                        </div>
                                    )
                                }

                                {
                                    tab === 2 && (
                                        <div className='key_imgTand'>
                                            <p>Android apps have their user base and set of client requirements. We assist companies in integrating their concepts with these standards and an Android-specific customer base. Our Android app developers assist you in determining the ideal Android platform and methods for dominating the market.</p>
                                            <img className='float-right' src={bulbing} alt="adimanus" />
                                        </div>
                                    )
                                }

                                {
                                    tab === 3 && (
                                        <div className='key_imgTand'>
                                            <p>Android apps have their user base and set of client requirements. We assist companies in integrating their concepts with these standards and an Android-specific customer base. Our Android app developers assist you in determining the ideal Android platform and methods for dominating the market.</p>
                                            <img className='float-right' src={bulbing} alt="adimanus" />
                                        </div>
                                    )
                                }

                                {
                                    tab === 4 && (
                                        <div className='key_imgTand'>
                                            <p>Android apps have their user base and set of client requirements. We assist companies in integrating their concepts with these standards and an Android-specific customer base. Our Android app developers assist you in determining the ideal Android platform and methods for dominating the market.</p>
                                            <img className='float-right' src={bulbing} alt="adimanus" />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boost boost1">
                    <div className="boost_sect boost_sect1">
                        <h1>Hire Dedicated Android Developers and Beat the Tech Curve</h1>
                        <p>Acquire a vast pool of highly skilled resources with acclaimed domain and technical expertise to build scalable Android applications that solidify your brand presence, handle the tech aspect, and let you focus on your core business</p>
                        <div className="boost_button boost_button1">
                            <button>HIRE NOW</button>
                        </div>
                    </div>
                </div>
                <div className="hire_apps">
                    <h2>Hire Android App Developers and Experience Hyper-Growth</h2>
                    <p className='actsy'>Access dedicated teams of Android developers, consultants, and engineers with fully-functional teams to craft bespoke solutions for your enterprise, target market, and brand persona</p>

                    <div className="nty-cards">
                        <div className="nty-card">
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>Native Android App</h3>

                                </div>
                                <div className="parst-ty">
                                    <p>Leverage the best of intuitive, interactive, and secure Android applications built with the full potential of Android Studio, HTML, C, C++,
                                        Java, and more</p>
                                </div>
                            </div>
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>Blockchain Applications</h3>

                                </div>
                                <div className="parst-ty">
                                    <p>Hire Android developers with vetted experience in Blockchain technology and capabilities to develop applications aligned to your enterprise needs</p>
                                </div>
                            </div>
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>AR/VR Mobile Apps</h3>

                                </div>
                                <div className="parst-ty">
                                    <p>Onboard Android experts that built trend-setting Android apps using latest AR/VR technologies to let your digital business stand out from the
                                        rest</p>
                                </div>
                            </div>
                        </div>
                        <div className="nty-card">
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>Custom Android App <br /> Development</h3>

                                </div>
                                <div className="parst-ty">
                                    <p>No matter what kind of app customizations you need, our experienced Android artists craft and execute exceptional app customizations for your successful app</p>
                                </div>
                            </div>
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>Android Game Development</h3>

                                </div>
                                <div className="parst-ty">
                                    <p>Our Android game developers ensure your gaming app is seamless, immersive, and fun for end-users such that your game becomes a trend in itself</p>
                                </div>
                            </div>
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>Android App Migration</h3>

                                </div>
                                <div className="parst-ty">
                                    <p>Effectively migrate your legacy application to Android operating system with offshore Android app programmers seasoned with complex Android migrations to latest technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="android_teck">
                    <h1>T E C H N O L O G I E S</h1>
                    <div className='ttr'></div>
                    <div className="android_tect_card">
                        <div className="tects-nav">
                            <div className="tect_nav">
                                <p id='first' onClick={techno1}>Mobile Frontend</p>
                                <p id='second' onClick={techno2}>Framework</p>
                                <p id='third' onClick={techno3}>Platform</p>
                            </div>
                            <hr className='hr_ty' />
                        </div>
                        {
                            fat === 1 && (
                                <div className='ty_py'>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src={koiy} alt="" />
                                        </div>
                                        <p>Native (Java/kotlin)</p>
                                    </div>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src={koiy1} alt="" />
                                        </div>
                                        <p>React Native</p>
                                    </div>
                                </div>
                            )
                        }

                        {
                            fat === 2 && (
                                <div className='ty_py'>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src={framework1} alt="" />
                                        </div>
                                        <p>Android Studio</p>
                                    </div>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src={framework2} alt="" />
                                        </div>
                                        <p>Google Assistant SDK</p>
                                    </div>
                                </div>
                            )
                        }

                        {
                            fat === 3 && (
                                <div className='ty_py'>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src={assisment1} alt="" />
                                        </div>
                                        <p>Google Cloud Platform</p>
                                    </div>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src={assisment2} alt="" />
                                        </div>
                                        <p>AWS</p>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>

                <div className="android_appli">
                    <h1>Why Choose Android Application Developers from Kushel Digi?</h1>
                    <div className="apli-cards">
                        <div className="apli-card">
                            <div className="apli-box">
                                <img src={gt1} alt="" />
                                <div className="gt_head">
                                    <h2>Large Pool of Experts</h2>
                                    <p>Radixweb sports a pool of 450+ domain experts who can be deployed on your development project bespoke to your company value system, industry vertical, and tech stack</p>
                                </div>
                            </div>
                            <div className="apli-box">
                                <img src={gt2} alt="" />
                                <div className="gt_head">
                                    <h2>Hyper-growth Approach</h2>
                                    <p>Leverage an evolving development environment for apps built with the latest technology for an exemplary digital product handmade by adept Kotlin developers</p>
                                </div>
                            </div>
                            <div className="apli-box">
                                <img src={gt3} alt="" />
                                <div className="gt_head">
                                    <h2>Holistic Support</h2>
                                    <p>Flawless code is only a part of the entire development process. Access cross-functional teams for holistic business support through consultations and aligned strategies</p>
                                </div>
                            </div>

                            <div className="apli-box">
                                <img src={gt4} alt="" />
                                <div className="gt_head">
                                    <h2>Truly Agile Process</h2>
                                    <p>We infuse the principles of the agile methodology in software development as well as other project areas to ensure high efficiency, productivity, and a top-notch product</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <ServiceCommon />
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
                                            What is React Native used for?
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
                                            Why choose React Native for app development?
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
                                            Why is React Native so popular among other app development frameworks?
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
                                            What are the benefits of choosing React Native app development company?
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

export default AndroidHire