import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Linkedin, Github, Mail, Instagram } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState('idle');
  const location = useLocation();
  const navigate = useNavigate();

  const footerLinks = {
    overview: [
      { name: 'Home', sectionId: 'top' },
      { name: 'Features', sectionId: 'features' },
      { name: 'Screenshots', sectionId: 'screenshots' },
      { name: 'Team', sectionId: 'team' }
    ],
    support: [
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacypolicy' },
      { name: 'Terms', path: '/terms' },
      { name: 'Contact', path: '/contact' }
    ]
  };

  const handleNavigation = (sectionId) => {
    // Check if we're already on home page
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Navigate to home page with section info
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const scrollToSection = (section) => {
    if (section === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if we need to scroll after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location]);

  useEffect(() => {
    let timer;
    if (subscriptionStatus === 'success') {
      timer = setTimeout(() => {
        setSubscriptionStatus('idle');
      }, 8000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [subscriptionStatus]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_cf7o19h',
        'template_c7ki6lw',
        {
          from_name: 'Newsletter Subscription',
          from_email: email,
          message: `New newsletter subscription from: ${email}`,
          reply_to: email,
          to_email: email,
          subject: 'Welcome to MedTrack Newsletter'
        },
        'fVuXiQ6Za49DxAauS'
      );
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setSubscriptionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const SocialLink = ({ icon: Icon, href }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
    >
      <Icon size={16} className="lg:w-[18px] lg:h-[18px]" />
    </motion.a>
  );

  return (
    <div className="relative py-12 lg:py-20">
      {/* Large Faded Brand Name Background */}
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none">
        <div className="text-[8rem] sm:text-[12rem] lg:text-[20rem] font-bold text-white/5 leading-none select-none">
          MedTrack
        </div>
      </div>

      {/* Footer Container with Rounded Edges */}
      <div className="container-custom relative z-10">
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-white/20 p-6 sm:p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Brand Section */}
            <div className="space-y-4 lg:space-y-6 sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center">
                <img 
                  src="/medtrack-logo.png" 
                  alt="MedTrack" 
                  className="h-8 w-8 lg:h-10 lg:w-10"
                />
                <span className="ml-3 text-lg lg:text-xl font-bold text-white">
                  MedTrack<span className="text-secondary">.</span>
                </span>
              </Link>
              <p className="text-white/70 max-w-xs text-sm lg:text-base">
                Revolutionizing medication management with smart technology and intuitive design.
                <span className="block mt-2 text-xs lg:text-sm">By VISTORA TRAYANA LLP</span>
              </p>
              <div className="flex space-x-3 lg:space-x-4">
                <SocialLink icon={Instagram} href="https://www.instagram.com/medtrack.care?igsh=MXY0M2U3NzdpYjdjaA==" />
                <SocialLink icon={Linkedin} href="https://www.linkedin.com/company/105065237/admin/dashboard/" />
                <SocialLink icon={Github} href="https://github.com/VISTORA-TRAYANA-LLP" />
                <SocialLink icon={Mail} href="mailto:support@medtrack.co.in" />
              </div>
            </div>

            {/* Overview Links */}
            <div className="space-y-4 lg:space-y-6">
              <h3 className="font-semibold text-white mb-4 lg:mb-6 text-sm lg:text-base">Overview</h3>
              <ul className="space-y-3 lg:space-y-4">
                {footerLinks.overview.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => handleNavigation(link.sectionId)}
                      className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 ease-in-out text-sm lg:text-base"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
                <li key="deepscribe">
                    <button 
                      onClick={() => window.open('https://deepscribe.netlify.app/', '_blank')}  
                      className="custom-font-size handwritten text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 ease-in-out text-sm lg:text-base"
                    >
                      Deepscribe
                    </button>
                  </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4 lg:space-y-6">
              <h3 className="font-semibold text-white mb-4 lg:mb-6 text-sm lg:text-base">Support</h3>
              <ul className="space-y-3 lg:space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 lg:space-y-6 sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-white mb-4 lg:mb-6 text-sm lg:text-base">Newsletter</h3>
              <AnimatePresence mode="wait">
                <motion.div
                  key={subscriptionStatus}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {subscriptionStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="bg-white/10 rounded-lg p-6 flex flex-col items-center justify-center space-y-4"
                    >
                      <motion.div 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                        className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center"
                      >
                        <Mail className="w-6 h-6 text-secondary" />
                      </motion.div>
                      <motion.h4 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg font-semibold text-white"
                      >
                        Subscribed!
                      </motion.h4>
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/70 text-center text-sm"
                      >
                        Thank you for subscribing to our newsletter.
                      </motion.p>
                    </motion.div>
                  ) : subscriptionStatus === 'error' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white/10 rounded-lg p-6 flex flex-col items-center justify-center space-y-4"
                    >
                      <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-red-500" />
                      </div>
                      <h4 className="text-lg font-semibold text-red-500">Subscription Failed</h4>
                      <p className="text-white/70 text-center text-sm">
                        Sorry, we couldn't subscribe you. Please try again.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSubscriptionStatus('idle')}
                        className="text-sm text-secondary hover:text-secondary/80 transition-colors"
                      >
                        Try again
                      </motion.button>
                    </motion.div>
                  ) : (
                    <>
                      <p className="text-white/70 mb-3 lg:mb-4 text-sm lg:text-base">
                        Subscribe to get the latest updates.
                      </p>
                      <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                        <div className="flex">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            className="flex-1 px-3 py-2 lg:px-4 lg:py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-white placeholder-white/50 text-sm lg:text-base"
                            required
                          />
                          <button
                            type="submit"
                            disabled={isSubmitting || !email}
                            className={`px-3 py-2 lg:px-4 lg:py-2 bg-secondary text-white rounded-r-lg transition-colors ${
                              isSubmitting || !email ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                            }`}
                          >
                            {isSubmitting ? (
                              <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <Mail size={16} className="lg:w-5 lg:h-5" />
                            )}
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 lg:pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-xs lg:text-sm">
                © 2025 MedTrack. All rights reserved.
              </p>
              {/* Bottom Bar Links */}
              <div className="flex space-x-4 lg:space-x-6">
                <Link 
                  to="/privacypolicy" 
                  className="text-white/70 hover:text-white text-xs lg:text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="text-white/70 hover:text-white text-xs lg:text-sm transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Footer;
