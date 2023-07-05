import React from "react";
import bgImage from "../assets/images/pattern-bg.svg";
import iconNext from "../assets/images/icon-next.svg";
import iconPrev from "../assets/images/icon-prev.svg";
import Button from "./Button";
const ImageSlider = ({ data,handleNextSlide,handlePrevSlide }) => {
  // console.log(data)
  return (
    <div className="img-box">
      <img src={bgImage} className="bg-img" alt="img"/>

      <img src={data.img} className="main-img" alt="img"/>

      <div className="btns">
        <Button className="btn prev" onClick={handlePrevSlide}>
        &lt;
        </Button>
        <Button className="btn next" onClick={handleNextSlide}>
        &gt;
        </Button>
      </div>
    </div>
  );
};

export default ImageSlider;
