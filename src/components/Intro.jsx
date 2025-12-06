import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './ui/Logo';

const Intro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); 
  // 0: Logo Draw
  // 1: Text Collision
  // 2: Power Effect (Glow)
  // 3: Fade Out

  useEffect(() => {
    // Timeline
    // 0.0s: Start Logo Draw
    // 2.0s: Start Text Entry (Phase 1)
    // 3.0s: Power Effect (Phase 2)
    // 4.5s: Fade Out (Phase 3)
    // 5.5s: Unmount (onComplete)

    const timer1 = setTimeout(() => setPhase(1), 2000);
    const timer2 = setTimeout(() => setPhase(2), 3200);
    const timer3 = setTimeout(() => {
        setPhase(3);
        onComplete(); // Trigger unmount in parent, AnimatePresence handles exit
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617] overflow-hidden"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Cinematic Background Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      
      {/* Power/Explosion Effect Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
            opacity: phase >= 2 ? 0.6 : 0, 
            scale: phase >= 2 ? 4 : 0 
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-radial from-emerald-500/30 via-transparent to-transparent pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        
        {/* Logo Container */}
        <motion.div 
            className="relative w-32 h-32 mb-12"
            animate={{
                y: phase >= 1 ? -20 : 0,
                scale: phase >= 2 ? 1.2 : 1
            }}
            transition={{ duration: 0.8 }}
        >
          <Logo className="w-full h-full drop-shadow-2xl relative z-10" animated={true} delay={0} />
        </motion.div>

        {/* Text Collision Container */}
        <div className="h-24 flex items-center justify-center overflow-visible relative">
            {/* Left Text: Zyvox */}
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ 
                    x: phase >= 1 ? 0 : -300, 
                    opacity: phase >= 1 ? 1 : 0 
                }}
                transition={{ 
                    duration: 1, 
                    type: "spring", 
                    bounce: 0.3 
                }}
                className="text-6xl md:text-8xl font-bold text-white tracking-tighter z-10"
            >
                Zyvox
            </motion.div>

            {/* Right Text: AI */}
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ 
                    x: phase >= 1 ? 0 : 300, 
                    opacity: phase >= 1 ? 1 : 0 
                }}
                transition={{ 
                    duration: 1, 
                    type: "spring", 
                    bounce: 0.3 
                }}
                className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tighter z-10 ml-2"
            >
                AI
            </motion.div>
            
            {/* Impact Flash at center */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                    opacity: phase === 2 ? [0, 1, 0] : 0,
                    scale: phase === 2 ? [0.5, 2, 3] : 0.5
                }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white blur-[50px] rounded-full z-0"
            />
        </div>

        <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: phase >= 2 ? 1 : 0 }}
             transition={{ duration: 0.8 }}
             className="text-slate-400 text-sm tracking-[0.5em] uppercase mt-8 font-medium"
        >
            Financial Intelligence
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Intro;
