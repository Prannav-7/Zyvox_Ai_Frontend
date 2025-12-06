import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Logo } from './ui/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/16465894168?text=Hi%20Zyvox%20AI%2C%20I%20would%20like%20to%20plan%20my%20investments.', '_blank');
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Services', href: '#services' },
    { name: 'How it Works', href: '#video-section' },
  ];

  return (
    <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
            backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between
            ${scrolled ? 'bg-[#0f172a]/80 shadow-lg shadow-black/20' : 'bg-transparent border-transparent'}
        `}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Logo className="w-8 h-8 relative z-10" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Zyvox<span className="text-emerald-400">AI</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>

            <div className="hidden md:flex items-center gap-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'w-10 h-10'
                    }
                  }}
                />
              </SignedIn>
              <button 
                onClick={handleWhatsApp}
                className="bg-white text-slate-900 hover:bg-emerald-50 px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5"
              >
                <MessageCircle size={16} className="text-emerald-600" />
                Chat Now
              </button>
            </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-[#1e293b] border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden"
          >
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {link.name}
                </button>
              ))}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="w-full mt-2 bg-emerald-500 text-white px-4 py-3 rounded-xl font-bold">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center justify-between px-4 py-3 mt-2 bg-white/5 rounded-xl">
                  <span className="text-slate-300 font-medium">Account</span>
                  <UserButton 
                    appearance={{
                      elements: {
                        userButtonAvatarBox: 'w-8 h-8'
                      }
                    }}
                  />
                </div>
              </SignedIn>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  handleWhatsApp();
                }}
                className="w-full mt-4 bg-emerald-500 text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
