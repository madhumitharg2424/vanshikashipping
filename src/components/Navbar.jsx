import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.png" alt="VSF Logo" className="h-10 md:h-12 w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-primary leading-none tracking-wide">
              VANSHIKAA
            </span>
            <span className="text-xs md:text-sm font-medium text-primary mt-1 leading-none">
              Shipping and Forwarding
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-dark font-medium hover:text-primary transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="bg-primary hover:bg-gold text-white px-6 py-2.5 rounded-full font-medium transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            Get Shipping Quote
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg absolute w-full left-0 top-full"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-dark font-medium text-lg border-b border-gray-50 pb-2 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white text-center px-6 py-3 rounded-md font-medium mt-2"
              >
                Get Shipping Quote
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
