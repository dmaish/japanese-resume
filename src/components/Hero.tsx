import React from 'react';

export const Hero = () => {
  return <section id="home" className="pt-24 pb-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-5xl font-light text-stone-800 mb-6">
              {/* <span className="block">こんにちは</span> */}
              <span className="block mt-2">I'm Daniel Maina</span>
            </h2>
            <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed">
              Software Engineer with 6+ years of turning product ideas into reliable code, scalable systems, and shipped features.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-md transition-colors duration-300">
                Get in Touch
              </a>
              <a href="#projects" className="px-6 py-3 border border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white rounded-md transition-colors duration-300">
                View Projects
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-indigo-900/10 rounded-3xl transform rotate-6"></div>
                <img src="/src/assets/portrait2.png" alt="Japanese garden with cherry blossoms" className="rounded-3xl object-cover w-full h-full relative z-10 shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};