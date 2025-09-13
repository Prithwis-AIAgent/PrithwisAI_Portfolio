import React from 'react';
import { GithubIcon, LinkedinIcon } from '../icons';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f633,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f622,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tighter">
              Prithwis Das
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
              AI Engineer & Software Agentic Systems Developer
            </p>
            <div className="max-w-2xl mx-auto lg:mx-0 mt-8">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Versatile AI engineer specialized in Large Language Models, distributed agentic systems, and scalable AI pipelines. Skilled in Python, TensorFlow, LangChain, and deployment.
              </p>
            </div>
            <div className="mt-10 flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/Prithwis-AIAgent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <GithubIcon className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/prithwis-das-8b4a79326"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <LinkedinIcon className="w-8 h-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src="/profile-picture.jpg"
                alt="Prithwis Das - AI Engineer"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;