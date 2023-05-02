import React from "react";
import arrow3 from '../../images/arrow3.png';
const SmallApproach = () => {
  return (
    <>
      <div className="about-main-13">
        <div className="about-main-130 flex items-center">
          <div className="about-11">
            <h3>
              Elevate your Digital Identity and win more for your best customers
            </h3>
            <button>
              See Our Approach More{" "}
              <img width={13} className="inline ml-2" src={arrow3} alt="" />
            </button>
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
