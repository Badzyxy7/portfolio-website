'use client';

import React from 'react';
import { Code, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <div className="space-y-4 md:space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={`text-2xl md:text-3xl font-bold mb-3 md:mb-4 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
          About Me
        </h2>
        
        {/* About Me Description - Compact */}
        <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-6 ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
          <p className={`text-sm md:text-base leading-relaxed mb-2 md:mb-3 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            I'm an aspiring front-end developer, web developer, and graphic designer from the Philippines, currently pursuing my Bachelor of Science in Information Technology at STI College Alabang. I'm passionate about creating intuitive and visually appealing digital experiences that solve real-world problems.
          </p>
          <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            Throughout my studies, I've developed practical applications including an eBorrow Management System for Barangay Alabang, a Parking Management System, and professional landing pages for businesses. I continuously expand my skills in modern web technologies while exploring opportunities in content creation and affiliate marketing.
          </p>
        </div>

        {/* Skills & Experience - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          {/* Technical Skills */}
          <div className={`p-4 md:p-5 rounded-xl md:rounded-2xl ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
            <div className="flex items-center gap-2 mb-3">
              <Code size={18} className={`md:w-5 md:h-5 ${isDark ? 'text-dark-primary' : 'text-light-primary'}`} />
              <h3 className={`text-base md:text-lg font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                Technical Skills
              </h3>
            </div>
            <ul className={`space-y-1.5 text-xs md:text-sm ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
              <li>• C# & Windows Forms Development</li>
              <li>• React, Next.js & JavaScript</li>
              <li>• MySQL & Supabase</li>
              <li>• UI/UX Design & Prototyping</li>
              <li>• Tailwind CSS & Responsive Design</li>
            </ul>
          </div>

          {/* Experience */}
          <div className={`p-4 md:p-5 rounded-xl md:rounded-2xl ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={18} className={`md:w-5 md:h-5 ${isDark ? 'text-dark-primary' : 'text-light-primary'}`} />
              <h3 className={`text-base md:text-lg font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                Experience
              </h3>
            </div>
            <div className={`space-y-2.5 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
              <div>
                <p className="font-semibold text-xs md:text-sm">TikTok Affiliate Marketer</p>
                <p className={`text-[10px] md:text-xs ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                  2024 - Present
                </p>
                <p className="text-xs md:text-sm mt-0.5">
                  Creating engaging content and promoting products through social media platforms
                </p>
              </div>
              <div>
                <p className="font-semibold text-xs md:text-sm">Freelance Developer & Designer</p>
                <p className={`text-[10px] md:text-xs ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                  2023 - Present
                </p>
                <p className="text-xs md:text-sm mt-0.5">
                  Building web applications and designing digital solutions for clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Interests - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          {/* Education */}
          <div className={`p-4 md:p-5 rounded-xl md:rounded-2xl ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap size={18} className={`md:w-5 md:h-5 ${isDark ? 'text-dark-primary' : 'text-light-primary'}`} />
              <h3 className={`text-base md:text-lg font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                Education
              </h3>
            </div>
            <p className={`${isDark ? 'text-dark-text' : 'text-light-text'} font-semibold text-xs md:text-sm`}>
              Bachelor of Science in Information Technology
            </p>
            <p className={`${isDark ? 'text-dark-secondary' : 'text-light-secondary'} text-xs md:text-sm`}>
              STI College Alabang
            </p>
            <p className={`text-[10px] md:text-xs ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
              2023 - 2027 (Expected)
            </p>
          </div>

          {/* Interests */}
          <div className={`p-4 md:p-5 rounded-xl md:rounded-2xl ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
            <div className="flex items-center gap-2 mb-3">
              <Heart size={18} className={`md:w-5 md:h-5 ${isDark ? 'text-dark-primary' : 'text-light-primary'}`} />
              <h3 className={`text-base md:text-lg font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                Interests
              </h3>
            </div>
            <ul className={`space-y-1.5 text-xs md:text-sm ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
              <li>• Software Development</li>
              <li>• Front-End Development</li>
              <li>• Gaming</li>
              <li>• Content Creation</li>
              <li>• Affiliate Marketing</li>
            </ul>
          </div>
        </div>

        {/* Tech Stack Section - Compact */}
        <div className={`p-4 md:p-5 rounded-xl md:rounded-2xl ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
          <h3 className={`text-base md:text-lg font-bold mb-3 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {['C#', 'React', 'Next.js', 'Tailwind CSS', 'MySQL', 'Supabase', 'Windows Forms', 'JavaScript', 'TypeScript', 'Git'].map(
              (tech) => (
                <span
                  key={tech}
                  className={`text-[10px] md:text-xs px-2.5 md:px-3 py-1 md:py-1.5 rounded-md md:rounded-lg font-medium ${
                    isDark ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'
                  }`}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
