import React,{useState}  from "react";
// import hireTeam from "../images/hireTeam.png";
import arrow from "../images/arrow.png";
import hiper from "../images/hiper.png";
import hiredEllipse from '../images/hiredEllipse.png';
import watta from '../images/watta.png';
import arrow4 from '../images/arrow4.png';
import { NavLink } from "react-router-dom";
import hf2 from '../images/hf2.png';
import hf3 from '../images/hf3.png';
import hf4 from '../images/hf4.png';
import hf5 from '../images/hf5.png';
import hf6 from '../images/hf6.png';
import hf7 from '../images/hf7.png';
import hf8 from '../images/hf8.png';
import dec1 from "../images/dec1.png";
import dec2 from "../images/dec2.png";
import dec3 from "../images/dec3.png";
import dec4 from "../images/dec4.png";
import dec5 from "../images/dec5.png";
import dec6 from "../images/dec6.png";
import dec7 from "../images/dec7.png";
import dilkush from "../images/dilkush.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import posis1 from "../images/posis1.png";
import posis2 from "../images/posis2.png";
import posis3 from "../images/posis3.png";
import posis4 from "../images/posis4.png";
import posis5 from "../images/posis5.png";
import posis6 from "../images/posis6.png";
import posis7 from "../images/posis7.png";
import posis8 from "../images/posis8.png";
import posis10 from '../images/posis10.png';
const HireTeam = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  const [hovered8, setHovered8] = useState(false);
  return (
    <>
      <div className="ser-main">
        <div className="hire-back">
          <div className="hire-sect">
            <h2>Get Your</h2>
            <h2 className="turu">Team Hired</h2>
            <p>
              Our expert recruiters help you go from ‘’ hope to HIRED’’ by
              finding meaningful employment for applicants, and outstanding
              employees for clients!
            </p>
          </div>
        </div>
        <div className="hire-status flex items-center justify-around">
          <div className="hiring-status">
            <h3>1000+</h3>
            <p>Hires Placed</p>
          </div>
          <div className="hiring-status">
            <h3>1000+</h3>
            <p>Interviews completed</p>
          </div>
          <div className="hiring-status">
            <h3>3258+</h3>
            <p>Resumes sourced</p>
          </div>
          <div className="hiring-status">
            <h3>1500+</h3>
            <p>Testimonials & Reviews</p>
          </div>
        </div>

        <div className="hires-team">
          {/* <img src={hireTeam} alt="HireTeam" /> */}
          <marquee behavior="scroll" direction="right" scrollamount="20">
            <h1>HIRE TEAM</h1>
          </marquee>
          <div className="hiring-team">
            <div className="first-hiring">
              <h5>Team Hired Helps</h5>
              <h2>Build Your Business</h2>
              <div className="hired-para">
                <p className="hiring-first-para">
                  Team Hired is a full-service recruiting firm dedicated to
                  finding the best candidates for the job!
                </p>
                <p className="hiring-second-para">
                  We know the feeling, you’ve spent hours, days, weeks, maybe
                  even months sifting through resumes. You’re at your wit’s end,
                  and you’re feeling it where it hurts. We’ve been there, and we
                  can help. Our job is to take care of all of the busy work so
                  you can get back to running your business. Whether you’re a
                  small operation with only one space to be filled, or you’re a
                  larger firm with multiple job openings, we’re your recruiting
                  experts.
                </p>
              </div>
              <button>
                Our Services{" "}
                <img width={14} className=" inline ml-2" src={arrow} alt="" />
              </button>
            </div>
            <div className="second-hiring">
              <div className="about165">
              <img className="hiredEllipse" src={hiredEllipse} alt="hiredEllipse" />
              </div>
              <img className="hiper" src={hiper} alt="hiper" />
            </div>
          </div>
        </div>

        <div className="team-hired-help">
             <div className="hired-help-sect">
                <h5>Team Hired Helps</h5>
                <h2>GET YOUR TEAM HIRED</h2>
                <div className="list-hired">
                    <div className="listing-hired">
                        <img src={watta} alt="" />
                        <p>Our skilled recruiters through our Team Hired Virtual Hiring Events can help get you hired fast build your team fast</p>
                        {/* <p>Learn tips and tricks on how to refine your hiring process</p>
                        <p>Expert Coaching & Consulting to support your business</p>
                        <p>Let Team Hired become an extension of your brand to help scale your business to the next level.</p> */}
                    </div>
                    <div className="listing-hired">
                        <img src={watta} alt="" />
                        <p>Learn tips and tricks on how to refine your hiring process</p>
                        {/* <p>Expert Coaching & Consulting to support your business</p> */}
                        {/* <p>Let Team Hired become an extension of your brand to help scale your business to the next level.</p> */}
                    </div>
                    <div className="listing-hired">
                        <img src={watta} alt="" />
                        <p>Expert Coaching & Consulting to support your business</p>
                        {/* <p>Let Team Hired become an extension of your brand to help scale your business to the next level.</p> */}
                    </div>
                    <div className="listing-hired">
                        <img src={watta} alt="" />
                        <p>Let Team Hired become an extension of your brand to help scale your business to the next level.</p>
                    </div>
                </div>
               <NavLink to="/contact"><button>Contact US <img width={13} className=" inline ml-2" src={arrow4} alt="arrow4" /></button></NavLink>
             </div>
        </div>

        <div className="benifits-hire">
            <h2>Benefits of Hire Team</h2>
            <div className="hired-cards mt-10">
                <div className="hired-card">
                     <div className="hired-box">
                        <div className="hired-sard">
                            <img src={hf2} alt="" />
                            <p>Save time finding talent</p>
                        </div>
                     </div>
                     <div className="hired-box">
                        <div className="hired-sard">
                            <img src={hf2} alt="" />
                            <p>Save money spent on <br /> sourcing talent</p>
                        </div>
                     </div>
                     <div className="hired-box">
                        <div className="hired-sard">
                            <img src={hf3} alt="" />
                            <p>Work with a <br /> productive team</p>
                        </div>
                     </div>
                     <div className="hired-box">
                        <div className="hired-sard">
                            <img src={hf4} alt="" />
                            <p>Team members are <br /> finalized by you</p>
                        </div>
                     </div>
                </div>
                <div className="hired-card">
                     <div className="hired-box">
                        <div className="hired-sard">
                            <img src={hf5} alt="" />
                            <p>Access to a pool of <br /> talented professionals</p>
                        </div>
                     </div>
                     <div className="hired-box">
                        <div className="hired-sard">
                            <img src={hf6} alt="" />
                            <p>Work with people you <br /> are comfortable with</p>
                        </div>
                     </div>
                     <div className="hired-box">
                        <div className="hired-sard">
                            <img src={hf7} alt="" />
                            <p>Higher resource <br /> efficiency since teams <br /> work remotely</p>
                        </div>
                     </div>
                     <div className="hired-box">
                        <div className="hired-sard">
                            <img src={hf8} alt="" />
                            <p>Faster and better <br /> outcomes</p>
                        </div>
                     </div>
                </div>
            </div>
           <NavLink to="/contact"><button>Lets Discuss Your Project</button></NavLink>
        </div>

        <div className="hire-serve">
            <div className="first-serve">
                 <h2>INDUSTRIES WE SERVE</h2>
                 <p>We have the expertise and skills to serve a wide range of industries and meet their requirements of web & mobile development on any scale. Our team has years of experience in delivering projects for clients/businesses across industry verticals.</p>
            </div>
            <div className="second-serve">
            <div className="indu-fard mt-8">
            <div className="indu-card indu-card1">
              <div className="indu-box"
                onMouseEnter={()=> setHovered(true)}
                onMouseLeave={()=> setHovered(false)}
              >
                <img src={hovered ? posis10 : dilkush} alt="dilkush" />
                <p>Healthcare & Wellness</p>
              </div>
              <div className="indu-box"
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={()=> setHovered2(false)}
              >
                <img src={hovered2 ? posis2 : dec1} alt="" />
                <p>Real Estate</p>
              </div>
              <div className="indu-box"
                onMouseEnter={()=> setHovered3(true)}
                onMouseLeave={()=> setHovered3(false)}
              >
                <img src={hovered3 ? posis3 : dec2} alt="" />
                <p>IT, Software & Internet Marketing</p>
              </div>
              
            </div>
            <div className="indu-card indu-card1">
            
              <div className="indu-box"
                onMouseEnter={()=> setHovered4(true)}
                onMouseLeave={()=> setHovered4(false)}
              >
                <img src={hovered4 ? posis4 : dec3} alt="" />
                <p>Finance & Banking</p>
              </div>
              <div className="indu-box"
                onMouseEnter={()=> setHovered5(true)}
                onMouseLeave={() => setHovered5(false)}
              >
                <img src={hovered5 ? posis5 : dec4} alt="" />
                <p>
                  Government & Public <br /> Sector Enterprises
                </p>
              </div>
              <div className="indu-box"
                onMouseEnter={()=> setHovered6(true)}
                onMouseLeave={()=> setHovered6(false)}
              >
                <img src={hovered6 ? posis6 : dec5} alt="" />
                <p>Travel & Tour</p>
              </div>
              {/* <div className="indu-box">
                <img src={dec6} alt="" />
                <p>Retail</p>
              </div> */}
              {/* <div className="indu-box">
                <img src={dec7} alt="" />
                <p>SPORTS ( outdoor & indoor )</p>
              </div> */}
            </div>
            <div className="indu-card indu-card1">
            
           
            <div className="indu-box"
               onMouseEnter={()=> setHovered7(true)}
                onMouseLeave={()=> setHovered7(false)}
            >
              <img src={hovered7 ? posis7 : dec6} alt="" />
              <p>Retail</p>
            </div>
            <div className="indu-box"
              onMouseEnter={()=> setHovered8(true)}
                onMouseLeave={()=> setHovered8(false)}
            >
              <img src={hovered8 ? posis8 : dec7} alt="" />
              <p>SPORTS ( outdoor & indoor )</p>
            </div>
            <div className="indu-box indus-trust"
              
            >
                <img src={dec5} alt="" />
                <p>Travel & Tour</p>
              </div>
          </div>
          </div>
            </div>
        </div>
     
         <div className="hire-testimonials">
             <h2>Testimonials</h2>
             <p className="read-what">Read what our client says about us!</p>
             <Splide
                aria-label="Our Services"
                options={{
                  perPage:1,
                  perMove: 1,
                  autoplay: true,
                  pauseOnHover: true,
                  type: "loop",
                  interval: 1000,
                  drag: true,
                }}
              >
                <SplideSlide>
                <div className="hire-test">
                 <h4>Sandeep Sharma</h4>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
             </div>
                </SplideSlide>
                <SplideSlide>
                <div className="hire-test">
                 <h4>Sandeep Sharma</h4>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
             </div>
                </SplideSlide>
              </Splide>
           
         </div>
        <div className="demo-hire">
            <div className="demo-hire-sect">
                <h2>Apply for services right now, to learn more about our work or schedule an appointment.</h2>
                <button>Get Your Demo Now <img width={13} className=" inline ml-2" src={arrow4} alt="" /></button>
            </div>
        </div>
      </div>
    </>
  );
};

export default HireTeam;
