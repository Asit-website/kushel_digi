import React from 'react'
import graphic1 from '../images/graphic1.png';
import sinki from '../images/sinki.png';
import art1 from '../images/art1.png';
import art2 from '../images/art2.png';
import art3 from '../images/art3.png';
import art4 from '../images/art4.png';
import art5 from '../images/art5.png';
import art6 from '../images/art6.png';
import art7 from '../images/art7.png';
import art8 from '../images/art8.png';
import art9 from '../images/art9.png';
import art10 from '../images/art10.png';
import art11 from '../images/art11.png';
import art12 from '../images/art12.png';
import testiEllipse from "../images/testiEllipse.png";
import testiEllipse1 from "../images/tsetiEllipse1.png";
import tinih from "../images/tinih.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import whatImg from '../images/whatImg.png';
import ContactForm1 from './common/ContactForm1'
const GraphicDesign = () => {
    return (
        <>
            <div className="ser-main">
                <div className="graphic_back">
                    <div className="graphic_back1">
                        <div className='graphic_des'>
                            <h2>Design Services for <br /> Ambitious Brands</h2>
                            <p>Teams at fast-growing companies use Superside to get quality graphic design done at scale. Book a call today and get acess to your dedicated design team.</p>
                            <button>Consult our Graphic Design Team <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z" fill="#202020" />
                            </svg>
                            </button>
                        </div>
                    </div>
                    <div className="graphic_back2">
                        <div>
                            <img src={graphic1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="get_graphic">
                    <div className="get_graphic1">
                        <div className="graphic11">
                            <h3>A VARIETY OF DESIGN SERVICES AT YOUR FINGERTIPS</h3>
                            <h2>Get graphic design, print, motion, video and more</h2>
                            <div className='whether56'>
                                <p>Whether you need an out-of-this-world illustration, beautiful print designs, or engaging digital marketing assets, Kushel Digi world-class graphic designers from around the world will make it happen.
                                </p>
                                <p> Unlike traditional graphic design agencies, Kushel Digi is a tech enabled, Creative-as-a-Service design solution built to keep up with the evolving needs and fast pace of enterprise teams. Access a full suite of design capabilities through a transparent design subscription model.</p>
                            </div>
                        </div>
                    </div>
                    <div className="get_graphic2">
                        <div className="graphic_end_img">
                            <img src={sinki} alt="" />
                        </div>
                    </div>

                </div>

                <div className="design_services">
                    <h2>Design Services</h2>
                    <div className="design_cants">
                        <div className="design_cant">
                            <div className="design_box">
                                <div className="arts_img">
                                    <img src={art1} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>Ad Creative</h3>
                                    <p>Get Static and motion ad creative, concepts, and variations for testing your way to better result across social media. </p>
                                </div>
                            </div>
                            <div className="design_box design_box1">
                                <div className="arts_img">
                                    <img src={art2} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>Social Media Creative</h3>
                                    <p>Get original designs for your social media channels. static, animated or video, from instagram to youtube or Facebook.</p>
                                </div>
                            </div>

                            <div className="design_box design_box1">
                                <div className="arts_img">
                                    <img src={art3} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>Motion Design</h3>
                                    <p>Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads.</p>
                                </div>
                            </div>

                        </div>
                        <div className="design_cant">
                            <div className="design_box">
                                <div className="arts_img">
                                    <img src={art4} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>Presentation Design</h3>
                                    <p>Get Static and motion ad creative, concepts, and variations for testing your way to better result across social media.</p>
                                </div>
                            </div>
                            <div className="design_box design_box1">
                                <div className="arts_img">
                                    <img src={art5} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>Landing Page Design</h3>
                                    <p>Get original designs for your social media channels. static, animated or video, from instagram to youtube or Facebook.</p>
                                </div>
                            </div>

                            <div className="design_box design_box1">
                                <div className="arts_img">
                                    <img src={art6} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>Illustration Design</h3>
                                    <p>Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads.</p>
                                </div>
                            </div>

                        </div>

                        <div className="design_cant">
                            <div className="design_box">
                                <div className="arts_img">
                                    <img src={art7} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>Branding Services </h3>
                                    <p>Get Static and motion ad creative, concepts, and variations for testing your way to better result across social media. </p>
                                </div>
                            </div>
                            <div className="design_box design_box1">
                                <div className="arts_img">
                                    <img src={art8} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>Video Production</h3>
                                    <p>Get original designs for your social media channels. static, animated or video, from instagram to youtube or Facebook.</p>
                                </div>
                            </div>

                            <div className="design_box design_box1">
                                <div className="arts_img">
                                    <img src={art9} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>Concept Creation</h3>
                                    <p>Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads.</p>
                                </div>
                            </div>

                        </div>

                        <div className="design_cant">
                            <div className="design_box">
                                <div className="arts_img">
                                    <img src={art10} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>Print Design</h3>
                                    <p>Get Static and motion ad creative, concepts, and variations for testing your way to better result across social media. </p>
                                </div>
                            </div>
                            <div className="design_box design_box1">
                                <div className="arts_img">
                                    <img src={art11} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>Email Design</h3>
                                    <p>Get original designs for your social media channels. static, animated or video, from instagram to youtube or Facebook.</p>
                                </div>
                            </div>

                            <div className="design_box design_box1">
                                <div className="arts_img">
                                    <img src={art12} alt="art1" />
                                </div>
                                <div className="arts-head">
                                    <h3>eBooks & Reports Design</h3>
                                    <p>Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="gret-outcome">
                    <div className="gret-outcome1">
                        <h1>DRIVING GREAT OUTCOMES</h1>
                        <p>#1 Creative-as-a-Service solution for marketing and creative teams</p>
                    </div>

                    <div className="gret-outcome2">
                        <button>Book a Demo</button>
                    </div>

                </div>


                <div className="client_testimonials">
                    <h2> Trusted by 250+ fast-</h2>
                    <h2> growing companies and</h2>
                    <h2> enterprises</h2>
                    <p className="words_ji">

                    </p>
                    <Splide
                        className=" w-full"
                        aria-label="Our Services"
                        options={{
                            perPage: 1,
                            perMove: 1,
                            autoplay: true,
                            pauseOnHover: true,
                            type: "loop",
                            interval: 4000,
                            drag: true,
                        }}
                    >
                        <SplideSlide>
                            <div className="clients_testi">
                                <div className="client_testi1">
                                    <div className="surgical">
                                        <img
                                            className="animate__animated animate__pulse animate__infinite"
                                            src={testiEllipse}
                                            alt="testi"
                                        />
                                    </div>
                                    <img className="tinih" src={tinih} alt="tinih" />
                                    <div className="surgical1">
                                        <img
                                            className="testiEllipse1"
                                            src={testiEllipse1}
                                            alt="test"
                                        />
                                    </div>
                                </div>
                                <div className="client_testi2">
                                    <h4>Fred</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a
                                        type specimen book.
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="clients_testi">
                                <div className="client_testi1">
                                    <div className="surgical">
                                        <img
                                            className="animate__animated animate__pulse animate__infinite"
                                            src={testiEllipse}
                                            alt="testi"
                                        />
                                    </div>
                                    <img className="tinih" src={tinih} alt="tinih" />
                                    <div className="surgical1">
                                        <img
                                            className="testiEllipse1"
                                            src={testiEllipse1}
                                            alt="test"
                                        />
                                    </div>
                                </div>
                                <div className="client_testi2">
                                    <h4>Fred</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a
                                        type specimen book.
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>

                <div className="what_makes">
                    <div className="what_makes1">
                        <div className="make-head">
                            <h2>What makes our design services <br />
                                different?</h2>
                            <p>We deliver speedy, high-quality graphic design services through a transparent subscription model. We are a tech-enabled company, developing its own proprietary software to brief, manage, and coordinate a high-volume of design projects, making it possible to keep pace with teams at Amazon, Puma, Facebook, and more. <br />
                                Learn how we can revolutionize the way your organization gets design work done. Book a call today.</p>

                                <button>Book a Call</button>
                        </div>
                    </div>
                    <div className="what_makes2">
                         <div className="what_img">
                             <img src={whatImg} alt="whatImg" />
                         </div>
                    </div>
                </div>

                <ContactForm1/>

            </div>
        </>
    )
}

export default GraphicDesign