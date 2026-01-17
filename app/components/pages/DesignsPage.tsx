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
      description: 'Complete brand identity package including logo, color palette, and style guide.',
      // ⬇️ PUT YOUR DESIGN IMAGE HERE ⬇️
      image: '/images/designs/A.L.D CONCRETE PRODUCTS.png',
    },
    {
      id: 2,
      title: 'Social Media Graphics',
      category: 'MARKETING',
      description: 'Engaging social media posts and stories for business promotion.',
      // ⬇️ PUT YOUR DESIGN IMAGE HERE ⬇️
      image: '/images/designs/A.L.D CONCRETE PRODUCTS3.png',
    },
    {
      id: 3,
      title: 'Poster Design',
      category: 'BRANDING',
      description: 'User interface designs for web and mobile applications.',
      // ⬇️ PUT YOUR DESIGN IMAGE HERE ⬇️
      image: '/images/designs/A.L.D CONCRETE PRODUCTS 2 .png',
    },
    {
      id: 4,
      title: 'Website Makeover',
      category: 'WEB DESIGN',
      description: 'Custom logo designs for businesses and personal brands.',
      // ⬇️ PUT YOUR DESIGN IMAGE HERE ⬇️
      image: '/images/designs/aldfigma.jpg',
    },
    {
      id: 5,
      title: 'Clothing UI Design',
      category: 'WEB DESIGN',
      description: 'Flyers, posters, and other print materials for events and marketing.',
      // ⬇️ PUT YOUR DESIGN IMAGE HERE ⬇️
      image: '/images/designs/figma1.jpg',
    },
    {
      id: 6,
      title: 'Shoe Store Design',
      category: 'WEB DESIGN',
      description: 'Modern and responsive website design mockups and prototypes.',
      // ⬇️ PUT YOUR DESIGN IMAGE HERE ⬇️
      image: '/images/designs/figma2.jpg',
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
          Design Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden neo-card ${
                isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
              }`}
            >
              <div className={`h-48 overflow-hidden ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
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
                        <div class="h-48 flex items-center justify-center">
                          <div class="text-center">
                            <svg class="mx-auto mb-2 ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}" width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <p class="text-sm ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}">Add design image</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              <div className="p-6">
                <span
                  className={`text-xs px-3 py-1 rounded-lg font-medium ${
                    isDark ? 'bg-dark-primary text-white' : 'bg-light-primary text-white'
                  }`}
                >
                  {design.category}
                </span>
                <h3 className={`text-xl font-bold mt-3 mb-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                  {design.title}
                </h3>
                <p className={`${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
                  {design.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={`mt-8 p-8 rounded-2xl text-center ${
          isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
        }`}>
          <Palette size={48} className={`mx-auto mb-4 ${isDark ? 'text-dark-primary' : 'text-light-primary'}`} />
          <p className={`text-lg ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            More design works coming soon...
          </p>
        </div>
      </motion.div>
    </div>
  );
}
