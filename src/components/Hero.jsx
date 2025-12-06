import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, ShieldCheck, TrendingUp } from 'lucide-react';
import { Spotlight } from './ui/Spotlight';
import { Logo } from './ui/Logo';

const ChatMessage = ({ text, isUser, delay, start }) => (
  <motion.div
    initial={{ opacity: 0, x: isUser ? 20 : -20, y: 10 }}
    animate={start ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isUser ? 20 : -20, y: 10 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
  >
    <div
      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg backdrop-blur-md ${
        isUser
          ? 'bg-emerald-600/90 text-white rounded-tr-none border border-emerald-500/50'
          : 'bg-slate-800/80 border border-white/10 text-gray-200 rounded-tl-none'
      }`}
    >
      {text}
    </div>
  </motion.div>
);

const Hero = ({ startAnimation }) => {
  // We use local state to trigger animations only when startAnimation becomes true
  // This ensures the hero waits for the intro to finish

  const handleWhatsApp = () => {
    window.open('https://wa.me/16465894168?text=Hi%20Zyvox%20AI%2C%20I%20would%20like%20to%20plan%20my%20investments.', '_blank');
  };

  const scrollToFooter = () => {
    const footerSection = document.querySelector('#video-section');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020617]">
      {/* 3D Lighting Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-grid-white/[0.02] bg-[bottom_1px_center] pointer-events-none mask-image-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center perspective-1000">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AI-Powered Wealth Management
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Invest with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                Superhuman
              </span> <br />
              Intelligence.
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Zyvox acts as your personal financial architect. It analyzes, plans, and optimizes your wealth using advanced AI models—all through a simple chat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={handleWhatsApp}
                className="group relative px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Start Planning Free</span>
                <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToFooter}
                className="px-8 py-4 bg-slate-800/50 text-white border border-white/10 font-semibold rounded-full hover:bg-slate-800 transition-all backdrop-blur-sm"
              >
                View Demo
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500 border-t border-white/5 pt-8">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-500" />
                <span>12% Avg. Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>SEBI Compliant Logic</span>
              </div>
            </div>
          </motion.div>

          {/* 3D Floating Phone */}
          <motion.div
            initial={{ opacity: 0, rotateY: -30, rotateX: 10, z: -100 }}
            animate={startAnimation ? { opacity: 1, rotateY: -15, rotateX: 5, z: 0 } : {}}
            transition={{ duration: 1.2, type: "spring", bounce: 0.2, delay: 0.4 }}
            className="relative hidden lg:block"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Decorative Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />

            <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto border-slate-800 bg-[#0B0F19] border-[8px] rounded-[3rem] h-[700px] w-[380px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10"
            >
              {/* Dynamic Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-50 rounded-[2.5rem]" />

              {/* Phone Header */}
              <div className="h-[70px] bg-slate-900/80 backdrop-blur-md flex items-center px-6 border-b border-white/5 z-20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-emerald-900/20">
                   <Logo className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-bold text-white">Zyvox AI</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-emerald-400 font-medium">Active Now</span>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-5 overflow-hidden flex flex-col relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="relative z-10 mt-auto space-y-4">
                  <ChatMessage 
                    text="Welcome back, Arjun! 👋 Ready to review your portfolio?" 
                    isUser={false} 
                    delay={0.2} 
                    start={startAnimation}
                  />
                  <ChatMessage 
                    text="Yes, I want to plan for my retirement." 
                    isUser={true} 
                    delay={1.2} 
                    start={startAnimation}
                  />
                  <ChatMessage 
                    text="Great choice. Based on your age (28) and income, I recommend an aggressive equity split." 
                    isUser={false} 
                    delay={2.2} 
                    start={startAnimation}
                  />
                   <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={startAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 3.2 }}
                    className="bg-slate-800/80 border border-white/10 rounded-2xl p-3 text-xs text-gray-300 shadow-lg"
                  >
                    <div className="flex justify-between mb-2 pb-2 border-b border-white/5">
                        <span>SIP Amount</span>
                        <span className="text-white font-bold">₹15,000/mo</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Projected (20Y)</span>
                        <span className="text-emerald-400 font-bold">₹2.4 Cr</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[75%]" />
                    </div>
                  </motion.div>
                  <ChatMessage 
                    text="Shall I set this up for you?" 
                    isUser={false} 
                    delay={4.2} 
                    start={startAnimation}
                  />
                </div>
              </div>

              {/* Input Area */}
              <div className="h-[80px] bg-slate-900/80 backdrop-blur-md flex items-center px-5 border-t border-white/5 gap-3 z-20">
                <div className="flex-1 h-10 bg-slate-800/50 rounded-full px-4 text-sm flex items-center text-gray-500 border border-white/5">
                  Yes, proceed...
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform cursor-pointer">
                  <Send size={18} className="text-white ml-0.5" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
