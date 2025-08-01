import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is MedTrack?",
    answer: "MedTrack is a comprehensive medication management platform that helps users track their medications, set reminders, and maintain their health records. It combines smart technology with user-friendly design to ensure medication adherence."
  },
  {
    question: "How do I get started with MedTrack?",
    answer: "Getting started is easy! Once the app launches, simply download it from your app store, create an account, and start adding your medications. You can set up personalized reminders and track your medication schedule right away."
  },
  {
    question: "Is my health data secure?",
    answer: "Yes, absolutely! We take data security very seriously. All your health information is encrypted and stored securely following industry-standard protocols. We comply with healthcare data protection regulations to ensure your privacy."
  },
  {
    question: "Can I manage medications for multiple people?",
    answer: "Yes! MedTrack allows you to create and manage multiple profiles, making it perfect for caregivers who need to track medications for family members or patients."
  },
  {
    question: "What devices is MedTrack compatible with?",
    answer: "MedTrack will be available on both iOS and Android devices. We're also developing a web interface for easy access from any computer."
  },
  {
    question: "How do the medication reminders work?",
    answer: "MedTrack sends smart notifications based on your medication schedule. You can customize reminder times, frequency, and notification types. The app also tracks whether you've taken your medications and sends follow-up reminders if needed."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-sm font-medium text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            Help Center
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-4 text-white">
            Frequently Asked
            <span className="text-white block">
              Questions
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about MedTrack and how it can help you manage your medications better.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-4 sm:p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 rounded-lg hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base sm:text-lg font-medium text-white pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  )}
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 sm:mt-4 text-white/80 text-sm sm:text-base">{faq.answer}</p>
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;