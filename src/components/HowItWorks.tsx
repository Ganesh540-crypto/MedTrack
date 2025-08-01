import React from 'react';
import { motion } from 'framer-motion';
import { Download, Bell, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download App',
    description: 'Get started by downloading MedTrack from your app store',
    color: 'primary'
  },
  {
    icon: Calendar,
    title: 'Add Medications',
    description: 'Input your medications and schedule',
    color: 'secondary'
  },
  {
    icon: Bell,
    title: 'Set Reminders',
    description: 'Customize notifications for your medication schedule',
    color: 'primary'
  },
  {
    icon: CheckCircle,
    title: 'Stay on Track',
    description: 'Never miss a dose with our smart reminder system',
    color: 'secondary'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-4 text-white">
            Start Using MedTrack
            <span className="text-white block">
              In Four Simple Steps
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Get started with MedTrack in simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center">
              <StepCard {...step} index={index} />
              {/* Dotted connector - only show between cards, not after the last one */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-full top-1/2 transform -translate-y-1/2 z-20 w-8 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
                    className="w-full flex items-center justify-center"
                  >
                    <div className="w-6 border-t-[3px] border-dotted border-white/60"></div>
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative z-10 w-full"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 rounded-2xl p-6 lg:p-8 text-center group transition-all duration-300 min-h-[240px] lg:min-h-[280px] flex flex-col justify-between"
      >
        <div>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center mx-auto mb-4 lg:mb-6 transition-colors duration-300"
          >
            <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white group-hover:text-white transition-colors duration-300" />
          </motion.div>
          <div className="absolute -top-3 left-3 lg:-top-4 lg:left-4 text-3xl lg:text-5xl font-bold text-white/20">
            {index + 1}
          </div>
          <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-white group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default HowItWorks;