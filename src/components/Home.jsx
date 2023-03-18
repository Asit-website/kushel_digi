import React from 'react';
import DevCard from './Cards/DevCard';
import PortCard from './Cards/PortCard';
import '@splidejs/react-splide/css/core';

const Home = () => {
  return (
    <>
      <div className="home1 mb-8">
        <div className="home11 flex px-20 pt-20">
          <div className="home111">
            <div className="home1111">
              <p>Welcome to Kushel Digi</p>
              <h2 className='mt-2 mb-4'>Revolutionising your business through Technology.</h2>
              <p>We Are E-commerce  Expert.</p>
            </div>
            <div className="home1112">
              <ul className='flex flex-row '>
                <li>SHOPIFY</li>
                <li>WOO COMMERCE</li>
                <li>BIG COMMERCE</li>
                <li>MAGENTO</li>
              </ul>
            </div>
          </div>
          <div className="home112">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className="home2 mb-8">
        <div className="home21 flex">
          <div className="home211">
            <h1 className='mb-7'>ABOUT US</h1>
            <h5>Who are we?</h5>
            <h3>We are your digital partner for innovative design and reliable Web, Mobile, and Marketing solutions.</h3>
            <p>The top-notch and preeminent Web and Mobile App Development Company of India with its global presence in USA, Mind Inventory is first-rate choice of the clients worldwide. With sheer customer satisfaction in mind, we are profoundly dedicated to developing highly intriguing apps that strictly meet the business requirements and catering a wide spectrum of projects.</p>
            <button className='btn btn1'>
              <span>Contact Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>
          </div>
          <div className="home212">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className="home3 mb-8">
        <div className="home31">
          <div className="home311">
            <h1 className='mb-4'><span className='font-bold'>OUR</span> SERVICES</h1>
            <p>We employ quality design and development techniques as a foundation for the structured and systematic rapid development of cutting-edge technology solutions.</p>
          </div>
          <div className="home312">

          </div>
        </div>
      </div>

      <div className="home4 mb-8">
        <div className="home41">
          <div className="home411 text-center">
            <h1 className='mb-4'><span className='font-bold'>TECHNOLOGIES</span> WE WORK WITH</h1>
            <p>Kusheldigi is evolving into an international contender in software engineering, with broad expertise in all areas required for credible software development.</p>
          </div>
          <div className="home412 flex justify-center items-center">
            <div className="home4121 mx-3">
              <img src="" alt="" />
              <p>Woo Commerce</p>
            </div>
            <div className="home4121 mx-3">
              <img src="" alt="" />
              <p>Big Commerce</p>
            </div>
            <div className="home4121 mx-3">
              <img src="" alt="" />
              <p>Shopify</p>
            </div>
            <div className="home4121 mx-3">
              <img src="" alt="" />
              <p>Magento</p>
            </div>
          </div>
        </div>
      </div>

      <div className="home5 mb-8">
        <div className="home51">
          <div className="home511 text-center">
            <h1 className='font-bold mb-4'>OUR PORTFOLIO</h1>
            <p>We design project designed with <span className="font-semibold">passion</span> on time, within <span className="font-semibold">budget</span> of full value</p>
          </div>
          <div className="home512 flex flex-wrap">
            <PortCard />
            <PortCard />
            <PortCard />
            <PortCard />
          </div>
        </div>
        <div className="home52">
          <button className='btn btn1'>
            <span>View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="home6 mb-8">
        <div className="home61">
          <div className="home611">
            <h1 className="font-bold">OUR WORKING PROCESS</h1>
          </div>
          <div className="home612">
            <div className="home6121 flex justify-between items-center">
              <p>We Get Your Requirements</p>
              <p></p>
              <p>Designing & Get Conformation</p>
              <p></p>
              <p>Testing & Maintenance</p>
            </div>
            <div className="home6122">
              <img src="" alt="" />
            </div>
            <div className="home6121 flex justify-between items-center">
              <p></p>
              <p>Market Research & Feasibility Analysis</p>
              <p></p>
              <p>Coding & Development</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="home7 mb-8">
        <div className="home71">
          <div className="home711">
            <h1 className='font-bold'>Benefits of Our e-commerce development</h1>
          </div>
          <div className="home712 justify-center">
            <DevCard />
            <DevCard />
            <DevCard />
            <DevCard />
            <DevCard />
          </div>
        </div>
      </div>

      <div className="home8 mb-8">
        <div className="home81">
          <div className="home811">
            <h2>OUR ESTEEMED CLIENTS</h2>
            <h1>Pleasure to work with</h1>
          </div>
          <div className="home812 flex">
            <div className="home8121">
              <img src="" alt="" />
            </div>
            <div className="home8121">
              <img src="" alt="" />
            </div>
            <div className="home8121">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="home9 mb-8">
        <div className="home91">
          <div className="home911">
            <h2>JUST THE FAQs</h2>
          </div>
          <div className="home912">

          </div>
        </div>
      </div>

      <div className="home10 mb-8">
        <div className="home101">
          <div className="home1011">
            <h5>TESTIMONIALS</h5>
            <h2>OUR HAPPY CLIENT SAY</h2>
          </div>
          <div className="home1012 flex">
            <div className="home10121">
              <div className="home101211 flex items-center mb-6">
                <div className="home-10 mr-4">
                  <img src="" alt="" />
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
                <p className='mb-6'>Lorem ipsum is simply dummy text of the printing & Typesetting industry. lorem ipsum has been the industry’s standard dummy text ever since the 1500s, an unknown printer took a gallery.</p>
                <h5 className='font-semibold mb-3'>Harriet Mitchell</h5>
                <p>Director of inbrew</p>
              </div>
            </div>
            <div className="home10122">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-01 flex justify-center items-center mb-8">
        <div className="home-011 py-12 px-12">
          <div className="home-0111 text-center">
            <h2 className='uppercase'>Let’s Create Big Stories Together</h2>
            <p className='my-5'>Mobile is in our nerves. We don’t just build apps, we create brand.Choosing us will be your best decision.</p>
            <button>GET A QUOTE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
