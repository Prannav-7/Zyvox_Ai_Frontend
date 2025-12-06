import React from 'react';
import { motion } from 'framer-motion';

export const Logo = ({ className = "w-12 h-12", animated = false, delay = 0 }) => {
  // Animation variants for the drawing effect
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
        delay: delay
      }
    }
  };

  const fillVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, delay: delay + 1.2 } 
    }
  };

  // If not animated (e.g. in Navbar), show static full logo
  if (!animated) {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" /> {/* Amber 400 */}
            <stop offset="100%" stopColor="#d97706" /> {/* Amber 600 */}
          </linearGradient>
          <linearGradient id="arrowGradient" x1="0" y1="0" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" /> {/* Emerald 400 */}
            <stop offset="100%" stopColor="#10b981" /> {/* Emerald 500 */}
          </linearGradient>
          <linearGradient id="iconGradient" x1="0" y1="0" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#8b5cf6" /> {/* Violet 500 */}
             <stop offset="100%" stopColor="#6366f1" /> {/* Indigo 500 */}
          </linearGradient>
        </defs>

        {/* Bars */}
        <rect x="10" y="55" width="15" height="35" rx="2" fill="url(#barGradient)" />
        <rect x="30" y="40" width="15" height="50" rx="2" fill="url(#barGradient)" />
        <rect x="50" y="48" width="15" height="42" rx="2" fill="url(#barGradient)" />
        <rect x="70" y="25" width="15" height="65" rx="2" fill="url(#barGradient)" />

        {/* Top Icon (Basket/Container with Z) */}
        <g transform="translate(65, 5) scale(0.8)">
            <path d="M5 10 H30 L25 30 H10 L5 10Z" fill="url(#iconGradient)" />
            <text x="18" y="24" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Z</text>
        </g>

        {/* Arrow - Black outline for contrast then filled */}
        <path 
            d="M5 75 L25 60 L45 75 L65 45 L95 25" 
            stroke="#020617" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
        <path 
            d="M5 75 L25 60 L45 75 L65 45 L95 25" 
            stroke="url(#arrowGradient)" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
        {/* Arrow Head */}
        <path d="M85 25 H95 V35" stroke="url(#arrowGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // Animated Version for Intro
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="barGradientAnim" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="arrowGradientAnim" x1="0" y1="0" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="iconGradientAnim" x1="0" y1="0" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#8b5cf6" /> 
             <stop offset="100%" stopColor="#6366f1" /> 
        </linearGradient>
      </defs>

      {/* Bars - Draw outlines first, then fill */}
      <motion.rect 
        x="10" y="55" width="15" height="35" rx="2" 
        stroke="#fbbf24" strokeWidth="2" fill="transparent"
        variants={pathVariants} initial="hidden" animate="visible"
      />
      <motion.rect 
        x="10" y="55" width="15" height="35" rx="2" 
        fill="url(#barGradientAnim)" stroke="none"
        variants={fillVariants} initial="hidden" animate="visible"
      />

      <motion.rect 
        x="30" y="40" width="15" height="50" rx="2" 
        stroke="#fbbf24" strokeWidth="2" fill="transparent"
        variants={pathVariants} initial="hidden" animate="visible"
      />
      <motion.rect 
        x="30" y="40" width="15" height="50" rx="2" 
        fill="url(#barGradientAnim)" stroke="none"
        variants={fillVariants} initial="hidden" animate="visible"
      />

      <motion.rect 
        x="50" y="48" width="15" height="42" rx="2" 
        stroke="#fbbf24" strokeWidth="2" fill="transparent"
        variants={pathVariants} initial="hidden" animate="visible"
      />
      <motion.rect 
        x="50" y="48" width="15" height="42" rx="2" 
        fill="url(#barGradientAnim)" stroke="none"
        variants={fillVariants} initial="hidden" animate="visible"
      />

      <motion.rect 
        x="70" y="25" width="15" height="65" rx="2" 
        stroke="#fbbf24" strokeWidth="2" fill="transparent"
        variants={pathVariants} initial="hidden" animate="visible"
      />
      <motion.rect 
        x="70" y="25" width="15" height="65" rx="2" 
        fill="url(#barGradientAnim)" stroke="none"
        variants={fillVariants} initial="hidden" animate="visible"
      />

      {/* Top Icon */}
      <motion.g 
        transform="translate(65, 5) scale(0.8)"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 1.5, duration: 0.5 }}
      >
          <path d="M5 10 H30 L25 30 H10 L5 10Z" fill="url(#iconGradientAnim)" />
          <text x="18" y="24" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Z</text>
      </motion.g>

      {/* Arrow */}
      <motion.path 
        d="M5 75 L25 60 L45 75 L65 45 L95 25" 
        stroke="url(#arrowGradientAnim)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        variants={pathVariants} initial="hidden" animate="visible"
      />
      <motion.path 
        d="M85 25 H95 V35" 
        stroke="url(#arrowGradientAnim)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        variants={pathVariants} initial="hidden" animate="visible"
      />
    </svg>
  );
};
