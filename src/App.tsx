// src/App.tsx
import { ReactLenis } from 'lenis/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Hero from '@/components/Hero';
import Brand from '@/components/Brand';
import Carousel from '@/components/Carousel';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Overview from '@/components/Overview';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Admission from '@/components/Admission';
import ContactPage from '@/components/ContactPage';
import Placement from '@/components/Placement';
import Courses from '@/components/Courses';
import Syllabus from '@/components/Syllabus';
import Departments from '@/components/Departments';
import Sports from '@/components/Sports';
import Faculty from '@/components/Faculty';
import IQAC from '@/components/IQAC';
import LibraryPage from '@/components/LibraryPage';
import LabsAndEquipmentPage from '@/components/Labs';
import HostelPage from '@/components/Hostel';
import NIRFPage from '@/components/NIRF';
import CommitteePage from '@/components/Committee';
import EventsPage from '@/components/Events';
import { images } from '@/assets';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/components/Layout';

const Home = () => (
  <>
    <Hero />
    <Brand />
    <div className='overflow-hidden relative rounded-lg mb-10'>
      <Carousel slides={images} />
    </div>
    <Features />
    <Process />
    <Overview />
    <Contact />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: '/admission',
    element: (
      <Layout>
        <Admission />
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    ),
  },
  {
    path: '/placements',
    element: (
      <Layout>
        <Placement />
      </Layout>
    ),
  },
  {
    path: '/academics/courses',
    element: (
      <Layout>
        <Courses />
      </Layout>
    ),
  },
  {
    path: '/academics/syllabus',
    element: (
      <Layout>
        <Syllabus />
      </Layout>
    ),
  },
  {
    path: '/academics/departments',
    element: (
      <Layout>
        <Departments />
      </Layout>
    ),
  },
  {
    path: '/facilities/sports',
    element: (
      <Layout>
        <Sports />
      </Layout>
    ),
  },
  {
    path: '/academics/faculty',
    element: (
      <Layout>
        <Faculty />
      </Layout>
    ),
  },
  {
    path: '/iqac',
    element: (
      <Layout>
        <IQAC />
      </Layout>
    ),
  },
  {
    path: '/facilities/library',
    element: (
      <Layout>
        <LibraryPage />
      </Layout>
    ),
  },
  {
    path: '/facilities/labs',
    element: (
      <Layout>
        <LabsAndEquipmentPage />
      </Layout>
    ),
  },
  {
    path: '/facilities/hostel',
    element: (
      <Layout>
        <HostelPage />
      </Layout>
    ),
  },
  {
    path: '/nirf',
    element: (
      <Layout>
        <NIRFPage />
      </Layout>
    ),
  },
  {
    path: '/others/committees',
    element: (
      <Layout>
        <CommitteePage />
      </Layout>
    ),
  },
  {
    path: '/others/events',
    element: (
      <Layout>
        <EventsPage />
      </Layout>
    ),
  },
]);

const App: React.FC = () => {
  return (
    <ThemeProvider
      defaultTheme='dark'
      storageKey='vite-ui-theme'
    >
      <ReactLenis root>
        <div className='relative isolate overflow-hidden'>
          <RouterProvider router={router} />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
};

export default App;
