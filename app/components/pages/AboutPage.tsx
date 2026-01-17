'use client';

import React from 'react';
import { Code, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
          About Me
        </h2>
        
        <div className={`p-8 rounded-2xl mb-8 ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            I'm a passionate web developer and graphic designer from the Philippines, currently pursuing my degree in Hotel and Restaurant Management at STI College Alabang. I blend my hospitality background with technical expertise to create user-centric digital solutions.
          </p>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            As a business owner of a PisoNet Computer Cafe, I've developed custom management systems that streamline operations and enhance customer experience. I specialize in full-stack development with C#, React, and Next.js, creating both web and desktop applications.
          </p>
        </div>

        {/* Skills & Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className={`p-6 rounded-2xl ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
            <div className="flex items-center gap-3 mb-4">
              <Code size={24} className={isDark ? 'text-dark-primary' : 'text-light-primary'} />
              <h3 className={`text-xl font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                Technical Skills
              </h3>
            </div>
            <ul className={`space-y-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
              <li>• C# & Windows Forms Development</li>
              <li>• React, Next.js & JavaScript</li>
              <li>• MySQL & Database Design</li>
              <li>• UI/UX Design & Prototyping</li>
              <li>• Tailwind CSS & Responsive Design</li>
            </ul>
          </div>

          <div className={`p-6 rounded-2xl ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase size={24} className={isDark ? 'text-dark-primary' : 'text-light-primary'} />
              <h3 className={`text-xl font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                Experience
              </h3>
            </div>
            <ul className={`space-y-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
              <li>• Business Owner - PisoNet Cafe</li>
              <li>• Freelance Web Developer</li>
              <li>• UI/UX Designer</li>
              <li>• Social Media Content Creator</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-2xl ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={24} className={isDark ? 'text-dark-primary' : 'text-light-primary'} />
              <h3 className={`text-xl font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                Education
              </h3>
            </div>
            <p className={`${isDark ? 'text-dark-text' : 'text-light-text'} font-semibold`}>
              Bachelor of Science in Hotel and Restaurant Management
            </p>
            <p className={`${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
              STI College Alabang
            </p>
            <p className={`text-sm ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
              2021 - 2026 (Expected)
            </p>
          </div>

          <div className={`p-6 rounded-2xl ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
            <div className="flex items-center gap-3 mb-4">
              <Heart size={24} className={isDark ? 'text-dark-primary' : 'text-light-primary'} />
              <h3 className={`text-xl font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                Interests
              </h3>
            </div>
            <ul className={`space-y-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
              <li>• Software Development</li>
              <li>• Business Management</li>
              <li>• Digital Design</li>
              <li>• Gaming & Content Creation</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
