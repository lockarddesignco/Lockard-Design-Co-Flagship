import React from 'react';
import { Palette, Rocket, Code, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Palette size={32} />,
    title: 'Brand Systems',
    description: 'Identities built as systems, not moodboards. Logos, type, color, and rules that keep your brand sharp across every touchpoint.',
  },
  {
    icon: <Code size={32} />,
    title: 'Digital Flagships',
    description: 'High speed, conversion focused sites built on modern frameworks. Strategy, UX, and UI engineered to turn traffic into pipeline.',
  },
  {
    icon: <Rocket size={32} />,
    title: 'Performance Campaigns',
    description: 'Full funnel campaigns across paid, email, and landing pages. Creative, offers, and tracking built to test fast and scale what works.',
  },
  {
    icon: <Cpu size={32} />,
    title: 'AI Automation',
    description: 'Practical AI stitched into your stack. Workflows, internal tools, and content systems that save hours and unlock new revenue.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-neon-dark border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
            <span className="text-neon-blue">01.</span> WHAT WE BUILD
          </h2>
          <div className="h-1 w-20 bg-gray-900 dark:bg-white transition-colors"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-200 dark:border-white/10 bg-white dark:bg-neon-card hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden shadow-sm dark:shadow-none"
            >
              <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-gray-500 dark:text-gray-400 group-hover:text-neon-blue mb-6 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="relative z-10 font-display text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">
                {service.title}
              </h3>
              
              <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;