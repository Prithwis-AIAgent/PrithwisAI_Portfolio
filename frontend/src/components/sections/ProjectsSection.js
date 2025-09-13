import React from 'react';
import { ExternalLinkIcon } from '../icons';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Prediction-Market Aggregation Agent',
      description: 'Built a multi-agent pipeline for prediction-market data; achieved 85%+ accuracy & 95% reliability. Integrated RAG-based assistant for natural language queries.',
      highlights: ['Multi-agent pipeline', '85%+ accuracy', 'RAG assistant'],
      github: 'https://github.com/Prithwis-AIAgent/Prediction-Market-AggregationAgent-system'
    },
    {
      title: 'Sidekick Personal Co-Worker (Nero)',
      description: 'AI-powered personal assistant with LangGraph + Gradio. Features web browsing, file management, Wikipedia integration, notifications, and auto browser cleanup.',
      highlights: ['LangGraph + Gradio', 'Personal Assistant', 'GPT-5 Nano Powered'],
      github: 'https://github.com/Prithwis-AIAgent/Personal_SideKick_Nero'
    },
    {
      title: 'ResumeReach AI',
      description: 'AI automation system for personalized job applications. Generates tailored cover letters, emails & follow-ups with analytics and cost optimization.',
      highlights: ['AI Automation', 'Personalized Applications', 'Analytics & Cost Optimization'],
      github: 'https://github.com/Prithwis-AIAgent/ResumeReach_AI'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A selection of my work in AI and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out border border-gray-200 dark:border-gray-700 flex flex-col group hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View on GitHub
                    <ExternalLinkIcon className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;