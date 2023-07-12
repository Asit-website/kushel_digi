import React, { useState } from "react";
import Arrow from "../../images/arrow.png";
const ContactForm1 = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const data = await res.json();
    alert(data.message);
    setValue({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contactus">
        <div className="contactus-container__left">
          <div className="contactus-heading">
            <h2>Want to work with us</h2>
            <p>
               We believe in having intelligent conversation and intelligent conversation can lead to great things
            </p>
          </div>
          <div className="contactus-form mt-8">
            <form onSubmit={handleSubmit}>
              <div className="contactus-form__input">
                <input
                  required
                  name="name"
                  onChange={handleChange}
                  value={value.name}
                  type="text"
                  placeholder="Name*"
                />
                <input
                  required
                  name="email"
                  onChange={handleChange}
                  value={value.email}
                  type="email"
                  placeholder="Email Address*"
                />
              </div>
              <div className="contactus-form__input">
                <input
                  required
                  name="phone"
                  onChange={handleChange}
                  value={value.phone}
                  type="text"
                  placeholder="Phone number*"
                />
                <select
                  required
                  name="service"
                  onChange={handleChange}
                  value={value.service}
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

              <div className="contactus-form__input">
                <textarea
                 required
                  name="message"
                  value={value.message}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="contactus-form__input">
                <button>
                  Submit{" "}
                  <img width={14} className="inline ml-1.5" src={Arrow} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm1;
