import React,{useState} from "react";
import arrow from "../images/arrow.png";
import lonia from "../images/lonia.png";
import lastdate4 from "../images/lasdate4.png";
import fiking from "../images/fiking.png";
import fiking2 from "../images/fiking2.png";
import fiking3 from "../images/fiking3.png";
import ContactForm1 from "./common/ContactForm1";
import SmallApproach from "./common/SmallApproach";
const Career = () => {
  const [dev,setDev] = useState(1);
  const menuTab = () =>{
    console.log("menu");
    setDev(1);
    document.getElementById("kk").style.color = "#085881";
    document.getElementById("kk").style.borderBottom = "2px solid #085881";

    document.getElementById("kk1").style.color = "#202020";
    document.getElementById("kk1").style.borderBottom = "none";

    document.getElementById("kk2").style.color = "#202020";
    document.getElementById("kk2").style.borderBottom = "none";
  }
  const menuTab1 = () =>{
    console.log("menu");
    setDev(2);
    document.getElementById("kk").style.color = "#202020";
    document.getElementById("kk").style.borderBottom = "none";

    document.getElementById("kk1").style.color = "#085881";
    document.getElementById("kk1").style.borderBottom = "2px solid #085881";

    document.getElementById("kk2").style.color = "#202020";
    document.getElementById("kk2").style.borderBottom = "none";
  }
  const menuTab2 = () =>{
    console.log("menu");
    setDev(3);

    document.getElementById("kk").style.color = "#202020";
    document.getElementById("kk").style.borderBottom = "none";

    document.getElementById("kk1").style.color = "#202020";
    document.getElementById("kk1").style.borderBottom = "none";

    document.getElementById("kk2").style.color = "#085881";
    document.getElementById("kk2").style.borderBottom = "2px solid #085881";
  }
  return (
    <>
      <div className="ser-main">
        <div className="caring-back">
          <div className="caring-sect">
            <h2>Be a Member of Kushel digi Family</h2>
            <p>
              If you are looking for an OPPORTUNITY that gives your career a new
              definition, join Kushel digi. We heartily welcome talented and
              enthusiasts in our team.
            </p>
          </div>
        </div>

        <div className="about-working-here">
          <div className="working1">
            <h2>About Working Here</h2>
            <p>
              At Kushel digi Solution, we are a family. We work together, we
              celebrate together and we enjoy what we do. So if you are the
              out-of-the-box thinker who ‘work hard and party harder’, the doors
              of Xtreem Solution are always open for you. However, being a
              tech-geek is a must, because we live and breathe technology.If you
              have the right attitude and skills to nurture, we offer you the
              perfect infrastructure to grow – both professionally and
              financially.
            </p>
            <button>
              Learn More{" "}
              <img width={14} className="inline ml-2" src={arrow} alt="" />
            </button>
          </div>
          <div className="working2">
            <img src={lonia} alt="" />
          </div>
        </div>
        <div className="conducting-enviro">
          <div className="conducting-card">
            <div className="conducting-box">
              <img src={fiking3} alt="" />
              <p>
                Conducive <br />
                Environment
              </p>
            </div>
            <div className="conducting-box">
              <img src={lastdate4} alt="" />
              <p>
                Shared <br /> Success
              </p>
            </div>
            <div className="conducting-box">
              <img src={fiking} alt="" />
              <p>
                Healthy <br /> Meal
              </p>
            </div>
            <div className="conducting-box">
              <img src={fiking2} alt="" />
              <p>
                Medical <br /> Insurance
              </p>
            </div>
          </div>
        </div>

        <div className="open-position">
          <h3>Open Positions</h3>
          <div className="position-nav">
            <p id="kk" onClick={menuTab} className="pos-menu pos-menu1">Developer</p>
            <p id="kk1" onClick={menuTab1} className="pos-menu">Designer</p>
            <p id="kk2" onClick={menuTab2} className="pos-menu">Marketing</p>
          </div>
          <div className="position-sys">
          {
            dev === 1 && (
              <div className="pstif pstif1">
            <div className="posify">
              <div className="posify1">
                <h4>PHP Developer</h4>
                <p>
                  Bachelors/Master’s degree in Computer Science, Engineering <br /> or
                  a related subject <span>Read More</span>
                </p>
              </div>
              <div className="posify2">
                 <button>Apply Now</button>
              </div>
            </div>
            <hr className="hr-t" />
            </div>
            )
          }
          {
            dev === 2 && (
              <div className="pstif">
            <div className="posify">
              <div className="posify1">
                <h4>React Native Developer</h4>
                <p>
                  Bachelors/Master’s degree in Computer Science, Engineering <br /> or
                  a related subject <span>Read More</span>
                </p>
              </div>
              <div className="posify2">
                 <button>Apply Now</button>
              </div>
            </div>
            <hr className="hr-t" />
            </div>
            )
          }
           {
            dev === 3 && (
              <div className="pstif">
            <div className="posify">
              <div className="posify1">
                <h4>Sr. iOS Developer</h4>
                <p>
                  Bachelors/Master’s degree in Computer Science, Engineering <br /> or
                  a related subject <span>Read More</span>
                </p>
              </div>
              <div className="posify2">
                 <button>Apply Now</button>
              </div>
            </div>
            <hr className="hr-t" />
            </div>
            )
           } 
           
          </div>
        </div>
         <SmallApproach/>
         <ContactForm1/>
      </div>
    </>
  );
};

export default Career;
