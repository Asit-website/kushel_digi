import React from "react";
import kikma from "../../images/kikma.png";
import kiktas from "../../images/kiktas.png";
import kinu from "../../images/kinu.png";
const CaseStudy = () => {
  return (
    <div className="kickta_big">
      <div className="kickta_big1">
        <img src={kikma} alt="kikma" />
        <div className="headst_big">
          <h2>the most </h2>
          <h2>compfortable</h2>
          <h2>recoil pads</h2>
        </div>
        <div className="kickma-arrow">
          <p>View Case study</p>
          <img src={kiktas} alt="kiktas" />
        </div>
      </div>
      <div className="kickta_big2">
        <img src={kinu} alt="kinu" />
      </div>
    </div>
  );
};

export default CaseStudy;
