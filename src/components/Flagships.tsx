import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    title: 'AERO SYSTEMS',
    description: 'A minimal, high-performance interface for next-gen aerospace logistics. Reduced latency by 40%.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'CARBON FINANCE',
    description: 'Decentralized trading platform with real-time data visualization. Engineered for heavy frequency trading.',
    image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'NEBULA CLOUD',
    description: 'Global infrastructure mapping for an AI-driven cloud provider. Scalable architecture for millions of nodes.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  }
];

interface ProjectPanelProps {
  data: typeof cases[0];
  index: number;
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({ data, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } // Trigger when 15% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
    >
      {/* Cinematic Image - Left */}
      <div className="w-full lg:w-7/12 aspect-[3/4] md:aspect-[16/9] lg:aspect-[16/10] overflow-hidden relative group shadow-2xl">
        {/* Overlays for mood */}
        <div className="absolute inset-0 bg-neon-blue/20 mix-blend-overlay z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-700"></div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
        
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover filter grayscale contrast-[1.1] brightness-[0.8] group-hover:grayscale-[20%] group-hover:brightness-[0.9] transition-all duration-[1.5s] ease-in-out transform group-hover:scale-105"
        />
        
        {/* Subtle scanline effect overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
      </div>

      {/* Content - Right */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center items-start">
        <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tighter leading-none">
          {data.title}
        </h3>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-md leading-relaxed font-light">
          {data.description}
        </p>
        <button className="group flex items-center gap-4 px-8 py-4 border border-gray-900 dark:border-white/20 text-gray-900 dark:text-white font-bold tracking-[0.2em] text-sm uppercase hover:border-neon-blue hover:text-neon-blue dark:hover:border-neon-blue dark:hover:text-neon-blue transition-all duration-300">
          View Case
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

const Flagships: React.FC = () => {
  return (
    <section id="flagships" className="py-32 bg-gray-50 dark:bg-[#050505] transition-colors duration-300 relative overflow-hidden border-t border-gray-200 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-32">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
            <span className="text-neon-blue">06.</span> DIGITAL FLAGSHIPS
          </h2>
          <div className="h-1 w-20 bg-gray-900 dark:bg-white transition-colors"></div>
        </div>

        {/* Vertical Stack */}
        <div className="flex flex-col gap-32 md:gap-48">
          {cases.map((c, i) => (
            <ProjectPanel key={i} data={c} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Flagships;
