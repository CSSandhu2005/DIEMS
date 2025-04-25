import { useState } from "react";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

interface CarouselProps {
  slides: string[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden relative border border-sky-400 shadow-lg shadow-sky-200 rounded-lg">
      <div
        className={`flex transition-transform ease-out duration-500`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <img key={index} src={s} className="w-full flex-shrink-0" />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-0 h-full w-full flex justify-between items-center px-4 text-white">
        <button onClick={previousSlide}>
          <ChevronLeftCircle size={36} strokeWidth={2.5} />
        </button>
        <button onClick={nextSlide}>
          <ChevronRightCircle size={36} strokeWidth={2.5} />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
