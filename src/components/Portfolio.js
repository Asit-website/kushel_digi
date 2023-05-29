import React, { useState } from "react";
import kick5 from "../images/kick5.png";
import porta from "../images/porta.png";
import portlo from "../images/portlo.png";
import foc1 from "../images/foc1.png";
import foc2 from "../images/foc2.png";
import foc3 from "../images/foc3.png";
import cent from "../images/cent.png";
import ContactForm1 from "../../src/components/common/ContactForm1";
import { NavLink } from "react-router-dom";
import trackent from "../images/trackent.png";
import trackent1 from "../images/trackent1.png";
import trackent2 from "../images/trackent2.png";
const Portfolio = () => {
  const [fab, setFab] = useState(1);

  const taf1 = (e) => {
    e.preventDefault();
    setFab(1);
    document.getElementById("pw").style.background = "#ffffff";
    document.getElementById("px").style.background = "none";
    document.getElementById("py").style.background = "none";
    document.getElementById("pz").style.background = "none";

    document.getElementById("pw").style.color = "#202020";
    document.getElementById("px").style.color = "#ffffff";
    document.getElementById("py").style.color = "#ffffff";
    document.getElementById("pz").style.color = "#ffffff";

    document.getElementById("pw").style.padding = "4px 22px";
    document.getElementById("px").style.padding = "0px 0px";
    document.getElementById("py").style.padding = "0px 0px";
    document.getElementById("pz").style.padding = "0px 0px";

    document.getElementById("pw").style.borderRadius = "30px";
    document.getElementById("px").style.borderRadius = "0px";
    document.getElementById("py").style.borderRadius = "0px";
    document.getElementById("pz").style.borderRadius = "0px";
  };
  const taf2 = (e) => {
    e.preventDefault();
    setFab(2);
    document.getElementById("pw").style.background = "none";
    document.getElementById("px").style.background = "#ffffff";
    document.getElementById("py").style.background = "none";
    document.getElementById("pz").style.background = "none";

    document.getElementById("pw").style.color = "#ffffff";
    document.getElementById("px").style.color = "#202020";
    document.getElementById("py").style.color = "#ffffff";
    document.getElementById("pz").style.color = "#ffffff";

    document.getElementById("pw").style.padding = "0px 0px";
    document.getElementById("px").style.padding = "4px 22px";
    document.getElementById("py").style.padding = "0px 0px";
    document.getElementById("pz").style.padding = "0px 0px";

    document.getElementById("pw").style.borderRadius = "0px";
    document.getElementById("px").style.borderRadius = "30px";
    document.getElementById("py").style.borderRadius = "0px";
    document.getElementById("pz").style.borderRadius = "0px";
  };
  const taf3 = (e) => {
    e.preventDefault();
    setFab(3);
    document.getElementById("pw").style.background = "none";
    document.getElementById("px").style.background = "none";
    document.getElementById("py").style.background = "#ffffff";
    document.getElementById("pz").style.background = "none";

    document.getElementById("pw").style.color = "#ffffff";
    document.getElementById("px").style.color = "#ffffff";
    document.getElementById("py").style.color = "#202020";
    document.getElementById("pz").style.color = "#ffffff";

    document.getElementById("pw").style.padding = "0px 0px";
    document.getElementById("px").style.padding = "0px 0px";
    document.getElementById("py").style.padding = "4px 22px";
    document.getElementById("pz").style.padding = "0px 0px";

    document.getElementById("pw").style.borderRadius = "0px";
    document.getElementById("px").style.borderRadius = "0px";
    document.getElementById("py").style.borderRadius = "30px";
    document.getElementById("pz").style.borderRadius = "0px";
  };
  const taf4 = (e) => {
    e.preventDefault();
    setFab(4);
    document.getElementById("pw").style.background = "none";
    document.getElementById("px").style.background = "none";
    document.getElementById("py").style.background = "none";
    document.getElementById("pz").style.background = "#ffffff";

    document.getElementById("pw").style.color = "#ffffff";
    document.getElementById("px").style.color = "#ffffff";
    document.getElementById("py").style.color = "#ffffff";
    document.getElementById("pz").style.color = "#202020";

    document.getElementById("pw").style.padding = "0px 0px";
    document.getElementById("px").style.padding = "0px 0px";
    document.getElementById("py").style.padding = "0px 0px";
    document.getElementById("pz").style.padding = "4px 22px";

    document.getElementById("pw").style.borderRadius = "0px";
    document.getElementById("px").style.borderRadius = "0px";
    document.getElementById("py").style.borderRadius = "0px";
    document.getElementById("pz").style.borderRadius = "30px";
  };
  return (
    <>
      <div className="ser-main">
        <div className="portfolio-back">
          <div className="portfolio-sect">
            <h2>
              <span>OUR</span> <br /> PORTFOLIO
            </h2>
            <p>
              {/* Kushel digi has been serving its clients for over 6 years, earning
              the reputation of a trusted IT partner. Browse some of our success
              stories. Discuss Your Project */}
              We develop projects with passion and deliver them on time. Check
              out our most recent projects, and get in touch with us right away
              if you want to be included. We offer the best services, as any of
              our clients would attest.
            </p>
            <button>Discuss Your Project</button>
          </div>
        </div>
        <div className="portfolio-nav">
          <p id="pw" onClick={taf1} className="all-port">
            ALL
          </p>
          <p id="px" onClick={taf2}>
            WEBSITE DESIGN
          </p>
          <p id="py" onClick={taf3}>
            E-COMMERCE SOLUTION
          </p>
          <p id="pz" onClick={taf4}>
            MOBILE APPLICATION
          </p>
        </div>
        <div className="portfolio-web">
          {/* =================1st============= */}
          {fab === 1 && (
            <>
              <div className="portis">
                <div className="portis1">
                  <div className="portis1-sect">
                    <img src={kick5} alt="" />
                  </div>
                </div>
                <div className="portis2">
                  <h3>KICK-EEZ</h3>
                  <p className="kick-eez">
                    KICK- EEZ Premium, Made in America recoil pads and
                    accessories to make your shooting experience more
                    comfortable.
                  </p>
                  <div className="port-usa">
                    <div className="port-usa1">
                      <img src={porta} alt="" />
                      <p className="port-pat">Industry</p>
                      <p className="reg">E-commerce</p>
                    </div>
                    <div className="port-usa1">
                      <img src={portlo} alt="" />
                      <p className="port-pat">Country</p>
                      <p className="reg1">USA</p>
                    </div>
                  </div>
                  <div className="port-serv">
                    <h4>Service We Provide</h4>
                    <div className="portfolio-serv">
                      <div className="porting-serv">
                        <img src={foc1} alt="" />
                        <p>Design</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc2} alt="" />
                        <p>Development</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc3} alt="" />
                        <p>Testing</p>
                      </div>
                    </div>
                  </div>
                  <NavLink to="/kick">
                    <button>View More</button>
                  </NavLink>
                </div>
              </div>
              {/* =============2nd================ */}
              <div className="portis mt-12">
                <div className="portis2 pong1">
                  <h3>PRO TRUCKS</h3>
                  <p className="kick-eez">
                    Aftermarket suspension lift kits, leveling kits and
                    accessories for 4X4 off-road truck and jeep enthusiasts
                  </p>
                  <div className="port-usa">
                    <div className="port-usa1">
                      <img src={porta} alt="" />
                      <p className="port-pat">Industry</p>
                      <p className="reg">E-commerce</p>
                    </div>
                    <div className="port-usa1">
                      <img src={portlo} alt="" />
                      <p className="port-pat">Country</p>
                      <p className="reg1">USA</p>
                    </div>
                  </div>
                  <div className="port-serv">
                    <h4>Service We Provide</h4>
                    <div className="portfolio-serv">
                      <div className="porting-serv">
                        <img src={foc1} alt="" />
                        <p>Design</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc2} alt="" />
                        <p>Development</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc3} alt="" />
                        <p>Testing</p>
                      </div>
                    </div>
                  </div>
                  <button>View More</button>
                </div>
                <div className="portis1 portis11 pong2">
                  <div className="portis1-sect">
                    <img src={trackent} alt="" />
                  </div>
                </div>
              </div>

              {/* ================3rd================= */}
              <div className="portis mt-12">
                <div className="portis1 portis111">
                  <div className="portis1-sect">
                    <img src={trackent2} alt="trackent2" />
                  </div>
                </div>
                <div className="portis2">
                  <h3>RELY INNOVATION</h3>
                  <p className="kick-eez">
                    Get peace of mind. install alarms that not only notify you
                    of danger, but also clearly instructs you on what to do
                    next.
                  </p>
                  <div className="port-usa">
                    <div className="port-usa1">
                      <img src={porta} alt="" />
                      <p className="port-pat">Industry</p>
                      <p className="reg">E-commerce</p>
                    </div>
                    <div className="port-usa1">
                      <img src={portlo} alt="" />
                      <p className="port-pat">Country</p>
                      <p className="reg1">USA</p>
                    </div>
                  </div>
                  <div className="port-serv">
                    <h4>Service We Provide</h4>
                    <div className="portfolio-serv">
                      <div className="porting-serv">
                        <img src={foc1} alt="" />
                        <p>Design</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc2} alt="" />
                        <p>Development</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc3} alt="" />
                        <p>Testing</p>
                      </div>
                    </div>
                  </div>
                  <button>View More</button>
                </div>
              </div>

              {/* =============4th================ */}
              <div className="portis mt-12">
                <div className="portis2 pong1">
                  <h3>CEO WHEELS</h3>
                  <p className="kick-eez">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <div className="port-usa">
                    <div className="port-usa1">
                      <img src={porta} alt="" />
                      <p className="port-pat">Industry</p>
                      <p className="reg">E-commerce</p>
                    </div>
                    <div className="port-usa1">
                      <img src={portlo} alt="" />
                      <p className="port-pat">Country</p>
                      <p className="reg1">USA</p>
                    </div>
                  </div>
                  <div className="port-serv">
                    <h4>Service We Provide</h4>
                    <div className="portfolio-serv">
                      <div className="porting-serv">
                        <img src={foc1} alt="" />
                        <p>Design</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc2} alt="" />
                        <p>Development</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc3} alt="" />
                        <p>Testing</p>
                      </div>
                    </div>
                  </div>
                  <button>View More</button>
                </div>
                <div className="portis1 portis1111 pong2">
                  <div className="portis1-sect">
                    <img src={cent} alt="cent" />
                  </div>
                </div>
              </div>

              {/* ================5th================= */}
              <div className="portis mt-12">
                <div className="portis1 portis11111">
                  <div className="portis1-sect">
                    <img src={trackent1} alt="trackent1" />
                  </div>
                </div>
                <div className="portis2">
                  <h3>SOLENOID NINJA</h3>
                  <p className="kick-eez">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <div className="port-usa">
                    <div className="port-usa1">
                      <img src={porta} alt="" />
                      <p className="port-pat">Industry</p>
                      <p className="reg">E-commerce</p>
                    </div>
                    <div className="port-usa1">
                      <img src={portlo} alt="" />
                      <p className="port-pat">Country</p>
                      <p className="reg1">USA</p>
                    </div>
                  </div>
                  <div className="port-serv">
                    <h4>Service We Provide</h4>
                    <div className="portfolio-serv">
                      <div className="porting-serv">
                        <img src={foc1} alt="" />
                        <p>Design</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc2} alt="" />
                        <p>Development</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc3} alt="" />
                        <p>Testing</p>
                      </div>
                    </div>
                  </div>
                  <button>View More</button>
                </div>
              </div>
            </>
          )}
          {fab === 2 && (
            <>
              <div className="portis">
                <div className="portis1">
                  <div className="portis1-sect">
                    <img src={kick5} alt="" />
                  </div>
                </div>
                <div className="portis2">
                  <h3>KICK-EEZ</h3>
                  <p className="kick-eez">
                    KICK- EEZ Premium, Made in America recoil pads and
                    accessories to make your shooting experience more
                    comfortable.
                  </p>
                  <div className="port-usa">
                    <div className="port-usa1">
                      <img src={porta} alt="" />
                      <p className="port-pat">Industry</p>
                      <p className="reg">E-commerce</p>
                    </div>
                    <div className="port-usa1">
                      <img src={portlo} alt="" />
                      <p className="port-pat">Country</p>
                      <p className="reg1">USA</p>
                    </div>
                  </div>
                  <div className="port-serv">
                    <h4>Service We Provide</h4>
                    <div className="portfolio-serv">
                      <div className="porting-serv">
                        <img src={foc1} alt="" />
                        <p>Design</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc2} alt="" />
                        <p>Development</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc3} alt="" />
                        <p>Testing</p>
                      </div>
                    </div>
                  </div>
                  <button>View More</button>
                </div>
              </div>
              {/* =============2nd================ */}
              <div className="portis mt-12">
                <div className="portis2 pong1">
                  <h3>PRO TRUCKS</h3>
                  <p className="kick-eez">
                    Aftermarket suspension lift kits, leveling kits and
                    accessories for 4X4 off-road truck and jeep enthusiasts
                  </p>
                  <div className="port-usa">
                    <div className="port-usa1">
                      <img src={porta} alt="" />
                      <p className="port-pat">Industry</p>
                      <p className="reg">E-commerce</p>
                    </div>
                    <div className="port-usa1">
                      <img src={portlo} alt="" />
                      <p className="port-pat">Country</p>
                      <p className="reg1">USA</p>
                    </div>
                  </div>
                  <div className="port-serv">
                    <h4>Service We Provide</h4>
                    <div className="portfolio-serv">
                      <div className="porting-serv">
                        <img src={foc1} alt="" />
                        <p>Design</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc2} alt="" />
                        <p>Development</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc3} alt="" />
                        <p>Testing</p>
                      </div>
                    </div>
                  </div>
                  <button>View More</button>
                </div>
                <div className="portis1 portis11 pong2">
                  <div className="portis1-sect">
                    <img src={trackent} alt="" />
                  </div>
                </div>
              </div>
            </>
          )}

          {fab === 3 && (
            <>
              <div className="portis">
                <div className="portis1 portis111">
                  <div className="portis1-sect">
                    <img src={trackent2} alt="" />
                  </div>
                </div>
                <div className="portis2">
                  <h3>RELY INNOVATION</h3>
                  <p className="kick-eez">
                    Get peace of mind. install alarms that not only notify you
                    of danger, but also clearly instructs you on what to do
                    next.
                  </p>
                  <div className="port-usa">
                    <div className="port-usa1">
                      <img src={porta} alt="" />
                      <p className="port-pat">Industry</p>
                      <p className="reg">E-commerce</p>
                    </div>
                    <div className="port-usa1">
                      <img src={portlo} alt="" />
                      <p className="port-pat">Country</p>
                      <p className="reg1">USA</p>
                    </div>
                  </div>
                  <div className="port-serv">
                    <h4>Service We Provide</h4>
                    <div className="portfolio-serv">
                      <div className="porting-serv">
                        <img src={foc1} alt="" />
                        <p>Design</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc2} alt="" />
                        <p>Development</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc3} alt="" />
                        <p>Testing</p>
                      </div>
                    </div>
                  </div>
                  <button>View More</button>
                </div>
              </div>

              {/* =============4th================ */}
              <div className="portis mt-12">
                <div className="portis2 pong1">
                  <h3>CEO WHEELS</h3>
                  <p className="kick-eez">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <div className="port-usa">
                    <div className="port-usa1">
                      <img src={porta} alt="" />
                      <p className="port-pat">Industry</p>
                      <p className="reg">E-commerce</p>
                    </div>
                    <div className="port-usa1">
                      <img src={portlo} alt="" />
                      <p className="port-pat">Country</p>
                      <p className="reg1">USA</p>
                    </div>
                  </div>
                  <div className="port-serv">
                    <h4>Service We Provide</h4>
                    <div className="portfolio-serv">
                      <div className="porting-serv">
                        <img src={foc1} alt="" />
                        <p>Design</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc2} alt="" />
                        <p>Development</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc3} alt="" />
                        <p>Testing</p>
                      </div>
                    </div>
                  </div>
                  <button>View More</button>
                </div>
                <div className="portis1 portis1111 pong2">
                  <div className="portis1-sect">
                    <img src={cent} alt="cent" />
                  </div>
                </div>
              </div>
            </>
          )}

          {fab === 4 && (
            <>
              <div className="portis">
                <div className="portis1 portis11111">
                  <div className="portis1-sect">
                    <img src={trackent1} alt="" />
                  </div>
                </div>
                <div className="portis2">
                  <h3>SOLENOID NINJA</h3>
                  <p className="kick-eez">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <div className="port-usa">
                    <div className="port-usa1">
                      <img src={porta} alt="" />
                      <p className="port-pat">Industry</p>
                      <p className="reg">E-commerce</p>
                    </div>
                    <div className="port-usa1">
                      <img src={portlo} alt="" />
                      <p className="port-pat">Country</p>
                      <p className="reg1">USA</p>
                    </div>
                  </div>
                  <div className="port-serv">
                    <h4>Service We Provide</h4>
                    <div className="portfolio-serv">
                      <div className="porting-serv">
                        <img src={foc1} alt="" />
                        <p>Design</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc2} alt="" />
                        <p>Development</p>
                      </div>
                      <div className="porting-serv">
                        <img src={foc3} alt="" />
                        <p>Testing</p>
                      </div>
                    </div>
                  </div>
                  <button>View More</button>
                </div>
              </div>
            </>
          )}
        </div>

        <ContactForm1 />
      </div>
    </>
  );
};

export default Portfolio;
