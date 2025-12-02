import React, { useState } from 'react';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AiTaglineGenerator: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [brandName, setBrandName] = useState('');
  const [taglines, setTaglines] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateTaglines = async () => {
    if (!industry || !brandName) {
      setError('Please fill in both fields.');
      return;
    }

    if (!process.env.API_KEY) {
        setError('API Key is missing in environment. Cannot generate.');
        return;
    }

    setLoading(true);
    setError('');
    setTaglines([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Generate 3 catchy, modern, and short marketing slogans (taglines) for a brand named "${brandName}" in the "${industry}" industry. Return ONLY the 3 slogans separated by a pipe character (|). Do not include numbering or quotes.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const text = response.text || '';
      const lines = text.split('|').map(s => s.trim()).filter(s => s.length > 0);
      
      if (lines.length > 0) {
        setTaglines(lines);
      } else {
        setTaglines(['Innovation Redefined', 'Future Ready', 'Design Beyond Limits']); // Fallback if parsing fails
      }
    } catch (err) {
      console.error(err);
      setError('Failed to contact the AI. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="ai-lab" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-neon-blue/5 skew-y-3 transform origin-top-left -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-xs font-bold tracking-wider mb-4">
            <Sparkles size={14} />
            POWERED BY GEMINI 2.5
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
            AI BRANDING <span className="text-transparent [-webkit-text-stroke:1px_#111] dark:[-webkit-text-stroke:1px_white]">LAB</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto transition-colors">
            Experience the future of copywriting. Enter your brand details below and let our integrated AI architect your next slogan.
          </p>
        </div>

        <div className="bg-white dark:bg-neon-card border border-gray-200 dark:border-white/10 p-8 md:p-12 rounded-lg shadow-xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] relative transition-all duration-300">
            {/* Input Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Brand Name</label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g. Lockard Design"
                  className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/20 p-4 text-gray-900 dark:text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all rounded-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Industry</label>
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g. Digital Marketing"
                  className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/20 p-4 text-gray-900 dark:text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all rounded-sm"
                />
              </div>
            </div>

            <button
              onClick={generateTaglines}
              disabled={loading}
              className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold tracking-widest hover:bg-neon-blue dark:hover:bg-neon-blue transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> GENERATING...
                </>
              ) : (
                'GENERATE CONCEPTS'
              )}
            </button>

            {error && (
              <p className="mt-4 text-red-500 text-center text-sm">{error}</p>
            )}

            {/* Results Display */}
            {taglines.length > 0 && (
              <div className="mt-10 grid gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="text-center text-gray-500 text-sm mb-2">AI SUGGESTIONS</div>
                {taglines.map((tag, idx) => (
                  <div key={idx} className="group relative bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 md:p-6 flex justify-between items-center hover:border-neon-blue/50 transition-colors">
                    <span className="font-display text-xl tracking-wide text-gray-800 dark:text-gray-100">{tag}</span>
                    <button
                      onClick={() => copyToClipboard(tag, idx)}
                      className="text-gray-400 hover:text-neon-blue transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedIndex === idx ? <Check size={20} className="text-green-500 dark:text-green-400" /> : <Copy size={20} />}
                    </button>
                    
                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-300 dark:border-white/20 group-hover:border-neon-blue transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-300 dark:border-white/20 group-hover:border-neon-blue transition-colors"></div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default AiTaglineGenerator;
