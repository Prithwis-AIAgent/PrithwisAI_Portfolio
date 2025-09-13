import React from 'react';
import { CodeIcon, BrainCircuitIcon, BotIcon, ServerCogIcon } from '../icons';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming & Tools',
      icon: <CodeIcon className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" />,
      skills: ['Python', 'C/C++', 'Git', 'Pandas', 'NumPy', 'TensorFlow', 'Scikit-Learn']
    },
    {
      title: 'AI & Machine Learning',
      icon: <BrainCircuitIcon className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" />,
      skills: ['Machine Learning', 'NLP', 'ML Pipelines', 'RAG', 'SVM', 'Random Forest', 'XGBoost']
    },
    {
      title: 'Agentic AI & LLMs',
      icon: <BotIcon className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" />,
      skills: ['LangChain', 'CrewAI', 'LiteLLM', 'OpenAI API', 'LLM', 'Prompt Engineering']
    },
    {
      title: 'Systems & Infrastructure',
      icon: <ServerCogIcon className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" />,
      skills: ['Distributed Computing', 'Data Pipelines', 'Cloud Deployment', 'Google Cloud', 'Logging & Monitoring']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Core Competencies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            I leverage a modern tech stack to build intelligent, scalable, and robust AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-500/20 hover:shadow-xl"
            >
              {category.icon}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;