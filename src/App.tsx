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
import Placement from '@/components/Placement';
import { images } from '@/assets';
import Courses from './components/Courses';
import Syllabus from './components/Syllabus';
import Departments from './components/Departments';
import Sports from './components/Sports';
import Faculty from './components/Faculty';
import IQAC from './components/IQAC';
import LibraryPage from './components/LibraryPage';
import LabsAndEquipmentPage from './components/Labs';
import HostelPage from './components/Hostel';
import NIRFPage from './components/NIRF';
import CommitteePage from './components/Committee';
import EventsPage from './components/Events';

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
  {
    path: '/placements',
    element: (
      <>
        <Header />
         <Placement/>
        <Footer />
      </>
    ),
  },
  {
    path: '/academics/courses' , 
    element : (
      <>
        <Header />
        <Courses />
        <Footer />
      </>
    )
  }, { 
    path: '/academics/syllabus', 
    element: ( 
      <> 
        <Header />
        <Syllabus />
        <Footer /> 
      </>
    )
  }, { 
    path: "academics/departments", 
    element: (
      <>
      <Header />
      <Departments />
      <Footer />
      </>
    )
  }, {
    path: "facilities/sports" , 
    element: ( <>
      <Header />
      <Sports />
      <Footer />
    </>)
  }, {
    path: "/academics/faculty" , 
    element: ( 
      <>
      <Header />
      <Faculty />
      <Footer />
      </>
    )
  }, { 
    path: "iqac", 
    element: (
      <>
        <Header />
        <IQAC />
        <Footer />
      </>
    )
  } , { 
    path: "/facilities/library" , 
    element: ( 
      <> 
        <Header />
        <LibraryPage />
        <Footer />
      </>
    )
  } , {
    path: "/facilities/labs" , 
    element: ( 
      <>
        <Header />
        <LabsAndEquipmentPage />
        <Footer />
      </>
    )
  } , { 
    path: "/facilities/hostel", 
    element: (
      <>
        <Header /> 
        <HostelPage />
        <Footer />
      </>
    )
  } , {
    path: "/nirf", 
    element: (
      <>
        <Header />
        <NIRFPage />
        <Footer />
      </>
    )
  } , {
    path: "/others/committees" , 
    element: (
      <>
        <Header />
        <CommitteePage />
        <Footer />
      </>
    )
  }, {
    path: "/others/events" , 
    element: (
      <>
        <Header />
        <EventsPage />
        <Footer />
      </>
    )
  }
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
