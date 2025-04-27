import { useState } from 'react';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';

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
    <>
      <div className="text-center mb-3 text-3xl lg:text-4xl"><h1>Latest College Updates</h1></div>
      <div className='overflow-hidden relative shadow-lg rounded-lg'>
        <div
          className={`flex transition-transform ease-out duration-500`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s, index) => (
            <img
              key={index}
              src={s}
              className='w-full flex-shrink-0 object-cover'
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className='absolute top-0 h-full w-full flex justify-between items-center text-[#101F28] px-2 md:px-4'>
          <button onClick={previousSlide}>
            <ChevronLeftCircle
              size={36}
              strokeWidth={2.5}
            />
          </button>
          <button onClick={nextSlide}>
            <ChevronRightCircle
              size={36}
              strokeWidth={2.5}
            />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className='absolute bottom-4 flex justify-start px-2 gap-3 w-full md:p-4'>
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === current ? 'bg-primary' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
