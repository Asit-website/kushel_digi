import React from 'react'
import website from '../images/website.png';
import reactjs1 from '../images/reactjs.png';
import htmls from '../images/htmls.png';
import phpos from '../images/phpos.png';
import nodejs1 from '../images/nodejs1.png';
import words from '../images/words.png'
import vuejs1 from '../images/vuejs1.png'
import delivery from '../images/delivery.png';
import web2 from '../images/web2.png';
const WebsiteDev = () => {
  return (
    <>
        <div className="ser-main">
        <div className="ser1 serji serji1">
          <div className="ser11 px-24 pt-12 pb-4 flex items-center justify-between">
            <div className="ser111">
              <h1 className="">Services </h1>
              <h1 className="blue">Website Design & Development</h1>
              <p className="ac">Accelerate your business with an app</p>
              <p>Faster | Better | Easier</p>
            </div>
            <div className="ser112">
              <img src={website} alt="" />
            </div>
          </div>
        </div>
        <div className="ser2 ser-vertical">
          <div className="ser21 ser23">
            <div className="home412 flex justify-center items-center">
              <div className="home4121">
                <img className=" block m-auto" src={reactjs1} alt="" />
                <p>REACT JS</p>
              </div>
              <div className="home4121">
                <img className=" block m-auto" src={htmls} alt="" />
                <p>HTML 5</p>
              </div>
              <div className="w-full sis  home4121">
                <img className="block m-auto phpos" src={phpos} alt="" />
                {/* <p>PHP</p> */}
              </div>
              <div className="w-full sis1  home4121">
                <img  className=" block m-auto nodejs1" src={nodejs1} alt="" />
                {/* <p>Node</p> */}
              </div>
              <div className="home4121">
                <img className="block m-auto" src={words} alt="" />
                <p>Wordpress</p>
              </div>
              <div className="home4121">
                <img className="block m-auto" src={vuejs1} alt="" />
                <p>PYTHON</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-app mobile-app1">
          <img className="app" src={web2} alt="app" />
          <div className="deliver delivery1">
            <div className="first-delivery">
              <h3>Delivery Management</h3>
              <div className="deivery-date">
                 <p className='ensure'>We ensure that all our web development and mobile application development projects are not only engineered using the most cutting edge technologies, but also they're created through a human-centred design process.</p>
              </div>
            </div>
            <div className="second-delivery">
              <div className="delivery-img">
                <img src={delivery} alt="" />
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default WebsiteDev