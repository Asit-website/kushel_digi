import React from 'react'
import refant from '../images/refant.png';
import arrow4 from '../images/arrow4.png';
const Native = () => {
  return (
    <div className="ser-main">
         <div className="android-back native-back">
          <div className="android-back1">
            <h2>
              Flutter App <br /> Development Company
            </h2>
            <p className="android-son">
              Build Robust & Natively Compiled Experiences for Web, Mobile, and
              Desktop
            </p>
            <button>
              Consult our iOS Team{" "}
              <img width={13} className="ml-1 inline" src={arrow4} alt="" />
            </button>
          </div>
          <div className="android-back2 native-back2">
            <img className="" src={refant} alt="androids" />
          </div>
        </div>

        <div className='py-10'>

        </div>
    </div>
  )
}

export default Native