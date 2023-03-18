import React, { useState } from "react";
import loc from "../images/loc.png";
import email from "../images/email.png";
import call from "../images/call.png";
const Contact = () => {
  const [tab, setTab] = useState(1);

  const tabAnother = (e) => {
    e.preventDefault();
    setTab(1);
    document.getElementById("abc").style.color = "#1C6BFF";
    document.getElementById("def").style.color = "#0E2B3D";

    document.getElementById("abc").style.borderBottom = "3px solid #1C6BFF";
    document.getElementById("def").style.borderBottom = "none";
  };

  const tabAnother1 = (e) => {
    e.preventDefault();
    setTab(2);
    document.getElementById("abc").style.color = "#0E2B3D";
    document.getElementById("def").style.color = "#1C6BFF";

    document.getElementById("abc").style.borderBottom = "none";
    document.getElementById("def").style.borderBottom = "3px solid #1C6BFF";
  };
  return (
    <>
      <div className="contact-back">
        <div className="contact-sect">
          <h2>Let's Talk.</h2>
          <p>
            Get in touch with us for all your staffing requirements and hire our
            optimal services for getting the project developments done with your
            budget estimate. We believe in building business partnerships that
            go long-term
          </p>
        </div>
      </div>

      <div className="need-help">
        <div className="first-need">
          <h2>Need Help?</h2>
          <p>Reach out to the world most reliable IT services. </p>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Name*" />
              <input className="inp" type="email" placeholder="Email*" />
            </div>
            <div className="input-group input-group1">
              <input type="text" placeholder="Website*" />
              <input className="inp" type="text" placeholder="Designation*" />
            </div>
            <div className="input-group input-group1">
              <input type="email" placeholder="Email Address*" />
              <input className="inp" type="text" placeholder="Location*" />
            </div>
            <div className="input-group input-group1">
              <input type="text" placeholder="Estimated Budget*" />
              <input className="inp" type="text" placeholder="phone" />
            </div>
            <div className="input-group input-group1">
              <textarea
                placeholder="please describe what you need"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button>Send a Message</button>
          </form>
        </div>
        <div className="second-need">
          <div className="diff-section">
            <p id="abc" onClick={tabAnother} className="address">
              Address
            </p>
            <p id="def" onClick={tabAnother1} className="maps">
              Google Maps
            </p>
          </div>
          <div className="hr-line"></div>
          <div className="map-locate">
            {
              tab === 1 && (
                <div className="location-section">
                  <div className="loc-section">
                    <img src={loc} alt="loc" />
                    <div className="loc-para">
                      <h3>OUR LOCATION</h3>
                      <p>g-9,first Floor, Sector 63, Noida</p>
                    </div>
                  </div>
                  <div className="loc-section loc-section1">
                    <img src={email} alt="email" />
                    <div className="loc-para">
                      <h3>sEND US MAIL</h3>
                      <p>shubham@kusheldigi.com</p>
                    </div>
                  </div>
                  <div className="loc-section loc-section1">
                    <img src={call} alt="call" />
                    <div className="loc-para">
                      <h3>CALL US</h3>
                      <p>+91 9045301702</p>
                    </div>
                  </div>
                </div>
              )
            }

            {
              tab === 2 && (
                <div className="mpas">
                  <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=kushel&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
              )
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
