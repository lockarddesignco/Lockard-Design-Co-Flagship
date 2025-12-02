import React from 'react';

const projects = [
  {
    title: 'Neon Cybernetics',
    category: 'Branding / UI',
    image: 'https://picsum.photos/800/600?random=1',
  },
  {
    title: 'Flux Energy',
    category: 'Web Development',
    image: 'https://picsum.photos/800/800?random=2',
  },
  {
    title: 'Apex Apparel',
    category: 'E-commerce',
    image: 'https://picsum.photos/800/600?random=3',
  },
  {
    title: 'Zenith Architect',
    category: 'Visual Identity',
    image: 'https://picsum.photos/800/800?random=4',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-gray-100 dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
              <span className="text-neon-blue">02.</span> SELECTED WORKS
            </h2>
            <div className="h-1 w-20 bg-gray-900 dark:bg-white transition-colors"></div>
          </div>
          <a href="#" className="text-sm font-bold tracking-widest border-b border-neon-blue pb-1 text-gray-800 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-blue transition-colors">
            VIEW ALL PROJECTS
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative cursor-pointer overflow-hidden shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-white/90 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-neon-blue tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;