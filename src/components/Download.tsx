import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, PlayCircle, X } from 'lucide-react';

const Download = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPlatform, setModalPlatform] = useState('');

  const handleDownloadClick = (platform: string) => {
    setModalPlatform(platform);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white"
          >
            Download MedTrack
            <span className="text-secondary">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            Join thousands waiting to revolutionize their medication management experience.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          {/* Container with Coming Soon message */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <span className="text-white/80 font-medium text-sm sm:text-base">Coming Soon</span>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            </div>
            <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
              MedTrack mobile apps are currently under development. We're working hard to bring you the best medication management experience on both platforms!
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <motion.div
                onClick={() => handleDownloadClick('iOS App Store')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/40 text-white rounded-xl hover:bg-white/15 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3 px-4 py-2.5 sm:px-6 sm:py-3">
                  <Apple className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-base sm:text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                onClick={() => handleDownloadClick('Google Play Store')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/40 text-white rounded-xl hover:bg-white/15 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3 px-4 py-2.5 sm:px-6 sm:py-3">
                  <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="text-base sm:text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>  {/* Add this line to close the max-w-7xl container div */}
      
      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center z-50 p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl z-50 max-w-md w-full mx-auto text-center relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-3 top-3 sm:right-4 sm:top-4 text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                
                <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  <span className="text-white/80 font-medium text-sm sm:text-base">Development in Progress</span>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Coming Soon!</h3>
                <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                  The MedTrack app for <span className="font-semibold text-white">{modalPlatform}</span> is currently under development. 
                  We're working hard to bring you the best medication management experience!
                </p>
                
                <motion.button
                  onClick={() => setIsModalOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full max-w-xs mx-auto bg-white/90 hover:bg-white text-slate-900 py-2.5 px-5 sm:py-3 sm:px-6 rounded-full transition-all duration-300 text-base sm:text-lg font-medium"
                >
                  Got it!
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
          </section>
        );
      };

export default Download;