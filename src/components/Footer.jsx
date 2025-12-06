import React from 'react';
import { Github, Twitter, Linkedin, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './ui/Logo';

const Footer = () => {
  return (
    <>
      {/* Video Section */}
      <section id="video-section" className="py-32 bg-[#020617] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Watch <span className="text-emerald-400">How It Works</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              See how Zyvox AI transforms your wealth management in real-time
            </p>
          </div>

          {/* YouTube Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 border border-white/10"
          >
            <div className="relative w-full bg-black/50 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Zyvox AI Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Video Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-slate-900/50 border border-white/5 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">The Zyvox Advantage</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <Play size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                <span>AI-powered financial planning in minutes, not hours</span>
              </li>
              <li className="flex items-start gap-3">
                <Play size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                <span>Personalized investment strategies based on your goals</span>
              </li>
              <li className="flex items-start gap-3">
                <Play size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                <span>Tax optimization and wealth growth through proven methods</span>
              </li>
              <li className="flex items-start gap-3">
                <Play size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                <span>24/7 access to your financial advisor in your pocket</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-8 h-8" />
              <span className="font-bold text-xl text-white">Zyvox<span className="text-emerald-400">AI</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Your automated financial advisor. Helping you invest smarter, save taxes, and build wealth for the future.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">SIP Planning</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Tax Saving</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Retirement</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Insurance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 Zyvox AI. All rights reserved. Not a registered investment advisor.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;