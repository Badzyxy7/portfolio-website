'use client';

import React from 'react';
import { ExternalLink, Monitor } from 'lucide-react';
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
      description: 'Comprehensive web-based equipment borrowing management system for Barangay Alabang featuring equipment tracking, request management, approval workflows, return processing, and cancellation handling. The system streamlines the borrowing process with an intuitive interface for both residents and administrators.',
      tech: ['Php', 'Tailwind CSS', 'MySQL'],
      link: 'https://eborrow.infinityfree.me/index.php',
      image: '/images/projects/eborrow.png',
    },
    {
      id: 2,
      title: 'ALD Concrete Products',
      type: 'web',
      category: 'WEB APPLICATION',
      description: 'Professional business website for ALD Concrete Products showcasing their construction materials and services. Features include a comprehensive product catalog, company profile, service offerings, and customer inquiry system. Built with modern web technologies for optimal performance and user experience.',
      tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
      link: 'https://ald-concrete-products.vercel.app/',
      image: '/images/projects/ald.png',
    },
    {
      id: 3,
      title: 'Parking Management System',
      type: 'winforms',
      category: 'DESKTOP APPLICATION',
      description: 'Desktop application for comprehensive parking lot management featuring vehicle check-in and check-out processing, real-time parking space availability tracking, automated billing calculations, and detailed reporting. Designed to streamline parking operations with an efficient user interface.',
      tech: ['C#', 'Windows Forms', 'MySQL', '.NET Framework'],
      screenshots: [
        '/images/projects/pglogin.png',
        '/images/projects/pgdashboard.png',
        '/images/projects/pgcheckin.png',
        '/images/projects/pgcheckout.png',
      ],
      modules: ['Login Module', 'Dashboard Module', 'Check-In Module', 'Check-Out Module'],
    },
    {
      id: 4,
      title: 'TikTok Affiliate Landing Page',
      type: 'web',
      category: 'WEB APPLICATION',
      description: 'Eye-catching landing page specifically designed for TikTok affiliate marketing campaigns. Features engaging product presentations, compelling call-to-action elements, social proof sections, and seamless integration with social media platforms to maximize conversion rates.',
      tech: ['React'],
      link: 'https://badzyxy7.github.io/tiktok-landing-page/',
      image: '/images/projects/tt.png',
    },
    {
      id: 5,
      title: 'Equipment Borrowing System',
      type: 'winforms',
      category: 'DESKTOP APPLICATION',
      description: 'Windows desktop application for managing equipment loans and rentals. Features comprehensive user profile management, detailed borrowing history tracking, real-time equipment status monitoring, return processing, and overdue notifications. Streamlines equipment inventory and borrowing operations.',
      tech: ['C#', 'Windows Forms', 'MySQL', '.NET Framework'],
      screenshots: [
        '/images/projects/eqlogin.png',
        '/images/projects/eqdashboard.png',
        '/images/projects/eqprofile.png',
        '/images/projects/eqborrowhistory.png',
      ],
      modules: ['Login Module', 'Dashboard Module', 'User Profile Module', 'Borrow History Module'],
    },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
          My Projects
        </h2>

        {/* Mobile: 2 columns | Desktop: 1 column */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 md:p-6 rounded-xl md:rounded-2xl neo-card ${
                isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-3 md:mb-4">
                <span
                  className={`text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-md md:rounded-lg font-medium ${
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
                    className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-all text-xs md:text-sm ${
                      isDark
                        ? 'bg-dark-bg text-dark-primary hover:bg-dark-primary hover:text-white'
                        : 'bg-light-bg text-light-primary hover:bg-light-primary hover:text-white'
                    }`}
                  >
                    <ExternalLink size={14} className="md:w-4 md:h-4" />
                    <span className="font-medium">Visit Site</span>
                  </a>
                )}
              </div>

              <h3 className={`text-lg md:text-2xl font-bold mb-2 md:mb-3 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                {project.title}
              </h3>

              <p className={`mb-3 md:mb-4 text-xs md:text-sm line-clamp-3 md:line-clamp-none ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-[10px] md:text-sm px-2 md:px-3 py-0.5 md:py-1 rounded-md md:rounded-lg ${
                      isDark ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* WEB APP IMAGE */}
              {project.type === 'web' && project.image && (
                <div className={`rounded-lg md:rounded-xl overflow-hidden ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 md:h-64 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="h-40 sm:h-48 md:h-64 flex items-center justify-center">
                            <div class="text-center">
                              <svg class="mx-auto mb-2 w-12 h-12 md:w-16 md:h-16 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                              </svg>
                              <p class="text-xs md:text-sm ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}">Image not found</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              )}

              {/* WINFORMS MODULE SCREENSHOTS - 2 per row on mobile */}
              {project.type === 'winforms' && project.screenshots && (
                <div>
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <Monitor size={16} className={`md:w-5 md:h-5 ${isDark ? 'text-dark-primary' : 'text-light-primary'}`} />
                    <h4 className={`font-semibold text-sm md:text-base ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                      Application Modules
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {project.screenshots.map((screenshot, i) => (
                      <div key={i} className={`rounded-lg md:rounded-xl overflow-hidden ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
                        <img
                          src={screenshot}
                          alt={`${project.title} - ${project.modules?.[i] || `Module ${i + 1}`}`}
                          className="w-full h-24 sm:h-32 md:h-48 object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="h-24 sm:h-32 md:h-48 flex items-center justify-center">
                                  <div class="text-center px-2">
                                    <svg class="mx-auto mb-1 md:mb-2 w-8 h-8 md:w-12 md:h-12 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                                    </svg>
                                    <p class="text-[10px] md:text-sm font-medium ${isDark ? 'text-dark-text' : 'text-light-text'}">${project.modules?.[i] || `Module ${i + 1}`}</p>
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
