import { ReactLenis } from 'lenis/react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brand from "@/components/Brand" ; 
import Carousel from '@/components/Carousel';



const slides = [
  "src/assets/image-1.png",
  "src/assets/image-2.png",
  "src/assets/image-3.png",
  "src/assets/image-4.png",
  "src/assets/image-5.png",
  "src/assets/image-6.png",
  "src/assets/image-7.png",
];  


const App = () => {
  return (
    <ReactLenis root>
      <div className='relative isolate overflow-hidden'>
        <Header />
        <main>
          <Hero />
          <Brand />
          <div className="overflow-hidden relative border border-sky-400 shadow-lg shadow-sky-200 rounded-lg">
            <Carousel slides={slides} />
          </div>
        </main>
      </div>
    </ReactLenis>
  );
};

export default App;
