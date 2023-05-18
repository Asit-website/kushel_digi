import React from "react";
import approachda from "../images/approchda.png";
import arrow4 from "../images/arrow4.png";
// import key from '../images/key.png';
// import key1 from '../images/key1.png';
import sidha from "../images/sidha.png";
import ulta1 from "../images/ulta1.png";
import androidSis from "../images/android-sis.png";
import label from "../images/label.png";
import label1 from "../images/label1.png";
import label2 from "../images/label2.png";
import dust from '../images/dust.png';
import caktam from '../images/caktam.png';
import caktam1 from '../images/caktam1.png';
import caktam2 from '../images/caktam2.png';
import caktam3 from '../images/caktam3.png';
import adndrosan from '../images/android-sis.png';
import seoOning from '../images/seoOning.png';
import seoOning1 from '../images/seoOning1.png';
import tanning from '../images/tanning.png';
import tanning2 from '../images/tanning2.png';
import ContactForm1 from "./common/ContactForm1";
import img1 from "../images/apperi.png"
import img2 from "../images/Rectangle 17996.png"
import img3 from "../images/Rectangle 17997.png"
import img4 from "../images/Rectangle 17998.png"
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import playIcon from "../images/Group.png";
import youtube from "../images/youtubeicon.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Navigation } from "swiper";
// import { Pagination } from "swiper";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const Label = () => {
  return (
    <>
      <div className="ser-main">
        <div className="android-back">
          <div className="android-back1 label-back1">
            <h2>
              Boost Your Revenue With Our <br /> White Label Partnerships
            </h2>
            <p className="android-son">
              Kushel Digi has a proven track record of executing projects
              flawlessly. We offer different types of white label partnerships
              to our clients for creating a new revenue stream and gaining a
              competitive advantage.
            </p>
            <button>
              Talk to our Expert
              <img
                width={13}
                className="ml-2 inline"
                src={arrow4}
                alt="arrow4"
              />
            </button>
          </div>
          <div className="android-back2 label-back2">
            <img src={approachda} alt="androids" />
          </div>
        </div>

        <div className="types-part">
          <h2>Types of Partnerships</h2>
          <div className="key-value-cards">
            <div className="key-value-card">
              <div className="key-value-box key-value-back1">
                <img className="key" src={sidha} alt="" />

                <h4>CLOSED WHITE LABEL</h4>
                <p>
                  When you choose us for a closed white label partnership, we
                  remain behind the scenes. You and your team interact with the
                  clients. Your client would not know that we exist, and we work
                  on their project. Kushel Digi bill you, and you can bill your
                  client.
                </p>
                <img className="key1" src={ulta1} alt="" />
              </div>
              <div className="key-value-box key-value-back1">
                <img className="key" src={sidha} alt="" />

                <h4>OPEN WHITE LABEL</h4>
                <p>
                  Under open white label partnership, we act as a part of your
                  in-house team and your clients would know that we exist. You
                  manage the project, take care of the client communication, and
                  guide us. We bill you and you may bill your end clients.
                </p>
                <img className="key1" src={ulta1} alt="" />
              </div>
              <div className="key-value-box key-value-back1">
                <img className="key" src={sidha} alt="" />
                <h4>REFERRAL</h4>
                <p>
                  When we join our client's project, become their full-time
                  employees. We participate in all development meetings and we
                  do everything we can to actively support product development.
                </p>
                <img className="key1" src={ulta1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="benifit-white">
          <h2>
            Benefits of White Label <br /> partnership
          </h2>
          <img className="white-sis" src={androidSis} alt="" />
          <div className="white-label-cards mt-10">
            <div className="white-level-card">
              <div className="white-level-box">
                <img src={label} alt="" />
                <h3>Greater Scalability</h3>
                <p>
                  White label services can help you scale your offerings by
                  adding new products and services. We believe in building long
                  term partnerships with our clients to facilitate business
                  growth mutually.
                </p>
              </div>
              <div className="white-level-box">
                <img src={label} alt="" />
                <h3>Improved Profitability</h3>
                <p>
                  All the types of white label partnerships help you increase
                  your profits with no or minimal investment.
                </p>
              </div>
              <div className="white-level-box">
                <img src={label1} alt="" />
                <h3>Greater focus on <br />
core expertise</h3>
                <p>
                As white label solutions require very little or no time of your own, you can focus on other expertise and deliver the best solutions. So, what are you waiting for? Get in touch with us (CTA) to know about how to partner with us.

                </p>
              </div>
              <div className="white-level-box">
                <img src={label2} alt="" />
                <h3>Higher Client retention </h3>
                <p>
                When you offer a wide range of services to the clients, you would be able to enjoy a higher retention rate as they would keep coming back to you again and again for different services.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="latest">
          <h2>Your Monthly Deliverables</h2>
          <img className="adndrosan" src={adndrosan} alt="" />
          <div className="business-card business1-card flex-wrap mt-20">
            <div className="business-box business-box1 relative text-center cursor-pointer white-soni">
              <div className="business-card-img">
                <img src={caktam} alt="" />
              </div>
              <h5>Custom Strategy</h5>
              <p>
              During the first month of an ongoing digital marketing campaign we’ll craft the strategy first. This is important so everyone is on the same page when we start. We do this so you can visualize everything that will be happening, and to also have a “basecamp” location were everything is recorded.
              </p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer white-soni">
              <div className="business-card-img">
                <img src={caktam1} alt="" />
              </div>
              <h5>Monthly Reporting </h5>
              <p>
              Depending on what we are doing and what we are tracking you and your client will also receive ongoing reporting of analytics where it applies. We think it’s important to see how thingsare progressing.
              </p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer white-soni">
              <div className="business-card-img">
                <img src={caktam2} alt="" />
              </div>
              <h5>Analytics Data</h5>
              <p>
              If it is a service centered around traffic building we’ll provide the numbers each month. We need to see what’s working and what isn’t.
              </p>
            </div>
            <div className="business-box business-box1 relative text-center cursor-pointer white-soni">
              <div className="business-card-img">
                <img src={caktam3} alt="" />
              </div>
              <h5>A Dedicated Person</h5>
              <p>
              Communication will be a very important part of our growing partnership. You will have a dedicated person for all correspondence toensure everyone is on the same page.
              </p>
            </div>
          </div>
        </div>

        <div className="container2 w">
        <h3>Appreciation From Clients</h3>
        <div className="box1 w-full">
        <Splide 
            aria-label="conts"
                options={{
                  perPage:4,
                  perMove: 1,
                  autoplay: true,
                  pauseOnHover: true,
                  type: "loop",
                  interval: 1600,
                  drag: true,
                }}
                className="w-full"
         >
          {/* <AiOutlineArrowLeft className="leftArr" /> */}
          <SplideSlide>
          <div className="img_container">
            <img src={playIcon} className="play_icon" />

            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>

            <img src={img1} className="img_L" alt="img" />
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="img_container">
            <img src={playIcon} className="play_icon" />
            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>
            <img src={img2} className="img_L" alt="img" />
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="img_container">
            <img src={playIcon} className="play_icon" />
            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>
            <img src={img3} className="img_L" alt="img" />
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="img_container">
            <img src={playIcon} className="play_icon" />
            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>
            <img src={img4} className="img_L" alt="img" />
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="img_container">
            <img src={playIcon} className="play_icon" />

            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>

            <img src={img1} className="img_L" alt="img" />
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="img_container">
            <img src={playIcon} className="play_icon" />
            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>
            <img src={img2} className="img_L" alt="img" />
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="img_container">
            <img src={playIcon} className="play_icon" />
            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>
            <img src={img3} className="img_L" alt="img" />
          </div>
          </SplideSlide>
          <SplideSlide>
          <div className="img_container">
            <img src={playIcon} className="play_icon" />
            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>
            <img src={img4} className="img_L" alt="img" />
          </div>
          </SplideSlide>
          {/* <AiOutlineArrowRight className="rightArr" /> */}
          </Splide>
        </div>
        
      </div>

        <div className="why-work-with">
        <h2>Why Work with Us?</h2>
           <img className="tant" src={adndrosan} alt="height" />

           <div className="why-work-cards mt-10">
               <div className="why-work-card">
                   <div className="why-work-box why-work-box1">
                        <img  src={tanning} alt="t" />
                        <p>We are 100% transparent! No client is left in the dark. You know what we’re doing at all times.</p>
                   </div>
                   <div className="why-work-box why-work-box2">
                        <img src={seoOning} alt="t" />
                        <p>Our SEO services are proven. Just read through the numerous case studies on our site.</p>
                   </div>
                   <div className="why-work-box why-work-box3">
                        <img src={seoOning1} alt="t" />
                        <p>We are a quality vs. quantity agency who provides the attention you need to make an impact.</p>
                   </div>
                   <div className="why-work-box why-work-box4">
                        <img src={tanning2} alt="t" />
                        <p>We are results driven! We constantly adjust to make sure you see the growth you’re looking for.</p>
                   </div>
               </div>
           </div>
        </div>
        <ContactForm1/>
      </div>
    </>
  );
};

export default Label;
