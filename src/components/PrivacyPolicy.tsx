import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            Privacy
            <span className="text-white block">
              Policy
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your data.
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
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="text-white/80">
                VISTORA TRAYANA LLP ("we," "our," or "us") operates the MedTrack application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information Collection</h2>
              <p className="text-white/80">
                We collect several different types of information for various purposes to provide and improve our Service to you:
              </p>
              <ul className="list-disc ml-6 mt-4 text-white/80">
                <li>Personal Data: Name, email address, phone number</li>
                <li>Health Data: Medication information, schedules</li>
                <li>Usage Data: App interaction, features used</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Use of Data</h2>
              <p className="text-white/80">
                We use the collected data for various purposes:
              </p>
              <ul className="list-disc ml-6 mt-4 text-white/80">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
              <p className="text-white/80">
                The security of your data is important to us. We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Rights</h2>
              <p className="text-white/80">
                You have certain rights regarding your personal data:
              </p>
              <ul className="list-disc ml-6 mt-4 text-white/80">
                <li>Right to access your data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your data</li>
                <li>Right to restrict processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Contact Us</h2>
              <p className="text-white/80">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none mt-4 text-white/80">
                <li>Email: support@medtrack.co.in</li>
                <li>Address: VISTORA TRAYANA LLP, Chilkanagar, Uppal, Hyderabad, Telangana 500039</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;