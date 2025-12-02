import React from 'react';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background overlay to dim the global grid */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-[2px] transition-colors duration-300"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
            {/* Left Image */}
            <div className="relative group mx-auto lg:mx-0 max-w-md lg:max-w-none w-full">
                {/* Image container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-2xl bg-gray-900 flex items-center justify-center border border-gray-200 dark:border-white/5">
                    {/* Direct reference to public folder image - No Imports causing crashes */}
                    <img 
                        src="/will_lockard.jpg" 
                        alt="Will Lockard" 
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-1/2 h-24 border-l border-b border-neon-blue/50 opacity-60"></div>
                <div className="absolute -top-4 -right-4 w-1/2 h-24 border-r border-t border-neon-blue/50 opacity-60"></div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col">
                <div className="mb-10">
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors uppercase tracking-tight">
                    <span className="text-neon-blue">05.</span> DESIGNED BY <br/>WILL LOCKARD
                    </h2>
                    <div className="h-1 w-20 bg-gray-900 dark:bg-white transition-colors"></div>
                </div>

                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                    <p>
                        I’m Will Lockard, a designer and strategist obsessed with building brands that feel inevitable. I launched Lockard Design Co. because founders kept coming to me with the same problem: they had vision, ambition, and momentum — but their digital presence was stuck in the past.
                    </p>
                    <p>
                        Today I build digital flagships and performance systems that combine design precision, engineering logic, and AI-enhanced workflows. I don’t hand you assets. I architect the engine your brand runs on.
                    </p>
                    <p>
                        Every project I take on is founder-led, fast, and intentional. If you’re building something real and you need a partner who can bring order, clarity, and conversion-focused execution — this is where we build it.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 mt-10 mb-12">
                     <a
                        href="#contact"
                        className="flex-1 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold tracking-widest hover:bg-neon-blue dark:hover:bg-neon-blue hover:scale-[1.02] transition-all duration-300 shadow-lg dark:shadow-none text-center"
                    >
                        START YOUR FLAGSHIP
                    </a>
                    <a
                        href="#contact"
                        className="flex-1 px-8 py-4 border border-gray-900 dark:border-white/20 text-gray-900 dark:text-white font-bold tracking-widest hover:border-neon-blue hover:text-neon-blue hover:bg-neon-blue/5 transition-all duration-300 text-center"
                    >
                        BOOK WITH WILL
                    </a>
                </div>
                
                 {/* Micro-details Bar */}
                <div className="border-t border-gray-300 dark:border-white/10 pt-8">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 text-center leading-loose font-medium">
                        Founder-Led Execution <span className="text-neon-blue px-1 md:px-2">─</span> Built in the United States <span className="text-neon-blue px-1 md:px-2">─</span> Future-Driven Workflows <span className="text-neon-blue px-1 md:px-2">─</span> Systems, Not Deliverables
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;