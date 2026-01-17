'use client';

import React, { useState } from 'react';
import { Award, Briefcase, Palette, ChevronRight, ChevronLeft } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const { isDark } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { icon: Award, label: 'Experience', value: '0', color: '#4a90e2' },
    { icon: Award, label: 'Certificates', value: '10', color: '#f39c12' },
    { icon: Briefcase, label: 'Projects', value: '5', color: '#2ecc71' },
    { icon: Palette, label: 'Designs', value: '6', color: '#e74c3c' },
  ];

  // Updated to match your actual projects
  const projects = [
    {
      id: 1,
      title: 'eBorrow System for Barangay Alabang',
      category: 'WEB APP',
      description: 'Comprehensive web-based eborrow management system for barangay alabang with comprehensive equipment tracking, request, approved, return, and cancel. Easy to use.',
      tech: ['Php', 'Tailwind CSS', 'MySQL'],
      image: '/images/projects/eborrow.png',
    },
    {
      id: 2,
      title: 'ALD Concrete Products',
      category: 'WEB APP',
      description: 'Interactive dashboard for tracking business metrics, sales data, and customer analytics.',
      tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
      image: '/images/projects/ald.png',
    },
    {
      id: 3,
      title: 'Parking Management System',
      category: 'WINFORMS',
      description: 'Desktop application for parking management with check-in/check-out features.',
      tech: ['C#', 'Windows Forms', 'MySQL', '.NET Framework'],
      image: '/images/projects/pgdashboard.png',
    },
    {
      id: 4,
      title: 'TikTok Affiliate Landing Page',
      category: 'WEB APP',
      description: 'Self-service portal for customers with booking and payment features.',
      tech: ['React'],
      image: '/images/projects/tt.png',
    },
    {
      id: 5,
      title: 'Equipment Borrowing System',
      category: 'WINFORMS',
      description: 'Equipment management system with borrowing history tracking.',
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
    <div className="space-y-8">
      {/* Stats Cards */}
      <div>
        <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
          Career Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl neo-card ${
                  isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon size={24} style={{ color: stat.color }} />
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                      {stat.label}
                    </p>
                    <p className={`text-3xl font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                      {stat.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Featured Projects */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            Featured Projects
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className={`p-3 rounded-xl transition-all ${
                isDark
                  ? 'bg-dark-surface shadow-neo-dark hover:shadow-neo-dark-inset'
                  : 'bg-light-surface shadow-neo-light hover:shadow-neo-light-inset'
              }`}
            >
              <ChevronLeft size={20} className={isDark ? 'text-dark-text' : 'text-light-text'} />
            </button>
            <button
              onClick={nextSlide}
              className={`p-3 rounded-xl transition-all ${
                isDark
                  ? 'bg-dark-surface shadow-neo-dark hover:shadow-neo-dark-inset'
                  : 'bg-light-surface shadow-neo-light hover:shadow-neo-light-inset'
              }`}
            >
              <ChevronRight size={20} className={isDark ? 'text-dark-text' : 'text-light-text'} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {projects.slice(currentSlide, currentSlide + 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl cursor-pointer neo-card ${
                  isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
                }`}
              >
                <div className={`mb-4 rounded-xl overflow-hidden ${
                  isDark ? 'bg-dark-bg' : 'bg-light-bg'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="h-48 flex items-center justify-center">
                            <div class="text-center">
                              <svg class="mx-auto mb-2 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                              </svg>
                              <p class="text-sm ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}">Add project screenshot</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-lg font-medium ${
                      isDark ? 'bg-dark-primary text-white' : 'bg-light-primary text-white'
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                  {project.description} 
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded ${
                        isDark ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
