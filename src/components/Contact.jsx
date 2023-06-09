import React, { useState } from "react";
import cuf1 from "../images/cuf1.png";
import cuf2 from "../images/cuf2.png";
import cuf3 from "../images/cuf3.png";
import { Link } from "react-router-dom";
const Contact = () => {
  const [tab, setTab] = useState(1);
  const tabAnother = (e) => {
    e.preventDefault();
    setTab(1);
    document.getElementById("abc").style.color = "#085881";
    document.getElementById("def").style.color = "#0E2B3D";
    document.getElementById("abc").style.borderBottom = "3px solid #085881";
    document.getElementById("def").style.borderBottom = "none";
  };
  const tabAnother1 = (e) => {
    e.preventDefault();
    setTab(2);
    document.getElementById("abc").style.color = "#0E2B3D";
    document.getElementById("def").style.color = "#085881";
    document.getElementById("abc").style.borderBottom = "none";
    document.getElementById("def").style.borderBottom = "3px solid #085881";
  };

  const [val, setVal] = useState({
    company1:"",
    name1: "",
    email1: "",
    phone1: "",
    service1: "",
    message1: "",
  });

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/contact1", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(val),
    });

    const data = await res.json();
    alert(data.message);
    setVal({
      company1:"",
      name1: "",
      email1: "",
      phone1: "",
      service1: "",
      message1: "",
    });
  };
  return (
    <>
      <div className="ser-main">
        <div className="contact-back">
          <div className="contact-sect">
            <h2>Let's Talk.</h2>
            <p>Interested in working together?</p>
            <p>Fill in form below to get started.</p>
          </div>
        </div>

        <div className="need-help">
          <div className="first-need">
            <h2>Hi.Tell us about your project.</h2>
            <p>
              Fill out our form below or <a href="mailto:info@kusheldigi.com"><span>send us an email</span>.</a>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  name="company1"
                  value={val.company1}
                  onChange={handleChange}
                  type="text"
                  placeholder="Company name*"
                  required
                />   
              </div>
              <div className="input-group input-group1">
                <input
                  name="name1"
                  value={val.name1}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name*"
                  required
                />
                <input
                  name="email1"
                  value={val.email1}
                  onChange={handleChange}
                  className="inp"
                  type="email"
                  placeholder="Email address*"
                  required
                />
              </div>
              <div className="input-group input-group1">
                <input
                  name="phone1"
                  value={val.phone1}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone number*"
                  required
                />
                <select
                  className="inp"
                  name="service1"
                  value={val.service1}
                  onChange={handleChange}
                  required
                >
                  <option>Service Required</option>
                  <option>UI/UX Design</option>
                  <option>E - Commerce Solutions</option>
                  <option>Web development</option>
                  <option>Mobile App Development</option>
                  <option>Digital Marketing</option>
                  <option>Graphic Design</option>
                  <option>Staff Augmntation</option>
                </select>
              </div>
              <div className="input-group input-group1">
                <textarea
                  placeholder="Tell us about your project (Scope, timeline, budget, etc.)"
                  name="message1"
                  value={val.message1}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                  required
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
              {tab === 1 && (
                <div className="location-section">
                  <div className="loc-section">
                    <img src={cuf1} alt="loc" />
                    <div className="loc-para">
                      <h3>OUR LOCATION</h3>
                      <p>g-9,first Floor, Sector 63, Noida, India</p>
                    </div>
                  </div>
                  <a href="mailto:info@kusheldigi.com">
                  <div className="loc-section loc-section1">
                    <img src={cuf2} alt="email" />
                    <div className="loc-para">
                      <h3>sEND US MAIL</h3>
                      <p className="kustar">info@kusheldigi.com</p>
                    </div>
                  </div>
                  </a>
                  <div className="loc-section loc-section1">
                    <img src={cuf3} alt="call" />
                    <div className="loc-para">
                      <h3>CALL US</h3>
                      <p> <a href="tel:+15855662070"><span>+1-585-566-2070</span></a>, <a href="tel:+919045301702"><span>+91-9045-301-702</span></a></p>
                    </div>
                  </div>
                </div>
              )}

              {tab === 2 && (
                <div className="mpas">
                  <iframe
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3954123429044!2d77.3860107742401!3d28.617908984746908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce49f5d8cdc4b%3A0xedb207949cd07d2b!2sKushel%20Digi%20Solutions%20-%20Web%20Design%20Company%20Noida%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1681368789327!5m2!1sen!2sin"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
