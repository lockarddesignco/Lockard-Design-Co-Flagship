import React from 'react';
import { ScanSearch, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <ScanSearch size={32} />,
    title: 'Diagnose',
    description: 'We audit your current ecosystem, identify bottlenecks, and map out the highest-leverage opportunities for growth.'
  },
  {
    icon: <PenTool size={32} />,
    title: 'Design',
    description: 'We engineer systems, not just visuals. High-fidelity prototypes and conversion-focused architectures that align with your business goals.'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Deploy',
    description: 'Rapid execution and seamless launch. We ship production-ready assets and optimize based on real-world performance data.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-neon-dark border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
            <span className="text-neon-blue">03.</span> HOW WE WORK
          </h2>
          <div className="h-1 w-20 bg-gray-900 dark:bg-white transition-colors"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-200 dark:border-white/10 bg-white dark:bg-neon-card hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden shadow-sm dark:shadow-none rounded-sm"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-gray-500 dark:text-gray-400 group-hover:text-neon-blue mb-6 transition-colors duration-300">
                {step.icon}
              </div>
              
              <h3 className="relative z-10 font-display text-2xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">
                {step.title}
              </h3>
              
              <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
