import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
              LET'S CREATE <br />
              <span className="text-neon-blue">THE FUTURE.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed transition-colors">
              Ready to elevate your brand? We're currently accepting new partnerships for Q4. Drop us a line or visit our HQ.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-sm text-neon-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">Headquarters</h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">101 Cyber Boulevard,<br />Neo Tokyo District, 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-sm text-neon-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">hello@lockarddesign.co</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-sm text-neon-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">Call Us</h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">+1 (555) 012-3456</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6 p-8 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-neon-card/50 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
                <input type="text" className="w-full bg-white dark:bg-black border border-gray-300 dark:border-white/20 p-3 text-gray-900 dark:text-white focus:border-neon-blue focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                <input type="email" className="w-full bg-white dark:bg-black border border-gray-300 dark:border-white/20 p-3 text-gray-900 dark:text-white focus:border-neon-blue focus:outline-none transition-colors" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Subject</label>
              <select className="w-full bg-white dark:bg-black border border-gray-300 dark:border-white/20 p-3 text-gray-900 dark:text-white focus:border-neon-blue focus:outline-none transition-colors">
                <option>General Inquiry</option>
                <option>Start a Project</option>
                <option>Career Opportunities</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
              <textarea rows={5} className="w-full bg-white dark:bg-black border border-gray-300 dark:border-white/20 p-3 text-gray-900 dark:text-white focus:border-neon-blue focus:outline-none transition-colors"></textarea>
            </div>

            <button type="button" className="w-full py-4 bg-neon-blue text-black font-bold tracking-widest hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300">
              SEND MESSAGE
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;