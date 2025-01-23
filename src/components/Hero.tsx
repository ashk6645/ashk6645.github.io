import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi! I'm <span className="text-rose-500">Ashutosh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Welcome to my portfolio
          </p>
          <div className="flex justify-center space-x-6">
            <SocialLink href="https://github.com/ashk6645" icon={<Github />} />
            <SocialLink href="https://linkedin.com/" icon={<Linkedin />} />
            <SocialLink href="mailto:your.email@example.com" icon={<Mail />} />
            <SocialLink href="https://twitter.com/" icon={<Twitter />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
  >
    {icon}
  </motion.a>
);