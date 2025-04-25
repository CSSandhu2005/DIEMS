import { ReactLenis } from 'lenis/react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brand from '@/components/Brand';
import Carousel from '@/components/Carousel';
// import ReactCardSlider from '@/components/ReactCardSlider';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Overview from './components/Overview';
import Footer from '@/components/Footer';

const slides = [
  'src/assets/image-1.png',
  'src/assets/image-2.png',
  'src/assets/image-3.png',
  'src/assets/image-4.png',
  'src/assets/image-5.png',
  'src/assets/image-6.png',
  'src/assets/image-7.png',
];

const App = () => {
  return (
    <ReactLenis root>
      <div className='relative isolate overflow-hidden'>
        <Header />
        <main>
          <Hero />
          <Brand />
          <div className='overflow-hidden relative rounded-lg mb-10'>
            <Carousel slides={slides} />
          </div>
          {/* <ReactCardSlider/>  */}
          <Features />
          <Process />
          <Overview />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
