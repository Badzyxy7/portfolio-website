'use client';

import React from 'react';
import { Award, Star } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';

export default function AchievementsPage() {
  const { isDark } = useTheme();

  const achievements = [
    {
      title: 'Entrepreneurship Certificate',
      issuer: 'Business Development Organization',
      date: '2024',
      description: 'Completed comprehensive training in business management and entrepreneurship',
    },
    {
      title: 'Web Development Bootcamp',
      issuer: 'Online Learning Platform',
      date: '2023',
      description: 'Full-stack web development certification with React and Node.js',
    },
    {
      title: 'UI/UX Design Fundamentals',
      issuer: 'Design Academy',
      date: '2023',
      description: 'Professional certification in user interface and experience design',
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
          Achievements & Certificates
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl neo-card ${
                isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${isDark ? '#4a90e2' : '#4a90e2'}20` }}
                >
                  <Award size={24} style={{ color: '#4a90e2' }} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                    {achievement.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={16} className={isDark ? 'text-dark-secondary' : 'text-light-secondary'} />
                    <span className={`text-sm ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                      {achievement.issuer}
                    </span>
                  </div>
                  <p className={`text-sm mb-2 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                    {achievement.date}
                  </p>
                  <p className={`${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={`mt-8 p-6 rounded-2xl text-center ${
          isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
        }`}>
          <p className={`text-lg ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            More achievements and certificates coming soon...
          </p>
        </div>
      </motion.div>
    </div>
  );
}
