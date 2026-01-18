'use client';

import React, { useState } from 'react';
import { Award, Briefcase, Palette, ChevronRight, ChevronLeft, User } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

type HomePageProps = {
  setActiveTab: (tab: string) => void;
};

export default function HomePage({ setActiveTab }: HomePageProps) {
  const { isDark } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { 
      icon: User, 
      label: 'Experience', 
      value: '0', 
      color: '#4a90e2',
      link: 'about'
    },
    { 
      icon: Award, 
      label: 'Certificates', 
      value: '1', 
      color: '#f39c12',
      link: 'achievements'
    },
    { 
      icon: Briefcase, 
      label: 'Projects', 
      value: '5', 
      color: '#2ecc71',
      link: 'projects'
    },
    { 
      icon: Palette, 
      label: 'Designs', 
      value: '6', 
      color: '#e74c3c',
      link: 'designs'
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'eBorrow System for Barangay Alabang',
      category: 'WEB APP',
      description: 'Comprehensive web-based equipment borrowing management system for Barangay Alabang with tracking, request approvals, returns, and cancellations.',
      tech: ['Php', 'Tailwind CSS', 'MySQL'],
      image: '/images/projects/eborrow.png',
    },
    {
      id: 2,
      title: 'ALD Concrete Products',
      category: 'WEB APP',
      description: 'Professional business website for ALD Concrete Products featuring product catalog, company information, and customer inquiry system.',
      tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
      image: '/images/projects/ald.png',
    },
    {
      id: 3,
      title: 'Parking Management System',
      category: 'WINFORMS',
      description: 'Desktop application for managing parking spaces with vehicle check-in/check-out, real-time availability tracking, and automated billing.',
      tech: ['C#', 'Windows Forms', 'MySQL', '.NET Framework'],
      image: '/images/projects/pgdashboard.png',
    },
    {
      id: 4,
      title: 'TikTok Affiliate Landing Page',
      category: 'WEB APP',
      description: 'Engaging landing page designed for TikTok affiliate marketing with product showcases, call-to-action buttons, and social media integration.',
      tech: ['React'],
      image: '/images/projects/tt.png',
    },
    {
      id: 5,
      title: 'Equipment Borrowing System',
      category: 'WINFORMS',
      description: 'Windows desktop application for managing equipment loans with user profiles, borrowing history, status tracking, and return management.',
      tech: ['C#', 'Windows Forms', 'MySQL', '.NET Framework'],
      image: '/images/projects/eqdashboard.png',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2 >= projects.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 < 0 ? Math.max(0, projects.length - 2) : prev - 2));
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Stats Cards */}
      <div>
        <h2 className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
          Career Stats
        </h2>
        {/* Mobile: 1 column with horizontal cards | Tablet: 2 columns | Desktop: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(stat.link)}
                className={`p-4 md:p-6 rounded-xl md:rounded-2xl neo-card cursor-pointer ${
                  isDark ? 'bg-dark-surface shadow-neo-dark hover:shadow-neo-dark-inset' : 'bg-light-surface shadow-neo-light hover:shadow-neo-light-inset'
                }`}
              >
                {/* Horizontal layout: Icon and text side-by-side */}
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className="p-2 md:p-3 rounded-lg md:rounded-xl flex-shrink-0"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon size={20} style={{ color: stat.color }} className="md:w-6 md:h-6" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className={`text-xs md:text-sm truncate ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                      {stat.label}
                    </p>
                    <p className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                      {stat.value}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Featured Projects */}
      <div>
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            Featured Projects
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className={`p-2 md:p-3 rounded-lg md:rounded-xl transition-all ${
                isDark
                  ? 'bg-dark-surface shadow-neo-dark hover:shadow-neo-dark-inset'
                  : 'bg-light-surface shadow-neo-light hover:shadow-neo-light-inset'
              }`}
            >
              <ChevronLeft size={16} className="md:w-5 md:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className={`p-2 md:p-3 rounded-lg md:rounded-xl transition-all ${
                isDark
                  ? 'bg-dark-surface shadow-neo-dark hover:shadow-neo-dark-inset'
                  : 'bg-light-surface shadow-neo-light hover:shadow-neo-light-inset'
              }`}
            >
              <ChevronRight size={16} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Mobile: 2 columns | Desktop: 2 columns */}
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <AnimatePresence mode="wait">
            {projects.slice(currentSlide, currentSlide + 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveTab('projects')}
                className={`p-3 md:p-6 rounded-xl md:rounded-2xl cursor-pointer neo-card ${
                  isDark ? 'bg-dark-surface shadow-neo-dark hover:shadow-neo-dark-inset' : 'bg-light-surface shadow-neo-light hover:shadow-neo-light-inset'
                }`}
              >
                <div className={`mb-3 md:mb-4 rounded-lg md:rounded-xl overflow-hidden ${
                  isDark ? 'bg-dark-bg' : 'bg-light-bg'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-24 sm:h-32 md:h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="h-24 sm:h-32 md:h-48 flex items-center justify-center">
                            <div class="text-center">
                              <svg class="mx-auto mb-1 md:mb-2 w-8 h-8 md:w-12 md:h-12 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                              </svg>
                              <p class="text-xs ${isDark ? 'text-dark-secondary' : 'text-light-secondary'} hidden md:block">Add screenshot</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <span
                    className={`text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-md md:rounded-lg font-medium ${
                      isDark ? 'bg-dark-primary text-white' : 'bg-light-primary text-white'
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className={`text-sm md:text-xl font-bold mb-1 md:mb-2 line-clamp-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                  {project.title}
                </h3>
                <p className={`text-xs md:text-sm mb-2 md:mb-4 line-clamp-2 hidden sm:block ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <span
                      key={i}
                      className={`text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded ${
                        isDark ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 2 && (
                    <span className={`text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                      +{project.tech.length - 2}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
