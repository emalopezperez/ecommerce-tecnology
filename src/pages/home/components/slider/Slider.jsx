import { useState, useEffect } from "react";
import "./slider.css";
import { RxDotFilled } from "react-icons/rx";

const Slider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, 5000);

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
          className="absolute w-full h-full duration-1000 bg-center bg-cover"></div>
      ))}

      <div className="absolute flex items-center justify-center py-2 transform -translate-x-1/2 bottom-6 left-1/2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>

      <div className="absolute top-[25%] flex flex-col justify-between sm:w-[250px] h-[190px] md:h-[190px] left-0 sm:left-5 ">
        <p className="text-2xl">
          Promoción 20% de descuento en tu primera orden
        </p>

        <button className="w-[50%] bg-[#fb9700] flex justify-center p-2">
          <span>Ver mas</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
