import React from "react";
import quotes from "../assets/images/pattern-quotes.svg";

const TextSlider = ({ data }) => {
  return (
    <div className="text-box">
        <img src={quotes} className="quotes" alt=""/>
      <h1 className="text">
        <em>"</em> {data.text} <em>"</em>
      </h1>

      <div className="person">
        <p>{data.name}</p>
        <p>{data.position}</p>
      </div>
    </div>
  );
};

export default TextSlider;
