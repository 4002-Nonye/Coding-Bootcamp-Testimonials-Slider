import React from "react";
import quotes from "../assets/images/pattern-quotes.svg";

const TextSlider = ({ data }) => {
  return (
    <div className="text-box">
        <img src={quotes} className="quotes"/>
      <p className="text">
        <em>"</em> {data.text} <em>"</em>
      </p>

      <div className="person">
        <p>{data.name}</p>
        <p>{data.position}</p>
      </div>
    </div>
  );
};

export default TextSlider;
