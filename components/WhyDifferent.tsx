import React from 'react';

const reasons = [
  {
    title: 'Founder-Led Engineering',
    desc: 'Every project is built directly with Will Lockard. No hand-offs, no junior teams, no agency bloat.'
  },
  {
    title: 'Systems, Not Deliverables',
    desc: 'Brands don’t need assets. They need systems that convert attention into revenue.'
  },
  {
    title: 'Speed Without Chaos',
    desc: 'Structured process. Fast execution. Zero guesswork. Every move measured.'
  },
  {
    title: 'Future-Proof Foundations',
    desc: 'AI-enhanced workflows, modern frameworks, and conversion architecture baked into everything.'
  }
];

const WhyDifferent: React.FC = () => {
  return (
    <section id="why-different" className="py-24 bg-gray-50 dark:bg-neon-dark border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
            <span className="text-neon-blue">04.</span> WHY WE’RE DIFFERENT
            </h2>
            <div className="h-1 w-20 bg-gray-900 dark:bg-white transition-colors"></div>
        </div>

        <div className="relative ml-2 md:ml-4">
            {/* Vertical Line */}
            <div className="absolute top-2 bottom-0 left-0 w-[2px] bg-neon-blue shadow-[0_0_15px_#00f3ff]"></div>

            <div className="space-y-16">
                {reasons.map((reason, idx) => (
                    <div key={idx} className="relative pl-10 md:pl-16">
                        {/* Node */}
                        <div className="absolute left-[-7px] top-[6px] w-4 h-4 rounded-full bg-gray-100 dark:bg-black border-2 border-neon-blue shadow-[0_0_10px_#00f3ff] z-10 transition-colors duration-300"></div>
                        
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide transition-colors">
                            {reason.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed transition-colors">
                            {reason.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;