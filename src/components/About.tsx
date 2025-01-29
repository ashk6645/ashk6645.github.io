import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('Skills');

  const tabContent = {
    Skills: ['Object-Oriented Programming', 'Web Development', 'Problem Solving', 'Algorithm Design'],
    Interests: ['Web Development', 'AI/ML', 'Open Source Contributions', 'Tech Blogging'],
    Education: ['Computer Science and Engineering'],
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <div className="relative group">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFKBO3aYx_mwA/profile-displayphoto-shrink_400_400/B56ZNx9JAWGcAg-/0/1732783674469?e=1740614400&v=beta&t=XDSjBKAzMSUGjPxjPs9b9HsucV1TBNhVay7h-uDpgd4"
              alt="Profile"
              className="rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-2xl"
            />
            <div className="absolute inset-0 flex justify-center items-center ">
           
            </div>
          </div>

          {/* About Text */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">About Me</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                A passionate developer building scalable and user-friendly applications.
            </p>

            {/* Tab Buttons */}
            <div className="flex space-x-6 mb-6">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 
                    ${activeTab === tab
                      ? 'bg-rose-500 text-white shadow-xl'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r p-6 rounded-lg shadow-lg border border-gray-200"
              // className="bg-gradient-to-r from-blue-50 to-white"
            >
              <ul className="space-y-3">
                {tabContent[activeTab as keyof typeof tabContent].map((item, index) => (
                  <li key={index} className="text-gray-600 text-lg">
                    <span className="text-rose-500 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
