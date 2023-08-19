import { useState, useEffect } from "react";
import "./slider.css";

// eslint-disable-next-line react/prop-types
const Slider = ({ slides, time }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-full w-full m-auto  relative group">
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          style={{
            backgroundImage: `url(${slide.url})`,
            opacity: currentIndex === slideIndex ? 1 : 0,
          }}
          className="absolute w-full h-full duration-1000 bg-cover">
          <img src={slide.url} alt={slide.alt} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
