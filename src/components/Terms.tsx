import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            Legal
          </span>
          <h1 className="text-4xl font-bold mt-6 mb-4 text-white">
            Terms and
            <span className="text-white block">
              Conditions
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Please read these terms carefully before using our service.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <p className="text-lg text-white/80 mb-8">
              Last updated: March 15, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
              <p className="text-white/80">
                By accessing or using MedTrack, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Use License</h2>
              <p className="text-white/80">
                Permission is granted to temporarily download one copy of MedTrack per device for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc ml-6 mt-4 text-white/80">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained in MedTrack</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Disclaimer</h2>
              <p className="text-white/80">
                The materials within MedTrack are provided on an 'as is' basis. VISTORA TRAYANA LLP makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitations</h2>
              <p className="text-white/80">
                In no event shall VISTORA TRAYANA LLP or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use MedTrack.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Accuracy of Materials</h2>
              <p className="text-white/80">
                The materials appearing in MedTrack could include technical, typographical, or photographic errors. VISTORA TRAYANA LLP does not warrant that any of the materials on MedTrack are accurate, complete, or current.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Links</h2>
              <p className="text-white/80">
                VISTORA TRAYANA LLP has not reviewed all of the sites linked to its application and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by VISTORA TRAYANA LLP of the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Modifications</h2>
              <p className="text-white/80">
                VISTORA TRAYANA LLP may revise these terms of service for its application at any time without notice. By using MedTrack you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Governing Law</h2>
              <p className="text-white/80">
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;