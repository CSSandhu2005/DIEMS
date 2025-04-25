import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Alumni = {
  name: string;
  image: string;
  year: string;
  description: string;
};

// Ensure you have 6 alumni data (duplicate or add more)
const alumniData: Alumni[] = [
  {
    name: "Harshad Chapte",
    image: "/src/assets/avatar-1.jpg",
    year: "Batch of 2015",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit natus fugiat.",
  },
  {
    name: "Shruti Lokhande",
    image: "/src/assets/avatar-2.jpg",
    year: "Batch of 2017",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit natus fugiat.",
  },
  {
    name: "Akshay Raut",
    image: "/src/assets/avatar-3.jpg",
    year: "Batch of 2016",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit natus fugiat.",
  },
  {
    name: "John Doe",
    image: "/src/assets/avatar-1.jpg",
    year: "Batch of 2018",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit natus fugiat.",
  },
  {
    name: "Jane Smith",
    image: "/src/assets/avatar-2.jpg",
    year: "Batch of 2019",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit natus fugiat.",
  },
  {
    name: "Emily Davis",
    image: "/src/assets/avatar-3.jpg",
    year: "Batch of 2020",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit natus fugiat.",
  },
];

const ReactCardSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 320; // Adjust this based on the card width and spacing
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }

    // Update active index based on the scroll direction
    if (direction === "left" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (direction === "right" && activeIndex < alumniData.length - 3) {
      setActiveIndex(activeIndex + 1);
    }
  };

  // Handle dot click and scroll to the respective alumni
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    scrollRef.current?.scrollTo({
      left: index * 320, // Scroll to the correct alumni card
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-12 px-4 md:px-12 font-poppins overflow-hidden mt-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-10">
        Outstanding Alumni
      </h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#023E8A] text-white p-3 rounded-full hover:bg-[#0353A4] z-10 transition-all duration-300 ease-in-out"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#023E8A]  text-white p-3 rounded-full hover:bg-[#0353A4] z-10 transition-all duration-300 ease-in-out"
      >
        <ChevronRight />
      </button>

      {/* Alumni Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scrollbar-hide scroll-smooth justify-start px-8 py-5"
      >
        {alumniData.map((alumnus, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-[280px] h-[350px] border-2  border-primary/50 shadow-[inset_0px_0px_30px_0px] shadow-primary/100 backdrop-blur-2 shadow-md rounded-2xl p-6 flex-shrink-0 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          > 
            <img
              src={alumnus.image}
              alt={alumnus.name}
              className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-white shadow-lg"
            />
            <h3 className="text-lg font-semibold text-white">
              {alumnus.name}
            </h3>
            <p className="text-sm text-white mb-2">{alumnus.year}</p>
            <p className="text-sm text-white">{alumnus.description}</p>

            <button className="text-sm text-white mb-2 bg-primary/90 px-8 py-3 mt-4 rounded-full">
                <a href="#" className="">Read More</a>
            </button>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center space-x-2 mt-6">
        {alumniData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-1 rounded-full bg-white cursor-pointer transition-all duration-300 ${
              activeIndex === index ? "scale-150" : "scale-100"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ReactCardSlider;
