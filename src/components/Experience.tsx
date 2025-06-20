import React from 'react';
import { BriefcaseIcon } from 'lucide-react';
export const Experience = () => {
  const experiences = [{
    company: 'NDOVU',
    location: 'Nairobi, KE',
    position: 'Senior Fullstack Developer',
    period: 'Sep 2021 – Feb 2024',
    achievements: [
      'Led the B2C Frontend team in building the features to facilitate investments from saccos and business groups, rebuilt the portfolio and admin sections.', 
      'Integrated customer.io that currently collects marketing data for more that 15,000 users and handles automated emailing and notifications for select events.', 
      'Built the on-offer ETF feature for government bonds that generated more than $10,000 in its first week.',
      'Built the flow for completion, archiving, and unarchiving user transactions. So far more than 3,000 have been processed by the admins React Frontend.',
      'Implemented the FE consuming API for portfolio value calculations for the different investing types on the platform.'
    ]
  }, {
    company: 'ETINX',
    location: 'Fully Remote,',
    position: 'Fullstack Software Engineer',
    period: 'Apr 2021 – Sep 2021',
    achievements: [
      "I built Phidi as a soleengineer, an online job application platform that allows individuals to bid for engineering jobs from others that post them and receive payment according to the milestones set.", 
      'Worked as a team lead for Kuungana, a USSD saving plan project that helped teach individuals in rural kenya to plan their savings and help them formulate savings’ plans.', 
      'Built the ElasticBeanstalk AWS architecture and flow to make automated deployments on the Phidi project.'
    ]
  }, {
    company: 'ANDELA,',
    location: 'Nairobi, KE',
    position: 'Fullstack Software Engineer',
    period: 'June 2018 - May 2021',
    achievements: [
      'Worked as a fullstack engineer on a web app that allowed userstoperformjirafunctionswithouthavingto access their allocated tasks on jira', 
      'facilitated subtasking of the tickets, time allocation and sent slack notifications to the team’s slack channels regarding milestones.',
      'Worked on building the Andela Meals app.The software automated checking in of employees to meals and collected statistics about meal attendance and feedback.',
      'Worked on Travella, a web based app that automated traveling scheduling,submission of travel documents and booking of guest houses for inter company HQs traveling.']
  }];
  return <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-stone-800 mb-2 inline-block border-b-2 border-red-700 pb-1">
            Experience
          </h2>
          <p className="text-sm text-stone-500">
            {/* 職歴 */}
            </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-0 h-full w-px bg-stone-200" />
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-[23px] h-[23px] rounded-full border-4 border-red-700 bg-white" />
              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl text-stone-800 font-medium">
                      {exp.company}
                    </h3>
                    <p className="text-stone-600">{exp.position}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-stone-500 text-sm">
                      <BriefcaseIcon size={14} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="text-stone-500 text-sm">{exp.location}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-900/80 rounded-full mt-[0.6rem] mr-2 shrink-0" />
                      <span className="text-stone-600">{achievement}</span>
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};