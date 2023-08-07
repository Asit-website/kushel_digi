import React, { useState } from 'react'
import student from '../images/students.png';
import studentsFrame from '../images/studentFrame.png';
import { NavLink } from 'react-router-dom';
import pinnak1 from '../images/pinnak1.png';
import pinnak2 from '../images/pinnak2.png';
import pinnak3 from '../images/pinnak3.png';
import pinnak4 from '../images/pinnak4.png';
import pinnak5 from '../images/pinnak5.png';
import pinnak6 from '../images/pinnak6.png';
import recy from '../images/recy.png';
import remix from '../images/remix.png';
import grimta from '../images/grimta.png';
import pixelArt from '../images/pixelArt.png';
import richa from '../images/richa.png';
import manbiTui from '../images/manbiTui.png';
import womanMan from '../images/womanMan.png';
import ContactForm1 from './common/ContactForm1'
const HowWork = () => {
  const [tab, setTab] = useState(1);

  const tabAnother1 = () => {
    setTab(1);
    document.getElementById("track1").style.borderBottom = "1.5px solid #1476F2";
    document.getElementById("track2").style.borderBottom = "none";
    document.getElementById("track3").style.borderBottom = "none";
    document.getElementById("track4").style.borderBottom = "none";
    document.getElementById("track5").style.borderBottom = "none";
  }
  const tabAnother2 = () => {
    setTab(2);
    document.getElementById("track1").style.borderBottom = "none";
    document.getElementById("track2").style.borderBottom = "1.5px solid #1476F2";
    document.getElementById("track3").style.borderBottom = "none";
    document.getElementById("track4").style.borderBottom = "none";
    document.getElementById("track5").style.borderBottom = "none";
  }
  const tabAnother3 = () => {
    setTab(3);
    document.getElementById("track1").style.borderBottom = "none";
    document.getElementById("track2").style.borderBottom = "none";
    document.getElementById("track3").style.borderBottom = "1.5px solid #1476F2";
    document.getElementById("track4").style.borderBottom = "none";
    document.getElementById("track5").style.borderBottom = "none";
  }
  const tabAnother4 = () => {
    setTab(4);
    document.getElementById("track1").style.borderBottom = "none";
    document.getElementById("track2").style.borderBottom = "none";
    document.getElementById("track3").style.borderBottom = "none";
    document.getElementById("track4").style.borderBottom = "1.5px solid #1476F2";
    document.getElementById("track5").style.borderBottom = "none";

  }
  const tabAnother5 = () => {
    setTab(5);
    document.getElementById("track1").style.borderBottom = "none";
    document.getElementById("track2").style.borderBottom = "none";
    document.getElementById("track3").style.borderBottom = "none";
    document.getElementById("track4").style.borderBottom = "none";
    document.getElementById("track5").style.borderBottom = "1.5px solid #1476F2";
  }
  return (
    <div className="ser-main">
      <div className="learn-back">
        <div className='chanu'>
          <img src={studentsFrame} alt="" />
        </div>
        <div className="learn-back1">
          <h1>Learn about our <br /> workflow</h1>
          <p>We take care of your projects with proven agile methods that are designed to get all stakeholders (even non-technical ones) in alignment. Our workflow amplifies collaboration and faster turnarounds to achieve even the most ambitious goals.</p>
          <NavLink to="/contact"><button>LET’S TALK</button></NavLink>
        </div>
        <div className="learn-back2">
          <div className="studentFrame">
            <img src={studentsFrame} alt="" />
          </div>
          <img className='student22' src={student} alt="" />
        </div>
      </div>

      <div className="why_ecoming  why_ecoming22">
        <h1>Product building done right</h1>
        <div className="why_poinhy">
          <p>With over 450 completed projects, our project lifecycle is designed to</p>
          <p>help clients ship quality products at the speed of digital efficiency.</p>
        </div>
        <div className="ecoming_cards">
          <div className="ecoming_card">
            <div className="ecoming_box">
              <div className="yt_img">
                <img src={pinnak1} alt="" />
              </div>
              <div className="yt_heading">
                <h3>Communication</h3>
                <p>Onboard Kushel Digi staff to your preferred messenger and project management channels.</p>
              </div>
            </div>
            <div className="ecoming_box">
              <div className="yt_img">
                <img src={pinnak2} alt="" />
              </div>
              <div className="yt_heading">
                <h3>Ideation</h3>
                <p>Get expert evaluation on your product ideas and how to best execute their development.</p>
              </div>
            </div>
            <div className="ecoming_box">
              <div className="yt_img">
                <img src={pinnak3} alt="" />
              </div>
              <div className="yt_heading">
                <h3>Transparency</h3>
                <p>Receive updates on a daily basis and review work completed through agile iterations.</p>
              </div>
            </div>
          </div>
          <div className="ecoming_card">
            <div className="ecoming_box">
              <div className="yt_img">
                <img src={pinnak4} alt="" />
              </div>
              <div className="yt_heading">
                <h3>Quick Kickoff</h3>
                <p>The scoping session takes a single day and project kickoff can happen in as little as a week.</p>
              </div>
            </div>
            <div className="ecoming_box">
              <div className="yt_img">
                <img src={pinnak5} alt="" />
              </div>
              <div className="yt_heading">
                <h3>Excellence</h3>
                <p>We hire exclusively mid-to-senior level talent with decades of combined experience.</p>
              </div>
            </div>
            <div className="ecoming_box">
              <div className="yt_img">
                <img src={pinnak6} alt="" />
              </div>
              <div className="yt_heading">
                <h3>Flexibility</h3>
                <p>Our teams are your teams, so feel free to shape our workflow as much as you need.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="workShop">
        <div className="workshop_nav">
          <p onClick={tabAnother1} id='track1'>
            Workshops
          </p>
          <p onClick={tabAnother2} id='track2'>Kick-off</p>
          <p onClick={tabAnother3} id='track3'>UX/UI Design</p>
          <p onClick={tabAnother4} id='track4'>Development</p>
          <p onClick={tabAnother5} id='track5'>Delivery & Support</p>
        </div>
        <div className="workFolow">
          {/* ================1st================ */}
          {
            tab === 1 && (
              <div className="workflow_chart mt-28">
                <div className="working_pnt">
                  <div className="working_pnt1">
                    <div className='poinyuj'>
                      <h1>1.</h1>
                      <p>Workshops</p>
                    </div>
                  </div>
                  <div className="working_pnt2">
                    <h4>What do businesses gain by kickstarting products/the design process with our Workshops?</h4>
                    <div className="processings_nas mt-5">
                      <div className="processing_nas">
                        <p>Save time and money early on</p>
                        <p>Identify and mitigate future risks</p>
                        <p>Refine product vision and business goals</p>
                      </div>
                      <div className="processing_nas">
                        <p>Understand users and their needs</p>
                        <p>Define the redesign direction and
                          crucial points</p>
                        <p>Ideate based on the learning and data</p>
                      </div>
                    </div>

                    <div className="procct_img mt-8">
                      <div className="proccet_img_left">
                        <p>Our Lean Design Workshop is an efficient and easy method to discover users’ pain
                          points and business goals. Together, we will identify how the product’s design
                          can fit the target audience. The workshop helps us design the product to match
                          your users’ needs, and enable the users to navigate the platform easily.</p>
                      </div>
                      <div className="proccet_img_right">
                        <img src={recy} alt="recy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          {/* ====================2nd==================== */}
          {
            tab === 2 && (
              <div className="workflow_chart mt-28">
                <div className="working_pnt">
                  <div className="working_pnt1">
                    <div className='poinyuj'>
                      <h1>2.</h1>
                      <p>Kick-off</p>
                    </div>
                  </div>
                  <div className="working_pnt2">
                    <h4>Meet your Kushel Digi team members and dedicated project manager, and integrate people into your <br /> preferred messenger channels and project management tools.</h4>
                    <div className="processings_nas mt-5">
                      <div className="processing_nas">
                        <p>Save time and money early on</p>
                        <p>Identify and mitigate future risks</p>
                        <p>Refine product vision and business goals</p>
                      </div>
                      <div className="processing_nas">
                        <p>Understand users and their needs</p>
                        <p>Define the redesign direction and
                          crucial points</p>
                        <p>Ideate based on the learning and data</p>
                      </div>
                    </div>

                    <div className="procct_img mt-8">
                      <div className="proccet_img_left">
                        <p>Our Lean Design Workshop is an efficient and easy method to discover users’ pain
                          points and business goals. Together, we will identify how the product’s design
                          can fit the target audience. The workshop helps us design the product to match
                          your users’ needs, and enable the users to navigate the platform easily.</p>
                      </div>
                      <div className="proccet_img_right">
                        <img src={remix} alt="recy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }



          {/* =====================3rd================ */}
          {
            tab === 3 && (
              <div className="flowChart3 mt-28">
                <div className="flowChart33_left">
                  <div className="flowa">
                    <div className="flowChartSec">
                      <div className='poinyuj'>
                        <h1>3.</h1>
                        <p>Design</p>
                      </div>

                    </div>
                    <div className="flowChartSec1">
                      <div className='flowChartSec11'>
                        <p>Our frontend teams provide UX and UI mockups of your website or app. The design phase involves visualizing your ideas and conceptualizing the navigation, structure and interaction experience.</p>

                      </div>
                      <div className="flow_ul">
                        <h2>Product design meets UX/UI:</h2>
                        <ul>
                          <li>Demonstrable mockups</li>
                          <li>UX/UI and the user journey</li>
                          <li>Clickable or tappable prototypes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flowChart33_right">
                  <div className="grimta">
                    <img src={grimta} alt="grimta" />
                  </div>
                </div>
              </div>
            )
          }


          {/* ==============4th================= */}
          {
            tab === 4 && (
              <div className="flowChart3 mt-28">
                <div className="flowChart33_left">
                  <div className="flowa">
                    <div className="flowChartSec">
                      <div className='poinyuj'>
                        <h1>4.</h1>
                        <p>Development</p>
                      </div>

                    </div>
                    <div className="flowChartSec1">
                      <div className='flowChartSec11 flowsr'>
                        <p>Kushel Digi developers work in sprints, daily standups, planning, and retrospective meetings help us maintain momentum and build trust within the team.</p>

                      </div>
                      <div className="kesa_process">
                        <p>Frameworks</p>
                        <div></div>
                        <p>Development</p>
                        <div></div>
                        <p>Code Review</p>
                        <div></div>
                        <p>QA test</p>
                      </div>
                      <div className='flowChartSec11 flowsr flowsr11'>
                        <p>Ready-made solutions get the heavy lifting done ridiculously fast so that we never have to reinvent the wheel every time—saving your time, money and boosting efficiency.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flowChart33_right">
                  <div className="grimta">
                    <img src={pixelArt} alt="grimta" />
                  </div>
                </div>
              </div>
            )
          }



          {/* ===================5th==================== */}
          {
            tab === 5 && (
              <div className="flowChart3 mt-28">
                <div className="flowChart33_left">
                  <div className="flowa">
                    <div className="flowChartSec">
                      <div className='poinyuj'>
                        <h1>5.</h1>
                        <p>Delivery & <br /> Support</p>
                      </div>

                    </div>
                    <div className="flowChartSec1">
                      <div className='flowChartSec11 flowsr flowsr111'>
                        <p>We release your project into a live production environment! But it doesn’t end there. We provide whatever you need to keep your project secure, maintained, and ready to scale at a moment’s notice.</p>

                        <button>LET’S TALK</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flowChart33_right">
                  <div className="grimta">
                    <img src={richa} alt="grimta" />
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>

      <div className="manbi">
        <div className="manbi_card">
          <div className="manbi_img">
            <img src={manbiTui} alt="" />
          </div>
          <div className="card-textj">
            <h2>Got a preferred workflow? We’ll <br /> adapt to your needs.</h2>
            <p>We’re always flexible to fit your style of working.</p>
          </div>
          <div className="manbi-btn">
            <NavLink to="/contact"><button>LET’S TALK</button></NavLink>
          </div>
        </div>
      </div>

      <div className="ready_talks ready_talks1">
        <div className="ready_folks">
          <div className="ready_left">
            <div className="rdar_talk">
              <h1>Ready to talk about your</h1>
              <h1>eCommerce project?</h1>
              <div className="fantars">
                <div className="tellUs">
                  <div className="tellUs_right">
                    <h1>1.</h1>
                  </div>
                  <div className="tellUs_left">
                    <span>Tell us more</span>
                    <p>Fill out a quick form describing your needs. You can always add details later on and we’ll reply within a day!</p>
                    <NavLink to="/contact"><button>GET IN TOUCH</button></NavLink>
                  </div>
                </div>
                <div className="tellUs">
                  <div className="tellUs_right">
                    <h1>2.</h1>
                  </div>
                  <div className="tellUs_left">
                    <span>Tell us more</span>
                    <p>Fill out a quick form describing your needs. You can always add details later on and we’ll reply within a day!</p>

                  </div>
                </div>
                <div className="tellUs">
                  <div className="tellUs_right">
                    <h1>3.</h1>
                  </div>
                  <div className="tellUs_left">
                    <span>Tell us more</span>
                    <p>Fill out a quick form describing your needs. You can always add details later on and we’ll reply within a day!</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ready_right">
            <div className="ready_side">
              <img src={womanMan} alt="" />
            </div>
          </div>
        </div>
      </div>

      <ContactForm1/>
    </div>
  )
}

export default HowWork