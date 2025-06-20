import React from 'react';
export const About = () => {
  return <section id="about" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-stone-800 mb-2 inline-block border-b-2 border-red-700 pb-1">
            About Me
          </h2>
          <p className="text-sm text-stone-500 mb-8">
            {/* 自己紹介 */}
            </p>
          <div className="prose prose-stone lg:prose-lg max-w-none">
            
            <p>
              Born and raised in Nairobi, Kenya, I've always been fascinated by the art of building, whether digital or physical. 
              As a software engineer, I’m passionate about crafting online experiences that are both aesthetically pleasing and deeply functional.
            </p>
            <p>
              After completing my studies in Computer Science, I’ve worked with teams across the globe, with my most fulfilling role being as the lead of a five-person B2C product team. 
              Together, we achieved key milestones that shaped the direction of our product and left a lasting impact.
            </p>
            <p>
              When I’m not building software, you’ll likely find me practicing handstands, throwing kicks in a kickboxing session, or getting lost in a YouTube deep dive. 
              I believe that physical activity fuels mental clarity, and this connection keeps me sharp, creative, and grounded in my work.
            </p>
            {/* <div className="mt-8 flex flex-col sm:flex-row sm:items-center">
              <div className="text-lg font-medium text-stone-800 sm:mr-4">
                My Philosophy:
              </div>
              <div className="mt-2 sm:mt-0 px-4 py-2 bg-indigo-900/10 border-l-4 border-indigo-900 text-stone-700 italic">
                "Simplicity is not the goal. It is the by-product of a good idea
                and modest expectations."
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>;
};