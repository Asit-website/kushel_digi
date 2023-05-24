import React from "react";
import arrow4 from '../../images/arrow4.png';
import { NavLink } from "react-router-dom";
const SmallApproach = () => {
  return (
    <>
      <div className="about-main-13">
        <div className="about-main-130 flex items-center">
          <div className="about-11">
            <h3>
              Elevate your Digital Identity and win more for your best customers
            </h3>
          <NavLink to="/approach"><button>
              See Our Approach More{" "}
              <img width={13} className="inline ml-1.5" src={arrow4} alt="" />
            </button></NavLink>
          </div>
          <div className="about-10">
            <img src="/static/images/e16.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallApproach;
