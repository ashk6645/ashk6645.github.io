// import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600">Here’s a glimpse of my journey in the tech world and the impact I've made.</p>
        </div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r rounded-xl shadow-2xl p-8 space-y-8"
        >
          {/* Job Details */}
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 text-rose-500">
              <Briefcase className="w-12 h-12" />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="text-3xl font-semibold text-gray-800">Software Engineering Intern</h3>
                <span className="text-gray-500 text-lg">(May 2023 - September 2023)</span>
              </div>
              <div className="flex justify-center mb-6">
                <img
                  src="https://s3-symbol-logo.tradingview.com/intel--600.png"
                  alt="Intel"
                  className="h-16 transition-transform transform hover:scale-110 duration-300"
                />
              </div>

              {/* Job Responsibilities */}
              <ul className="space-y-5 text-gray-600 text-lg">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="flex items-start space-x-2"
                >
                  <span className="text-rose-500">•</span>
                  <p>
                    Developed cutting-edge Accident Location software for Indian roads in Python, resulting in a 15% increase in the accuracy of location prediction.
                  </p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex items-start space-x-2"
                >
                  <span className="text-rose-500">•</span>
                  <p>
                    Integrated Google Map API and OpenStreetMap for precise location predictions, improving prediction accuracy by 20%.
                  </p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="flex items-start space-x-2"
                >
                  <span className="text-rose-500">•</span>
                  <p>
                    Applied advanced Machine Learning with PyTorch and Scikit-learn, leading to model enhancement and optimized data preprocessing using Matplotlib, NumPy, and Pandas, resulting in 30% improvement in insights extraction efficiency.
                  </p>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
