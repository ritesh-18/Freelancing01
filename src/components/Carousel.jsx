
import React from "react";
import serviceimg from "../assets/images/services.png";
import chooseus from "../assets/images/plan.png";
import transport from "../assets/images/transport.png";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";



function Carousel() {
  const { useState, useEffect } = React;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slides = [
    {
      title: "SERVICES",
      description:
        "Being a leading provider of logistics solutions across India, we've an immense portfolio",
      buttonText: "Read More",
      backgroundClass: "bg-[#004d40]",
    },
    {
      title: "SOLUTIONS",
      description:
        "We provide end-to-end logistics solutions tailored to your needs",
      buttonText: "Learn More",
      backgroundClass: "bg-[#00695c]",
    },
    {
      title: "EXPERTISE",
      description:
        "Years of experience in handling complex logistics challenges",
      buttonText: "Discover More",
      backgroundClass: "bg-[#00796b]",
    },
  ];

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
    <div
      className="relative flex w-full h-full transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${currentSlide * 100}%)`,
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-full h-full flex-shrink-0 ${slide.backgroundClass}`}
        >
          <div className="flex h-full flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-8">
                {slide.description}
              </p>
              <button className="px-4 py-2 md:px-6 md:py-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors w-fit">
                {slide.buttonText}
              </button>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[800px] lg:h-full rounded-l-full overflow-hidden">
                <img
                  src={"https://suryalogistics.in/wp-content/uploads/2023/03/vision.jpg"}
                  alt="Logistics services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  
    {/* Left Button */}
    <button
      onClick={prevSlide}
      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:p-4 rounded-full hover:bg-opacity-75"
    >
      <i className="fas fa-chevron-left"></i>
    </button>
  
    {/* Right Button */}
    <button
      onClick={nextSlide}
      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:p-4 rounded-full hover:bg-opacity-75"
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  </div>
  
  );
}

export default Carousel;