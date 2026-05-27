import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];
  const isHomePage = location.pathname === '/';
  const shouldBeSolid = isScrolled || isMobileMenuOpen || !isHomePage;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        shouldBeSolid ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 z-50 font-heading" onClick={() => setIsMobileMenuOpen(false)}>
            {/* Logo badge with spinning hover animation like a compass */}
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shadow-lg border border-secondary/35 bg-dark"
            >
              <img src="/logo.png" alt="NSSR Logo" className="w-full h-full object-cover" />
            </motion.div>
            <span className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 ${shouldBeSolid ? 'text-dark' : 'text-white drop-shadow-md'}`}>
              Nordic Safari
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative py-1 font-medium transition-colors duration-300"
                >
                  <span className={`transition-colors duration-300 ${
                    isActive
                      ? 'text-accent'
                      : shouldBeSolid
                      ? 'text-dark hover:text-accent'
                      : 'text-white hover:text-secondary drop-shadow-md'
                  }`}>
                    {link.name}
                  </span>
                  {/* Sliding Underline Indicator using layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </Link>
              );
            })}
            
            {/* Book Now Button with spring hover scaling */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <Link to="/packages" className="px-6 py-2 bg-primary hover:bg-primary-light text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-xl block">
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 p-2 rounded-full hover:bg-black/5 ${shouldBeSolid ? 'text-dark' : 'text-white drop-shadow-md'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 w-full bg-white pt-24 px-6 md:hidden flex flex-col gap-6 overflow-hidden border-t border-gray-100"
          >
            {links.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-heading font-semibold text-dark hover:text-accent transition-colors block py-2"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div 
              className="pt-6 mt-4 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <Link
                to="/packages"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-4 bg-primary text-white rounded-xl font-medium text-lg shadow-lg hover:bg-primary-light transition-colors"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
