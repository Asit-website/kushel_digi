import React, { useState } from "react";
import woo1 from "../images/woo1.png";
import reactus from "../images/reactus.png";
import arrow4 from "../images/arrow4.png";
import admis1 from "../images/admis1.png";
import greenish from "../images/greenish.png";
import magic from "../images/magic.png";
import uist from "../images/uist.png";
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
import startups1 from '../images/startups1.png';
import enterprise from '../images/enterprise.png';
import ContactForm1 from "./common/ContactForm1";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const WooCommerce = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  return (
    <>
      <div className="ser-main">
        <div className="magento-back">
          <div className="magento_back1">
            <h2>
              WooCommerce <br /> Development
            </h2>
            <p>Get WooCommerce Development For Robust And Effective Websites</p>
            <button>
              Consult our WooCommerce Team
              <img width={13} className="ml-1.5 inline" src={arrow4} alt="" />
            </button>
          </div>
          <div className="magento_back2 relative">
            <div className="magentos">
              <img
                className="reacting animate__animated animate__pulse animate__infinite"
                src={reactus}
                alt="reactus"
              />
            </div>
            <img className="reactus reactus1" src={woo1} alt="magentos" />
          </div>
        </div>
        <div className="magento_service">
          <div className="magento_service1">
            <h2>
              Our <span>WooCommerce</span> <br /> development services
            </h2>
            <p>
            Welcome to Kushel Digi, your trusted partner in Woo Commerce development. As experts in creating exceptional e-commerce solutions, we offer a comprehensive range of services to elevate your online store. With Woo Commerce as our foundation, we provide seamless integration, customization, and plugin development, ensuring that your website stands out from the competition. Our team of skilled developers combines technical expertise with a deep understanding of user experience to deliver captivating designs and a smooth purchasing journey for your customers.
            </p>
          </div>
          <div className="magento_service2">
            <div className="greenish">
              <img src={greenish} alt="greenish" />
            </div>
            <img className="admis" src={admis1} alt="admis" />
          </div>
        </div>

        <div className="magento_services">
          <div className="magento_services1">
            <img src={magic} alt="misad" />
          </div>
          <div className="magento_services2">
            <div>
              <h2>
              Why Choose <span>WooCommerce</span>  Solution? 
              </h2>
              <p>
              When it comes to developing e-commerce or any other website, Woo Commerce reigns supreme. With its remarkable features, Woo Commerce offers an unrivalled management solution for online businesses. Seamlessly track orders, provide real-time delivery updates, and engage with your customers effortlessly. Not to mention, it powers half of the WordPress stores, making it the go-to choice for WordPress enthusiasts. Boost your online presence with Woo Commerce and reap the benefits of enhanced SEO and a seamless user experience. Moreover, Woo Commerce offers a wide range of plugins and extensions, allowing you to customize and enhance your store's functionality according to your specific needs. Whether you're a small business owner or an established brand, Woo Commerce empowers you to create a robust and successful online presence.
              </p>
            </div>
            <div className="mt-6">
              <h2>Why Choose <span>Kushel Digi</span>  for</h2>
              <h2>WooCommerce Development?</h2>
              <p>
              When it comes to WooCommerce development, you need a team of experts who truly understand the intricacies of the platform. Our skilled WooCommerce developers at Hyperlink InfoSystem possess unrivalled expertise in crafting tailor-made e-commerce solutions. From meticulous planning to flawless execution, our dedicated team takes charge of every aspect of your project. We cater to businesses of all sizes, ensuring exceptional quality for startups, medium-sized enterprises, and giant corporations. With cost-effectiveness, scalability, and efficiency at the core of our approach, we are your trusted partners for Woo Commerce development.
              </p>
            </div>
          </div>
        </div>

        <div className="woo_comerce_dev">
          <h2>Woo Commerce Development Services We Offer</h2>
          <div className="mt-2">
          <p className="at_kushel">At Kushel Digi, we offer a comprehensive range of Woo Commerce development </p>
          <p className="at_kushel">services that cater to your unique needs. Our expertise includes:</p>
          </div>
          <div className="woo_com_cards">
            <div className="who_com_card">
              <div className="who_com_box">
                <div className="who_left">
                  <h4>1</h4>
                </div>
                <h3>WooCommerce App Development and Customization</h3>
                <p>
                Enhance your brand's reach by creating engaging mobile apps for your online store. Our team excels at developing customized Woo Commerce apps that provide seamless user experiences and drive conversions.
                </p>
              </div>
              <div className="who_com_box">
                <div className="who_left">
                  <h4>2</h4>
                </div>
                <h3>PSD to</h3>
                <h3>WooCommerce</h3>
                <h3>Conversion</h3>
                <p>
                Transform your PSD designs into fully functional Woo Commerce websites. Our experts meticulously convert your design files into pixel-perfect, responsive Woo Commerce themes, ensuring a seamless user experience.
                </p>
              </div>
              <div className="who_com_box">
                <div className="who_left">
                  <h4>3</h4>
                </div>
                <h3>WooCommerce</h3>
                <h3>Template and Theme</h3>
                <h3>Development</h3>
                <p>
                Make a lasting impression with captivating designs. Our talented designers will create visually appealing themes and templates that align with your brand's vision and elevate the user experience.
                </p>
              </div>
              <div className="who_com_box">
                <div className="who_left">
                  <h4>4</h4>
                </div>
                <h3>WooCommerce</h3>
                <h3>Customization</h3>
                <p>
                Tailor your e-commerce website to reflect your brand identity. Our experts will work closely with you to create a visually stunning and intuitive online store that stands out from the competition.
                </p>
              </div>
            </div>
            <div className="who_com_card mt-6">
              <div className="who_com_box">
                <div className="who_left">
                  <h4>5</h4>
                </div>
                <h3>WooCommerce</h3>
                <h3>Plugin Development</h3>
                {/* <h3>SERVICES</h3> */}
                <p>
                Extend the functionality of your e-commerce store with custom plugins. Our developers have expertise in creating tailor-made Woo Commerce plugins that address your specific requirements and enhance your store's capabilities.
                </p>
              </div>
              <div className="who_com_box">
                <div className="who_left">
                  <h4>6</h4>
                </div>
                <h3>WooCommerce</h3>
                <h3>Integration</h3>
                <p>
                Integrate Woo Commerce seamlessly with other tools and systems to streamline your business operations. Whether it's payment gateways, inventory management, or CRM systems, we ensure seamless and efficient integration.
                </p>
              </div>
              <div className="who_com_box">
                <div className="who_left">
                  <h4>7</h4>
                </div>
                <h3>WooCommerce</h3>
                <h3>Conversion and</h3>
                <h3>Migration</h3>
                <p>
                Effortlessly transfer your existing online store to the powerful Woo Commerce platform. Our team ensures a smooth transition, preserving your data, and optimizing your website for maximum performance.
                </p>
              </div>
              <div className="who_com_box">
                <div className="who_left">
                  <h4>8</h4>
                </div>
                <h3>WooCommerce</h3>
                <h3>Maintenance and</h3>
                <h3>Support</h3>
                <p>
                Ensure your online store runs smoothly with our comprehensive maintenance and support services. Our team is dedicated to providing ongoing assistance, addressing any issues, and keeping your website up-to-date and secure.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="why_woo_cho">
          <div className="who_cho_flex">
            <div className="who_cho_left">
              <div className="partion">
                <h3>
                  Why Choose Kushel Digi For WooCommerce Ecommerce Development?
                </h3>
                <p>
                Choosing Kushel Digi means partnering with a seasoned team that has mastered the art of WooCommerce development. With over a decade of experience, we have successfully delivered captivating online stores for various industries. Our WooCommerce developers possess deep insights into the e-commerce world and are adept at quickly identifying and resolving any challenges. Throughout the development process, we maintain transparent communication, ensuring your goals and expectations are met every step of the way.

                </p>
                <button>START PROJECT</button>
              </div>
            </div>
            <div className="who_cho_right">
              <img src={uist} alt="" />
            </div>
          </div>
        </div>

        <div className="process_bigt">
          <h2>Process We Follow</h2>
          <div className="paperbox">
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <img
                src={hovered ? uin : framingts}
                className="startup"
                alt="img"
              />
              <h3>1. Requirement Gathering</h3>
              <h5>
              We prioritize understanding your objectives, and gathering resources, and crucial information to initiate the project.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <img src={hovered2 ? uin1 : gatr} className="startup" alt="img" />
              <h3>2. UI/UX Design</h3>
              <h5>
              Our talented designers create visually appealing and user-friendly interfaces that elevate your brand's online presence.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
            >
              <img
                src={hovered3 ? uin2 : gatr1}
                className="startup"
                alt="img"
              />
              <h3>3. Prototype</h3>
              <h5>
              We provide you with a prototype, which serves as a blueprint for the development process.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered4(true)}
              onMouseLeave={() => setHovered4(false)}
            >
              <img
                src={hovered4 ? uin3 : gatr2}
                className="startup"
                alt="img"
              />
              <h3>4. Development</h3>
              <h5>
              Using cutting-edge tools and technologies, our developers bring your e-commerce website to life with transparency and attention to detail.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered5(true)}
              onMouseLeave={() => setHovered5(false)}
            >
              <img
                src={hovered5 ? uin4 : gatr3}
                className="startup"
                alt="img"
              />
              <h3>5. Quality Assurance</h3>
              <h5>
              We leave no room for compromise when it comes to quality. Our team ensures a bug-free application that meets the highest standards.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered6(true)}
              onMouseLeave={() => setHovered6(false)}
            >
              <img
                src={hovered6 ? uin5 : gatr4}
                className="startup"
                alt="img"
              />
              <h3>6. Deployment</h3>
              <h5>
              Once the development process is complete, we guide you through the launch of your app on the App Store or Play Store.
              </h5>
            </div>
            <div
              className="first1 first11"
              onMouseEnter={() => setHovered7(true)}
              onMouseLeave={() => setHovered7(false)}
            >
              <img
                src={hovered7 ? uin6 : gatr5}
                className="startup"
                alt="img"
              />
              <h3>7. Support & Maintenance</h3>
              <h5>
              We are committed to providing ongoing support and addressing any queries or concerns you may have post-deployment.
              </h5>
            </div>
          </div>
        </div>
        <CaseStudy />

        <div className="solution_test">
            <div className="solution_test_card">
                 <div className="solution_test_box">
                    <h5>Solution for</h5>
                    <h1>Enterprise</h1>
                    <div>
                       <img src={enterprise} alt="enterprise" />
                    </div>
                    <div>
                        <hr className="mt-5" />
                        <ul>
                          <li>Real-time problem solving and support from the best technical brains</li>
                        </ul>
                        <hr />
                        <ul>
                          <li>On-time Reporting and consultation for projects</li>
                        </ul>
                        <hr />
                        <ul>
                          <li>We cater to all custom business requirements of the clients</li>
                        </ul>
                    </div>
                 </div>
                 <div className="solution_test_box soution_test_box1">
                     <h5>Solution for</h5>
                     <h1>Startup</h1>
                     <div>
                        <img src={startups1} alt="startups1" />
                     </div>
                     <div>
                        <hr className="mt-5" />
                        <ul>
                          <li>Highly cost-effective pricing models for startups</li>
                        </ul>
                        <hr />
                        <ul>
                          <li>In-depth business consultation from the experts</li>
                        </ul>
                        <hr />
                        <ul>
                          <li>Flexible On-time maintenance and support packages</li>
                        </ul>
                        <hr />
                        <ul>
                          <li>Dedicated resources to deliver the best outcomes at the best price</li>
                        </ul>
                    </div>
                 </div>
            </div>
        </div>

          <ContactForm1/>

          <div className="home9 py-20 bigcom9">
          <div className="home91 flex px-20">
            <div className="home911 text-center">
              <h2 className="font-bold text-gray-700">JUST THE FAQs</h2>
            </div>
            <div className="home912">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    How many team members will you assign to my Magento project? Please define their roles.
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
                    Who will be my Point of Contact in case I hire Magento development services from Elsner Technologies Pvt. Ltd.?
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
                    Will we get the sole ownership of the source files once the project gets over?
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
                    What is the support period provided by your company?
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
  );
};

export default WooCommerce;
