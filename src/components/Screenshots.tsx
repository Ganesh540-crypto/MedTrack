import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight,Monitor, Plus, Calendar, X } from 'lucide-react';
import DashboardImage from "../assets/Dashboard.png";
import AddmedicationImage from "../assets/Addmedication.png";
import CheckupImage from "../assets/Checkup.png";



import { useNavigate } from 'react-router-dom';


const screenshots = [
  {
    title: "Dashboard View",
    description: "Monitor your daily medications and track your adherence progress",
    icon: Monitor,
    label: "Core View",
    image: DashboardImage,
  },
  {
    title: "Add Medication",
    description: "Simple and intuitive medication entry with detailed tracking options",
    icon: Plus,
    label: "Quick Entry",
    image: AddmedicationImage,
  },
  {
    title: "Health Checkups",
    description: "Stay on top of your medical appointments and schedule follow-ups",
    icon: Calendar,
    label: "Scheduling",
    image: CheckupImage,
  }
];

const Screenshots = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  return (
    <section id="screenshots" className="py-12 md:py-20 bg-accent">
      <div className="container-custom px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="text-sm font-medium text-neutral-600 bg-white px-4 py-2 rounded-full">
            App Preview
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
            Experience the
            <span className="heading-gradient block">
              Future of Healthcare
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Experience the simplicity of medication management
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-16">
          {screenshots.map((screen, index) => (
            <ScreenshotCard 
              key={index} 
              {...screen} 
              index={index}
              onImageClick={() => setSelectedImage(screen.image)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="card overflow-hidden">
                <div className="bg-neutral-100 px-4 py-2 border-b flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-white/80 mx-auto w-1/2 h-5 rounded text-xs flex items-center justify-center text-neutral-400">
                      medtrack.co.in
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="p-1 hover:bg-neutral-200 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <img
                  src={selectedImage}
                  alt="Screenshot Preview"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
          </motion.div>

        )}
      </AnimatePresence>
      <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-gray-900 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 w-full h-full z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 Q20,5 40,30 T60,30 T80,30 T100,30" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0,50 Q20,25 40,50 T60,50 T80,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0,70 Q20,45 40,70 T60,70 T80,70 T100,70" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Want to <span className="handwritten text-4xl md:text-5xl">Contribute </span> <span className="ml-1">Healthcare?</span>
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Be among the first to contribute to this revolutionary medical documentation technology.
        </p>
        <button 
          onClick={() => window.open('https://deepscribe.netlify.app/', '_blank')}  
          className="px-8 py-4 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors shadow-lg flex items-center mx-auto space-x-2 group"
        >
          <span>Get Started Now</span>
          <ArrowRight className="w-6 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  </div>
</section>

    </section>
  );
};

interface ScreenshotCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  image: string;
  index: number;
  onImageClick: () => void;
}

const ScreenshotCard: React.FC<ScreenshotCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  label, 
  image, 
  index,
  onImageClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        whileHover={{ y: -5 }}
        className={`card overflow-hidden flex flex-col ${
          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <Icon className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              {label}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">{title}</h3>
          <p className="text-neutral-600">{description}</p>
        </div>

        <div className="w-full md:w-2/3 p-4 md:p-6">
          <div 
            className="card overflow-hidden cursor-pointer"
            onClick={onImageClick}
          >
            <div className="bg-neutral-100 px-4 py-2 border-b flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="bg-white/80 mx-auto w-1/2 h-5 rounded text-xs flex items-center justify-center text-neutral-400">
                  medtrack.co.in
                </div>
              </div>
            </div>
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Screenshots;