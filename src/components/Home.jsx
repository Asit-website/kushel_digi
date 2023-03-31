import React, { useEffect, useState } from 'react';
import DevCard from './Cards/DevCard';
import PortCard from './Cards/PortCard';
import { SplideTrack } from '@splidejs/react-splide';
import ServiceCard from './Cards/ServiceCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import about from '../images/about.png';
import '@splidejs/react-splide/css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import react from '../images/react.png'
import kotlin from '../images/kotlin.png'
import apple from '../images/apple.png'
import fluter from '../images/fluter.png'
import android from '../images/android.png'
import app1 from '../images/app1.png'
import web from '../images/web.png';
import php from '../images/php.png';
import wordpress from '../images/wordpress.png'
import drupal from '../images/drupal.png'
import laravel from '../images/laravel.png'
import kart from '../images/kart.png'
import Big from '../images/Big.png';
import shopify from '../images/shopify.png';
import woo from '../images/woo.png'
import Magento from '../images/magento.png'
import ui from '../images/ui.png';
import figma from '../images/figma.png';
import xd from '../images/xd.png'
import sketch1 from '../images/sketch.png'
import illustrator from '../images/illustrator.png'
import Photoshop from '../images/photoshop.png'
import portfolio from '../images/portfolio.png'
import pads from '../images/pads.png';
import bds from '../images/bds.png'
import jones from '../images/jones.png'
import major from '../images/major.png'
import solenoid from '../images/solenoid.png'
import a9 from '../images/a9.png'
import mesr from '../images/mesr.jpg';
import girl from '../images/girl.png'
import star from '../images/star.png';
import star1 from '../images/star1.png';
// import eli from '../images/eli.png';
import finch from '../images/finch.png';
import pay1 from '../images/pay1.png';
import pay2 from '../images/pay2.png';
import pay3 from '../images/pay3.png';
import box2 from '../images/box2.png';
import aboutji from '../images/aboutji.png';
import box3 from '../images/box3.png';
import box4 from '../images/box4.png';
import box5 from '../images/box5.png';
import box6 from '../images/box6.png';
import box7 from '../images/box7.png';
import box8 from '../images/box8.png';
import box9 from '../images/box9.png';
import box10 from '../images/box10.png';
import box11 from '../images/box11.png';
import box12 from '../images/box12.png';
import box13 from '../images/box13.png';
import box14 from '../images/box14.png';
import box15 from '../images/box15.png';
import box16 from '../images/box16.png';
import { NavLink } from 'react-router-dom';
const Home = () => {
  let dev = "App"
  let dev1 = "Development"
  let dev2 = "Web"
  let dev3 = "Development"

  let dev4 = "Ecommerce"
  let dev5 = "Development"

  let dev6 = "UI & UX"

  let a = "Android App"
  let b = "IOS App"
  let c = "Flutter"
  let d = "React Native"
  let e = "Kotlin"

  let php1 = "PHP"
  let wordpress1 = "Wordpress"
  let drupal1 = "Drupal"
  let laravel1 = "Laravel"

  let big = "Bigcommerce"
  let shop = "Shopify"
  let commerce = "Woo Commerce"
  let mag = "Magento"

  let figma1 = "Figma"
  let adobe1 = "Adobe XD"
  let sketch = "Sketch"
  let adobe2 = "Adobe illustrator"
  let adobe3 = "Adobe Photoshop"

  let tag = "Mobile-Friendly"
  let tag1 = "Scalable"
  let tag2 = "Superior UI/UX"
  let tag3 = "Smooth Deployment"
  let tag4 = "Technologically Advanced"

  let seo = "SEO"
  let seo1 = "SMO"
  let seo2 = "PPC"

  let digital = "Digital"
  let digital1 = "Marketing"

  const [perPage, setPerPage] = useState(3);
  const [perPage1, setPerPage1] = useState(5);

  useEffect(() => {
    if (window.matchMedia("(max-width: 750px)").matches) {
      setPerPage(1);
      setPerPage1(1);
    }
  }, []);

  return (
    <>
      <div className="home-main">
        <div className="home1 mb-20">
          <div className="home11 flex px-24 pt-12 items-center relative">
            <div className="home111">
              <div className="home1111">
                <p>Welcome to Kushel Digi</p>
                <h2 className='mt-0 mb-2'>Revolutionising your business <br /> through Technology.</h2>
                <p>We Are E-commerce  Expert.</p>
              </div>
              <div className="home1112 absolute">
                <ul className='flex flex-row'>
                  <li>SHOPIFY</li>
                  <li>WOO COMMERCE</li>
                  <li>BIG COMMERCE</li>
                  <li>MAGENTO</li>
                  <li>WORDPRESS</li>
                </ul>
              </div>
            </div>
            <div className="home112">
              <img src={girl} alt="" />
            </div>
          </div>
        </div>

        <div className="home2 mb-8">
          <div className="home21 px-24 flex">
            <div className="home211 mr-14">
              {/* <h1 className='mb-0 font-bold'>ABOUT US</h1> */}
              <img src={aboutji} alt="about" />
              <h5 className='text-blue-500 mt-16'>Who are we?</h5>
              <h3 className='mb-2'>We are your digital partner for innovative design and reliable Web, Mobile, and Marketing  solutions.</h3>
              <p className='mb-3'>The top-notch and preeminent Web and Mobile App Development Company of India with its global presence in USA, Mind Inventory is first-rate choice of the clients worldwide. With sheer customer satisfaction in mind, we are profoundly dedicated to developing highly intriguing apps that strictly meet the business requirements and catering a wide spectrum of projects.</p>
             <NavLink to="/contact"> <button className='btn btn1'>
                <span className='mr-2'>Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </button></NavLink>
            </div>
            <div className="home212 ml-14 relative">
              {/* <img className=' absolute jit' src={eli} alt="" /> */}
              <img className='jit1' src="/static/images/a2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="home3 pb-20 bg-gray-100 relative">
          <div className="home31 py-8 px-24">
            <div className="home311 text-center mb-4">
              <h1 className='mb-3'><span className='font-bold m-1'>OUR</span> SERVICES</h1>
              <p>We employ quality design and development techniques as a foundation for the structured and systematic rapid development of cutting-edge technology solutions.</p>
            </div>
            <div className="home312">
              <Splide aria-label="Our Services" options={{
                perPage,
                perMove: 1
              }} >
                <SplideSlide>
                  <ServiceCard react={react} android={android} apple={apple} kotlin={kotlin}
                    fluter={fluter} app1={app1} dev={dev} dev1={dev1}
                    a={a} b={b} c={c} d={d} e={e}
                  />
                </SplideSlide>
                <SplideSlide>
                  <ServiceCard app1={web} dev={dev2} dev1={dev3}
                    android={php} apple={wordpress} react={drupal} fluter={laravel}
                    a={php1} b={wordpress1} c={drupal1} d={laravel1}
                  />
                </SplideSlide>
                <SplideSlide>
                  <ServiceCard dev={dev4} dev1={dev5} app1={kart}
                    android={Big} apple={shopify} react={woo} fluter={Magento}
                    a={big} b={shop} c={commerce} d={mag}
                  />
                </SplideSlide>
                <SplideSlide>
                  <ServiceCard app1={ui} dev={dev6} a={figma1}
                    b={adobe1} c={sketch} d={adobe2} e={adobe3}
                    android={figma} apple={xd} fluter={sketch1} react={illustrator} kotlin={Photoshop}
                  />
                </SplideSlide>
                <SplideSlide>
                  <ServiceCard app1={app1} dev={digital} dev1={digital1} a={seo}
                    b={seo1} c={seo2}
                    android={pay1} apple={pay2} fluter={pay3}
                  />
                </SplideSlide>
                {/* <SplideSlide>
                  <ServiceCard />
                </SplideSlide> */}
              </Splide>
            </div>
          </div>
        </div>

        <div className="home4 home-04 pb-20 bg-gray-100">
          <div className="home41">
            <div className="home411 text-center mb-10">
              <h1 className='mb-2'><span className='font-bold'>TECHNOLOGIES</span> WE WORK WITH</h1>
              <p>Kusheldigi is evolving into an international contender in software engineering, with broad expertise in all areas required for credible software development.</p>
            </div>
            <div className="home412 flex justify-center items-center">
              <Splide aria-label="Our Services" options={{
                perPage: perPage1,
                perMove: 1,
                loop: true,
                autoplay: true
              }} >
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/a5.png" alt="" />
                    <p>Woo Commerce</p>
                  </div> */}
                  <img className='so' src={box2} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/a6.png" alt="" />
                    <p>Big Commerce</p>
                  </div> */}
                  <img className='so' src={box3} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/a7.png" alt="" />
                    <p>Shopify</p>
                  </div> */}
                  <img className='so' src={box4} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/a8.png" alt="" />
                    <p>Magento</p>
                  </div> */}
                  <img className='so' src={box5} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b3.png" alt="" />
                    <p>Wordpress</p>
                  </div> */}
                  <img className='so' src={box6} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b6.png" alt="" />
                    <p>Vue Js</p>
                  </div> */}
                  <img className='so' src={box7} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b7.png" alt="" />
                    <p>Php</p>
                  </div> */}
                  <img className='so' src={box8} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b8.png" alt="" />
                    <p>HTML 5</p>
                  </div> */}
                  <img className='so' src={box9} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b9.png" alt="" />
                    <p>Swift</p>
                  </div> */}
                  <img className='so' src={box10} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b10.png" alt="" />
                    <p>Python</p>
                  </div> */}
                  <img className='so' src={box11} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b11.png" alt="" />
                    <p>Java</p>
                  </div> */}
                  <img className='so' src={box12} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b12.png" alt="" />
                    <p>Node Js</p>
                  </div> */}
                  <img className='so' src={box13} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b13.png" alt="" />
                    <p>Flutter</p>
                  </div> */}
                  <img className='so' src={box14} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b14.png" alt="" />
                    <p>React Native</p>
                  </div> */}
                  <img className='so' src={box15} alt="" />
                </SplideSlide>
                <SplideSlide>
                  {/* <div className="home4121">
                    <img className=' block m-auto' src="/static/images/b14.png" alt="" />
                    <p>React Native</p>
                  </div> */}
                  <img className='so' src={box16} alt="" />
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>

        <div className="home5 pb-10 mb-12 bg-gray-100">
          <div className="home51 px-24">
            <div className="home511 text-center mb-8">
              <img className='portfolio' src={portfolio} alt="portfolio" />
              <h1 className='font-bold mb-2 mt-4'>OUR PORTFOLIO</h1>
              <p>We design project designed with passion on time,</p>
              <p>within budget of full value</p>

            </div>
            <div className=' flex-thing flex items-center justify-center'>
              <p className='inline all'>all</p>
              <p>WEBSITE DESIGN</p>
              <p>E-COMMERCE SOLUTION</p>
              <p>MOBILE APPLICATION</p>
            </div>
            <div className="home512 flex flex-wrap justify-center mt-12">
              <PortCard pads={a9} />
              <PortCard pads={pads} />
              <PortCard pads={bds} />
              <PortCard pads={jones} />
            </div>
          </div>
          <div className="home52 w-full text-center">
            <button className='btn btn1 m-auto btn3'>
              <span className='mr-2'>VIEW ALL </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="home6 mb-16">
          <div className="home61 px-24">
            <div className="home611 mb-8 text-center">
              <h1 className="font-bold text-gray-700">OUR WORKING PROCESS</h1>
            </div>
            <div className="home612">
              <div className="home6121 flex justify-between items-center mb-4">
                <p>We Get Your Requirements</p>
                <p></p>
                <p>Designing & Get Conformation</p>
                <p></p>
                <p className='mr-5'>Testing & Maintenance</p>
              </div>
              <div className="home6122">
                <img className='w-full h-full' src={finch} alt="mesr" />
              </div>
              <div className="home6121 flex justify-between items-center mt-4">
                <p></p>
                <p className='p2'>Market Research & Feasibility Analysis</p>
                <p></p>
                <p className='p4'>Coding & Development</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div className="home7 mb-20">
          <div className="home71 px-44">
            <div className="home711 text-center mb-4">
              <h1 className=''>Benefits of Our e-commerce <br /> development</h1>
            </div>
            <div className="home712 flex flex-wrap justify-center">
              <DevCard heading={tag} classji="the" imgSrc={'/static/images/a10.png'} />
              <DevCard heading={tag1} imgSrc={'/static/images/a11.png'} />
              <DevCard heading={tag2} imgSrc={'/static/images/a12.png'} />
              <DevCard heading={tag3} imgSrc={'/static/images/a13.png'} />
              <DevCard heading={tag4} imgSrc={'/static/images/a14.png'} />
            </div>
          </div>
        </div>

        <div className="home8 mb-20 px-8">
          <h2 className='text-center'>Our esteemed clients</h2>
          <p className='text-center'>Pleasure to work with</p>
          <div className='home8-img px-4'>
            <img className='chetri' src="/static/images/a15.png" alt="" />
            <img className='chetri1' src="/static/images/a17.png" alt="" />
            <img className='chetri2' src="/static/images/a16.png" alt="" />
            <img className='chetri' src="/static/images/a15.png" alt="" />
            <img className='chetri1' src="/static/images/a17.png" alt="" />
            <img className='chetri2' src="/static/images/a16.png" alt="" />
          </div>
        </div>

        <div className="home9 mb-12">
          <div className="home91 flex px-20">
            <div className="home911 text-center">
              <h2 className='font-bold text-gray-700'>JUST THE FAQs</h2>
            </div>
            <div className="home912">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How long does it take to build a mobile app?
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
                      What are the different mobile app development services you offer?
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
                      Is Expand My Business a mobile app development company?
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
                      For what businesses do you offer mobile app development services?
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
                      How long does a App take to build?
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

        {/* <div className="home10 mb-8 bg-blue-100">
          <div className="home101 px-16 py-20">
            <div className="home1011 text-center">
              <h5 className='text-gray-600'>TESTIMONIALS</h5>
              <h2 className=''>OUR HAPPY CLIENT SAY</h2>
            </div>
            <div className="home1012 flex">
              <div className="home10121">
                <div className="home101211 flex items-center mb-6">
                  <div className="home-10 mr-4">
                    <img src="/static/images/a18.png" alt="" />
                  </div>
                  <div className="home-11 flex items-center">
                    <button className='h-10 w-10 rounded-full bg-gray-400 p-3 mr-3 text-white'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                      </svg>
                    </button>
                    <button className='h-10 w-10 rounded-full bg-blue-500 p-3 ml-3 text-white'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="home101212">
                  <p className='mb-5'>Lorem ipsum is simply dummy text of the printing & Typesetting industry. lorem ipsum has been the industry’s standard dummy text ever since the 1500s, an unknown printer took a gallery.</p>
                  <h5 className='font-semibold mb-1'>Harriet Mitchell</h5>
                  <p>Director of inbrew</p>
                </div>
              </div>
              <div className="home10122">
                <img className='h-full w-full' src="/static/images/a19.png" alt="" />
              </div>
            </div>
          </div>
        </div> */}

        <div className="testimonials">
          <div className="first-testimonials">
            <h3 className='tas'>testimonials</h3>
            <h2 className='happy'>oUR HAPPY CLIENT SAY</h2>
            <div className='testi-sec'>
              <h2>4.7<span>/5</span></h2>
              <div className='star flex items-center'>
                <div className="first-star flex items-center ">
                  <img src={star} alt="star" />
                  <img className='ml-1' src={star} alt="" />
                  <img className='ml-1' src={star} alt="star" />
                  <img className='ml-1' src={star} alt="" />
                  <img className='ml-1' src={star1} alt="" />
                </div>
                <div className="second-star ml-3">
                  <p>200 reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second-testimonials">
            <div className="excellent">
              <h2>EXCELLENT WORK</h2>
              <div className="ex mt-1">
                <div className="first-ex flex">
                  <img src={star} alt="" />
                  <img className='ml-1' src={star} alt="" />
                  <img className='ml-1' src={star} alt="" />
                  <img className='ml-1' src={star} alt="" />
                  <img className='ml-1' src={star} alt="" />
                </div>
                <div className="second-ex">
                  <p>Matt Reeder</p>
                </div>
                <div className="third-ex">
                  <p>United States. 03/23/2023</p>
                </div>
              </div>
              <div className="para-ex">
                <p>Lorem ipsum is simply dummy text of the printing & Typesetting industry. lorem ipsum has been the industry’s standard dummy text ever since the 1500s, an unknown printer took a gallery.</p>
              </div>
            </div>

            <div className="excellent mt-3">
              <h2>EXCELLENT WORK</h2>
              <div className="ex mt-1">
                <div className="first-ex flex">
                  <img src={star} alt="" />
                  <img className='ml-1' src={star} alt="" />
                  <img className='ml-1' src={star} alt="" />
                  <img className='ml-1' src={star} alt="" />
                  <img className='ml-1' src={star} alt="" />
                </div>
                <div className="second-ex">
                  <p>Matt Reeder</p>
                </div>
                <div className="third-ex">
                  <p>United States. 03/23/2023</p>
                </div>
              </div>
              <div className="para-ex">
                <p>Lorem ipsum is simply dummy text of the printing & Typesetting industry. lorem ipsum has been the industry’s standard dummy text ever since the 1500s, an unknown printer took a gallery.</p>
              </div>
            </div>
            <div className="read-sec">
              <p>Read All 200 Reviews</p>
            </div>
          </div>
        </div>

        {/* <div className="home-01 flex justify-center items-center py-12 mb-16 ">
          <div className="home-011 py-12 px-12">
            <div className="home-0111 text-center">
              <h2 className='uppercase font-bold'>Let’s Create Big Stories Together</h2>
              <p className='my-3'>Mobile is in our nerves. We don’t just build apps, we create brand.Choosing us will be your best decision.</p>
              <button>GET A QUOTE</button>
            </div>
          </div>
        </div> */}

        <div className="home-year">
          <div className="home-year1 flex items-center">
            <div className="home-year11">
              <h1>Over <span>5 Years</span> of</h1>
                <h1> Experience in the Online </h1>
                <h1>Design Industry</h1>
            </div>
            <div className="home-year12 flex items-center justify-center flex-wrap">
              <div className="home-year121">
                <img src="/static/images/b17.png" alt="" />
              </div>
              <div className="home-year121">
                <img src="/static/images/b18.png" alt="" />
              </div>
              <div className="home-year121">
                <img src="/static/images/b19.png" alt="" />
              </div>
              <div className="home-year121">
                <img src="/static/images/b20.png" alt="" />
              </div>
              <div className="home-year121">
                <img src="/static/images/b21.png" alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
