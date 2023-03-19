import React from 'react';
import DevCard from './Cards/DevCard';
import PortCard from './Cards/PortCard';
import { SplideTrack } from '@splidejs/react-splide';
import ServiceCard from './Cards/ServiceCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const Home = () => {
  return (
    <>
      <div className="home1 mb-20">
        <div className="home11 flex px-20 pt-12 items-center relative">
          <div className="home111">
            <div className="home1111">
              <p>Welcome to Kushel Digi</p>
              <h2 className='mt-0 mb-2 font-bold'>Revolutionising your business through Technology.</h2>
              <p>We Are E-commerce  Expert.</p>
            </div>
            <div className="home1112 absolute">
              <ul className='flex flex-row'>
                <li>SHOPIFY</li>
                <li>WOO COMMERCE</li>
                <li>BIG COMMERCE</li>
                <li>MAGENTO</li>
              </ul>
            </div>
          </div>
          <div className="home112">
            <img src="/static/images/a20.png" alt="" />
          </div>
        </div>
      </div>

      <div className="home2 mb-8">
        <div className="home21 px-20 flex">
          <div className="home211 mr-14">
            <h1 className='mb-0 font-bold'>ABOUT US</h1>
            <h5 className='text-blue-500'>Who are we?</h5>
            <h3 className='mb-2'>We are your digital partner for innovative design and reliable Web, Mobile, and Marketing solutions.</h3>
            <p className='mb-3'>The top-notch and preeminent Web and Mobile App Development Company of India with its global presence in USA, Mind Inventory is first-rate choice of the clients worldwide. With sheer customer satisfaction in mind, we are profoundly dedicated to developing highly intriguing apps that strictly meet the business requirements and catering a wide spectrum of projects.</p>
            <button className='btn btn1'>
              <span className='mr-2'>Contact Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>
          </div>
          <div className="home212 ml-14">
            <img src="/static/images/a2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="home3 pb-20 bg-gray-100 relative">
        <div className="home31 py-8 px-16">
          <div className="home311 text-center mb-4">
            <h1 className='mb-3'><span className='font-bold'>OUR</span> SERVICES</h1>
            <p>We employ quality design and development techniques as a foundation for the structured and systematic rapid development of cutting-edge technology solutions.</p>
          </div>
          <div className="home312">
            <Splide aria-label="Our Services" options={{
              perPage: 3,
              perMove: 1
            }} >
              <SplideSlide>
                <ServiceCard />
              </SplideSlide>
              <SplideSlide>
                <ServiceCard />
              </SplideSlide>
              <SplideSlide>
                <ServiceCard />
              </SplideSlide>
              <SplideSlide>
                <ServiceCard />
              </SplideSlide>
              <SplideSlide>
                <ServiceCard />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>

      <div className="home4 pb-20 bg-gray-100">
        <div className="home41">
          <div className="home411 text-center mb-10">
            <h1 className='mb-2'><span className='font-bold'>TECHNOLOGIES</span> WE WORK WITH</h1>
            <p>Kusheldigi is evolving into an international contender in software engineering, with broad expertise in all areas required for credible software development.</p>
          </div>
          <div className="home412 flex justify-center items-center">
            <div className="home4121 mx-8">
              <img src="/static/images/a5.png" alt="" />
              <p>Woo Commerce</p>
            </div>
            <div className="home4121 mx-8">
              <img src="/static/images/a6.png" alt="" />
              <p>Big Commerce</p>
            </div>
            <div className="home4121 mx-8">
              <img src="/static/images/a7.png" alt="" />
              <p>Shopify</p>
            </div>
            <div className="home4121 mx-8">
              <img src="/static/images/a8.png" alt="" />
              <p>Magento</p>
            </div>
          </div>
        </div>
      </div>

      <div className="home5 pb-10 mb-12 bg-gray-100">
        <div className="home51 px-16">
          <div className="home511 text-center mb-8">
            <h1 className='font-bold mb-2'>OUR PORTFOLIO</h1>
            <p>We design project designed with <span className="font-semibold">passion</span> on time, within <span className="font-semibold">budget</span> of full value</p>
          </div>
          <div className="home512 flex flex-wrap justify-center">
            <PortCard />
            <PortCard />
            <PortCard />
            <PortCard />
          </div>
        </div>
        <div className="home52 w-full text-center">
          <button className='btn btn1 m-auto'>
            <span className='mr-2'>View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="home6 mb-16">
        <div className="home61 px-16">
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
              <img className='w-full h-full' src="/static/images/a1.png" alt="" />
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
            <h1 className='font-bold text-gray-700'>Benefits of Our e-commerce development</h1>
          </div>
          <div className="home712 flex flex-wrap justify-center">
            <DevCard imgSrc={'/static/images/a10.png'} />
            <DevCard imgSrc={'/static/images/a11.png'} />
            <DevCard imgSrc={'/static/images/a12.png'} />
            <DevCard imgSrc={'/static/images/a13.png'} />
            <DevCard imgSrc={'/static/images/a14.png'} />
          </div>
        </div>
      </div>

      <div className="home8 mb-20">
        <div className="home81 flex justify-between px-16">
          <div className="home811">
            <h2>OUR ESTEEMED CLIENTS</h2>
            <h1 className='font-bold'>Pleasure to work with</h1>
          </div>
          <div className="home812 flex flex-wrap justify-between">
            <div className="home8121">
              <img src="/static/images/a15.png" alt="" />
            </div>
            <div className="home8121">
              <img src="/static/images/a16.png" alt="" />
            </div>
            <div className="home8121">
              <img src="/static/images/a17.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="home9 mb-12">
        <div className="home91 flex px-16">
          <div className="home911 text-center">
            <h2 className='font-bold text-gray-700'>JUST THE FAQs</h2>
          </div>
          <div className="home912">
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What harsh truths do you prefer to ignore?
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
                    Is free will real or just an illusion?
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

      <div className="home10 mb-8 bg-blue-100">
        <div className="home101 px-16 py-20">
          <div className="home1011 text-center">
            <h5 className='text-gray-600'>TESTIMONIALS</h5>
            <h2 className='font-semibold'>OUR HAPPY CLIENT SAY</h2>
          </div>
          <div className="home1012 flex">
            <div className="home10121">
              <div className="home101211 flex items-center mb-6">
                <div className="home-10 mr-4">
                  <img src="/static/images/a18.png" alt="" />
                </div>
                <div className="home-11 flex items-center">
                  <button className='h-10 w-10 rounded-full bg-gray-400 p-3 mr-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                  </button>
                  <button className='h-10 w-10 rounded-full bg-blue-500 p-3 ml-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
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
      </div>

      <div className="home-01 flex justify-center items-center mb-20">
        <div className="home-011 py-12 px-12">
          <div className="home-0111 text-center">
            <h2 className='uppercase font-bold'>Let’s Create Big Stories Together</h2>
            <p className='my-3'>Mobile is in our nerves. We don’t just build apps, we create brand.Choosing us will be your best decision.</p>
            <button>GET A QUOTE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
