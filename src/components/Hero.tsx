import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PrescriptionScanner from './PrescriptionScanner';
import Silk from './Silk';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const openWaitlist = () => {
    window.open('https://getwaitlist.com/waitlist/22253', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/Ganesh540-crypto/MedTrack', '_blank');
  };

  return (
    <section 
      id="hero"
      className="h-auto md:min-h-screen pt-20 pb-8 md:py-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container-custom pt-8 pb-4 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-8 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            >
              <span className="text-sm font-medium text-white">
                🚀 Join the healthcare revolution
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
              Smart Medication
              <br />
              Management Made Simple
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-lg leading-relaxed text-balance mb-6 md:mb-8">
              Transform your medication routine with MedTrack. Intelligent reminders, 
              seamless tracking, and peace of mind in one elegant solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                whileTap={{ scale: 0.98 }}
                onClick={openWaitlist}
                className="bg-white/90 hover:bg-white text-slate-900 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                whileTap={{ scale: 0.98 }}
                onClick={openGitHub}
                className="bg-white/10 backdrop-blur-md hover:bg-white/15 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 text-sm sm:text-base"
              >
                Learn More
              </motion.button>
            </div>

            <div className="hidden md:flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center pt-8">
              <Stat number="Q2 2025" label="Launch Date" />
              <Stat number="Coming Soon" label="Beta Access" />
              <Stat number="In Progress" label="Development" isLast />
            </div>
          </motion.div>

          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <PrescriptionScanner />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>
    </section>
  );
};

const Stat = ({ number, label, isLast }: { number: string; label: string; isLast?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full lg:flex-1 flex items-center justify-center"
  >
    <motion.div 
      whileHover={{ 
        scale: 1.02,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        transition: { duration: 0.2 }
      }}
      className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 w-full max-w-[280px] lg:w-auto border border-white/20 hover:border-white/30 transition-all duration-200"
    >
      <div className="text-2xl font-bold text-white whitespace-nowrap">{number}</div>
      <div className="text-sm text-white/70 mt-1 whitespace-nowrap">{label}</div>
    </motion.div>
    {!isLast && <div className="hidden lg:block text-white/30 text-2xl mx-4">|</div>}
  </motion.div>
);

export default Hero;
