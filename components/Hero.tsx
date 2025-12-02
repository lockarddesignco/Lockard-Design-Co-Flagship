import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 
         Removed large colored blobs to prioritize the clean, minimal, high-tech holographic grid background.
         The ambient activity is now handled by the grid itself.
      */}

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        
        {/* Main Logo Recreation */}
        <h1 className="flex flex-col md:flex-row items-center justify-center font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-8 select-none">
          <span className="text-gray-900 dark:text-white drop-shadow-lg transition-colors">LOCKARD</span>
          <span className="neon-text-outline md:mx-2 relative group cursor-default transition-all duration-500 hover:drop-shadow-[0_0_30px_rgba(0,243,255,0.8)]">
            DESIGN
            {/* Glitch effect overlay purely visual */}
            <span className="absolute top-0 left-0 -ml-1 opacity-0 group-hover:opacity-50 text-neon-blue animate-ping duration-75" aria-hidden="true">DESIGN</span>
          </span>
          <div className="flex items-baseline">
            <span className="text-gray-900 dark:text-white transition-colors">_CO</span>
            <span className="inline-block w-4 h-4 md:w-8 md:h-8 bg-gray-900 dark:bg-white ml-2 animate-pulse transition-colors"></span>
          </div>
        </h1>

        <p className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light tracking-wide mb-10 leading-relaxed transition-colors">
          Designed by <span className="text-gray-900 dark:text-white font-medium transition-colors">Will Lockard</span>, we build digital flagships and performance funnels that push brands into their <span className="text-neon-blue font-medium">future, fast</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#contact"
            className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold tracking-widest hover:bg-neon-blue dark:hover:bg-neon-blue hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-none"
          >
            Work With Us
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold tracking-widest hover:border-neon-blue hover:text-neon-blue hover:bg-neon-blue/5 transition-all duration-300"
          >
            Explore Solutions
          </a>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-600">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;