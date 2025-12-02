import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#020202] border-t border-gray-200 dark:border-white/10 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white tracking-tighter mb-2 transition-colors">
            LOCKARD<span className="text-neon-blue">DESIGN</span>_CO
          </h3>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Lockard Design Co. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Github size={20} /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
