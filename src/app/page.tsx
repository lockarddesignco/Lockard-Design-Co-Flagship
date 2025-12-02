"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import WhyDifferent from '@/components/WhyDifferent';
import Founder from '@/components/Founder';
import Flagships from '@/components/Flagships';
import AiTaglineGenerator from '@/components/AiTaglineGenerator';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HolographicBackground from '@/components/HolographicBackground';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden transition-colors duration-300">
      {/* Animated Background */}
      <HolographicBackground theme={theme} />
      
      <Navbar scrolled={scrolled} theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative z-10 flex flex-col gap-0 pb-20">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <WhyDifferent />
        <Founder />
        <Flagships />
        <AiTaglineGenerator />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
