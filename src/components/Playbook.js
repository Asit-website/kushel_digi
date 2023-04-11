import React from "react";
import arrow1 from "../images/arrow1.png";
import booksta from "../images/booksta.png";
const Playbook = () => {
  return (
    <>
      <div className="ser-main">
        <div className="playbook-back">
          <div className="playbook-sect">
            <h2>The Website Redesign Playbook</h2>
            <p>
              A FREE, comprehensive guide to reimagine and relaunch your school
              or district's website
            </p>
          </div>
        </div>
        <div className="free-book">
          <div className="flex items-center justify-center discusion-form discusion-form2">
            <div className="w-full juy">
              <p>
                Explore over 40 pages that walk you through the website redesign
                process — from initial planning all the way through post-launch.
              </p>
              <h3>
                Be inspired by the latest industry strategies, best practices,
                and examples from schools who have successfully redesigned
                themselves.
              </h3>
            </div>
            <div className="w-full  mrs mrs2">
              <h3>Let’s Discuss your Project</h3>
              <form action="">
                <div className=" flex items-start common-form">
                  <div className="first-form">
                    <div className="form-field">
                      <input type="text" placeholder="Name*" />
                    </div>
                    <div className="form-field mt-5">
                      <input type="text" placeholder="Phone number*" />
                    </div>
                    <div className="form-field mt-5">
                      <input type="email" placeholder="Email Address*" />
                    </div>
                    <div>
                      <button>
                        Submit <img className="tih" src={arrow1} alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="second-form">
                    <div className="form-filed1">
                      <textarea
                        placeholder="Message"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="last-re">
          <h3>When was your last redesign?</h3>
          <div className="last-flex flex items-start w-full mt-8">
            <div className="last-box w-full">
              <h2>94%</h2>
              <p>of first impressions relate to your site’s web design.</p>
              <div className="last-line"></div>
            </div>
            <div className="last-box w-full ml-10">
              <h2>89%</h2>
              <p>
                of consumers shop with a competitor after a poor user
                experience.
              </p>
              <div className="last-line"></div>
            </div>
            <div className="last-box w-full ml-12">
              <h2>94%</h2>
              <p>of website credibility comes from design.</p>
              <div className="last-line"></div>
            </div>
          </div>
          <div className="booksta">
            <div className="first-booksta">
              <p>
                You'll find step-by-step instructions broken down <br />
                into helpful sections, including:
              </p>
              <ul>
                <li>Getting Started with the Redesign Process</li>
                <li>Preparing for Your Website Redesign</li>
                <li>Tips for Building Your New Website</li>
                <li>Launching Your New Website</li>
                <li>Using Your Website</li>
              </ul>
              <p>Download your playbook and get the knowledge and guidance <br /> you need to launch a successful redesign!</p>
              <button>Get Your Free Copy</button>
            </div>
            <div className="second-booksta">
                <img src={booksta} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playbook;
