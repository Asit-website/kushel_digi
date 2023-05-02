import React from 'react'
import Arrow from '../../images/arrow.png';
const ContactForm1 = () => {
  return (
     <>
          <div className="contactus">
              <div className="contactus-container__left">
                <div className="contactus-heading">
                  <h2>Let’s Discuss Your Project Today</h2>
                  <p>
                    Please fill in the form and let’s chat understand how we can
                    help you better
                  </p>
                </div>
                <div className="contactus-form mt-8">
                  <form action="">
                    <div className="contactus-form__input">
                      <input type="text" placeholder="Name*" />
                      <input type="text" placeholder="Email Address*" />
                    </div>
                    <div className="contactus-form__input">
                      <input type="email" placeholder="Phone number*" />
                      <select name="" id="">
                        <option value="">Service Required</option>
                        <option value="">Mobile App Development</option>
                        <option value="">E - Commerce Solutions</option>
                        <option value="">Graphic Design</option>
                        <option value="">Web development</option>
                        <option value="">UI/UX Design</option>
                        <option value="">Digital Marketing</option>
                        <option value="">Staff Augmntation</option>
                      </select>
                    </div>

                    <div className="contactus-form__input">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div className="contactus-form__input">
                      <button>
                        Submit{" "}
                        <img
                          width={14}
                          className=" inline ml-1"
                          src={Arrow}
                          alt=""
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
     </>
  )
}

export default ContactForm1