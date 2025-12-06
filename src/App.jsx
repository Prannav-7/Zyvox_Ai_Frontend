import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Footer from './components/Footer';
import Intro from './components/Intro';
import { useSyncUserToMongoDB } from './hooks/useSyncUserToMongoDB';

function App() {
  const [loading, setLoading] = useState(true);
  const [introFinished, setIntroFinished] = useState(false);
  
  // Sync user data with MongoDB
  useSyncUserToMongoDB();

  // Lock scroll during intro
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-emerald-500/30 relative">
      
      {/* Intro Overlay */}
      <AnimatePresence mode="wait" onExitComplete={() => setIntroFinished(true)}>
        {loading && <Intro onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-0">
        <Navbar />
        <main>
          {/* Pass introFinished state to Hero to sync animations */}
          <Hero startAnimation={introFinished} />
          <Features />
          <Services />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
