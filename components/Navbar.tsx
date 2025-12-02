import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'AI Lab', href: '#ai-lab' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled || isOpen
          ? 'bg-white/90 dark:bg-neon-dark/90 backdrop-blur-md border-black/5 dark:border-white/10 py-4 shadow-sm dark:shadow-none'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="font-display font-bold text-2xl tracking-tighter text-gray-900 dark:text-white transition-colors">LOCKARD</span>
          <span className="font-display font-bold text-2xl tracking-tighter text-transparent neon-text-outline group-hover:text-neon-blue transition-colors duration-300">DESIGN</span>
          <span className="font-display font-bold text-2xl tracking-tighter text-gray-900 dark:text-white transition-colors">_CO</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-neon-blue dark:hover:text-neon-blue hover:scale-105 transition-all duration-300 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-neon-blue dark:hover:text-neon-blue hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="#contact"
            className="px-6 py-2 border border-neon-blue text-neon-blue text-sm font-bold tracking-wider hover:bg-neon-blue hover:text-black transition-all duration-300 neon-glow"
          >
            START PROJECT
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-gray-900 dark:text-white hover:text-neon-blue transition-colors"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          
          <button
            className="text-gray-900 dark:text-white hover:text-neon-blue transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-neon-card border-b border-black/10 dark:border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-display text-gray-600 dark:text-gray-300 hover:text-neon-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;