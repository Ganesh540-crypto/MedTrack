import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Download from './components/Download';
import Footer from './components/Footer';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import ScrollToTop from './components/ScrollToTop';
import Silk from './components/Silk';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        {/* Global Silk Background */}
        <div className="fixed inset-0 z-0">
          <Silk
            speed={3.7}
            scale={0.6}
            color="#4169E1"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Features />
                <Screenshots />
                <HowItWorks />
                <Team />
                <Download />
              </main>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;