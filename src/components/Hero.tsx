'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import {
  motion,
  Variants,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { heroData } from '@/constants';
import { Button } from '@/components/ui/button';
import { Banner, heroBanner } from '@/assets';
import { Building, CirclePlay } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ReactPlayerLazy = dynamic(() => import('react-player/youtube'), {
  ssr: false,
});

const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVariants: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: 'blur(5px)',
  },
  end: {
    y: 0,
    opacity: 1,
    filter: 'blur(0)',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isImagePopUpOpen, setImagePopUpOpen] = useState(false);
  const heroBannerRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    setHasMounted(true);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ['start 1080px', '50% start'],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.1]);
  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const handleDialogToggle = useCallback(() => {
    setDialogOpen((prev) => !prev);
  }, []);

  const handleImagePopUpToggle = useCallback(() => {
    setImagePopUpOpen((prev) => !prev);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className='py-10 md:py-16'>
      <motion.div
        variants={prefersReducedMotion || isMobile ? {} : heroVariant}
        initial='start'
        animate='end'
        className='container text-center'
      >
        <div className='max-w-screen-md mx-auto flex flex-col items-center'>
          <motion.p
            variants={prefersReducedMotion || isMobile ? {} : heroChildVariants}
            className='text-sm uppercase tracking-wider bg-accent/50 text-secondary-foreground max-w-max mx-auto px-6 py-2 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:mb-10'
          >
            {heroData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={prefersReducedMotion || isMobile ? {} : heroChildVariants}
            className='text-4xl font-semibold !leading-tight mb-3 md:text-5xl md:mb-5 lg:text-6xl'
          >
            <div>{heroData.sectionTitle}</div>
            <span className='relative isolate p-2 lg:py-1'>
              {heroData.decoTitle}
              <span className='absolute -z-10 top-2 -left-10 -right-6 bottom-0.5 bg-primary/5 rounded-full px-8 ms-3 border-t border-primary/20 shadow-[inset_0px_0px_30px_0px] shadow-primary/20 md:top-3 md:bottom-1 lg:top-4 lg:bottom-2'></span>
            </span>
          </motion.h2>

          <motion.p
            variants={prefersReducedMotion || isMobile ? {} : heroChildVariants}
            className='text-muted-foreground md:text-xl'
          >
            {heroData.sectionText}
          </motion.p>

          <motion.div
            variants={prefersReducedMotion || isMobile ? {} : heroChildVariants}
            className='flex w-full justify-between mt-6 z-40 md:mt-10 flex-col md:flex-row lg:flex-row gap-4'
          >
            <Button>DIEMS Admission</Button>
            <Dialog
              open={isDialogOpen}
              onOpenChange={setDialogOpen}
            >
              <DialogTrigger asChild>
                <Button
                  variant='ghost'
                  onClick={handleDialogToggle}
                >
                  <CirclePlay />
                  College Campus
                </Button>
              </DialogTrigger>
              <DialogContent className='p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]'>
                <AspectRatio ratio={16 / 9}>
                  {isDialogOpen && (
                    <ReactPlayerLazy
                      url='https://www.youtube.com/watch?v=iS5pw1Gv9UU'
                      style={{
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                    />
                  )}
                </AspectRatio>
              </DialogContent>
            </Dialog>

            <Button
              variant='destructive'
              onClick={handleImagePopUpToggle}
            >
              <Building />
              Accreditations
            </Button>
          </motion.div>
        </div>

        {/* Image Pop-Up Section */}
        {isImagePopUpOpen && (
          <Dialog
            open={isImagePopUpOpen}
            onOpenChange={setImagePopUpOpen}
          >
            <DialogTrigger asChild>
              <button></button>
            </DialogTrigger>
            <DialogContent className='p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]'>
              <motion.div
                className='relative w-full h-auto'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                }}
              >
                <img
                  src={Banner}
                  alt='Pop-Up Image'
                  className='w-full h-auto rounded-xl'
                  loading='lazy'
                />
              </motion.div>
              <DialogClose asChild></DialogClose>
            </DialogContent>
          </Dialog>
        )}

        {/* Hero Banner Section */}
        <div className='relative mt-16 mb-2 max-w-screen-xl mx-auto isolate md:mt-16 -z-10'>
          {!isMobile ? (
            <>
              <motion.figure
                className='bg-background/60 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden'
                initial={{ y: 120, opacity: 0, filter: 'blur(5px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0)' }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'backInOut' }}
                ref={heroBannerRef}
                style={{ scale }}
              >
                <img
                  src={heroBanner}
                  alt='Hero Banner'
                  width={1468}
                  height={815}
                  className='w-full h-auto'
                  loading='lazy'
                  decoding='async'
                />
              </motion.figure>
              <motion.div
                className='absolute bg-primary inset-5 blur-[50px] -z-50'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: 'backInOut' }}
              />
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1.5, ease: 'backOut' }}
                className='absolute inset-0 bg-primary blur-[200px] scale-y-75 scale-x-125 rounded-full -z-50'
              />
            </>
          ) : (
            <>
              <div
                className='bg-background/60 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden'
                ref={heroBannerRef}
              >
                <img
                  src={heroBanner}
                  alt='Hero Banner'
                  width={1468}
                  height={815}
                  className='w-full h-auto'
                  loading='lazy'
                  decoding='async'
                />
              </div>
              <div className='absolute bg-primary inset-5 blur-[50px] -z-50' />
              <div className='absolute inset-0 bg-primary blur-[200px] scale-y-75 scale-x-125 rounded-full -z-50' />
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
