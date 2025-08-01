import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/')}
          >
            <img 
              src="/medtrack-logo.png" 
              alt="MedTrack" 
              className="h-10 w-10"
            />
            <span className="ml-3 text-xl font-bold text-white">
              MedTrack
              <span className="text-secondary">.</span>
            </span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => handleScroll('features')}>Features</NavLink>
            <NavLink onClick={() => handleScroll('screenshots')}>App</NavLink>
            <NavLink onClick={() => handleScroll('how-it-works')}>How It Works</NavLink>
            <NavLink onClick={() => handleScroll('team')}>Team</NavLink>
            <motion.a
              href="https://getwaitlist.com/waitlist/22253"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/90 hover:bg-white text-slate-900 px-6 py-2 rounded-full transition-all duration-300"
            >
              Join Waitlist
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 fixed w-full top-20 left-0"
          >
            <div className="container-custom py-4 space-y-4">
              <MobileNavLink onClick={() => handleScroll('features')}>Features</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('screenshots')}>App</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('how-it-works')}>How It Works</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('team')}>Team</MobileNavLink>
              <motion.a
                href="https://getwaitlist.com/waitlist/22253"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center bg-white/90 hover:bg-white text-slate-900 px-6 py-2 rounded-full transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <motion.button
    onClick={onClick}
    className="text-white/80 hover:text-white transition-colors relative group font-medium"
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
  </motion.button>
);

const MobileNavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <motion.button
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
  >
    {children}
  </motion.button>
);

export default Navbar;