import React from 'react';
import { BriefcaseIcon, AwardIcon, GraduationCapIcon, DownloadIcon } from '../icons';

const ResumeSection = () => {
  const resumeUrl = '/Prithwis_Das_AI_Resume1.pdf';

  const timeline = [
    {
      icon: <BriefcaseIcon className="w-6 h-6 text-white" />,
      bgColor: 'bg-blue-500',
      date: 'Present',
      title: 'Key Open-Source Projects',
      description: 'Developing impactful agentic systems for market prediction, personal assistance (Nero), and automated job applications (ResumeReach AI).'
    },
    {
      icon: <AwardIcon className="w-6 h-6 text-white" />,
      bgColor: 'bg-green-500',
      date: '2024',
      title: 'Specialized Certifications',
      description: 'Completed advanced certifications in "Generative AI Mastermind" and "Agentic AI Engineering" to deepen expertise.'
    },
    {
      icon: <GraduationCapIcon className="w-6 h-6 text-white" />,
      bgColor: 'bg-purple-500',
      date: '2022 - 2025',
      title: 'Bachelor of Computer Applications',
      description: 'Pursuing BCA at JIS University, West Bengal, with a current CGPA of 8.61/10.'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Professional Journey
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            A snapshot of my academic and project milestones. For full details, please download my resume.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Timeline */}
          <div>
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700">
              {timeline.map((item, index) => (
                <div key={index} className="mb-10 ml-8">
                  <span className={`absolute -left-4 flex items-center justify-center w-8 h-8 ${item.bgColor} rounded-full ring-8 ring-white dark:ring-gray-900`}>
                    {item.icon}
                  </span>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {item.date}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: CTA */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ready for the Full Story?
            </h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              My resume contains a comprehensive look at my technical skills, project architecture, and professional achievements.
            </p>
            <a
              href={resumeUrl}
              download="Prithwis Das AI Resume.pdf"
              className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
            >
              <DownloadIcon className="w-5 h-5" />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;