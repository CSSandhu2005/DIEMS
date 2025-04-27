import { ReactLenis } from 'lenis/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
import About from '@/components/About';
import Admission from '@/components/Admission';
import ContactPage from '@/components/ContactPage';
import { images } from '@/assets';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brand />
        <div className='overflow-hidden relative rounded-lg mb-10'>
          <Carousel slides={images} />
        </div>
        {/* <ReactCardSlider /> */}
        <Features />
        <Process />
        <Overview />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: '/admission',
    element: (
      <>
        <Header />
         <Admission/>
        <Footer />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Header />
         <ContactPage/>
        <Footer />
      </>
    ),
  },
]);

const App = () => { 
  return (
    <ReactLenis root>
      <div className='relative isolate overflow-hidden'>
        <RouterProvider router={router} />
      </div>
    </ReactLenis>
  );
};

export default App;
