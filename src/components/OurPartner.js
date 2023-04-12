import React from "react";
import whykushle from "../images/whyKushle.png";
import offering1 from "../images/offering1.png";
import offering2 from "../images/offering2.png";
import offering3 from "../images/offering3.png";
import offering4 from "../images/offering4.png";
import offering5 from "../images/offering5.png";
import offering6 from "../images/offering6.png";
import offering7 from "../images/offering7.png";
import offering8 from "../images/offering8.png";
import offering9 from "../images/offering9.png";
import offering10 from "../images/offering10.png";
import broucher from "../images/broucher.png";
import broucher1 from "../images/broucher1.png";
import dark from "../images/dark.png";
import dark1 from "../images/dark1.png";
import putki from "../images/putki.png";
import lor from "../images/lor.png";
import lor1 from "../images/lor1.png";
import lor2 from "../images/lor2.png";
import office1 from '../images/office1.png';
import office2 from '../images/office2.png'
import londa from '../images/londa.png';
import arrow3 from '../images/arrow3.png';
import HowItWorks1 from '../images/how-1.svg';
import HowItWorks2 from '../images/how-2.svg';
import HowItWorks3 from '../images/how-3.svg';
import HowItWorks4 from '../images/how-4.svg';
import HowItWorks5 from '../images/how-5.svg';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import arrow1 from '../images/arrow1.png';
const OurPartner = () => {
  return (
    <>
      <div className="ser-main">
        <div className="partner-back">
          <div className="partner-sect">
            <h4>JOIN US</h4>
            <h2>
              EARN MONEY WORKING FROM <br /> HOME OR ANYWHERE
            </h2>
            <p>
              Our Partnership Program give you the opportunity to build your own
              business.
            </p>
          </div>
        </div>
        <div className="kushel-menu">
          <div className="flex items-center justify-around kushel-menu1">
            <p>Why Kushel digi</p>
            <p>our offerings</p>
            <p>Opportunities</p>
            <p>Partner Stories</p>
            <p>How it works</p>
            <p>FAQ</p>
            <p>Our offices</p>
          </div>
          <hr className="hr-kushel" />
        </div>
        <div className="kushel-why">
          <div className="first-why">
            <h3>Why kushel digi?</h3>
            <p>
              ‘Kushel digi’ is among the most technologically advanced IT
              corporations and also runs one of the most profitable and advanced
              affiliate programs in the IT Industry. The sky’s the limit with
              proper utilization of resources and your skills. We equip you with
              all the resources necessary to make hefty amounts of income
              surpassing your imaginations. A combination of sales support,
              training, and innovative ideas backed by a strong operations team
              await your decision to partner with Us.
            </p>
          </div>
          <div className="second-why">
            <img src={whykushle} alt="why" />
          </div>
        </div>

        <div className="latest">
          <div className="business-card flex-wrap">
            <div className="business-box business-box1 relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src="/static/images/lawyer1.png" alt="" />
              </div>
              <h5>Diversified IT Services</h5>
              <p>
                While associating with Kushel digi you will get the bucket of
                portfolio to offer to your clients. This service portfolio is
                required by most of the companies in their day to day business
                operations.
              </p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src="/static/images/lawyer2.png" alt="" />
              </div>
              <h5>Latest IT News & Updates</h5>
              <p>
                As our business partner we will make sure that you remain
                updated with the latest trend and technology news in the market.
                This will help you to acquire more knowledge compared to others
                and help you in boost your sales conversation as well.
              </p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src="/static/images/lawyer3.png" alt="" />
              </div>
              <h5>Pre-Sales Training & Support</h5>
              <p>
                Any effective lead generation & conversion requires proper
                training on each offering and handholding during the deal with
                clients. Kushel digi makes sure that it always remains present
                and educates all business partners at regular intervals.
              </p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src="/static/images/lawyer4.png" alt="" />
              </div>
              <h5>Instant Rewards</h5>
              <p>
                We intend to keep transparency in our working, that is the
                reason we have our own technology developed for a real time
                payout checking system, which helps our business partners to
                know their accounts any moment of time.
              </p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src="/static/images/lawyer5.png" alt="" />
              </div>
              <h5>Sales Tools</h5>
              <p>
                At Kushel digi as a business partner we will enable sales tools
                to help you to grow your business and acquire new clients from
                the markets. In this digital era where everything is eventually
                going online we want our business partner to get the best guns
                to fight the battle.
              </p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src="/static/images/lawyer6.png" alt="" />
              </div>
              <h5>Personalised Marketing Materials</h5>
              <p>
                In this competition world where so much content is following
                around it is very important for any partner to push and recall
                their brand. We make sure we provide the personalised connect
                digital marketing material for you to connect to your clients in
                a more effective way.
              </p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src="/static/images/lawyer7.png" alt="" />
              </div>
              <h5>After Sales Support & Services</h5>
              <p>
                Just sale is not important but maintaining the long term
                relationship with the client will help you to gain more business
                from your existing clients. VNJ make sure that your clients get
                the best after sales service and fulfilment of the commitment
                which is done during the closure of the deal.
              </p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src="/static/images/lawyer8.png" alt="" />
              </div>
              <h5>Brand Leverage</h5>
              <p>
                As you are associated with VNJ brand, you have leverage with
                expertise and experience which brand carry over the years. The
                trust and presence which is build over the period of so many
                years will give your additional advantage to close the deal with
                your clients.
              </p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src="/static/images/lawyer9.png" alt="" />
              </div>
              <h5>Dedicated Support Desk</h5>
              <p>
                ou as our business partner will never feel alone in the journey.
                Our dedicated business partner relationship manager will be
                always with you in your entire journey.
              </p>
            </div>
          </div>
        </div>

        <div className="offering">
          <h3>Our Offerings</h3>
          <div className="offer-section">
            <div className="flex items-center justify-center">
              <div className="text-center jis">
                <img className="offer-img" src={offering1} alt="" />
                <p className="text-center">
                  EnterPrise Software <br /> Development
                </p>
              </div>
              <div className="text-center jis">
                <img src={offering2} alt="" />
                <p className="text-center">
                  Mobile App <br /> Development
                </p>
              </div>
              <div className="text-center jis">
                <img className="offer-img" src={offering3} alt="" />
                <p className="text-center">
                  Website <br /> Development
                </p>
              </div>
              <div className="text-center jis">
                <img className="offer-img" src={offering4} alt="" />
                <p className="text-center">
                  Data <br />
                  Analytics
                </p>
              </div>
              <div className="text-center jis">
                <img className="offer-img" src={offering5} alt="" />
                <p className="text-center">
                  IT <br /> Consultancy
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center jis jis1">
                <img className="offer-img" src={offering6} alt="" />
                <p className="text-center">Graphic Design</p>
              </div>
              <div className="text-center jis jis1">
                <img className="offer-img" src={offering7} alt="" />
                <p className="text-center">Digital Marketing</p>
              </div>
              <div className="text-center jis jis1">
                <img className="offer-img" src={offering8} alt="" />
                <p className="text-center">UI/UX Designing</p>
              </div>
              <div className="text-center jis jis1">
                <img className="offer-img" src={offering9} alt="" />
                <p className="text-center">Video Marketing</p>
              </div>
              <div className="text-center jis jis1">
                <img className="offer-img" src={offering5} alt="" />
                <p className="text-center">
                  Branding Positioning <br /> Services
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="partnership">
          <div className="first-partnership">
            <h3>
              Kushel Digi <br /> Partnership <br /> Opportunities
            </h3>
            {/* <div className="flex items-center w-full">
                <img src={dark} alt="" />
                <img className="ml-2" src={putki} alt="" />
                <img className="ml-2" src={dark1} alt="" />
            </div> */}
          </div>
          <div className="second-partnership">
            <div className="card-part flex items-center justify-center">
              <div className="box-part">
                <h4>Solution Partners</h4>
                <p>
                  Lorem ipsum is simply dummy text of the printing Typesetting
                  industry. lorem ipsum has been the industry’s standard dummy
                  text ever since the 1500s, an unknown printer took a gallery.
                </p>
                <button>
                  Download Brouchers{" "}
                  <img width={15} className="inline ml-1" src={broucher} alt="" />
                </button>
              </div>
              <div className="box-part box-part1">
                <h4>Distributors</h4>
                <p>
                  Lorem ipsum is simply dummy text of the printing Typesetting
                  industry. lorem ipsum has been the industry’s standard dummy
                  text ever since the 1500s, an unknown printer took a gallery.
                </p>
                <button>
                  {" "}
                  Download Brouchers{" "}
                  <img width={15} className="inline ml-1" src={broucher1} alt="" />
                </button>
              </div>
              <div className="box-part box-part1">
                <h4>Master Agents</h4>
                <p>
                  Lorem ipsum is simply dummy text of the printing Typesetting
                  industry. lorem ipsum has been the industry’s standard dummy
                  text ever since the 1500s, an unknown printer took a gallery.
                </p>
                <button>
                  {" "}
                  Download Brouchers{" "}
                  <img width={15} className="inline ml-1" src={broucher1} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section Start*/}
        <div className="howItWorks">
          <h1>How It Works</h1>
          <div className="howItWorks-text__top">
            <p>Join the programme by clicking on the ‘Become a Partner’ button</p>
            <p>Receive extensive resources - from marketing & product collaterals to training and certification.</p>
            <p>Enjoy incremental rewards as you advance through different partner levels.</p>
          </div>

          <div className="howItWorks-icons">
            <img src={HowItWorks5} alt="not found" />
            <img src={HowItWorks2} alt="" />
            <img src={HowItWorks3} alt="" />
            <img src={HowItWorks4} alt="" />
            <img src={HowItWorks1} alt="" />
          </div>

          <div className="howItWorks-text__bottom howItWorks-text__top">
            <p>Hit the ground running with the help of our structured onboarding and orientation process.</p>
            <p>Co-create value leveraging our ongoing engagement and support framework.</p>
          </div>
        </div>
        {/* How It Works Section End*/}

        <div className="partnets-stories">
          <h3>PARTNERS STORIES</h3>
          <div className="partner-card">
            <div className="partner-box">
              <img src={lor} alt="" />
              <div className="partner-head">
                <h4>Roshni Singh</h4>
                <p>
                  Lorem ipsum is simply dummy text of the printing Typesetting
                  industry. lorem ipsum has been the industry’s standard
                  dummytext ever since the 1500s, an unknown printer took a
                  gallery.
                </p>

                <a href="">View Case Study</a>
              </div>
            </div>
            <div className="partner-box">
              <img src={lor1} alt="" />
              <div className="partner-head">
                <h4>Vivek Roy</h4>
                <p>
                  Lorem ipsum is simply dummy text of the printing Typesetting
                  industry. lorem ipsum has been the industry’s standard
                  dummytext ever since the 1500s, an unknown printer took a
                  gallery.
                </p>

                <a href="">View Case Study</a>
              </div>
            </div>
            <div className="partner-box">
              <img src={lor2} alt="" />
              <div className="partner-head">
                <h4>Virat singh</h4>
                <p>
                  Lorem ipsum is simply dummy text of the printing Typesetting
                  industry. lorem ipsum has been the industry’s standard
                  dummytext ever since the 1500s, an unknown printer took a
                  gallery.
                </p>

                <a href="">View Case Study</a>
              </div>
            </div>
          </div>
        </div>

        <div className="offices">
          <h3>Our Offices</h3>
          <div className="mt-2 picta">
            <p>Kushel digi operates in multiple offices and development centers across the globe.</p>
            <p>Reach out to us for software development services in your region.</p>
          </div>
          <div className="office-img flex items-center justify-center">
            <div className="office-image">
              {/* <img src={office1} alt="" /> */}
              <div className="office-image-sect">
                <h4>INDIA</h4>
                <div className="flex items-center">
                  <img width={25} src={londa} alt="" />
                  <p className="ml-3">g-9, first Floor, Sector 63, Noida</p>
                </div>
              </div>
            </div>
            <div className="office-image1">
              {/* <img src={office2} alt="" /> */}
              <div className="office-image-sect">
                <h4>INDIA</h4>
                <div className="flex items-center">
                  <img width={25} src={londa} alt="" />
                  <p className="ml-3">g-9, first Floor, Sector 63, Noida</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home9 mb-12 home278">
          <div className="home91 flex px-24">
            <div className="home911 text-center">
              <h2 className='font-bold text-gray-700'>JUST THE FAQs</h2>
            </div>
            <div className="home912">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What Is The Eligibility Of Becoming Business Partner ?
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
                      Is There Any Geography Restrictions ?
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
                      What Is The Working Hours ?
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
                      How We Will Able To See Our Earnings
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
                      Is There Any Association Fees ?
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
            </div>
          </div>
        </div>
        <div className='flex items-start justify-center discusion-form discusion-form1'>
          <div className="w-full  mrs">
            <h3>Let’s Discuss your Project</h3>
            <form action="">
              <div className=" flex items-start common-form">
                <div className="first-form">
                  <div className="form-field">
                    <input type="text" placeholder="Name*" />
                  </div>
                  <div className="form-field mt-5">
                    <input type="text" placeholder="Phone number*" />
                  </div>
                  <div className="form-field mt-5">
                    <input type="email" placeholder="Email Address*" />
                  </div>
                  <div>
                    <button>Submit <img className="tih" src={arrow1} alt="" /></button>
                  </div>
                </div>
                <div className="second-form">
                  <div className="form-filed1">
                    <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                  </div>
                </div>
              </div>

            </form>
          </div>
          <div className='w-full   loofs'>
            {/* <h3>How can we help?</h3>
           <p>Are you looking for a reliable mobile application development company? Contact our expert team — we will help your business build a successful mobile strategy and create convenient omnichannel experience for all your customers and clients.</p>
           <button>Let’s Talk <img className="tih" src={arrow1} alt="" /></button> */}
            <div className="loofs-sect">
              <h2>ENJOY WORKING WITH AN EXPERIENCED AND CREATIVE TEAM. LET’S TALK.</h2>
              <button>Want to join us <img width={12} className="inline ml-1" src={arrow3} alt="arrow3" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPartner;
