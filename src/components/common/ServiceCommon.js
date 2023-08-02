import React,{useEffect,useState} from 'react'
import nativeSer1 from '../../images/nativeSer1.png';
import nativeSer2 from '../../images/nativeSer2.png';
import nativeSer3 from '../../images/nativeSer3.png';
// import nativeSer4 from '../images/nativeSer4.png';
import nativeSer5 from '../../images/nativeSer5.png';
import nativeSer6 from '../../images/nativeSer6.png';
import nativeSer7 from '../../images/nativeSer7.png';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { NavLink } from 'react-router-dom';
const ServiceCommon = () => {
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
     <>
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
                                   <NavLink to="/ecommerce-solutions-usa"><span>Read More</span></NavLink>
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
                                   <NavLink to="/ui-ux-designer-usa"><span>Read More</span></NavLink>
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
                                   <NavLink to="/mobile-application-development-usa"><span>Read More</span></NavLink>
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
                                   <NavLink to="/web-development-usa"><span>Read More</span></NavLink>
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
                                  <NavLink to="/graphic"><span>Read More</span></NavLink>
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
                                   <NavLink to="/digital-marketing-agency-usa"><span>Read More</span></NavLink>
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

     </>
  )
}

export default ServiceCommon