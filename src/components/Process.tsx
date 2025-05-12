import { motion } from 'motion/react';
import * as variants from '@/lib/motionVariants';
import { processData } from '@/constants';

import { processBanner } from '@/assets';
const Process = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-subtitle'
          >
            {processData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {processData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {processData.sectionText}
          </motion.p>
        </div>

        <div className='grid gap-16 lg:items-center lg:grid-cols-2'>
          <div className='grid gap-7 lg:gap-10'>
            {processData.list.map(({ icon, text, title }, index) => (
              <motion.div
                className='flex flex-col gap-4 md:flex-row lg:gap-7'
                key={index}
                variants={variants.staggerContainer}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
              >
                <motion.div
                  className='w-16 h-16 grid place-items-center rounded-full border border-primary/5 shirnk-0'
                  variants={variants.fadeInScale}
                >
                  {icon}
                </motion.div>

                <div className='grid gap-2 px-4 md:gap-5'>
                  <motion.h3
                    className='text-xl lg:text-2xl'
                    variants={variants.fadeInLeft}
                  >
                    {title}
                  </motion.h3>

                  <motion.p
                    className='text-sm text-muted-foreground md:text-base'
                    variants={variants.fadeInLeft}
                  >
                    {text}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className='max-lg:-order-1'>
            <motion.figure
              variants={variants.fadeInUp}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='mx-auto bg-primary rounded-3xl max-w-[500px] overflow-hidden p-8 lg:p-10'
            >
              <img
                className='rounded-xl w-full h-full object-contain object-top'
                src={processBanner}
                alt='Autonomous Banner'
              />
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
