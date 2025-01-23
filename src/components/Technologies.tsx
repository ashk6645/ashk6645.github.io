// import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, GitBranch, Database, Terminal } from 'lucide-react';

export const Technologies = () => {
  const technologies = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Programming Languages',
      description: 'Experience with C/C++, Java, Python, and JavaScript',
      link: 'https://www.w3schools.com/',
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: 'Front-End Dev',
      description: 'Experience with HTML, CSS, and JavaScript',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer',
    },
    {
      icon: <GitBranch className="w-10 h-10" />,
      title: 'Version Control',
      description: 'Experience with Git and GitHub',
      link: 'https://www.codecademy.com/learn/learn-git',
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Database',
      description: 'Experience with SQL',
      link: 'https://aws.amazon.com/what-is/sql/',
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Frameworks',
      description: 'Experience with React and Next.js',
      link: 'https://nextjs.org/learn/react-foundations/what-is-react-and-nextjs',
    },
    {
      icon: <Terminal className="w-10 h-10" />,
      title: 'Coding Workspace',
      description: 'Experience with IntelliJ IDEA and VS-Code',
      link: 'https://www.jetbrains.com/idea/',
    },
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Technologies</h2>
          <p className="text-xl text-gray-600">
            Welcome! I bring a wealth of expertise in an array of programming languages and technical skills.
          </p>
        </div>

        {/* Grid of Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ icon, title, description, link, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-r p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-out"
    >
      {/* Icon */}
      <div className="text-rose-500 mb-6 flex justify-center">{icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 text-center">{description}</p>

      {/* Learn More Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-rose-500 hover:text-rose-600 text-lg font-medium text-center inline-block transition-colors"
      >
        Learn more →
      </a>
    </motion.div>
  );
};
