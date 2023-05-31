import React from "react";
import iosji from "../images/iosji.png";
import iospo from "../images/iospo.png";
import arrow4 from "../images/arrow4.png";
import androidSis from "../images/android-sis.png";
import arrowing from "../images/arrowing.png";
import bulb1 from "../images/bulb1.png";
import bulb2 from "../images/bulb2.png";
import bulb3 from "../images/bulb3.png";
import bulb4 from "../images/bulb4.png";
import prot1 from "../images/prot1.png";
import prot2 from "../images/prot2.png";
import prot3 from "../images/prot3.png";
import prot4 from "../images/prot4.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const Ios = () => {
  return (
    <div className="ser-main">
      <div className="android-back ios-back">
        <div className="android-back1 ios-back1">
          <h2>
          iOS App <br />
Development Company
          </h2>
          <p>
            Develop next-gen iOS apps that are quality tested for perfection
            with future-forward iOS application development services.
          </p>
          <button>
            Consult our iOS Team{" "}
            <img width={13} className="ml-1 inline" src={arrow4} alt="" />
          </button>
        </div>
        <div className="android-back2 ios-back2">
          <img src={iosji} alt="androids" />
        </div>
      </div>
      <div className="android2-app">
        <div className="android-fun android-funst">
          <div className="android-fun1">
            <h2>Our iOS App Development</h2>
            {/* <h2></h2> */}
            <h2>Services</h2>
            <img className="ftp" src={androidSis} alt="" />
            <h5>
              Discuss your goals with us{" "}
              <img width={14} className="ml-1 inline" src={arrowing} alt="" />{" "}
            </h5>
          </div>
          <div className="android-fun2 ios-fun2">
            <p>
              Kushel Digi has a wealth of 12 years of experience delivering
              tailor-made iOS app solutions that increase user engagement,
              polish brand value, and accelerate revenue.
            </p>
            <p className="mt-4">
              Our iOS app development agency comprises certified engineers who
              know the ins and outs of every Apple device. In addition, we
              leverage cutting-edge tools and languages like Swift, SwiftUI,
              Objective-C, XCode, CircleCI, TestFlight, Revenuecat, Bitbucket,
              and Jira to offer various high-quality services.
            </p>
          </div>
        </div>
        <div className="android-cards">
          <div className="android-card">
            <div className="android-box android-box1">
              <div className="android0-img flex items-center">
                <img src={bulb1} alt="" />
                <h4 className="ml-3">Android App Development Consultation</h4>
              </div>
              <p>
                Android applications come with their set of user base and
                customer expectations. We help businesses align their ideas with
                those expectations and an Android-specific user base. Our
                consultants help you choose the best Android platform and the
                way you can top the store.
              </p>
            </div>
            <div className="android-box android-box2">
              <div className="android0-img flex items-center">
                <img src={bulb2} alt="" />
                <h4 className="ml-3">Custom Android Application Development</h4>
              </div>
              <p>
                Our android application developers carry expertise in building
                robust, scalable Android solutions. We create custom Android
                software for a range of industries across the globe. We help you
                build a solution that presents your authentic voice in a store
                with millions of apps.
              </p>
            </div>
          </div>
          <div className="android-card">
            <div className="android-box android-box3">
              <div className="android0-img flex items-center">
                <img src={bulb3} alt="" />
                <h4 className="ml-3">Android UI/UX Design</h4>
              </div>
              <p>
                Android is one of the most expensive ecosystems. There are a
                number of devices that operate in it. Our team of Android app
                designers holds expertise in creating memorable experiences
                across all Android devices and versions.
              </p>
            </div>
            <div className="android-box android-box4">
              <div className="android0-img flex items-center">
                <img src={bulb4} alt="" />
                <h4 className="ml-3">Android Software Testing</h4>
              </div>
              <p>
                Our android mobile development process is engineered to be
                security and performance-first. We ensure that your android
                mobile application development is glitch-free and has zero lags.
                We perform a combination of manual and automated testing
                processes to ensure a future-ready android software development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="android-offer">
        <div className="android-offer1 ios-offer1">
          <h3>
            Empowering Your Business Through <br />
            Custom iOS Application <br /> Development
          </h3>
          <p>
            As a full-stack iPhone App Development company we have deployed
            hundreds of native iOS apps that witnessed skyrocketing success
            rates and were chartbusters on the App Store. We have a highly
            skilled team of experienced iPhone mobile app developers and our
            primary tech stack for developing iOS solutions is Objective-C and
            Swift. We are an iOS mobile app development company with a dedicated
            team of iPhone app developers that provide custom iPhone application
            development services keeping in regard the specific design and iOS
            application development company guidelines related to all individual
            platforms - iPad, iPhone, Apple TV, and Apple Watch. Our iOS app
            developers have built apps for diverse use cases ranging from
            real-time analytics to route matching, geo-tagging, video streaming,
            and more across multiple sectors.
          </p>
        </div>
        <div className="android-offer2 ios-offer2">
          <img src={iospo} alt="ecosys" />
        </div>
      </div>

      <div className="android-usa">
        <div className="android-usa1 ios-usa1">
          <h3>Use Cases That Make</h3>
          <h3>iOS Development The First Choice</h3>
          <h3>of SMEs and Enterprises</h3>
          <p>
            Our custom iOS app development services guarantee that you take
            complete advantage of the Apple ecosystem’s offerings.
          </p>
          {/* <h5>
            Explore Problem Solving with Android{" "}
            <img width={14} className="ml-1 inline" src={arrowing} alt="" />
          </h5> */}
        </div>
        <div className="android-usa2 ios-usa2"></div>
        <div className="android-usa3">
          <div className="android-usas">
            <div className="android-usas1">
              <div className="android-usast1">
                <h3>1</h3>
                <p>Multi-platform exposure</p>
              </div>

              <div className="android-usast1 android-usast2">
                <h3>2</h3>
                <p>Greater sources of revenue</p>
              </div>
            </div>
            <div className="android-usas1">
              <div className="android-usast1">
                <h3>3</h3>
                <p>Multi-platform exposure</p>
              </div>

              <div className="android-usast1 android-usast2">
                <h3>4</h3>
                <p>Greater sources of revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="android-pro">
        <div className="android-process ios-process flex-col items-center justify-center">
          <div className="android-process1">
            <h2 className="text-center">
              The Process That Makes Us a Leading iPhone <br /> Application
              Development Company
            </h2>
          </div>
          <div className="android-process2">
            <div className="prot-process mt-12">
              <div className="prot">
                <div className="prot-img">
                  <img src={prot1} alt="" />
                </div>
                <p>Multi-platform Development</p>
              </div>
              <div className="prot mt-14">
                <div className="prot-img">
                  <img src={prot2} alt="" />
                </div>
                <p>Quality Assurance</p>
              </div>
              <div className="prot mt-14">
                <div className="prot-img">
                  <img src={prot3} alt="" />
                </div>
                <p>App Store Submission</p>
              </div>
              <div className="prot mt-14">
                <div className="prot-img">
                  <img src={prot4} alt="" />
                </div>
                <p>Post-launch Maintenance</p>
              </div>
            </div>
          </div>
        </div>
        <div className="android-perform mt-20">
          <div className="andoid-perform-flex">
            <div className="android-pflex">
              <h1>250+</h1>
              <p>
                Android developers <br /> in-house
              </p>
            </div>
            <div className="android-pflex">
              <h1>500+</h1>
              <p>
                Android projects <br /> in-house
              </p>
            </div>
            <div className="android-pflex">
              <h1>30+</h1>
              <p>
                industries brought <br /> on Android
              </p>
            </div>
          </div>
          <h5 className="text-center">
            Lets Work Together
            <img width={14} className="ml-2 inline" src={arrowing} alt="" />
          </h5>
        </div>
      </div>

      <div className="ios-kickstart">
        <div className="kickstart-sect">
          <h2>Kickstart Your Dream Project With Us</h2>
          <p>
            We have worked with some of the best innovative ideas and brands in
            the world across industries.
          </p>
          <button>Lets Start</button>
        </div>
      </div>

      <div className="home9 mb-12 home278 home480 home481">
        <div className="home91 flex px-24">
          <div className="home911 text-center">
            <h2 className="font-bold text-gray-700">JUST THE FAQs</h2>
          </div>
          <div className="home912">
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do I own the ownership and the code of my application?
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
                    Do you have flexible hiring models?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How do you allocate the resources for my app development in
                    iOS?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What are some of the top android apps developed by you?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Which tools and technologies do you use?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
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
  );
};

export default Ios;
