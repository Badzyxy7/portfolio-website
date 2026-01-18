'use client';

import React from 'react';
import { Award, Star, ExternalLink } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';

export default function AchievementsPage() {
  const { isDark } = useTheme();

  const achievements = [
    {
      title: 'Java Fundamentals',
      issuer: 'Oracle Academy',
      date: '2024',
      description: 'Successfully completed Java Programming Fundamentals certification covering core Java concepts, object-oriented programming, and software development principles.',
      certificateUrl: '/certificates/certificate.pdf',
    },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
          Achievements & Certificates
        </h2>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 md:p-6 rounded-xl md:rounded-2xl neo-card ${
                isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                <div
                  className="p-2 md:p-3 rounded-lg md:rounded-xl flex-shrink-0"
                  style={{ backgroundColor: `#4a90e220` }}
                >
                  <Award size={20} style={{ color: '#4a90e2' }} className="md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 md:gap-4 mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-base md:text-xl font-bold mb-1 md:mb-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-1 md:mb-2">
                        <Star size={14} className={`md:w-4 md:h-4 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`} />
                        <span className={`text-xs md:text-sm ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                          {achievement.issuer}
                        </span>
                      </div>
                      <p className={`text-xs md:text-sm mb-2 md:mb-3 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                        {achievement.date}
                      </p>
                    </div>
                    {achievement.certificateUrl && (
                      <a
                        href={achievement.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all whitespace-nowrap text-sm ${
                          isDark
                            ? 'bg-dark-primary text-white shadow-neo-dark hover:shadow-neo-dark-inset'
                            : 'bg-light-primary text-white shadow-neo-light hover:shadow-neo-light-inset'
                        }`}
                      >
                        <ExternalLink size={14} className="md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm font-medium">View Certificate</span>
                      </a>
                    )}
                  </div>
                  <p className={`text-xs md:text-sm ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={`mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl text-center ${
          isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
        }`}>
          <p className={`text-sm md:text-lg ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            More achievements and certificates coming soon...
          </p>
        </div>
      </motion.div>
    </div>
  );
}
