import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';
export const Projects = () => {
  const projects = [{
    title: 'Ndovu Invest',
    description: 'Ndovu is a digital investment platform designed to make investments in local and global financial markets more accessible, secure and affordable.',
    image: '/src/assets/ndovu.png',
    tags: ['React', 'NestJS', 'NodeJS'],
    url: 'https://portal.ndovu.co/auth/login'
  }, {
    title: 'Next Hive',
    description: 'A minimalist portfolio template celebrating the beauty of imperfection.',
    image: '/src/assets/nexthive.png',
    tags: ['HTML/CSS', 'JavaScript', 'Webflow'],
    url: 'https://nexthive.webflow.io/'
  }, {
    title: 'Travella',
    description: "Travella was a web app that automated travel management processes of Andela employees.",
    image: '/src/assets/travella.png',
    tags: ['React', 'Express.js', 'Postgresql']
  }];
  
  return <section id="projects" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-stone-800 mb-2 inline-block border-b-2 border-red-700 pb-1">
            Projects
          </h2>
          <p className="text-sm text-stone-500">
            {/* プロジェクト */}
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="aspect-video relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a href={project.url} className="text-white flex items-center">
                    View Project <ExternalLinkIcon size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-stone-800 mb-2">{project.title}</h3>
                <p className="text-stone-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => <span key={idx} className="px-3 py-1 bg-indigo-900/10 text-indigo-900 text-sm rounded-full">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};