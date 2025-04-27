import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import AboutImage from '../assets/about us.png';

const About = () => {
  return (
    <section className='py-10 md:py-16'>
      <div className='container text-center'>
        <div className='max-w-screen-md mx-auto'>
          {/* Animated Heading */}
          <motion.h2
            className='text-3xl font-semibold mb-3 md:text-4xl lg:text-5xl xl:text-6xl'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About DIEMS
          </motion.h2>

          {/* Animated Subheading */}
          <motion.p
            className='text-muted-foreground text-base md:text-lg lg:text-xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Deogiri Institute of Engineering & Management Studies
          </motion.p>

          {/* Animated Image */}
          <div className='mt-10 flex justify-center'>
            <motion.img
              src={AboutImage}
              alt='About DIEMS'
              className='rounded-xl max-w-full h-auto shadow-[0px_5px_20px_rgba(0,0,0,0.1)] backdrop-blur-xl shadow-[#254B88]'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>

          {/* Animated Paragraphs */}
          <div className='text-center mt-10'>
            <motion.p
              className='mb-4 text-base md:text-lg lg:text-xl'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              In pursuance with the policies of the Government of India to start Engineering colleges in emerging technologies, Deogiri Institute of Engineering and Management Studies is established at Aurangabad during the academic year 2009-10.{' '}
              <span className='text-[#01AEEF]'>Deogiri Institute of Engineering and Management Studies</span> is affiliated to the{' '}
              <span className='text-[#01AEEF]'>Dr. Babasaheb Ambedkar Technological University, Lonere</span> and is developed as per the norms of the All India Council of Technical Education (A.I.C.T.E.), Government of India.
            </motion.p>
            <motion.p
              className='text-base md:text-lg lg:text-xl'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              The Institute is consistently among the top institutes of Dr. B.A.M. University in examination results. The student-centric teaching-learning environment, state-of-the-art infrastructure, well-equipped laboratories, a library stacked with a good number of books, and an experienced and dedicated team of faculties are the key features of the Institute.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
