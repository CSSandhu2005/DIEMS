import { motion } from 'motion/react';
import { brands } from '@/assets';

import * as variants from '@/lib/motionVariants';

const Brand = () => {
  return (
    <section className='section'>
      <div className='container max-w-screen-lg'>
        <motion.p
          variants={variants.fadeIn}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='text-center text-4xl mb-5'
        >
          Skill Development Partnerships
        </motion.p>

        <motion.div
          variants={variants.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-8'
        >
          {brands.map((brand, index) => (
            <motion.figure
              variants={variants.fadeIn}
              key={index}
            >
              <img
                className='cursor-pointer rounded-xl overflow-hidden opacity-[0.95] transition-all duration-300 ease-in hover:scale-110'
                src={brand}
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;
