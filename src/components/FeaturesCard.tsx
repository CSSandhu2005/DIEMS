import { JSX } from 'react';
import { motion } from 'motion/react';
import { useState, useRef  } from 'react';
import * as variants from '@/lib/motionVariants';

type FeatureCardProps = {
  classes?: string;
  children: JSX.Element;
};
const FeaturesCard = ({ classes, children }: FeatureCardProps) => {
  const glowRef = useRef<HTMLDivElement>(null) ; 
  const cardRef = useRef<HTMLDivElement>(null) ; 

  const [showGlow, setShowGlow] = useState(true) ; 

  return (
    <motion.div
      variants={variants.staggerContainer}
      initial='start'
      whileInView='end'
      viewport={{ once: true }}
      className={`relative overflow-hidden p-[3px] ring ring-inset ring-primary-800/50 rounded-[14px] ${classes}`}
    >
      <div className='relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden' ref={cardRef} onMouseOver={() => setShowGlow(true)}
        onMouseOut={() => setShowGlow(false)}>
        {children}
      </div>

      {/* Important Border Effect */}
      <motion.div className="absolute -top-[150px] -left-[150px] rounded-full -z-10 w-[300px] bg-white blur-[50px]" ref={glowRef} initial={{ opacity: 0 }} animate={{ opacity: Number(showGlow)}}></motion.div>
    </motion.div>
  );
};

export default FeaturesCard;
