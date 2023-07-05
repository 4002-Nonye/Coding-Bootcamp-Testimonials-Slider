import React, { useState } from "react";
import ImageSlider from "./components/ImageSlider";
import johnImg from "./assets/images/image-john.jpg";
import tanyaImg from "./assets/images/image-tanya.jpg";
import TextSlider from "./components/TextSlider";
import bodyImg from "./assets/images/pattern-curve.svg";

const data = [
  {
    text: `I’ve been interested in coding for a while but never taken the jump, until now. 
      I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
      excited about the future.`,
    name: "Tanya Sinclair",
    position: "UX Engineer",
    img: johnImg,
  },
  {
    text: `If you want to lay the best foundation possible I’d recommend taking this course. 
      The depth the instructors go into is incredible. I now feel so confident about 
      starting up as a professional developer.`,
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
    img: tanyaImg,
  },
];
function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((slide) => (slide === 1 ? 0 : slide + 1));
  };
  const handlePrevSlide = () => {
    setActiveSlide((slide) => (slide === 0 ? slide + 1 : slide - 1));
  };

  return (
    <>
      <img src={bodyImg} className="body-img" />
      <main>
        <TextSlider data={data[activeSlide]} />
        <ImageSlider
          data={data[activeSlide]}
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
        />
      </main>
      <footer>
      <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Nonye</a>.
        </div>
      
      
      </footer>
    </>
  );
}

export default App;
