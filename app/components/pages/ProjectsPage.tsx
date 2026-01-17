'use client';

import React from 'react';
import { ExternalLink, Monitor, Briefcase } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const { isDark } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'eBorrow System for Barangay Alabang',
      type: 'web',
      category: 'WEB APPLICATION',
      description: 'Comprehensive web-based eborrow management system for barangay alabang with comprehensive equipment tracking, request, approved, return, and cancel. Easy to use.',
      tech: ['Php', 'Tailwind CSS', 'MySQL'],
      link: 'https://eborrow.infinityfree.me/index.php  ',
      // ⬇️ PUT YOUR WEB APP IMAGE HERE ⬇️
      image: '/images/projects/eborrow.png',
    },
    {
      id: 2,
      title: 'ALD Concrete Products',
      type: 'web',
      category: 'WEB APPLICATION',
      description: 'Interactive dashboard for tracking business metrics, sales data, and customer analytics with beautiful data visualizations.',
      tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
      link: 'https://ald-concrete-products.vercel.app/',
      // ⬇️ PUT YOUR WEB APP IMAGE HERE ⬇️
      image: '/images/projects/ald.png',
    },
    {
      id: 3,
      title: 'Parking Management System',
      type: 'winforms',
      category: 'DESKTOP APPLICATION',
      description: 'Windows Forms application for inventory tracking with barcode scanning, stock alerts, and comprehensive reporting features.',
      tech: ['C#', 'Windows Forms', 'MySQL', '.NET Framework'],
      // ⬇️ PUT YOUR MODULE SCREENSHOTS HERE ⬇️
      screenshots: [
        '/images/projects/pglogin.png',
        '/images/projects/pgdashboard.png',
        '/images/projects/pgcheckin.png',       
        '/images/projects/pgcheckout.png',
      ],
      modules: ['Login Module', 'Dashboard Module', 'Inventory Module', 'Reports Module'],
    },
    {
      id: 4,
      title: 'TikTok Affiliate Landing Page',
      type: 'web',
      category: 'WEB APPLICATION',
      description: 'Self-service customer portal with booking system, payment integration, and real-time status tracking.',
      tech: ['React'],
      link: 'https://badzyxy7.github.io/tiktok-landing-page/',
      // ⬇️ PUT YOUR WEB APP IMAGE HERE ⬇️
      image: '/images/projects/tt.png',
    },
    {
      id: 5,
      title: 'Equipment Borrowing System',
      type: 'winforms',
      category: 'DESKTOP APPLICATION',
      description: 'Full-featured POS system with transaction management, receipt printing, and sales reporting.',
      tech: ['C#', 'Windows Forms', 'MySQL', '.NET Framework'],
      // ⬇️ PUT YOUR MODULE SCREENSHOTS HERE ⬇️
      screenshots: [
        '/images/projects/eqlogin.png',     
        '/images/projects/eqdashboard.png',
        '/images/projects/eqprofile.png',
        '/images/projects/eqborrowhistory.png',
      ],
      modules: ['POS Main', 'Products Module', 'Transactions', 'Sales Reports'],
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
          My Projects
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl neo-card ${
                isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs px-3 py-1 rounded-lg font-medium ${
                    isDark ? 'bg-dark-primary text-white' : 'bg-light-primary text-white'
                  }`}
                >
                  {project.category}
                </span>
                {project.type === 'web' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isDark
                        ? 'bg-dark-bg text-dark-primary hover:bg-dark-primary hover:text-white'
                        : 'bg-light-bg text-light-primary hover:bg-light-primary hover:text-white'
                    }`}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Visit Site</span>
                  </a>
                )}
              </div>

              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                {project.title}
              </h3>

              <p className={`mb-4 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-sm px-3 py-1 rounded-lg ${
                      isDark ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* WEB APP IMAGE */}
              {project.type === 'web' && project.image && (
                <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="h-64 flex items-center justify-center">
                            <div class="text-center">
                              <svg class="mx-auto mb-2 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}" width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                              </svg>
                              <p class="text-sm ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}">Image not found</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              )}

              {/* WINFORMS MODULE SCREENSHOTS */}
              {project.type === 'winforms' && project.screenshots && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Monitor size={20} className={isDark ? 'text-dark-primary' : 'text-light-primary'} />
                    <h4 className={`font-semibold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                      Application Modules
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, i) => (
                      <div key={i} className={`rounded-xl overflow-hidden ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
                        <img
                          src={screenshot}
                          alt={`${project.title} - ${project.modules?.[i] || `Module ${i + 1}`}`}
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
                                      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                                    </svg>
                                    <p class="text-sm font-medium ${isDark ? 'text-dark-text' : 'text-light-text'}">${project.modules?.[i] || `Module ${i + 1}`}</p>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
