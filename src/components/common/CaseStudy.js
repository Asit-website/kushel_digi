import React from "react";
import kikma from "../../images/kikma.png";
import kiktas from "../../images/kiktas.png";
import kinu from "../../images/kinu.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const CaseStudy = () => {
  return (
      <div>
      <Splide
        className="w-full"
        aria-label="Our Services"
        options={{
          perPage: 1,
          perMove: 1,
          autoplay: true,
          pauseOnHover: true,
          type: "loop",
          interval: 2200,
          drag: true,
        }}
      >
      <SplideSlide>
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
             <div className="kakiji">
            <img src={kinu} alt="kinu" />
            </div>
          </div>
        </div>
        </SplideSlide>
        <SplideSlide>
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
            <div className="kakiji">
            <img src={kinu} alt="kinu" />
            </div>
          </div>
        </div>
        </SplideSlide>
      </Splide>
      </div>
  );
};

export default CaseStudy;
