'use client';

import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';

export default function DesignsPage() {
  const { isDark } = useTheme();

  const designs = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'BRANDING',
      description: 'Complete brand identity package for ALD Concrete Products featuring professional logo design, product showcase imagery highlighting quality, durability, and performance standards.',
      image: '/images/designs/A.L.D CONCRETE PRODUCTS.png',
    },
    {
      id: 2,
      title: 'Social Media Graphics',
      category: 'MARKETING',
      description: 'Engaging seasonal social media post design for ALD Concrete Products featuring festive Christmas greetings with branded visuals and product imagery to boost social media presence.',
      image: '/images/designs/A.L.D CONCRETE PRODUCTS3.png',
    },
    {
      id: 3,
      title: 'Poster Design',
      category: 'BRANDING',
      description: 'Professional product poster design showcasing ALD Concrete Products catalog including concrete pipes and construction materials with emphasis on durability and performance features.',
      image: '/images/designs/A.L.D CONCRETE PRODUCTS 2 .png',
    },
    {
      id: 4,
      title: 'Website Makeover',
      category: 'WEB DESIGN',
      description: 'Comprehensive website redesign and UI/UX improvement for ALD Concrete Products featuring modern layout, product galleries, specifications, and enhanced user navigation experience.',
      image: '/images/designs/aldfigma.jpg',
    },
    {
      id: 5,
      title: 'Clothing UI Design',
      category: 'WEB DESIGN',
      description: 'Modern e-commerce clothing website interface design with clean product displays, size selection, shopping cart functionality, and streamlined checkout process for optimal user experience.',
      image: '/images/designs/figma1.jpg',
    },
    {
      id: 6,
      title: 'Shoe Store Design',
      category: 'WEB DESIGN',
      description: 'Sleek and responsive shoe store website mockup featuring multi-brand showcases, intuitive navigation, product filtering, and modern dark-themed interface for enhanced shopping experience.',
      image: '/images/designs/figma2.jpg',
    },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
          Design Portfolio
        </h2>

        {/* Mobile: 2 columns | Tablet: 2 columns | Desktop: 3 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl md:rounded-2xl overflow-hidden neo-card ${
                isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
              }`}
            >
              <div className={`h-32 sm:h-40 md:h-48 overflow-hidden ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="h-32 sm:h-40 md:h-48 flex items-center justify-center">
                          <div class="text-center">
                            <svg class="mx-auto mb-1 md:mb-2 w-8 h-8 md:w-16 md:h-16 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <p class="text-xs ${isDark ? 'text-dark-secondary' : 'text-light-secondary'} hidden md:block">Add design image</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              <div className="p-3 md:p-6">
                <span
                  className={`text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-md md:rounded-lg font-medium ${
                    isDark ? 'bg-dark-primary text-white' : 'bg-light-primary text-white'
                  }`}
                >
                  {design.category}
                </span>
                <h3 className={`text-sm md:text-xl font-bold mt-2 md:mt-3 mb-1 md:mb-2 line-clamp-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                  {design.title}
                </h3>
                <p className={`text-xs md:text-sm line-clamp-2 md:line-clamp-3 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                  {design.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={`mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl text-center ${
          isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
        }`}>
          <Palette size={32} className={`md:w-12 md:h-12 mx-auto mb-2 md:mb-4 ${isDark ? 'text-dark-primary' : 'text-light-primary'}`} />
          <p className={`text-sm md:text-lg ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            More design works coming soon...
          </p>
        </div>
      </motion.div>
    </div>
  );
}
