import { ReactLenis } from 'lenis/react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brand from '@/components/Brand';
import Carousel from '@/components/Carousel';
// import ReactCardSlider from '@/components/ReactCardSlider';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Overview from '@/components/Overview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { images } from '@/assets';

const App = () => {
  return (
    <ReactLenis root>
      <div className='relative isolate overflow-hidden'>
        <Header />
        <main>
          <Hero />
          <Brand />
          <div className='overflow-hidden relative rounded-lg mb-10'>
            <Carousel slides={images} />
          </div>
          {/* <ReactCardSlider/>  */}
          <Features />
          <Process />
          <Overview />
          <Contact/>
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
